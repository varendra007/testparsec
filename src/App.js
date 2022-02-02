import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Routes from './routes';


function App() {

	return (
		<div>
			<LazyLoad>
        {/* <Background /> */}
        {/* <EventPage /> */}
				<Router>
					<Routes />
				</Router>
				{/* <Footer /> */}
			</LazyLoad>
		</div>
	);
}

export default App;
