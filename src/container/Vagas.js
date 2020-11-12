import React, { Component } from 'react';
import '../css/style-vaga.css';

export default class Vagas extends Component {

    render() {
        return (          
            <div className = "container" >
                <h1 style     = {{textAlign: 'center', color: 'black'}}>PUBLICAR VAGAS</h1>     
            <div>
                 <form id="gda-vagas">         
            <label id="label1">Título da Publicação <input type="text" name="name" id="name" /></label>       
            <label id="label2">Telefone  <input type="text" name="phone" id="phone" /></label>       
            <label >Descrição da vaga <textarea name="message" rows="3" id="message" />  </label>
                          
          <p  />
            <button type="submit">ENVIAR</button><br></br><br></br>
            </form>
            </div>
                

      <h3>VAGAS ADICIONADAS RECENTEMENTE</h3>
    <div className= "container">
        <div className="row">

            <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                    <h5>Vaga em república feminina</h5>
                    <h6>Telefone: 34 99975-7374</h6>
                    <p>Casa localizada no centro. Quarto individual. Contas em torno de R$360,00. Perto de supermercado, farmácia e ponto de ônibus. </p>
                </div>
            </div>
            <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                    <h5>Vaga em república masculina</h5>
                    <h6>Telefone: 35 99875-9425</h6>
                    <p>Casa localizada perto do ponto de ônibus para o IF. Quarto individual e mobiliado. Contas em torno de R$270,00. </p>
                </div>
            </div>
            <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                    <h5>Vaga em república mista</h5>
                    <h6>Telefone: 37 99285-8923</h6>
                    <p>Casa localizada no centro. Quarto duplo. Contas em torno de R$200,00 incluindo água, luz aluguel e internet. Temos um</p>
                </div>
            </div>

        </div>
    </div>


      </div> 
      

         );
 }
}