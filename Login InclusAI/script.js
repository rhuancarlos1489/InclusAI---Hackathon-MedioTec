function entrar() {
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let emailadd = email.value
    let senhaadd = senha.value
    let area = document.getElementById('mensagem-aviso')
    if (emailadd === '' || senhaadd === '') {
        area.innerHTML = 'Os campos são obrigatórios!'
        email.focus()
        return
    }
        
    window.location.href = "../Home/index.html"
}

function recuperar() {
    let emailResgate = window.prompt('Digite um e-mail de recuperação:')
    alert(`Pronto! Um e-mail de recuperação foi enviado para ${emailResgate}!`)
}