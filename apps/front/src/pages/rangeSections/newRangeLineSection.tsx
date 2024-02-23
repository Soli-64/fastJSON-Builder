import { useState } from "react"
import { addKeyValue } from "../../scripts/functions/dataHandling"
import { resetInputs, valueOf } from "../../scripts/functions/dom"
import ButtonChoicer from "../../components/buttonChoicer"


type NewRangeLineSectionProps = {
    objectState: object
    setObjectState: (arg: object) => void
    setForceRender: (arg: boolean) => void
    forceRender: boolean
}

export default function NewRangeLineSection({ objectState, setObjectState, setForceRender, forceRender }: NewRangeLineSectionProps) {

    const [newValueType, setNewValueType] = useState<string>('string')

    return (
        <div className="fx fx__col fx__ctr p5">

            <div className="fx fx__ctr fx__row">

                <label className="range__edit__funcs__label" htmlFor="newKey">Créer un nouvel ensemble clé-valeur:</label>
                <input className="p__box"  type="text" id="newKey" placeholder="nouvelle clé" />    
                <input className="p__box"  type="text" id="newValue" placeholder="nouvelle valeur" />

                    <ButtonChoicer 
                        buttonProps={[
                            {
                                name: 'String',
                                onClickParam: 'string',
                                className: 'typeChoicer__btn'
                            },
                            {
                                name: 'Number',
                                onClickParam: 'number',
                                className: 'typeChoicer__btn'
                            },
                            {
                                name: 'Boolean',
                                onClickParam: 'boolean',
                                className: 'typeChoicer__btn'
                            }
                        ]}
                        onClick={(arg: string) => setNewValueType(arg)}    
                    />
                                                
                    <button onClick={() => {
                        
                        setObjectState(
                            addKeyValue(valueOf('newKey'), valueOf('newValue'), newValueType, objectState)
                            )
                        setForceRender(!forceRender)
                        resetInputs([ '#newKey', '#newValue' ])
                        
                    }} className="p__box range__edit__funcs__btn">
                        Nouvelle paire clé-valeur
                    </button>
            </div> 
                        
                    
        </div>
    )

}