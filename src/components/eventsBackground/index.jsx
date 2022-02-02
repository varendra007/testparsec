import './styles.css';
import Particles from 'react-tsparticles';

const Background = ({bgColor}) => {
	return (
		<div className="App">
			<Particles
				id="tsparticles"
				width="100vw"
				height="100vh"
				options={{
					fpsLimit: 60,
					particles: {
						number: {
							value: 0,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: '#FF10F0',
						},
						shape: {
							type: 'circle',
						},
						opacity: {
							value: 1,
							random: false,
							animation: {
								enable: true,
								speed: 0.5,
								minimumValue: 0,
								sync: false,
							},
						},
						size: {
							value: 8,
							random: { enable: true, minimumValue: 4 },
							animation: {
								enable: false,
								speed: 3,
								minimumValue: 4,
								sync: false,
							},
						},
						move: {
							enable: true,
							gravity: {
								enable: true,
								acceleration: -1,
							},
							speed: 2,
							direction: 'top',
							random: false,
							straight: false,
							outModes: {
								default: 'destroy',
								bottom: 'none',
							},
							attract: {
								enable: true,
								distance: 300,
								rotate: {
									x: 600,
									y: 1200,
								},
							},
						},
					},
					interactivity: {
						detectsOn: 'canvas',
						events: {
							onClick: {
								enable: true,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 100,
								duration: 0.4,
							},
						},
					},
					detectRetina: true,
					background: {
						color: bgColor!=='' ?`${bgColor}`: '#202124',
						// color: '#090b38',
						// color: 'rgba(0,0,0,0.2)',
					},
					emitters: [
						{
							direction: 'top',
							particles: {
								color: '#FF10F0',
							},
							rate: {
								quantity: 1,
								delay: 0.1,
							},
							size: {
								width: 100,
								height: 10,
							},
							position: {
								x: 50,
								y: 100,
							},
						},
					],
				}}
			/>
		</div>
	);
};

export default Background;

