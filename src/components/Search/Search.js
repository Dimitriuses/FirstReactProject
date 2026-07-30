import React from "react";
import { connect } from "react-redux";

import { setSearch } from "../../store/actions";
import { searchText } from "../../store/selectors";

const Search = ({ value, onSearch }) => (
  <div className="col-md-10 offset-md-1 row-block">
    <input
      name="Search"
      className="form-control"
      placeholder="Search..."
      aria-label="Search contacts by name"
      value={value}
      onChange={event => onSearch(event.target.value)}
    />
  </div>
);

const mapStateToProps = state => ({ value: searchText(state) });

export default connect(mapStateToProps, { onSearch: setSearch })(Search);
