import React,{ Component} from 'react';
import './Services.css';

class Services extends Component{
	render(){
		return(
		<div className="services">
			<h3>SERVICES</h3> 
			<h2>What we Offer</h2>
			<div className="row">
			<Icons myIcon={iconObj[0].icons} myTitle={iconObj[0].title} mydes={iconObj[0].description}/>
			<Icons myIcon={iconObj[1].icons} myTitle={iconObj[1].title} mydes={iconObj[1].description}/>
			<Icons myIcon={iconObj[2].icons} myTitle={iconObj[2].title} mydes={iconObj[2].description}/>
			<Icons myIcon={iconObj[3].icons} myTitle={iconObj[3].title} mydes={iconObj[3].description}/>
			</div>
		</div>
			
		);
	}
}

const iconObj=[
			{
			   icons : <ion-icon name="phone-portrait"></ion-icon>,
			   title:'Responsiveness',
			   description:'Look great on any scree size'
			},
			{
				icons : <ion-icon name="brush"></ion-icon>,
			   title:'Redesigned',
			   description:'Freshly redesigned for Bootstrap'
			},
			{

				icons : <ion-icon name="thumbs-up"></ion-icon>,
			   title:'Favourited',
			   description:'Millions of users love Start Bootstrap'
			},
			{

			   
				icons : <ion-icon name="help"></ion-icon>,
			   title:'Question',
			   description:'I mustache you a question...'
			}
			  ];

class Icons extends Component{
	render(){
		return(
			<div>
				<span>
					{this.props.myIcon}
				</span>
				<h4>{this.props.myTitle}</h4>
				<p>{this.props.mydes}</p>
			</div>


		);
	}
}
export default Services;