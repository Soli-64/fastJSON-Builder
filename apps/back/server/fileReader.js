import fs from 'fs'

export const getCategoriesWithModels = () => {

    const fileDatas = JSON.parse(
        fs.readFileSync('./paterns/paterns.json', {encoding: 'utf-8'})
    )

    return fileDatas.paterns

}

export const getCategoriesWithoutModels = () => {
    
    const fileDatas = JSON.parse(
        fs.readFileSync('./paterns/paterns.json', {encoding: 'utf-8'})
    )

    return fileDatas.paterns.keys()

}

export const getModelsByCategory = (categoryName) => {

    const fileDatas = JSON.parse(
        fs.readFileSync('./paterns/paterns.json', {encoding: 'utf-8'})
    )

    return fileDatas.paterns[categoryName]

}

export const getAllModels = () => {

    const models = []

    const categories = getCategoriesWithModels()
    console.log(Object.values(categories))
    Object.values(categories).forEach(e => models.push(e)) 

    return models

}

export const getPaternForRandomGenerate = () => {

    const fileDatas = JSON.parse(
        fs.readFileSync('./paterns/randomPatern.json', {encoding: 'utf-8'})
    )

    return fileDatas

}