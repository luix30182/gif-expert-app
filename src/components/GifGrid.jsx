import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category }) => {
	const { data, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <p>Loading...</p>}
			<div className="card-grid">
				{data.map((gif) => (
					<GridGifItem key={gif.id} {...gif} />
				))}
			</div>
		</>
	);
};
