// Adicione este arquivo na raiz do seu projeto
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ← ISSO É CRUCIAL!
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})