import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/sponser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import sponserTitleBg from '../../images/background/sponsor.jpg';
import HomeSponsors from '../home/sponsors/index';
const Sponsers = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${sponserTitleBg})` }}
				>
					<div class="auto-container">
						<span class="float-text" id="sec-title-text">
							Sponsors
						</span>
						<h1>Sponsors</h1>
						<ul class="bread-crumb clearfix">
							<li>
								<a href="/" id="sec-title-text">
									Home
								</a>
							</li>
							<li id="sec-title-text">Sponsors</li>
						</ul>
					</div>
				</section>
				<HomeSponsors />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Sponsers;
