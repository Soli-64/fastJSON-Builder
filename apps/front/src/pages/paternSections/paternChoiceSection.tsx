import { useEffect, useState, useMemo } from "react"
import PaternCategoryBox from "../../components/patern/paternCategoryBox"
import Patern from "../../scripts/patern/patern.class"
import PaternChoiceModal from "../../components/patern/paternChoiceModal"
import ModifyPaternSection from "./modifyPaternSection"
import axios from "axios"

interface PaternSectionInterface {
    setChoiceDo: (arg: string) => void
}


export default function CreateWithPaternSection({ 
    setChoiceDo }: PaternSectionInterface) {
        
    const [choiceValidate, setChoiceValidate] = useState(false)
    const [selectedPatern, setSelectedPatern] = useState<Patern | false>(false)

    const [paterns, setPaterns] = useState<{[key: string]: any}>({})
    const [loadingPaterns, setLoadingPaterns] = useState(true)

    const categoriesNames = useMemo(() => { return Object.keys(paterns) }, [paterns])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/get-paterns');
                setPaterns(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingPaterns(false);
            }
        }

        fetchData();
        
    }, [])

    const handleClickPaternBox = (patern: Patern): void => {
        setSelectedPatern(patern)
    }

    return (
        <div className="generate__paterns fx fx__ctr fx__col">


            <div className="generate__paterns">

                <div className="generate__paterns__container fx fx__ctr fx__row">

                    {
                        loadingPaterns ? 
                        
                        <div>Paterns en chargements</div> : (

                            !selectedPatern &&
                            !choiceValidate &&

                            <>
                                <h1 className="generate__paterns__title"> Choisissez un template</h1>

                                <div>
                                    {
                                        categoriesNames.map((name: string, index) => {
                                            return <PaternCategoryBox handleClickPaternBox={handleClickPaternBox} categoryName={name} category={paterns[name]} key={index} />
                                        })
                                    }
                                </div>
                            </>

                            

                        )
                        
                    }

                    {
                        selectedPatern && (
                            
                            choiceValidate ?

                                <ModifyPaternSection 
                                    patern={selectedPatern} 

                            /> : (

                                <>
                                
                                    <h1 className="generate__paterns__title"> Choisissez un template</h1>
                                    
                                    <PaternChoiceModal 
                                        setChoiceValidate={setChoiceValidate}
                                        setSelectedPatern={setSelectedPatern} 
                                        patern={selectedPatern} 
                                    /> 
                                
                                </>


                                 
    
                            )

                        )

                    }

                </div>

            </div>

            <button
                className="quit_button"
                onClick={() => {
                    setChoiceDo('')
                    setSelectedPatern(false)
                    setChoiceValidate(false)
                }}>
                Abandonner la création
            </button>

        </div>
    )
}