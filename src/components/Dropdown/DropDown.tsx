import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

type props = {
    menuTitle: '',
    menuItem: any,
    onClick? : any
    //string[]
}

const DropDown: React.FC<props> = (props) => {
    return(
        <div>
            <Dropdown className="center">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {props.menuTitle}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.menuItem.map((item : any) => (
                        <Dropdown.Item href=" " onClick={props.onClick}>{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}


export default DropDown