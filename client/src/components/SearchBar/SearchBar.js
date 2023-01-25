import React, { useState } from 'react'
import { searchByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [state, setState] = useState('');

    function handleInput (e) {
        e.preventDefault();
        setState(e.target.value);
    };

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(searchByName(state));
        setState('')
    }

  return (
    <div>
        <input name='name' onChange={(e) => handleInput(e)} type='text' placeholder='VideoGame' value={state} />
        <button onClick={(e) => handleSubmit(e)} type='submit'>Buscar</button>
    </div>
  )
}
