import React from 'react';
export default class Pill extends React.Component{
    render(){
        return(
            <span className="pill">
                ₹ {this.props.amt}
            </span>
        );
    }
}