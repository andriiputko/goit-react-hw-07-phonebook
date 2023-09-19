import cl from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts  } from '../../redux/contactSelectors';
import { deleteContact } from '../../redux/operations.js';

export const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <div>
      
      <ul className={cl.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={cl.li} key={id}>
          {name}: {number}
          <button type="button" className={cl.button} onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
};


export default Contacts;
