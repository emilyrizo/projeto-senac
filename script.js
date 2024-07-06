const form = document.querySelector('#contato')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const telefone = document.querySelector('#telefone').value
    const mensagem = document.querySelector('#mensagem').value
    console.log(nome, email, telefone, mensagem);

    alert("Enviado com sucesso!")
    
    form.reset()
});