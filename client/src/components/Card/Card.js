import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'



export default function Card({ id, name, image, genres }) {

  // let genreVideogames = genres.map((e, index) => {
  //     const nameGenre = e.name ? e.name : e;
  //     return <p key={index}>{nameGenre}</p>;
  //   });


  return (
    <Link to={`/videogames/${id}`}>
      <div className='card'>
        <img src={image} alt="img not found" />
        <p className='card-tittle'><strong>{name}</strong></p>
        <span className='genres'>{genres?.join(' - ')}</span>
      </div>
    </Link>
  )
}
