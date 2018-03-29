import React from 'react';
export default class SavingsListItem extends React.Component{
    render(){
        return(
            <div className="sli">
                <span className="yearcircle">
                  <span>  {this.props.year}</span>
                    <span>year</span>
               </span>
               <span className="savings">
                    <div className="amt"><strong>{this.props.amt}</strong></div>
                    <div className="interest">Interest Earned:<span style={{color:'green'}}>{this.props.amt}</span></div>
               </span>
            </div>
        );
    }
}