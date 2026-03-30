const email = document.querySelector("#emailRegister")
const senha = document.querySelector("#senhaRegister")
const nome = document.querySelector("#nomeRegister")
const botao = document.querySelector("#registrar")
const msg = document.querySelector("#mensagem")

async function cadastrar() {
    const resultado = await fetch("http://localhost:3000/cadastro",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            nome: `${nome.value.trim()}`,
            email: `${email.value.trim()}`,
            senha: `${senha.value.trim()}`
        })
    })
    const data = await resultado.json()
    
    if (resultado.status === 409) {
        msg.textContent = data.message
    } else {
        msg.textContent = data.message
        setTimeout(()=>{window.location.href = "./login.html"},3000)
    }
}

botao.addEventListener("click",cadastrar)