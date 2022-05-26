import React from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Block } from './components/Block';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							<Block title='По-мексикански' price={500} />
							<Block title='Сосиска-в-тесте-пицца' price={10000} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
