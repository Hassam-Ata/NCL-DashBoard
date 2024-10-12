// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to the external API
      '/data': {
        target: 'http://pdm.nedncl.com',  // Your API base URL
        changeOrigin: true,  // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/data/, '/data'),  // Optional path rewrite
      },
    },
  },
});