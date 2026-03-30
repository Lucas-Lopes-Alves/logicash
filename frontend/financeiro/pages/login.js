const email = document.querySelector("#emailLogin")
const senha = document.querySelector("#senhaLogin")
const btn = document.querySelector("#entrar")
const msg = document.querySelector("#msg")

async function login() {
    const resultado = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: `${email.value.trim()}`,
            senha: `${senha.value.trim()}`
        })
    })

    const data = await resultado.json()
    localStorage.setItem("token", data.token)
    msg.textContent = data.message
    setTimeout(()=>{window.location.href = "./index.html"}, 3000)
}

btn.addEventListener("click", login)