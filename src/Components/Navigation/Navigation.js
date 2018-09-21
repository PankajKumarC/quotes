import React from 'react';
import './Navigation.css'

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<h3 className="Heading">Random Quote Generator</h3>
			<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>Sign In</p>
			<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>Sign Up</p>
			<p className='link pointer grow f3-ns pa3 link b green bg-animate hover-bg-white'>About Us</p>
		</nav>
	);
}

export default Navigation;