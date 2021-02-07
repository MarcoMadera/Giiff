export default async function getGifs(id) {
  const API = `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const res = await fetch(API);
  const { data } = await res.json();
  const { title, images } = data;
  return {
    title,
    img: images.downsized.url,
  };
}
