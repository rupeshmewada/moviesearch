import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import searchimg from './assets/search.svg'

import MovieCart from './MovieCart'

function App() {
  const api_key = 'http://www.omdbapi.com/?apikey=fe973b38'

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovie = () => {
    fetch(`${api_key}&s=${search}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.Search)
        setMovies(data.Search)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    searchMovie()
  }, [search]);


  return (
    <>
      <div className='container flex flex-col gap-10'>
        <h1 className='font-extrabold text-5xl lg:text-8xl md:text-8xl ' >Movies</h1>

        <div className='bg-gray-700  w-1/3 m-auto p-5 rounded-xl gap-2 flex flex-col  flex-wrap items-center md:flex-row'>
          <input className='bg-gray-700 border  text-white  w-[90%] ' type="text" placeholder='Enter movie name here' value={search} onChange={(e) => { setSearch(e.target.value) }} />

          <i className="fa-solid fa-magnifying-glass  w-5" onClick={() => searchMovie(search)}><img src={searchimg} alt="" /></i>
        </div>

        <div className='flex flex-wrap gap-5 justify-evenly'>
          {
            movies?.length > 0 ? (
              movies?.map((movie, index) => (
                <MovieCart movies={{ movie, index }} />
              ))
            ) :
              (
                <div className='text-white text-2xl  m-auto p-5'>Enter movie name in search bar to find</div>
              )
          }
        </div>

      </div>

    </>
  )
}

export default App


{/* <h1>api key:  fe973b38 </h1>
      <p> http://www.omdbapi.com/?apikey=[yourkey]&
      </p>
      <a href="http://www.omdbapi.com/?apikey=fe973b38">api </a> */}