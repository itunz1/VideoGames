import React, { useState } from 'react'
import { searchByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInput (e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(searchByName(name));
        setName('')
    }

  return (
    <div>
        <input name='name' onChange={(e) => handleInput(e)} type='text' placeholder='VideoGame' value={name}/>
        <button onClick={(e) => handleSubmit(e)} type='submit'>Buscar</button>
    </div>
  )
}
