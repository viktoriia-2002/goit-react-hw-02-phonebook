import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';

class Phonebook extends React.Component {
    state = {
      contacts: [],
      name: '',
    };
  
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };
  
    handleNewContact = () => {
      const { name } = this.state;
      const id = nanoid();
  
      const newContact = {
        name: name,
        id: id,
      };
  
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
      }));
    };
  
    render() {
      const { name, contacts } = this.state;
  
      return (
        <form>
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
              onChange={this.handleNameChange}
            />
          </label>
          <button type="submit" onClick={this.handleNewContact}>
            Add contact
          </button>
          <ContactList contacts={contacts} />
        </form>
      );
    }
  }
  
  export default Phonebook;