// 1 Facil
let ex1f = 6; 
let  divs = ex1f % 2 === 0;
console.log(divs)

// 2 Facil 
let ex2f = 2008; 
let zxc = 2024 - ex2f >= 18;
console.log(zxc)

// 3  Facil 
let ex3f = 10;
let ex3f1 = 2;
let Final = (ex3f + ex3f1) /2;
if(Final >=7){
    console.log("aprovado")
} else {
    console.log("reprovado")
}

// 4 Facil 

let idade = 19;
if (idade >= 16) {
    console.log("Pode votar!");
} else {
    console.log("Não pode votar!");
}

// 5 Facil 

let ex5f = 10;
let ex5f1 = 10;
if(ex5f > ex5f1){ 
console.log("O segundo numero é maior");
} else if (ex5f > ex5f1){ 
    console.log("Os numeros são iguais")
}else{console.log("O segundo é maior")}

// 6 Facil 

let horas = 45;
let extra = horas > 40;
console.log(extra);

// 7 Facil 

let entre10 = 12;
let entre102 = entre10 > 10 && entre10 < 50;
console.log(entre102);

// 8 Facil

let letra1 = "a";
if ('aeiouAEIOU'.includes(letra1)){
    console.log("É vogal")
} else {
    console.log("É uma consoante")
}

// 9 Facil 

let mês = "Dezembro"
if ('Janeiro Julho Dezembro'.includes(mês)){
    console.log("Férias");
}else{
    console.log("Trabalhar")
}


// 10 Facil 

let notaAluno = 3;
if(notaAluno >= 6){
    console.log("Nota A.")
}else {
    console.log("Nota B.")
};

// 1 Medio

let Nu1 = 10;
let Nu2 = 10;
let Nu3 = 10; 
if(Nu1> Nu2 && Nu1> Nu2 ){ 
console.log("O primeiro é o maior");
} else if (Nu2 > Nu1 && Nu2> Nu3){ 
    console.log("O segundo é o maior")
}else if (Nu3> Nu2 && Nu3> Nu2)
{console.log("O terceiro é o maior")
}else{console.log("os três são iguais");
}

// 2 Medio

let str = "Exemplo";

if (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z') {
    console.log("O primeiro caractere é uma letra maiúscula.");
} else {
    console.log("O primeiro caractere é uma letra minúscula.");
};

// 3 Medio

let temp = "11°C"
if (temp <"15°C"){
    console.log("Frio");
}else if(temp >= "15°C" && temp <="30°C"){
    console.log("Moderado");
}else{ console.log("Quente");}

// 4 Medio

let ano = 2020
if( ano %4 === 0 && ano %100 !== 0){
    console.log("É bissexto");
} else{console.log("Não é bissexto!")};

// 5 Medio

let divd = 21;
let  dive = 5;
if(divd %5 === 0 && dive %5 === 0){
    console.log("Todos dividem por 5");
}else if(divd %5 === 0 && dive %5 !== 0){
    console.log("Só o  primeiro é divisivel")
}else if (divd %5 !== 0 && dive %5 === 0){
    console.log("Só o segundo é divisivel")
}else{
    console.log("Nenhum divide por 5")
};

// 6 Medio

let corSemaforo = "verde"
if (corSemaforo === 'verde') {
    console.log("Siga");
} else if (corSemaforo === 'amarelo') {
    console.log("Aguarde")
} else if (corSemaforo === 'vermelho') {
    console.log("Pare");
} else {
    console.log("Quebrado")};

// 7 Medio

let numero = 1;
let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

if (primos.includes(numero)) {
    console.log("O número está na lista de primos.");
} else {
    console.log("O número não está na lista de primos.");
}

