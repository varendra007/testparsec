import React from 'react';
import aiWorkshopImage from '../../images/resource/ml&ai.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import { useMediaQuery } from 'react-responsive';


const Workshop_comp = ({
	title,
	registrationLink,
	startDate,
	endDate,
	fee,
	venue,
	imageId,
}) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)',
    });
    const fntsizeStyles = {
        fontSize: '13px'
    }
	return (
		<>
			<div
				class="col-sm-6"
				style={{
					borderRadius: '12px',
					boxShadow: '-1px 1px 1px 1px rgba(0,0,0,0.4)',
					// padding: 0
					width: '30rem',
					margin: '100px 50px',
				}}
			>
				<img
					src={`https://drive.google.com/uc?id=${imageId}`}
					alt=""
					style={{
						width: '100%',
						objectFit: 'cover',
						// borderRadius: '12px',
						marginTop: '-60px',
						padding: 0,
					}}
				/>

				<br />
				<br />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						marginLeft: '10px',
					}}
				>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{title}</h2>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Start Date:&nbsp;&nbsp;</h4>
						<h5 style={{ fontWeight: 'normal' }} className="responsiveFont">
							{startDate}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
							textAlign: 'start',
						}}
					>
						<h4 className="responsiveFont">End Date:&nbsp;&nbsp;</h4>
						<h5 className="responsiveFont" style={{ fontWeight: 'normal' }}>
							{endDate}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Venue:&nbsp;&nbsp;</h4>
						<h5 className="responsiveFont" style={{ fontWeight: 'normal' }}>
							{venue}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Fees:&nbsp;&nbsp;</h4>
						<h5 style={{ fontWeight: 'normal' }} className="responsiveFont">
							&#8377; {fee}
						</h5>
					</div>
					<br />
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<a href={`${registrationLink}`} target="_blank">
						<div className="btn-box">
							<button type="button" className="btn btn-lg btn-primary">
								Register Here
							</button>
						</div>
					</a>
				</div>

				<br />
				<br />
			</div>
		</>
		// <div
		// 	className="news-block news-block-style col-lg-5 col-md-6 col-sm-12 wow fadeInUp "
		//     dataWowDelay="400ms"
		//     style={{height: '600px'}}
		// >
		// 	<div
		// 		className="image-box"
		// 		style={{
		// 			padding: '8% 5% 3% 5%',
		// 			borderRadius: '12px',
		// 			overflow: 'hidden',
		// 		}}
		// 	>
		// 		<figure
		// 			className="image"
		// 			style={{ borderRadius: '12px', overflow: 'hidden' }}
		// 		>
		// 			<a href="#">
		// 				<img
		// 					src={aiWorkshopImage}
		// 					alt=""
		// 					style={{
		// 						width: '100%',
		// 						objectFit: 'cover',
		// 						borderRadius: '12px',
		// 					}}
		// 				/>
		// 			</a>
		// 		</figure>
		// 	</div>

		// 	<div className="lower-content" style={{ textAlign: 'center' }}>
		// 		<h4>
		// 			<a
		// 				href="#"
		// 				style={{
		// 					fontSize: '25px',
		// 					paddingTop: '5px',
		// 					fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
		// 					textAlign: 'center',
		// 					textDecoration: 'none',
		// 				}}
		// 			>
		// 				{title}
		// 			</a>
		// 		</h4>
		// 		<>
		// 			<div className="text" style={{ marginBottom: '6px' }}>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontWeight: '700',
		// 						fontSize: '20px',
		// 					}}
		// 				>
		// 					Start Date:{' '}
		// 				</span>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontSize: '17px',
		// 						fontWeight: 'normal',
		// 					}}
		// 				>
		// 					{startDate}
		// 				</span>
		// 			</div>
		// 			<div className="text" style={{ marginBottom: '6px' }}>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontWeight: '700',
		// 						fontSize: '20px',
		// 					}}
		// 				>
		// 					End Date:{' '}
		// 				</span>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontSize: '17px',
		// 						fontWeight: 'normal',
		// 					}}
		// 				>
		// 					{endDate}
		// 				</span>
		// 			</div>
		// 			<div className="text" style={{ marginBottom: '6px' }}>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontWeight: '700',
		// 						fontSize: '20px',
		// 					}}
		// 				>
		// 					Venue:{' '}
		// 				</span>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontSize: '17px',
		// 						fontWeight: 'normal',
		// 					}}
		// 				>
		// 					{venue}
		// 				</span>
		// 			</div>
		// 			<div className="text" style={{ marginBottom: '6px' }}>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontWeight: '700',
		// 						fontSize: '20px',
		// 					}}
		// 				>
		// 					Fees:{' '}
		// 				</span>
		// 				<span
		// 					style={{
		// 						color: '#000',
		// 						fontSize: '17px',
		// 						fontWeight: 'normal',
		// 					}}
		// 				>
		// 					&#8377; {fee}
		// 				</span>
		// 			</div>
		// 		</>

		// 		<center
		// 			style={{
		// 				height: '50px',
		// 				paddingBottom: '60px',
		// 				paddingTop: '15px',
		// 			}}
		// 		>
		// 			<a href={`${registrationLink}`} target="_blank">
		// 				<div className="btn-box">
		// 					<button type="button" className="btn btn-lg btn-primary">
		// 						Register Here
		// 					</button>
		// 				</div>
		// 			</a>
		// 			<br />
		// 			<br />
		// 		</center>
		// 	</div>
		// </div>
	);
};

export default Workshop_comp;
