// Firebase web app config.
// Paste the values from Firebase console → Project settings → Your apps → SDK setup.
// These values are publishable (safe in client code); security is enforced by
// Firebase Auth + Firestore security rules.
//
// You can either fill the strings below, or set VITE_FIREBASE_* env vars.

export const firebaseConfig = {
  apiKey: import.meta.env["AIzaSyCJx0SPt3qEmJKiUOhOTEhLMlbeTK99MUY"] ?? "",
  authDomain: import.meta.env["farmer-ai-1ed1e.firebaseapp.com"] ?? "",
  projectId: import.meta.env["farmer-ai-1ed1e"] ?? "",
  storageBucket: import.meta.env["farmer-ai-1ed1e.firebasestorage.app"] ?? "",
  messagingSenderId: import.meta.env["207088815828"] ?? "",
  appId: import.meta.env["1:207088815828:web:808bdd10931a82c94ab541] ?? "",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.authDomain,
);
