import React from 'react';
import { useDispatch } from 'react-redux';
import {check} from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  
  const showStatus = () => {
    dispatch(check());    
  }
  return(
    <button type="button" onClick={() => showStatus()}>Check status</button>
    );
}

export default Categories;
