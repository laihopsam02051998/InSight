import React from 'react'
import Layout from '@layout/index'
import Satistic from '@view/homepage/Satistic'
import ListTicket from './ListTicket';

const homepage = () => {
  const carArray = ["100",0,100,false] ;
  const carFunction =(name, age)=> ("carFunction") 
  return (
   
    
      <Layout> 
        {/* <Satistic/>  */}
        <ListTicket carArrays={carArray} carFunction={carFunction} style={{backgroundColor:"red"}}/>
      </Layout> 
  );
}

export default homepage
