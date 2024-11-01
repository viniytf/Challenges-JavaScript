
// 1 fac.

function saudacao(nome) {
return"Hello" + nome ;
}

let mensagem = saudacao("Pina");

console.log(mensagem);

// 2 fac.

function soma(n1,n2){
    console.log(n1+n2);
}
let num1 = 12;
let num2 = 10;

soma(num1,num2);
// 3 fac.

function parOuImpar () {
let numerr = 2;
let parouimpa = numerr % 2 === 0 
console.log(parouimpa)

}

parOuImpar()

// 4 fac. 

function Multiplica () {

    let ne1 = 6;
    let ne2 = 4; 
    console.log( ne1 * ne2);
}

Multiplica()

// 5 fac. 

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius} °C é igual a ${temperaturaFahrenheit} °F`)
// 6 fac. 

function calculaMedia () {
    let a = 190;
    let b = 398;
    let c = 560; 
    let conta1= (a + b + c) /3;
    return conta1;
}   
let media = calculaMedia();
console.log(media);

// 7 fac.  

function minutoParasegundos () {

    let min = 10;
    let seg = min * 60;
    return seg;
}
let tempo = minutoParasegundos();
console.log(tempo);

// 8 fac. 

function ehPositivo () { 
    let nume1 = 100;
    let poggers = nume1 > 0; 
    return poggers;
}
let noggers = ehPositivo();
console.log(noggers);

// 9 fac. 

function repetirPalavra(palavra, numeroDeRep) {
    return palavra.repeat(numeroDeRep);
}

let resultado = repetirPalavra(" Gabriel do Borel", 3);
console.log(resultado);

// 10 fac.

function calcularAreaRetangulo(){
    baser = 10;
    altr = 12;
    ret = baser * altr;
    return ret;
}
let retangulo = calcularAreaRetangulo();
console.log(retangulo);

// 1 Med.

function verificaPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    return palavraLimpa === palavraLimpa.split('').reverse().join('');
}
console.log(verificaPalindromo('A man a plan a canal Panama'));

// 2 Med. 

function fatorial(n) {
    
    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1; 
    }

    let resultado = 1; 
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }
    return resultado; 
}

console.log(fatorial(5)); 


// 3 Med.
function filtraPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); 
        }
    }
    return pares; 
}

console.log(filtraPares([1, 2, 3, 4, 5, 6])); 


// 4 Med.


// 5 Med.
function ordenaStrings(arr) {
    return arr.sort();
}

const strings = ["banana", "maçã", "laranja", "abacaxi"];
const stringsOrdenadas = ordenaStrings(strings);
console.log(stringsOrdenadas);


