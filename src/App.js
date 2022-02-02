import './App.css';
import ReactGA from 'react-ga';
import Carousel from './component/Carousel';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
ReactGA.initialize('G-6YRWL6SYFE');
function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<div className="App">
			<Carousel />
		</div>
	);
}

export default withRouter(App);
