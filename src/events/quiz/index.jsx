import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import quizTitleBackground from '../../images/resource/19629.jpg';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';

const Quiz = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<EventsBackground />

				<Header active={2} />

				<section
					className="page-title"
					id="page-title"
					style={{ backgroundImage: `url(${quizTitleBackground})` }}
				>
					<div className="auto-container">
						<span className="float-text">SciTech Quiz</span>
						<h1>Quiz</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="index.html" style={{ textDecoration: `None` }}>
									Home{' '}
								</a>
							</li>
							<li>Quiz</li>
						</ul>
					</div>
				</section>

				<section className="project-section" style={{ background: `#090b38` }}>
					<div className="anim-icons">
						<span className="icon icon-cross-1"></span>
					</div>
					<div className="auto-container">
						<div className="row">
							<div className="content-column col-lg-12 col-md-12 col-sm-12 tabs-content">
								<div className="inner-column tab active-tab" id="introduction">
									<section
										className="login-section"
										style={{
											//backgroundImage:`url(images/background/7.jpg)`,
											paddingTop: `0px`,
										}}
									>
										<div className="auto-container">
											<div
												className="login-form"
												style={{
													boxShadow: `1px 1px 2px black, 0 0 35px blue, 0 0 15px darkblue`,
												}}
											>
												<div className="row clearfix">
													<h1
														className="mx-auto mt-5"
														style={{ color: `#ce41af`, textAlign: `center` }}
													>
														Quiz
													</h1>

													<div className="form-column col-lg-12 col-md-12 col-sm-12">
														<div
															style={{ padding: `40px`, paddingBottom: `0px` }}
														>
															<div className="title-box">
																<div
																	className="text"
																	style={{ color: `#ffffff`, fontSize: `20px` }}
																>
																	Under <strong>PARSEC 2022</strong>, the{' '}
																	<strong>Quiz Club of IIT Dharwad</strong> is
																	conducting a{' '}
																	<strong>Science and Technology Quiz</strong>{' '}
																	for High School and college students in and
																	around Dharwad-Hubli. The questions are
																	designed to investigate, rather than to simply
																	arrive at an answer, and specifically to
																	promote debate and discussion among teams and
																	the judges.
																</div>
															</div>
															<div
																className="row justify-content-center align-items-center"
																style={{ margin: `auto` }}
															>
																<div
																	className="btn-box"
																	style={{ textAlign: `center` }}
																>
																	<a
																		href="#"
																		//  target="_blank"
																		className="theme-btn btn-style-one btn-rounded mb-4"
																		// id="btncs"
																		style={{
																			// pointerEvents: `none`,
																			textDecoration: `none`,
																		}}
																	>
																		COMING SOON
																	</a>
																</div>
															</div>
															<div
																className="row justify-content-center align-items-center"
																style={{ margin: `auto` }}
															>
																<div className="load-10">
																	<div className="bar"></div>
																</div>
															</div>
														</div>
													</div>

													<div className="image-column col-lg-11 col-sm-12 col-sm-12">
														<div
															className="image-box wow fadeIn"
															style={{ paddingTop: `0px` }}
														>
															<figure
																className="image"
																style={{
																	marginLeft: `auto`,
																	marginRight: `auto`,
																}}
															>
																<img
																	src="images/resource/quiz.jpg"
																	className="rounded mx-auto d-block"
																	alt=""
																	style={{ margin: `auto`, maxWidth: `500px` }}
																></img>
															</figure>
														</div>
													</div>

													<br></br>

													<div
														className="form-column col-lg-12 col-md-12 col-sm-12"
														style={{ padding: `40px` }}
													>
														<div
															className=" border-danger"
															style={{
																border: '2px solid #ed6286',
																borderRadius: '8px',
																overflow: 'hidden',
															}}
														>
															<div
																style={{
																	backgroundColor: `#090b38`,
																	fontFamily: `'Roboto', sans-serif`,
																	fontSize: `large`,
																	fontWeight: `bold`,
																}}
																className="card-body text-center text-danger"
															>
																<div className="row">
																	<div
																		className="col-md-6"
																		style={{ color: `#ed6286` }}
																	>
																		Duration: 3 hours
																	</div>
																	<div
																		className="col-md-6"
																		style={{ color: `#ed6286` }}
																	>
																		Team Size: 2
																	</div>
																</div>
															</div>
														</div>

														<br />
														<p style={{ fontSize: `large`, color: `#ffffff` }}>
															The topics covered in the quiz would be basic
															knowledge of high school science, developments and
															current news from the world of Science and
															Technology.
														</p>
														<ul
															className="list-style-four"
															style={{ fontSize: `large`, color: `#ed6286` }}
														>
															<li style={{ color: `#ed6286` }}>
																Quiz starts: 12:30 PM, 5th March, 2022 
															</li>
															<li style={{ color: `#ed6286` }}>
																Students of Standard 9th to 12th and
																Undergraduate are welcome
															</li>
															<li style={{ color: `#ed6286` }}>
																Participants should belong to the same
																school/college
															</li>
															<li style={{ color: `#ed6286` }}>
																School/College ID Cards needed for verification
															</li>

															<li style={{ color: `#ed6286` }}>
																Max. 5 Teams will be selected from a school.
															</li>
														</ul>
														{/* &nbsp; */}
														<p
															style={{
																fontFamily: `FontAwesome, sans-serif`,
																fontSize: `large`,
																color: `#ffffff`,
															}}
														>
															All participants would be competing amongst
															themselves for a chance to participate in the
															finals. Top 8 teams would advance from the
															preliminary round to the finals.
														</p>

														<p
															className="font-weight-bold"
															style={{
																fontFamily: `FontAwesome`,
																fontSize: `large`,
																color: `#ffffff`,
															}}
														>
															<strong>
																Amazing prizes for all the finalists and
																participation certificates for all the
																participants.
															</strong>
														</p>

														<p
															style={{ fontSize: `large`, color: `#ffffff` }}
															className="font-weight-bold"
														>
															Still have queries? Join us on our Telegram{' '}
															<a
																href="https://t.me/parsecquiz"
																style={{
																	color: `#ed6286`,
																	textDecoration: `None`,
																}}
																target={'_blank'}
															>
																channel
															</a>{' '}
															and we'll try our best to answer all your doubts.
														</p>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Quiz;
