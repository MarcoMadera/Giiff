import styled from "styled-components";
import { Link } from "wouter";
export default function Gif({ title, img, id }) {
  return (
    <Container>
      <LinkRoute to={`/details/${id}`} target="_blank">
        <Img src={img} alt="" />
        {title}
      </LinkRoute>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  width: min-content;
  display: inline-block;
`;

const LinkRoute = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  color: #135eb4;
  justify-content: ${(props) =>
    props.$tempLeftProp ? "flex-start" : "center"}; // '$' added
  align-items: center;
  text-decoration: none;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
const Img = styled.img`
  width: 240px;
  height: 240px;
`;
