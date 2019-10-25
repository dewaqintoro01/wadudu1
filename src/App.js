import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Form from './components/FormStudent'


class App extends Component {
  render(){
    return ( 
      <div className="App">
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default App;
