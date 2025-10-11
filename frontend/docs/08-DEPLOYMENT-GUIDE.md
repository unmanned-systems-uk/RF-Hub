# Deployment Guide

**Last Updated:** October 8, 2025

# Deployment Guide

**Document Owner:** Claude Code  
**Last Updated:** October 8, 2025  
**Status:** Planning Phase

---

## 🎯 Overview

This document covers hosting, deployment, CI/CD pipelines, and infrastructure for RF Learning Hub.

**Current Status:** Development phase - no deployment yet  
**Target Deployment:** Q1 2026 (Beta launch)

---

## 🌐 Hosting Options

### Option 1: Netlify (Recommended for MVP)

**Pros:**
- ✅ Free tier very generous
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Dead simple deployment (connect to GitHub)
- ✅ Preview deployments for PRs
- ✅ Form handling included
- ✅ Serverless functions available

**Cons:**
- ❌ Limited backend capabilities
- ❌ 100GB bandwidth/month on free tier (may need upgrade)

**Best For:** Static site + Firebase backend

**Free Tier Limits:**
- Bandwidth: 100GB/month
- Build minutes: 300/month
- Sites: Unlimited
- Forms: 100 submissions/month

**Pricing (if we exceed free tier):**
- Pro: $19/month (400GB bandwidth)
- Business: $99/month (1TB bandwidth)

**Setup Time:** 30 minutes

---

### Option 2: Vercel

**Pros:**
- ✅ Excellent performance
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ GitHub integration
- ✅ Serverless functions
- ✅ Preview deployments

**Cons:**
- ❌ Similar limitations to Netlify
- ❌ Serverless function execution limits

**Best For:** Static site + Firebase backend

**Free Tier Limits:**
- Bandwidth: 100GB/month
- Serverless executions: 100GB-hours
- Build time: 6,000 minutes/month

**Pricing:**
- Pro: $20/month/user

**Setup Time:** 30 minutes

---

### Option 3: GitHub Pages

**Pros:**
- ✅ Completely free
- ✅ GitHub integration (obviously)
- ✅ Custom domain support
- ✅ HTTPS included

**Cons:**
- ❌ Static sites only (no serverless functions)
- ❌ No preview deployments
- ❌ No form handling
- ❌ Build process more manual

**Best For:** Pure static site (if we use Firebase for backend)

**Limitations:**
- 1GB storage
- 100GB bandwidth/month
- 10 builds/hour

**Setup Time:** 15 minutes

---

### Option 4: DigitalOcean (If PostgreSQL Backend)

**Pros:**
- ✅ Full control
- ✅ Can run PostgreSQL database
- ✅ Can run Node.js backend
- ✅ Scalable

**Cons:**
- ❌ Costs money from day 1
- ❌ Requires server management
- ❌ More setup time
- ❌ Need to handle security, backups, etc.

**Best For:** Node.js + PostgreSQL backend

**Pricing:**
- Basic Droplet: $6/month (1GB RAM, 25GB SSD)
- General Purpose: $18/month (2GB RAM, 50GB SSD)
- Managed Database: $15/month (PostgreSQL)

**Total Cost:** ~$21-33/month

**Setup Time:** 4-6 hours

---

## 🚀 Recommended Deployment Strategy

### Phase 1: MVP (Q4 2025 - Q1 2026)

**Stack:** Static site (Netlify) + Firebase Backend

**Why:**
- Fastest deployment
- Free tier sufficient for initial users
- Easy to set up
- Professional and reliable

**Architecture:**
```
Frontend: Netlify (HTML/CSS/JS)
Backend: Firebase (Auth + Firestore + Storage)
Domain: Custom domain (e.g., rflearninghub.com)
SSL: Automatic via Netlify
```

**Steps:**
1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Configure build settings
4. Add custom domain
5. Set up Firebase project
6. Configure Firebase security rules
7. Test thoroughly
8. Launch! 🚀

**Estimated Time:** 1 day

---

### Phase 2: Growth (3-6 Months After Launch)

**If we outgrow free tiers:**

**Option A: Upgrade Netlify/Firebase Plans**
- Netlify Pro: $19/month
- Firebase Blaze (pay-as-you-go): ~$25-50/month for moderate traffic

**Option B: Migrate to DigitalOcean**
- If we need more control or PostgreSQL
- Plan migration carefully (data export from Firebase)
- Estimated migration time: 2-3 weeks

---

## 📋 Deployment Checklist

### Pre-Deployment (Complete Before Launch)

**Code Quality:**
- [ ] All 13 pages complete and tested
- [ ] No console errors
- [ ] All images optimized (<500KB each)
- [ ] Minify CSS and JS
- [ ] Remove all TODO comments from code
- [ ] Test on all major browsers
- [ ] Test on mobile devices
- [ ] Accessibility audit (Lighthouse score >90)

