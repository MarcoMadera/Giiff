import { Link } from "wouter";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <LinkRoute to="/search/mexico">Mexico</LinkRoute>
      <LinkRoute to="/search/ecuador">Ecuador</LinkRoute>
      <LinkRoute to="/search/colombia">Colombia</LinkRoute>
      <LinkRoute to="/search/argentina">argentina</LinkRoute>
    </>
  );
}
const LinkRoute = styled(Link)`
  display: flex;
  color: #135eb4;
  justify-content: ${(props) =>
    props.$tempLeftProp ? "flex-start" : "center"}; // '$' added
  align-items: center;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
