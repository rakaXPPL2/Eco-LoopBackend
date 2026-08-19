# Eco-Loop - Deployment Checklist

## ✅ Files Created for Vercel Deployment

### Configuration Files
- [x] `vercel.json` - Vercel full-stack build and routing configuration
- [x] `vercel.php` - Vercel PHP runtime configuration
- [x] `.vercelignore` - Files to exclude from deployment
- [x] `.env.production` - Production environment template
- [x] `.gitignore` - Updated to exclude build artifacts

### Entry Points
- [x] `frontend/index.html` - React/Vite frontend entry point for Vercel
- [x] `api/index.php` - Laravel serverless function entry point

### Documentation
- [x] `DEPLOY_VERCEL.md` - Complete deployment guide

## 🚀 Deployment Steps

Vercel deploys the React frontend and Laravel backend from this repository. Database and file storage must use persistent external services.

Node.js, PHP, and Composer are optional locally. Vercel provides the build/runtime environment during deployment.

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### Step 2: Connect to Vercel
1. Buka https://vercel.com
2. Import repository GitHub
3. Configure environment variables

### Step 3: Required Environment Variables
```env
APP_NAME=Eco-Loop
APP_ENV=production
APP_KEY=base64:GENERATE_A_REAL_KEY
APP_DEBUG=false
APP_URL=https://your-project.vercel.app
DB_CONNECTION=pgsql
DB_HOST=your-postgres-host
DB_PORT=5432
DB_DATABASE=eco_loop
DB_USERNAME=your_username
DB_PASSWORD=your_password
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=sync
VITE_BACKEND_URL=
```

Leave `VITE_BACKEND_URL` empty for the all-in-one deployment. Set the Laravel variables in Vercel Environment Variables.

### Step 4: Generate APP_KEY
```bash
php artisan key:generate
```

### Step 5: Run Migrations on the Backend
```bash
vercel env pull .env.vercel
php artisan migrate --force
```

## 📁 Project Structure

```
eco-loop/
├── api/
│   └── index.php          # Vercel serverless entry
├── app/
│   └── ...
├── config/
│   └── ...
├── public/
│   ├── index.php          # Standard entry
│   └── ...
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
├── routes/
│   ├── web.php
│   └── auth.php
├── storage/
│   └── ...
├── vercel.json            # Vercel config
├── vercel.php             # PHP runtime
├── .vercelignore          # Exclude files
├── .env.production        # Production env template
├── .gitignore             # Updated
├── vite.config.js         # Updated for Vercel
├── package.json
├── DEPLOY_VERCEL.md       # Deployment guide
└── ...
```

## 🔧 Build Command

```bash
npm install
npm run build
```

Expected output: `dist/` directory with built assets

## ⚠️ Common Issues & Solutions

### 1. Build Fails
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### 2. APP_KEY Error
- Generate new key: `php artisan key:generate`
- Add to Vercel environment variables

### 3. Database Connection Failed
- Verify PostgreSQL credentials
- Check if database exists
- Verify SSL settings if required

### 4. 500 Error on Pages
- Set `APP_DEBUG=true` temporarily
- Check Vercel function logs
- Verify storage permissions

### 5. Static Assets 404
- Ensure `dist/` directory is created
- Check `vercel.json` outputDirectory setting
- Verify asset paths in blade templates

## 🎯 Features to Test After Deploy

- [ ] Landing page loads correctly
- [ ] User registration & login
- [ ] Product listing
- [ ] Add to cart functionality
- [ ] Checkout process
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Leaderboard page
- [ ] Notification system
- [ ] Message/chat functionality
- [ ] File uploads (images)
- [ ] Email notifications

## 📞 Support

- Vercel Documentation: https://vercel.com/docs
- Laravel Documentation: https://laravel.com/docs
- Eco-Loop GitHub Issues

---

**Last Updated:** August 2026
**Version:** 1.0.0
