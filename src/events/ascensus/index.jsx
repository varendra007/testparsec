import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';

const Ascensus = () => {
	return (
		<React.Fragment>
			<EventsBackground />
			<div className="page-wrapper">
				<div className="preloader"></div>
				<Header active={2} />

				<section
					className="page-title"
					id="page-title"
					style={{ position: 'relative', margin: '-150px auto 0' }}
				>
					{/* <canvas id="c" style={{position: 'absolute', top: '0px', left: '0px', backgroundColor: 'black'}}></canvas> */}
					<div
						className="auto-container"
						style={{ background: 'rgba(34, 40, 49, 0.87)' }}
					>
						<div className="project-tabs tabs-box">
							<div
								className="inner-column tab active-tab"
								id="introduction"
								style={{ background: 'rgba(34, 40, 49, 0.87)' }}
							>
								<section
									className="login-section"
									style={{
										backgroundImage: 'url(images/background/7.jpg)',
										paddingTop: '0px',
										background: 'rgba(34, 40, 49, 0.87)',
									}}
								>
									<div
										className="auto-container"
										style={{ background: 'rgba(34, 40, 49, 0.87)' }}
									>
										<div className="login-form">
											<div className="pt-4 row clearfix">
												<h1
													className="px-3 py-2 w-100 text-center"
													style={{
														fontFamily: 'poppins',
														color: 'rgba(255, 173, 64)',
													}}
												>
													ASCENSUS
												</h1>
												<h2
													className="px-3 py-2 w-100 text-center"
													style={{
														fontFamily: 'poppins',
														color: 'rgba(255, 173, 64)',
													}}
												>
													CASE STUDY COMPETITION
												</h2>

												<div className="form-column col-lg-12 col-md-12 col-sm-12">
													<div className="py-0 px-2">
														<div className="title-box">
															<div
																className="text"
																style={{ color: '#eeeeee', fontSize: '20px' }}
															>
																PARSEC brings to you ascensus, a real time case
																study competition to test your business acumen.
																In Ascensus, you will be competing with top
																teams from all over India to exhibit your mettle
																before the judges. 
															</div>
															<div
																className="row justify-content-center align-items-center"
																style={{ margin: 'auto', paddingTop: '40px' }}
															>
																<div className="btn-box text-center">
																	<a
																		href="##"
																		className="theme-btn btn-style-four button2 text-center"
																		id="btncs2"
																		style={{
																			borderRadius: '8px',
																			color: '#ffffff',
																			// background: 'rgba(242, 172, 79,0.9)',
																		}}
																	>
																		Coming Soon
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													className="form-column col-lg-12 col-md-12 col-sm-12"
													style={{ padding: '40px' }}
												>
													<div className="border-info">
														<div
															className="row-cols-1"
															style={{
																border: '2px solid rgb(242, 172, 79)',
																borderRadius: '8px',
																overflow: 'hidden',
															}}
														>
															<div
																className="card-body text-center text-info"
																style={{
																	fontFamily: 'Roboto, sans-serif',
																	fontSize: 'large',
																	fontWeight: 'bold',
																	background: '#393e46',
																}}
															>
																<div
																	className="row"
																	style={{ color: `rgb(242, 172, 79)` }}
																>
																	<div className="col-md-6">Rounds : 3</div>
																	<div className="col-md-6">Team Size: 1</div>
																</div>
															</div>{' '}
														</div>
													</div>

													<br />

													<p
														className="font-weight-bold"
														style={{ fontSize: 'large', color: '#eeeeee' }}
													>
														Ascensus will be hosted on dare2compete (D2C)
														platform and will be of 3 rounds. The event
														starts at 8:00 PM on 4th March, 2022.
													</p>
													<p
														// className="font-weight-bold"
														style={{ fontSize: 'large', color: '#eeeeee' }}
													>
														<div>Quiz round : 1 March - 7 PM</div>
														<div>
															Problem statement round : 1 March - 11 PM{' '}
															Submission : 5 March - 6 PM
														</div>
														<div>Ppt presentation round : 6 March - 12 pm</div>
													</p>

													<ul
														style={{
															color: `#707070`,
														}}
														className="list-style-four2"
													>
														<li
															style={{
																color: `#707070`,
															}}
														>
															<strong>
																Round one will be a quiz to test your business
																and Management knowledge
															</strong>
														</li>
														<li
															style={{
																color: `#707070`,
															}}
														>
															<strong>
																Round Two will be ppt submission on solution of
																the given problem statement
															</strong>
														</li>
														<li
															style={{
																color: `#707070`,
															}}
														>
															<strong>
																In Round Three, you will be presenting your
																solution in front of the jury
															</strong>
														</li>
													</ul>

													<p
														className="font-weight-bold"
														style={{ fontSize: 'large', color: '#eeeeee' }}
													>
														Still have queries? Reach out to us on our Telegram{' '}
														<a
															href="https://t.me/parsec_casestudy"
															target={'_blank'}
															style={{ color: 'rgb(242, 172, 79)' }}
														>
															channel
														</a>{' '}
														and we will try our best to answer all of them.
													</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Ascensus;
