import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import ChatBody from './Components/ChatBody.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatBody />
      </div>
    );
  }
}

export default App;
