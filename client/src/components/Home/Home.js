import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getGenero,
  filerByName,
  filterByGenero,
} from '../../redux/actions';
import Card from '../Card/Card'
import './Home.css'
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';

export default function Home() {

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);


  const allVideogames = useSelector((state) => state.videogames)

  // console.log(allVideogames)

  useEffect(() => {
    dispatch(getVideogames())
    dispatch(getGenero())
  }, [dispatch])

  const max = allVideogames && allVideogames.length / perPage;

  return (
    <div>
      <section>
        <div className='filter-section'>
          <Filter />
          <SearchBar />
        </div>
      </section>

      <section className='card-section'>
        <div className='card-container container'>
          {allVideogames && allVideogames
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map(e => {
              return (
                <Card key={e.id} id={e.id} name={e.name} image={e.image} genres={e.genres} />
              )
            })}
        </div>
      </section>
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  )
}
