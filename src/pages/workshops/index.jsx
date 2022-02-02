import React, { useEffect } from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import Workshop_comp from './workshop_comp';
// import '../../css/contact.css';

const Workshop = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
				<div className="preloader"></div>
				<Header active={3} />
				<section
					className="page-title"
					style={{
						backgroundImage: `url(${TitleBackground})`,
					}}
					id="page-title"
				>
					{/* <img src={TitleBackground} /> */}
					<div className="auto-container">
						<span className="float-text">Workshops</span>
						<h1>Workshops</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a
									href="/"
									// target="_blank"
									style={{ textDecoration: 'none' }}
								>
									Home
								</a>
							</li>
							<li>Workshops</li>
						</ul>
					</div>
				</section>

				<section className="news-section">
					<div className="auto-container" style={{ padding: '0 auto' }}>
						<div
							class="row"
							style={{
								padding: 'auto',
								display: 'flex-wrap',
								justifyContent: 'center',
							}}
						>
							<Workshop_comp
								imageId="1dS5sWrqmjVIIgcY_5P5YjelUn5IZBn_P"
								title="Data Science and Machine Learning using Python"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
							/>
							<Workshop_comp
								imageId="121LzHkYuBH13mq-lM6O6bxezjtMRnukD"
								title="Data Structures and Algorithms"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
							/>
							<Workshop_comp
								imageId="1ThdVu8tM_x23z5d5FIEgTlfq0CP-dSY8"
								title="Ethical Hacking and Cyber Security
"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
							/>
						</div>

						{/* <div className="row">
							<Workshop_comp
								title="Data Science and Machine Learning using Python"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
							></Workshop_comp>
						</div> */}
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Workshop;
