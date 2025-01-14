var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
var DOMAIN = 'https://medally.ai';
function generateSitemap() {
    return __awaiter(this, void 0, void 0, function () {
        var pages, blogPosts, images, pageEntries, blogEntries, imageEntries, sitemap, prettierConfig, formattedSitemap, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, globby([
                            'src/pages/**/*.tsx',
                            '!src/pages/api',
                            '!src/pages/[id].tsx',
                            '!src/pages/404.tsx'
                        ])];
                case 1:
                    pages = _a.sent();
                    return [4 /*yield*/, globby(['public/blog/**/*.md'])];
                case 2:
                    blogPosts = _a.sent();
                    return [4 /*yield*/, globby(['public/images/**/*.{jpg,jpeg,png,gif,webp}'])];
                case 3:
                    images = _a.sent();
                    pageEntries = pages.map(function (page) {
                        var path = page
                            .replace('src/pages', '')
                            .replace('.tsx', '')
                            .replace('/index', '');
                        return "\n        <url>\n          <loc>".concat(DOMAIN).concat(path, "</loc>\n          <lastmod>").concat(new Date().toISOString(), "</lastmod>\n          <changefreq>weekly</changefreq>\n          <priority>0.8</priority>\n        </url>");
                    });
                    blogEntries = blogPosts.map(function (post) {
                        var path = post
                            .replace('public', '')
                            .replace('.md', '');
                        return "\n        <url>\n          <loc>".concat(DOMAIN).concat(path, "</loc>\n          <lastmod>").concat(new Date().toISOString(), "</lastmod>\n          <changefreq>weekly</changefreq>\n          <priority>0.7</priority>\n        </url>");
                    });
                    imageEntries = images.map(function (image) {
                        var path = image.replace('public', '');
                        return "\n        <url>\n          <loc>".concat(DOMAIN).concat(path, "</loc>\n          <lastmod>").concat(new Date().toISOString(), "</lastmod>\n          <changefreq>monthly</changefreq>\n          <priority>0.5</priority>\n        </url>");
                    });
                    sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n      <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n        ".concat(pageEntries.join(''), "\n        ").concat(blogEntries.join(''), "\n        ").concat(imageEntries.join(''), "\n      </urlset>");
                    prettierConfig = {
                        parser: 'html',
                        printWidth: 120,
                        tabWidth: 2,
                        useTabs: false,
                        singleQuote: true,
                        bracketSpacing: true
                    };
                    return [4 /*yield*/, prettier.format(sitemap, prettierConfig)];
                case 4:
                    formattedSitemap = _a.sent();
                    // Write the sitemap
                    fs.writeFileSync('public/sitemap.xml', formattedSitemap);
                    console.log('Sitemap generated successfully!');
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('Error generating sitemap:', error_1);
                    process.exit(1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
generateSitemap();
//# sourceMappingURL=generate-sitemap.js.map