// 主应用逻辑

// 全局变量
let currentModel = null;
let currentRole = null;
let userIsLoggedIn = false;
let conversationHistory = [];
let currentRequestController = null; // 用于取消请求
let currentSortMethod = 'custom'; // 当前排序方法
let apiConfigLoaded = false; // 标记API配置是否已加载

// 配置信息
const config = {
    // 必应每日一图API
    bingImageUrl: 'https://bing.img.run/1920x1080.php',
    
    // 登录相关配置
    requireLoginForModels: [],
    
    // 认证信息(在Cloudflare Pages中可通过环境变量配置)
    auth: {
        username: '', // 将通过环境变量设置
        password: ''  // 将通过环境变量设置
    },
    
    // API端点 (在Cloudflare Pages中可通过环境变量配置)
    apiEndpoints: {
        openrouter: '', // 将通过环境变量设置
    },
    
    // 排序方式
    sortingMethods: {
        default: 'custom', // 默认使用自定义排序
        options: ['custom', 'date'] // 自定义排序或按日期排序
    },
};

// 初始化应用
function initializeApp() {
    console.log("初始化应用...");
    
    // 确保modelsConfig已加载
    if (typeof window.modelsConfig === 'undefined' || !window.modelsConfig.models) {
        console.error("模型配置未加载，无法初始化应用！");
        return;
    }
    
    // 初始化配置
    config.requireLoginForModels = window.modelsConfig.requireLoginForModels || [];
    
    // 初始化模型和角色
    currentModel = window.modelsConfig.models.find(m => m.id === 'qwen/qwen3-235b-a22b:free') || window.modelsConfig.models[0];
    
    // 如果roles不存在，则创建默认角色
    if (window.modelsConfig.roles) {
        currentRole = window.modelsConfig.roles[0];
    } else {
        // 创建默认助手角色
        currentRole = {
            id: 'assistant',
            name: '助手',
            avatar: 'images/AI/assistant.png',
            description: '一个有帮助的AI助手',
            prompt: '你是一个有帮助的AI助手，请用中文回答问题。'
        };
    }
    
    console.log("当前模型:", currentModel);
    
    // 添加事件监听器
    addEventListeners();
    
    // 加载必应每日一图
    loadBingDailyImage();
    
    // 渲染模型列表
    if (ui && ui.renderModels) {
        console.log("渲染模型列表...");
        ui.renderModels();
    } else {
        console.error("UI模块未加载，无法渲染模型列表！");
    }
    
    // 设置移动端UI
    if (ui && ui.setupMobileUI) {
        ui.setupMobileUI();
    }
    
    // 恢复会话
    restoreSessionFromLocalStorage();
    
    console.log("应用初始化完成");
}

// 选择模型
function selectModel(modelId) {
    if (!window.modelsConfig || !window.modelsConfig.models) {
        console.error("模型配置未加载，无法选择模型！");
        return;
    }
    
    const model = window.modelsConfig.models.find(m => m.id === modelId);
    if (!model) {
        console.error("找不到指定ID的模型:", modelId);
        return;
    }
    
    currentModel = model;
    console.log("已选择模型:", currentModel);
    
    // 更新UI
    document.querySelectorAll('.model-item').forEach(item => {
        item.classList.toggle('active', item.dataset.modelId === modelId);
    });
    
    // 保存到本地存储
    saveSessionToLocalStorage();
}

