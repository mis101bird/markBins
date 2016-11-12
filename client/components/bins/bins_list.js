//目標：首頁show bins list
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bin';
import { Link } from 'react-router';

class BinList extends Component{

onBinRemove(bin){
   Meteor.call('bins.remove', bin);
}
generateBins(){
 const bins= this.props.bins.map((bin)=>{
        const url = `/bins/${bin._id}`;
        return (
            <li className="list-group-item" key={bin._id}>
                <Link to={url}>Bin {bin._id}</Link>
                <span className="pull-right">
                    <button className="btn btn-danger"
                    onClick={ function(){ this.onBinRemove(bin); }.bind(this) }>
                    Remove
                    </button>
                </span>
            </li>
        );
    });
 console.log(bins);
 return bins;
}

render(){
    console.log(this.props.bins);
    return (
        <ul className="list-group">
            { this.generateBins() }
        </ul>
    );
}
}

export default createContainer(()=>{
    Meteor.subscribe('bins');
    Meteor.subscribe('shareBins');
    return { bins: Bins.find({}).fetch() };
},BinList);

