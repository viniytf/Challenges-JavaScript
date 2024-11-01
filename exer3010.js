// 1 Maiusculo/Minusculo
let texto = "senaimorvan"; 
let maiusculo = texto.toLowerCase();
let minusculo = texto.toUpperCase();

console.log(minusculo);
console.log(maiusculo);

// 2 includes/indexOF
let aaa = "certeza";
console.log(aaa.includes("a"), aaa.indexOf("a"));

// 3 slice
let noiticia = "Frase para retirar";
console.log(noiticia.slice(10))

// 4 concat
let morvan = "Morvan";
console.log(morvan.concat(" Figueiredo"));

// 5 Replace
let abc = "abc";
console.log(abc.replace('abc', 'zxc'))

// 6 split, join
let palavra = "strng-01"
console.log(palavra.split("-"))

// 7 push, pop

let fila = [];
let add = fila.push(1, 2, 3 ,4 , 5);
let pp = fila.pop(5);
console.log(fila);

// 8 shift, unshift 
let cliente = [15, 20, 25, 30];
let sai = cliente.shift();
let entra = cliente.unshift(22);
console.log(cliente);

// 9 reverse

let numerosss = [1, 2, 3, 4 ,5];
console.log(numerosss.reverse());

// 10 map 


// 11 filter 

const listaNotas = [
{nome: 'Bagriel', nota: 10},
{nome: 'rilomu', nota: 15},
{nome: 'Pina', nota: 12},
{nome: 'Carla', nota: 6}
];

const alunoAprovado = listaNotas.filter(function(aluno){
    return aluno.nota > 7;
});
console.log(alunoAprovado);

// 12 reduce    
const compras = [2, 4, 6, 8, 0]

const soma = compras.reduce((total, num) => total + num, 0)
console.log(soma);

// 13 sort 

let livro = ["Diario de um Banana", "Biblia", "O pequeno Principe"];

livro.sort();


console.log(livro);

// 14 Math.random, Math.floor
let senha  = Math.random().toString(36).substr(2, 10);
console.log(senha);

let idade = Math.floor(25.5);
console.log(idade);

