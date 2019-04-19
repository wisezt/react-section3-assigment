import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
    state ={
        username: 'supermax'
    }


    inputChangedHandler = (event) =>{
        this.setState({username: event.target.value});


    }

    render() {
        return (
            <div className="App">
                <UserInput changed={this.inputChangedHandler}
                           currentName={this.state.username}
                />
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Ting002"/>
                <UserOutput userName="Ting003"/>

            </div>
        );
    }
}

export default App;
