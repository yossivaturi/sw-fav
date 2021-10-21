import React from 'react'

interface AppProps {
    value: string;
    handleClick: (event: React.SyntheticEvent<HTMLInputElement>, id: number) => void;
    listid: number;

  }

const Input = (props: AppProps) => {
    return (
        <div>
            <input 
                                
                type="button" 
                onClick={e => props.handleClick(e, props.listid)} 
                value={props.value}
                
            />
        </div>
    )
}
export default Input;