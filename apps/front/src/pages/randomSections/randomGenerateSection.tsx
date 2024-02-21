import axios from "axios"
import { useEffect, useState } from "react"
import { stringifyIndented, indented } from "../../scripts/functions/dataHandling"

type RandomGenerateSectionProps = {
    setChoiceDo: (arg: string) => void
}


export default function RandomGenerateSection({ setChoiceDo }: RandomGenerateSectionProps) {

    const [defaultPatern, setDefaultPatern] = useState<object>({})
    const [loadingPatern, setLoadingPatern] = useState<boolean>(true)
    const [selectedFileJson, setSelectedFileJson] = useState<string>('')
    const [firstAreaContent, setFirstAreaContent] = useState<string>('')

    const handleFile = (file: Blob) => {
        const reader: FileReader = new FileReader();

        reader.addEventListener('load', () => {
            let content = reader.result;

            if (typeof content === 'string') {
                setSelectedFileJson(content)
            } else {
            content = JSON.stringify(content);
                setSelectedFileJson(content)
            }

        })

        reader.readAsText(file);
    }

    const handleFileButtonClick = () => {
        const fileInput = document.getElementById('fileInput') as any;
            const file: File = fileInput.files[0];
            if (file) {

                if (file.type === 'application/json') {
                    handleFile(file);
                } else {
                    console.log('Error: FileType, import a JSON file.')
                }

            } 
            else console.log('Pas de fichier');

            setFirstAreaContent(
                indented(selectedFileJson)
            )

    }

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/get-paternForRandom');
                setDefaultPatern(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingPatern(false);
            }
        }

        fetchData();

    }, [])

    return (

        <div>

            {
                loadingPatern ?

                <div> Patern par défaut en chargement </div> :

                <div className="fx fx__row">

                    <div className="fx fx__col fx__ctr p5">

                        <textarea className="m1" 
                                  name="" 
                                  id="" 
                                  cols={55} rows={35}
                                  value={firstAreaContent}
                                  spellCheck={false}
                                  onChange={(e) => setFirstAreaContent(e.target.value)}
                                  >
                        </textarea>

                        <div className="fx fx__ctr fx__row">

                            <button className="m1" onClick={() => {
                                setFirstAreaContent(stringifyIndented(defaultPatern))
                            }}>
                                Utiliser un patern par défaut
                            </button>

                            <div className="fx fx__col">

                                <input type="file" id="fileInput"/>     
                                
                                <button id="fileButton" onClick={() => {
                                        handleFileButtonClick()
                                        handleFileButtonClick()
                                    }}> 
                                        Utiliser le contenu du fichier
                                </button>

                            </div>


                        </div>

                    </div>

                    
                    <div className="p__box fx fx__col">

                        <button className="m1 p__box">
                            Générer
                        </button>

                    </div>

                    <div className="fx fx__col fx__ctr p5">

                        <textarea className="m1" name="" id="" cols={55} rows={35}></textarea>

                        <div className="p5 fx fx__row">

                            <button className="m1">
                                Copier
                            </button>

                            <button className="m1">
                                Télécharger
                            </button>

                        </div>

                    </div>


                </div>
            }

            <button className="m5 p__box quit_button" onClick={() => setChoiceDo('')}>
                Abandonner la création
            </button>

        </div>

    )

}
