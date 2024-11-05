import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? 'https://sergio-jr-dev.github.io/HTML-CSS-QUIZ/' : '/',
}));
