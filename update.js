//importaçao do modulo
const sql = require('msnodesqlv8');

//Conectar com o DB
const conexao = "server=.;Database=Cadastros;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const update = "UPDATE Usuarios SET sobrenome ='Rocha' WHERE id=11";

//Informa o resultado 
sql.query(conexao, update, (error, resultado)=>{
    console.log("Valores da tabela ", resultado);
});