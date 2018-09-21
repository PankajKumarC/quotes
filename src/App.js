import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import QuoteOfTheDay from './Components/QuoteOfTheDay/QuoteOfTheDay';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: ,
      isloaded: false,
    }
  }

  componentDidMount() {

    

  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <QuoteOfTheDay />
        {/*<RandomQuote />
        <GenerateRandomQuote />*/}
      </div>
    );
  }
}

export default App;
