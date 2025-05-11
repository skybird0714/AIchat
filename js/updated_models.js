// 模型配置信息
const modelsConfig = {
    // 模型信息
    models: [
        // Qwen模型（按照发布日期降序排列）
        {
            id: 'qwen/qwen3-4b:free',
            name: 'Qwen3-4B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '免费',
            tooltip: '阿里云 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 1,
            apiConfig: {
                model: 'qwen/qwen3-4b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-235b-a22b:free',
            name: 'Qwen3-235B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '免费',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 2,
            apiConfig: {
                model: 'qwen/qwen3-235b-a22b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-235b-a22b',
            name: 'Qwen3-235B',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '$0.14/M输入 / $2.00/M输出',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 3,
            apiConfig: {
                model: 'qwen/qwen3-235b-a22b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-30b-a3b:free',
            name: 'Qwen3-30B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '免费',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 4,
            apiConfig: {
                model: 'qwen/qwen3-30b-a3b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-30b-a3b',
            name: 'Qwen3-30B',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '$0.10/M输入 / $0.30/M输出',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 5,
            apiConfig: {
                model: 'qwen/qwen3-30b-a3b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-32b:free',
            name: 'Qwen3-32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '免费',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 6,
            apiConfig: {
                model: 'qwen/qwen3-32b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen3-32b',
            name: 'Qwen3-32B',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '$0.10/M输入 / $0.30/M输出',
            tooltip: '阿里云 2025年4月28日',
            date: new Date('2025-04-28'),
            sortOrder: 7,
            apiConfig: {
                model: 'qwen/qwen3-32b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen2.5-coder-7b-instruct',
            name: 'Qwen2.5 Coder 7B',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '$0.01/M输入 / $0.03/M输出',
            tooltip: '阿里云 2025年4月15日',
            date: new Date('2025-04-15'),
            sortOrder: 8,
            apiConfig: {
                model: 'qwen/qwen2.5-coder-7b-instruct',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwen2.5-vl-32b-instruct:free',
            name: 'Qwen2.5 VL 32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwen.png',
            description: '免费',
            tooltip: '阿里云 2025年3月24日',
            date: new Date('2025-03-24'),
            sortOrder: 9,
            apiConfig: {
                model: 'qwen/qwen2.5-vl-32b-instruct:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'qwen/qwq-32b:free',
            name: 'QWQ 32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/qwq.png',
            description: '免费',
            tooltip: '阿里云 2025年3月5日',
            date: new Date('2025-03-05'),
            sortOrder: 10,
            apiConfig: {
                model: 'qwen/qwq-32b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        // DeepSeek模型（按照发布日期降序排列）
        {
            id: 'deepseek/deepseek-prover-v2:free',
            name: 'DeepSeek Prover v2 Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 11,
            apiConfig: {
                model: 'deepseek/deepseek-prover-v2:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-prover-v2',
            name: 'DeepSeek Prover v2',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '$0.50/M输入 / $2.18/M输出',
            tooltip: 'DeepSeek 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 12,
            apiConfig: {
                model: 'deepseek/deepseek-prover-v2',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-chat-v3-0324:free',
            name: 'DeepSeek Chat v3 Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年4月24日',
            date: new Date('2025-04-24'),
            sortOrder: 13,
            apiConfig: {
                model: 'deepseek/deepseek-chat-v3-0324:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-chat-v3-0324',
            name: 'DeepSeek Chat v3',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '$0.30/M输入 / $0.88/M输出',
            tooltip: 'DeepSeek 2025年4月24日',
            date: new Date('2025-04-24'),
            sortOrder: 14,
            apiConfig: {
                model: 'deepseek/deepseek-chat-v3-0324',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-r1-zero:free',
            name: 'DeepSeek R1 Zero Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年4月6日',
            date: new Date('2025-04-06'),
            sortOrder: 15,
            apiConfig: {
                model: 'deepseek/deepseek-r1-zero:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-r1-distill-qwen-32b:free',
            name: 'DeepSeek R1 Distill Qwen 32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年1月29日',
            date: new Date('2025-01-29'),
            sortOrder: 16,
            apiConfig: {
                model: 'deepseek/deepseek-r1-distill-qwen-32b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-r1-distill-llama-70b:free',
            name: 'DeepSeek R1 Distill Llama 70B Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年1月23日',
            date: new Date('2025-01-23'),
            sortOrder: 17,
            apiConfig: {
                model: 'deepseek/deepseek-r1-distill-llama-70b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-r1:free',
            name: 'DeepSeek R1 Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2025年1月20日',
            date: new Date('2025-01-20'),
            sortOrder: 18,
            apiConfig: {
                model: 'deepseek/deepseek-r1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-r1',
            name: 'DeepSeek R1',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '$0.50/M输入 / $2.18/M输出',
            tooltip: 'DeepSeek 2025年1月20日',
            date: new Date('2025-01-20'),
            sortOrder: 19,
            apiConfig: {
                model: 'deepseek/deepseek-r1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'deepseek/deepseek-chat:free',
            name: 'DeepSeek Chat Free',
            provider: 'openrouter',
            avatar: 'images/AI/deepseek.png',
            description: '免费',
            tooltip: 'DeepSeek 2024年12月26日',
            date: new Date('2024-12-26'),
            sortOrder: 20,
            apiConfig: {
                model: 'deepseek/deepseek-chat:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        // OpenAI模型（按照发布日期降序排列）
        {
            id: 'openai/gpt-4.1',
            name: 'GPT-4.1',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$2/M输入 / $8/M输出',
            tooltip: 'OpenAI',
            date: new Date('2025-04-14'),
            sortOrder: 21,
            apiConfig: {
                model: 'openai/gpt-4.1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4.1-nano',
            name: 'GPT-4.1 Nano',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$0.10/M输入 / $0.40/M输出',
            tooltip: 'OpenAI 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 22,
            apiConfig: {
                model: 'openai/gpt-4.1-nano',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4.1-mini',
            name: 'GPT-4.1 Mini',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$0.40/M输入 / $1.60/M输出',
            tooltip: 'OpenAI 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 23,
            apiConfig: {
                model: 'openai/gpt-4.1-mini',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/o4-mini-high',
            name: 'O4 Mini High',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'OpenAI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 24,
            apiConfig: {
                model: 'openai/o4-mini-high',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/o1-pro',
            name: 'O1 Pro',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$150/M输入 / $600/M输出',
            tooltip: 'OpenAI 2025年3月19日',
            date: new Date('2025-03-19'),
            sortOrder: 25,
            apiConfig: {
                model: 'openai/o1-pro',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4o-mini-search-preview',
            name: 'GPT-4o Mini Search',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$0.15/M输入 / $0.60/M输出',
            tooltip: 'OpenAI 2025年3月12日',
            date: new Date('2025-03-12'),
            sortOrder: 26,
            apiConfig: {
                model: 'openai/gpt-4o-mini-search-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4.5-preview',
            name: 'GPT-4.5 Preview',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$75/M输入 / $150/M输出',
            tooltip: 'OpenAI 2025年2月27日',
            date: new Date('2025-02-27'),
            sortOrder: 27,
            apiConfig: {
                model: 'openai/gpt-4.5-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/o3-mini-high',
            name: 'O3 Mini High',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'OpenAI 2025年2月12日',
            date: new Date('2025-02-12'),
            sortOrder: 28,
            apiConfig: {
                model: 'openai/o3-mini-high',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/o1',
            name: 'O1',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$15/M输入 / $60/M输出',
            tooltip: 'OpenAI 2024年12月17日',
            date: new Date('2024-12-17'),
            sortOrder: 29,
            apiConfig: {
                model: 'openai/o1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4o-2024-11-20',
            name: 'GPT-4o',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$2.50/M输入 / $10/M输出',
            tooltip: 'OpenAI 2024年11月20日',
            date: new Date('2024-11-20'),
            sortOrder: 30,
            apiConfig: {
                model: 'openai/gpt-4o-2024-11-20',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4',
            name: 'GPT-4',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$30/M输入 / $60/M输出',
            tooltip: 'OpenAI 2023年5月28日',
            date: new Date('2023-05-28'),
            sortOrder: 31,
            apiConfig: {
                model: 'openai/gpt-4',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        // Anthropic模型（按照发布日期降序排列）
        {
            id: 'anthropic/claude-3.7-sonnet',
            name: 'Claude 3.7 Sonnet',
            provider: 'openrouter',
            avatar: 'images/AI/claude.png',
            description: '$3/M输入 / $15/M输出',
            tooltip: 'Anthropic 2025年2月24日',
            date: new Date('2025-02-24'),
            sortOrder: 32,
            apiConfig: {
                model: 'anthropic/claude-3.7-sonnet',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'anthropic/claude-3.7-sonnet:thinking',
            name: 'Claude 3.7 Sonnet Thinking',
            provider: 'openrouter',
            avatar: 'images/AI/claude.png',
            description: '$3/M输入 / $15/M输出',
            tooltip: 'Anthropic 2025年2月24日',
            date: new Date('2025-02-24'),
            sortOrder: 33,
            apiConfig: {
                model: 'anthropic/claude-3.7-sonnet:thinking',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Google模型（按照发布日期降序排列）
        {
            id: 'google/gemini-2.5-pro-preview',
            name: 'Gemini 2.5 Pro',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '$1.25/M输入 / $10/M输出',
            tooltip: 'Google 2025年5月7日',
            date: new Date('2025-05-07'),
            sortOrder: 34,
            apiConfig: {
                model: 'google/gemini-2.5-pro-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemini-2.5-flash-preview',
            name: 'Gemini 2.5 Flash',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '$0.15/M输入 / $0.60/M输出',
            tooltip: 'Google 2025年4月17日',
            date: new Date('2025-04-17'),
            sortOrder: 35,
            apiConfig: {
                model: 'google/gemini-2.5-flash-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemini-2.5-pro-exp-03-25',
            name: 'Gemini 2.5 Pro Exp',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '免费',
            tooltip: 'Google 2025年3月25日',
            date: new Date('2025-03-25'),
            sortOrder: 36,
            apiConfig: {
                model: 'google/gemini-2.5-pro-exp-03-25',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemma-3-27b-it:free',
            name: 'Gemma 3 27B Free',
            provider: 'openrouter',
            avatar: 'images/AI/gemma.png',
            description: '免费',
            tooltip: 'Google 2025年3月12日',
            date: new Date('2025-03-12'),
            sortOrder: 37,
            apiConfig: {
                model: 'google/gemma-3-27b-it:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // xAI模型（按照发布日期降序排列）
        {
            id: 'x-ai/grok-3-mini-beta',
            name: 'Grok 3 Mini Beta',
            provider: 'openrouter',
            avatar: 'images/AI/grok.png',
            description: '$0.30/M输入 / $0.50/M输出',
            tooltip: 'xAI 2025年4月9日',
            date: new Date('2025-04-09'),
            sortOrder: 38,
            apiConfig: {
                model: 'x-ai/grok-3-mini-beta',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'x-ai/grok-3-beta',
            name: 'Grok 3 Beta',
            provider: 'openrouter',
            avatar: 'images/AI/grok.png',
            description: '$3/M输入 / $15/M输出',
            tooltip: 'xAI 2025年4月9日',
            date: new Date('2025-04-09'),
            sortOrder: 39,
            apiConfig: {
                model: 'x-ai/grok-3-beta',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Meta模型（按照发布日期降序排列）
        {
            id: 'meta-llama/llama-guard-4-12b',
            name: 'Llama Guard 4 12B',
            provider: 'openrouter',
            avatar: 'images/AI/meta.png',
            description: '$0.05/M输入 / $0.05/M输出',
            tooltip: 'Meta 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 40,
            apiConfig: {
                model: 'meta-llama/llama-guard-4-12b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'meta-llama/llama-4-maverick:free',
            name: 'Llama 4 Maverick Free',
            provider: 'openrouter',
            avatar: 'images/AI/meta.png',
            description: '免费',
            tooltip: 'Meta 2025年4月5日',
            date: new Date('2025-04-05'),
            sortOrder: 41,
            apiConfig: {
                model: 'meta-llama/llama-4-maverick:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'meta-llama/llama-4-scout:free',
            name: 'Llama 4 Scout Free',
            provider: 'openrouter',
            avatar: 'images/AI/meta.png',
            description: '免费',
            tooltip: 'Meta 2025年4月5日',
            date: new Date('2025-04-05'),
            sortOrder: 42,
            apiConfig: {
                model: 'meta-llama/llama-4-scout:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        // Mistral AI模型（按照发布日期降序排列）
        {
            id: 'mistralai/mistral-medium-3',
            name: 'Mistral Medium 3',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$0.40/M输入 / $2/M输出',
            tooltip: 'MistralAI 2025年5月7日',
            date: new Date('2025-05-07'),
            sortOrder: 43,
            apiConfig: {
                model: 'mistralai/mistral-medium-3',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'mistral/ministral-8b',
            name: 'Ministral 8B',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$0.10/M输入 / $0.10/M输出',
            tooltip: 'MistralAI 2025年3月31日',
            date: new Date('2025-03-31'),
            sortOrder: 44,
            apiConfig: {
                model: 'mistral/ministral-8b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'mistralai/mistral-small-3.1-24b-instruct:free',
            name: 'Mistral Small 3.1 24B Free',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '免费',
            tooltip: 'MistralAI 2025年3月17日',
            date: new Date('2025-03-17'),
            sortOrder: 45,
            apiConfig: {
                model: 'mistralai/mistral-small-3.1-24b-instruct:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'mistralai/mistral-small-3.1-24b-instruct',
            name: 'Mistral Small 3.1 24B',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$0.05/M输入 / $0.15/M输出',
            tooltip: 'MistralAI 2025年3月17日',
            date: new Date('2025-03-17'),
            sortOrder: 46,
            apiConfig: {
                model: 'mistralai/mistral-small-3.1-24b-instruct',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Microsoft模型（按照发布日期降序排列）
        {
            id: 'microsoft/phi-4-reasoning-plus:free',
            name: 'Phi-4 Reasoning Plus Free',
            provider: 'openrouter',
            avatar: 'images/AI/phi.png',
            description: '免费',
            tooltip: 'Microsoft 2025年5月1日',
            date: new Date('2025-05-01'),
            sortOrder: 47,
            apiConfig: {
                model: 'microsoft/phi-4-reasoning-plus:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'microsoft/phi-4-reasoning-plus',
            name: 'Phi-4 Reasoning Plus',
            provider: 'openrouter',
            avatar: 'images/AI/phi.png',
            description: '$0.07/M输入 / $0.35/M输出',
            tooltip: 'Microsoft 2025年5月1日',
            date: new Date('2025-05-01'),
            sortOrder: 48,
            apiConfig: {
                model: 'microsoft/phi-4-reasoning-plus',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'microsoft/phi-4-reasoning:free',
            name: 'Phi-4 Reasoning Free',
            provider: 'openrouter',
            avatar: 'images/AI/phi.png',
            description: '免费',
            tooltip: 'Microsoft 2025年5月1日',
            date: new Date('2025-05-01'),
            sortOrder: 49,
            apiConfig: {
                model: 'microsoft/phi-4-reasoning:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        // 字节跳动模型
        {
            id: 'bytedance-research/ui-tars-72b:free',
            name: 'UI-Tars 72B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: '字节跳动 2025年3月26日',
            date: new Date('2025-03-26'),
            sortOrder: 50,
            apiConfig: {
                model: 'bytedance-research/ui-tars-72b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // NVIDIA模型
        {
            id: 'nvidia/llama-3.3-nemotron-super-49b-v1:free',
            name: 'Nemotron Super 49B Free',
            provider: 'openrouter',
            avatar: 'images/AI/nvidia.png',
            description: '免费',
            tooltip: 'NVIDIA 2025年4月8日',
            date: new Date('2025-04-08'),
            sortOrder: 51,
            apiConfig: {
                model: 'nvidia/llama-3.3-nemotron-super-49b-v1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'nvidia/llama-3.3-nemotron-super-49b-v1',
            name: 'Nemotron Super 49B',
            provider: 'openrouter',
            avatar: 'images/AI/nvidia.png',
            description: '$0.13/M输入 / $0.40/M输出',
            tooltip: 'NVIDIA 2025年4月8日',
            date: new Date('2025-04-08'),
            sortOrder: 52,
            apiConfig: {
                model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1:free',
            name: 'Nemotron Ultra 253B Free',
            provider: 'openrouter',
            avatar: 'images/AI/nvidia.png',
            description: '免费',
            tooltip: 'NVIDIA 2025年4月8日',
            date: new Date('2025-04-08'),
            sortOrder: 53,
            apiConfig: {
                model: 'nvidia/llama-3.1-nemotron-ultra-253b-v1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Amazon模型
        {
            id: 'amazon/nova-pro-v1',
            name: 'Nova Pro',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.80/M输入 / $3.20/M输出',
            tooltip: 'Amazon 2024年12月5日',
            date: new Date('2024-12-05'),
            sortOrder: 54,
            apiConfig: {
                model: 'amazon/nova-pro-v1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Nousresearch模型
        {
            id: 'nousresearch/deephermes-3-mistral-24b-preview:free',
            name: 'DeepHermes 3 Mistral 24B Free',
            provider: 'openrouter',
            avatar: 'images/AI/nous.png',
            description: '免费',
            tooltip: 'Nousresearch 2025年5月9日',
            date: new Date('2025-05-09'),
            sortOrder: 55,
            apiConfig: {
                model: 'nousresearch/deephermes-3-mistral-24b-preview:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Arcee-AI模型
        {
            id: 'arcee-ai/coder-large',
            name: 'Coder Large',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.50/M输入 / $0.80/M输出',
            tooltip: 'Arcee-AI 2025年5月5日',
            date: new Date('2025-05-05'),
            sortOrder: 56,
            apiConfig: {
                model: 'arcee-ai/coder-large',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'arcee-ai/arcee-blitz',
            name: 'Arcee Blitz',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.45/M输入 / $0.75/M输出',
            tooltip: 'Arcee-AI 2025年5月5日',
            date: new Date('2025-05-05'),
            sortOrder: 57,
            apiConfig: {
                model: 'arcee-ai/arcee-blitz',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Inception模型
        {
            id: 'inception/mercury-coder-small-beta',
            name: 'Mercury Coder Small Beta',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.25/M输入 / $1/M输出',
            tooltip: 'Inception 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 58,
            apiConfig: {
                model: 'inception/mercury-coder-small-beta',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // OpenGVLab模型
        {
            id: 'opengvlab/internvl3-14b:free',
            name: 'InternVL3 14B Free',
            provider: 'openrouter',
            avatar: 'images/AI/opengvlab.png',
            description: '免费',
            tooltip: 'OpenGVLab 2025年4月30日',
            date: new Date('2025-04-30'),
            sortOrder: 59,
            apiConfig: {
                model: 'opengvlab/internvl3-14b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // TNGtech模型
        {
            id: 'tngtech/deepseek-r1t-chimera:free',
            name: 'DeepSeek R1T Chimera Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'TNGtech 2025年4月27日',
            date: new Date('2025-04-27'),
            sortOrder: 60,
            apiConfig: {
                model: 'tngtech/deepseek-r1t-chimera:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // THUDM模型
        {
            id: 'thudm/glm-z1-32b:free',
            name: 'GLM-Z1 32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'THUDM 2025年4月25日',
            date: new Date('2025-04-25'),
            sortOrder: 61,
            apiConfig: {
                model: 'thudm/glm-z1-32b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Shisa AI模型
        {
            id: 'shisa-ai/shisa-v2-llama3.3-70b:free',
            name: 'Shisa v2 Llama3.3 70B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Shisa AI 2025年4月15日',
            date: new Date('2025-04-15'),
            sortOrder: 62,
            apiConfig: {
                model: 'shisa-ai/shisa-v2-llama3.3-70b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // EleutherAI模型
        {
            id: 'eleutherai/llemma_7b',
            name: 'Llemma 7B',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.80/M输入 / $1.20/M输出',
            tooltip: 'EleutherAI 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 63,
            apiConfig: {
                model: 'eleutherai/llemma_7b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AlfredPros模型
        {
            id: 'alfredpros/codellama-7b-instruct-solidity',
            name: 'CodeLlama 7B Solidity',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.80/M输入 / $1.20/M输出',
            tooltip: 'AlfredPros 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 64,
            apiConfig: {
                model: 'alfredpros/codellama-7b-instruct-solidity',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // ArliAI模型
        {
            id: 'arliai/qwq-32b-arliai-rpr-v1:free',
            name: 'QWQ 32B ArliAI RPR Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'ArliAI 2025年4月13日',
            date: new Date('2025-04-13'),
            sortOrder: 65,
            apiConfig: {
                model: 'arliai/qwq-32b-arliai-rpr-v1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Agentica模型
        {
            id: 'agentica-org/deepcoder-14b-preview:free',
            name: 'DeepCoder 14B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Agentica 2025年4月13日',
            date: new Date('2025-04-13'),
            sortOrder: 66,
            apiConfig: {
                model: 'agentica-org/deepcoder-14b-preview:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Moonshot AI模型
        {
            id: 'moonshotai/kimi-vl-a3b-thinking:free',
            name: 'KIMI VL A3B Thinking Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Moonshot AI 2025年4月10日',
            date: new Date('2025-04-10'),
            sortOrder: 67,
            apiConfig: {
                model: 'moonshotai/kimi-vl-a3b-thinking:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // All hands模型
        {
            id: 'all-hands/openhands-lm-32b-v0.1',
            name: 'OpenHands LM 32B',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$2.60/M输入 / $3.40/M输出',
            tooltip: 'All hands 2025年4月2日',
            date: new Date('2025-04-02'),
            sortOrder: 68,
            apiConfig: {
                model: 'all-hands/openhands-lm-32b-v0.1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // SCB 10X模型
        {
            id: 'scb10x/llama3.1-typhoon2-70b-instruct',
            name: 'Llama3.1 Typhoon2 70B',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.88/M输入 / $0.88/M输出',
            tooltip: 'SCB 10X 2025年3月28日',
            date: new Date('2025-03-28'),
            sortOrder: 69,
            apiConfig: {
                model: 'scb10x/llama3.1-typhoon2-70b-instruct',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AllenAI模型
        {
            id: 'allenai/molmo-7b-d:free',
            name: 'MoLMo 7B D Free',
            provider: 'openrouter',
            avatar: 'images/AI/allenai.png',
            description: '免费',
            tooltip: 'AllenAI 2025年3月26日',
            date: new Date('2025-03-26'),
            sortOrder: 70,
            apiConfig: {
                model: 'allenai/molmo-7b-d:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Featherless模型
        {
            id: 'featherless/qwerky-72b:free',
            name: 'Qwerky 72B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Featherless 2025年3月20日',
            date: new Date('2025-03-20'),
            sortOrder: 71,
            apiConfig: {
                model: 'featherless/qwerky-72b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Open r1模型
        {
            id: 'open-r1/olympiccoder-32b:free',
            name: 'OlympicCoder 32B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Open r1 2025年3月15日',
            date: new Date('2025-03-15'),
            sortOrder: 72,
            apiConfig: {
                model: 'open-r1/olympiccoder-32b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AI21模型
        {
            id: 'ai21/jamba-1.6-large',
            name: 'Jamba 1.6 Large',
            provider: 'openrouter',
            avatar: 'images/AI/ai21.png',
            description: '$2/M输入 / $8/M输出',
            tooltip: 'AI21 2025年3月13日',
            date: new Date('2025-03-13'),
            sortOrder: 73,
            apiConfig: {
                model: 'ai21/jamba-1.6-large',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'ai21/jamba-1.6-mini',
            name: 'Jamba 1.6 Mini',
            provider: 'openrouter',
            avatar: 'images/AI/ai21.png',
            description: '$0.20/M输入 / $0.40/M输出',
            tooltip: 'AI21 2025年3月13日',
            date: new Date('2025-03-13'),
            sortOrder: 74,
            apiConfig: {
                model: 'ai21/jamba-1.6-mini',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Cohere模型
        {
            id: 'cohere/command-a',
            name: 'Command A',
            provider: 'openrouter',
            avatar: 'images/AI/cohere.png',
            description: '$2.50/M输入 / $10/M输出',
            tooltip: 'Cohere 2025年3月13日',
            date: new Date('2025-03-13'),
            sortOrder: 75,
            apiConfig: {
                model: 'cohere/command-a',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Perplexity模型
        {
            id: 'perplexity/sonar-pro',
            name: 'Sonar Pro',
            provider: 'openrouter',
            avatar: 'images/AI/perplexity.png',
            description: '$3/M输入 / $15/M输出',
            tooltip: 'Perplexity 2025年3月7日',
            date: new Date('2025-03-07'),
            sortOrder: 76,
            apiConfig: {
                model: 'perplexity/sonar-pro',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Cognitive Computation模型
        {
            id: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
            name: 'Dolphin 3.0 R1 Mistral 24B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Cognitive Computation 2025年2月13日',
            date: new Date('2025-02-13'),
            sortOrder: 77,
            apiConfig: {
                model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AionLabs模型
        {
            id: 'aion-labs/aion-1.0',
            name: 'AION 1.0',
            provider: 'openrouter',
            avatar: 'images/AI/aionlabs.png',
            description: '$4/M输入 / $8/M输出',
            tooltip: 'AionLabs 2025年2月4日',
            date: new Date('2025-02-04'),
            sortOrder: 78,
            apiConfig: {
                model: 'aion-labs/aion-1.0',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Liquid模型
        {
            id: 'liquid/lfm-7b',
            name: 'LFM 7B',
            provider: 'openrouter',
            avatar: 'images/AI/liquid.png',
            description: '$0.01/M输入 / $0.01/M输出',
            tooltip: 'Liquid 2025年1月25日',
            date: new Date('2025-01-25'),
            sortOrder: 79,
            apiConfig: {
                model: 'liquid/lfm-7b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // MiniMax模型
        {
            id: 'minimax/minimax-01',
            name: 'MiniMax 01',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '$0.20/M输入 / $1.10/M输出',
            tooltip: 'MiniMax 2025年1月15日',
            date: new Date('2025-01-15'),
            sortOrder: 80,
            apiConfig: {
                model: 'minimax/minimax-01',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Inflection模型
        {
            id: 'inflection/inflection-3-productivity',
            name: 'Inflection 3 Productivity',
            provider: 'openrouter',
            avatar: 'images/AI/inflection.png',
            description: '$2.50/M输入 / $10/M输出',
            tooltip: 'Inflection 2024年10月11日',
            date: new Date('2024-10-11'),
            sortOrder: 81,
            apiConfig: {
                model: 'inflection/inflection-3-productivity',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // 系统角色提示（按照sortOrder降序排列）
        {
            id: 'assistant',
            name: '通用助手',
            avatar: 'images/AI/assistant.png',
            description: '一个有帮助的AI助手',
            prompt: '你是一个有帮助的AI助手，请用中文回答问题。'
        },
        {
            id: 'programmer',
            name: '编程助手',
            avatar: 'images/AI/programmer.png',
            description: '专注于编程问题的助手',
            prompt: '你是一个专业的编程助手，擅长解决编程问题，提供代码示例和解释。请用中文回答问题。'
        },
        {
            id: 'storyteller',
            name: '故事讲述者',
            avatar: 'images/AI/storyteller.png',
            description: '创造有趣故事的助手',
            prompt: '你是一个富有创造力的故事讲述者，能够根据提示创造有趣且引人入胜的故事。请用中文回答问题。'
        },
        {
            id: 'teacher',
            name: '教师',
            avatar: 'images/AI/teacher.png',
            description: '解释概念的教师',
            prompt: '你是一个耐心的教师，擅长清晰地解释复杂概念，使用例子帮助理解。请用中文回答问题。'
        },
        {
            id: 'translator',
            name: '翻译助手',
            avatar: 'images/AI/translator.png',
            description: '多语言翻译助手',
            prompt: '你是一个精通多种语言的翻译助手，能够准确翻译各种语言，并保持原文的语气和意思。如果用户的信息包含要翻译的内容，请直接翻译，不需要解释。请用中文回答问题，除非翻译要求使用其他语言。'
        }
    ],
    
    // 需要登录才能使用的模型
    requireLoginForModels: [
        'qwen/qwen3-235b-a22b', 'qwen/qwen3-30b-a3b', 'qwen/qwen3-32b',
        'qwen/qwen2.5-coder-7b-instruct', 'deepseek/deepseek-r1', 'deepseek/deepseek-prover-v2',
        'deepseek/deepseek-chat-v3-0324', 'openai/gpt-4.1', 'openai/gpt-4.1-nano',
        'openai/gpt-4.1-mini', 'openai/o4-mini-high', 'openai/o1-pro',
        'openai/gpt-4o-mini-search-preview', 'openai/gpt-4.5-preview', 'openai/o3-mini-high',
        'openai/o1', 'openai/gpt-4o-2024-11-20', 'openai/gpt-4',
        'anthropic/claude-3.7-sonnet', 'anthropic/claude-3.7-sonnet:thinking',
        'google/gemini-2.5-pro-preview', 'google/gemini-2.5-flash-preview', 'google/gemini-2.5-pro-exp-03-25',
        'x-ai/grok-3-mini-beta', 'x-ai/grok-3-beta', 'meta-llama/llama-guard-4-12b',
        'mistralai/mistral-medium-3', 'mistral/ministral-8b', 'mistralai/mistral-small-3.1-24b-instruct',
        'microsoft/phi-4-reasoning-plus', 'nvidia/llama-3.3-nemotron-super-49b-v1',
        'amazon/nova-pro-v1', 'arcee-ai/coder-large', 'arcee-ai/arcee-blitz',
        'inception/mercury-coder-small-beta', 'eleutherai/llemma_7b', 'alfredpros/codellama-7b-instruct-solidity',
        'all-hands/openhands-lm-32b-v0.1', 'scb10x/llama3.1-typhoon2-70b-instruct',
        'ai21/jamba-1.6-large', 'ai21/jamba-1.6-mini', 'cohere/command-a',
        'perplexity/sonar-pro', 'aion-labs/aion-1.0', 'liquid/lfm-7b',
        'minimax/minimax-01', 'inflection/inflection-3-productivity'
    ]
};

// 为各大厂商模型更新图标
function updateModelAvatars() {
    // 为各大厂商模型设置正确的图标
    modelsConfig.models.forEach(model => {
        // OpenAI模型
        if (model.id.startsWith('openai/')) {
            model.avatar = 'images/AI/chatgpt.png';
        }
        // Anthropic模型
        else if (model.id.startsWith('anthropic/')) {
            model.avatar = 'images/AI/claude.png';
        }
        // Google模型通用
        else if (model.id.startsWith('google/')) {
            // Gemini特殊处理
            if (model.id.includes('gemini')) {
                model.avatar = 'images/AI/gemini.png';
            } 
            // Gemma特殊处理
            else if (model.id.includes('gemma')) {
                model.avatar = 'images/AI/gemma.png';
            }
            else {
                model.avatar = 'images/AI/google.png';
            }
        }
        // Meta/Llama模型
        else if (model.id.startsWith('meta-llama/')) {
            model.avatar = 'images/AI/meta.png';
        }
        // Mistral模型
        else if (model.id.startsWith('mistral') || model.id.includes('mistral')) {
            model.avatar = 'images/AI/mistral.png';
        }
        // Microsoft/Phi模型
        else if (model.id.startsWith('microsoft/')) {
            model.avatar = 'images/AI/phi.png';
        }
        // NVIDIA模型
        else if (model.id.startsWith('nvidia/')) {
            model.avatar = 'images/AI/nvidia.png';
        }
        // Deepseek模型
        else if (model.id.includes('deepseek')) {
            model.avatar = 'images/AI/deepseek.png';
        }
        // QWQ模型 - 阿里云官方
        else if (model.id.includes('qwen/qwq')) {
            model.avatar = 'images/AI/qwq.png';
        }
        // Qwen模型
        else if (model.id.includes('qwen')) {
            model.avatar = 'images/AI/qwen.png';
        }
        // Nous模型
        else if (model.id.startsWith('nousresearch/')) {
            model.avatar = 'images/AI/nous.png';
        }
        // OpenGVLab模型
        else if (model.id.startsWith('opengvlab/')) {
            model.avatar = 'images/AI/opengvlab.png';
        }
        // Grok模型
        else if (model.id.startsWith('x-ai/')) {
            model.avatar = 'images/AI/grok.png';
        }
        // AllenAI模型
        else if (model.id.startsWith('allenai/')) {
            model.avatar = 'images/AI/allenai.png';
        }
        // AI21模型
        else if (model.id.startsWith('ai21/')) {
            model.avatar = 'images/AI/ai21.png';
        }
        // Cohere模型
        else if (model.id.startsWith('cohere/')) {
            model.avatar = 'images/AI/cohere.png';
        }
        // Perplexity模型
        else if (model.id.startsWith('perplexity/')) {
            model.avatar = 'images/AI/perplexity.png';
        }
        // AionLabs模型
        else if (model.id.startsWith('aion-labs/')) {
            model.avatar = 'images/AI/aionlabs.png';
        }
        // Liquid模型
        else if (model.id.startsWith('liquid/')) {
            model.avatar = 'images/AI/liquid.png';
        }
        // Inflection模型
        else if (model.id.startsWith('inflection/')) {
            model.avatar = 'images/AI/inflection.png';
        }
        // ArliAI模型 
        else if (model.id.startsWith('arliai/')) {
            model.avatar = 'images/AI/huggingface.png';
        }
        // 默认使用Hugging Face图标
        else {
            model.avatar = 'images/AI/huggingface.png';
        }
    });
}

// 手动设置特定模型的图标 - 这些设置优先级高于自动匹配的规则
function setCustomModelAvatars() {
    // 查找特定模型ID并设置其图标
    modelsConfig.models.forEach(model => {
        // 这里可以根据需要添加更多特定的模型图标映射
        const customAvatars = {
            'anthropic/claude-3.7-sonnet': 'images/AI/claude.png',
            'anthropic/claude-3.7-sonnet:thinking': 'images/AI/claude.png',
            'google/gemini-2.5-pro-preview': 'images/AI/gemini.png',
            'google/gemini-2.5-flash-preview': 'images/AI/gemini.png',
            'google/gemini-2.5-pro-exp-03-25': 'images/AI/gemini.png',
            'google/gemma-3-27b-it:free': 'images/AI/gemma.png',
            'x-ai/grok-3-mini-beta': 'images/AI/grok.png',
            'x-ai/grok-3-beta': 'images/AI/grok.png',
            'allenai/molmo-7b-d:free': 'images/AI/allenai.png',
            'ai21/jamba-1.6-large': 'images/AI/ai21.png',
            'ai21/jamba-1.6-mini': 'images/AI/ai21.png',
            'cohere/command-a': 'images/AI/cohere.png',
            'perplexity/sonar-pro': 'images/AI/perplexity.png',
            'aion-labs/aion-1.0': 'images/AI/aionlabs.png',
            'liquid/lfm-7b': 'images/AI/liquid.png',
            'inflection/inflection-3-productivity': 'images/AI/inflection.png',
            'arliai/qwq-32b-arliai-rpr-v1:free': 'images/AI/huggingface.png',
            'nousresearch/deephermes-3-mistral-24b-preview:free': 'images/AI/nous.png'
        };
        
        // 如果有自定义图标设置，则应用它
        if (customAvatars[model.id]) {
            model.avatar = customAvatars[model.id];
        }
    });
}

// 初始化模型图标
updateModelAvatars();
setCustomModelAvatars();

// 导出模型配置
window.modelsConfig = modelsConfig; 