import Patern from "../../scripts/patern/patern.class"


export default function PaternBox({patern, onClick}: {patern: Patern, onClick: () => void}) {



    return (

        <div onClick={onClick} className="patern__box">

            <div className="patern__box__repr">
                
            </div>

            <p className="patern__box__name">{ patern.name }</p>

        </div>

    )

}