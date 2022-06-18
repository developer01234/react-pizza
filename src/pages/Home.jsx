import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

export const Home = ({ searchValue }) => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [categoryId, setCategory] = React.useState(0)
	const [sort, setSort] = React.useState({
		name: 'популярности',
		sortProp: 'rating',
	})

	React.useEffect(() => {
		setIsLoading(true)
		const sortBy = sort.sortProp.replace('-', '')
		const order = sort.sortProp.includes('-') ? 'asc' : 'desc'
		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://629331b47aa3e6af1a07035f.mockapi.io/Pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then(res => {
				return res.json()
			})
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue])

	const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	))

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onClickCategory={i => setCategory(i)} />
				<Sort value={sort} onChangeSort={i => setSort(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
		</div>
	)
}

export default Home
