//Importando roteador do express
const {Router} = require("express")

//Importando as classes 
const routes = Router()
const Modelo = require("./ModeloProfissional")

//Criando rotas
routes.get("/", Modelo.index) // Rota de obtensão
routes.post("/", Modelo.store) // Rota de postagem

//Exportando a rota
module.exports = routes