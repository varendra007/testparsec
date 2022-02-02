import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import { useMediaQuery } from 'react-responsive';
import {
	Navbar,
	Container,
	Nav,
	Button,
	NavLink,
	Dropdown,
} from 'react-bootstrap';

// import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import parsecLogo from '../../images/logos/logo-nav.png';
import './styles.css';
import { nodeName } from 'jquery';

const Header = ({ active }) => {
	const isTabletorMobile = useMediaQuery({
		query: '(max-width: 1026px)',
	});

	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	useEffect(() => {
		(function ($) {
			'use strict';

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

			//Submenu Dropdown Toggle
			if ($('.main-header li.dropdown ul').length) {
				$('.main-header li.dropdown').append(
					'<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
				);

				//Dropdown Button
				$('.main-header li.dropdown .dropdown-btn').on('click', function () {
					$(this).prev('ul').slideToggle(500);
				});

				//Megamenu Toggle
				$('.main-header .main-menu li.dropdown .dropdown-btn').on(
					'click',
					function () {
						$(this).prev('.mega-menu').slideToggle(500);
					}
				);

				//Disable dropdown parent link
				$(
					'.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a'
				).on('click', function (e) {
					e.preventDefault();
				});
			}

			//Side Content Toggle
			if ($('.main-header .outer-box .nav-btn').length) {
				//Show Form
				$('.main-header .outer-box .nav-btn').on('click', function (e) {
					e.preventDefault();
					$('body').addClass('side-content-visible');
				});
				//Hide Form
				$('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on(
					'click',
					function (e) {
						e.preventDefault();
						$('body').removeClass('side-content-visible');
					}
				);
				//Dropdown Menu
				$('.fullscreen-menu .navigation li.dropdown > a').on(
					'click',
					function () {
						$(this).next('ul').slideToggle(500);
					}
				);
			}

			//Hidden Sidebar
			if ($('.hidden-bar, .prod-tabs .tab-buttons').length) {
				$('.hidden-bar, .prod-tabs .tab-buttons').mCustomScrollbar({
					theme: 'dark',
				});
			}

			//Banner Carousel
			if ($('.banner-carousel').length) {
				$('.banner-carousel').owlCarousel({
					animateOut: 'slideOutDown',
					animateIn: 'fadeInUp',
					loop: true,
					margin: 0,
					nav: true,
					smartSpeed: 700,
					autoHeight: true,
					mouseDrag: false,
					autoplay: true,
					autoplayTimeout: 10000,
					navText: [
						'<span class="fa fa-angle-left"></span>',
						'<span class="fa fa-angle-right"></span>',
					],
					responsive: {
						0: {
							items: 1,
						},
						600: {
							items: 1,
						},
						1024: {
							items: 1,
						},
					},
				});
			}

			//
			// Testimonial Carousel
			if ($('.testimonial-carousel').length) {
				$('.testimonial-carousel').owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					smartSpeed: 500,
					autoplay: 5000,
					navText: [
						'<span class="arrow-left"></span>',
						'<span class="arrow-right"></span>',
					],
					responsive: {
						0: {
							items: 1,
						},
						600: {
							items: 1,
						},
						800: {
							items: 1,
						},
						1024: {
							items: 1,
						},
					},
				});
			}

			//Fact Counter + Text Count
			if ($('.count-box').length) {
				$('.count-box').appear(
					function () {
						var $t = $(this),
							n = $t.find('.count-text').attr('data-stop'),
							r = parseInt($t.find('.count-text').attr('data-speed'), 10);

						if (!$t.hasClass('counted')) {
							$t.addClass('counted');
							$({
								countNum: $t.find('.count-text').text(),
							}).animate(
								{
									countNum: n,
								},
								{
									duration: r,
									easing: 'linear',
									step: function () {
										$t.find('.count-text').text(Math.floor(this.countNum));
									},
									complete: function () {
										$t.find('.count-text').text(this.countNum);
									},
								}
							);
						}
					},
					{ accY: 0 }
				);
			}

			//Tabs Box
			if ($('.tabs-box').length) {
				$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
					e.preventDefault();
					var target = $($(this).attr('data-tab'));

					if ($(target).is(':visible')) {
						return false;
					} else {
						target
							.parents('.tabs-box')
							.find('.tab-buttons')
							.find('.tab-btn')
							.removeClass('active-btn');
						$(this).addClass('active-btn');
						target
							.parents('.tabs-box')
							.find('.tabs-content')
							.find('.tab')
							.fadeOut(0);
						target
							.parents('.tabs-box')
							.find('.tabs-content')
							.find('.tab')
							.removeClass('active-tab animated fadeIn');
						$(target).fadeIn(300);
						$(target).addClass('active-tab animated fadeIn');
					}
				});
			}

			//Accordion Box
			if ($('.accordion-box').length) {
				$('.accordion-box').on('click', '.acc-btn', function () {
					var outerBox = $(this).parents('.accordion-box');
					var target = $(this).parents('.accordion');

					if ($(this).hasClass('active') !== true) {
						$(outerBox).find('.accordion .acc-btn').removeClass('active ');
					}

					if ($(this).next('.acc-content').is(':visible')) {
						return false;
					} else {
						$(this).addClass('active');
						$(outerBox)
							.children('.accordion')
							.removeClass('active-block animated fadeInUp');
						$(outerBox)
							.find('.accordion')
							.children('.acc-content')
							.slideUp(300);
						target.addClass('active-block animated fadeInUp');
						$(this).next('.acc-content').slideDown(300);
					}
				});
			}

			//Custom Seclect Box
			// if ($('.custom-select-box').length) {
			// 	$('.custom-select-box')
			// 		.selectmenu()
			// 		.selectmenu('menuWidget')
			// 		.addClass('overflow');
			// }

			// if ($('.timer').length) {
			// 	$(function () {
			// 		$('[data-countdown]').each(function () {
			// 			var $this = $(this),
			// 				finalDate = $(this).data('countdown');
			// 			$this.countdown(finalDate, function (event) {
			// 				$this.html(event.strftime('%D days %H:%M:%S'));
			// 			});
			// 		});
			// 	});

			// 	$('.cs-countdown')
			// 		.countdown('')
			// 		.on('update.countdown', function (event) {
			// 			var $this = $(this).html(
			// 				event.strftime(
			// 					'<div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>'
			// 				)
			// 			);
			// 		});
			// }

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

			//LightBox / Fancybox
			if ($('.lightbox-image').length) {
				$('.lightbox-image').fancybox({
					openEffect: 'fade',
					closeEffect: 'fade',
					helpers: {
						media: {},
					},
				});
			}

			//Price Range Slider
			if ($('.price-range-slider').length) {
				$('.price-range-slider').slider({
					range: true,
					min: 0,
					max: 90,
					values: [8, 85],
					slide: function (event, ui) {
						$('input.property-amount').val(ui.values[0] + ' - ' + ui.values[1]);
					},
				});

				$('input.property-amount').val(
					$('.price-range-slider').slider('values', 0) +
						' - $' +
						$('.price-range-slider').slider('values', 1)
				);
			}

			// Scroll to a Specific Div
			if ($('.scroll-to-target').length) {
				$('.scroll-to-target').on('click', function () {
					var target = $(this).attr('data-target');
					// animate
					$('html, body').animate(
						{
							scrollTop: $(target).offset().top,
						},
						1500
					);
				});
			}

			// // Elements Animation
			// if ($('.wow').length) {
			// 	var wow = new WOW({
			// 		boxClass: 'wow', // animated element css class (default is wow)
			// 		animateClass: 'animated', // animation css class (default is animated)
			// 		offset: 0, // distance to the element when triggering the animation (default is 0)
			// 		mobile: true, // trigger animations on mobile devices (default is true)
			// 		live: true, // act on asynchronously loaded content (default is true)
			// 	});
			// 	wow.init();
			// }

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

	return (
		<div
			style={{
				zIndex: 100,
				position: 'fixed',
				backgroundColor: '#1f003b',
				width: '100vw',
			}}
		>
			{isTabletorMobile && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					{/* <Button className="gradient-text no-border link" onClick={toggleShow}>
					</Button> */}
					<div
						className="gradient-text no-border link"
						onClick={toggleShow}
						style={{ margin: '5px 20px' }}
					>
						<i className="fas fa-bars fa-2x" />
					</div>
					<div className="logo" style={{ margin: '5px 10px' }}>
						<a href="/">
							<img src={parsecLogo} className="img-fluid" id="logo" />
						</a>
					</div>
				</div>
			)}
			{!isTabletorMobile && (
				<>
					<header className="main-header header-style-two">
						<div className="header-upper">
							<div className="outer-container">
								<div className="clearfix">
									<div className="pull-left logo-box">
										<div className="logo">
											<a href="/">
												<img src={parsecLogo} />
											</a>
										</div>
									</div>

									<div className="nav-outer clearfix">
										<nav className="main-menu navbar-expand-md">
											<div className="navbar-header">
												<button
													className="navbar-toggler"
													type="button"
													data-target="collapse"
													data-target="#navbarSupportedContent"
													aria-controls="navbarSupportedContent"
													aria-label="Toggle navigation"
												>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
												</button>
											</div>

											<div
												className="navbar-collapse collapse scroll-nav clearfix"
												id="navbarSupportedContent"
											>
												<ul
													class="navigation clearfix"
													style={{ display: 'flex', alignItems: 'center' }}
												>
													<li className={`${active === 1 ? 'current' : ''}`}>
														<a href="/" target="">
															Home
														</a>
													</li>
													<li className={`${active === 2 ? 'current' : ''}`}>
														<a href="/events">Events</a>
														{/* <Dropdown>
															<Dropdown.Toggle
																className="dropdown"
																style={{
																	background: 'none',
																	color: 'white',
																	border: 'none',
																	boxShadow: 'none',
																}}
															>
																Events
															</Dropdown.Toggle>
															<Dropdown.Menu
																style={{
																	backgroundColor: '#12114a',
																	boxShadow: '1px 1px 1px 1px #12114a',
																	color: 'white',
																}}
															>
																<Dropdown.Item
																	href="/hackathon"
																	style={{ color: 'white' }}
																>
																	DevHack 3.0
																</Dropdown.Item>
																<Dropdown.Item
																	href="/cp"
																	style={{ color: 'white' }}
																>
																	Algostrike 2.0
																</Dropdown.Item>
																<Dropdown.Item
																	href="/ctf"
																	style={{ color: 'white' }}
																>
																	VeniVidiVici 2.0
																</Dropdown.Item>

																<Dropdown.Item
																	href="/designo"
																	style={{ color: 'white' }}
																>
																	Designõ
																</Dropdown.Item>
																<Dropdown.Item
																	href="/ascensus"
																	style={{ color: 'white' }}
																>
																	Ascensus
																</Dropdown.Item>
																<Dropdown.Item
																	href="/quiz"
																	style={{ color: 'white' }}
																>
																	Quiz
																</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown> */}
													</li>
													{/* <li className={`${active === 3 ? 'current' : ''}`}>
														<a href="/workshops">Workshops</a>
													</li> */}
													{/* <li className={`${active === 10 ? 'current' : ''}`}>
														<a href="/aboutus">About</a>
													</li> */}
													<li className={`${active === 3 ? 'current' : ''}`}>
														<a href="/workshops">Workshops</a>
													</li>
													{/* <li className={`${active === 4 ? 'current' : ''}`}>
														<a href="/schedule" target="">
															Schedule
														</a>
													</li>
													<li className={`${active === 5 ? 'current' : ''}`}>
														<a href="/speakers" target="">
															Speakers
														</a>
													</li> */}
													<li className={`${active === 9 ? 'current' : ''}`}>
														<a href="/gallery">Gallery</a>
													</li>
													<li className={`${active === 6 ? 'current' : ''}`}>
														<a href="/faq" target="">
															FAQs
														</a>
													</li>
													<li className={`${active === 7 ? 'current' : ''}`}>
														<a href="/team" target="">
															Team
														</a>
													</li>
													{/* <li className={`${active === 8 ? 'current' : ''}`}>
														<a href="/contact" target="">
															Contact
														</a>
													</li> */}
												</ul>
											</div>
										</nav>
									</div>
									<div className="outer-box">
										<div className="nav-toggler">
											<button className="nav-btn">
												<span className="icon flaticon-arrows"></span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					{/* ! End main Header */}

					<div className="form-back-drop"></div>

					{/* HIddern bar */}
					<section
						className="hidden-bar"
						style={{ backgroundColor: '#12114a' }}
					>
						<div className="inner-box" style={{ backgroundColor: '#12114a' }}>
							<div className="cross-icon">
								<span className="fa fa-times"></span>
							</div>
							<div className="title">
								<h2>Stuck? Feel free to contact.</h2>
							</div>

							{/* Appointment form */}

							{/* <div className="appointment-form">
								<form
									method="post"
									action="https://formspree.io/oss@iitdh.ac.in"
								>
									<div className="form-group">
										<input
											type="text"
											name="text"
											value=""
											placeholder="Name"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											name="email"
											value=""
											placeholder="Email Address"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="phone"
											value=""
											placeholder="Mobile no."
											required
										/>
									</div>
									<div className="form-group">
										<textarea placeholder="Message" name="message"></textarea>
									</div>
									<div className="form-group">
										<button type="submit" className="theme-btn btn-style-one">
											Submit now
										</button>
									</div>
								</form>
							</div> */}
							<div className="contact-info-box">
								<ul className="info-list">
									<br />
									<li>outreach.parsec@iitdh.ac.in</li>
									<br />
									<li>+91 7892128329</li>
								</ul>
								<ul className="social-list clearfix">
									<br />
									<br />
									<li>
										<a
											href="https://www.facebook.com/parsec.iitdh"
											target="_blank"
										>
											Facebook
										</a>
									</li>
									<li>
										<a href="https://twitter.com/parsec_iitdh" target="_blank">
											Twitter
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</>
			)}
			<Sidebar show={show} handleClose={toggleShow} active={active} />
		</div>
	);
};

export default Header;