// 事件监听器
function addEventListeners() {
    console.log("添加事件监听器...");
    
    const elements = ui.elements;
    
    // 发送按钮点击事件
    if (elements.sendButton) {
        console.log("绑定发送按钮点击事件");
        // 移除可能存在的旧事件监听器
        elements.sendButton.removeEventListener('click', sendMessage);
        
        // 使用匿名函数包装sendMessage，防止引用问题
        const sendMessageHandler = function(e) {
            e.preventDefault();
            if (typeof sendMessage === 'function') {
                sendMessage();
            } else if (typeof window.app !== 'undefined' && typeof window.app.sendMessage === 'function') {
                window.app.sendMessage();
            } else {
                console.error("找不到sendMessage函数!");
            }
            return false;
        };
        
        // 添加新的事件监听器
        elements.sendButton.addEventListener('click', sendMessageHandler);
        
        // 确保按钮可点击
        elements.sendButton.disabled = false;
    } else {
        console.error("找不到发送按钮元素！");
    }
    
    // 输入框键盘事件
    if (elements.userInput) {
        elements.userInput.removeEventListener('keydown', null);
        elements.userInput.addEventListener('keydown', function(e) {
            // Alt+S 发送消息
            if (e.key === 's' && e.altKey) {
                e.preventDefault();
                sendMessage();
                return false;
            }
        });
    }
    
    // 清除聊天
    if (elements.clearChatButton) {
        elements.clearChatButton.removeEventListener('click', clearChat);
        elements.clearChatButton.addEventListener('click', clearChat);
    }
    
    // 登录按钮
    if (elements.loginButton) {
        elements.loginButton.removeEventListener('click', ui.showLoginModal);
        elements.loginButton.addEventListener('click', ui.showLoginModal);
    }
    
    // 登录表单提交
    if (elements.loginForm) {
        elements.loginForm.removeEventListener('submit', null);
        elements.loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
            return false;
        });
    }
    
    // 关闭模态框
    window.addEventListener('click', function(e) {
        if (e.target === elements.loginModal) {
            ui.hideLoginModal();
        }
    });
    
    // 输入框自动调整高度
    if (elements.userInput) {
        elements.userInput.removeEventListener('input', null);
        elements.userInput.addEventListener('input', function() {
            utils.autoResizeTextarea(elements.userInput);
        });
    }
    
    // 点击页面其他地方关闭提示框
    document.removeEventListener('click', null);
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.model-item') && !e.target.closest('#model-tooltip')) {
            if (ui.hideTooltip) ui.hideTooltip();
        }
    });
    
    // 模型搜索
    if (elements.modelSearch) {
        elements.modelSearch.removeEventListener('input', null);
        elements.modelSearch.addEventListener('input', function(e) {
            ui.renderModels(e.target.value);
        });
    }
    
    // 排序方式切换
    if (elements.sortToggle) {
        elements.sortToggle.removeEventListener('click', null);
        elements.sortToggle.addEventListener('click', function() {
            // 切换排序方式
            currentSortMethod = currentSortMethod === 'custom' ? 'date' : 'custom';
            elements.sortToggle.textContent = currentSortMethod === 'custom' ? '默认排序' : '时间排序';
            
            // 重新渲染模型列表
            ui.renderModels(elements.modelSearch ? elements.modelSearch.value : '');
        });
    }
    
    console.log("所有事件监听器添加完成");
}

// 发送消息
function sendMessage() {
    // 获取用户输入
    const userInput = ui.elements.userInput.value.trim();
    
    // 如果没有输入内容则不处理
    if (userInput === '') return;
    
    // 检查API配置是否已加载
    if (!apiConfigLoaded && currentModel.provider === 'openrouter') {
        utils.showToast('API配置未加载成功，无法发送请求。请刷新页面或检查网络连接。', 'error');
        return;
    }
    
    // 添加用户消息到聊天区域
    ui.addUserMessage(userInput);
    
    // 清空输入框
    ui.elements.userInput.value = '';
    if (utils && utils.autoResizeTextarea) {
        utils.autoResizeTextarea(ui.elements.userInput);
    }
    
    // 禁用输入框和发送按钮
    if (ui && ui.setInputState) {
        ui.setInputState(false);
    }
    
    // 调用AI
    sendRequestToAI(userInput);
}

