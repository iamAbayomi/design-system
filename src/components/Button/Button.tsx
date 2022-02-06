import styled from 'styled-components'
import React, { MouseEventHandler } from 'react'
type props ={
    width: string,
    height: string,
    color: string,
    margin: string,
    backgroundColor: string
    buttonText: string,
    onClick? : MouseEventHandler<HTMLButtonElement>
}

// This component aims to determine the reusable component
const Button: React.FC<props> = (props) => {
    return(
        <div>
            <ButtonStyle style={
                    {
                        width: `${props.width}`,
                        height: `${props.height}`,
                        color: `${props.color}`,
                        backgroundColor: `${props.backgroundColor}`,
                        margin: `${props.margin}`,
                        border: `1px solid ${props.backgroundColor}`
                        // border: `1px solid grey`
                    }
            }
            onClick={props.onClick}
            >
                {props.buttonText}
            </ButtonStyle>
        </div>
    )
}


export default Button

const ButtonStyle = styled.button ` 
    display: block;
    border-radius: 100px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 

`