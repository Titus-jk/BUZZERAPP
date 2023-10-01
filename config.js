import firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyB13oCF9yQbRWzgfonZT6zWNweKEhQZoaA",
  authDomain: "buzzer-app-23527.firebaseapp.com",
  databaseURL: "https://buzzer-app-23527-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-23527",
  storageBucket: "buzzer-app-23527.appspot.com",
  messagingSenderId: "798232518889",
  appId: "1:798232518889:web:fef2969df3f1bc93375078"
};  


// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
