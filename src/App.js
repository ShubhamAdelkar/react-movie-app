import React from 'react'
import { useEffect } from 'react';
import './App.css';
import search from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=7d57d30b';

function App() {

    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);
    return (
        <div className='app'>
            <h1>MovieNation</h1>

            <div className='search'>
                <input placeholder='Search for movies' value="Superman" onChange={() => {

                }}/>
                <img src={search} alt='search'/>
            </div>
        </div>
    );
}

export default App