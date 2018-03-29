import React from 'react';
import { Modal } from 'react-bootstrap';
import  SavingsListItem from './SavingsListItem';
export default class ModalThree extends React.Component{
    render(){
        return(
            <Modal show={true}>
                
                <div className="modalinside"> 
                        <div className="orpart topart">
                            <h3>My Retirement</h3>
                            <div className="sip">SIP</div>
                            <div className="sipdesc">Invest a fixed amount monthly</div>
                        </div>
                        <div className="tbpart bpart">
                            <div className="bheader">
                                <i className="material-icons back">arrow_back</i>
                                <i class="material-icons closee">close</i>
                            </div>
                            <div className="bheadText">
                                <h4> Confirm </h4>
                                ₹ 10,000<span>/month</span>
                            </div>
                            <div className="card">
                                <div className="cardHeader">PROJECTED SAVINGS</div>
                                <SavingsListItem year="1" amt="₹ 2,70,000" interest="₹ 4,500" />
                                <SavingsListItem year="5" amt="₹ 7,56,000" interest="₹ 10,570" />
                                <SavingsListItem year="10" amt="₹ 13,56,000" interest="₹ 60,570" />
                                <div className="bottombar">
                                    <div className="fgreenbotton"> PROCEED 
                                    <i className="material-icons">arrow_forward</i> </div>
                                </div>
                            </div>
                        </div>
                        
                </div>   

                {/* <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalinside"> 
                        <div className="orpart">asd</div>
                        <div className="bpart">asdsad</div>
                    </div>      
                </Modal.Body> */}
            </Modal>
        );
    }
}