import { createStore } from "redux";

import reducer, { initialState } from "./reducer";
import { visibleContacts } from "./selectors";
import {
  addContact,
  deleteContact,
  toggleFavorite,
  setAvatar,
  setSearch
} from "./actions";

const nameOf = state => state.list.map(contact => contact.name);
const idsOf = state => state.list.map(contact => contact.id);

describe("reducer", () => {
  // The 2019 reducer ended every branch with `break` and returned nothing, so the
  // very first action Redux dispatches — its own @@INIT — set the store to undefined.
  it("Reducer_UnknownAction_ReturnsTheStateUnchanged", () => {
    const state = reducer(initialState, { type: "@@redux/INIT" });

    expect(state).toBe(initialState);
  });

  it("Store_FreshlyCreated_HoldsTheFourSeedContacts", () => {
    const store = createStore(reducer);

    expect(store.getState()).toBeDefined();
    expect(nameOf(store.getState())).toEqual([
      "Camila Terry",
      "Joel Williamson",
      "Deann Payne",
      "Leona Hunte"
    ]);
  });

  it("ToggleFavorite_TogglesOnlyTheTargetedContact", () => {
    const state = reducer(initialState, toggleFavorite(3));

    expect(state.list.map(contact => contact.favorite)).toEqual([
      false,
      true,
      true,
      false
    ]);
  });

  // The 2019 handler sliced the array and then wrote through the copy into the same
  // contact objects, so the "previous" state was modified too.
  it("ToggleFavorite_DoesNotMutateTheStateItWasGiven", () => {
    const before = JSON.stringify(initialState);

    reducer(initialState, toggleFavorite(1));

    expect(JSON.stringify(initialState)).toBe(before);
  });

  it("DeleteContact_RemovesOnlyThatContact", () => {
    const state = reducer(initialState, deleteContact(2));

    expect(nameOf(state)).toEqual(["Camila Terry", "Deann Payne", "Leona Hunte"]);
  });

  // `id: list.length + 1` handed the new contact an id that was already taken as soon
  // as anything had been deleted, which duplicates React keys and makes every later
  // action address the wrong row.
  it("AddContact_AfterADelete_StillAssignsAnUnusedId", () => {
    const afterDelete = reducer(initialState, deleteContact(2));

    const state = reducer(
      afterDelete,
      addContact({ name: "Zoe Newton", description: "", gender: "women", image: 7 })
    );

    expect(idsOf(state)).toEqual([1, 3, 4, 5]);
    expect(new Set(idsOf(state)).size).toBe(state.list.length);
  });

  it("AddContact_AddsTheContactAsANonFavorite", () => {
    const state = reducer(
      initialState,
      addContact({ name: "Zoe Newton", description: "hi", gender: "women", image: 7 })
    );

    expect(state.list[state.list.length - 1]).toEqual({
      id: 5,
      name: "Zoe Newton",
      description: "hi",
      gender: "women",
      image: 7,
      favorite: false
    });
  });

  it("SetAvatar_ChangesOnlyThatContactsPortrait", () => {
    const state = reducer(initialState, setAvatar(4, 12));

    expect(state.list.map(contact => contact.image)).toEqual(["50", "42", "67", 12]);
  });

  it("SetSearch_LeavesTheContactsAlone", () => {
    const state = reducer(initialState, setSearch("leo"));

    expect(state.search).toBe("leo");
    expect(state.list).toBe(initialState.list);
  });
});

describe("visibleContacts", () => {
  it("VisibleContacts_EmptySearch_ReturnsEveryContact", () => {
    expect(visibleContacts(initialState)).toBe(initialState.list);
  });

  it("VisibleContacts_MatchesCaseInsensitiveSubstrings", () => {
    const state = reducer(initialState, setSearch("LEO"));

    expect(nameOf({ list: visibleContacts(state) })).toEqual(["Leona Hunte"]);
  });

  it("VisibleContacts_NoMatch_ReturnsNothing", () => {
    const state = reducer(initialState, setSearch("zzz"));

    expect(visibleContacts(state)).toEqual([]);
  });
});
