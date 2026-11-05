import { execSync } from 'child_process';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function getGitValue(command, fallback = 'unknown') {
  try {
    return execSync(command, { cwd: rootDir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return fallback;
  }
}

const commitSha = process.env.COMMIT_REF || process.env.GITHUB_SHA || getGitValue('git rev-parse HEAD');
const headSha = process.env.PR_HEAD_SHA || process.env.GITHUB_HEAD_SHA || commitSha;
const branch = process.env.BRANCH || process.env.GITHUB_REF_NAME || getGitValue('git rev-parse --abbrev-ref HEAD');

let ciRunUrl = 'local';
if (process.env.GITHUB_RUN_ID && process.env.GITHUB_REPOSITORY) {
  const server = process.env.GITHUB_SERVER_URL || 'https://github.com';
  ciRunUrl = `${server}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
} else if (process.env.DEPLOY_URL) {
  ciRunUrl = process.env.DEPLOY_URL;
}

const buildInfo = {
  commit_sha: commitSha,
  head_sha: headSha,
  branch: branch,
  built_at: new Date().toISOString(),
  ci_run_url: ciRunUrl,
  generator: 'med-ally-website',
  prerendered_routes_count: 18,
};

const jsonStr = JSON.stringify(buildInfo, null, 2);

const publicDir = path.resolve(rootDir, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}
writeFileSync(path.resolve(publicDir, 'build-info.json'), jsonStr);

const distDir = path.resolve(rootDir, 'dist');
if (existsSync(distDir)) {
  writeFileSync(path.resolve(distDir, 'build-info.json'), jsonStr);
}

console.log('Generated build-info.json:');
console.log(jsonStr);
