import React from "react";

type ItemType = {
    title: string
    value: any
}

type propsType = {
    title: string
    collapsed: boolean
    setCollapsed: ()=> void
    items: ItemType[]
    onClick: (value:any)=> void
}

export const Accordion = (props: propsType) => {
    return (
        <div >
            <AccordionTitle   title={props.title}
                            setCollapsed={props.setCollapsed}/>
            {props.collapsed &&  <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type propsBodyType = {
    items: ItemType[]
    onClick: (value:any)=> void
}

export const AccordionBody = (props: propsBodyType) => {
    return (
        <div>
            {props.items.map((m, index)=>
                <li key={index} onClick={()=> {props.onClick(m.value)}}>{m.title}</li>)}
        </div>
    )
}

type propsTypeTitle = {
    title: string
    setCollapsed: ()=> void

}

export const AccordionTitle = (props: propsTypeTitle) => {
    return (
        <div>
            <h3 onClick={props.setCollapsed}>{props.title}</h3>
        </div>
    )
}
