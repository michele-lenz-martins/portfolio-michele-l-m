//procura de elementos no DOM do document
const form = document.querySelector('form'); // procurando no DOM o primeiro formulário da página (único para o site)
const nome = document.getElementById('nomeContato'); // procurando o elemento com id "nomeContato"
const email = document.getElementById('emailContato'); // procurando o elemento com id "emailContato"
const mensagem = document.querySelector('textarea'); // procurando o primeiro campo de área de texto (textarea, também único para o site)

form.addEventListener('submit', async function(evento) { //adicionando um evento para quando o formulário estiver sendo preenchdio
    evento.preventDefault(); // impede o envio padrão do formulário por enquanto
    if (nome.value.trim() === '') { // condicional para se o nome não tiver sido preenchido (exatamente igual a 0)
        alert('Por favor, preencha seu nome.');
        return;
    }
    if (email.value.trim() === '') { // condicional para se o e-mail não tiver sido preenchido (exatamente igual a 0)
        alert('Por favor, preencha seu e-mail.');
        return;
    }
    if (mensagem.value.trim() === '') { // condicional para se o campo de mensagem não tiver sido preenchido (exatamente igual a 0)
        alert('Por favor, escreva sua mensagem.');
        return;
    }
    const dados = new FormData(form);
    const resposta = await fetch('https://formspree.io/f/mjglawzn', { 
        method: 'POST', body: dados, headers: {
            'Accept':'application/json'
        }})
        if (resposta.ok) {
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.'); // msg se confirmação para o usuário, se tudo estiver preenchido e ele tiver pressionado o botão enviar
            form.reset();
        }
    else {
        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.')
    }
});