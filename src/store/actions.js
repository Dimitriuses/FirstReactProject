export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_AVATAR = "SET_AVATAR";
export const SET_SEARCH = "SET_SEARCH";

// The new contact arrives without an id; the reducer allocates one.
export const addContact = ({ name, description, gender, image }) => ({
  type: ADD_CONTACT,
  payload: { name, description, gender, image }
});

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

export const toggleFavorite = id => ({ type: TOGGLE_FAVORITE, payload: id });

// The random draw happens at the call site so the reducer stays pure.
export const setAvatar = (id, image) => ({ type: SET_AVATAR, payload: { id, image } });

export const setSearch = text => ({ type: SET_SEARCH, payload: text });
