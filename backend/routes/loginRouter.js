import express from "express"
import db from "../db.js"
import jwt from "jsonwebtoken"

const router = express.Router()

async function cadastrar(req,res) {
    try {
        const {nome,email,senha} = req.body
        const resultado = await db.execute("INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",[nome,email,senha])
        if (resultado[0].affectedRows > 0) {
            res.status(201).json({message: "Cadastrado com sucesso"})
        } else {
            res.status(401).json({message: "Erro ao cadastrar"})
        }
    } catch (erro) {
        if (erro.code == "ER_DUP_ENTRY") {
            res.status(409).json({message: "Usuario ou email indisponivel"})
        }
    }
}

async function login(req,res) {
    try {
        const {email,senha} = req.body
        const [resultado] = await db.execute("SELECT * FROM usuarios WHERE email = ? AND senha = ?",[email,senha])

        if (resultado.length > 0) {
            const token = jwt.sign({
                id: resultado[0].id,
                email: resultado[0].email
            },"segredo")
            res.status(200).json({message: "Acesso autorizado", token: `${token}`})
        } else {
            res.status(401).json({message: "Email ou senha incorretos ou inexistentes"})
        }

    } catch (erro) {
        console.log(erro)
    }
}

router.use("/cadastro", cadastrar)
router.use("/login", login)

export default router