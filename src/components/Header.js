import { Link } from "wouter";
import styled from "styled-components";
import useUser from "../hooks/useUser";
export default function Header() {
  const { isLogged, logout } = useUser();

  return (
    <HeaderContainer>
      {isLogged ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: block;
  width: 100vw;
  height: 80px;
  background: #030353;
  padding: 10px 30px;
`;
