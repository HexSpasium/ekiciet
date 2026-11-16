import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages alt yollarında da çalışması için göreli asset yolları.
  base: './',
})
