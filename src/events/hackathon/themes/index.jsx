import React from 'react';
import './styles.css';
import '../../../css/style.css';
import '../../../css/bootstrap.css';
import '../../../css/responsive.css';

const Themes = () => {
	return (
		<React.Fragment>
			<div className="tab inner-column active-tab" id="theme">
				<h2
					style={{
						fontFamily: `'Roboto', sans-serif`,
						fontWeight: `bold`,
					}}
				>
					THEMES
				</h2>
				<hr></hr>
				<div className="content-box">
					<p style={{ fontSize: `large`, color: `#12114a` }}>
						The hackathon has two main tracks -<br></br>
						<span className="text-danger">
							(i) <strong>Hardware</strong>
							<br></br>
							(ii)
							<strong>Software</strong>
						</span>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						Each hack will be judged and ranked separately in their respective
						tracks.
						<br></br>
						<br></br>
						The participants are required to choose from the below given themes
						and pick up a general problem statement and solve it based on their
						domain expertise.
					</p>
					<section
						className="pricing-section style-four"
						style={{ paddingTop: `10px` }}
					>
						<div className="anim-icons">
							<span className="icon icon-circle-1 wow zoomIn"></span>
							<span
								className="icon icon-circle-2 wow zoomIn"
								data-wow-delay="600ms"
							></span>
							<span
								className="icon icon-circle-3 wow zoomIn"
								data-wow-delay="1200ms"
							></span>
							<span
								className="icon icon-circle-4 wow zoomIn"
								data-wow-delay="1800ms"
							></span>
						</div>
						<div className="auto-container col-lg-12">
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/brain.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>
												Artificial Intelligence
											</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/idea.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Open Innovation</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 h-25 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/iot.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>IoT</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 h-25 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/mobility.png"
												alt=""
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Future Mobility</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/blockchain.png"
												alt=""
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Blockchain</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/edu.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Edtech</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/fin.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Fintech</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/mri.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Health</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/network.png"
												alt=""
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Security</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img src="./images/event/devhack/web.png" alt=""></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Web and App Dev</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/power.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Power Efficiency</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/energy.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>
												Sustainable Energy
											</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/energy_security.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Energy Security</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/heat.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Heat Transfer</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/fluid.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Fluid Mechanics</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/mechanics.jpg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>Mechanics</h5>
										</div>
									</div>
								</div>{' '}
								<div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
									<div
										className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<div className="speaker-single-thumb">
											<img
												src="./images/event/devhack/thermo.svg"
												alt=""
												style={{
													height: `185px`,
													margin: `auto`,
												}}
											></img>
										</div>
										<div className="speaker-info">
											<h5 style={{ textAlign: `center` }}>
												Applied Thermodynamics
											</h5>
										</div>
									</div>
								</div>{' '}
							</div>
						</div>
					</section>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Themes;
