//Importando dependência mySQL
//Obs: const são variáveis de leitura
const mysql = require("mysql2")

//Criando conexão com o banco de dados
const connection = mysql.createConnection({
    //Parâmetros para conexão com o banco
    host: "localhost",
    port: 3306, //Porta padrão do MySQL
    user: "root",
    database: "profissionais",
    //Como o password é vazio, n é necessário chamar a propriedade
})

//Exportando a classe
module.exports = class ModeloProfissional {
    //A função estática "index" mostrará os profissionais cadastrados
    static index(req, res){ //Passando parâmetros request e response
        //Fazendo uma consulta (query) no banco
        //(err, results, fields) é uma função de callback, portanto, ela serve para guardar/manipular os erros, resultados e campos recebidos
        connection.query("SELECT * FROM `cadastro`;", (err, results, fields) => {

            res.status(200).json(results)
        })
        //Fechando a conexão
        connection.end()
    }

    //A função estática "store" mostrará os profissionais cadastrados
    static store = (req, res) => {
    const{nome, cpf, email, categoria} = req.body
    connection.query("INSERT INTO `cadastro` (`nome`, `cpf`, `email`, `categoria`) VALUES(?, ?, ?, ?);",
        [nome, cpf, email, categoria],(err, results, fields) => {
            //Mostra os resultados, linhas e erros no terminal
            console.log(results, fields, err)
        })
        connection.end()
    }
}