import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bin';
import BinsEditor from './bind_editor';
import BinViewer from './bin_viewer';
import BinShare from './bin_share';

class BinMain extends Component{
    render(){
        console.log(this.props.bin);
        if(!this.props.bin){ return (<div>Loading...</div>);}
        return (
            <div>
            <BinsEditor bin={this.props.bin}/>
            <BinViewer bin={this.props.bin} />
            <BinShare bin={this.props.bin} />
            </div>
        );
    }
}

export default createContainer((props)=>{
    // 此subscribe在Component移除時取消(將資料從miniMongo移除)
    const { binId } = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('shareBins');
    return { bin: Bins.findOne(binId) };

}, BinMain); //監控data