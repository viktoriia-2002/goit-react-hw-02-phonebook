import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {contacts.map(person => (
          <ContactListItem key={person.id} person={person} handleDelete={handleDelete} />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
