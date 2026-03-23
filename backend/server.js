import express from "express"

const app = express()

app.use(express.json())

app.post("/teste", (req,res)=>{
    res.status(200).json(req.body)
})

app.listen(4000,()=>{
    console.log("Rodando na porta 4000")
})