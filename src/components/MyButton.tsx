import React from 'react'
import Button from 'react-bootstrap/Button'


interface AppProps {
    value: string;
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, id: number) => void;
    listid: number;
  }

const MyButton = (props: AppProps) => {
    return (
        <div>
            <Button variant="outline-warning" onClick={e => props.handleClick(e, props.listid)} >
                {props.value}
            </Button>
        </div>
    )
}
export default MyButton;