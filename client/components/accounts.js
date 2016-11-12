import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze'; //負責把meteor Template渲染(render)到HTML DOM上

class Accounts extends Component{

    componentDidMount(){ //自動call when component is rendered on the screen
        // Render the Blaze accounts form (Meteor內建的UI Template) then find the div
        // we just rendered in the 'render' method and place the Blaze accounts form in div
        this.view = Blaze.render( Template.loginButtons, /*要渲染的Meteor UI template*/
        ReactDOM.findDOMNode(this.refs.container)/*被渲染的HTML DOM*/ );
    }

    componentWillUnmount(){ //自動call when component will be removed from the screen
        // Go find the forms we created and destory them
        // We need to clean up those form ourselves
        Blaze.remove(this.view);
    }

    render(){
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;