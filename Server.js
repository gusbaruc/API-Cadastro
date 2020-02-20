//Importando a classe Routes.js
const rotas = require("./Routes")

//Importando todos os métodos e propriedades do express
const express = require("express")

//Importando o método principal do express
const app = express()

//Indicando que o express tem que utilizar o método express.json
app.use(express.json())
app.use(rotas)

//Verificando se o server está funcionando corretamente
app.listen(4000, () => {
    console.log("Ok")
})