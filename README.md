# Malik & Zena — Forever Trying To Win Your Heart

A personal web app built with love. 💛

## Setup

1. **Clone & Install**
```bash
git clone https://github.com/YOUR_USERNAME/malik-zena.git
cd malik-zena
npm install
```

2. **Firebase Setup**
- Go to [Firebase Console](https://console.firebase.google.com)
- Create a new project (or use existing one)
- Go to Project Settings → General → Your Apps → Add Web App
- Copy the config values
- Create `.env.local` in root and paste:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
- In Firebase Console → Firestore Database → Create Database → Start in Test Mode

3. **Run Locally**
```bash
npm run dev
```

4. **Deploy to Vercel**
- Push to GitHub
- Go to [vercel.com](https://vercel.com) → Import from GitHub
- Add the same env variables in Vercel → Settings → Environment Variables
- Deploy!
