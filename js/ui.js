// UI相关功能

// 全局UI状态
const uiState = {
    isWarningShowing: false
};

// DOM 元素引用
const elements = {
    modelsContainer: document.querySelector('.models-container'),
    chatMessages: document.getElementById('chat-messages'),
    userInput: document.getElementById('user-input'),
    sendButton: document.getElementById('send-btn'),
    clearChatButton: document.getElementById('clear-chat'),
    loginButton: document.getElementById('login-btn'),
    loginModal: document.getElementById('login-modal'),
    loginForm: document.getElementById('login-form'),
    emptyChat: document.querySelector('.empty-chat-message'),
    tooltip: document.getElementById('model-tooltip'),
    modelSearch: document.getElementById('model-search'),
    sortToggle: document.getElementById('sort-toggle')
};

// 添加用户消息到界面
function addUserMessage(text) {
    // 移除空聊天消息
    if (elements.emptyChat) {
        elements.emptyChat.style.display = 'none';
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.innerHTML = `
        <div class="message-content">
            <div class="user-bubble selectable-text">${utils.escapeHtml(text)}</div>
        </div>
    `;
    
    // 确保内容可以被选中 - 使用更强的选择方法
    const contentDiv = messageElement.querySelector('.user-bubble');
    if (contentDiv) {
        contentDiv.setAttribute('style', 'user-select: text !important; -webkit-user-select: text !important;');
    }
    
    elements.chatMessages.appendChild(messageElement);
    
    // 滚动到底部
    scrollToBottom();
    
    // 添加到聊天历史
    addToConversationHistory('user', text);
}

// 添加AI消息到界面
function addAIMessage(text, isError = false) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ai-message';
    
    // 获取当前时间
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // 处理思考标签
    let formattedText = text;
    if (currentModel && currentModel.thinkingFormat) {
        formattedText = utils.formatThinkingTags(text);
    }
    
    // 使用marked.js渲染Markdown
    formattedText = isError ? 
        `<span class="error-message" style="color: #ff6b6b;">${formattedText}</span>` : 
        marked.parse(formattedText);
    
    messageElement.innerHTML = `
        <div class="message-content">
            <div class="ai-bubble markdown-content selectable-text">${formattedText}</div>
            <div class="message-time">${timeStr}</div>
        </div>
    `;
    
    // 确保内容可以被选中 - 使用更强的选择方法
    const allContentElements = messageElement.querySelectorAll('.ai-bubble, .error-message, pre, code, p, span, div');
    allContentElements.forEach(el => {
        el.classList.add('selectable-text');
        el.setAttribute('style', (el.getAttribute('style') || '') + '; user-select: text !important; -webkit-user-select: text !important;');
    });
    
    elements.chatMessages.appendChild(messageElement);
    
    // 为代码块添加高亮
    if (!isError) {
        messageElement.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
    
    // 滚动到底部
    scrollToBottom();
    
    if (!isError) {
        // 添加到聊天历史
        addToConversationHistory('assistant', text);
    }
}

// 添加系统消息
function addSystemMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message system-message';
    messageElement.innerHTML = `
        <div class="message-content">
            <div class="system-bubble">${text}</div>
        </div>
    `;
    
    elements.chatMessages.appendChild(messageElement);
    
    // 滚动到底部
    scrollToBottom();
}

// 添加等待指示器
function addWaitingIndicator() {
    const waitingElement = document.createElement('div');
    waitingElement.className = 'message ai-message waiting';
    waitingElement.innerHTML = `
        <div class="message-content">
            <div class="ai-bubble">
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
                <button class="glass-button cancel-generation">取消</button>
            </div>
        </div>
    `;
    
    // 添加取消事件
    const cancelButton = waitingElement.querySelector('.cancel-generation');
    cancelButton.addEventListener('click', cancelGeneration);
    
    elements.chatMessages.appendChild(waitingElement);
    
    // 滚动到底部
    scrollToBottom();
    
    return waitingElement;
}

