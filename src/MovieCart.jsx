import React from 'react';

const MovieCart = ({ movies }) => {

    return (
        <div>

            <div key={movies.index} className='bg-gray-700 w-72 h-[550px] text-white rounded-lg text-left'>
                <div className='rounded '>
                    <img className='rounded-t-lg h-[410px] w-full' src={movies.movie.Poster} alt="" />
                </div>
                <div className='p-5 '>
                    <div className='text-left font-light'>
                        <p>{movies.movie.Type}</p>
                    </div>
                    <div className='font-bold'>
                        <p>{movies.movie.Title}</p>
                    </div>
                    <div>
                        <p>{movies.movie.Year}</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MovieCart;
