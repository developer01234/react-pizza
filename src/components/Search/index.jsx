import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
	return (
		<div class={styles.root}>
			<svg
				class={styles.icon}
				enable-background='new 0 0 32 32'
				id='EditableLine'
				version='1.1'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='14'
					cy='14'
					fill='none'
					id='XMLID_42_'
					r='9'
					stroke='#000000'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-miterlimit='10'
					stroke-width='2'
				></circle>
				<line
					fill='none'
					id='XMLID_44_'
					stroke='#000000'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-miterlimit='10'
					stroke-width='2'
					x1='27'
					x2='20.366'
					y1='27'
					y2='20.366'
				></line>
			</svg>
			<input className={styles.input} placeholder='Поиск пиццы...' />
		</div>
	);
};

export default Search;
