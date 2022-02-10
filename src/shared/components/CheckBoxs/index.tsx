import React, { useState } from "react"
import { NoEnable } from "./NoEnable"
import { YesEnable } from "./YesEnable"
import './styles.scss'
type AuthChoose ={
    // isChoose:boolean 
    CheckBoxType:"disable" | "enable"
    name?:string
}

 const CheckBoxs = ({CheckBoxType, name}: AuthChoose) =>{
  const [isChoose, setIsChoose] = useState<boolean>(false)
    return(
        <div  onClick={():void=>setIsChoose(!isChoose)} style={{position:"relative"}}>
        {CheckBoxType ==='enable'? (isChoose?   <YesEnable /> :  <NoEnable />): "khong"}
        <p id="checkboxName">{name}</p>
        </div>
    )
}

export default CheckBoxs