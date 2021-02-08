import styled, { createGlobalStyle } from "styled-components";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchList from "./pages/SearchList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route } from "wouter";
import Logo from "./assets/Logo";
import { useLocation, Link } from "wouter";
import { UserContextProvider } from "./context/UserContext";
import Header from "./components/Header";

export default function App() {
  const [info, setInfo] = useState("");
  const SearchInputRef = useRef(null);
  const setLocation = useLocation()[1];

  function handleClick(e) {
    e.preventDefault();
    const textValue = SearchInputRef.current.value.trim();
    if (!textValue) {
      setInfo("Ingresa una busqueda");
      return;
    }
    setLocation(`/search/${textValue}`);
  }
  return (
    <>
      <UserContextProvider>
        <GlobalStyle />
        <Container>
          <Header />
          <Link to="/">
            <Logo width={300} height={140} />
          </Link>
          <Form>
            <SearchInput
              type="text"
              ref={SearchInputRef}
              placeholder="Pandas"
            />
            <SubmitButton type="submit" onClick={handleClick} value="Buscar" />
            {info && <Info>{info}</Info>}
          </Form>

          <Route path="/" component={Home} />
          <Route path="/search/:query" component={SearchList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Container>
      </UserContextProvider>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
  width: 500px;
  margin: 0 auto;
`;

const Info = styled.p`
  color: #f3884a;
`;

const SubmitButton = styled.input`
  display: inline-flex;
  width: 100px;
  background: #225ea3;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 4px;
  padding: 4px 6px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  width: 200px;
  height: 24px;
`;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#gifApp {
background:#282634;
min-height: 100vh;
color: #ffffff;
}
`;
