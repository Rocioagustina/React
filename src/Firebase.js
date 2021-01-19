import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCimvNwmIq84kYD3p6erWc5oED2_XTX-6Q",
    authDomain: "react-coderhouse-359fb.firebaseapp.com",
    projectId: "react-coderhouse-359fb",
    storageBucket: "react-coderhouse-359fb.appspot.com",
    messagingSenderId: "812339775210",
    appId: "1:812339775210:web:717118447464c9e0087993"
    };

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
    return firebase.firestore(app);
}