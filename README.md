# MedAlly Website

Modern, responsive website for MedAlly built with React, TypeScript, and Tailwind CSS.

## Deployment Status

[![Deploy to Vercel](https://github.com/calonji/med-ally-website/actions/workflows/vercel-deploy.yml/badge.svg)](https://github.com/calonji/med-ally-website/actions/workflows/vercel-deploy.yml)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The website is automatically deployed to Vercel with the following environments:

- Production (main branch): https://med-ally-website.vercel.app
- Preview (develop branch): https://develop.med-ally-website.vercel.app
- PR Previews: Unique URL for each pull request

## Test Deployment

This is a test change to verify our deployment workflow.

### Branching Strategy

1. `main` - Production branch
   - Protected branch
   - Requires PR approval
   - Automatically deploys to production

2. `develop` - Development branch
   - Main development branch
   - Automatically deploys to preview environment

3. Feature branches
   - Branch from: `develop`
   - Merge to: `develop`
   - Naming: `feature/feature-name`
   - Creates preview deployment when PR is opened

### Workflow

1. Create a feature branch from `develop`:
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push -u origin feature/your-feature-name
   ```

3. Create a Pull Request to `develop`
4. After review and approval, merge to `develop`
5. Create a PR from `develop` to `main` for production release
