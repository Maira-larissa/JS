const listaDeUsuarios = [
    {nome: "Melissa", idade: 19, cpf: "18765"},
    {nome: "Mariana", idade: 36, cpf: "91765"},
    {nome: "Alfredo", idade: 42, cpf: "16453"}
];

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of listaDeUsuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputUsuarioNome = document.querySelector('#nome');
    const inputUsuarioIdade = document.querySelector('#idade');
    const inputUsuarioCpf = document.querySelector('#cpf');

    let nome = inputUsuarioNome.value;
    let idade = inputUsuarioIdade.value;
    let cpf = inputUsuarioCpf.value;

    const inputUsuarioElement = {nome, idade, cpf};

    inserirUsuarioNaLista(inputUsuarioElement);
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');

    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.innerHTML = `Nome: ${usuario.nome} <br> Idade: ${usuario.idade} <br> CPF: ${usuario.cpf} <br>`;

    spanElement.addEventListener('click', () => {
        const inputElement = document.createElement('input');
        inputElement.value = `${usuario.nome} | ${usuario.idade} | ${usuario.cpf}`;

        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaUsuariosElement.appendChild(liElement);
}
