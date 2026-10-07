import mysql from "mysql2/promise";
import "dotenv/config";
import { PoolConnection } from "mysql2";

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME ,
   waitForConnections: true,
   connectionLimit: 10
});
async function testarConexao(){
    const conexao = await pool.getConnection();
    try{
        await conexao.query("SELECT 1");
        console.log("Banco de dados conectado com sucesso!")
    }
    catch (erro){
        console.error("Não foi possivel conectar ao banco")
        console.error(`Detalhes do erro: ${erro.message}`)
    }
    finally {
        if(conexao) conexao.release();
    }
}
export {pool, testarConexao}