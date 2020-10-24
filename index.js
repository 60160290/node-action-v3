const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let phones = [
    { id: 1, name:'iPhone12 Pro Max'},
    { id: 2, name:'Google Pixel 5'}
  ]

app.get('/list', (req, res) => {
    res.json(phones)
})

app.get('/:id', (req, res) => {
    let id = req.params.id
    res.json(phones[id-1])
})

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app

// Exercise
// GET /items
// [
//     { id: 1. name:'iPhone12 Pro Max'}
//     { id: 2. name:'Google Pixel 5'}
// ]