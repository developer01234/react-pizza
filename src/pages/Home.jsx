import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [category, setCategory] = React.useState(0);
	const [sort, setSort] = React.useState({
		name: 'популярности',
		sortProp: 'rating',
	});

	React.useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://629331b47aa3e6af1a07035f.mockapi.io/Pizzas?${
				category > 0 ? `category=${category}` : ''
			}&sortBy=${sort.sortProp}&order=desc`
		)
			.then(res => {
				return res.json();
			})
			.then(json => {
				setItems(json);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [category, sort]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={category} onClickCategory={i => setCategory(i)} />
				<Sort value={sort} onChangeSort={i => setSort(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
};

export default Home;
