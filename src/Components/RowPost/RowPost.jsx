import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {API_KEY, IMAGE_URL } from '../../constants/constants';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RowPost = ({title, isSmall, url, slidesPerView}) => {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId]= useState('');

  const fetchMovies = ()=>{
    axios.get(url).then(res=>setMovies(res.data.results)).catch(error=>error.status)
  }


  useEffect(() => {   
fetchMovies()       
  });

  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  const handleMovieTrailer = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
      if(res.data.results!==0){
        setUrlId(res.data.results[0])
      }else{
        console.log('Trailer Not Found')
      }
      })}

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="posters">
        <Swiper 
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={100}
      slidesPerView={slidesPerView}
      navigation
    >

            {movies.map(movie=>(

<SwiperSlide key={movie.id}><img key={movie.id} className={isSmall?  'small__poster' :'poster'} src={`${IMAGE_URL+movie.backdrop_path}`} alt="poster" onClick={()=>handleMovieTrailer(movie.id)}/></SwiperSlide>

            ))}
               </Swiper>
        </div>
        {
         urlId && <YouTube videoId={urlId.key} opts={opts}/>
        }
        
    </div>
  )
}

export default RowPost