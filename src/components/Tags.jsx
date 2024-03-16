import React from "react"


export default function Labels({tag}){
    return(
        <div className="tag-wrapper">
            {tag.map((tag,index)=>{return (
                <div className="tag-item" key={index}>
                    <span key={`${tag}-${index}`}>{tag}</span>
                </div>
            )
        })}
        </div>
    )
}