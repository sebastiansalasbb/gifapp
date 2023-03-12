import { useState, useEffect } from "react";
import peticionHttp from "../helpers/reqGift";

const useGetGif = (categories) => {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(true);

  const pedirGif = async () => {
    setImages(await peticionHttp(categories));
    setloading(false);
  };

  useEffect(() => {
    pedirGif();
  }, []);

  return [images, loading];
};

export default useGetGif;
