import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesDetail } from '../../redux/actions';
import './VideogameDetail.css'


export default function VideogameDetail(props) {

  const dispatch = useDispatch();
  const gamesDetail = useSelector((state) => state.detail);

  const id = props.match.params.id

  useEffect(() => {
    dispatch(getVideogamesDetail(id))
  }, [dispatch, id])

  return (
    <section>
      
      <div className='detail-container'>
        <h3>{gamesDetail.name} #{gamesDetail.id}</h3>
        <img src={gamesDetail.image} alt='img not found'/>
        <p>{gamesDetail.released}</p>
        <p>{gamesDetail.rating}</p>
        <p>{gamesDetail.platforms}</p>
        <p>{gamesDetail.genres?.join(' - ')}</p>
        <div dangerouslySetInnerHTML={{__html: gamesDetail.description}} /> 
      </div>
      
    </section>
  )
};
