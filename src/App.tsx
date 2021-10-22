import React, { useEffect, useState } from 'react';
import './App.css';
import TOC from './components/TOC';
import ChosenFilmDetails from './components/ChosenFilmDetails';
import Spinner from 'react-bootstrap/Spinner'

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
  const [isLiked, setLiked] = useState(false);
  

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

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, id: number): void => {
    setChosenFilm(filmsArr[id]);
    const liked = localStorage.getItem(`${id}`) === 'true';
    setLiked(liked);
  }

  const handleLike = () => {
    const liked = !isLiked;
    setLiked(liked);
    localStorage.setItem(`${chosenFilm?.episode_id}`, `${liked}`);
}

  return ( !filmsData.length ?
              <div className="App">
                <div className="outer">
                  <Spinner className="inner" variant="warning"  animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </div> 
              :
              <div className="App">
              <TOC 
                filmsData={filmsData} 
                handleClick={handleClick} 
              />
              <ChosenFilmDetails 
                filmsArr={filmsArr} 
                chosenFilm={chosenFilm}
                isLiked={isLiked}
                handleLike={handleLike}
              />
            </div>
            
  );



}

export default App;
