import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import QuoteOfTheDay from './Components/QuoteOfTheDay/QuoteOfTheDay';
import SignIn from './Components/SignIn/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Navigation'
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {  
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/> 
        { this.state.route === 'SignIn' 
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
