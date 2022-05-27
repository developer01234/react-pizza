import React from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Block } from './components/Block';
import pizzas from './assets/pizzas.json';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header price={30000} />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							{pizzas.map(obj => (
								<Block key={obj.id} {...obj} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
