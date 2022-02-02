import React, { useState, useEffect } from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from '@emotion/styled/macro';
// import ReactCardFlip from 'react-card-flip'; 
import eventBg from '../../images/_events/bg.jpeg';
import prsents from '../../images/_events/PRESENTS.png';
import parsecLogo from '../../images/_events/parsec_logo.png';
import devhack from '../../images/_events/devhack_logo.png';
import algostrike from '../../images/_events/algostrike.png';
import venni from '../../images/_events/vinni.png';
import quiz from '../../images/_events/quiz.png';
import ascensus from '../../images/_events/ascensus.png';
import designo from '../../images/_events/designo.png';
import EventBackground from '../../components/eventsBackground';
import evtTitle from '../../images/_events/evtTitle.jpg';
// import evtSmall from '../../images/_events/evtSmall.png';

import LazyLoad from 'react-lazyload';
import { useMediaQuery } from 'react-responsive';

const EvtCard = ({ evtTitle, evtLogo, evtUrl,date,time,mode}) => {
	// const url = '/hackathon';
	const isMobile = useMediaQuery({
		query: '(max-width: 400px)',
	});
	const isTablet = useMediaQuery({
		query: '(max-width: 1100px)',
	});
	
	return (
		<div
			className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp bg-img flip-card"
			style={{
				padding: '0',
				width: isTablet === true ? '280px' : '320px',
				height: '320px',
				margin:
					isMobile === true
						? '1.5rem auto'
						: isTablet === true
						? '1rem auto'
						: '1.5rem',
				background: `url(${eventBg})`,
				// objectFit: 'contain'
			}}
			id="example3"
		>
			<a href={evtUrl}>
				<div className='flip-card-inner'>

				<div style={{ width: '100%', height: '100%'}}
					 className='flip-card-front' 
						 >
					<img
						src={parsecLogo}
						style={{
							height: '57px',
							position: 'absolute',
							top: '20px',
							left: '0',
							right: '0',
							margin: '0 auto',
						}}
					/>
					<img
						src={prsents}
						style={{
							height: '20px',
							position: 'absolute',
							top: '82px',
							left: '0',
							right: '0',
							margin: '0 auto',
						}}
					/>
					<div 
						style={{
							height: '150px',
							width: '150px',
							borderRadius: '75px',
							position: 'absolute',
							top: '124px',
							left: '0',
							right: '0',
							margin: '0 auto',
							background: 'rgba(255,255,255, 0.25)',
						}}

						
					>
						<div
							style={{
								height: '90px',
								width: '90px',
								borderRadius: '45px',
								position: 'absolute',
								top: '0px',
								left: '0',
								right: '0',
								bottom: '0',
								margin: ' auto',
								background: '#000000',
							}}
						>
							<img
								src={evtLogo}
								style={{
									height: '50%',
									position: 'absolute',
									top: '0',
									left: '0',
									right: '0',
									bottom: '0',
									margin: 'auto',
								}}
							/>
						</div>
					</div>
					{/* <img
						src={evtTitle}
						style={{
							height: '20px',
							position: 'absolute',
							top: '290px',
							left: '0',
							right: '0',
							margin: '0 auto',
						}}
					/> */}
					<h3
						className="text-capitalize"
						style={{
							// height: '20px',
							fontSize: '21px',
							position: 'absolute',
							top: '290px',
							left: '0',
							right: '0',
							margin: '0 auto',
							fontFamily: `'Oswald', sans-serif`,
							color: '#ffffff',
							textAlign: 'center',
						}}
					>
						{evtTitle}
					</h3>
				</div>

				<div class="flip-card-back" >
						<h2 style={{ fontFamily: `'Oswald', sans-serif`,color : 'white', padding : '20px'}}>{evtTitle}</h2>

						<div style={{
								display: 'flex',
								flexDirection :'column',
								flexWrap : 'nowrap',
								justifyContent:'space-around',
								justifyItems:'center' }}
							>
							
							<div style={{padding:'20px'}}><h5 style={{fontFamily: `'Oswald', sans-serif`,color : 'white'}}>DATE : {date}</h5></div>
							<div style={{padding:'20px'}}><h5 style={{fontFamily: `'Oswald', sans-serif`,color : 'white'}}>TIME : {time}</h5></div>
							<div style={{padding:'20px'}}><h5 style={{fontFamily: `'Oswald', sans-serif`,color : 'white'}}>MODE : {mode}</h5></div>
						</div>
						
				</div>


			</div>
				
			</a>
			
		</div>
	);
};


