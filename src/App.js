import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header price={30000} />
				<div className='content'>
					<div className='container'>
						<Home />
						<NotFound />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
