import React, { useEffect } from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import faqTitleBg from '../../images/background/faq.jpg';
import $ from 'jquery';
const FAQ = () => {
	const btns = document.querySelectorAll('.acc-btn');
	const answers = document.querySelectorAll('.content');

	const displayAns = () => {
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
					$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
					target.addClass('active-block animated fadeInUp');
					$(this).next('.acc-content').slideDown(300);
				}
			});
		}
	};

	useEffect(() => {
		displayAns();
	}, []);

	// displayAns();

	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<Header active={6} />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${faqTitleBg})` }}
				></section>

				<div className="auto-container mb-10 p-10">
					<div className="row align-items-center">
						<div className="col-12">
							<div className="breadcrumb-content col-12">
								<h2 className="mt-5">Frequently Asked Questions</h2>
							</div>

							<div className="breadcrumb-content col-12">
								<ul className="accordion-box">
									<li className="accordion block">
										<div className="acc-btn mt-5"> Who can register</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													Any student pursuing undergraduate, post graduate or
													PhD course with the curiosity to learn and drive to
													excel are welcome to participate. High school students
													are allowed to participate in the SciTech Quiz.
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block ">
										<div className="acc-btn ">
											{' '}
											What are the registration fees ?
										</div>
										<div className="acc-content ">
											<div className="content">
												<div className="text">
													<strong>
														Zero, Zilch, Nada, ಶೂನ್ಯ, సున్నా, பூஜ்யம், പൂജ്യo.
													</strong>{' '}
													<br /> There is no registration fee for registered
													participants. All that is required is your zeal,
													enthusiasm and your avid presence.
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">What is the Code of Conduct?</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													{' '}
													We value the importance of safety and inclusion of
													all. All attendees must adhere to{' '}
													<a href="/codeofconduct" >
														Our Code of Conduct.
													</a>
													Additionally, all DevHack Participants are required to
													strictly adhere to the{' '}
													<a
														href="https://devfolio.co/code-of-conduct"
														target="_blank"
													>
														DevFolio Hack Code of Conduct
													</a>
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">
											How many members can register in a team?
										</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													Please refer to the following points.
												</div>
												<ol>
													<li>DevHack 3.0: Group of 4</li>
													<li>VeniVidiVici 2.0: Group of 2</li>
													<li>AlgoStrike 2.0: Individual</li>
													<li>Ascensus: Group of 3</li>
													<li>Designõ: Group of 2</li>
													<li>Quiz: Group of 2</li>
												</ol>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">What are the prizes?</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													Be ready for the exciting prizes and schwags for the
													winners as well as participants.
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">Are all the events on-site?</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													<strong>
														ALL EVENTS WILL BE ORGANIZED IN VIRTUAL MODE.
													</strong>
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">
											Can I register as an individual?
										</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													DevHack 3.0 participants can, although, you'll have to
													form teams on-site before the event starts. The other
													events require you to have already formed a team
													before applying.
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">
											Do I get a certificate for participating?
										</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													Yes, everyone who gets selected and attends the event
													will receive a participation certificate.
												</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className="acc-btn">Didn't find your question?</div>
										<div className="acc-content">
											<div className="content">
												<div className="text">
													{' '}
													If you have any other queries,{' '}
													<a href="/contact" >
														reach out to us
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default FAQ;
