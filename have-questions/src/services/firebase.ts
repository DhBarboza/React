import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDgKHGiM2QWSVJuUJb5mmFeXig-uSsGfcE",
    authDomain: "have-question-react.firebaseapp.com",
    databaseURL: "https://have-question-react-default-rtdb.firebaseio.com",
    projectId: "have-question-react",
    storageBucket: "have-question-react.appspot.com",
    messagingSenderId: "983011664764",
    appId: "1:983011664764:web:2c65078551d9ab727f7af9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const databse = firebase.database();