import { useEffect, useState } from "react";
import getGif from "../services/getGif";
export default function Details({ params }) {
  const { id } = params;
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGif(id)
      .then((gif) => {
        setGif(gif);
        setLoading(false);
      })
      .catch(() => console.log("Ha ocurrido un error en la busqueda"));
  }, [id]);
  return (
    <>
      {loading ? (
        <p>Cargando</p>
      ) : gif ? (
        <>
          <img src={gif.img} alt="" />
          <h1>{gif.title}</h1>
        </>
      ) : (
        <p>Ha ocurrido un error en la matrix</p>
      )}
    </>
  );
}
