import styled from "styled-components"
import React from "react"


export interface props {
    imageSrc: string
}

const Avatar: React.FC<props> = (props) =>{
   return(
        <div>
            <AvatarImage src={props.imageSrc}  />
        </div>
    ) 
}

export default Avatar



const AvatarImage = styled.img`
    margin: 0px 20px 0px 0px;
    height: 40px;
    border-radius: 50%;
`