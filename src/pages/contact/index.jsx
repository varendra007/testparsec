import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import EventBackground from '../../components/eventsBackground';
import LazyLoad from 'react-lazyload';
import Routes from '../../routes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import contactTitleImage from '../../images/background/contact.jpg';
import vector1 from '../../images/resource/vactor-1.png';
import vector2 from '../../images/resource/vactor-2.png';
import vector3 from '../../images/resource/vactor-3.png';
import vector4 from '../../images/resource/vactor-4.jpg';
import icon4 from '../../images/resource/icon4.png'
import icon3 from '../../images/resource/icon3.png'
import icon2 from '../../images/resource/icon2.png'
import icon1 from '../../images/resource/icon1.png'
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import './styles.css';

const ContactPage = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header active={8} />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${contactTitleImage})` }}
				>
					<div className="auto-container">
						<span className="float-text">Contact</span>
						<h1>Contact Us</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/" >
									Home{' '}
								</a>
							</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</section>

				<section className="location-section-two style-three">
					<div className="auto-container">
						<div className="row">
							<div class="info-block col-lg-3 col-md-6 col-sm-12 wow slideInLeft">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image">
											<img src={vector1} alt="" />
										</figure>
									</div>
									<div className="info-box">
										<h5>Event Location</h5>
										<div className="text pb-1">
											IIT Dharwad Gymkhana, Bhoopali, WALMI Campus, Pb road,
											near High Court, Karnataka 580011
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>
							{/*  */}
							<div className="info-block col-lg-3 col-md-6 col-sm-12 wow slideInDown">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image">
											<img src={vector2} alt="" />
										</figure>
									</div>
									<div className="info-box">
										<h5>Nearest Railway Station</h5>
										<div className="text">
											Dharwad Railway Station(DWR), Malmaddi, Dharwad, Karnataka
											580001
											<br />
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>
							{/*  */}

							<div class="info-block col-lg-3 col-md-6 col-sm-12 wow slideInUp">
								<div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<img src={vector4} alt="" />
										</figure>
									</div>
									<div class="info-box">
										<h5>Nearest Bus Stop</h5>
										<div class="text pb-2">
											Central Bus Stand (CBT), Azad Park Rd, Nehru Market,
											Hosayellapur, Dharwad, Karnataka 580001
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>

							{/*  */}

							<div class="info-block col-lg-3 col-md-6 col-sm-12 wow slideInRight">
								<div class="inner-box">
									<div class="image-box">
										<figure class="image">
											<img src={vector3} alt="" />
										</figure>
									</div>
									<div class="info-box">
										<h5>Nearest Airport</h5>
										<div class="text pb-1">
											Hubli Airport(HBX), Gokul Rd, Gandhi Nagar,
											Hubali-Dharwad, Karnataka 580030
											<br />
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<br />
					<center>
						<div className="btn-box">
							<a href="/travel" className="theme-btn btn-style-one" style={{textDecoration: 'none'}}>
								More Information
							</a>
						</div>
					</center>
					<br />

					<div className="map-area">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3595889940416!2d74.92382481480058!3d15.518842189223058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3374630048df%3A0xce8a50f437a61c46!2sIndian%20Institute%20Of%20Technology%20Dh%C4%81rw%C4%81d!5e0!3m2!1sen!2sin!4v1575373331071!5m2!1sen!2sin"
							width="800"
							height="600"
							frameborder="0"
							style={{border: '0'}}
							allowfullscreen=""
						></iframe>
          </div>
          

          <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="contact--info-area bg-boxshadow">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="single-contact--info text-center">
                                    <div className="contact--info-icon">
                                        <img src={icon1} alt=""/>
                                    </div>
                                    <h5>IIT Dharwad Gymkhana, IIT Dharwad, Walmi Campus, Belur, Dharwad, Karnataka PIN-580011</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="single-contact--info text-center">
                                    <div className="contact--info-icon">
                                        <img src={icon2} alt=""/>
                                    </div>
                                    <h5>+91 7892128329 (Atul Singh)</h5>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="single-contact--info text-center">
                                    <div className="contact--info-icon">
                                        <img src={icon3} alt=""/>
                                    </div>
                                    <a href="mailto:outreach.parsec@iitdh.ac.in"><h5>outreach.parsec@iitdh.ac.in</h5></a>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="single-contact--info text-center">
                                    <div className="contact--info-icon">
                                        <img src={icon4} alt=""/>
                                    </div>
                                    <a href="https://parsec.iitdh.ac.in" target="_blank"><h5>https://parsec.iitdh.ac.in</h5></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
				</section>
				<Footer />
			</div>
			{/* <EventBackground /> */}
		</React.Fragment>
	);
};

export default ContactPage;
