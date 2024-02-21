import { useEffect, useState } from "react"
import Patern from "../../scripts/patern/patern.class"
import _ from 'lodash';
import { insertSpacesAtCursor } from "../../scripts/functions/dom";



interface ModifyPaternProps {
    patern: Patern
}


export default function ModifyPaternSection({ patern }: ModifyPaternProps) {

    const [paternState, setPaternState] = useState<string>(patern.getIndentedString())

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            void patern.setContent(JSON.parse(paternState));
        }, 500);

        return () => clearTimeout(timeoutId);

    }, [paternState])

    useEffect(() => {

        const textarea = document.querySelector('#paternTextArea') as HTMLTextAreaElement

        textarea.addEventListener('keydown', (e: any) => {
            if (e.code === "Tab") {
                e.preventDefault()
                insertSpacesAtCursor(textarea, '  ')
            }
        });

        return () => {
            document.querySelector('#paternTextArea')?.removeEventListener('keydown', (e: any) => {
                if (e.code === "Tab") {
                    e.preventDefault()
                    insertSpacesAtCursor(textarea, '    ')
                }
            })
        }

    }, [])


    return (
        
        <div className="fx fx__col fx__ctr patern__edit">

            <h1 className="patern__edit__title">Ajustez votre modèle</h1>

            <div className="patern__edit__container fx fx__ctr fx__row">
                
                <textarea spellCheck={"false"} 
                        cols={80} 
                        rows={30} 
                        value={paternState}
                        onChange={(e) => setPaternState(e.target.value)}
                        id="paternTextArea"
                        >   
                </textarea>

                <div className="fx fx__col fx__ctr patern__edit__container__funcs">
                    <button onClick={() => {
                        setPaternState(patern.getEmptyIndentedString())}} >Rendre le patern vide</button>
                    <button>Funtionnality</button>
                    <button>Funtionnality</button>
                    <button>Funtionnality</button>
                    <button>Funtionnality</button>
                    <button>Funtionnality</button>
                    <button>Funtionnality</button>
                </div>
                            
            </div>
        
        </div>

        
        
    )

}