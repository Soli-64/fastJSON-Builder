//import React from "react";
import { Link } from "react-router-dom";
// import ImageTooltip from "./imgTooltip";


interface HeaderProps {
    links: { 
        [key: string]: string;
    }
}

export default function Header({ links }: HeaderProps) {

    const headerLinks = []

    for (const [to, text] of Object.entries(links)) {

        headerLinks.push(
            <Link className="header__link fx fx__ctr" id={`linkTo${text}`} to={`/${to}`}> 
                {/* <ImageTooltip src={`/public/images/logo/${to}.png`} alt={``} tooltipText={text} /> */}
                <img className="header__link__img" src={`/public/images/logo/${to}.png`} alt={``} /> 
            </Link>
        )
        
    }

    return (

        <div className="header fx fx__ctr fx__col">

            <div className="header__logo fx fx__ctr fx__col">
                {
                    ...headerLinks
                }
            </div>
            
        </div>

    )

}
