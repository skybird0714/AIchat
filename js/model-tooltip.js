/**
 * 模型悬浮提示框功能
 * 当鼠标悬停在模型卡片上时，显示该模型的发布时间和厂商信息
 */

document.addEventListener('DOMContentLoaded', function() {
    // 等待模型卡片渲染完成后执行
    setTimeout(initModelTooltips, 1000);
    
    // 当模型切换或筛选时，重新初始化提示框
    document.addEventListener('modelsRendered', initModelTooltips);
});

/**
 * 初始化模型提示框
 */
function initModelTooltips() {
    // 获取所有模型卡片
    const modelCards = document.querySelectorAll('.model-card');
    
    modelCards.forEach((card, index) => {
        // 获取模型ID
        const modelId = card.getAttribute('data-model-id');
        if (!modelId) return;
        
        // 查找对应的模型数据
        const modelData = findModelById(modelId);
        if (!modelData || !modelData.tooltip) return;
        
        // 如果已有提示框则移除
        const existingTooltip = card.querySelector('.model-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
        
        // 创建提示框
        const tooltip = document.createElement('div');
        tooltip.className = 'model-tooltip';
        tooltip.textContent = modelData.tooltip || '';
        
        // 检查当前卡片是否为第一行中的模型
        // 我们以卡片位置来判断，前5个模型显示在下方
        const rect = card.getBoundingClientRect();
        const searchBox = document.querySelector('.model-search-section');
        const searchBoxRect = searchBox ? searchBox.getBoundingClientRect() : null;
        
        // 如果模型卡片位于搜索框附近，或是前5个模型，则将提示框显示在下方
        if (index < 5 || (searchBoxRect && rect.top < searchBoxRect.bottom + 60)) {
            tooltip.classList.add('tooltip-bottom');
        }
        
        // 添加到卡片
        card.appendChild(tooltip);
        
        // 确保卡片有相对定位
        if (getComputedStyle(card).position === 'static') {
            card.style.position = 'relative';
        }
    });
    
    // 为卡片绑定hover事件，检测是否会被遮挡
    const modelItems = document.querySelectorAll('.model-item');
    modelItems.forEach(item => {
        item.addEventListener('mouseenter', checkTooltipPosition);
    });
}

/**
 * 检查提示框位置，如有需要调整显示位置
 * @param {Event} event - 鼠标事件
 */
function checkTooltipPosition(event) {
    const modelCard = event.currentTarget;
    const tooltip = modelCard.querySelector('.model-tooltip');
    if (!tooltip) return;
    
    const tooltipRect = tooltip.getBoundingClientRect();
    const searchBox = document.querySelector('.model-search-section');
    const searchBoxRect = searchBox ? searchBox.getBoundingClientRect() : null;
    
    // 如果提示框会被搜索框遮挡，则显示在下方
    if (searchBoxRect && tooltipRect.top < searchBoxRect.bottom) {
        tooltip.classList.add('tooltip-bottom');
    }
}

/**
 * 根据ID查找模型
 * @param {string} id - 模型ID
 * @returns {Object|null} - 模型数据或null
 */
function findModelById(id) {
    if (!window.modelsConfig || !window.modelsConfig.models) return null;
    
    return window.modelsConfig.models.find(model => model.id === id) || null;
}

/**
 * 处理Thinking模式的输出
 * 将<think>...</think>标签包围的内容转换为思考样式
 */
function processThinkingOutput() {
    const messages = document.querySelectorAll('.ai-message-content');
    
    messages.forEach(message => {
        const content = message.innerHTML;
        const thinkRegex = /<think>([\s\S]*?)<\/think>/gi;
        
        if (thinkRegex.test(content)) {
            const processedContent = content.replace(thinkRegex, (match, thinking) => {
                return `<div class="thinking-container">
                          <div class="thinking-header">思考过程：</div>
                          <div class="thinking-content">${thinking}</div>
                        </div>`;
            });
            
            message.innerHTML = processedContent;
        }
    });
}

// 在接收到AI回复后处理思考输出
document.addEventListener('aiMessageReceived', processThinkingOutput); 