// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa68FLwHEcI0LLSkbGOvr87nd7JQfxCYw",
  authDomain: "quizapp-70d36.firebaseapp.com",
  projectId: "quizapp-70d36",
  storageBucket: "quizapp-70d36.appspot.com",
  messagingSenderId: "514587814630",
  appId: "1:514587814630:web:5b125be550a8508b462927"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };