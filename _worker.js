export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 对API请求的路径进行处理
    if (url.pathname === '/api/config') {
      // 返回环境变量给前端（只返回必要的变量）
      return new Response(JSON.stringify({
        OPENROUTER_API_KEY: env.OPENROUTER_API_KEY || '',
        LOGIN_USERNAME: env.LOGIN_USERNAME || '',
        LOGIN_PASSWORD: env.LOGIN_PASSWORD || '',
        // 添加其他需要的环境变量
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    }
    
    // 对其他请求使用默认的Pages资源处理
    return env.ASSETS.fetch(request);
  }
} 