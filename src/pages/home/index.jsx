import React, { useEffect, Suspense } from 'react';
import './styles.css';
import '../../css/counternew.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import parsecLogo from '../../images/logos/parsec-lg.png';
import mainSlider from '../../images/main-slider/4_comp.jpg';
import EventCarousel from './eventsCarousel';

import { Typewriter } from '@chrisfieldsii/react-use-typewriter';
import '@chrisfieldsii/react-use-typewriter/dist/index.css';
import Sponsors from './sponsors';
import AboutUs from './about';

import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
ReactGA.initialize('G-6YRWL6SYFE');
const Home = () => {
	useEffect(() => {
		function getTimeRemaining(endtime) {
			// 'use strict';
			var t = Date.parse(endtime) - Date.parse(new Date());
			//document.write(endtime.getTimezoneOffset());
			//document.write(t/1000);
			//document.write(t/1000+(endtime.getTimezoneOffset()));
			var use = t / 1000 + endtime.getTimezoneOffset() * 60;
			//var use =( t / 1000);
			var seconds = Math.floor(use % 60);
			var minutes = Math.floor((use / 60) % 60);
			var hours = Math.floor((use / (60 * 60)) % 24);
			var days = Math.floor(use / (60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			};
		}

		function initializeClock(id, endtime) {
			// 'use strict';
			var clock = document.getElementById(id);
			var daysSpan = clock.querySelector('.days');
			var hoursSpan = clock.querySelector('.hours');
			var minutesSpan = clock.querySelector('.minutes');
			var secondsSpan = clock.querySelector('.seconds');

			function updateClock() {
				var t = getTimeRemaining(endtime);

				daysSpan.innerHTML = t.days;
				hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
				minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
				secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}

			updateClock();
			var timeinterval = setInterval(updateClock, 1000);
		}
		//var deadline = "17/01/2020";
		var date1 = new Date('2022-03-04T18:30:00Z');
		var date2 = new Date();
		//document.write(date2.getHours());
		//document.write(date1.getHours());
		var seconds = date1.getTime() - date2.getTime(); //1440516958
		var deadline = new Date(Date.parse(new Date()) + seconds);
		initializeClock('clockdiv', deadline);

		(function ($) {
			// 'use strict';

			//Hide Loading Box (Preloader)
			function handlePreloader() {
				if ($('.preloader').length) {
					$('.preloader').delay(200).fadeOut(500);
				}
			}

			//Update Header Style and Scroll to Top
			function headerStyle() {
				if ($('.main-header').length) {
					var windowpos = $(window).scrollTop();
					var siteHeader = $('.main-header');
					var scrollLink = $('.scroll-to-top');
					if (windowpos >= 1) {
						siteHeader.addClass('fixed-header');
						scrollLink.fadeIn(300);
					} else {
						siteHeader.removeClass('fixed-header');
						scrollLink.fadeOut(300);
					}
				}
			}

			headerStyle();

			/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

			$(window).on('scroll', function () {
				headerStyle();
			});

			/* ==========================================================================
   When document is loading, do
   ========================================================================== */

			$(window).on('load', function () {
				handlePreloader();
			});
		})(window.jQuery);
	}, []);

	// Tracker code
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<Header active={1} />

				<section
					id="vantajs"
					className="banner-section-two "
					style={{
						backgroundImage: `url(${mainSlider})`,
						height: '100vh',
						// paddingTop: '0px'
					}}
				>
					<div className="night" style={{ position: 'absolute', top: '-10vh' }}>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
						<div className="shooting_star"></div>
					</div>
					<div className="auto-container">
						<div className="content-box">
							<div
								className="title-box text-center"
								style={{ alignItems: 'center' }}
							>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										width: '100%',
										flex: 1,
										justifyContent: 'center',
									}}
								>
									<div style={{ width: '100%' }}>
										<img
											className="col-md-5 img-fluid"
											src={parsecLogo}
											id="bg-img"
											style={{ maxWidth: '450px' }}
										/>
									</div>
								</div>
								<br />
								<h4 className="ml12 text-white mt-5">
									<span
										className="ml12 letter"
										id="intro-title"
										style={{ fontSize: '1.5rem', fontWeight: '450' }}
									>
										<Typewriter
											loop
											cursor
											cursorStyle="|"
											typeSpeed={90}
											deleteSpeed={90}
											delaySpeed={1000}
											words={['ANNUAL TECHFEST OF IIT DHARWAD']}
											// onLoop={(loopCount) =>

											// }
										/>
									</span>
								</h4>
							</div>
						</div>
					</div>
				</section>

				<br />
				<br />

				<AboutUs />

				<br />
				<br />
				<br />
				<br />

				<section
					className="about-us-countdown-area section-padding-100-0"
					id="about"
				>
					<div className="countdown-up-area">
						<div className="auto-container">
							<div id="clockdiv" className="row align-items-center">
								<div className="col-12 col-md-3">
									<div
										className="countdown-content-text mb-100 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<h6 style={{ textAlign: 'left' }}>4th March</h6>
										<h4 style={{ fontWeight: '450', textAlign: 'left' }}>
											Coming in...
										</h4>
									</div>
								</div>

								<div className="col-12 col-md-2">
									<div
										className="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											className="days"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Days
											</span>
										</h3>
									</div>
								</div>
								<div className="col-12 col-md-2">
									<div
										className="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											className="hours"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Hours
											</span>
										</h3>
									</div>
								</div>
								<div className="col-12 col-md-2">
									<div
										className="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											className="minutes"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Minutes
											</span>
										</h3>
									</div>
								</div>
								<div className="col-12 col-md-2">
									<div
										className="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											className="seconds"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Seconds
											</span>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <EventCarousel /> */}
				{/* lasdjfaldsfjasdfkasldfja */}
				<section className="location-section">
					<span className="float-text">Our Events</span>
					<div className="anim-icons">
						<span className="icon icon-dots wow zoomIn"></span>
						<span className="icon icon-dots-2"></span>
						<span className="icon icon-lines"></span>
					</div>
					<section id="events" className="events-section">
						<div className="anim-icons">
							<span className="icon icon-circle-1 wow zoomIn"></span>
							<span
								className="icon icon-circle-2 wow zoomIn"
								data-wow-delay="300ms"
							></span>
							<span
								className="icon icon-circle-3 wow zoomIn"
								data-wow-delay="600ms"
							></span>
							<span
								className="icon icon-circle-4 wow zoomIn"
								data-wow-delay="900ms"
							></span>
						</div>
						<div className="auto-container" style={{ width: '80%' }}>
							<div className="sec-title">
								<h2>Events</h2>
							</div>
							<EventCarousel />
						</div>
					</section>
				</section>

				<section
					id="what-you-get"
					className="features-section"
					style={{ backgroundColor: '#12114a', paddingTop: '80px' }}
				>
					<span className="float-text">our feature</span>
					<div className="container">
						<div className="sec-title">
							<h2 style={{ color: '#fff' }}>What You Get</h2>
						</div>

						<div className="row"></div>
					</div>
				</section>
				{/* lasdjfaldsfjasdfkasldfja */}

				<div style={{ backgroundColor: '#12114a' }}>
					<div
						className="auto-container"
						style={{ backgroundColor: '#12114a' }}
					>
						<div className="row">
							<div style={{ height: '100px' }}></div>

							<div
								className="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div className="wrapper">
									<div className="card" style={{ backgroundColor: '#1c86da' }}>
										<h1 style={{ background: '#1c86da' }}>
											<span
												className="enclosed"
												style={{
													backgroundColor: '#1c86da',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Experience
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
											}}
										>
											Participate in events designed to bring out the best in
											you
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div className="wrapper">
									<div className="card" style={{ backgroundColor: '#ed6286' }}>
										<h1 style={{ background: '#ed6286' }}>
											<span
												className="enclosed"
												style={{
													backgroundColor: '#ed6286',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Networking
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
												paddingTop: '0px',
											}}
										>
											Connect with and exchange ideas with participants and also
											the tech speakers
										</p>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div className="wrapper">
									<div className="card" style={{ backgroundColor: '#1c86da' }}>
										<h1 style={{ background: '#1c86da' }}>
											<span
												className="enclosed"
												style={{
													backgroundColor: '#1c86da',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Goodies
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
												paddingTop: '0px',
											}}
										>
											Each participant gets goodies! If you manage to win an
											event, you can get even better ones!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Sponsors />
				{/* <topScroll /> */}
				<Footer />
				{/* </Suspense> */}
			</div>
		</React.Fragment>
	);
};

export default withRouter(Home);
