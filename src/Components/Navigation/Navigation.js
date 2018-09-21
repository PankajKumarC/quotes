import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<h3 className="Heading">Random Quote Generator</h3>
			<p onClick={() => onRouteChange('SignIn')} className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>Sign In</p>
			<p onClick={() => onRouteChange('SignUp')} className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>Sign Up</p>
			<p onClick={() => onRouteChange('AboutUs')} className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>About Us</p>
		</nav>
	);
}

export default Navigation;