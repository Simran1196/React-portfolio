import React from 'react';

import './Division.css';


const myStyles={
	
	height : '30vh',
	backgroundSize : 'cover'

}

class Division extends React.Component{
	
	render()
	{
		return(
			<divi style={myStyles}>
			 <h2>{this.props.title}</h2>
			 <p>This theme feature a flexible, UX friendly side menubar, and stock photos.</p>
			 <a href="#button">{this.props.title}</a>
			</divi>


	   );
	}

};

export default Division;
 