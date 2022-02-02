import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import EventBackground from '../../components/eventsBackground';
import LazyLoad from 'react-lazyload';
import Routes from '../../routes';
import Header from '../../components/Header';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';
import './styles.css';
import Footer from '../../components/Footer';
import aboutTitleBg from '../../images/background/about-us.png';
import ossImg from '../../images/resource/about_us.jpeg';
import parsecImg from '../../images/parsec/PARSEC.JPG';
import chief1 from '../../images/speakers/chief1.jpeg';
import chief2 from '../../images/speakers/chief2.jpeg';
import devhackImg from '../../images/parsec/devhack.JPG';
import workshop2 from '../../images/parsec/workshop2.jpg';
import workshop1 from '../../images/parsec/workshop1.jpg';
import quizImg from '../../images/parsec/quiz.JPG';
import synergia from '../../images/parsec/synergia.JPG';
import $ from 'jquery';
const About = () => {
	useEffect(() => {
		//Custom Seclect Box
		if ($('.custom-select-box').length) {
			$('.custom-select-box')
				.selectmenu()
				.selectmenu('menuWidget')
				.addClass('overflow');
		}

		// if ($('.ts-image-popup').length) {
		// 	$('.ts-image-popup').magnificPopup({
		// 		type: 'inline',
		// 		closeOnContentClick: false,
		// 		midClick: true,
		// 		callbacks: {
		// 			beforeOpen: function () {
		// 				this.st.mainClass = this.st.el.attr('data-effect');
		// 			},
		// 		},
		// 		zoom: {
		// 			enabled: true,
		// 			duration: 500, // don't foget to change the duration also in CSS
		// 		},
		// 		mainClass: 'mfp-fade',
		// 	});
		// }

		// LightBox / Fancybox
		if ($('.lightbox-image').length) {
			$('.lightbox-image').fancybox({
				openEffect: 'fade',
				closeEffect: 'fade',
				helpers: {
					media: {},
				},
			});
		}
	}, []);
	const popup = () => {
		if ($('.ts-image-popup').length) {
			$('.ts-image-popup').magnificPopup({
				type: 'inline',
				closeOnContentClick: false,
				midClick: true,
				callbacks: {
					beforeOpen: function () {
						this.st.mainClass = this.st.el.attr('data-effect');
					},
				},
				zoom: {
					enabled: true,
					duration: 500, // don't foget to change the duration also in CSS
				},
				mainClass: 'mfp-fade',
			});
		}
	};
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header active={10} />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${aboutTitleBg})` }}
				>
					<div className="auto-container">
						<span className="float-text" style={{ textAlign: 'center' }}>
							About Us
						</span>
						<h1>About Us</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/">Home </a>
							</li>
							<li>About</li>
						</ul>
					</div>
				</section>
				<section className="about-event">
					<div className="anim-icons">
						<span className="icon icon-circle-13"></span>
						<span className="icon icon-circle-14"></span>
						<span className="icon icon-circle-14"></span>
						<span className="icon icon-triangle-1"></span>
						<span className="icon icon-triangle-2"></span>
					</div>
					<div className="auto-container">
						<div className="row">
							<div className="content-column col-lg-6 col-md-12 col-sm-12">
								<div className="inner-column">
									<div className="sec-title">
										<h2>
											Join us at the biggest event IIT Dharwad's ever had,
											hosted by the OSS
										</h2>
									</div>
									<div className="info-box">
										<h5>What is OSS?</h5>
										<div className="text">
											OSS (Open Student Society), as the name suggests, is an
											open source coding society established in IIT Dharwad.
											<br></br>
											<span className="text-muted">
												Want to know more about OSS? Click{' '}
												<a target="_new" href="https://oss2019.github.io/">
													here
												</a>
											</span>
											.
										</div>
									</div>

									<div className="info-box">
										<h5>What change OSS wants to bring about?</h5>
										<div className="text">
											We want to make coding accessible to everyone, so that
											they learn seamlessly and hopefully contribute their best
											(even if it's just 2 lines of code) to open source
											projects. This way, both the individual and open source
											projects benefit. <br></br>
											<span className="text-muted">
												Check out our first ever open source event, Summer of
												Innovation, which took place in Summer of '19 and
												brought about some exotic contributions to a wide range
												of projects{' '}
												<a
													target="_new"
													href="https://oss2019.github.io/SoI.html"
												>
													here
												</a>
											</span>
											.
										</div>
									</div>

									<div className="info-box">
										<h5>Hyped much? Want to join in?</h5>
										<div className="text">
											You can drop us an email at{' '}
											<a href="mailto:oss@iitdh.ac.in">oss@iitdh.ac.in</a> and
											we'll add you to the official group.
										</div>
									</div>
								</div>
							</div>

							<div className="image-column col-lg-6 col-md-12 col-sm-12">
								<div className="image-box wow fadeInRight">
									<figure className="image-box">
										<img src={ossImg} alt="" />
									</figure>
									<span className="text-muted">
										A still from last year's DevHack, First Edition
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="container-fluid style-two">
					<span className="float-text" style={{ textAlign: 'center' }}>
						PARSEC 2020
					</span>
					<div className="auto-container">
						<br />
						<br />
						<br />
						<br />
						<br />
						<div className="sec-title">
							<h2 style={{ textAlign: 'center' }}>PARSEC 2020</h2>
						</div>

						<div className="info-box" style={{ marginTop: '-40px' }}>
							<div
								className="text "
								style={{
									fontFamily: `font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 28px`,
								}}
							>
								<strong>PARSEC 2020</strong> was the biggest and most successful
								technical event of IIT Dharwad at its time. With several
								brainstorming and innovative events, speaker sessions,
								networking events and workshops aimed at nurturing the technical
								community, the 3 day long event kicked off on 14th of Feb 2020.{' '}
								<strong style={{ fontWeight: '500' }}>
									The event saw more than 2 thousand on campus participants from
									across the nation with many more registrations online.
								</strong>{' '}
								The community hopes to keep up the technical spirit in its
								subsequent editions as well.
							</div>
						</div>
						<br />
						<br />
						<figure className="image" style={{ margin: '0 10px' }}>
							<img src={parsecImg} alt="" />
							<span>Parsec 2020 Co-ordinators</span>
						</figure>
					</div>
				</section>

				<section className="speakers-section-two style-two">
					<span className="float-text">Chief Guests</span>
					<div className="auto-container">
						<div className="sec-title">
							<h2>Parsec 2020 Chief Guests</h2>
						</div>

						<div className="row">
							<div
								className="speaker-block-two col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
							>
								<div className="image-box">
									<figure className="image">
										<img src={chief1} alt=""></img>
									</figure>
									{/* images */}

									<div className="overlay-box" style={{ borderRadius: '15px' }}>
										<a
											href="#popup_02"
											className="link view-speaker ts-image-popup"
											data-effect="mfp-zoom-in"
										>
											{/* <span className="flaticon-add-1" ></span> */}
										</a>
										<div className="info">
											<h5 className="name">Dr. Kavi Mahesh</h5>
											<span className="designation">
												Director of the Indian Institute of Information
												Technology, Dharwad
											</span>
										</div>
									</div>
								</div>
								<div
									className="sec-title"
									style={{ paddingTop: '20px', marginBottom: '10px' }}
								>
									<center>
										<h2 style={{ color: '#003763', fontSize: '28px' }}>
											Dr. Kavi Mahesh
										</h2>
									</center>
								</div>
								<div
									className="sec-title"
									style={{ paddingTop: '10px', color: '#003763' }}
								>
									<center>
										<h2 style={{ fontSize: '18px' }}>Director IIIT Dharwad</h2>
									</center>
								</div>
								<div
									id="popup_02"
									className="container ts-speaker-popup mfp-hide"
								>
									<div className="row">
										<div className="col-lg-6">
											<div className="ts-speaker-popup-img">
												<img src={chief1} alt=""></img>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="ts-speaker-popup-content">
												<h3 className="ts-title">Dr. Kavi Mahesh</h3>
												<span className="speakder-designation">
													Director of the Indian Institute of Information
													Technology, Dharwad
												</span>
												<p>
													Dr. Kavi Mahesh is the Director of the Indian
													Institute of Information Technology, Dharwad.
													Previously, he was the Dean of Research at PES
													University, Director of the World-Bank funded Research
													Centre for Knowledge Analytics and Ontological
													Engineering – KAnOE and a Professor of Computer
													Science. His areas of interest are knowledge
													management, analytics, epistemology, ontology,
													classification studies, text processing and
													unstructured data management. He has three US patents
													and has published two books, 16 book chapters and 80
													papers which have received over 1300 citations with a
													h-index of 20, i10-index of 28 and a g-index of 35.
													Notable among these are the textbook Theory of
													Computation: A Problem- Solving Approach (Wiley India,
													2012) and Ten Steps to Maturity in Knowledge
													Management (Elsevier Pub. UK, 2006). He was earlier
													with Oracle Corporation, USA and New Mexico State
													University and has consulted in the area of Knowledge
													Management with Infosys, Hewlett Packard, United
													Nations and EasyLib.com. He holds an M. Tech. in
													Computer Science from the Indian Institute of
													Technology, Bombay (1989) and an MS (1991) and a PhD
													(1995) in Computer Science from Georgia Institute of
													Technology, USA.
												</p>

												<div className="ts-speakers-social">
													<a href="https://www.linkedin.com/in/kavimahesh/?originalSubdomain=in">
														<i className="fab fa-linkedin fa-2x"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-2"></div>
							<div className="speaker-block-two col-lg-5 col-md-6 col-sm-12 wow fadeInUp">
								<div className="image-box">
									<figure className="image">
										<img src={chief2} alt=""></img>
									</figure>
									{/* images */}

									<div className="overlay-box" style={{ borderRadius: '15px' }}>
										<a
											href="#popup_01"
											className="link view-speaker ts-image-popup"
											data-effect="mfp-zoom-in"
										>
											{/* <span className="flaticon-add-1"></span> */}
										</a>
										<div className="info">
											<h5 className="name">Mr. Dattatraya Kulkarni</h5>
											<span className="designation">
												Consumer Chief Technologist, McAfee Sr. Principal
												Engineer, Sr. Director of Technology Pathfinding and
												Research
											</span>
										</div>
									</div>
								</div>

								<div
									className="sec-title"
									style={{ paddingTop: '20px', marginBottom: '10px' }}
								>
									<center>
										<h2 style={{ color: '#003763', fontSize: '28px' }}>
											Mr. Dattatraya Kulkarni
										</h2>
									</center>
								</div>
								<div className="sec-title" style={{ paddingTop: '10px' }}>
									<center>
										<h2 style={{ fontSize: '18px', color: '#003763' }}>
											Consumer Chief Technologist, McAfee
										</h2>
									</center>
								</div>

								<div
									id="popup_01"
									className="container ts-speaker-popup mfp-hide"
								>
									<div className="row">
										<div className="col-lg-6">
											<div className="ts-speaker-popup-img">
												<img src={chief2} alt=""></img>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="ts-speaker-popup-content">
												<h3 className="ts-title">Mr. Dattatraya Kulkarni</h3>
												<span className="speakder-designation">
													Consumer Chief Technologist, McAfee Sr. Principal
													Engineer, Sr. Director of Technology Pathfinding and
													Research
												</span>
												<p>
													Mr. Dattatraya Kulkarni “Kulki” is currently Consumer
													Chief Technologist, McAfee Sr. Principal Engineer, Sr.
													Director of Technology Pathfinding and Research. He
													drives innovation for consumer and mobile business -
													sort of in-house entrepreneur and thought leader. He
													is also the India site head for building leadership
													and technical pipeline at McAfee. Mr. Kulkarni is a
													seasoned software strategist, technologist, passionate
													team builder, and energetic software engineering
													manager with 20+ years of progressive experience in
													creating and delivering software products across Web,
													enterprise and system software. He possesses a unique
													combination of acumen in business, strategy,
													creativity, and technology. Technical innovations and
													flawless execution won him two highest corporate
													recognitions at Intel (IAA and Software Quality). He
													had also granted/filed a dozen patents. He has several
													years of experience making research and technology
													presentations senior executive management.
												</p>

												<div className="ts-speakers-social">
													<a href="https://www.linkedin.com/in/dattatraya-kulkarni-kulki">
														<i className="fab fa-linkedin fa-2x"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="auto-container">
						<div className="sec-title">
							<h2>Technical Events</h2>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<figure className="image">
									<img
										src={devhackImg}
										style={{ borderRadius: '15px' }}
										alt=""
									/>
									Devhack Event
								</figure>
								{/* images */}
							</div>
							<div className="col-lg-6">
								<br></br>
								<div className="sec-title">
									<h4>Devhack 2.0</h4>
								</div>
								<div
									className="text"
									style={{
										paddingRight: '15px',
										lineHeight: '28px',
										fontSize: '15px',
									}}
								>
									With more than 1200 registrations, about 150 shortlisted teams
									took part in 36 hrs of ideating, brainstorming and engineering
									innovative products which could solve real life issues. With
									Rs. 2.5 Lakh prizes, the event also included gala lunches,
									networking events and a ton of goodies and merchandise for the
									participating team members.
								</div>
							</div>
						</div>
						<br></br>
						<br></br>
						<br></br>
						<br></br>

						<div className="row">
							<div className="col-lg-6">
								<br></br>
								<div className="sec-title">
									<h4>Algo Strike</h4>
								</div>
								<div className="text" style={{ paddingLeft: '15px' }}>
									With 38 teams of 3 each, the event kicked off with a bunch of
									goodies and swags for its participants. Participants had 5
									long hours to work on an ingenious solution for the problem
									statement released during the course of the event.
								</div>
							</div>

							<div className="col-lg-6" style={{ textAlign: 'end' }}>
								<figure className="image">
									<img
										src={workshop2}
										style={{ borderRadius: '15px' }}
										alt=""
									/>
									Competitive Coding
								</figure>
								{/* images */}
							</div>
						</div>
						<br></br>
						<br></br>
						<br></br>
						<br></br>

						<div className="row">
							<div className="col-lg-6">
								<figure className="image">
									<img src={quizImg} style={{ borderRadius: '15px' }} alt="" />
									VeniVidiVici Event
								</figure>
								{/* images */}
							</div>
							<div className="col-lg-6">
								<br></br>
								<div className="sec-title">
									<h4>VeniVidiVici</h4>
								</div>
								<div className="text" style={{ paddingRight: '15px' }}>
									Held online and in teams of 3, the event also saw participants
									from countries other than India. Prizes worth Rs. 50 thousand
									were given in the event.
								</div>
							</div>
						</div>
						<br></br>
						<br></br>
						<br></br>
						<br></br>

						<div className="row">
							<div className="col-lg-6">
								<br></br>
								<div className="sec-title">
									<h4>Synergia</h4>
								</div>
								<div className="text" style={{ paddingLeft: '15px' }}>
									A robotics event that involved brainstorming to solve a
									specific scenario provided. A product was to be developed
									while keeping several factors in mind including the budget.
								</div>
							</div>

							<div className="col-lg-6" style={{ textAlign: 'end' }}>
								<figure className="image ">
									<img src={synergia} style={{ borderRadius: '15px' }} alt="" />
									Synergia Event
								</figure>
								{/* images */}
							</div>
						</div>
						<br></br>
						<br></br>
						<br></br>

						<br></br>

						<div className="row">
							<div className="col-lg-6">
								<figure className="image">
									<img
										src={workshop1}
										style={{ borderRadius: '15px' }}
										alt=""
									/>
									Ethical Hacking Workshop
								</figure>
								{/* images */}
							</div>
							<div className="col-lg-6">
								<br></br>
								<div className="sec-title">
									<h4>Workshops</h4>
								</div>
								<div
									className="text"
									style={{
										paddingRight: '15px',
										lineHeight: '28px',
										fontSize: '15px',
									}}
								>
									2 workshops were conducted namely - Machine learning and
									Artificial Intelligence and Ethical Hacking. The event saw
									more than 150 on-site attendees for each of the workshops and
									helped spread technical knowledge in domains which are in high
									demand in the industry across the technical community.
								</div>
							</div>
						</div>
					</div>
				</section>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default About;
