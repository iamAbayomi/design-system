import styled from "styled-components"

type props = {
    name: string,
    imageSrc: string
}

const AvatarandName : React.FC<props> = (props) =>{
    return(
        <div className="display-flex">
            <AvatarImage src={props.imageSrc}  />
            <p>{props.name}</p>
        </div>
    )
}

export default AvatarandName

const AvatarImage = styled.img`
    margin: 0px 20px 0px 0px;
    height: 40px;
    border-radius: 50%;
`