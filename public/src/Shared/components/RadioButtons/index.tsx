import { NoDisable } from "./NoDisable"
import { NoEnable } from "./NoEnable"
import { YesDisable } from "./YesDisable"
import { YesEnable } from "./YesEnable"
import "./styles.scss"
import { useState } from "react"
type RadioButtonProps = {
   
    type:"enable" | "disable" 
    // radioChoose:(status:boolean, type:string)=>void     
}
export const RadioButtons = ({type}:RadioButtonProps)=>{

    const [radio, setRadio] = useState<boolean>(false) 

    const radioChoose = (status:boolean , type:string):React.ReactNode => {

        if(status === true && type==="enable"){
            return <YesEnable />
        }
        if(status === false && type==="enable"){
            return  <NoEnable />
        }
        if(status === true && type==="disable"){
            return <YesDisable />
        }
        if(status === false && type==="disable"){
            return  <NoDisable />
        }
        
    }

  
  
    
    return (
       <div className="radioChoose" onClick={()=>setRadio(!radio)}>
           {radioChoose(radio, type)} 
       </div>
    )
}
