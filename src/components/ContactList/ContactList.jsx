import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, SpanList, LiList } from './ContactList.styled';

const ContactList = ({ contacts,handleDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {contacts.map(person => (
          <LiList key={person.id}>
            <SpanList>{person.name}:</SpanList>
            <SpanList>{person.number}</SpanList>
            <Button type="button" onClick={() => handleDelete(person.id)}>
        Delete
      </Button>
          </LiList>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactList;
