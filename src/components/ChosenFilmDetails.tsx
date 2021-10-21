import React from 'react'
import PropTypes from 'prop-types'
import './ChosenFilmDetails.css';
import { IFilm } from '../App';
import FavButton from './FavButton'
interface AppProps {
    chosenFilm: IFilm | null
    filmsArr: Array<IFilm>
  }

const ChosenFilmDetails = (props: AppProps) => {
    return (
        <>
        <div className="chosen">
            <h1>{props.chosenFilm?.title}</h1>
            <p>{props.chosenFilm?.opening_crawl}</p>
            <div>
                <FavButton />
            </div>
        </div>

        </>
    )
}

ChosenFilmDetails.propTypes = {

}

export default ChosenFilmDetails
