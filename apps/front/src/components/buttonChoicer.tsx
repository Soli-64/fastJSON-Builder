import { useState } from "react"

export type ButtonChoicerProps = {

    buttonProps: {
        name: string
        onClickParam: any
        className: string
    }[]
    onClick: (arg: any) => any

}

export default function ButtonChoicer({ buttonProps, onClick }: ButtonChoicerProps) {

    const [selected, setSelected] = useState('')

    return <div className="btnChoicer">
        {
            buttonProps.map((button, index) => {
                return <button 
                    key={index}
                    className={selected === button.onClickParam ? `selected  ${button.className}` : button.className}
                    onClick={() => { 
                            onClick(button.onClickParam) 
                            setSelected(button.onClickParam)
                            }} >
                    { button.name }
                    </button>
            })
        }
    </div>

}