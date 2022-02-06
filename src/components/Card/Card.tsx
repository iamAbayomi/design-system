import styled from 'styled-components'

type props ={
    children?: any
}

const Card: React.FC<props> = (props) => {
    return(
        <div>
            <CardBody>
                {props.children}
            </CardBody>
        </div>
    )
}

export default Card


const CardBody = styled.div`
    background-color: white;
    padding: 20px 20px 10px 30px;
    border-radius: 10px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;  
`