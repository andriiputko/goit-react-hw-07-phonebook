import React from 'react';
import PropTypes from 'prop-types';
import cl from './Filter.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from '../../redux/contactSelectors';
import { filterSlice } from '../../redux/contactSlice';
const filterId = nanoid();

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={cl.header}>Contacts</h2>
      <div className={cl.filterContainer}>
        <label htmlFor="" className={cl.label}>
          {' '}
          Find contacts by name
          <input
            type="text"
            value={value}
            className={cl.input}
            onChange={e =>
              dispatch(filterSlice.actions.changeFilter(e.target.value))
            }
            id={filterId}
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
