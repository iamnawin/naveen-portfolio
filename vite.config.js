import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/naveen-portfolio/', // Matches your repository name for GitHub Pages or Vercel
  build: {
    outDir: 'dist', // Default output directory
  },
  plugins: [react()],
})
