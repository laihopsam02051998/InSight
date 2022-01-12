import React from 'react'
import { SelectedOff } from './SelectedOff'
import { SelectedOn } from './SelectedOn'

type tagProps = {
    status:boolean
    title: string
    icon : string
}
export const Tags=({status, title, icon}:tagProps)=>{
    
    return (
        status ? 
        <SelectedOn title={title} icon={icon} /> : 
        <SelectedOff  title={title} icon={icon} />
    )
}