// 1 Preço desconto 20
let preco = 100; 
let desconto = 0.20; 
let precoComDesconto = preco - (preco * desconto); 

console.log(precoComDesconto);

// 2 Nome completo
let nome = "abc"; 
let sobrenome = "def"; 
let nome2 = nome + " " + sobrenome; 

console.log(nome2); 

// 3 Arrays
let numero = [1, 2, 3, 4, 5]; 

for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);
}

// 4 Manipulação arrays
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');

console.log(frutas); 

// 5 Objeto
let pessoa = {
    nome: "Murilo", 
    idade: 17,      
    cidade: "São Paulo"
};

console.log(pessoa);

// 6 Manipulação objeto
let pessoa1 = {
    nome: "Pina",
    idade: 17,
    cidade: "São Paulo"
};


pessoa1.email = "Vinicius.senai@gmail.com";

console.log(pessoa1);

// 7 Arrays e métodos
let numeros = [1, 2, 3, 4, 5];
let dobro= numeros.map(num => num * 2); 

console.log(dobro);

// 8 Filtro Arrays
let idades = [15, 22, 18, 30, 12];
let adultos = idades.filter(idade => idade > 18); 

console.log(adultos);

// 9 Loop arrays
let cores = ['vermelho', 'verde', 'azul'];

cores.forEach(cor => {
    console.log(cor); 
});

// 10 Objetos aninhados
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    especificacoes: {
        ano: 2021,
        cor: "preto"
    }
};


console.log(carro);

// 11 Desestruturação
let usuario = { nome: 'João', idade: 30 };

let { nome: nomeUsuario, idade: idadeUsuario } = usuario;

console.log(nomeUsuario, idadeUsuario);

// 12 Contagem elementos array
let animais = ['cachorro', 'gato', 'pássaro', 'gato'];


let gatos= animais.filter(animal => animal === 'gato').length;

console.log(gatos); 

// 13 Ternário
let nota = 8;

let resultado = nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado);

// 14 Transformando string
let texto = "senaimorvan"; 

let minusculo = texto.toLowerCase();

console.log(minusculo);

// 15 União arrays
let array1 = [1, 2, 3]; 
let array2 = [4, 5, 6]; 


let junto = array1.concat(array2);

console.log(junto);

// 16 Remover elemento array
let numeross = [10, 20, 30, 40]; 

numeross.shift();

console.log(numeros);

// 17 Propriedades obejto
let produto = { nome: 'Notebook', preco: 2500 }; 

if ('preco' in produto) {
    console.log("O notebook custa", produto.preco);
} else {
    console.log("Despreçado.");
}

// 18 For
let nomerus = [2, 4, 5, 7]
let soma = 0;


for (let i = 0; i < nomerus.length; i++) {
    soma += nomerus[i];
}

console.log("Números:", nomerus); 
console.log("Soma:", soma);

// 19 Clone obj
let ussuario = { nome: 'Vinicius', idade: 17 }; 

let clone = Object.assign({}, usuario, { cidade: 'São Paulo' });


console.log("Usuário original:", ussuario);
console.log("clone:", clone);

// 20 Reduce
let idl = [1, 2, 3, 4]; 


let idm = idl.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(idm);