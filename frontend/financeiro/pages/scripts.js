const email = document.querySelector("#emailLogin")
const senha = document.querySelector("#senhaLogin")
const botao = document.querySelector("#entrar")
const msg = document.querySelector("#mensagem")

async function cadastrar() {
    const resultado = await fetch("http://localhost:4000/cadastro",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            email: email.value.trim(),
            senha: senha.value.trim()
        })
    })

    msg.textContent = (await resultado.json()).message
}

botao.addEventListener("click",cadastrar)