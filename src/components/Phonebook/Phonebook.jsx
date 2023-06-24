import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNewContact = () => {
    const { name } = this.state;
    const id = nanoid();

    const newContact = {
      name: name,
      id: id,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, contacts } = this.state;

    console.log(this.state);
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
        <br />
        <label htmlFor="">
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
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
