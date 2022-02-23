import React, {useState} from "react";
import s from './OnOff.module.css';
export type colorType = {
    color: boolean
    setColor: ()=> void
}

export  const OnOff = (props:colorType) => {


    let onStyle = {backgroundColor: props.color? 'green' : 'white'}
    let offStyle = {backgroundColor: props.color? 'white' : 'red'}
    let indicatorStyle = {backgroundColor: props.color? 'green' : 'red'}

   return (
       <div><button onClick={props.setColor} style={onStyle}>on</button>
           <button onClick={props.setColor} style={offStyle}>off</button>
           <button style={indicatorStyle}>indicator</button>
       </div>
   )
}