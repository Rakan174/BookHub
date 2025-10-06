# BookHub Blog - Quick Start Guide

Get your site live in 10 minutes! 🚀

## Prerequisites

- Git installed ([Download here](https://git-scm.com/downloads))
- GitHub account ([Sign up](https://github.com/join))
- Netlify account ([Sign up](https://app.netlify.com/signup))

## Step 1: Add Your Logo (2 minutes)

1. Save your logo as `logo.png`
2. Place it in the `images/` folder
3. Recommended size: 200x200px, transparent background

## Step 2: Push to GitHub (3 minutes)

Open terminal/command prompt in your project folder:

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: BookHub Blog"

# Create GitHub repo (or do it via web interface)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/bookhub-blog.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Deploy to Netlify (5 minutes)

### Option A: Connect GitHub (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select `bookhub-blog` repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (dot)
6. Click "Deploy site"

### Option B: Manual Deploy (Quick Test)

1. Go to [Netlify](https://app.netlify.com)
2. Drag your project folder onto the dashboard
3. Done!

## Step 4: Customize Domain (Optional)

1. In Netlify, go to "Domain settings"
2. Click "Options" → "Edit site name"
3. Change to: `bookhub-blog` (or your choice)
4. Your site: `bookhub-blog.netlify.app`

## That's It! 🎉

Your site is now live at: `https://your-site-name.netlify.app`

## Quick Customization

### Change Site Title
Edit line 6 in each HTML file:
```html
<title>Your Custom Title - BookHub Blog</title>
```

### Change Hero Text
Edit index.html, line ~85:
```html
<h1>Your Custom Headline</h1>
```

### Update Contact Email
Edit contact.html, line ~67:
```html
<p class="text-slate-400 text-sm">youremail@domain.com</p>
```

## Need Help?

- **Full Documentation**: See `README.md`
- **Deployment Details**: See `DEPLOYMENT_GUIDE.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`

## Common Issues

**Images not loading?**
- Check logo is at `./images/logo.png`
- Verify file name matches exactly (case-sensitive)

**Site not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for Netlify to deploy
- Check deploy log in Netlify dashboard

**CSS not working?**
- Verify Tailwind CDN link is present
- Check browser console for errors

## What's Next?

1. Share your site!
2. Add your own content
3. Set up Google Analytics (optional)
4. Configure custom domain (optional)
5. Start blogging!

---

**Live Site Checklist:**
- [ ] Logo added
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] All pages work
- [ ] Forms function
- [ ] Mobile responsive
- [ ] HTTPS enabled

**Congratulations! You're live! 🎊**

Share your site: `https://your-site.netlify.app`