import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import PropTypes from 'prop-types';
import cl from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={cl.header}>Contacts</h2>
      <div className={cl.filterContainer}>
        <label className={cl.label}>
          {' '}
          Find contacts by name
          <input
            className={cl.input}
            type="text"
            onChange={e => {
              const action = filterContact(e.target.value);
              dispatch(action);
            }}
          />
        </label>
      </div>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
