import React from "react"
import '../styles/tags.css'

export default function Labels({tag}){
    return(
        <>
            <div className="tag-wrapper">
                {tag.map((tag,index)=>{ return (
                    <div className="tag-item" key={index}>
                        <span className="tag-text" key={`${tag}-${index}`}>{tag}</span>
                    </div>
                )})}
            </div>
        </>
    )
}