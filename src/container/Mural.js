import React, { Component } from 'react';
import '../css/style-vaga.css';

export default class Vagas extends Component {

    render() {
        return (          
            <div className = "container" >
                <h1 style     = {{textAlign: 'center', color: 'black'}}>MURAL</h1>     
            <div>
                 <form id="gda-vagas">
          
            <label style={{width:'200%'}}>Nome do evento <input type="text" name="name" id="name" /></label>
                    
         <p />
            <label > Fala sobre o evento: local, data, horário. <textarea name="message" rows="3" id="message" />  </label>
            
                 
          <p  />
            <button type="submit">ENVIAR</button><br></br><br></br>
            </form>
            </div>
                

      <h3>EVENTOS RECENTES</h3>
    <div className= "container">
        <div className="row">

            <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                    <h5>V SETC - SEMANA DA ENGENHARIA TECNOLOGIA E COMPUTAÇÃO</h5>
                    <p>Esse ano nosso evento será 100% online e gratuito e acontecerá entre os dias 23 a 23 de novembro. Visite nosso site para mais informações: http://www.computacaoifmg.com.br</p>
                </div>
            </div>
            <div className="card" style={{width: '20rem'}}>
                <div className="card-body">
                    <h5>ADATECH - GRUPO DE EMPODERAMENTO FEMININO NA ÁREA DA TECNOLOGIA</h5>
                    <p>Somos um grupo de apoio e empoderamento feminino na área tecnológica, que visa promover diversas ações para entender as dificuldades e desafios além de criar novas perpectivas que contribuam para a inserçãoo e apoio às alunas do IFMG - campus Bambuí. Convidamos toda a comunidade para nos acompanhar no instagram @adatech.ifmg. </p>
                </div>
            </div>
        </div>
    </div>


      </div> 
      

         );
 }
}