import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    let returnArr = []
    for(let i = 0; i < 500; i++){
        returnArr.push(1)
    }
    
    return (
        <div>
            {returnArr.map(sp=>{return <Spam/>})}
        </div>
    )
}

export default Spamalot

