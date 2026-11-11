let envio = document.getElementById('perguntaCaixa')
envio.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        enviar()
    }
})

function enviar() {
    let conversa = document.getElementById('conversa')
    let pergunta = document.getElementById('perguntaCaixa')
    let area = document.getElementById('mensagem-aviso')
    let msg = document.querySelector('.msg-digitada')
    let texto = pergunta.value

    if (texto === '') {
        pergunta.placeholder = 'Digite alguma dúvida ou material para que o assistente possa te auxiliar!'
        area.innerHTML = 'O campo é obrigatório!'
        pergunta.focus()
        return
    }

    msg.textContent = texto
    msg.hidden = false
    conversa.hidden = false
    pergunta.value = ''
    area.innerHTML = ''
    pergunta.placeholder = 'Pergunte algo...'
}