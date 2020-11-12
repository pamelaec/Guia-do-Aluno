var config = {
    apiKey: "AIzaSyAU7Et9_9HsYfWfCI1mK_jTUL-7rZxWDoI",
    authDomain: "gda-mural.firebaseapp.com",
    databaseURL: "https://gda-mural.firebaseio.com",
    projectId: "gda-mural",
    storageBucket: "gda-mural.appspot.com",
    messagingSenderId: "1016074559329",
    appId: "1:1016074559329:web:ac4c0977f378b58ed2af20"
  };
  // Inicializa o firebase
  firebase.initializeApp(config);

  //Reference message
  var messagesRef = firebase.database().ref('messages');
  document.getElementById('gda-mural').addEventListener('submit', submitForm);


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

