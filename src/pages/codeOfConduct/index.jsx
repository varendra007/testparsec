import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/sponser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import codeofconductBg from '../../images/background/codeOfConduct.jpg';
const CodeOfConduct = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${codeofconductBg})` }}
				>
					<div className="auto-container">
						<span className="float-text" id="sec-title-text">
							Code Of Conduct
						</span>
						<h1>Code of Conduct</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/" id="sec-title-text">
									Home
								</a>
							</li>
							<li id="sec-title-text">Code of Conduct</li>
						</ul>
					</div>
				</section>

				<section class="location-section-two style-three  pt-5">
            <div class="auto-container">
                <div class="text-body">
                    <ol  style={{listStylePosition: 'outside'}}>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'>
                                Harassment includes offensive comments related to gender, gender identity and
                                expression, age, sexual orientation,
                                disability, physical appearance, body size, race, ethnicity, nationality, religion or
                                political views in the comments
                                sections of the Parsec-2022 events, deliberate intimidation, audio/video recording
                                against reasonable consent during the
                                event on any of the event platforms and sustained disruption of talks or other events.
                            </p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'>
                                Participants asked to stop any harassing behavior are expected to comply immediately.
                            </p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'>
                                As this is a Technical Festival, we would like to explicitly note that the event,
                                workshops, hacks, and projects
                                conducted/created at our Technical Testival are equally subjected to the anti-harassment
                                policy.
                            </p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'>
                                Sponsors and partners are also subjected to the anti-harassment policy. Sponsor
                                representatives (including volunteers)
                                should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized
                                environment during the event and
                                in their interactions with the participants over any medium.</p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'>
                                If you are being harassed or notice that someone else is being harassed on any of the
                                event platforms , or have any
                                other concerns, please contact a member of Parsec 2022 staff through the contacts given
                                in the website.</p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'> If a
                                participant engages in harassing behavior on any of the event platforms, the Parsec 2022
                                organizers may take any
                                action they deem appropriate. This includes warning the offender or expulsion from the
                                events with no refund(if
                                applicable).</p>
                        </li><br/>
                        <li id='coc-list'>
                            <p class="text" id='coc-text'> We
                                expect participants to follow these rules at Parsec 2022 Technical festival and Parsec
                                2022-related social events.</p>
                        </li><br/>
                        
                    </ol>

                </div>
                <br/>
                <div class="text-center mb-4" style={{color: ''}}>
                    Our code of conduct is based on the <a href="https://hackcodeofconduct.org/" target="_blank">Hack
                        Code Of Conduct</a>
                </div>
            </div>
        </section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default CodeOfConduct;
