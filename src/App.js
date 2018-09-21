import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import QuoteOfTheDay from './Components/QuoteOfTheDay/QuoteOfTheDay';
import SignIn from './Components/SignIn/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'SignIn'
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/> 
        { this.state.true === 'SignIn' 
          ? <SignIn onRouteChange={this.onRouteChange}/>
        :<div>
          <QuoteOfTheDay />
        </div>
        }
      </div>
    );
  }
}

export default App;
