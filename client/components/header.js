import React, { Component } from 'react';
import Account from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component{

    onBinClick(event){
    event.preventDefault();
    Meteor.call('bins.insert',(error, binId)=>{
        browserHistory.push(`/bins/${binId}`); //push url into browser address bar
    });
    }

    render(){
        return (
        <div className="nav navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Markbin</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Account />
                </li>
                <li>
                    <a href="#" onClick={ this.onBinClick.bind(this) }>Create Bin</a>
                </li>
            </ul>
        </div>
        );
    }
}

export default Header;