// const Card = ({evtTitle, evtLogo, evtUrl, details}) => {
// 	const [isFlipped, setIsFlipped] = React.useState(false);
// 	
// 	return (
// 	  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
// 		<div
// 		  style={CardStyle}
// 		  onMouseEnter={() => setIsFlipped((prev) => !prev)}
// 		  
// 		>
//		<EvtCard
// 		evtLogo={evtLogo}
// 		evtTitle={evtTitle}
// 		evtUrl={evtUrl}
//		/>
// 		  
// 		</div>
// 		<div
// 		  style={CardStyle}
// 		  onMouseLeave={() => setIsFlipped((prev) => !prev)}
// 		
// 		>
// 		  {details}
// 		</div>
// 	  </ReactCardFlip>
// 	);
//   };


const EventLanding = () => {
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 600px)' });

	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<EventBackground bgColor={'#ffffff'} />
				<Header active={2} />

				<section
					className="page-title"
					style={{
						backgroundImage: `url(${evtTitle})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				>
					<div className="auto-container">
						<span className="float-text" id="sec-title-text">
							EVENTS
						</span>
						<h1>Our Events</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/" id="sec-title-text">
									Home
								</a>
							</li>
							<li id="sec-title-text">Events</li>
						</ul>
					</div>
				</section>

				<section className="event-venue-section" style={{}}>
					<div className="auto-container" style={{ padding: '0 auto' }}>
						<div className="sec-title">
							<h2 style={{ color: '#ffffff' }}>Events</h2>
						</div>
						{/* <LazyLoad> */}

						<div className="row " style={{padding: 'auto', display: 'flex-wrap', justifyContent: 'center'}}>

						
							
    					
							<EvtCard
								evtLogo={devhack}
								evtTitle="DEVHACK 3.0"
								evtUrl={'/hackathon'}
								date="4 MARCH 2022"
								time="8 PM"
								mode="ONLINE"
								
							/>
							<EvtCard
								evtLogo={algostrike}
								evtTitle="ALGOSTRIKE 2.0"
								evtUrl={'/cp'}
								date="5 MARCH 2022"
								time="3 PM"
								mode="ONLINE"
							/>
							<EvtCard
								evtLogo={venni}
								evtTitle="VENIVIDIVICI 2.0"
								evtUrl={'/ctf'}
								date="4 MARCH 2022"
								time="8 PM"
								mode="ONLINE"
							/>
							<EvtCard 
								evtLogo={quiz} 
								evtTitle="QUIZ" 
								evtUrl={'/quiz'}
								date="5 MARCH 2022"
								time="12:30 PM"
								mode="ONLINE"
							/>
							<EvtCard
								evtLogo={designo}
								evtTitle="DESIGNÕ"
								evtUrl={'/designo'}
								date="5 MARCH 2022"
								time="2 PM"
								mode="ONLINE"
							/>
							<EvtCard
								evtLogo={ascensus}
								evtTitle="ASCENSUS"
								evtUrl={'/ascensus'}
								date="4 MARCH 2022"
								time="8 PM"
								mode="ONLINE"
							/>
							  {/* <EvtCard 
								evtLogo={devhack}
								evtTitle="GUARDAINS"
								evtUrl={}
								date="4 MARCH 2022"
								time="8 PM"
								mode="ONLINE"  
								
							/> */}
						</div>

						{/* </LazyLoad> */}
					</div>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default EventLanding;
