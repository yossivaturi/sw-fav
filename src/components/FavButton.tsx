import React, {useState} from 'react'
// @ts-ignore
import Heart from "react-animated-heart"
interface AppProps {
   

  }

const FavButton  = (props: AppProps) => {
  const [isClick, setClick] = useState(false);
  return (
    <div>
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  )
}

export default FavButton;
