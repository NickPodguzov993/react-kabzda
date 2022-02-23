import React, {useState} from "react";

type propsType = {
    title: string
   // collapsed: boolean
}

export const UnControlledAccordion = (props: propsType) => {


    let [collapsed, setCollapsed] = useState(false)

    let unCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div >
        <AccordionTitle toggle={unCollapsed}
                        title={props.title}/>
            {collapsed &&  <AccordionBody/>}
        </div>
    )
}

export const AccordionBody = () => {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

type propsTypeTitle = {
    title: string
    toggle: ()=> void
}

export const AccordionTitle = (props: propsTypeTitle) => {
    return (
        <div>
            <h3 onClick={()=>props.toggle()}>{props.title}</h3>
        </div>
    )
}
