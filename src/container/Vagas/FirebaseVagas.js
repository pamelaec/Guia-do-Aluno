import '../Vagas/Vagas';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDzF92J-2MzdRRmbRE9WQqXZ7RZyXRpp8Q",
    authDomain: "gda-vagas.firebaseapp.com",
    databaseURL: "https://gda-vagas.firebaseio.com",
    projectId: "gda-vagas",
    storageBucket: "gda-vagas.appspot.com",
    messagingSenderId: "370805898986",
    appId: "1:370805898986:web:315dd3fb86a00086e0e193"
  };
  // Inicializa o firebase
  firebase.initializeApp(config);

  //Reference message
  var messagesRef = firebase.database().ref('messages');
  var var_msg = document.getElementById("msg"); //pega a referência do html msg
  var dados = ""//variavel que inicia a string


document.getElementById('gda-vagas').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

//Get values
var name = getInputVal('name');
var phone = getInputVal('phone');
var message = getInputVal('message');


saveMessage(name, phone, message);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message
function saveMessage(name, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        message: message
    });

}


var db = messagesRef = firebase.database().ref().child("messages");
  db.on('child_added', function(snapshot){
      var adicionado = snapshot.val();

      dados = "<card>"  + adicionado + "<card>" + dados;
      console.log(dados);

      var_msg.innerHTML = dados;
  })

