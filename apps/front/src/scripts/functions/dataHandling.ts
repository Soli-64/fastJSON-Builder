import Prism from 'prismjs';


export function transformToEmpty(initObj: {[key: string]: any}): object {

    let finalObject: {[key: string]: any} = {}

    for (const [key, value] of Object.entries(initObj)) {
        if (typeof value !== 'object') {
            finalObject[`${key}`] = createInstance(typeof value)
        } else {
            finalObject[`${key}`] = transformToEmpty(value)
        }
        
    }

    return finalObject

}

export function createInstance(ctor: any): any {
    switch (ctor) {
        case 'string': return ''
        case 'array': return []
        case 'object': return {}
        case 'number': return 0
        case 'boolean': return false
    }
}


export function stringifyIndented(obj: object): string {
    return JSON.stringify(
        obj,
        null,
        '\t'
    )
}

export function indented(jsonObj: string): string {

    const obj = JSON.parse(jsonObj)

    return JSON.stringify(
        obj,
        null,
        '\t'
    ) 

}

export const addKeyValue = (key: string, value: string, valueType: string, objectState: object): object => {

    const finalObject: {[key: string]: any} = objectState

    try {
        switch(valueType) {

            case 'string': 
                finalObject[key] = value
                return finalObject
            case 'number': 
                finalObject[key] = Number(value)
                return finalObject
            case 'boolean': 
                if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
                    finalObject[key] = eval(value.toLowerCase())
                    return finalObject
                } else {
                    finalObject[key] = false
                    return finalObject
                }
            case 'object': 
                finalObject[key] = {}
                return finalObject
            case 'array':
                finalObject[key] = []
                return finalObject
            default:
                return objectState
        }
    } catch {
        return objectState
    }
    
}

export const removeKeyValue = (obj: object, key: string): object => {    
    const finalObject: {[key: string]: any} = obj

    delete finalObject[key]

    return finalObject
}

export const toColoredCode = (arg: string) => {
    return Prism.highlight(arg, Prism.languages.javascript, 'javascript')
}

export function reverseObject(obj: {[key: string]: any}) {
    const keys = Object.keys(obj);
    const reversedKeys = keys.reverse();

    const reversedObject: {[key: string]: any} = {};

    for (const key of reversedKeys) {
        reversedObject[key] = obj[key];
    }

    return reversedObject;
}