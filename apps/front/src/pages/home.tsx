//import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header";


export default function HomePage() {

    return (

        <>

            <Header links={{

                createPatern: "Page de création de Patern"
            
            }} />

            <main>

                <div className="ldg ldg__intro fx fx__col fx__ctr">

                    <h1 className="ldg__title" >Générez des contenus JSON complexes  facilement</h1>

                </div>

                <div className="ldg ldg__choice fx fx__row fx__ctr">

                    
                    <Link to="/generate">
                        Commencer à générer
                    </Link>

                </div>

            </main>
        

        </>

    )

}