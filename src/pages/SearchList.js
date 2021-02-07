import Gif from "../components/Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import styled from "styled-components";
export default function SearchList({ params }) {
  const { query } = params;
  const [gifs, setGifs] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs(query)
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      })
      .catch(() => console.log("Ha ocurrido un error en la busqueda"));
  }, [query]);

  return (
    <>
      {loading ? (
        <Chargin>Cargando</Chargin>
      ) : (
        gifs?.map(({ img, title, id }) => (
          <Gif key={id} id={id} img={img} title={title} />
        ))
      )}
    </>
  );
}

const Chargin = styled.p`
  font-size: 40px;
  color: #003993;
  font-weight: 600;
`;
