import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
const ContactForm = ({
  handleNameChange,
  handleNewContact,
  handleTelChange,
  state,
}) => {
  const { number, name } = state;
  return (
    <Form autoComplete="off">
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          id="name"
          className="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </Label>
      <Label htmlFor="tel">
        {' '}
        Number
        <Input
          type="tel"
          id="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleTelChange}
        />
      </Label>
      <Button type="submit" onClick={handleNewContact}>
        Add contact
      </Button>
      <h3>Find contacts by name</h3>
    </Form>
  );
};

export default ContactForm;
