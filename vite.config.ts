import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, Plugin } from "vite"
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10kb
      deleteOriginFile: false, // Keep the original files
      compressionOptions: {
        level: 9, // Highest compression level
      },
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
      compressionOptions: {
        level: 11, // Highest compression level for Brotli
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})




