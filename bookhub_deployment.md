# BookHub Blog - Deployment Guide

This guide will help you deploy your BookHub Blog website to GitHub and Netlify.

## Prerequisites

- Git installed on your computer
- A GitHub account
- A Netlify account (free tier is sufficient)
- Your website files ready

## Step 1: Prepare Your Files

Make sure your project structure looks like this:

```
bookhub-blog/
├── index.html
├── books.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── logo.png
├── README.md
├── netlify.toml
└── .gitignore
```

**Important:** Add your logo image to the `images/` folder and name it `logo.png`

## Step 2: Initialize Git Repository

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: BookHub Blog website"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `bookhub-blog` (or your preferred name)
4. Description: "BookHub Blog - The Blog for Leaders"
5. Choose "Public" or "Private"
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/bookhub-blog.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Deploy to Netlify

### Method 1: Deploy from GitHub (Recommended)

1. Go to [Netlify](https://www.netlify.com/) and sign up/log in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your `bookhub-blog` repository
6. Configure build settings:
   - **Branch to deploy**: main
   - **Build command**: leave empty
   - **Publish directory**: . (dot)
7. Click "Deploy site"

### Method 2: Manual Deploy (Quick Test)

1. Go to [Netlify](https://www.netlify.com/)
2. Drag an