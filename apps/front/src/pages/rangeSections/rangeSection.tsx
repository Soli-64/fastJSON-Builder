import { useState } from "react"
import { downloadJSON, removeKeyValue, stringifyIndented } from "../../scripts/functions/dataHandling"
import NewRangeLineSection from "./newRangeLineSection"
import GenerateRangeSection from "./generateRangeSection"
import { resetInputs, valueOf } from "../../scripts/functions/dom"

type RangeSectionProps = {
    setChoiceDo: (value: string) => void
}


export default function CreateWithRangeSection({ setChoiceDo }: RangeSectionProps) {

    const [forceRender, setForceRender] = useState(false)
    const [objectState, setObjectState] = useState<object>({ key: 'value', key2: "test"})

    return (
        <div className="range fx fx__ctr fx__col">

            <h1 className="range__title">Génération Séquencielle</h1>

            <div className="range__edit fx fx__row">

                <div className="fx fx__col">
                    <textarea 
                        cols={60} 
                        rows={25}
                        value={stringifyIndented(objectState)}
                        readOnly
                    />

                    <div className="range__edit__btns fx fx__row fx__ctr m1 p__box">
                    
                        <button onClick={() => {
                            navigator.clipboard.writeText( JSON.stringify(objectState) )
                            }}>
                            Copier
                        </button>

                        <button onClick={() => {
                            downloadJSON(JSON.stringify( objectState ), 'generated')
                        }}>
                            Télécharger
                        </button>

                        <button onClick={() => {
                            setObjectState({})
                        }}>
                            Reset
                        </button>

                        <button onClick={() => setChoiceDo('')}>
                            Abandonner la création
                        </button>

                    </div>
        
                </div>
            
                <div className=" range__edit__funcs fx fx__col">

                    <NewRangeLineSection
                        objectState={objectState}
                        setObjectState={setObjectState}
                        setForceRender={setForceRender}
                        forceRender={forceRender}
                    />

                    <div className="fx fx__col fx__ctr p5">
                            <label className="range__edit__funcs__label" htmlFor="keyRangeDel">Supprimer un ensemble clé valeur:</label>
                            <div className="fx fx__ctr fx__col">
                                <input className="p__box" type="text" placeholder="clé" id="keyRangeDel" />
                                <button 
                                className="p__box range__edit__funcs__btn" 
                                    onClick={() => {
                                    setObjectState(removeKeyValue(objectState, valueOf("keyRangeDel")))
                                    setForceRender(!forceRender)   
                                    resetInputs(['#keyRangeDel']) 
                                } } >
                                    Supprimer l'ensemble clé-valeur
                                </button>
                            </div>
                    </div>
                    

                    <GenerateRangeSection 
                        forceRender={forceRender} 
                        objectState={objectState}
                        setForceRender={setForceRender} 
                        setObjectState={setObjectState} 
                    />

                </div>
            
            </div>
            
            

        </div>
    )

}