**Content:**
- [ ] All placeholder text replaced
- [ ] All images have alt text
- [ ] Privacy policy written
- [ ] Terms of service written
- [ ] Cookie consent implemented
- [ ] Contact information added
- [ ] About page complete

**Backend (if using Firebase):**
- [ ] Firebase project created
- [ ] Authentication configured
- [ ] Firestore security rules deployed
- [ ] Test data removed
- [ ] Backups configured

**Domain & DNS:**
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate ready (automatic with Netlify/Vercel)
- [ ] Email forwarding set up (if needed)

**Analytics & Monitoring:**
- [ ] Google Analytics or Plausible set up
- [ ] Error tracking configured (Sentry?)
- [ ] Uptime monitoring (UptimeRobot - free)
- [ ] Performance monitoring

**Legal & Compliance:**
- [ ] Privacy policy published
- [ ] Cookie consent banner
- [ ] GDPR compliance verified
- [ ] Terms of service published
- [ ] Contact email set up

---

## 🔧 Netlify Deployment Steps (Detailed)

### 1. Connect Repository

```bash
# Ensure code is pushed to GitHub
git push origin main
```

**In Netlify Dashboard:**
1. Click "New site from Git"
2. Choose GitHub
3. Select repository: `unmanned-systems-uk/RF-Hub`
4. Configure build settings:
   - **Base directory:** `rf-learning-hub`
   - **Build command:** (leave empty for static site)
   - **Publish directory:** `rf-learning-hub`

---

### 2. Configure Build Settings

**netlify.toml** (create in repository root):

```toml
[build]
  base = "rf-learning-hub/"
  publish = "rf-learning-hub/"
  command = ""  # No build needed for static site

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/pages/*"
  to = "/pages/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### 3. Add Custom Domain

**In Netlify Dashboard:**
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `rflearninghub.com`)
4. Follow DNS configuration instructions

**DNS Settings (at your domain registrar):**
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's IP)

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

**SSL:** Automatically provisioned by Netlify (may take 24-48 hours)

---

### 4. Environment Variables

**In Netlify Dashboard (if using Firebase):**

Build & Deploy → Environment variables:
```
FIREBASE_API_KEY = "your-api-key"
FIREBASE_AUTH_DOMAIN = "your-app.firebaseapp.com"
FIREBASE_PROJECT_ID = "your-project-id"
```

---

## 🔥 Firebase Setup (If Chosen)

### 1. Create Project

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize project
firebase init
```

**Select:**
- ✅ Firestore
- ✅ Authentication
- ✅ Storage
- ✅ Hosting (optional, if not using Netlify)

---

### 2. Configure Authentication

**Enable Auth Providers:**
1. Email/Password ✅
2. Google OAuth (optional)
3. GitHub OAuth (optional)

**Set up email templates:**
- Email verification template
- Password reset template

---

### 3. Firestore Security Rules

**firestore.rules:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // User documents - users can read/write their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
      
      // User progress subcollection
      match /progress/{progressId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      // Quiz attempts subcollection
      match /quizAttempts/{attemptId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    // Quizzes - anyone can read, only admins can write
    match /quizzes/{quizId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Public content - anyone authenticated can read
    match /content/{contentId} {
      allow read: if request.auth != null;
      allow write: if false;  // Only via admin
    }
  }
}
```

**Deploy rules:**
```bash
firebase deploy --only firestore:rules
```

---

### 4. Storage Rules

**storage.rules:**

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // User profile pictures
    match /users/{userId}/profile/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.uid == userId &&
                     request.resource.size < 5 * 1024 * 1024 &&  // 5MB max
                     request.resource.contentType.matches('image/.*');
    }
    
    // User gallery images
    match /users/{userId}/gallery/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.uid == userId &&
                     request.resource.size < 10 * 1024 * 1024 &&  // 10MB max
                     request.resource.contentType.matches('image/.*');
    }
    
    // VNA measurement files
    match /users/{userId}/measurements/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.uid == userId &&
                     request.resource.size < 2 * 1024 * 1024;  // 2MB max
    }
  }
}
```

---

## 🔄 CI/CD Pipeline

### Automatic Deployment (Recommended)

**On every push to `main` branch:**
1. Code pushed to GitHub
2. Netlify detects push
3. Builds site automatically
4. Deploys to production
5. Notification sent (Slack/Email)

**On pull requests:**
1. PR created
2. Netlify creates preview deployment
3. Preview URL shared in PR
4. Review and test
5. Merge to deploy

---

### GitHub Actions (Optional - Advanced)

**.github/workflows/deploy.yml:**

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run tests
      run: |
        # Add your test commands here
        echo "Running tests..."
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
      with:
        args: deploy --prod
```

---

## 📊 Monitoring & Analytics

### 1. Uptime Monitoring

**UptimeRobot (Free):**
- Monitor: https://rflearninghub.com
- Check interval: 5 minutes
- Alert: Email/SMS on downtime
- Free: 50 monitors

**Setup:** 5 minutes

---

### 2. Analytics

**Option A: Plausible Analytics (Recommended)**
- Privacy-focused
- GDPR compliant
- No cookies
- Simple dashboard
- Cost: $9/month (up to 10k pageviews)

**Option B: Google Analytics**
- Free
- Comprehensive data
- Requires cookie consent
- More complex

---

### 3. Error Tracking

**Sentry (Recommended):**
- Free tier: 5,000 errors/month
- Real-time error alerts
- Source map support
- Performance monitoring

**Setup:**
```bash
npm install @sentry/browser
```

```javascript
// In main.js
Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
  release: "rf-hub@1.0.0"
});
```

---

## 🔒 Security Best Practices

### SSL/HTTPS
- ✅ Automatic with Netlify/Vercel
- ✅ Force HTTPS (configured in netlify.toml)
- ✅ HSTS headers enabled

### Content Security Policy

**Add to index.html:**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               img-src 'self' data: https:;
               font-src 'self' https://fonts.gstatic.com;">
```

