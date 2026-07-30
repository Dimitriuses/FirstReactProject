import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import reducer from "./store/reducer";

import Header from "./components/Header/Header";
import ContactList from "./components/ContactList/ContactList";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

const store = createStore(reducer);

// PUBLIC_URL is "" locally and "/FirstReactProject" in the GitHub Pages build,
// which is what lets the same bundle serve from a project sub-path.
const App = () => (
  <Provider store={store}>
    <section className="row-section">
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path="/" exact component={ContactList} />
            <Route path="/add" exact component={AddNewItem} />
            <Route path="/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </section>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
