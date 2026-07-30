import contacts from "./contacts";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  TOGGLE_FAVORITE,
  SET_AVATAR,
  SET_SEARCH
} from "./actions";

export const initialState = {
  list: contacts,
  search: ""
};

// `list.length + 1` was the 2019 rule, which reuses an id as soon as anything is
// deleted; the highest id in use is the only safe starting point.
const nextId = list => list.reduce((max, contact) => Math.max(max, contact.id), 0) + 1;

const replace = (list, id, change) =>
  list.map(contact => (contact.id === id ? { ...contact, ...change(contact) } : contact));

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        list: [
          ...state.list,
          { ...action.payload, id: nextId(state.list), favorite: false }
        ]
      };

    case DELETE_CONTACT:
      return {
        ...state,
        list: state.list.filter(contact => contact.id !== action.payload)
      };

    case TOGGLE_FAVORITE:
      return {
        ...state,
        list: replace(state.list, action.payload, contact => ({
          favorite: !contact.favorite
        }))
      };

    case SET_AVATAR:
      return {
        ...state,
        list: replace(state.list, action.payload.id, () => ({
          image: action.payload.image
        }))
      };

    case SET_SEARCH:
      return { ...state, search: action.payload };

    // Redux dispatches its own @@INIT and @@REPLACE actions. Returning the state
    // unchanged here is what the 2019 reducer got wrong: it fell through to
    // `break`, so the store was initialised to `undefined`.
    default:
      return state;
  }
};

export default reducer;
