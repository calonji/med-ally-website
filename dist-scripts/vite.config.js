import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from 'fs';
// Custom plugin to handle blog directory listing
function blogPlugin() {
    return {
        name: 'blog-plugin',
        configureServer: function (server) {
            server.middlewares.use(function (req, res, next) {
                if (req.url === '/api/blog-posts') {
                    var blogDir = path.join(process.cwd(), 'public/blog');
                    try {
                        var files = fs.readdirSync(blogDir);
                        var htmlFiles = files.filter(function (file) { return file.endsWith('.html'); });
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(htmlFiles));
                    }
                    catch (error) {
                        console.error('Error reading blog directory:', error);
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: 'Failed to read blog directory' }));
                    }
                    return;
                }
                next();
            });
        },
        // Add build hook to generate blog-posts.json during build
        buildEnd: function () {
            var blogDir = path.join(process.cwd(), 'public/blog');
            var outputDir = path.join(process.cwd(), 'public/api');
            try {
                // Create api directory if it doesn't exist
                if (!fs.existsSync(outputDir)) {
                    fs.mkdirSync(outputDir, { recursive: true });
                }
                // Read blog files and write to json
                var files = fs.readdirSync(blogDir);
                var htmlFiles = files.filter(function (file) { return file.endsWith('.html'); });
                fs.writeFileSync(path.join(outputDir, 'blog-posts.json'), JSON.stringify(htmlFiles));
            }
            catch (error) {
                console.error('Error generating blog-posts.json:', error);
            }
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
});
//# sourceMappingURL=vite.config.js.map