var config = {
    apiKey: "AIzaSyBLeZ9xGi2s8_5aEb_wj53VWPzx2U96mt8",
    authDomain: "contactmural-55022.firebaseapp.com",
    databaseURL: "https://contactmural-55022.firebaseio.com",
    projectId: "contactmural-55022",
    storageBucket: "contactmural-55022.appspot.com",
    messagingSenderId: "631676953682",
    appId: "1:631676953682:web:dff830a2bb160c5bd26b8b"
  };
  // Inicializa o firebase
  firebase.initializeApp(config);

  //Reference message
  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contactMural').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

//Get values
var name = getInputVal('name');
var message = getInputVal('message');


saveMessage(name, message);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message
function saveMessage(name,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        message: message
    });

}

