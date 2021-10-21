import React, { ReactElement } from 'react'
import './TOC.css';
import { IFilm } from '../App';
import Input from './Input';

interface AppProps {
    filmsData: Array<IFilm>
    handleClick: (event: React.SyntheticEvent<HTMLInputElement>, id: number) => void;

  }


// const TOC = ({filmsData}: {filmsData: Array<IFilm>}, {handleClick}: IHandleClick ) => {
const TOC = (props: AppProps) => { 
  
    return (
        <>
        {console.log(props.filmsData)}
        
        <div className="toc">
            
              {props.filmsData.map(
                  (film: { 
                      episode_id: number;
                      title: string;
                        }) => <Input 
                      
                                listid={film.episode_id}
                                handleClick={props.handleClick} 
                                value={film.title}


                              />
                                   
                              )}
                  
            
        </div>
        </>
    )
}

export default TOC;
