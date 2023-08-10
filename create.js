//importaçao do modulo
const sql = require('msnodesqlv8');

//Conectar com o DB
const conexao = "server=.;Database=Cadastros;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const create = "INSERT INTO Usuarios VALUES(11, 'gabriel', 'montes',43,'gabriel@email.com') ";

//Informa o resultado 
sql.query(conexao,create, (error, resultado)=>{
    console.log("Valores inseridos ", resultado);
});