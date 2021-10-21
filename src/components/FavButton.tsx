import React, {useState, useEffect} from 'react'
// @ts-ignore
import Heart from "react-animated-heart"
interface AppProps {
   epid: number | undefined;
   isClick: boolean | undefined;
   handleLike: (id: number | undefined, isclick: boolean | undefined) => void;
  
  }

const FavButton  = (props: AppProps) => {
  
  const [isClick, setClick] = useState(false);
  
  useEffect(() => {
    let click = localStorage.getItem(`${props.epid}`) === 'true' ? true : false
    setClick(click);
  },[]);

  useEffect(() => {
    localStorage.setItem(`${props.epid}`, `${isClick}`);
    
  },[isClick]);

  return (
    <div>
      <Heart 
      isClick={isClick} 
      onClick={() => {
        setClick(!isClick);
        // props.handleLike(props.epid, props.isClick);
      }}/>
    </div>
  )
}

export default FavButton;
