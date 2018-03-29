import React from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalOne extends React.Component{
    render(){
        return(
            <Modal show={true}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    I Want to save for
                    <div className="inputholder">
                        <input className="target" />
                    </div>
                    <div className="desctext">
                        My SIP, Retirement Fund
                    </div>
                    <div onClick={this.next.bind(this)} className="fabholder">
                        <span><i className="material-icons">arrow_forward</i></span>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    next(evt){
        evt.preventDefault();
        this.props.history.push('/two');
    }
}