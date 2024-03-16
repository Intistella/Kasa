import React from "react"
import { useState } from "react"
import arrowUp from '../assets/arrowUp.svg'

export default function Dropdown(props){
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return(
        <div className="dropdown">
            <div className="dropbtn" onClick={toggle}>
                <img src={arrowUp} alt="arrowUp" />
            </div>
            <div className={`dropdown-content ${open? "show" : ""}`}>
                <div>
                    <p>{props.description} </p>
                </div>
            </div>
        </div>
    )
}