function inputValidation() {
    if (document.form.nome.value == '') {
        alert('Campo Nome Obrigatório')
        document.form.nome.focus()
    } else if (document.form.mensagem.value == '') {
        alert('A Mensagem é Obrigatória')
        document.form.mensagem.focus()
    }
    if (document.form.nome.value == '' || document.form.mensagem.value == '') {
        window.event.preventDefault()
    }
    if (document.form.nome.value > 0 && document.form.mensagem.value > 0) {
        window.event.stopPropagation()
    }
}

document.querySelector('form').addEventListener('submit', inputValidation)
