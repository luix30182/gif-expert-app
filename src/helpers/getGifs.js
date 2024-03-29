export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=vlcAZZ0KdmwjAoj85DyUQW6WxjU5IsW9`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	console.log(data);
	const gifs = data.map((gif) => {
		return {
			id: gif.id,
			title: gif.title.length > 0 ? gif.title : gif.slug,
			url: gif.images.downsized_medium.url,
		};
	});
	console.log(gifs);
	return gifs;
};
