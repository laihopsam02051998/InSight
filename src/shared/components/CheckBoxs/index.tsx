import React, { useState } from "react"
import { NoEnable } from "./NoEnable"
import { YesEnable } from "./YesEnable"

type AuthChoose ={
    // isChoose:boolean 
    CheckBoxType:"disable" | "enable"
}

 const CheckBoxs = ({CheckBoxType}: AuthChoose) =>{
  const [isChoose, setIsChoose] = useState<boolean>(false)
    return(
        <div  onClick={():void=>setIsChoose(!isChoose)} style={{position:"relative"}}>
        {CheckBoxType ==='enable'? (isChoose?   <YesEnable /> :  <NoEnable />): "khong"}
        </div>
    )
}

export default CheckBoxs