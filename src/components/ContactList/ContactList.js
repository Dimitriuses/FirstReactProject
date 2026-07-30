import React, { Fragment } from "react";
import { connect } from "react-redux";

import ContactListItem from "../ContactListItem/ContactListItem";
import Search from "../Search/Search";
import { visibleContacts } from "../../store/selectors";

const ContactList = ({ contacts }) => (
  <Fragment>
    <Search />
    <div className="col-md-10 offset-md-1 row-block">
      <ul className="contact-list">
        {contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  </Fragment>
);

const mapStateToProps = state => ({ contacts: visibleContacts(state) });

export default connect(mapStateToProps)(ContactList);
