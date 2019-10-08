import React, { Fragment } from "react";
import { connect } from "react-redux";
//import {INC, DEC, ZERO, DOUBLE  } from "../../Actions/Action";

import ContactListItem from "../ContactListItem/ContactListItem";

import Search from "../Search/Search";

const ContactList = ({ onSearch, List}) => {
  const newItem = List.map((item) => {
    return (
      <ContactListItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        gender={item.gender}
        favorite={item.favorite}
      />
    );
  });
  
  return (
    <Fragment>
      <Search onSearch={onSearch} />
      <div className="col-md-10 offset-md-1 row-block">
        <ul id="sortable">{newItem}</ul>
      </div>
    </Fragment>
  );
};
/*const mapStateToProps = (state) =>{
  console.log(state);
  return{
    List: state.List
  }
}*/

export default  /*connect(mapStateToProps)*/(ContactList);
