import React, { Fragment } from "react";
import "./App.css";
import { Header, Search, ReposTable } from "./components";
import { Provider } from "react-redux";
import store from "./store";
function App({ loading }) {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <Search />
            <ReposTable />
          </div>
        </main>
      </Fragment>
    </Provider>
  );
}

export default App;
