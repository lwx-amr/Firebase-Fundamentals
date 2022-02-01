import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
 
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDdXRqcsuQdagTSZVDZ0y4KW4MrHEbvrgI",
  authDomain: "lwxamr-1fbd7.firebaseapp.com",
  databaseURL: "https://lwxamr-1fbd7.firebaseio.com",
  projectId: "lwxamr-1fbd7",
  storageBucket: "lwxamr-1fbd7.appspot.com",
  messagingSenderId: "367621077079",
  appId: "1:367621077079:web:61f26060ab39164fd8cb12",
  measurementId: "G-YWP1B6MVD0"
});

const auth  = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
  if(!user)
    console.log('No User!!');
  else 
    console.log('Logged in');
})