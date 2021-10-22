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
