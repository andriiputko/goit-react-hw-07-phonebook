import cl from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getItems } from '../../redux/contactSelectors';
import { itemsSlice } from '../../redux/contactSlice';
import { Formik } from 'formik';
import { Field, Form } from 'formik';

const idName = nanoid();
const idNumber = nanoid();

export const ContactForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactsNames = items.map(item => item.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const newPerson = {
        name,
        number,
      };
      dispatch(itemsSlice.actions.addContact(newPerson));
    }
    resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form className={cl.form}>
        <label className={cl.label}>
          Name
          <Field
            className={cl.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Input name"
            id={idName}
            required
          />
        </label>

        <label className={cl.label}>
          Number
          <Field
            className={cl.input}
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Input phone number"
            id={idNumber}
            required
          />
        </label>

        <button className={cl.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;