import React, { Component } from 'react'; // es6
import { markdown } from 'markdown';

class BinViewer extends Component{
    render(){
        const rawHTML = markdown.toHTML(this.props.bin.content);
        return (
            <div className="col-xs-4">
                <h5>Output</h5>
                <div dangerouslySetInnerHTML={{__html: rawHTML}}></div>
            </div>
        );
    }
}

export default BinViewer;