import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBePWvFuVOSThpWqJP3q6sil2ezT1z4klE",
  authDomain: "grocery-app-131e4.firebaseapp.com",
  databaseURL: "https://grocery-app-131e4-default-rtdb.firebaseio.com",
  projectId: "grocery-app-131e4",
  storageBucket: "grocery-app-131e4.appspot.com",
  messagingSenderId: "801152657029",
  appId: "1:801152657029:web:59550e2f3eedf435a3ebec",
});
const fire = firebaseApp;
const storage = firebaseApp.storage();
var db = firebaseApp.firestore();
export { fire, db, storage };
