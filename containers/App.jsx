import React from 'react';
import '../style.scss';
import ModalTwo from '../components/ModalTwo';
import ModalOne from '../components/ModalOne';
import ModalThree from '../components/ModalThree';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:true};
    }
    render(){
        return(<div>
                <Router><Switch>
                    <Route exact path="/" component={ModalOne} />
                    <Route exact path="/two" component={ModalTwo} />
                    <Route exact path="/three" component={ModalThree} />
                </Switch>
            </Router>
            </div>
        );
    }
}