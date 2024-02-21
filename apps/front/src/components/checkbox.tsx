import { useState } from "react"

type CheckboxProps = {
    label?: string
    pChecked: boolean
    id?: string
    name?: string
    onChange?: () => void
}


export default function Checkbox({ label, pChecked, id, name, onChange }: CheckboxProps) {

    const [checked, setChecked] = useState(pChecked)

    return <div className="fx fx__ctr fx__row">
        <p>{ label }</p>
        <input type="checkbox" 
               checked={checked} 
               name={name ? name : ''} 
               id={id ? id : ''} 
               onChange={
                onChange ?
                onChange :
                () => setChecked(!checked)}
        />
    </div>

}
