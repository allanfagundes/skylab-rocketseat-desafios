"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1º exercício - Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario". A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123'); // console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
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

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // MAP

var age = usuarios.map(function (a) {
  return a.idade;
}); // console.log(age)
// FILTER

var rocketseatEmployee = usuarios.filter(function (e) {
  return e.nome == 'Diego' && e.empresa == 'Rocketseat';
}); // console.log(rocketseatEmployee)
// FIND

var googleEmployee = usuarios.find(function (e) {
  return e.empresa == 'Google';
}); // console.log(googleEmployee)
// MAP and FILTER

var under50 = usuarios.map(function (u) {
  return _objectSpread({}, u, {
    idade: u.idade * 2
  });
}).filter(function (i) {
  return i.idade <= 50;
}); // console.log(under50)
// 3º exercício - Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
// Antes
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });
// Depois

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
}); // console.log(newArr)
// 3.2
// Dica: Utilize uma constante pra function
// Antes
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);
// Depois

var usuario2 = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade() {
  return function (u) {
    return u.idade;
  };
};

mostraIdade(usuario2); // console.log(usuario2)
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

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; // mostraUsuario(nome, idade);
// mostraUsuario(nome);
// 3.4


var promise = function promise() {
  return new Promise(resolve, function (reject) {
    return resolve();
  });
}; // 4.1 Desestruturação simples - A partir do seguinte objeto:


var empresa = {
  empresa_nome: 'Rocketseat',
  empresa_endereco: {
    empresa_cidade: 'Rio do Sul',
    empresa_estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:

var empresa_nome = empresa.empresa_nome,
    empresa_cidade = empresa.empresa_endereco.empresa_cidade,
    empresa_estado = empresa.empresa_endereco.empresa_estado; // console.log(empresa_nome); // Rocketseat
// console.log(empresa_cidade); // Rio do Sul
// console.log(empresa_estado); // SC
// 4.2 Desestruturação em parâmetros na seguinte função:

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade; // console.log(`${nome} tem ${idade} anos.`)

  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
}); // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;
// 5º Exercício - Utilizando o operador de rest/spread ( ... ) realize as seguintes operações:
// 5.1 Rest - A partir do array: const arr = [1, 2, 3, 4, 5, 6] , defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.

var arrayRest = [1, 2, 3, 4, 5, 6];
var firstArrItem = arrayRest[0];

var restArrItem = _toConsumableArray(arrayRest.slice(1)); // console.log(firstArrItem); // 1
// console.log(restArrItem); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...


var soma = function soma() {
  var sum = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    sum += arg;
  }

  return sum;
}; // console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// 5.2 Spread
// A partir do objeto e utilizando o operador spread:


var usuarioSpread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuarioSpread2 = _objectSpread({}, usuarioSpread, {
  nome: 'Gabriel'
});

var usuarioSpread3 = _objectSpread({}, usuarioSpread, {
  endereco: _objectSpread({}, usuarioSpread.endereco, {
    cidade: 'Lontras'
  })
}); // console.log(usuarioSpread2)
// console.log(usuarioSpread3)
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel .
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras .
// 6º Exercício
// Converta o seguinte trecho de código utilizando Template Literals:


var usuario6 = 'Diego';
var idade6 = 23;
console.log("O usu\xE1rio ".concat(usuario6, " possui ").concat(idade6, " anos")); // 7º Exercício
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:const nome = 'Diego';

var idade7 = 23;
var usuario7 = {
  nome: nome,
  idade: idade7,
  cidade: 'Rio do Sul'
};
