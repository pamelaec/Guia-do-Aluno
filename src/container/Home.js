import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';
export default class Home extends Component {

    homeCardVagas = {
        title: 'Vagas em república',
        img: './img/4.png',
        alt: "Vagas",
        action: () => hashHistory.push('/vagas')
    }
    homeCardHorarios = {
        title: 'Horário de Ônibus',
        //text: 'teste',
        img: "./img/1.png",
        alt: "Ônibus",
        action: () => hashHistory.push('/Horarios')
    }
    homeCardLinks = {
        title: 'Links do campus',
        //text: 'teste',
        img: "./img/3.png",
        alt: "Links",
        action: () => hashHistory.push('/links')
    }
    homeCardProfessores = {
        title: 'Professores',
        //text: 'teste',
        img: "./img/2.png",
        alt: "Professor",
        action: () => hashHistory.push('/professores')
    }
    homeCardMural = {
        title: 'Mural',
        //text: 'teste',
        img: "./img/5.png",
        action: () => hashHistory.push('/mural')
    }
    homeCardComercio = {
        title: 'Comércio',
        //text: 'teste',
        img: "./img/6.png",
        action: () => hashHistory.push('/Comercio')
    }
    
    render() {
        return (
            <div className="container text-center" >
                <div className="row">
                    <HomeCard title={this.homeCardVagas.title}
                        text={this.homeCardVagas.text}
                        img={this.homeCardVagas.img}
                        action={this.homeCardVagas.action}/>
                    <HomeCard title={this.homeCardHorarios.title}
                        text={this.homeCardHorarios.text}
                        img={this.homeCardHorarios.img}
                        action={this.homeCardHorarios.action}/>
                    <HomeCard {...this.homeCardLinks} />
                    <HomeCard title={this.homeCardMural.title}
                        text={this.homeCardMural.text}
                        img={this.homeCardMural.img}
                        action={this.homeCardMural.action} />
                    <HomeCard {...this.homeCardProfessores} />  
                    <HomeCard {...this.homeCardComercio} />    

                </div>
            </div>
        );
    }
}