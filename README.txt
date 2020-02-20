1) Iniciar Node => npm init
2) Baixar Dependências => npm install mysql2, npm install express
3) Verificar no "package.jason" se as dependências foram instaladas.
4) Criar classe ModeloProfissional.js
5) Criar classe Controlador.js
6) Criar classe Routes.js
7) Criar classe Server.js
8) Execute o Server.js através do comando "node server.js" no terminal e no navegador, acesse http://localhost:4000
Obs: Para parar a execução, aperte Ctrl+C no terminal.
9) Caso tudo ocorra corretamente, você verá no navegador todas as tabelas cadastradas
10) instale a extenção "Advanced REST client" no Google Chrome
11) Abra a extenção, defina o Method: POST, Request URL: http://localhost:4000, Parameters: Body, Body content type: application/json, Editor view: Raw input
12) Insira os dados em tipo Jason para cadastrar um novo profissional no banco de dados
Ex: {
        "nome":"nomezinho",
        "cpf":"cpfzinho",
        "email":"emailzinho",
        "categoria":"categoriazinha"
    }