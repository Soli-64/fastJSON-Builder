import { useState } from "react"
import { addKeyValue } from "../../scripts/functions/dataHandling"
import { valueOf } from "../../scripts/functions/dom"
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
        <div className="fx fx__col p5">

                        <label className="p__box" htmlFor="newKey">Créer un nouvel ensemble clé-valeur:</label>
                        
                        <input className="p__box"  type="text" id="newKey" placeholder="nouvelle clé" />    
                        <input className="p__box"  type="text" id="newValue" placeholder="nouvelle valeur" />
                        <div className="fx fx__row fx__ctr">

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

                            {/* <button className={`${newValueType === 'string' ? 'selected' : '' }`} 
                                    onClick={() => setNewValueType('string')} >
                                        String
                            </button>
                            <button className={`${newValueType === 'number' ? 'selected' : '' }`} 
                                    onClick={() => setNewValueType('number')} >
                                        Number
                            </button>
                            <button className={`${newValueType === 'boolean' ? 'selected' : '' }`} 
                                    onClick={() => setNewValueType('boolean')} >
                                        Boolean
                            </button> */}
                            
                        </div>
                        <button onClick={() => {
                            
                            setObjectState(
                                addKeyValue(valueOf('newKey'), valueOf('newValue'), newValueType, objectState)
                                )
                            setForceRender(!forceRender)
                            
                        }} className="p__box">
                            Nouvelle paire clé-valeur
                        </button>
                    
                    </div>
    )

}