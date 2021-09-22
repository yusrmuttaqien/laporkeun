import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MS_ID,
  appId: import.meta.env.VITE_APP_AID,
};

const main = initializeApp(firebaseConfig);
const secondary = initializeApp(firebaseConfig, 'secondary');

export { main, secondary };
