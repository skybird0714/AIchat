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
            id: 'openai/o4-mini-high',
            name: 'O4 Mini High',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'OpenAI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 21,
            apiConfig: {
                model: 'openai/o4-mini-high',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4.1',
            name: 'GPT-4.1',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$2.00/M输入 / $8.00/M输出',
            tooltip: 'OpenAI 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 22,
            apiConfig: {
                model: 'openai/gpt-4.1',
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
            id: 'openai/gpt-4.1-nano',
            name: 'GPT-4.1 Nano',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$0.10/M输入 / $0.40/M输出',
            tooltip: 'OpenAI 2025年4月14日',
            date: new Date('2025-04-14'),
            sortOrder: 24,
            apiConfig: {
                model: 'openai/gpt-4.1-nano',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4o-mini-search-preview',
            name: 'GPT-4o Mini Search Preview',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$0.15/M输入 / $0.60/M输出',
            tooltip: 'OpenAI 2025年3月12日',
            date: new Date('2025-03-12'),
            sortOrder: 25,
            apiConfig: {
                model: 'openai/gpt-4o-mini-search-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/o1-pro',
            name: 'O1 Pro',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$150.00/M输入 / $600.00/M输出',
            tooltip: 'OpenAI 2025年3月19日',
            date: new Date('2025-03-19'),
            sortOrder: 26,
            apiConfig: {
                model: 'openai/o1-pro',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'openai/gpt-4.5-preview',
            name: 'GPT-4.5 Preview',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$75.00/M输入 / $150.00/M输出',
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
            description: '$15.00/M输入 / $60.00/M输出',
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
            name: 'GPT-4o 2024-11-20',
            provider: 'openrouter',
            avatar: 'images/AI/chatgpt.png',
            description: '$2.50/M输入 / $10.00/M输出',
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
            description: '$30.00/M输入 / $60.00/M输出',
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
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Anthropic 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 32,
            apiConfig: {
                model: 'anthropic/claude-3.7-sonnet',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'anthropic/claude-3.7-sonnet:thinking',
            name: 'Claude 3.7 Sonnet: Thinking',
            provider: 'openrouter',
            avatar: 'images/AI/claude.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Anthropic 2025年4月16日',
            date: new Date('2025-04-16'),
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
            name: 'Google Gemini Pro Preview',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Google 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 34,
            apiConfig: {
                model: 'google/gemini-2.5-pro-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemini-2.5-flash-preview',
            name: 'Google Gemini Flash Preview',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Google 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 35,
            apiConfig: {
                model: 'google/gemini-2.5-flash-preview',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemini-2.5-pro-exp-03-25',
            name: 'Google Gemini Pro Exp 03-25',
            provider: 'openrouter',
            avatar: 'images/AI/gemini.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Google 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 36,
            apiConfig: {
                model: 'google/gemini-2.5-pro-exp-03-25',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'google/gemma-3-27b-it:free',
            name: 'Google Gemma 3 27B IT Free',
            provider: 'openrouter',
            avatar: 'images/AI/gemma.png',
            description: '免费',
            tooltip: 'Google 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 37,
            apiConfig: {
                model: 'google/gemma-3-27b-it:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Meta/Llama模型（按照发布日期降序排列）
        {
            id: 'meta-llama/llama-guard-4-12b',
            name: 'Meta Llama Guard 4 12B',
            provider: 'openrouter',
            avatar: 'images/AI/meta.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Meta 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 38,
            apiConfig: {
                model: 'meta-llama/llama-guard-4-12b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Mistral模型（按照发布日期降序排列）
        {
            id: 'mistralai/mistral-medium-3',
            name: 'Mistral Medium 3',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Mistral 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 39,
            apiConfig: {
                model: 'mistralai/mistral-medium-3',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'mistral/ministral-8b',
            name: 'Mistral Ministral 8B',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Mistral 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 40,
            apiConfig: {
                model: 'mistral/ministral-8b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'mistralai/mistral-small-3.1-24b-instruct',
            name: 'Mistral Small 3.1 24B Instruct',
            provider: 'openrouter',
            avatar: 'images/AI/mistral.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Mistral 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 41,
            apiConfig: {
                model: 'mistralai/mistral-small-3.1-24b-instruct',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Microsoft/Phi模型（按照发布日期降序排列）
        {
            id: 'microsoft/phi-4-reasoning-plus',
            name: 'Microsoft Phi 4 Reasoning Plus',
            provider: 'openrouter',
            avatar: 'images/AI/phi.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Microsoft 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 42,
            apiConfig: {
                model: 'microsoft/phi-4-reasoning-plus',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // NVIDIA模型（按照发布日期降序排列）
        {
            id: 'nvidia/llama-3.3-nemotron-super-49b-v1',
            name: 'Llama 3.3 Nemotron Super 49B',
            provider: 'openrouter',
            avatar: 'images/AI/nvidia.png',
            description: '$0.20/M输入 / $0.40/M输出',
            tooltip: 'NVIDIA 2025年4月25日',
            date: new Date('2025-04-25'),
            sortOrder: 43,
            apiConfig: {
                model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Amazon模型（按照发布日期降序排列）
        {
            id: 'amazon/nova-pro-v1',
            name: 'Amazon Nova Pro v1',
            provider: 'openrouter',
            avatar: 'images/AI/amazon.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Amazon 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 44,
            apiConfig: {
                model: 'amazon/nova-pro-v1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // ArceeAI模型（按照发布日期降序排列）
        {
            id: 'arcee-ai/coder-large',
            name: 'Arcee AI Coder Large',
            provider: 'openrouter',
            avatar: 'images/AI/arcee.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Arcee AI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 45,
            apiConfig: {
                model: 'arcee-ai/coder-large',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'arcee-ai/arcee-blitz',
            name: 'Arcee AI Arcee Blitz',
            provider: 'openrouter',
            avatar: 'images/AI/arcee.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Arcee AI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 46,
            apiConfig: {
                model: 'arcee-ai/arcee-blitz',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Inception模型（按照发布日期降序排列）
        {
            id: 'inception/mercury-coder-small-beta',
            name: 'Inception Mercury Coder Small Beta',
            provider: 'openrouter',
            avatar: 'images/AI/inception.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Inception 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 47,
            apiConfig: {
                model: 'inception/mercury-coder-small-beta',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // EleutherAI模型（按照发布日期降序排列）
        {
            id: 'eleutherai/llemma_7b',
            name: 'EleutherAI Llemma 7B',
            provider: 'openrouter',
            avatar: 'images/AI/eleutherai.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'EleutherAI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 48,
            apiConfig: {
                model: 'eleutherai/llemma_7b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AlfredPros模型（按照发布日期降序排列）
        {
            id: 'alfredpros/codellama-7b-instruct-solidity',
            name: 'AlfredPros Codellama 7B Instruct Solidity',
            provider: 'openrouter',
            avatar: 'images/AI/alfredpros.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'AlfredPros 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 49,
            apiConfig: {
                model: 'alfredpros/codellama-7b-instruct-solidity',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // All-Hands模型（按照发布日期降序排列）
        {
            id: 'all-hands/openhands-lm-32b-v0.1',
            name: 'All-Hands OpenHands LM 32B v0.1',
            provider: 'openrouter',
            avatar: 'images/AI/all-hands.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'All-Hands 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 50,
            apiConfig: {
                model: 'all-hands/openhands-lm-32b-v0.1',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // SCB10x模型（按照发布日期降序排列）
        {
            id: 'scb10x/llama3.1-typhoon2-70b-instruct',
            name: 'SCB10x Llama3.1 Typhoon2 70B Instruct',
            provider: 'openrouter',
            avatar: 'images/AI/scb10x.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'SCB10x 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 51,
            apiConfig: {
                model: 'scb10x/llama3.1-typhoon2-70b-instruct',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AI21模型（按照发布日期降序排列）
        {
            id: 'ai21/jamba-1.6-large',
            name: 'AI21 Jamba 1.6 Large',
            provider: 'openrouter',
            avatar: 'images/AI/ai21.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'AI21 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 52,
            apiConfig: {
                model: 'ai21/jamba-1.6-large',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'ai21/jamba-1.6-mini',
            name: 'AI21 Jamba 1.6 Mini',
            provider: 'openrouter',
            avatar: 'images/AI/ai21.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'AI21 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 53,
            apiConfig: {
                model: 'ai21/jamba-1.6-mini',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Cohere模型（按照发布日期降序排列）
        {
            id: 'cohere/command-a',
            name: 'Cohere Command A',
            provider: 'openrouter',
            avatar: 'images/AI/cohere.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Cohere 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 54,
            apiConfig: {
                model: 'cohere/command-a',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Perplexity模型（按照发布日期降序排列）
        {
            id: 'perplexity/sonar-pro',
            name: 'Perplexity Sonar Pro',
            provider: 'openrouter',
            avatar: 'images/AI/perplexity.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Perplexity 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 55,
            apiConfig: {
                model: 'perplexity/sonar-pro',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // AionLabs模型（按照发布日期降序排列）
        {
            id: 'aion-labs/aion-1.0',
            name: 'Aion Labs Aion 1.0',
            provider: 'openrouter',
            avatar: 'images/AI/aionlabs.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Aion Labs 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 56,
            apiConfig: {
                model: 'aion-labs/aion-1.0',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Liquid模型（按照发布日期降序排列）
        {
            id: 'liquid/lfm-7b',
            name: 'Liquid LFM 7B',
            provider: 'openrouter',
            avatar: 'images/AI/liquid.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Liquid 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 57,
            apiConfig: {
                model: 'liquid/lfm-7b',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // Inflection模型（按照发布日期降序排列）
        {
            id: 'inflection/inflection-3-productivity',
            name: 'Inflection Inflection 3 Productivity',
            provider: 'openrouter',
            avatar: 'images/AI/inflection.png',
            description: '$1.10/M输入 / $4.40/M输出',
            tooltip: 'Inflection 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 58,
            apiConfig: {
                model: 'inflection/inflection-3-productivity',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        
        // ArliAI模型（按照发布日期降序排列）
        {
            id: 'arliai/qwq-32b-arliai-rpr-v1:free',
            name: 'ArliAI QWQ 32B Arliai RPR v1 Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'ArliAI 2025年4月16日',
            date: new Date('2025-04-16'),
            sortOrder: 59,
            apiConfig: {
                model: 'arliai/qwq-32b-arliai-rpr-v1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'nousresearch/deephermes-3-mistral-24b-preview:free',
            name: 'DeepHermes 3 Mistral 24B Free',
            provider: 'openrouter',
            avatar: 'images/AI/nous.png',
            description: '免费',
            tooltip: 'Nousresearch 2025年3月9日',
            date: new Date('2025-03-09'),
            sortOrder: 60,
            apiConfig: {
                model: 'nousresearch/deephermes-3-mistral-24b-preview:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
            name: 'Dolphin 3.0 R1 Mistral 24B Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'Cognitive Computation 2025年2月13日',
            date: new Date('2025-02-13'),
            sortOrder: 61,
            apiConfig: {
                model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'bytedance-research/ui-tars-72b:free',
            name: 'UI-TARS 72B Free',
            provider: 'openrouter',
            avatar: 'images/AI/bytedance.png',
            description: '免费',
            tooltip: 'ByteDance 2025年3月12日',
            date: new Date('2025-03-12'),
            sortOrder: 62,
            apiConfig: {
                model: 'bytedance-research/ui-tars-72b:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'allenai/molmo-7b-d:free',
            name: 'Molmo 7B Free',
            provider: 'openrouter',
            avatar: 'images/AI/allenai.png',
            description: '免费',
            tooltip: 'AllenAI 2025年2月1日',
            date: new Date('2025-02-01'),
            sortOrder: 63,
            apiConfig: {
                model: 'allenai/molmo-7b-d:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'arliai/qwq-32b-arliai-rpr-v1:free',
            name: 'QWQ 32B ArliAI RPR Free',
            provider: 'openrouter',
            avatar: 'images/AI/huggingface.png',
            description: '免费',
            tooltip: 'ArliAI 2025年3月9日',
            date: new Date('2025-03-09'),
            sortOrder: 64,
            apiConfig: {
                model: 'arliai/qwq-32b-arliai-rpr-v1:free',
                temperature: 0.7,
                max_tokens: 2000
            }
        },
        {
            id: 'nvidia/llama-3.3-nemotron-super-49b-v1',
            name: 'Llama 3.3 Nemotron Super 49B',
            provider: 'openrouter',
            avatar: 'images/AI/nvidia.png',
            description: '$0.20/M输入 / $0.40/M输出',
            tooltip: 'NVIDIA 2025年4月25日',
            date: new Date('2025-04-25'),
            sortOrder: 65,
            apiConfig: {
                model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
                temperature: 0.7,
                max_tokens: 2000
            }
        }
    ],
    
    // 角色预设
    roles: [
        {
            id: 'default',
            name: '默认助手',
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