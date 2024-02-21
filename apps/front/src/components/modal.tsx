import { ReactNode } from "react";


export default function Modal({ children }: { children: ReactNode[] | ReactNode }) {

    return (

        <div className="modal__background">

            <div className="modal">

                {
                    children
                }

            </div>

        </div>

    )

}