import React from 'react';
import logoAbout from '../../../images/logos/logo-about_comp.jpg';

const AboutUs = () => {
  return (
		<section className="home-about-sec" style={{ margin: '60px' }}>
			<div className=" sec-title" style={{ backgroundColor: 'transparent' }}>
				<h1>About us</h1>
			</div>
			<div
				className="auto-container home-abt-sec-auto"
				style={{ paddingBottom: '0px' }}
			>
				<div>
					<img src={logoAbout} />

					<div className="text about-us-text">
						PARSEC 2022, the second edition of the Technology Festival of IIT
						Dharwad, aims to bring together the unparalleled experience of
						magnificent technologists and the innate curiosity of passionate
						students by providing a common platform to showcase their expertise
						and hone their skills. While there is no doubt that technology has
						taken magnanimous leaps in the past few decades, this fest
						ambitiously aspires to see it progress in parsecs in the near
						future.{' '}
					</div>
				</div>

				<div
					className="home-btn-container"
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<div className=" home-btn-box" style={{}}>
						<a
							href="/aboutus"
							// style={{
							// 	backgroundColor: '#f20587',
							// 	color: '#ffff',
							// 	position: 'relative',
							// 	width: 'max-content',
							// 	padding: '15px 35px',
							// 	fontSize: '18px',
							// 	fontWeight: 400,
							// 	borderRadius: '8px',
							// }}
							className="theme-btn btn-style-one"
						>
							View More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
