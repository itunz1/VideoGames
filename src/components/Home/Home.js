import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getGenero,
} from '../../redux/actions';
import Card from '../Card/Card'
import './Home.css'
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import HeroSection from '../HeroSection/HeroSection';
import Carousel from '../Carousel/Carousel';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoPerson } from "react-icons/go";





export default function Home() {

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  

  const allVideo = useSelector((state) => state.videogames)


  useEffect(() => {
    dispatch(getVideogames())
    dispatch(getGenero())
  }, [dispatch])

  const max = allVideo && allVideo.length / perPage;

  return (
    <div>
      <header className='hero-section'>
        <HeroSection />
      </header>

      <section className='carousel-section container'>
        <Carousel/>
      </section>

      <section className='pagination-section'>
      <Pagination page={page} setPage={setPage} max={max} />
      </section>

      <section>
        <div className='filter-section'>
          {/* <Filter /> */}
          {/* <SearchBar /> */}
        </div>
      </section>

      <section className='card-section'>
        <div className='card-container container'>
          {allVideo?.results?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map(e => {
              return (
                <Card key={e.id} id={e.id} name={e.name} image={e.background_image} genres={e.genres} />
              )
            })}
        </div>
      </section>

      <footer className='footer-section container'>
        <div>
          <h4>ABOUT ME</h4>
        </div>
        <div className='icon-container'>
          <a target='_blank' rel='noreferrer' href='https://github.com/itunz1'><FaGithub /></a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jose-lezama/'><FaLinkedin /></a>
          <a target='_blank' rel='noreferrer' href='https://portfolio-4b57a.web.app/'><GoPerson /></a>
        </div>
      </footer>
    </div>
  )
}
