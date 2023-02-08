import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    filerByName,
    filterByGenero,
    filterByPlatform,
} from '../../redux/actions';
import './Filter.css'



export default function Filter() {

    const dispatch = useDispatch()
    const gamesFilter = useSelector((state) => state.filter)

    const [,setOrden] = useState('')


    function handleName(e) {
        e.preventDefault();
        dispatch(filerByName(e.target.value));
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleGenero(e) {
        e.preventDefault();
        dispatch(filterByGenero(e.target.value));
    }

    function handlePlatform(e) {
        e.preventDefault();
        dispatch(filterByPlatform(e.target.value));
    }


    const objT = gamesFilter.map(e => e.genres);
    const NewArr = [];
    objT.map((e) => e.forEach((l) => NewArr.push(l.name ? l.name : l)));
    const genres = [...new Set(NewArr)]

    const objP = gamesFilter.map(e => e.platforms);
    const ArrNew = [];
    objP.map((e) => e.forEach((l) => ArrNew.push(l.name ? l.name : l)));
    const platforms = [...new Set(ArrNew)]

    return (
        <div className='filters'>
            <div>
                <label>Order by name</label>
                <select onChange={(e) => {handleName(e)}}>
                    <option value="abc">a-z</option>
                    <option value="zxy">z-a</option>
                </select>
            </div>

            <div>
                <label>Ordenar by genres</label>
                <select onChange={e => handleGenero(e)}>
                    <option value="all">All</option>
                    {genres?.map((e, index) => (
                        <option key={index} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Order by platforms</label>
                <select onChange={e => handlePlatform(e)}>
                    <option value="all">All</option>
                    {platforms?.map((e, index) => (
                        <option key={index} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
