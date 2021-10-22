import React, { ReactElement } from 'react'
import './TOC.css';
import { IFilm } from '../App';
import MyButton from './MyButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


interface AppProps {
    filmsData: Array<IFilm>
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent> , id: number) => void;
  }

const TOC = (props: AppProps) => { 
  
    return (

      <div className="toc">
        <ButtonGroup vertical>
              {props.filmsData.map((film: { episode_id: number; title: string;})=>
                                <div className="mybutton"> 
                                  <MyButton  
                                    listid={film.episode_id}
                                    handleClick={props.handleClick} 
                                    value={film.title}
                                  /> 
                                </div>      
                              )}        
        </ButtonGroup>
    </div>

    )
}

export default TOC;
