import { transformToEmpty } from "../functions/dataHandling";


interface PaternType {

    name: string;
    content: object;

    getEmpty(): object;
    getString(): string;
    
    getIndentedString(): string;
    getEmptyIndentedString(): string;

}

class Patern implements PaternType {
    
    name: string;
    content: object;

    constructor( name: string, defaultContent: object ) {

        this.name = name;
        this.content = defaultContent

    }

    setContent(obj: object) {
        this.content = obj
    } 

    getString() {
        
        return `${
            this.content
        }`
    
    }

    getIndentedString(): string {
        return JSON.stringify(
                    this.content,
                    null,
                    '\t'
                )
        
    }

    getEmptyIndentedString(): string {
        return JSON.stringify(
                this.getEmpty(),
                null,
                '\t'
            )
    } 

    getEmpty(): object {

        return transformToEmpty(
            this.content
        )
    }

}


export default Patern;
