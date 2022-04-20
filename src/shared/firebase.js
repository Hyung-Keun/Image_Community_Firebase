import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRHxnaukc0ChLCGuXLM3tt-XAj0XZH5YE",
  authDomain: "image-community-766ae.firebaseapp.com",
  databaseURL: "https://image-community-766ae-default-rtdb.firebaseio.com",
  projectId: "image-community-766ae",
  storageBucket: "image-community-766ae.appspot.com",
  messagingSenderId: "625315001126",
  appId: "1:625315001126:web:318b789184cdb433fb07e7"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};