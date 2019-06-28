import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
	return(
		<div className="navbar navbar-dark bg-primary fixed-top">
			<Link className="navbar-brand" to="/">
				Q&App
			</Link>
		</div>
	)
}

export default NavBar;

