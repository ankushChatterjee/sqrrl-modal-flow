import React from 'react';
import { Modal } from 'react-bootstrap';
import  Pill  from './Pill';
export default class ModalTwo extends React.Component{
    render(){
        return(
            <Modal show={true}>
                
                <div className="modalinside"> 
                        <div className="orpart">
                            <h3>My Retirement</h3>
                            <div className="sip">SIP</div>
                            <div className="sipdesc">Invest a fixed amount monthly</div>
                        </div>
                        <div className="bpart">
                            <div className="bheader">
                                <i className="material-icons back">arrow_back</i>
                                <i class="material-icons closee">close</i>
                            </div>
                            <div className="bheadText">
                                <h4> How much do you want to invest? </h4>
                                You can put a minimum amount of Rs 500 and in multiples of Rs 100
                            </div>
                            <div className="binputholder">
                           <span id="rupee"> ₹</span><input className="amount" />
                            </div>
                            <div className="max">   MAX AMOUNT ₹ 1,50,000
                            </div>
                            <div className="pills">
                                <Pill amt="30,000" />
                                <Pill amt="70,000" />
                                <Pill amt="1,10,000" />
                                <Pill amt="1,50,000" />
                            </div>
                            <div onClick={this.next.bind(this)} className="fabholder">
                                <span><i className="material-icons">arrow_forward</i></span>
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
    next(evt){
        evt.preventDefault();
        this.props.history.push('/three');
    }
}