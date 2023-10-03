import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getVideogamesDetail, getVideogames, getMostPopular } from '../../redux/actions';
import './VideogameDetail.css'


export default function VideogameDetail() {

  const dispatch = useDispatch();
  let { id } = useParams()
  const gamesDetail = useSelector((state) => state.detail);
  const gameShots = useSelector((state) => state.videogames);
  

  useEffect(() => {
    dispatch(getVideogames())
    dispatch(getMostPopular())
    dispatch(getVideogamesDetail(id))
  }, [dispatch, id])
  
  const arr = []
  
  gameShots?.results?.map((e)=>{
    if(id === e.id){
      console.log('hola')
    }
   return null;
})


  
  

      
  return (
    <div>
      <div className='detail-container container'>
        <div>
          <img src={gamesDetail.background_image} alt='img not found' />
        </div>

        <div className='text-box'>
          <h3 className='heading-tertiary'>{gamesDetail.name}</h3>
          <ul className='list'>
            <li className='list-item'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="list-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
              {gamesDetail.released}</li>
            <li className='list-item'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="list-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
              {gamesDetail.rating}</li>
            <li className='list-item'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="list-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
            </svg>
              {gamesDetail?.platforms?.map(e => (
                <p>{e.platform.name}</p>
              ))}</li>
            <li className='list-item'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="list-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
              {gamesDetail?.genres?.map(e => (
                <p>{e.name}</p>
              ))}</li>
          </ul>

        </div>
        <div className='description'>
          <h3 className='heading-tertiary about'>ABOUT THE GAME</h3>
          <div dangerouslySetInnerHTML={{ __html: gamesDetail.description }} />
        </div>
      </div>

      <div className='container'>
        {arr?.map((e, i) => {
          return (
            <div key={i} className='screenshots-container'>
              <h3 className='heading-tertiary about screenshots'>SCREENSHOTS</h3>
              <figure className='screenshot-item'>
              <img src={e[1]} alt='not found' />
              </figure>
              <figure className='screenshot-item'>
              <img src={e[2]} alt='not found' />
              </figure>
              <figure className='screenshot-item'>
              <img src={e[3]} alt='not found' />
              </figure>
              <figure className='screenshot-item'>
              <img src={e[4]} alt='not found' />
              </figure>
              <figure className='screenshot-item'>
              <img src={e[5]} alt='not found' />
              </figure>
              <figure className='screenshot-item'>
              <img src={e[6]} alt='not found' />
              </figure>
            </div>
          )
        })
        }
      </div>
    </div>
  )
};
