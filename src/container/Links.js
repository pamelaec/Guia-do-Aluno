import React, { Component } from 'react';

export default class Links extends Component {

    render() {
        return (
            
            <div className = "container" ><br></br>
            <div class="col-12" style= {{ fontFamily: 'garamond'}} ><br></br>
            <h3  style     = {{textAlign: 'center', color: 'black'}}><b>LINKS - IFMG <i>campus</i> Bambuí</b></h3><br></br>
            </div>
            <br></br>
            
            
            <div className = "row" style= {{justifyContent: "center"}}>
                 <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                  <a href= "meu.ifmg.edu.br/Corpore.Net/Login.aspx"> 
                 <img className = "card-img-top" src = "./img/meuifmg.png" alt = "meu ifmg"></img></a>  
                 
                </div> 
            </div>
            <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                 <img className = "card-img-top" src = "./img/restaurante.png" alt = "conta academica"></img>
                 
                </div> 
            </div>
            <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                 <img className = "card-img-top" src = "./img/biblioteca.png" alt = "biblioteca"></img>
                
                </div> 
            </div>
            </div>
            </div>
               );
    }
}