import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import ContactList from "./ContactList";
import reducer from "../../store/reducer";
import { setSearch, deleteContact } from "../../store/actions";

const render = store => {
  const host = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ContactList />
    </Provider>,
    host
  );
  return host;
};

const namesIn = host =>
  [...host.querySelectorAll("li h4")].map(heading => heading.textContent);

// This is the test that would have caught the defect this repository was abandoned
// with: the last 2019 commit removed `List` from <ContactList /> and left the
// replacement `connect()` commented out, so the component was handed nothing and
// `List.map` threw before anything rendered.
it("ContactList_RenderedFromTheStore_ShowsEveryContact", () => {
  const host = render(createStore(reducer));

  expect(namesIn(host)).toEqual([
    "Camila Terry",
    "Joel Williamson",
    "Deann Payne",
    "Leona Hunte"
  ]);
});

it("ContactList_WithASearchInTheStore_ShowsOnlyTheMatches", () => {
  const store = createStore(reducer);
  store.dispatch(setSearch("terry"));

  expect(namesIn(render(store))).toEqual(["Camila Terry"]);
});

it("ContactList_AfterADeleteIsDispatched_DropsThatRow", () => {
  const store = createStore(reducer);
  const host = render(store);

  store.dispatch(deleteContact(1));

  expect(namesIn(host)).toEqual(["Joel Williamson", "Deann Payne", "Leona Hunte"]);
});

it("ContactList_RendersTheFavoriteStarFilledAndTheRestHollow", () => {
  const host = render(createStore(reducer));

  // Joel Williamson is the one seed contact with favorite: true.
  expect([...host.querySelectorAll("li i.star")].map(star => star.className)).toEqual([
    "fa fa-star-o fa-2x star",
    "fa fa-star fa-2x star",
    "fa fa-star-o fa-2x star",
    "fa fa-star-o fa-2x star"
  ]);
});
