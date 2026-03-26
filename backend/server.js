import express from "express"
import acessoRouter from "./routes/loginRouter.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(acessoRouter)

app.post("/teste", (req,res)=>{
    res.status(200).json(req.body)
})

app.listen(3000,()=>{
    console.log("Rodando na porta 3000")
})