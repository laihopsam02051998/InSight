import React from 'react';
import { OpenComponent } from './OpenComponent';
import { EndComponent } from './EndComponent';
import { ComingComponent } from './ComingComponent';
import './styles.scss';

type StatusProps ={
    status:"opening"|"finish"|"coming"
}

 const Status =({status}: StatusProps)=>{

    const statusChooses =(statusChoose:string)=>{
        if(statusChoose==="opening"){
            return <OpenComponent />
        }
        if(statusChoose==="finish"){
            return <EndComponent />
        }
        if(statusChoose==="coming"){
            return <ComingComponent />
        }
    }

    return (
        <div>
            {statusChooses(status)}
        </div>
    )
    
}

export default Status