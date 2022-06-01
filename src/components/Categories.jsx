import React from 'react';

function Categories() {
	const [active, setActive] = React.useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='categories'>
			<ul>
				{categories.map((value, i) => (
					<li
						key={i}
						onClick={() => setActive(i)}
						className={active === i ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
