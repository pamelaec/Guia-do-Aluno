import React, { Component } from 'react';
import './Vagas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Vagas/FirebaseVagas';
import 'https://www.gstatic.com/firebasejs/7.19.0/firebase.js';


export default class Vagas extends Component {

    render() {
        return (          
            <div className = "container" >
            <h1 style     = {{textAlign: 'center', color: 'black'}}>PUBLICAR VAGAS</h1>     
            <div className="contact">
                 <form id="gda-vagas">
          <p />
            <label>Título da Publicação</label>
            <input type="text" name="name" id="name" />

          <p />
            <label>Telefone para contato</label>
            <input type="text" name="phone" id="phone" />

          <p className="full" />
            <label>Descrição da vaga</label>
            <textarea name="message" rows="5" id="message" />  
                 
          <p className="full" />
            <button type="submit">ENVIAR</button>
            </form>
            
 
  <div className="publi">
      <h2>VAGAS ADICIONADAS RECENTEMENTE</h2>
      <div id="msg"></div> 

      </div>
    </div>
  </div>
         );
 }
}