// 移除等待指示器
function removeWaitingIndicator(element) {
    if (element && element.parentNode) {
        try {
            // 直接从DOM中移除元素
            element.parentNode.removeChild(element);
        } catch (err) {
            console.error('移除等待指示器失败:', err);
            
            // 尝试使用更通用的方法移除
            const waitingElements = document.querySelectorAll('.message.ai-message.waiting');
            waitingElements.forEach(el => {
                if (el && el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            });
        }
    } else {
        // 尝试查找并移除所有等待指示器
        const waitingElements = document.querySelectorAll('.message.ai-message.waiting');
        waitingElements.forEach(el => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });
    }
}

// 滚动到底部
function scrollToBottom() {
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// 设置输入状态
function setInputState(enabled) {
    if (elements.userInput) {
        elements.userInput.disabled = !enabled;
    }
    
    if (elements.sendButton) {
        // 禁用按钮状态
        if (!enabled) {
            // 直接设置DOM属性
            elements.sendButton.disabled = true;
            elements.sendButton.textContent = '生成中...';
            elements.sendButton.classList.add('disabled');
        } else {
            // 启用按钮
            elements.sendButton.disabled = false;
            elements.sendButton.textContent = '发送';
            elements.sendButton.classList.remove('disabled');
            
            // 重新绑定点击事件
            elements.sendButton.onclick = function() {
                if (typeof app !== 'undefined' && app.sendMessage) {
                    app.sendMessage();
                }
                return false;
            };
        }
    }
}

// 渲染模型列表
function renderModels(filterText = '') {
    console.log("渲染模型列表，过滤文本:", filterText);
    
    if (!elements.modelsContainer) {
        console.error("找不到模型容器元素!");
        return;
    }
    
    try {
        // 清空当前列表
        elements.modelsContainer.innerHTML = '';
        
        // 检查全局模型配置是否存在
        if (typeof window.modelsConfig === 'undefined' || !window.modelsConfig.models) {
            console.error("模型配置未加载，无法渲染模型列表!");
            
            // 添加错误提示
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.padding = '15px';
            errorElement.style.color = '#ff6b6b';
            errorElement.textContent = '模型配置加载失败，请刷新页面重试';
            elements.modelsContainer.appendChild(errorElement);
            return;
        }
        
        // 根据当前排序方式获取排序后的模型数组
        let modelsToRender = [...window.modelsConfig.models];
        console.log(`加载了${modelsToRender.length}个模型`);
        
        // 根据搜索文本筛选
        if (filterText && filterText.trim() !== '') {
            const lowercaseFilter = filterText.toLowerCase();
            modelsToRender = modelsToRender.filter(model => 
                (model.name && model.name.toLowerCase().includes(lowercaseFilter)) ||
                (model.description && model.description.toLowerCase().includes(lowercaseFilter)) ||
                (model.tooltip && model.tooltip.toLowerCase().includes(lowercaseFilter)) ||
                (model.id && model.id.toLowerCase().includes(lowercaseFilter))
            );
        }
        
        // 过滤掉没有id的模型
        const originalLength = modelsToRender.length;
        modelsToRender = modelsToRender.filter(model => model && model.id);
        if (originalLength !== modelsToRender.length) {
            console.warn(`过滤掉了${originalLength - modelsToRender.length}个无效模型`);
        }
        
        // 排序
        const sortMethod = (typeof currentSortMethod !== 'undefined') ? currentSortMethod : 'custom';
        console.log(`使用排序方法: ${sortMethod}`);
        
        if (sortMethod === 'date') {
            // 按日期排序，最新的在前面
            modelsToRender.sort((a, b) => {
                // 确保两个对象都有date属性
                if (!a.date) return 1; // a没有日期，放到后面
                if (!b.date) return -1; // b没有日期，放到后面
                return new Date(b.date) - new Date(a.date);
            });
        } else {
            // 按自定义顺序排序
            modelsToRender.sort((a, b) => {
                // 确保两个对象都有sortOrder属性
                const aOrder = typeof a.sortOrder !== 'undefined' ? a.sortOrder : 999;
                const bOrder = typeof b.sortOrder !== 'undefined' ? b.sortOrder : 999;
                return aOrder - bOrder;
            });
        }
        
        console.log(`找到${modelsToRender.length}个匹配的模型`);
        
        // 创建模型元素容器
        const modelElementsContainer = document.createElement('div');
        modelElementsContainer.className = 'model-elements-wrapper';
        
        modelsToRender.forEach(model => {
            try {
                const modelElement = document.createElement('div');
                modelElement.className = 'model-item';
                modelElement.classList.add('model-card'); // 添加model-card类用于tooltip
                
                // 如果是当前选中的模型则添加active类
                if (typeof currentModel !== 'undefined' && currentModel && model.id === currentModel.id) {
                    modelElement.classList.add('active');
                }
                
                modelElement.dataset.modelId = model.id;
                modelElement.dataset.tooltip = model.tooltip || model.description || '';
                
                // 如果需要登录但用户未登录则添加锁定标记
                let requiresLogin = false;
                if (
                    typeof window.modelsConfig.requireLoginForModels !== 'undefined' && 
                    Array.isArray(window.modelsConfig.requireLoginForModels) &&
                    window.modelsConfig.requireLoginForModels.includes(model.id) && 
                    (typeof userIsLoggedIn === 'undefined' || !userIsLoggedIn)
                ) {
                    requiresLogin = true;
                    modelElement.classList.add('locked');
                }
                
                modelElement.innerHTML = `
                    <img src="${model.avatar || 'images/AI/huggingface.png'}" alt="${model.name}" class="model-avatar">
                    <div class="model-info">
                        <div class="model-name">${model.name || '未命名模型'}</div>
                        <div class="model-description">${model.description || ''}</div>
                    </div>
                    ${requiresLogin ? '<div class="lock-icon">🔒</div>' : ''}
                `;
                
                // 添加点击事件
                modelElement.addEventListener('click', function(e) {
                    console.log("模型点击:", model.id);
                    
                    if (requiresLogin) {
                        // 阻止事件冒泡，防止立即触发document点击事件
                        e.stopPropagation();
                        
                        // 显示警告提示，而不是直接弹出登录框
                        if (typeof ui !== 'undefined' && ui.showLoginWarning) {
                            ui.showLoginWarning(model.name);
                        } else if (typeof showLoginWarning === 'function') {
                            showLoginWarning(model.name);
                        } else {
                            console.warn("找不到showLoginWarning函数，回退到直接显示登录框");
                            if (typeof ui !== 'undefined' && ui.showLoginModal) {
                                ui.showLoginModal();
                            }
                        }
                        return;
                    }
                    
                    if (typeof selectModel === 'function') {
                        selectModel(model.id);
                    } else if (typeof window.app !== 'undefined' && typeof window.app.selectModel === 'function') {
                        window.app.selectModel(model.id);
                    } else {
                        console.error("找不到selectModel函数!");
                    }
                });
                
                modelElementsContainer.appendChild(modelElement);
            } catch (modelError) {
                console.error(`渲染模型${model.id || '未知'}时出错:`, modelError);
            }
        });
        
        elements.modelsContainer.appendChild(modelElementsContainer);
        
        // 如果没有匹配的模型，显示提示信息
        if (modelsToRender.length === 0) {
            const noResultsElement = document.createElement('div');
            noResultsElement.className = 'no-results';
            noResultsElement.textContent = '没有匹配的模型';
            elements.modelsContainer.appendChild(noResultsElement);
        }
        
        // 触发模型渲染完成事件，用于初始化tooltip等
        document.dispatchEvent(new CustomEvent('modelsRendered'));
        
        console.log("模型列表渲染完成");
    } catch (error) {
        console.error("渲染模型列表时发生错误:", error);
        // 添加错误提示
        elements.modelsContainer.innerHTML = `
            <div class="error-message" style="padding: 15px; color: #ff6b6b;">
                渲染模型列表失败: ${error.message}
                <br>
                <button class="glass-button retry-button" style="margin-top: 10px;">重试</button>
            </div>
        `;
        
        // 添加重试按钮事件
        const retryButton = elements.modelsContainer.querySelector('.retry-button');
        if (retryButton) {
            retryButton.addEventListener('click', function() {
                renderModels(filterText);
            });
        }
    }
}

// 显示提示框
function showTooltip(event) {
    const target = event.currentTarget;
    const tooltipText = target.dataset.tooltip;
    
    if (tooltipText) {
        elements.tooltip.querySelector('.tooltip-content').textContent = tooltipText;
        elements.tooltip.style.display = 'block';
        
        // 计算位置 - 显示在元素右侧
        const rect = target.getBoundingClientRect();
        elements.tooltip.style.top = `${rect.top}px`;
        elements.tooltip.style.left = `${rect.right + 10}px`;
        
        // 确保提示框不超出窗口
        const tooltipRect = elements.tooltip.getBoundingClientRect();
        if (tooltipRect.right > window.innerWidth) {
            // 如果超出右侧，则显示在元素左侧
            elements.tooltip.style.left = `${rect.left - tooltipRect.width - 10}px`;
        }
    }
}

// 隐藏提示框
function hideTooltip() {
    elements.tooltip.style.display = 'none';
}

// 显示登录模态框
function showLoginModal() {
    console.log("显示登录模态框");
    
    if (!elements.loginModal) {
        console.error("找不到登录模态框元素");
        return;
    }
    
    try {
        // 先设置为不可见状态的flex布局
        elements.loginModal.style.display = 'flex';
        elements.loginModal.style.opacity = '0';
        
        // 确保DOM渲染完成后再添加show类
        requestAnimationFrame(() => {
            elements.loginModal.classList.add('show');
        });
        
        // 重置表单
        if (elements.loginForm) {
            elements.loginForm.reset();
        }
        
        // 自动聚焦用户名输入框
        const usernameInput = document.getElementById('username');
        if (usernameInput) {
            setTimeout(() => {
                usernameInput.focus();
            }, 100);
        }
        
        console.log("登录模态框已显示");
    } catch (error) {
        console.error("显示登录模态框时出错:", error);
    }
}

// 隐藏登录模态框
function hideLoginModal() {
    console.log("隐藏登录模态框");
    
    if (!elements.loginModal) {
        console.error("找不到登录模态框元素");
        return;
    }
    
    try {
        // 移除show类
        elements.loginModal.classList.remove('show');
        
        // 延迟后隐藏元素 (匹配CSS过渡时间)
        setTimeout(() => {
            elements.loginModal.style.display = 'none';
        }, 300);
        
        console.log("登录模态框已隐藏");
    } catch (error) {
        console.error("隐藏登录模态框时出错:", error);
    }
}

// 添加折叠功能（仅移动设备）
function setupMobileUI() {
    if (utils.isMobile()) {
        const sidebar = document.querySelector('.sidebar');
        const collapseButton = document.createElement('button');
        collapseButton.className = 'collapse-button glass-button';
        collapseButton.textContent = '收起';
        collapseButton.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            collapseButton.textContent = sidebar.classList.contains('collapsed') ? '展开' : '收起';
        });
        
        sidebar.insertBefore(collapseButton, sidebar.firstChild);
    }
}

