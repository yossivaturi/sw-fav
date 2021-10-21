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
  liked?: boolean | undefined;
}

const App = () =>{
  
  const [filmsData, setFilmsData] = useState<Array<IFilm> | []>([]);
  const [chosenFilm, setChosenFilm] = useState<IFilm | null>(null);
  const [filmsArr, setFilmsArr] = useState<Array<IFilm>>([]);
  // const [isClick, setClick] = useState<boolean | undefined>(false);
  

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
    
  },[])

  useEffect(() => {
    initFilmsArr(filmsData);
  }, [filmsData])

  useEffect(() => {
      // console.log(chosenFilm);
      console.log(filmsArr);
      
  },[chosenFilm])

  const handleClick = (event: React.SyntheticEvent<HTMLInputElement>, id: number): void => {
    // console.log(event.target.value);
    console.log(id);
    console.log(filmsArr);
    setChosenFilm(filmsArr[id]); 
    // setClick(filmsArr[id].liked)
  }
  
  const handleLike = (id: number | undefined, isclick: boolean | undefined) : void => {
    // setClick(isclick);
    console.log("masho");
    
    if(id){
      
      filmsArr[id].liked = isclick;
      setChosenFilm(filmsArr[id]); 
      
    }
    
  }



  return ( !filmsData.length ?
            <h1>Loading</h1> :
            <>
            <TOC filmsData={filmsData} handleClick={handleClick} />
            <ChosenFilmDetails 
            filmsArr={filmsArr} 
            chosenFilm={chosenFilm} 
            handleLike={handleLike}
            liked={localStorage.getItem(`${chosenFilm?.episode_id}`) === 'true' ? true : false}
            />
            </>
  );
}

export default App;
