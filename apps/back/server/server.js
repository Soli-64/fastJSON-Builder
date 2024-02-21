import express from 'express'
import cors from 'cors'
import { getPaternForRandomGenerate, getCategoriesWithModels } from './fileReader.js'

const app = express()


app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/get-paterns', (req, res) => {
    const categoriesWithModel = getCategoriesWithModels()
    res.send(categoriesWithModel)
})

app.get('/get-paternForRandom', (req, res) => {
    const paternForRandom = getPaternForRandomGenerate()
    res.send(paternForRandom)
})

app.listen(3000, () => {
    console.log('Serveur express écoute sur port 3000')
})
