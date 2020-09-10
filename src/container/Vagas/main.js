var config = {
    apiKey: "AIzaSyBrnfbZnY63JfXTgoZl6NJvR20SQBZDLgc",
    authDomain: "contactform-956f5.firebaseapp.com",
    databaseURL: "https://contactform-956f5.firebaseio.com",
    projectId: "contactform-956f5",
    storageBucket: "contactform-956f5.appspot.com",
    messagingSenderId: "630331457176",
    appId: "1:630331457176:web:2f6ef5ca319e0949869aed"
  };
  // Inicializa o firebase
  firebase.initializeApp(config);

  //Reference message
  var messagesRef = firebase.database().ref('messages');
  var var_msg = document.getElementById("msg");
  var dados = ""


document.getElementById('contactForm').addEventListener('submit', submitForm);

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

      dados = "<table>" = "<tr><td>"+adicionado+"</td></tr>" + dados;

      var_msg.innerHTML = dados;
  })

