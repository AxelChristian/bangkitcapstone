const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAntDT09Vop2_Gadvxs7OmEYLV8JfMeHVI",
    authDomain: "capstone-c23-ps442.firebaseapp.com",
    projectId: "capstone-c23-ps442",
    storageBucket: "capstone-c23-ps442.appspot.com",
    messagingSenderId: "673232156457",
    appId: "1:673232156457:web:23b862aa32e4ee6638a938",
    measurementId: "G-X0X5KFB5JP"
};

firebase.initializeApp(firebaseConfig); 
module.exports = { firebase };