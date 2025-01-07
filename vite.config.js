import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/naveen-portfolio/', // Make sure this matches your repo name
  plugins: [react()],
})
