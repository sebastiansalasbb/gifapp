const peticionHttp = async (categories) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ApQuVLMLXGP1jr9frc3MmM67nKWzZYvo&q=${categories}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized.url,
  }));

  return gifs;
};

export default peticionHttp;
