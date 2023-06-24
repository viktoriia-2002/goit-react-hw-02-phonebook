import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList'; 

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNewContact = () => {
    const { name } = this.state;
    const id = nanoid();
  
    const newContact = {
      name: name,
      id: id
    };
  
    return newContact;
  };
  

  render() {
    const id = nanoid();
    console.log({ nanoid });

    return (
      <form >
        <label htmlFor="login">
          Name
          <input
            type="text"
            className="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="button" onSubmit={this.handleNewContact}>Add contact</button>
        <ContactList
        contacts={[]}
        id={[]}/>
      </form>
    );
  }
}

export default Phonebook;
