import React, {Dispatch, SetStateAction, useState} from "react";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5


export type ratingPropsType = {
   ratingValue: ratingValueType
    setValue: (value: ratingValueType)=> void
}

export const Raiting = (props: ratingPropsType) => {





    return (
        <div>
            <Star selected={props.ratingValue>0} setValue={props.setValue} value={1}/>
            <Star selected={props.ratingValue>1} setValue={props.setValue} value={2}/>
            <Star selected={props.ratingValue>2} setValue={props.setValue} value={3}/>
            <Star selected={props.ratingValue>3} setValue={props.setValue} value={4}/>
            <Star selected={props.ratingValue>4} setValue={props.setValue} value={5}/>



            </div>
    )
}

type propsType = {
    selected: boolean
    setValue: (value: ratingValueType)=> void
    value: ratingValueType

}

export const Star = (props: propsType) => {
     return  <span onClick={()=>props.setValue(props.value)}>{props.selected? <b>star </b>: 'star '}</span>

}