// Case-insensitive substring match on the name, exactly what the 2019 App component
// did inline — except that its result was computed and then never passed anywhere.
export const visibleContacts = ({ list, search }) => {
  if (search.length === 0) {
    return list;
  }

  const needle = search.toLowerCase();
  return list.filter(contact => contact.name.toLowerCase().indexOf(needle) > -1);
};

export const searchText = ({ search }) => search;
