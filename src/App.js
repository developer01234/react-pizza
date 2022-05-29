import React from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Block } from './components/Block';

function App() {
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://629331b47aa3e6af1a07035f.mockapi.io/Pizzas')
			.then(res => {
				return res.json();
			})
			.then(json => {
				setItems(json);
			});
	});

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
							{items.map(obj => (
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
