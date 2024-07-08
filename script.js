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

const searchBox = document.getElementById('search-box');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = searchBox.value;
  
//   console.log(searchTerm); // Exemplo: apenas mostrando o termo no console no momento
});