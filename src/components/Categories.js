import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { check } from '../redux/categories/categories';

const Categories = ({ categories }) => {
  const dispatch = useDispatch();

  const showStatus = () => {
    dispatch(check('status check'));
  };
  return (
    <>
      <button type="button" onClick={() => showStatus()}>Check status</button>
      {categories}
    </>
  );
};

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string],
  )),
};

export default Categories;
