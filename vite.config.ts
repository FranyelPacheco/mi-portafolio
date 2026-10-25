import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugin para ejecutar la serverless function /api/send en el entorno local de desarrollo (npm run dev)
function apiDevMiddleware(): Plugin {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { default: handler } = await server.ssrLoadModule('/api/send.ts');
              const mockRes = {
                statusCode: 200,
                headers: {} as Record<string, string>,
                setHeader(k: string, v: string) {
                  this.headers[k] = v;
                },
                status(code: number) {
                  this.statusCode = code;
                  return this;
                },
                json(data: any) {
                  res.statusCode = this.statusCode;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                },
                end(data?: any) {
                  res.statusCode = this.statusCode;
                  res.end(data);
                },
              };
              await handler({ method: 'POST', body: JSON.parse(body || '{}') }, mockRes);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Error en servidor local' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), tailwindcss(), apiDevMiddleware()],
    build: {
      rollupOptions: {
        output: {
          // Separa vendors de animación del bundle principal para carga en paralelo
          manualChunks(id: string) {
            if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('node_modules/lenis')) {
              return 'vendor-lenis';
            }
            if (id.includes('node_modules/motion')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
              return 'vendor-react';
            }
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
  };
})
