import React from "react";

import ContactListItem from "../ContactListItem/ContactListItem"

const ContactList = () => {
  return (
    <div class="col-md-10 offset-md-1 row-block">
        <ul id="sortable">
            <ContactListItem/>
            <ContactListItem/>
        </ul>
    </div>
    
  );
};

export default ContactList;
