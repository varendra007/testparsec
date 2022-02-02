import React from 'react';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css'

const EventCarousel = () => {
	return (
		<Carousel showStatus={false} infiniteLoop={true} interval={5000} autoPlay={true} stopOnHover={true} >
			{/* <div > */}
			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Hackathon
							</span>
							<h2>Devhack 3.0</h2>
							<div
								class="text mb-3"
								style={{
									// fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								Do you have what it takes to code sleeplessly for 36 hrs to
								develop a groundbreaking piece of software? Well then, this
								event's rightly engineered for you. Devhack is a 36 hour
								hackathon attended in teams of 4 who would be participating
								within the themes and problem statements provided. It's a
								hackathon where the registered team would ideate, design and
								innovate products by using their technical knowledge and excel
								at it.
								<br />
								<br />
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=1zfapVQ70IumpDdz0yVDGZUV3zhp4I8i4"
								alt=""
								class="bg-img"
								style={{ width: '70%' }}
								
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Competitive Coding
							</span>
							<h2>AlgoStrike 2.0</h2>
							<div
								class="text mb-3"
								style={{
									fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								For normal people, maestro is a distinguished performer of a
								musical instrument. Although, for us, Code Maestro is someone
								who can interweave data structures and algos to solve a problem
								efficiently. Join us at this 3 hour long brainstorming coding
								contest where you can turn yourself into a Code Maestro!
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=16AvAkRTlLHJ5X-KcGLWO3-fA-n6PCSsg"
								alt=""
								class="bg-img"
								style={{ width: '70%' }}
								
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Capture the Flag
							</span>
							<h2>VeniVidiVici 2.0</h2>
							<div
								class="text mb-3"
								style={{
									fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								Test your cybersecurity skills in this{' '}
								<strong>
									jeopardy-style CTF to conquer the flags hidden throughout some
									machines.
								</strong>{' '}
								Solve computer security problems and/or capture and defend
								computer systems by encrypting the codes.{' '}
								<strong> Be assured that only knowledge won't suffice. </strong>{' '}
								You'll need a righteous blend of knowledge and temperament to
								crack this one.
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=1yYK3kdxUwk6tBZpFKyr4wgIuoRJWT1p6"
								alt=""
								class="bg-img"
								style={{ width: '70%' }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Sharpen your Mind
							</span>
							<h2>Quiz</h2>
							<div
								class="text mb-3"
								style={{
									fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								Participate in this quiz, which is based on technical aspects,
								where you can test how well you are versed with technology you
								use!
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=17c5WqrsJsXmArHg6xDYOh5ZX__snZDf0"
								alt=""
								class="bg-img"
								style={{ width: '70%' }} 
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Design the World
							</span>
							<h2>Designõ</h2>
							<div
								class="text mb-3"
								style={{
									fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								Design and Engineer your own product to solve a real life
								problem and showcase it by creating a 3D model. Join us in teams
								of 2 at this CAD Based product design event!
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=1EAnQrMy4e-bEeUUC1Rhrhr2rgXz8-IEv"
								alt=""
								class="bg-img"
								style={{ width: '70%' }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-item">
				<div class="row">
					<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
						<div class="inner-column">
							<span
								class="title"
								style={{
									fontSize: '2rem',
									color: '#f20487',
									fontWeight: '600',
								}}
							>
								Show your Skills
							</span>
							<h2>Ascensus</h2>
							<div
								class="text mb-3"
								style={{
									fontSize: '18px',
									fontWeight: 'normal',
									lineHeight: '2',
								}}
							>
								Solve a real life industry problem engineered with technical
								elements in an economically feasible way by taking part in this
								event.
							</div>
						</div>
					</div>

					<div class="info-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column  bg-img">
							<img
								src="https://drive.google.com/uc?id=1CJkzriYKr05wO81rGG4ENjIOh8taoHwz"
								alt=""
								class="bg-img"
								style={{ width: '70%' }}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</Carousel>
		// <CarouselProvider
		// 	naturalSlideWidth={100}
		// 	naturalSlideHeight={125}
		// 	totalSlides={3}
		// 	interval={1000}
		// 	isPlaying={true}
		// 	playDirection='forward'
		// 	touchEnabled={true}
		// 	infinite={true}
		// >
		// 	<Slider>
		// 		<Slide index={0}>I am the first Slide.</Slide>
		// 		<Slide index={1}>I am the second Slide.</Slide>
		// 		<Slide index={2}>I am the third Slide.</Slide>
		// 	</Slider>
		// </CarouselProvider>
	);
};

export default EventCarousel;
