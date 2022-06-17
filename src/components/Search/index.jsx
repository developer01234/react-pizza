import React from 'react'
import styles from './Search.module.scss'

const Search = ({ searchValue, setSearchValue }) => {
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
			<input
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				className={styles.input}
				placeholder='Поиск пиццы...'
			/>
			{searchValue && (
				<svg
					onClick={() => setSearchValue('')}
					className={styles.clearIcon}
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
				</svg>
			)}
		</div>
	)
}

export default Search
