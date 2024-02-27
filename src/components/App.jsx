import React, { useCallback, useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = useCallback(contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  }, []);

  const formSubmitHandler = data => {
    const { name } = data;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact ${name} already exists!`);
      return;
    }

    const newContact = { ...data, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filterInputValue = e => {
    setFilter(e.target.value);
  };

  const filterContacts = useCallback(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  });

  const visibleContacts = filterContacts();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        fontSize: '30px',
        color: 'rgb(1, 1, 1)',
        marginLeft: '20px',
      }}
    >
      <h1 style={{ margin: 0 }}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterInputValue} />
      <ContactList contacts={visibleContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
