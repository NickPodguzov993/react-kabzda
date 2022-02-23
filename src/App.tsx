import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Raiting, ratingValueType} from "./Components/Raiting";
import {UnControlledOnOff} from "./Components/OnOff/UnControlledOnOff";
import {UnControlledAccordion} from "./Components/Accordion/UnControlledAccordion";
import {OnOff} from "./Components/OnOff/OnOff";
import Select from 'react-select';



function App() {

    let [ratingValue, setRatingValue] = useState<ratingValueType>(4)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [color, setColor] = useState(false)

    const onClickfffff = ()=> {
        alert('nadalllll')
    }

    return (
        <div>
            <OnOff color={color}
                   setColor={() => {
                       setColor(!color)
                   }}/>
            <Accordion title={'Menu'}
                       onClick={onClickfffff}
                       items={[{title: 'Koluan', value: 1},
                           {title: 'Nastya', value: 2}]}
                       collapsed={!collapsed}
                       setCollapsed={() => {
                           setCollapsed(!collapsed)
                       }
                       }/>
            <Accordion title={'Users'}
                       onClick={onClickfffff}
                       items={[]}
                       collapsed={collapsed}
                       setCollapsed={() => {
                           setCollapsed(!collapsed)
                       }
                       }/>
            <Raiting ratingValue={ratingValue} setValue={setRatingValue}/>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
            <UnControlledAccordion title={'Menu222'}/>
            <UnControlledAccordion title={'Users222'}/>
            <UncotrolledInput/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
           <MyComponents/>


        </div>
    );
}


const MyComponents = ()=> {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div><Select options={options}/></div>
    )
}

const UncotrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value : {value}
        </div>
    )
}

const ControlledInput = () => {
    const [parent, setParent] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParent(e.currentTarget.value)
    }

    return (
        <input value={parent} onChange={onChange}/>
    )
}
const ControlledCheckbox = () => {
    const [parent, setParent] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParent(e.currentTarget.checked)
    }

    return (
        <input type={"checkbox"} checked={parent} onChange={onChange}/>
    )
}
const ControlledSelect = () => {
    const [parent, setParent] = useState<string | undefined>('3')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParent(e.currentTarget.value)
    }

    return (
        <select value={parent} onChange={onChange}>
            <option value="1">Moscow</option>
            <option value="2">Minsk</option>
            <option value="3">Kiev</option>
        </select>
    )
}

/*type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any)=> void
}

export const Select222 = (props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(m=> <div>{m.title}</div>)}
        </div>
    )
}*/



export default App;
