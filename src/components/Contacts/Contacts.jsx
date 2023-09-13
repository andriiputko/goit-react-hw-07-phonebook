import PropTypes from 'prop-types';
import cl from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contactSelectors';
import { itemsSlice } from '../../redux/contactSlice';


export const Contacts = () => {
  const items = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <div>
      
      <ul className={cl.list}>
        {items.map(({ id, name, number }) => {
          return (
            <li key={id} className={cl.li}>
              <p>Name: {name}</p>
              <p>Number: {number}</p>
              <button
                type="button"
                id={id}
                className={cl.button}
                onClick={evt =>
                  dispatch(itemsSlice.actions.deleteContact(evt.target.id))
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsInfo: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default Contacts;
