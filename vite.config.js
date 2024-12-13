import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    mode === 'production'
      ? 'https://reposocratech.github.io/HTML-CSS-Quiz/'
      : '/',
  css: {
    devSourcemap: true,
  },
}));
