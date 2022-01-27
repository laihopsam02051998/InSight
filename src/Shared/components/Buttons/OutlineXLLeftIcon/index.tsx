import React from 'react'
import"./styles.scss"


type OutlineXLLeftIconProps={
    name:string
}
 const OutlineXLLeftIcon=({name}:OutlineXLLeftIconProps)=>{
    return (
        <div >
 <button className="outlinelXLLeftIcon">
            <div>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span>{name}</span>
            </button>
        </div>
       
    )
}

export default OutlineXLLeftIcon