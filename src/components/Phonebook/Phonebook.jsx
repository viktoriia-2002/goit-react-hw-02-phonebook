import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNewContact = () => {
    const { name, number } = this.state;
    const id = nanoid();

    const newContact = {
      name: name,
      id: id,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleTelChange = event => {
    this.setState({ number: event.target.value });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    const { name, contacts, number, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );


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
            onChange={this.handleTelChange}
          />
        </label>
        <button type="submit" onClick={this.handleNewContact}>
          Add contact
        </button>
        <h3>FInd contacts by name</h3>
        <Filter onChange={e => this.setState({filter: e.target.value})} value={this.state.filter} />
        <ContactList contacts={filteredContacts} />
      </form>
    );
  }
}

export default Phonebook;
