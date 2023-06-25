import React from 'react';

const ContactForm = ({
  handleNameChange,
  handleNewContact,
  handleTelChange,
  state,
}) => {
  const { number, name } = state;
  return (
    <form autoComplete="off">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          className="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label htmlFor="tel">
        {' '}
        Number
        <input
          type="tel"
          id="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleTelChange}
        />
      </label>
      <button type="submit" onClick={handleNewContact}>
        Add contact
      </button>
      <h3>FInd contacts by name</h3>
    </form>
  );
};

export default ContactForm;
