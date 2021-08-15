import React, { useState, useEffect } from 'react';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const url =
			'https://api.giphy.com/v1/gifs/search?q=one piece&limit=10&api_key=vlcAZZ0KdmwjAoj85DyUQW6WxjU5IsW9';
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map((gif) => {
			return {
				id: gif.id,
				title: gif.title,
				url: gif.images.downsized_medium.url,
			};
		});
		setImages(gifs);
	};

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
				{images.map((gif) => (
					<GridGifItem key={gif.id} {...gif} />
				))}
			</div>
		</>
	);
};
