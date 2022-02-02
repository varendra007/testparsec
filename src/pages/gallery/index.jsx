import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/sponser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import gallaeryTitleBg from '../../images/background/gallery.jpg';
const Gallery = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header active={9} />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${gallaeryTitleBg})` }}
				>
					<div className="auto-container">
						<span className="float-text" id="sec-title-text">
							Gallery
						</span>
						<h1>Gallery</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/" id="sec-title-text">
									Home
								</a>
							</li>
							<li id="sec-title-text">Gallery</li>
						</ul>
					</div>
				</section>
				<div className="container mb-5">
					<h4 className="font-weight-light text-center text-lg-left mt-4 mb-0">
						You owe our photography team a treat for each Instagram-level photo
						you find (of yours ofc) xP
					</h4>
					<br />

					<hr className="mt-2 mb-5"></hr>
				</div>

				<section class="" style={{ borderRadius: '2rem', border: '0px' }}>
					<div class="auto-container">
						<div m-auto> &nbsp;</div>
						<div class="sec-title text-center" style={{ maxHeight: '10px' }}>
							<h2 class="">Our Past Events</h2>
						</div>

						<div class="row"></div>
					</div>
				</section>

				<section className="" style={{ borderRadius: '2rem' }}>
					<div
						className="auto-container"
						style={{ border: '1px solid #f1f1f1', borderRadius: '2rem' }}
					>
						<div m-auto> &nbsp;</div>
						<div class="sec-title text-center" style={{ maxHeight: '10px' }}>
							<h2 class="" style={{ color: '#1f7ac3', fontSize: '33px' }}>
								Google Cloud Study Jam
							</h2>
						</div>

						<div class="row">
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1B0bBQVXki-C7m_ITDOx1BdN1zyYmRqTR"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1B0bBQVXki-C7m_ITDOx1BdN1zyYmRqTR"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1Fz1SeTgeNrQVEqrOoqtL3EkZ-IwJThK8"
											alt=""
											style={{ height: '185px' }}
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1Fz1SeTgeNrQVEqrOoqtL3EkZ-IwJThK8"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1c1OShCe5wlDAkA8o8VsTpv5bvoMonT_8"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1c1OShCe5wlDAkA8o8VsTpv5bvoMonT_8"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1XvEKQvCA9ttEGuoZk9NqNh8AHIrbYSY5"
											alt=""
											style={{ height: '185px' }}
										/>
									</figure>
									<div class="overlay-box" style={{ height: '185px' }}>
										<a
											href="https://drive.google.com/uc?id=1XvEKQvCA9ttEGuoZk9NqNh8AHIrbYSY5"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<center>
								<br />
								<div class="btn-box" style={{ alignItems: 'center' }}>
									<a
										href="https://photos.google.com/share/AF1QipPYP2VAoHTen7VURBo4KdOOYJdEkDKRkfdqvNpUql7yonLrik-pARqZHFQwt2M9hA?key=THIyZ1I3TWw3S2QzSFVBVzVpbndLMUtKdEVZazR3"
										target="_blank"
										class="theme-btn btn-style-four button"
										style={{ borderRadius: '8px' }}
									>
										View More
									</a>
								</div>
								<br />
							</center>
							<br />
						</div>
					</div>
				</section>

				<section class="" style={{ borderRadius: '2rem' }}>
					<div
						class="auto-container"
						style={{ border: '1px solid #f1f1f1', borderRadius: '2rem' }}
					>
						<div m-auto> &nbsp;</div>
						<div class="sec-title text-center" style={{ maxHeight: '10px' }}>
							<h2 class="" style={{ color: '#1f7ac3', fontSize: '33px' }}>
								DevHack 1.0
							</h2>
						</div>
						<br />
						<div class="row">
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1brXVE97EAQsoyLtWsYwmnSkGwkVDeDyU"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1brXVE97EAQsoyLtWsYwmnSkGwkVDeDyU"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=11eojMigDijc90DZn9kL8IxuNzd-3Y9V6"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=11eojMigDijc90DZn9kL8IxuNzd-3Y9V6"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1id7KJhvOb2kR5Fqr-9ZGlMwarOWsER83"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1id7KJhvOb2kR5Fqr-9ZGlMwarOWsER83"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1mAn35qGgO1uU-lZyWhSYvjTaSaJ_30uU"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1mAn35qGgO1uU-lZyWhSYvjTaSaJ_30uU"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1Jco_GzPWgVmEO3HwX7mnIMaxalSFuf7U"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1Jco_GzPWgVmEO3HwX7mnIMaxalSFuf7U"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1HCHZW68PbDBxZNdi8hK32jtc2e5i5BTM"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1HCHZW68PbDBxZNdi8hK32jtc2e5i5BTM"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1b4kr85OT3W3UFTeU-yCiyanYtSqC8grF"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1b4kr85OT3W3UFTeU-yCiyanYtSqC8grF"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1xNj15GY7rGQyxPIhb6x0gUU2kftxx5-5"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1xNj15GY7rGQyxPIhb6x0gUU2kftxx5-5"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<center>
								<br />

								<div class="btn-box" style={{ alignItems: 'center' }}>
									<a
										href="https://photos.google.com/share/AF1QipPDRqPATLTz9fLK3A1tVLbqBZcLfrnRJ63zAG3Warbuxh5SrkKScPunm980jQfx3g?key=LThzVDJoTWpOM1FfVlRVRGF6aVZYcDR6endkbm5B"
										target="_blank"
										class="theme-btn btn-style-four button"
										style={{ borderRadius: '8px' }}
									>
										View More
									</a>
								</div>
								<br />
							</center>
							<br />
						</div>
					</div>
				</section>

				<section class="" style={{ borderRadius: '2rem' }}>
					<div
						class="auto-container"
						style={{ border: '1px solid #f1f1f1', borderRadius: '2rem' }}
					>
						<div m-auto> &nbsp;</div>
						<div class="sec-title text-center" style={{ maxHeight: '10px' }}>
							<h2 class="" style={{ color: '#1f7ac3', fontSize: '33px' }}>
								PyDay
							</h2>
						</div>

						<div class="row">
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1EKshaT1C61Pi__b4P6oWxcM2riCPxunq"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1EKshaT1C61Pi__b4P6oWxcM2riCPxunq"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1gqyq_wdSSuS3U-FCVlYsDnxJbxcV1SWX"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1gqyq_wdSSuS3U-FCVlYsDnxJbxcV1SWX"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=14ihtYmPTDxCHwFfWIpzkz8aMvOgYKLk4"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=14ihtYmPTDxCHwFfWIpzkz8aMvOgYKLk4"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="gallery-block col-lg-3 col-md-4 col-sm-12 wow zoomIn">
								<div class="image-box">
									<figure class="image">
										<img
											src="https://drive.google.com/uc?id=1ZF-twu_jAfiqtiwqrNog-dKGVFRrpRvc"
											alt=""
										/>
									</figure>
									<div
										class="overlay-box"
										style={{ backgroundColor: 'rgba(75, 30, 206, 0.48)' }}
									>
										<a
											href="https://drive.google.com/uc?id=1ZF-twu_jAfiqtiwqrNog-dKGVFRrpRvc"
											class="lightbox-image"
											data-fancybox="gallery"
										>
											<span class="icon flaticon-add-1"></span>
										</a>
									</div>
								</div>
							</div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<center>
								<br />

								<div class="btn-box" style={{ alignItems: 'center' }}>
									<a
										href="https://photos.app.goo.gl/QWkSCZndQZqwou6Z6"
										target="_blank"
										class="theme-btn btn-style-four button"
										style={{ borderRadius: '8px' }}
									>
										View More
									</a>
								</div>
								<br />
							</center>
							<br />
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Gallery;
