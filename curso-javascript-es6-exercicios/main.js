// 1º exercício - Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario". A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.

// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// 2º exercício - A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// 2.1 Utilizando o MAP Crie uma variável que contenha todas idades dos usuários:

// Resultado:
// [23, 15, 30]

// 2.2 Utilizando o FILTER, crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: 

// Resultado:
// [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// 2.3 Utilizando o FIND, crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

// 2.4 Unindo operações, Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

// Resultado:
// [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP
const age = usuarios.map(a => a.idade)
console.log(age)

// FILTER
const rocketseatEmployee = usuarios.filter(e => e.nome == 'Diego' && e.empresa == 'Rocketseat')
console.log(rocketseatEmployee)

// FIND
const googleEmployee = usuarios.find(e => e.empresa == 'Google')
console.log(googleEmployee)

// MAP and FILTER
const under50 = usuarios.map(u => ({...u, idade: u.idade * 2})).filter(i => i.idade <= 50)
console.log(under50)


// 3º exercício - Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1

// Antes
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });

// Depois
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10)
console.log(newArr)

// 3.2
// Dica: Utilize uma constante pra function
// Antes
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);
// Depois
const usuario2 = { nome: 'Diego', idade: 23 }
const mostraIdade = () => u => u.idade
mostraIdade(usuario2);
console.log(usuario2)

// 3.3
// Dica: Utilize uma constante pra function
// Antes
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);
// Depois
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade })
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = function() {
    return new Promise(resolve, reject => resolve())
}