export default async function getGifs(query) {
  const API = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=es`;
  const res = await fetch(API);
  const { data } = await res.json();

  return data.map(({ images, id, title }) => ({
    id,
    title,
    img: images.downsized.url,
  }));
}
