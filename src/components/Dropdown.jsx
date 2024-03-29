import React from "react"
import { useState } from "react"
import arrowUp from '../assets/arrowUp.svg'
import '../styles/dropdown.css'

export default function Dropdown(props){
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return(
        <div className="dropDown">
            <div className="dropDown-btn" onClick={toggle}>
                <h3>{props.title}</h3>
                <img className={open ? 'arrowUp' : 'arrowDown'} src={arrowUp} alt="arrowUp" />
            </div>

            {open &&(
                <div className="dropDown-IsOpen">
                <div className="dropDown-description">
                    <p>{props.description} </p>
                </div>
            </div>
            )}
            
        </div>
    )
}