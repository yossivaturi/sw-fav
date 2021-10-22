import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ChosenFilmDetails.css';
import { IFilm } from '../App';
// @ts-ignore
import Heart from "react-animated-heart"

interface AppProps {
    chosenFilm: IFilm | null
    filmsArr: Array<IFilm>
    isLiked: Boolean
    handleLike: () => void
  }

const ChosenFilmDetails = (props: AppProps) => {
    const [liked, setLiked] = useState(props.isLiked);

    return (
        <>
        <div className="chosen">
            <h1>{props.chosenFilm?.title}</h1>
            <p>{props.chosenFilm?.opening_crawl}</p>
            <div>
                <Heart
                    isClick={props.isLiked} 
                    onClick={props.handleLike}/>
            </div>
        </div>

        </>
    )
}

export default ChosenFilmDetails
