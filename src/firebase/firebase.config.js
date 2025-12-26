// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  
  // measurementId: import.meta.env.VITE_MEASUREMENT_ID  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export default app;

// VITE_API_KEY
// VITE_AUTH_DOMAIN
// VITE_PROJECT_ID
// VITE_STORAGE_BUCKET
// VITE_MESSAGING_SENDER_ID   // aei gula 5174 er banano project er
// VITE_APP_ID
// VITE_API_URL
// VITE_STRIPE_PK
// VITE_IMAGE_HOSTING_KEY
