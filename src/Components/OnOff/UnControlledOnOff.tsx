import React, {useState} from "react";
import s from './OnOff.module.css';
//type colorType = {
  //  color: boolean
//}

export  const UnControlledOnOff = () => {


    let [color, setColor] = useState(false)

    let onStyle = {backgroundColor: color? 'green' : 'white'}
    let offStyle = {backgroundColor: color? 'white' : 'red'}
    let indicatorStyle = {backgroundColor: color? 'green' : 'red'}

   return (
       <div><button onClick={()=> {setColor(true)}} style={onStyle}>on</button>
           <button onClick={()=> {setColor(false)}} style={offStyle}>off</button>
           <button style={indicatorStyle}>indicator</button>
       </div>
   )
}