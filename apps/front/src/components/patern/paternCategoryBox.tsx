import Patern from "../../scripts/patern/patern.class"
import PaternBox from "./paternBox"

type PaternCategoryBoxProps = {
    category: {[key: string]: Patern}, 
    categoryName: string,
    handleClickPaternBox: (patern: Patern) => void
}


export default function PaternCategoryBox({category, categoryName, handleClickPaternBox}: PaternCategoryBoxProps) {

    const paterns = Object.values(category)
    const paternsNames = Object.keys(category)    

    return (

        <div className="patern__container fx fx__col fx__ctr">

            <h1 className="patern__container__title" >{ categoryName.toUpperCase() }</h1>

            <div className="fx fx__row">
               {
                    
                    paterns.map((elm, index) => {
                        const patern = new Patern(paternsNames[index], elm)
                        return <PaternBox onClick={() => handleClickPaternBox(patern)} patern={patern} key={index}/>
                    })
                
                }
            </div>

        </div>

    )

}