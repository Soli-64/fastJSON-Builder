import { useState, useCallback } from "react"
import ButtonChoicer from "../../components/buttonChoicer"
import { getMultipleValues, resetInputs, valueOf } from "../../scripts/functions/dom"

type GenerateRangeSectionProps = {
    setForceRender: (arg: boolean) => void
    forceRender: boolean
    objectState: object
    setObjectState: (arg: object) => void
}

type modifElementType = {
    addMethode: 'string' | 'number'
    increase: boolean
}


export default function GenerateRangeSection({ setForceRender, forceRender, objectState, setObjectState }: GenerateRangeSectionProps) {

    const [modifKeyType, setModifKeyType] = useState<modifElementType>({increase: true, addMethode: 'number'})
    const [modifValueType, setModifValueType] = useState<modifElementType>({increase: true, addMethode: 'number'})

    const modifyElement = useCallback((element: string | number, modifier: string, addMethode: 'string' | 'number', increase: boolean) => {
        if (addMethode === 'string') {
            if (increase) return element + modifier
            else return element
        } else {
            if (increase) return (Number(element) + Number(modifier));
            else return (Number(element) - Number(modifier));
        }
    }, [])

    const objRange = (initKey: string, initValue: string, modifKey: modifElementType, modifValue: modifElementType, lineNbr: number): object => {
        
        const finalObj: {[key: string]: any} = {}


        let tempInitKey = (modifKey.addMethode === 'number') ? Number(initKey) : initKey
        let tempInitValue = (modifValue.addMethode === 'number') ? Number(initValue) : initValue

        for (let x = 0; x <= lineNbr; x++) {

            finalObj[tempInitKey] = tempInitValue

            tempInitKey = modifyElement(tempInitKey, valueOf('modifKey'), modifKey.addMethode, modifKey.increase)
            tempInitValue = modifyElement(tempInitValue, valueOf('modifValue'), modifValue.addMethode, modifValue.increase)

        }

        return finalObj
    
    }

    return (

        <div className="fx fx__col fx__ctr p5">
            <div className="fx fx__box fx__ctr fx__col">

                <label className="range__edit__funcs__label" htmlFor="initKey">Générer par séquences</label>

                <div className="fx fx__ctr fx__col p__box">

                    <input className=" p__box" id="initKey" type="text" placeholder="clé initiale" />
                    <input className=" p__box" id="modifKey" type="text" placeholder="modification de la clé" />
                    
                    <ButtonChoicer 
                        buttonProps={[
                            {
                                name: "String",
                                onClickParam: 'string',
                                className: 'typeChoicer__btn'
                            }, 
                            {
                                name: "Number",
                                onClickParam: 'number',
                                className: 'typeChoicer__btn'
                            }
                        ]} 
                        onClick={(arg) => {
                            setModifKeyType({
                                ...modifKeyType,
                                addMethode: arg
                            })
                        }}        
                    />

                    <ButtonChoicer 
                        buttonProps={[
                            {
                                name: "Increase",
                                onClickParam: true,
                                className: 'typeChoicer__btn'
                            }, 
                            {
                                name: "Decrease",
                                onClickParam: false,
                                className: 'typeChoicer__btn'
                            }
                        ]} 
                        onClick={(arg) => {
                            setModifKeyType({
                                ...modifKeyType,
                                increase: arg
                            })
                        }}        
                    />

                    <input className="p__box" id="initValue" type="text" placeholder="valeur initiale" />
                    <input className="p__box" id="modifValue" type="text" placeholder="modifications de la valeur" />
                    
                    <ButtonChoicer 
                        buttonProps={[
                            {
                                name: "String",
                                onClickParam: 'string',
                                className: 'typeChoicer__btn'
                            }, 
                            {
                                name: "Number",
                                onClickParam: 'number',
                                className: 'typeChoicer__btn'
                            }
                        ]} 
                        onClick={(arg) => {
                            setModifValueType({
                                ...modifValueType,
                                addMethode: arg
                            })
                        }}        
                    />

                    <ButtonChoicer 
                        buttonProps={[
                            {
                                name: "Increase",
                                onClickParam: true,
                                className: 'typeChoicer__btn'
                            }, 
                            {
                                name: "Decrease",
                                onClickParam: false,
                                className: 'typeChoicer__btn'
                            }
                        ]} 
                        onClick={(arg) => {
                            setModifValueType({
                                ...modifValueType,
                                increase: arg
                            })
                        }}        
                    />

                    <input className="p__box" id="nbrKeyValues" type="text" placeholder="nombres d'ensembles clé-valeur" />

                </div>

                <button 
                    className="range__edit__funcs__btn"
                    onClick={() => {
                        const inputsId = ['#initKey', '#initValue', '#modifKey', '#modifValue', '#nbrKeyValues']
                        if (getMultipleValues(inputsId).length === 5) {
                            setObjectState({
                                ...objRange(valueOf('initKey'), valueOf('initValue'), modifKeyType, modifValueType, Number(valueOf('nbrKeyValues')) ),
                                ...objectState,
                                
                            })
                            resetInputs(inputsId)
                        } else {
                            alert('Il faut remplir toute les cases')
                        }
                        setForceRender(!forceRender)
                }}>
                    Générer
                </button>

            </div>

        </div>

    )

}