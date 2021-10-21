import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ChosenFilmDetails.css';
import { IFilm } from '../App';
import FavButton from './FavButton'
interface AppProps {
    chosenFilm: IFilm | null
    filmsArr: Array<IFilm>
    handleLike: (id: number | undefined, isclick: boolean | undefined) => void;
  }

const ChosenFilmDetails = (props: AppProps) => {



    return (
        <>
        <div className="chosen">
            <h1>{props.chosenFilm?.title}</h1>
            <p>{props.chosenFilm?.opening_crawl}</p>
            <div>
                <FavButton 
                    epid={props.chosenFilm?.episode_id} 
                    isClick={props.chosenFilm?.liked} 
                    handleLike={props.handleLike} 
                />
            </div>
        </div>

        </>
    )
}

export default ChosenFilmDetails
