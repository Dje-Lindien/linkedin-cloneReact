import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC3Z7k55RQWJ8wPCIFJf-Aqba78TElljn4",
    authDomain: "linkedin-clone-e2db5.firebaseapp.com",
    projectId: "linkedin-clone-e2db5",
    storageBucket: "linkedin-clone-e2db5.appspot.com",
    messagingSenderId: "786685845634",
    appId: "1:786685845634:web:61b5493ba6538a36d5549b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };