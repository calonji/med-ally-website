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
      threshold: 1024, // Lower threshold to include smaller files
      filter: /\.(js|css|html|svg|json)$/i, // Include HTML files
      deleteOriginFile: false, // Keep the original files
      compressionOptions: {
        level: 9, // Highest compression level
      },
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Lower threshold to include smaller files
      filter: /\.(js|css|html|svg|json)$/i, // Include HTML files
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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})




