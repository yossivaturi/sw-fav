import React, { useEffect, useState } from 'react';
import './App.css';
import TOC from './components/TOC';
import ChosenFilmDetails from './components/ChosenFilmDetails';


export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  created: string;
  edited: string;
  url: string;
}

const App = () =>{
  
  const [filmsData, setFilmsData] = useState<Array<IFilm> | []>([]);
  const [chosenFilm, setChosenFilm] = useState<IFilm | null>(null);
  const [filmsArr, setFilmsArr] = useState<Array<IFilm>>([]);
  //index = episode_id
  //element = the movie details obj
  // let filmsArr: Array<IFilm> = [];
  

//INITIALIZE THE filmsArr WITH {index = episode_id ,element = the movie details obj}
  const initFilmsArr = (films: Array<IFilm>): void => {
    let filmsArrTemp: Array<IFilm> = [];
    for(let i=0; i<films.length; i++){
      filmsArrTemp[films[i].episode_id] = films[i];
    }
    setFilmsArr(filmsArrTemp);
    
  }

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
    .then(res => res.json())
    .then(res =>  setFilmsData(res.results))
    .then(() => initFilmsArr(filmsData))
  },[])


  useEffect(() => {
      // console.log(chosenFilm);
      // console.log(filmsArr);
      
  },[chosenFilm])

  const handleClick = (event: React.SyntheticEvent<HTMLInputElement>, id: number): void => {

    // console.log(event.target.value);
    // console.log(filmsHT.get(event.target.value));
    // console.log(id);
    
    console.log(filmsArr);
    
    
    

    setChosenFilm(filmsArr[id]);
    
  }
  


  return ( !filmsData.length ?
            <h1>Loading</h1> :
            <>
            <TOC filmsData={filmsData} handleClick={handleClick} />
            <ChosenFilmDetails filmsArr={filmsArr} chosenFilm={chosenFilm} />
            </>
  );
}

export default App;