### Rate Limiting
- Firebase has built-in rate limiting
- Netlify: Add rate limiting via edge functions (if needed)

### Backups
- **Firebase:** Automatic backups included
- **PostgreSQL:** Daily automated backups
- **Code:** GitHub repository (already backed up)
- **Images:** Cloud storage with versioning

---

## 📈 Performance Optimization

### Before Launch

**Image Optimization:**
```bash
# Install image optimization tool
npm install -g imagemin-cli

# Optimize all images
imagemin assets/images/**/*.{jpg,png} --out-dir=assets/images/optimized
```

**CSS/JS Minification:**
```bash
# Minify CSS
npx csso assets/css/styles.css --output assets/css/styles.min.css

# Minify JS (when we have it)
npx terser assets/js/main.js --compress --mangle --output assets/js/main.min.js
```

**Lighthouse Goals:**
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

---

## 🚨 Rollback Plan

**If deployment breaks production:**

1. **Immediate:** Revert to previous Netlify deployment (1-click in dashboard)
2. **Fix:** Debug issue locally
3. **Test:** Thorough testing before redeploying
4. **Deploy:** Push fix to GitHub

**Netlify keeps all previous deployments - instant rollback available**

---

## 📋 Post-Launch Checklist

**Week 1:**
- [ ] Monitor error rates (Sentry)
- [ ] Check uptime (UptimeRobot)
- [ ] Review analytics (user behavior)
- [ ] Gather user feedback
- [ ] Fix critical bugs immediately

**Month 1:**
- [ ] Performance audit
- [ ] Security audit
- [ ] User feedback review
- [ ] Feature prioritization based on usage
- [ ] Optimize based on real data

---

## 💰 Cost Estimates

### Free Tier (0-100 users/month)
- Netlify: $0
- Firebase: $0
- Domain: ~$12/year
- **Total:** ~$1/month

### Small Scale (100-1000 users/month)
- Netlify Pro: $19/month
- Firebase Blaze: ~$25/month
- Domain: $12/year
- Analytics: $9/month (Plausible)
- **Total:** ~$54/month

### Medium Scale (1000-10,000 users/month)
- Netlify Business: $99/month
- Firebase Blaze: ~$100/month
- Domain: $12/year
- Analytics: $19/month
- CDN: May need upgrade
- **Total:** ~$220/month

---

## 📝 Next Steps

**When Ready to Deploy:**

1. **Anthony decides on backend** (Firebase vs PostgreSQL)
2. **CC completes all pages** (13/13)
3. **Content finalized** (all placeholder text replaced)
4. **Testing complete** (all browsers, devices)
5. **Domain registered** (Anthony chooses name)
6. **Create deployment chat** ("4 - Deployment & Launch")
7. **Follow this guide** (step by step)
8. **Launch!** 🚀

**Estimated Timeline from Decision:**
- Backend setup: 3-5 days (Firebase) or 7-10 days (PostgreSQL)
- Pages completion: 2-3 weeks
- Testing: 1 week
- Deployment setup: 1 day
- **Total:** 4-6 weeks to launch

---

**Status:** Planning phase, awaiting backend decision and page completion  
**Owner:** Claude Code (with guidance from Anthony)  
**Next Update:** After backend technology chosen