import {pool} from "../database/conexao.js"

async function listarLivros(req, res){
    try{
        const [livros] = await pool.query("Select * from livros");
        res.status(200).json(livros);
    }catch(erro){
        console.log("Erro ao buscar livros: ", erro);
        res.status(500).json({mensagem: "Erro ao buscar livros"});
    }
}
export {listarLivros};