import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import QuoteOfTheDay from './Components/QuoteOfTheDay/QuoteOfTheDay';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AboutUs from './Components/AboutUs/AboutUs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {  
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/> 
        { this.state.route === 'home' 
          ? <div>
            <QuoteOfTheDay />
          </div>
          : (
            this.state.route === 'SignIn' 
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : ( 
                this.state.route === 'SignUp'
                ? <SignUp onRouteChange={this.onRouteChange}/> 
                : <AboutUs onRouteChange={this.onRouteChange}/>
              )
          )
        }
      </div>
    );
  }
}

export default App;
