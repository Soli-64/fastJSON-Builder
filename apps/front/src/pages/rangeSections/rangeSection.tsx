import { useState } from "react"
import { removeKeyValue, stringifyIndented } from "../../scripts/functions/dataHandling"
import NewRangeLineSection from "./newRangeLineSection"
import GenerateRangeSection from "./generateRangeSection"
import { valueOf } from "../../scripts/functions/dom"

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
            
                <textarea 
                    cols={60} 
                    rows={25}
                    value={stringifyIndented(objectState)}
                    readOnly
                />

                <div className=" range__edit__funcs fx fx__col">

                    <NewRangeLineSection
                        objectState={objectState}
                        setObjectState={setObjectState}
                        setForceRender={setForceRender}
                        forceRender={forceRender}
                    />
                    
                    <div className="fx fx__col fx__ctr">
                        <label className="p__box">Supprimer un ensemble clé valeur:</label>
                        <input className="p__box" type="text" placeholder="clé" id="keyRangeDel" />
                        <button className="p__box" onClick={() => {
                            setObjectState(removeKeyValue(objectState, valueOf("keyRangeDel")))
                            setForceRender(!forceRender)    
                        } } >
                            Supprimer l'ensemble clé-valeur
                        </button>
                    </div>

                    <GenerateRangeSection 
                        forceRender={forceRender} 
                        objectState={objectState}
                        setForceRender={setForceRender} 
                        setObjectState={setObjectState} 
                    />

                </div>
            
            </div>
            
            <button className="quit_button" onClick={() => setChoiceDo('')}>
                Abandonner la création
            </button>

        </div>
    )

}