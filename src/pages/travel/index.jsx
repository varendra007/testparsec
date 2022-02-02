import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/sponser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import travelTitleBg from '../../images/background/travel.jpg';
const Travel = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${travelTitleBg})` }}
				>
					<div className="auto-container">
						<span className="float-text" id="sec-title-text">
							Travel
						</span>
						<h1>How to Reach?</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/" id="sec-title-text">
									Home
								</a>
							</li>
							<li id="sec-title-text">Travel</li>
						</ul>
					</div>
				</section>

				<section className="event-venue-section">
					<div className="auto-container">
						<div className="sec-title">
							<h2>Reaching IIT Dharwad</h2>
						</div>

						<div className="row">
							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">
												From Hubballi Airport
												<br />
											</a>
										</h4>
									</div>
									<div className="text">
										<br />
										<span className="dot"></span>{'    '} Take a Cab direct to IIT
										Dharwad campus. Standard charges 800/-
									</div>
								</div>
							</div>

							<div className="col-lg-1"></div>

							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">From Dharwad New Bus Stand</a>
										</h4>
									</div>

									<div className="text">
										<span className="dot"></span>{'    '} Take a bus to Belgaum
										(purchase ticket to _ Dharwad High Court_)
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Get down at Dharwad High
										Court
									</div>
								</div>
							</div>

							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="800ms"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">From Jubilee Circle (Dharwad) </a>
										</h4>
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Take a Belur bus to
										Dharwad High Court.{' '}
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Get down at Dharwad High
										Court{' '}
									</div>
								</div>
							</div>

							<div className="col-lg-1"></div>

							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">From Dharwad Railway Station</a>
										</h4>
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Take a bus to Dharwad
										High Court (rare) <br />
										<span className="dot"></span>{'    '} Otherwise, take a bus to
										Jubilee Circle <br />
										<span className="dot"></span>{'    '} Route from Jubilee Circle
										mentioned earlier
									</div>
								</div>
							</div>

							<br />
							<br />

							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">From Hubballi Railway Station</a>
										</h4>
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Go to the Railway Station
										BRTS bus stop <br />
									<span className="dot"></span>{'    '} Take a bus to Jubilee
										Circle <br />
										<span className="dot"></span>{'    '} Route from Jubilee Circle
										mentioned earlier
									</div>
								</div>
							</div>

							<div className="col-lg-1"></div>

							<div
								className="venue-feature-block col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="800ms"
								id="example3"
							>
								<div className="inner-box">
									<div className="title">
										<span className="icon flaticon-star-4"></span>
										<h4>
											<a href="#">From Hubballi Old/New Bus Stand</a>
										</h4>
									</div>
									<div className="text">
										<span className="dot"></span>{'    '} Take a bus to Belgaum
										(purchase ticket to Dharwad High Court) <br />
										<span className="dot"></span>{'    '} Get down at Dharwad High
										Court
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Travel;
