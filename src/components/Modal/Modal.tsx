import React from "react"
type props= {
    children: any
}

const Modal: React.FC<props> = (props) => {
    return(
        <div className="modal-container">
            <div className="modal show-modal">
                <div className="modal-content">
                    <span className="close-button">x</span>
                        {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal


