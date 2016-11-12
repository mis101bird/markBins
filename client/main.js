import React from 'react';
import ReactDOM from 'react-dom';
import Bins from '../imports/collections/bin';
import App from './components/app';
import BinMain from './components/bins/bins_main';
import BinList from './components/bins/bins_list';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={ BinList }/>
            <Route path="bins/:binId" component={ BinMain } />
        </Route>
    </Router>
);

Meteor.startup(()=>{
    ReactDOM.render( routes, document.querySelector('.target-render'));
});
