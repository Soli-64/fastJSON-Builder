//import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/header/header";
import { useState } from "react";
// import PaternCategoryBox from "../components/patern/paternCategoryBox";
// import Patern from "../scripts/patern/patern.class";
import CreateWithPaternSection from "./paternSections/paternChoiceSection";
import CreateWithRangeSection from "./rangeSections/rangeSection";
import RandomGenerateSection from "./randomSections/randomGenerateSection";


export default function GeneratePage() {

    const [choiceDo, setChoiceDo] = useState('')

    return (

        <>

            <Header links={{

                home: "Home Page", 
                createPatern: "Page de création de Patern"
            
            }} />

            <main>

                {

                    choiceDo === '' &&

                    <div className="generate__choice fx fx__ctr fx__row">
                        
                        <button className="generate generate__choice__btn" onClick={() => {
                            setChoiceDo('range')
                        }}>
                            Utiliser la génération séquencielle
                        </button>
                        
                        <button className="generate generate__choice__btn" onClick={() => {
                            setChoiceDo('patern')
                        }}>
                            Utiliser un Template
                        </button>

                        <button className="generate generate__choice__btn" onClick={() => {
                            setChoiceDo('random')
                        }}>
                            Générateur Aléatoire
                        </button>
                    </div>

                }
                
                {

                    choiceDo === 'patern' &&
                
                        <CreateWithPaternSection setChoiceDo={setChoiceDo} />

                    || 

                    choiceDo === "range" &&

                        <CreateWithRangeSection setChoiceDo={setChoiceDo} />

                    ||

                    choiceDo === 'random' &&

                        <RandomGenerateSection setChoiceDo={setChoiceDo} />

                }

            </main>
        </>

    )


}