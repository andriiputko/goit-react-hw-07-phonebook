import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <Contacts />
    </>
  );
}
