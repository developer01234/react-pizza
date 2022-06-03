import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>🥲</span>
				<br />
				Ничего не найдено
			</h1>
			<h2 className={styles.description}>Ошибка 404</h2>
		</div>
	);
};

export default NotFoundBlock;
