import React, { useState } from 'react'
import "./styles.css"

const Home = () => {
    const [popUp, setPopUp] = useState(false)

    const handlePopUp = ()=> {
        setPopUp(!popUp)
    }

 const ModalPopUp = ({ header, body, footer, close }) => {
        return <div className="modal_container">
            <div className="header">
                <span>{header}</span>
                <span className="close" onClick={handlePopUp}> {close}</span>
            </div>
            <div className="body">
                {body}
            </div>
            <div className="footer">
                {footer}
            </div>
        </div>
    }
 
    return (
        <div className='wrapper'>
            <button onClick={handlePopUp}> Handle Pop-Up Here </button>
            {popUp && <ModalPopUp
                header="This is the Header"
                body="This is the body"
                footer="This is the footer"
                close="&times;"
            />}
        </div>
    )
}

export default Home
