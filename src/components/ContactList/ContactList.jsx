import React from 'react';
import Phonebook from 'components/Phonebook';

const ContactList = ({ name, id }) => {
  return (
    <ul>
      <h2>Contacts</h2>
      <li>{name}</li>
      <li>{id}</li>
    </ul>
  );
};

export default ContactList;
