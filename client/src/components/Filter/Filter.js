import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getVideogames,
    getGenero,
    filerByName,
    filterByGenero,
    filterByPlatform,
} from '../../redux/actions';



export default function Filter() {

    const dispatch = useDispatch()
    const gamesFilter = useSelector((state) => state.filter)

    // const [, setFilter] = useState("");

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenero());
    }, [dispatch])

    function handleName(e) {
        e.preventDefault();
        dispatch(filerByName(e.target.value));
        // setFilter(e.target.value)
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
        <div>
            <label className='label'>Ordernar por nombre</label>
            <select className='selector-az' onChange={e => { handleName(e) }}>
                <option value="abc">A-Z</option>
                <option value="zxy">Z-A</option>
            </select>

            <label className='label'>ordenar por tipos</label>
            <select className='selector-az' onChange={e => handleGenero(e)}>
                <option value="all">All</option>
                {genres?.map((e, index) => (
                    <option key={index} value={e}>
                        {e}
                    </option>
                ))}
            </select>

            <label className='label'>ordenar por plataforma</label>
            <select className='selector-az' onChange={e => handlePlatform(e)}>
                <option value="all">All</option>
                {platforms?.map((e, index) => (
                    <option key={index} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    )
}
