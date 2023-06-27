import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from './ContactForm';
import { Container } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  // state = {
  //   contacts: [],
  //   filter: ''
  // }

  

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNewContact = () => {
    const { name, number, contacts } = this.state;
    
    const duplicateName = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateName) {
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

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          handleNameChange={this.handleNameChange}
          state={this.state}
          handleNewContact={this.handleNewContact}
          handleTelChange={this.handleTelChange}
        />
        <h2>Contacts</h2>

        <Filter
          onChange={e => this.setState({ filter: e.target.value })}
          value={this.state.filter}
        />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export default App;
