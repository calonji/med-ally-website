import { execSync } from 'child_process';

console.log('🚀 Starting deployment process...');

try {
    // Build the project
    console.log('\n📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // Deploy to Vercel
    console.log('\n🚀 Deploying to Vercel...');
    execSync('vercel --prod', { stdio: 'inherit' });

    console.log('\n✅ Deployment successful!');
} catch (error) {
    console.error('\n❌ Deployment failed:', error);
    process.exit(1);
}
