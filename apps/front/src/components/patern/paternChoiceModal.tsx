import Patern from "../../scripts/patern/patern.class";
import Modal from "../modal";

type PaternChoiceModalProps = {
    patern: Patern
    setSelectedPatern: (value: false | Patern) => void
    setChoiceValidate: (value: boolean) => void
}


export default function PaternChoiceModal({ patern, setSelectedPatern, setChoiceValidate }: PaternChoiceModalProps) {
    

    return <Modal>
        <div className="patern__modal fx fx__ctr fx__col">

            <h1 className="patern__modal__title">{ patern.name }</h1>

            <div className="patern__modal__repr">

                <div className="patern__modal__repr__header">

                </div>

                <div className="fx fx__row">
                    <pre>
                        {
                            patern.getIndentedString()
                        }
                    </pre>
                    <img className="patern__modal__repr__image" src="/public/images/logo/default-patern.png" alt="logo du patern par défaut" />
                </div>

                

            </div>

            <div className="patern__modal__btns fx fx__ctr fx__row ">
                
                <button onClick={() => setSelectedPatern(false)}>Annuler</button>

                <button onClick={() => {
                    setChoiceValidate(true)
                }}>Valider</button>

            </div>

        </div>
    </Modal>

}