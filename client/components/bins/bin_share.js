import React, { Component } from 'react';

class BinShare extends Component{

    onClickShareMail(){
          const mail=this.refs.email.value;
          Meteor.call('bins.share',this.props.bin, mail);
    }

    getShareGroup(){
        return this.props.bin.sharedWith.map((email)=>{
            return (
                <button key={email} className="btn btn-default">
                {email}
                </button>
            );
        });
    }
    render(){
        return (
            <footer className="binShare">
            <div className="input-group">
            <input ref="email" className="form-control"/>
            <div className="input-group-btn">
            <button 
            onClick={ this.onClickShareMail.bind(this) } 
            className="btn btn-danger">
            Share Bin
            </button>
            </div>
            </div>
            <div>Share With:</div>
            <div className="btn-group">
            { this.getShareGroup() }
            </div>
            </footer>
        );
    }
}

export default BinShare;