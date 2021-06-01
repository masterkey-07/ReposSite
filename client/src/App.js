import React, { Fragment } from "react";
import { Header, Search, ReposTable } from "./components";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "./styles";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Header />
        <Container>
          <form>
            <Search />
            <ReposTable />
          </form>
        </Container>
      </Fragment>
    </Provider>
  );
}

export default App;
