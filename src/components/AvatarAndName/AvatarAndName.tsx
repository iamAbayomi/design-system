import styled from "styled-components"

type props = {
    name: string,
    imageSrc: string
}

const AvatarandName : React.FC<props> = (props) =>{
    return(
        <div className="display-without-space">
            <AvatarImage src={props.imageSrc}  />
            <Name>{props.name}</Name>
        </div>
    )
}

export default AvatarandName

const AvatarImage = styled.img`
    margin: 0px 10px 0px 0px;
    height: 40px;
    border-radius: 50%;
`

const Name = styled.p`
    margin: 10px 0px 10px 0px;
`