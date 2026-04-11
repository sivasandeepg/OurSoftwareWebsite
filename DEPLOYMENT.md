# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### 1. Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `sivasandeepg/OwnWebsite_Primary_version`
4. Vercel will automatically detect Next.js and configure settings

### 2. Build Settings
Vercel will automatically use these settings from your `next.config.js`:
- **Build Command**: `npm run build`
- **Output Directory**: `out` (from static export)
- **Install Command**: `npm install`

### 3. Deploy
- Click "Deploy"
- Your site will be live at: `https://your-project-name.vercel.app`

## Manual Static Export

If you want to deploy manually:

```bash
# Build and export static files
npm run export

# The 'out' folder contains your static website
# Upload this folder to any static hosting service
```

## Alternative Hosting Options

### Netlify
1. Run `npm run export`
2. Drag the `out` folder to Netlify
3. Or connect GitHub repository for auto-deployment

### GitHub Pages
1. Run `npm run export`
2. Copy contents of `out` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### AWS S3 + CloudFront
1. Run `npm run export`
2. Upload `out` folder to S3 bucket
3. Configure CloudFront distribution

## Environment Variables (Optional)

For future dynamic features:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_API_URL` - API endpoint (when adding backend)

## Custom Domain (Vercel)

1. Go to project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify navigation works
- [ ] Test contact form
- [ ] Check animations and interactions
- [ ] Validate HTML/CSS
- [ ] Test on different browsers

## Troubleshooting

### Build Errors
- Check `package.json` dependencies
- Verify Node.js version (18+)
- Clear cache: `rm -rf .next`

### Deployment Issues
- Check Vercel logs
- Verify build output directory
- Ensure static export is working

### Performance
- Enable Vercel Analytics
- Optimize images in `/public/images`
- Consider CDN for static assets

## Next Steps

After successful deployment:

1. **Customize Content**: Edit `/config/siteConfig.js`
2. **Add Real Images**: Replace placeholder images
3. **Set Up Analytics**: Google Analytics, Vercel Analytics
4. **Monitor Performance**: Use Vercel Speed Insights
5. **SEO Optimization**: Add meta tags, sitemap

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Issues](https://github.com/sivasandeepg/OwnWebsite_Primary_version/issues)
