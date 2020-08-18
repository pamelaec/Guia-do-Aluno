import React, { Component } from 'react';

export default class Links extends Component {

    render() {
        return (
            <div className = "container"><br></br>
            <h3  style     = {{textAlign: 'center', color: 'black'}}>LINKS - IFMG <i>campus</i> Bambuí</h3><br></br>
            <div className = "row">
            <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                 <div className = "card-img-top">
                 <a href='https://meu.ifmg.edu.br/Corpore.Net/Login.aspx'> <img src='img/meuifmg.png' alt='Meu IFMG'/></a>
                  </div>
                </div> 
            </div>
            <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                 <div className = "card-img-top">
                 <a href='https://pergamum.ifmg.edu.br/pergamum/biblioteca/index.php'> <img src='img/biblioteca.png' alt='Biblioteca'/></a>
                  </div>
                </div> 
            </div>
            <div className = "col-sm-12 col-md-3">
                 <div className = "card mb-4 col-lg-12">
                 <div className = "card-img-top">
                 <a href='https://contaacademica.bambui.ifmg.edu.br'> <img src='img/restaurante.png' alt='Conta Acadêmica'/></a>
            </div>  
                  </div>
                </div> 
            </div>       
            </div> 
            
               );
    }
}