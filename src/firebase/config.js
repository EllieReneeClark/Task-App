// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-EawdRFFMpmEvLoX9gpuehsLG1aZgJHA",
  authDomain: "task-app-9d3d0.firebaseapp.com",
  projectId: "task-app-9d3d0",
  storageBucket: "task-app-9d3d0.firebasestorage.app",
  messagingSenderId: "386537891420",
  appId: "1:386537891420:web:7ae14af0c3c164e1f96899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication so we can use it in other files
export const auth = getAuth(app);