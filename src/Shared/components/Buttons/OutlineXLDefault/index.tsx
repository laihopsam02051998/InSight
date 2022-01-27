import React from 'react'
import"./styles.scss"

type OutlineXLDefaultProps={
    name:string
}
export const OutlineXLDefault=({name}:OutlineXLDefaultProps)=>{
    return (
       <div>
        <button className="outlineXLDefault"><span>{name}</span></button></div>
    )
}