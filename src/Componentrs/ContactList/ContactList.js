import React from "react";

import ContactListItem from "../ContactListItem/ContactListItem"
import { isReturnStatement } from "@babel/types";

const ContactList = ({items}) => {
  const newItem = items.map((item)=>{
    return(<ContactListItem name={item.name} description ={item.description} gender={item.gender} image={item.image}/>)
  })
  return (
    <div class="col-md-10 offset-md-1 row-block">
        <ul id="sortable">
            {newItem}
        </ul>
    </div>
    
  );
};

export default ContactList;
