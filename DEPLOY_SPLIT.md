# Eco-Loop - Deployment Guide

## Arsitektur

```
┌─────────────────────┐     ┌─────────────────────┐
│   FRONTEND          │     │   BACKEND           │
│   React + Vite      │     │   Laravel           │
│   Deploy ke         │ ──► │   Deploy ke         │
│   Vercel (GRATIS)  │     │   Render (GRATIS)   │
└─────────────────────┘     └─────────────────────┘
     https://...vercel.app        https://...onrender.com
```

---

## 📦 STEP 1: Struktur Folder

Pastikan project sudah terpisah:

```
Eco-Loop/
├── frontend/          ← Deploy ke Vercel
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
└── backend/         ← Deploy ke Render (Laravel)
    ├── app/
    ├── routes/
    ├── config/
    └── render.yaml
```

---

## 🚀 STEP 2: Deploy Backend ke Render

### 2.1: Upload Backend ke GitHub
```bash
cd backend-folder

git init
git add .
git commit -m "Eco-Loop Backend"
git remote add origin https://github.com/USERNAME/eco-loop-backend.git
git push -u origin main
```

### 2.2: Setup di Render.com
1. Buka https://render.com → Login
2. Klik **"New"** → **"Web Service"**
3. Connect GitHub repo `eco-loop-backend`
4. Settings:
   - **Region**: Singapore
   - **Branch**: main
   - **Language**: PHP
   - **Build Command**: `composer install`
   - **Start Command**: `php artisan serve --host=0.0.0.0 --port=$PORT`

### 2.3: Environment Variables
Tambahkan di Render Dashboard:
```
APP_ENV = production
APP_DEBUG = false
APP_KEY = (klik "Generate" atau generate di lokal)
APP_URL = https://eco-loop-backend.onrender.com

DB_CONNECTION = pgsql
DB_HOST = (dari Render PostgreSQL)
DB_PORT = 5432
DB_DATABASE = eco_loop
DB_USERNAME = (dari Render PostgreSQL)
DB_PASSWORD = (dari Render PostgreSQL)
```

### 2.4: Buat PostgreSQL Database
1. Render Dashboard → **"New"** → **"PostgreSQL"**
2. Region: Singapore
3. Copy connection info ke Environment Variables

### 2.5: Run Migrations
```bash
# Di lokal, generate APP_KEY dulu
php artisan key:generate

# Login ke Render Shell (atau buat script migrate)
# Bisa juga buat file migrate.php:
```

---

## 🌐 STEP 3: Deploy Frontend ke Vercel

### 3.1: Upload Frontend ke GitHub
```bash
cd frontend-folder

git init
git add .
git commit -m "Eco-Loop Frontend"
git remote add origin https://github.com/USERNAME/eco-loop-frontend.git
git push -u origin main
```

### 3.2: Setup di Vercel
1. Buka https://vercel.com → Login
2. Klik **"Add New..."** → **"Project"**
3. Import repo `eco-loop-frontend`
4. Settings:
   - **Framework Preset**: Vite (atau "Other")
   - **Build Command**: `npm install && npm run build`
   - **Output Directory**: `dist`

### 3.3: Environment Variables (opsional)
```
VITE_API_URL = https://eco-loop-backend.onrender.com
```

---

## 🔗 STEP 4: Hubungkan Frontend ke Backend

### 4.1: Update API URL di Frontend

Edit `frontend/src/components/LandingPage.jsx`:
```jsx
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-backend.onrender.com';
```

Ganti semua URL backend:
```jsx
// Sebelum
href="http://localhost:8000/login"

// Sesudah
href="https://eco-loop-backend.onrender.com/login"
```

### 4.2: Update CORS di Backend

Edit `config/cors.php`:
```php
'allowed_origins' => ['https://eco-loop-frontend.vercel.app'],
```

---

## 🔄 STEP 5: Auto Deploy

### Backend (Render)
- Auto deploy enabled by default
- Setiap push ke GitHub → auto deploy

### Frontend (Vercel)
- Auto deploy enabled by default
- Setiap push ke GitHub → auto deploy

---

## ⚠️ Troubleshooting

### Error 500 di Backend
1. Cek `APP_KEY` sudah benar
2. Cek database credentials
3. Buka `APP_DEBUG=true` untuk lihat error

### CORS Error
1. Pastikan `config/cors.php` sudah benar
2. Pastikan frontend URL sudah di-allow

### Assets 404
1. Pastikan `php artisan storage:link` sudah dijalankan
2. Atau buat symbolic link manual

---

## 📁 File yang Dibutuhkan

### Frontend (Vercel)
```
frontend/
├── src/
│   ├── components/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

### Backend (Laravel - Render)
```
backend/  (folder utama project Laravel)
├── app/
├── config/
│   └── cors.php
├── routes/
├── database/
├── public/
├── storage/
├── render.yaml
└── .env
```

---

## 🎯 Urutan Deploy

1. **Deploy Backend dulu** ke Render
2. **Setup PostgreSQL** di Render
3. **Run migrations**
4. **Deploy Frontend** ke Vercel
5. **Update API URL** di frontend
6. **Test** semua fitur

---

## 📞 Support

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Laravel Docs: https://laravel.com/docs
