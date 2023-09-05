const express = require("express")
const helper = require("./helper.js")
let pokemons = require("./mock-pokemon")

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello express 2'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé.'
    res.json(helper.success(message, pokemon))
})

app.get('/api/pokemons', (req,res) => {
    res.send(`il y a ${pokemons.length} pokémons dans le pokédex pour le moment`)
})

app.listen(port, () => console.log(`Notre application node est démarrée sur : http://localhost:${port}`))