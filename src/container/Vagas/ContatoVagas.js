import { initializeApp, firestore as _firestore } from "./firebase";

console.log('Socorro');


var firebaseConfig = {
    apiKey: "AIzaSyCJgqWn9gnoZ3Rab3L2qpD5faOvg87dc7Q",
    authDomain: "contatovagas-firebase.firebaseapp.com",
    databaseURL: "https://contatovagas-firebase.firebaseio.com",
    projectId: "contatovagas-firebase",
    storageBucket: "contatovagas-firebase.appspot.com",
    messagingSenderId: "412660247383",
    appId: "1:412660247383:web:f6e7eece39cad7364c2c12"
  };
  console.log('Socorro');
 // iniciar firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
console.log('Socorro');

 //DOM
 const submitBtn = document.querySelector('#submit');

 let userTitulo = document.querySelector('#userTitulo');
 let userTel = document.querySelector('#userTel');
 let userMessage = document.querySelector('#userMessage');

 const db = firestore.collection("contactData");
 submitBtn.addEventListener('click', function(){
     let userTituloInput = userTitulo.value;
     let userTelInput = userTel.value;
     let userMessageInput = userMessage.value;

     db.doc().set({
         titulo: userTituloInput,
         telefone: userTelInput,
         message: userMessageInput
     })
     .then(function(){
         console.log("Data Saved");
     })
     .catch(function(error){
         console.log(error);
     });
 });

 


