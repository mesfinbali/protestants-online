import firebase from "firebase";

var firebaseConfig = {
apiKey: "AIzaSyD277SEQqU1j03oXLlHkvSMiEqYWU20Du0",
authDomain: "knowgedeopeople.firebaseapp.com",
projectId: "knowgedeopeople",
storageBucket: "knowgedeopeople.appspot.com",
messagingSenderId: "1025547734147",
appId: "1:1025547734147:web:79e5a5c5e704213b679fb6",
measurementId: "G-YHSZX225GP"

    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;