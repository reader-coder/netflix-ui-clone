import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, IMAGE_URL} from '../../constants/constants'

const Banner = () => {
  

  const [movie, setMovie] = useState()


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then(res=> setMovie(res.data.results[0]))
        
    }, [])
    

  return (
    <div
    style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ""})` }} className='banner'>
             
        <div className='content'>
            <h1 className='title'>{movie? movie.title : ''}</h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>+ My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview : ''}</h1>
        </div>
        <div className='fade__bottom'></div>
    </div>
  )
}

export default Banner