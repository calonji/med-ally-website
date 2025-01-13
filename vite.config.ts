import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, Plugin } from "vite"
import fs from 'fs'

// Custom plugin to handle blog directory listing
function blogPlugin(): Plugin {
  return {
    name: 'blog-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/blog-posts') {
          const blogDir = path.join(process.cwd(), 'public/blog');
          try {
            const files = fs.readdirSync(blogDir);
            const htmlFiles = files.filter(file => file.endsWith('.html'));
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(htmlFiles));
          } catch (error) {
            console.error('Error reading blog directory:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to read blog directory' }));
          }
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), blogPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})




