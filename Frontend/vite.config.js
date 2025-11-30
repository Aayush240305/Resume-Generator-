import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: [react()],
 server: {
  proxy: {
   '/resume/api/v1': {
     target: 'http://localhost:5000',
     changeOrigin: true,
     secure: false,
      },
    },
  },
});