import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Vagas from './container/Vagas';
import Horarios from './container/Horarios/Horarios';
import Links from './container/Links';
import Home from './container/Home';
import Comercio from './container/Comercio';
import Professores from './container/Professores';
import Mural from './container/Mural';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router';
import {hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/vagas' component={Vagas} />
            <Route path='/horarios' component={Horarios} />
            <Route path='/links' component={Links} />
            <Route path='/professores' component={Professores} />
            <Route path='/mural' component={Mural} />
            <Route path='/comercio' component={Comercio} />
        </Route>

    </Router>
    ,
    document.getElementById('root'));
serviceWorker.register();
