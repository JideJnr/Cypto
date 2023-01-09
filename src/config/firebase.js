import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD2raTfl1qH3DK9NxL8qkX2OB7-KyfLrgo",
  authDomain: "nefli-485f1.firebaseapp.com",
  projectId: "nefli-485f1",
  storageBucket: "nefli-485f1.appspot.com",
  messagingSenderId: "899740689229",
  appId: "1:899740689229:web:43b5ad8570099932240d04",
  measurementId: "G-9P35BL3J8C"
  }


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth (app);
  export const db = getFirestore (app);
  export const storage = getStorage(app)