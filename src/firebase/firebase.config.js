// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-HA0fD8sf5a-1WwE_J7tbOH2aaU2Jg4A',
  authDomain: 'auth-and-auth-ed087.firebaseapp.com',
  projectId: 'auth-and-auth-ed087',
  storageBucket: 'auth-and-auth-ed087.appspot.com',
  messagingSenderId: '445248220017',
  appId: '1:445248220017:web:6a2c3e60f19e8889dc24d0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
