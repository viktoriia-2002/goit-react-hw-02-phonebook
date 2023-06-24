import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(person => (
          <li key={person.id}>
            <span>{person.name}:</span>
            <span>{person.number}</span>

          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactList;