// 显示帮助模态框
function showHelpModal() {
    // 创建帮助模态框
    const helpModal = document.createElement('div');
    helpModal.className = 'modal';
    helpModal.id = 'helpModal';
    
    // 帮助内容
    const helpContent = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>AI聊天助手使用帮助</h2>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <div class="help-section">
                    <h3>基本操作</h3>
                    <ul>
                        <li><strong>选择模型：</strong> 点击左侧栏中的任意模型开始聊天</li>
                        <li><strong>输入消息：</strong> 在底部输入框中输入您的问题</li>
                        <li><strong>发送消息：</strong> 点击发送按钮或按下Enter键</li>
                        <li><strong>多行输入：</strong> 按Shift+Enter键换行</li>
                    </ul>
                </div>
                
                <div class="help-section">
                    <h3>特色功能</h3>
                    <ul>
                        <li><strong>角色选择：</strong> 通过顶部下拉菜单选择AI扮演的角色</li>
                        <li><strong>系统提示：</strong> 自定义系统提示可以更好地控制AI回答的方向</li>
                        <li><strong>复制回答：</strong> 点击AI回答右上角的复制按钮可复制内容</li>
                        <li><strong>清除聊天：</strong> 点击顶部工具栏的清除按钮可清空当前聊天</li>
                        <li><strong>取消生成：</strong> 在AI回答过程中可点击取消按钮停止生成</li>
                    </ul>
                </div>
                
                <div class="help-section">
                    <h3>API密钥说明</h3>
                    <ul>
                        <li>对于标记为"免费"的模型，无需API密钥即可使用</li>
                        <li>对于其他模型，需要登录并提供相应的API密钥</li>
                        <li>API密钥在本地安全存储，不会传输到服务器</li>
                    </ul>
                </div>
                
                <div class="help-section">
                    <h3>问题排解</h3>
                    <ul>
                        <li><strong>模型无响应：</strong> 请检查网络连接或API密钥是否有效</li>
                        <li><strong>生成中断：</strong> 可能是由于网络波动或API限制</li>
                        <li><strong>界面异常：</strong> 尝试刷新页面或清除浏览器缓存</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <p>如有更多问题，请联系我们的支持团队</p>
            </div>
        </div>
    `;
    
    helpModal.innerHTML = helpContent;
    document.body.appendChild(helpModal);
    
    // 添加关闭按钮事件
    const closeButton = helpModal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(helpModal);
    });
    
    // 点击模态框外部关闭
    helpModal.addEventListener('click', (event) => {
        if (event.target === helpModal) {
            document.body.removeChild(helpModal);
        }
    });
}

// 显示警告提示
function showLoginWarning(modelName) {
    console.log("显示登录警告");
    
    // 如果已经有警告在显示，则不再显示新警告
    if (uiState.isWarningShowing) {
        console.log("警告已在显示中，忽略新的警告请求");
        return;
    }
    
    // 更新状态
    uiState.isWarningShowing = true;
    
    // 移除已存在的警告提示
    const existingWarnings = document.querySelectorAll('.login-warning');
    existingWarnings.forEach(warning => warning.remove());
    
    // 创建警告元素
    const warningElement = document.createElement('div');
    warningElement.className = 'login-warning';
    warningElement.innerHTML = `
        <div class="warning-content">
            <img src="images/warn.png" alt="警告" class="warning-icon">
            <span>请登录后使用${modelName || '付费模型'}</span>
        </div>
        <div class="warning-actions">
            <button class="glass-button login-btn">立即登录</button>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(warningElement);
    
    // 添加动画效果
    setTimeout(() => {
        warningElement.classList.add('show');
    }, 10);
    
    // 定义清理函数
    const cleanupWarning = () => {
        warningElement.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(warningElement)) {
                warningElement.remove();
            }
            // 重置状态
            uiState.isWarningShowing = false;
        }, 300);
    };
    
    // 绑定点击事件
    const loginButton = warningElement.querySelector('.login-btn');
    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止事件冒泡
            cleanupWarning();
            setTimeout(() => {
                showLoginModal();
            }, 300);
        });
    }
    
    // 阻止警告框本身的点击事件冒泡
    warningElement.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // 添加自动关闭（延长到10秒）
    setTimeout(() => {
        cleanupWarning();
    }, 10000); // 增加到10秒
    
    // 延迟绑定点击其他区域关闭的事件（避免立即触发）
    setTimeout(() => {
        const clickHandler = function closeWarning(event) {
            if (!warningElement.contains(event.target) && document.body.contains(warningElement)) {
                cleanupWarning();
                document.removeEventListener('click', clickHandler);
            }
        };
        
        document.addEventListener('click', clickHandler);
    }, 500); // 添加500ms延迟，避免与当前点击冲突
}

// 导出UI功能
window.ui = {
    elements,
    addUserMessage,
    addAIMessage,
    addSystemMessage,
    addWaitingIndicator,
    removeWaitingIndicator,
    scrollToBottom,
    setInputState,
    renderModels,
    showTooltip,
    hideTooltip,
    showLoginModal,
    hideLoginModal,
    setupMobileUI,
    showHelpModal,
    showLoginWarning
}; 