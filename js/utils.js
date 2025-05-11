// 工具函数集合

// 转义HTML特殊字符
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 自动调整文本框高度
function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(200, textarea.scrollHeight) + 'px';
}

// 复制文本到剪贴板
function copyTextToClipboard(text) {
    // 创建一个临时textarea元素
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // 防止影响布局
    textarea.style.opacity = '0';       // 隐藏元素
    
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        // 尝试使用现代API复制
        navigator.clipboard.writeText(text).catch(() => {
            // 如果现代API失败，使用传统方法
            document.execCommand('copy');
        });
    } catch (err) {
        // 如果所有方法都失败，使用传统方法
        document.execCommand('copy');
    }
    
    // 移除临时元素
    document.body.removeChild(textarea);
}

// 检测移动设备
function isMobile() {
    return window.innerWidth <= 768;
}

// 显示提示框
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // 根据类型选择不同的图标
    let iconSrc = '';
    if (type === 'success') {
        iconSrc = 'images/right.png';
    } else if (type === 'error') {
        iconSrc = 'images/wrong.png';
    } else if (type === 'warning') {
        iconSrc = 'images/warn.png';
    } else if (type === 'logout') {
        // 特殊的退出登录提示使用warn.png
        iconSrc = 'images/warn.png';
        type = 'warning'; // 使用警告样式
    } else {
        iconSrc = 'images/info.png'; // 默认info图标
    }
    
    toast.innerHTML = `
        <div class="toast-icon">
            <img src="${iconSrc}" alt="${type}">
        </div>
        <div class="toast-message">${message}</div>
    `;
    
    document.body.appendChild(toast);
    
    // 淡入效果
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // 3秒后淡出并移除
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 显示确认对话框
function showConfirmDialog(title, message, confirmCallback) {
    // 创建对话框背景
    const dialogOverlay = document.createElement('div');
    dialogOverlay.className = 'dialog-overlay';
    
    // 创建对话框容器
    const dialogContainer = document.createElement('div');
    dialogContainer.className = 'dialog-container';
    
    // 创建对话框内容
    dialogContainer.innerHTML = `
        <div class="dialog-header">${title}</div>
        <div class="dialog-content">${message}</div>
        <div class="dialog-buttons">
            <button class="dialog-button cancel-button">取消</button>
            <button class="dialog-button confirm-button">确认</button>
        </div>
    `;
    
    // 添加对话框到页面
    dialogOverlay.appendChild(dialogContainer);
    document.body.appendChild(dialogOverlay);
    
    // 添加按钮事件
    const cancelButton = dialogContainer.querySelector('.cancel-button');
    const confirmButton = dialogContainer.querySelector('.confirm-button');
    
    // 取消按钮
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(dialogOverlay);
    });
    
    // 确认按钮
    confirmButton.addEventListener('click', () => {
        confirmCallback();
        document.body.removeChild(dialogOverlay);
    });
    
    // 点击背景关闭对话框
    dialogOverlay.addEventListener('click', (event) => {
        if (event.target === dialogOverlay) {
            document.body.removeChild(dialogOverlay);
        }
    });
}

// 格式化思考标签
function formatThinkingTags(text) {
    // 将<think></think>标签之间的内容格式化为思考内容
    return text.replace(/<think>([\s\S]*?)<\/think>/g, '<div class="thinking-content">$1</div>');
}

// 获取错误消息
function getErrorMessage(error) {
    if (!error) return '发生未知错误';
    
    // 对特定错误类型进行友好提示
    if (error.message) {
        if (error.message.includes('网络请求失败') || error.message.includes('Failed to fetch')) {
            return `错误: 网络请求失败，可能原因：
            1. 网络连接不稳定或已断开
            2. API服务器暂时不可用
            3. 跨域请求被阻止
            请检查您的网络连接并稍后重试。`;
        }
        
        if (error.message.includes('timeout') || error.message.includes('超时')) {
            return '错误: 请求超时，服务器响应时间过长，请稍后重试';
        }
        
        if (error.message.includes('API密钥') || error.message.includes('API key')) {
            return '错误: API密钥无效或未正确配置，请检查API设置';
        }
        
        // 直接返回自定义错误消息
        if (!error.status) {
            return `错误: ${error.message}`;
        }
    }
    
    // 根据错误状态码返回友好的错误信息
    if (error.status) {
        switch (error.status) {
            case 400: return '错误: 请求无效 (参数错误或CORS问题)';
            case 401: return '错误: 认证失败 (API密钥失效或无效)';
            case 402: return '错误: 账户或API密钥额度不足，请添加额度后重试';
            case 403: return '错误: 您的输入被模型内容审核系统拦截';
            case 404: return '错误: API终端不存在，请检查配置';
            case 408: return '错误: 请求超时';
            case 429: return '错误: 请求频率限制，请稍后再试';
            case 500: return '错误: 服务器内部错误，请稍后重试';
            case 502: return '错误: 所选模型暂时不可用或返回无效响应';
            case 503: return '错误: 服务暂时不可用，请稍后重试';
            case 504: return '错误: 网关超时，请稍后重试';
            default: return `错误: 请求失败 (状态码: ${error.status})`;
        }
    }
    
    return `错误: ${error.message || '发生未知错误'}`;
}

// 导出工具函数
window.utils = {
    escapeHtml,
    autoResizeTextarea,
    copyTextToClipboard,
    isMobile,
    showToast,
    showConfirmDialog,
    formatThinkingTags,
    getErrorMessage
}; 