import React from 'react';
import './styles.css';
import '../../../css/style.css';
import '../../../css/bootstrap.css';
import '../../../css/responsive.css';

const Timeline = () => {
	return (
		<React.Fragment>
			<div className="tab inner-column active-tab" id="timeline">
				<h2
					style={{
						fontFamily: `'Roboto', sans-serif`,
						fontWeight: `bold`,
					}}
				>
					TIMELINE
				</h2>
				<hr />
				<hr />
				<div className="content-box">
					<div className="row">
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span
										className="badge badge-pill bg-light border"
										// style={{ borderRadius: '100%', width: '10%', height: '10%' }}
									>
										{' '}
									</span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" shadow">
									<div
										className="card-body"
										style={{
											border: '2px solid #e2e6e9',
											borderRadius: '8px',
										}}
									>
										<div className="float-right text-danger">
											6:00 PM, March 4, 2022
										</div>
										<h4 className="card-title text-danger">Orientation</h4>
										<p
											className="card-text text-dark"
											style={{ fontSize: `medium` }}
										>
											A quick session explaining the rules, guidelines,
											timeline, themes and submission format for the hackathon.
											Make sure to be there on time.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											8:00 PM, March 4 , 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 1:</strong>
											Ideation
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>
												Behind every great hack, lies a greater idea!
											</strong>{' '}
											In this phase, teams are expected to come up with ideas
											worth hacking.
										</p>
										<button
											className="btn btn-sm btn-outline-secondary"
											type="button"
											data-target="#t2_details"
											data-toggle="collapse"
										>
											More ▼
										</button>
										<div className="collapse mt-3" id="t2_details">
											<p
												className="card-text text-dark"
												style={{ fontSize: `medium` }}
											>
												Ideas can be real life problems around them that they
												are keen to solve or can simply be anything they are
												passionate about and want to see being implemented in
												this world. The timeline merely serves as a guide to
												keep track of time and teams who have already decided on
												the next big change they want to introduce to the world
												are free to start hacking!
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-light border"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #e2e6e9', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											10:00 AM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">Speaker Session</h4>
										<p
											className="card-text text-dark"
											style={{ fontSize: `medium` }}
										>
											Inspiration comes best from experience. Whether you're
											looking for a quick idea or are keen to learn about
											current trends in technology and see the passion that
											drives the industry, make sure you don't miss out on our Speaker Session.
											{/* <a href="#" target="_blank">
												Speaker Session.
											</a> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											2:00 PM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 2:</strong>
											Innovation
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>Let the hacking begin!</strong> In this phase,
											teams are expected to have started protoyping and
											developing their idea. As important as an idea can be,
											transforming it into a solution that impacts the world is
											all the more essential.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-light border"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #e2e6e9', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											10:00 PM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 3:</strong>
											Power Hacking
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>Tick-tock Tick-tock!</strong> Make sure you make
											every second count as you build upon your hack and go the
											distance by making it into a minimum viable product.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											8:00 AM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 4:</strong>
											Submission
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong> Submit your hack on Devfolio</strong> and let the
											world know what you made for them to be eligible to
											compete for the top positions in{' '}
											<strong>DevHack 3.0</strong>.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											10:30 AM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 5:</strong>
											Submission
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong> Time to impress the Judges!</strong> Top teams
											will present their brilliant hack for the final evaluation
											in the auditorium after 2:00 PM.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Timeline;
