import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  getVideogames,
  getGenero,
  filerByName,
  filterByGenero, } from '../../redux/actions';
import Card from '../Card/Card'
import './Home.css'
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

export default function Home() {

  const dispatch = useDispatch();

  const allVideogames = useSelector((state) => state.videogames)

  // console.log(allVideogames)

  useEffect(() => {
    dispatch(getVideogames())
    dispatch(getGenero())
  }, [dispatch])

  return (
    <section>
        <h1>VIDEOGAMES</h1>
        <div>
          <Filter/>
          <SearchBar/>
        </div>
      <div className='card-container'>
        {allVideogames && allVideogames.map(e => {
          return (
            <Card key={e.id} id={e.id} name={e.name} image={e.image} genres={e.genres} />
          )
        })}
      </div>
    </section>
  )
}
