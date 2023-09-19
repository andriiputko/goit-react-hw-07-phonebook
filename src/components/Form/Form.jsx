import cl from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/operations.js';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contactSelectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log('er');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    const isContactRepeat = contacts.find(el => el.name === name);

    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(contact));

    event.target.reset();
  };

  return (
    <form className={cl.form} onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        className={cl.input}
        type="text"
        name="name"
        onChange={inputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <h3>Number</h3>
      <input
        className={cl.input}
        type="tel"
        name="number"
        onChange={inputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={cl.button} type="submit">
        {' '}
        Add contact{' '}
      </button>
    </form>
  );
};