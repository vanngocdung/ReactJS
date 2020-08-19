// import firebase from 'firebase';
// var config = {
//     apiKey: "AIzaSyAy8TNCydp7C9t3e29JVHXM93FxOf2snzM",
//     authDomain: "reactjs-75b70.firebaseapp.com",
//     databaseURL: "https://reactjs-75b70.firebaseio.com",
//     projectId: "reactjs-75b70",
//     storageBucket: "reactjs-75b70.appspot.com",
//     messagingSenderId: "43570225937",
//     appId: "1:43570225937:web:e04365b2fadfb0380b62b0",
//     measurementId: "G-X65L9CV4NE"
// };
// // Initialize Firebase
// firebase.initializeApp(config);
//
//export default firebase

import firebase from 'firebase/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAy8TNCydp7C9t3e29JVHXM93FxOf2snzM",
    authDomain: "reactjs-75b70.firebaseapp.com",
    databaseURL: "https://reactjs-75b70.firebaseio.com",
    projectId: "reactjs-75b70",
    storageBucket: "reactjs-75b70.appspot.com",
    messagingSenderId: "43570225937",
    appId: "1:43570225937:web:e04365b2fadfb0380b62b0",
    measurementId: "G-X65L9CV4NE"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}