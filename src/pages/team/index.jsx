import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
import { Row, Col, Card } from 'react-bootstrap';
import teamTitleBackground from '../../images/background/team.jpg';
import Footer from '../../components/Footer';
// import FadeIn from 'react-fade-in';
// import LazyLoad from 'react-lazyload';
// import data from '../../shared/Students.json';
// import avatar from './avatar.png';
import overallJrCoordinator from '../../data/overallJrCoordinator.json'
import webTeamData from '../../data/webteam.json';
import contentTeamData from '../../data/contentTeam.json';
import coordinatorTeamData from '../../data/coordinator.json';
import designTeamData from '../../data/designTeam.json';
import eventCoordinators from '../../data/eventCoodinators.json';
import eventManager from '../../data/eventManager.json';
import marketingTeam from '../../data/marketingTeam.json';
import operationsHead from '../../data/operationsHead.json';
import sponsorshipTeam from '../../data/sponsorship.json';
import utilitiesTeam from '../../data/utilitiesTeam.json';
import workshopTeam from '../../data/workshopTeam.json';
import accountsManager from '../../data/accountsManager.json';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/team.css';
import './styles.css';
import Header from '../../components/Header';



const Team = () => {
	const makeName = (name) => {
		let newName = '';
		let words = name.split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].toLowerCase();
			newName += words[i].charAt(0).toUpperCase() + words[i].slice(1);
			newName += ' ';
		}
		return newName;
	};
	const delayTime = 300
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<Header active={7} />
				<section
					className="page-title"
					id="page-title"
					style={{ backgroundImage: `url(${teamTitleBackground})` }}
				>
					<div className="auto-container">
						<span className="float-text">Team</span>
						<h1>Team</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/">Home </a>
							</li>
							<li>Team</li>
						</ul>
					</div>
				</section>

				<section className="our-speaker-area section-padding-100">
					<div className="auto-container">
						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Overall Co-ordinator</h1>
						</div>
						<div className="row">
							{coordinatorTeamData.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb" s>
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div
												className="speaker-info"
												style={{ backgroundColor: 'transparent' }}
											>
												<h5>{makeName(data.name)}</h5>
												{/* <br /> */}
												<p style={{ color: 'cyan' }}>
													General Secretary Technical Affairs
												</p>
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Operations Head</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{operationsHead.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Accounts Manager</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{accountsManager.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Event Manager</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{eventManager.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Jr. Overall Co-ordinator</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{overallJrCoordinator.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Sponsorship Management Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{sponsorshipTeam.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Workshop Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{workshopTeam.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>
						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Marketing Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{marketingTeam.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>
						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Web-ops Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{webTeamData.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Design Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{designTeamData.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5>{makeName(data.name)}</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Content Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{contentTeamData.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5
												// style={{
												// 	color: `${
												// 		data.github == 'https://github.com/saurabh021120'
												// 			? '#c9c9c9'
												// 			: 'white'
												// 	}`,
												// }}
												>
													{makeName(data.name)}
												</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Utilities Team</h1>
						</div>
						{/* <FadeIn className="row"> */}
						<div className="row">
							{utilitiesTeam.map((data, i) => (
								<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
									<Zoom delay={delayTime}>
										{/* <Card delay={600} style={{ border: 0 }}> */}
										<div className="single-speaker-area wow fadeInUp ">
											<div className="speaker-single-thumb">
												<img src={`${data.image}`} alt="" />
											</div>

											<div className="social-info">
												{data.facebook && (
													<a href={`${data.facebook}`} target="_blank">
														<i className="fab fa-facebook-f"></i>
													</a>
												)}
												{data.instagram !== '' && (
													<a href={`${data.instagram}`} target="_blank">
														<i className="fab fa-instagram"></i>
													</a>
												)}
												{data.github !== '' && (
													<a href={`${data.github}`} target="_blank">
														<i className="fab fa-github"></i>
													</a>
												)}
												{data.linkedin !== '' && (
													<a href={`${data.linkedin}`} target="_blank">
														<i className="fab fa-linkedin-in"></i>
													</a>
												)}
											</div>
											<div className="speaker-info">
												<h5
												// style={{
												// 	color: `${
												// 		data.github == 'https://github.com/saurabh021120'
												// 			? '#c9c9c9'
												// 			: 'white'
												// 	}`,
												// }}
												>
													{makeName(data.name)}
												</h5>
												{/* <p>General Secretary Technical Affairs</p> */}
											</div>
										</div>
										{/* </Card> */}
									</Zoom>
								</div>
							))}
						</div>

						{/* Event cordinators */}

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Event Co-ordinators</h1>
						</div>

						<div className="row">
							<div className="sec-title">
								<h4>Devhack Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'devhack' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Algostrike Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'algostrike' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>VeniVidiVici Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'venividivici' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Designõ Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'designo' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Ascensus Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'ascensus' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Quiz Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'quiz' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>
						</div>

						{/* </FadeIn> */}

						{/* !!!!!!!!! */}
					</div>
				</section>
				<Footer />
			</div>
		</React.Fragment>
	);
};

const row_style = {
	height: '100%',
	margin: 'auto',
	marginTop: '11vh',
	padding: '1%',
	maxWidth: '100%',
	flexGrow: '1',
};

const col_style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '2%',
};

export default Team;
