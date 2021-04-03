
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/auth';
// import firebase from 'firebase/app';


// firebase.initializeApp({
//   apiKey: "AIzaSyDgrA-52_RdCBxqgbUIthLbsH3H-RyFlGM",
//   authDomain: "cookbook-686f4.firebaseapp.com",
//   projectId: "cookbook-686f4",
//   storageBucket: "cookbook-686f4.appspot.com",
//   messagingSenderId: "870132114458",
//   appId: "1:870132114458:web:1b101d2f55969a4e80dda3"
// });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
