import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXOHcU_XS35AcdYm32JiTKFIjeFZRyMm4",
    authDomain: "disneyplus-clone-d3e93.firebaseapp.com",
    projectId: "disneyplus-clone-d3e93",
    storageBucket: "disneyplus-clone-d3e93.appspot.com",
    messagingSenderId: "313732163116",
    appId: "1:313732163116:web:2fed0ef081b9cbd73e5389",
    measurementId: "G-XHGL61J197"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;