// 发送请求到AI
async function sendRequestToAI(userMessage) {
    // 先检查网络连接
    if (!navigator.onLine) {
        ui.addAIMessage('错误: 网络连接已断开，请检查您的网络后重试', true);
        ui.setInputState(true);
        return;
    }
    
    // 创建等待指示器
    let waitingElement = null;
    
    try {
        // 创建AbortController用于取消请求
        currentRequestController = new AbortController();
        const signal = currentRequestController.signal;
        
        // 添加初始等待UI
        waitingElement = ui.addWaitingIndicator();
        
        // 构建消息历史
        const messages = buildMessagesForAPI();
        
        // 根据当前模型提供商选择API
        let response;
        try {
            switch(currentModel.provider) {
                case 'openrouter':
                    response = await callOpenRouter(messages, signal);
                    break;
                default:
                    throw new Error('不支持的模型提供商');
            }
        } catch (apiError) {
            console.error('API调用错误:', apiError);
            // 使用更友好的错误提示
            throw new Error(utils.getErrorMessage(apiError));
        }
        
        // 移除等待指示器
        if (waitingElement) {
            ui.removeWaitingIndicator(waitingElement);
            waitingElement = null;
        }
        
        // 显示回复
        if (response) {
            ui.addAIMessage(response);
        }
    } catch (error) {
        // 确保移除等待指示器
        if (waitingElement) {
            ui.removeWaitingIndicator(waitingElement);
            waitingElement = null;
        }
        
        if (error.name === 'AbortError') {
            console.log('请求已取消');
            ui.addSystemMessage('生成已取消');
        } else {
            console.error('AI请求错误:', error);
            
            // 添加错误消息重试按钮
            const errorMessage = typeof error === 'string' ? error : utils.getErrorMessage(error);
            ui.addAIMessage(errorMessage + '<br><button class="retry-button glass-button">重试</button>', true);
            
            // 绑定重试按钮事件
            setTimeout(() => {
                const retryButton = document.querySelector('.retry-button');
                if (retryButton) {
                    retryButton.onclick = function() {
                        // 移除当前错误消息
                        const errorMessage = retryButton.closest('.message');
                        if (errorMessage && errorMessage.parentNode) {
                            errorMessage.parentNode.removeChild(errorMessage);
                        }
                        // 重新发送请求
                        sendRequestToAI(userMessage);
                    };
                }
            }, 100);
        }
    } finally {
        // 恢复UI状态
        ui.setInputState(true);
        currentRequestController = null;
    }
}

// 取消生成
function cancelGeneration() {
    if (currentRequestController) {
        currentRequestController.abort();
    }
}

// 构建API消息
function buildMessagesForAPI() {
    // 构建完整的消息历史
    const messages = [];
    
    // 添加系统消息（角色提示）
    // 检查currentRole是否存在，如果不存在则使用默认提示
    const systemPrompt = (currentRole && currentRole.prompt) 
        ? currentRole.prompt 
        : '你是一个有帮助的AI助手，请用中文回答问题。';
    
    messages.push({
        role: 'system',
        content: systemPrompt
    });
    
    // 添加对话历史
    conversationHistory.forEach(msg => {
        messages.push(msg);
    });
    
    return messages;
}

// OpenRouter API调用
async function callOpenRouter(messages, signal) {
    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    
    try {
        // 检查网络连接
        if (!navigator.onLine) {
            throw new Error('网络连接已断开，请检查您的网络连接后重试');
        }
        
        // 检查API密钥是否配置
        if (!config.apiEndpoints.openrouter || config.apiEndpoints.openrouter.length < 10) {
            console.error('API密钥未正确配置:', config.apiEndpoints.openrouter);
            throw new Error('API密钥未正确配置，可能是环境变量未加载成功。请检查Cloudflare Pages的环境变量配置或联系管理员。');
        }
        
        console.log('使用API密钥：', config.apiEndpoints.openrouter.substring(0, 5) + '...[已隐藏]');
        
        // 准备请求头，确保所有字符都是有效的ASCII
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiEndpoints.openrouter}`,
            // 使用简单的ASCII字符
            'HTTP-Referer': encodeURI(window.location.origin),
            'X-Title': 'AI Chat Robot'
        };
        
        // 准备请求体
        const requestBody = {
            model: currentModel.apiConfig.model,
            messages: messages,
            temperature: currentModel.apiConfig.temperature,
            max_tokens: currentModel.apiConfig.max_tokens
        };
        
        // 添加超时
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('请求超时，请检查您的网络连接')), 30000)
        );
        
        // 发送请求（带超时）
        const fetchPromise = fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
            signal: signal,
            // 增加更多选项来提高稳定性
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow'
        });
        
        // 使用竞态Promise处理超时
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (!response.ok) {
            const errorData = await response.text().catch(() => '无法获取错误详情');
            console.error('API响应错误:', response.status, errorData);
            
            const error = new Error('OpenRouter API请求失败');
            error.status = response.status;
            error.details = errorData;
            throw error;
        }
        
        const data = await response.json();
        
        // 确保返回数据包含必要的字段
        if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('API返回了无效的响应格式');
        }
        
        return data.choices[0].message.content;
    } catch (error) {
        console.error('API调用错误:', error);
        
        // 提供更有用的错误信息
        if (error.name === 'AbortError') {
            throw new Error('请求被用户取消');
        } else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            throw new Error('网络请求失败，请检查您的网络连接或API终端配置');
        } else if (error.message.includes('timeout')) {
            throw new Error('请求超时，服务器没有在预期的时间内响应');
        } else if (error.message.includes('API密钥未正确配置')) {
            throw new Error('环境变量加载失败: API密钥未在Cloudflare Pages中正确配置');
        }
        
        throw error;
    }
}

// 清除聊天
function clearChat() {
    // 显示确认对话框
    utils.showConfirmDialog('确认清除', '确定要清除所有聊天记录吗？', function() {
        // 清空聊天历史
        conversationHistory = [];
        
        // 清空聊天UI
        ui.elements.chatMessages.innerHTML = '';
        
        // 显示空聊天消息
        ui.elements.chatMessages.innerHTML = `
            <div class="empty-chat-message">
                <p class="empty-title">有什么可以帮忙的？</p>
                <p class="empty-subtitle">请在输入框中向我提问，按Alt+S键发送</p>
            </div>
        `;
        
        ui.elements.emptyChat = document.querySelector('.empty-chat-message');
        
        // 保存到本地存储
        saveSessionToLocalStorage();
        
        // 显示成功提示
        utils.showToast('聊天记录已清除', 'success');
    });
}

// 处理登录
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 使用环境变量中的认证信息
    if (config.auth.username && config.auth.password && 
        username === config.auth.username && password === config.auth.password) {
        userIsLoggedIn = true;
        ui.hideLoginModal();
        
        // 更新UI为账户图标
        updateLoginButtonToAccountIcon();
        
        // 重新渲染模型列表（移除锁定状态）
        ui.renderModels(ui.elements.modelSearch ? ui.elements.modelSearch.value : '');
        
        // 添加系统消息
        ui.addSystemMessage('登录成功，已解锁高级模型访问权限。');
        
        // 保存到本地存储
        saveSessionToLocalStorage();
        
        // 显示成功提示
        utils.showToast('登录成功', 'success');
    } else {
        // 显示错误提示
        utils.showToast('用户名或密码不正确', 'error');
    }
}

// 退出登录
function logoutUser() {
    userIsLoggedIn = false;
    
    // 更新UI为登录按钮
    updateLoginButtonToLoginText();
    
    // 重新渲染模型列表（添加锁定状态）
    ui.renderModels(ui.elements.modelSearch ? ui.elements.modelSearch.value : '');
    
    // 添加系统消息
    ui.addSystemMessage('您已退出登录。');
    
    // 保存到本地存储
    saveSessionToLocalStorage();
    
    // 显示提示 - 使用特殊的logout类型
    utils.showToast('已退出登录', 'logout');
}

// 更新登录按钮为账户图标和退出选项
function updateLoginButtonToAccountIcon() {
    const loginButton = ui.elements.loginButton;
    if (!loginButton) return;
    
    // 清除按钮内容
    loginButton.innerHTML = '';
    loginButton.className = 'account-button';
    
    // 添加账户图标
    const accountIcon = document.createElement('img');
    accountIcon.src = 'images/account.png';
    accountIcon.alt = '账户';
    accountIcon.className = 'account-icon';
    loginButton.appendChild(accountIcon);
    
    // 创建退出菜单
    const logoutMenu = document.createElement('div');
    logoutMenu.className = 'logout-menu';
    logoutMenu.innerHTML = '<div class="logout-option">退出登录</div>';
    loginButton.appendChild(logoutMenu);
    
    // 添加退出事件
    const logoutOption = logoutMenu.querySelector('.logout-option');
    if (logoutOption) {
        logoutOption.onclick = function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            logoutUser();
        };
    }
    
    // 添加账户图标点击事件
    loginButton.onclick = function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        logoutMenu.classList.toggle('show');
    };
    
    // 点击页面其他地方隐藏退出菜单
    document.addEventListener('click', function(e) {
        if (logoutMenu.classList.contains('show') && !loginButton.contains(e.target)) {
            logoutMenu.classList.remove('show');
        }
    });
}

// 更新为登录文本按钮
function updateLoginButtonToLoginText() {
    const loginButton = ui.elements.loginButton;
    if (!loginButton) return;
    
    // 恢复登录按钮
    loginButton.innerHTML = '登录';
    loginButton.className = 'glass-button';
    
    // 恢复登录点击事件
    loginButton.onclick = ui.showLoginModal;
}

// 添加到对话历史
function addToConversationHistory(role, content) {
    conversationHistory.push({
        role: role,
        content: content
    });
    
    // 保存到本地存储
    saveSessionToLocalStorage();
}

// 保存会话到本地存储
function saveSessionToLocalStorage() {
    const sessionData = {
        currentModelId: currentModel.id,
        userIsLoggedIn: userIsLoggedIn,
        conversationHistory: conversationHistory
    };
    
    localStorage.setItem('ai_chat_session', JSON.stringify(sessionData));
}

// 从本地存储恢复会话
function restoreSessionFromLocalStorage() {
    const savedData = localStorage.getItem('ai_chat_session');
    if (!savedData) return;
    
    try {
        const sessionData = JSON.parse(savedData);
        
        // 恢复选择的模型
        if (sessionData.currentModelId) {
            selectModel(sessionData.currentModelId);
        }
        
        // 恢复登录状态
        if (sessionData.userIsLoggedIn) {
            userIsLoggedIn = true;
            // 更新为账户图标
            updateLoginButtonToAccountIcon();
            ui.renderModels();
        }
        
        // 恢复聊天历史
        if (sessionData.conversationHistory && sessionData.conversationHistory.length > 0) {
            // 隐藏空聊天消息
            if (ui.elements.emptyChat) {
                ui.elements.emptyChat.style.display = 'none';
            }
            
            // 恢复聊天记录到UI
            sessionData.conversationHistory.forEach(msg => {
                if (msg.role === 'user') {
                    const messageElement = document.createElement('div');
                    messageElement.className = 'message user-message';
                    messageElement.innerHTML = `
                        <div class="message-content">
                            <div class="user-bubble selectable-text">${utils.escapeHtml(msg.content)}</div>
                        </div>
                    `;
                    
                    // 确保内容可以被选中
                    const contentDiv = messageElement.querySelector('.user-bubble');
                    if (contentDiv) {
                        contentDiv.setAttribute('style', 'user-select: text !important; -webkit-user-select: text !important;');
                    }
                    
                    ui.elements.chatMessages.appendChild(messageElement);
                } else if (msg.role === 'assistant') {
                    const messageElement = document.createElement('div');
                    messageElement.className = 'message ai-message';
                    
                    // 处理思考标签
                    let formattedText = msg.content;
                    if (currentModel && currentModel.thinkingFormat) {
                        formattedText = utils.formatThinkingTags(formattedText);
                    }
                    
                    // 使用marked.js渲染Markdown
                    formattedText = marked.parse(formattedText);
                    
                    messageElement.innerHTML = `
                        <div class="message-content">
                            <div class="ai-bubble markdown-content selectable-text">${formattedText}</div>
                            <div class="message-time">已恢复的消息</div>
                        </div>
                    `;
                    
                    // 确保内容可以被选中
                    const contentElements = messageElement.querySelectorAll('.ai-bubble, .markdown-content, code, pre, p, span, div');
                    contentElements.forEach(el => {
                        el.classList.add('selectable-text');
                        el.setAttribute('style', (el.getAttribute('style') || '') + '; user-select: text !important; -webkit-user-select: text !important;');
                    });
                    
                    ui.elements.chatMessages.appendChild(messageElement);
                    
                    // 为代码块添加高亮
                    messageElement.querySelectorAll('pre code').forEach(block => {
                        hljs.highlightElement(block);
                    });
                }
            });
            
            // 恢复聊天记录到内存
            conversationHistory = sessionData.conversationHistory;
            
            // 滚动到底部
            ui.scrollToBottom();
        }
    } catch (error) {
        console.error('恢复会话失败:', error);
    }
}

// 加载必应每日一图
function loadBingDailyImage() {
    const backgroundContainer = document.querySelector('.background-container');
    if (!backgroundContainer) return;
    
    const bgImage = new Image();
    bgImage.onload = function() {
        backgroundContainer.querySelector('.background-overlay').style.backgroundImage = `url(${bgImage.src})`;
    };
    bgImage.src = config.bingImageUrl;
}

// 初始化环境变量配置
async function initializeConfig() {
    try {
        // 更新API状态指示器
        updateApiStatusIndicator('loading');
        
        // 从API端点获取环境变量
        const response = await fetch('/api/config');
        if (response.ok) {
            const configData = await response.json();
            
            // 设置API密钥
            if (configData.OPENROUTER_API_KEY) {
                config.apiEndpoints.openrouter = configData.OPENROUTER_API_KEY;
                apiConfigLoaded = true;
            }
            
            // 设置登录信息
            if (configData.LOGIN_USERNAME) {
                config.auth.username = configData.LOGIN_USERNAME;
            }
            
            if (configData.LOGIN_PASSWORD) {
                config.auth.password = configData.LOGIN_PASSWORD;
            }
            
            console.log('环境变量加载成功');
            updateApiStatusIndicator('success');
        } else {
            throw new Error('无法获取配置信息');
        }
    } catch (error) {
        console.error('加载环境变量失败:', error);
        apiConfigLoaded = false;
        updateApiStatusIndicator('error');
        
        // 显示错误提示
        setTimeout(() => {
            utils.showToast('API配置加载失败，部分功能可能不可用', 'error');
        }, 1000);
    }
}

// 更新API状态指示器
function updateApiStatusIndicator(status) {
    const header = document.querySelector('.header-left');
    if (!header) return;
    
    // 移除现有的状态指示器
    const existingIndicator = document.getElementById('api-status');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // 创建新的状态指示器
    const statusIndicator = document.createElement('div');
    statusIndicator.id = 'api-status';
    statusIndicator.className = `api-status-indicator ${status}`;
    
    // 设置提示文本
    let tooltipText = '';
    switch (status) {
        case 'loading':
            tooltipText = 'API配置加载中...';
            break;
        case 'success':
            tooltipText = 'API已连接';
            break;
        case 'error':
            tooltipText = 'API配置加载失败';
            break;
    }
    
    statusIndicator.setAttribute('title', tooltipText);
    header.appendChild(statusIndicator);
}

// 在DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', async function() {
    // 初始化环境变量配置
    await initializeConfig();
    
    // 初始化应用
    initializeApp();
});

// 导出全局变量和函数
window.app = {
    config,
    currentModel,
    currentRole,
    userIsLoggedIn,
    conversationHistory,
    selectModel,
    sendMessage,
    clearChat,
    handleLogin,
    logoutUser,
    cancelGeneration
}; 