import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from './ContactForm';

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

  handleSubmit = e => {
    e.preventDefault();
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNewContact = () => {
    const { name, number, contacts } = this.state;

    const duplicateContact = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

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
      <div>
        <ContactForm
          handleNameChange={this.handleNameChange}
          state={this.state}
          handleNewContact={this.handleNewContact}
          handleTelChange={this.handleTelChange}
        />
        <h3>FInd contacts by name</h3>

        <Filter
          onChange={e => this.setState({ filter: e.target.value })}
          value={this.state.filter}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default Phonebook;
