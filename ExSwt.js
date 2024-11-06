/// 1  Sistema de Cadastro de Cursos

let curso = "Dev" 
switch (curso) {
    case "Dev" :
    console.log ('Curso de DEV Qua/Sex (08:00 - 17:00)');
    break;
    case 'Logistica':
    console.log('Curso de logistica Qua/Sex (08:00 - 17:00)');
    break;
    case 'Administração' :
        console.log('Curso de Administração Qua/Sex (08:00 - 17:00)');
    break;
}

/// 2 Calculadora Básica

let operacao = "+";
let num1 = 5;
let num2 = 3;

switch (operacao) {
case '+': 
    console.log(num1 + num2);
    break;
case '-': 
    console.log(num1 - num2);
    break;
case '*': 
    console.log(num1 * num2);
    break;
case '/': 
    console.log(num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero");
    break;
default: 
    console.log("Operação inválida");
}
/// 3 Classificação de Idade

let idade = 16; 

switch (true) {
    case (idade >= 0 && idade <= 12):
        console.log("Infantil");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        console.log("Adulto");
        break;
    case (idade >= 60):
        console.log("Idoso");
        break;
}

/// 4 Sistema de Classificação de Notas

let nota = 2; 

switch (true) {
    case (nota = 1 && nota <= 3):
        console.log("Insuficiente");
        break;
    case (nota >= 4 && nota <= 6):
        console.log("Regular");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Bom");
        break;
    case ( nota >= 9):
        console.log("Excelente");
        break;
}

/// 5 Simulador de Dias da Semana

let semana = 2;

switch(true) {
    case (semana === 1):
    console.log("Domingo");
    break;
    case (semana === 2):
    console.log("Segunda");
    break;
    case (semana === 3): 
    console.log("Terça");
    break;
    case (semana === 4): 
    console.log("Quarta-feira");
    break;
    case (semana === 5): 
    console.log("Quinta-feira");
    break;
    case (semana === 6): 
    console.log("Sexta-feira");
    break;
    case (semana === 7): 
    console.log("Sabado");
    break;
}

/// 6 Sistema de Mensagens de Eventos

let evento = "Festa junina" 
switch (evento) {
    case "Festa junina" :
    console.log ('A Festa Junina é uma celebração tradicional brasileira, realizada em junho, com danças típicas como quadrilha, comidas regionais como canjica e pamonha, e roupas caipiras. A festividade é uma homenagem aos santos populares São João, São Pedro e Santo Antônio.');
break;
}

/// 7 Calculadora de Meses do Ano

let mês = 12;

switch(mês) {
    case (1):
    console.log("Janeiro");
    break;
    case (2):
    console.log("Fevereiro");
    break;
    case (3): 
    console.log("Março");
    break;
    case (4): 
    console.log("Abril");
    break;
    case (5): 
    console.log("Maio");
    break;
    case (6): 
    console.log("Junho");
    break;
    case (7): 
    console.log("Julho");
    break;
    case (8): 
    console.log("Agosto");
    break;
    case (9): 
    console.log("Setembro");
    break;
    case (10): 
    console.log("Outubro");
    break;
    case (11): 
    console.log("Novembro");
    break;
    case (12): 
    console.log("Dezembro");
    break;
}

/// 8 Identificador de Estações do Ano

let Estação = 12;

switch(Estação) {
    case (1):
    console.log("Verão");
    break;
    case (2):
    console.log("Outono");
    break;
    case (3): 
    console.log("Inverno");
    break;
    case (4): 
    console.log("Primavera");
    break;
}

/// 9 Conversor de Unidades de Medida

let transform = 1000;
let Distancia = 5;
switch (transform){
    case (100):
        console.log(`${Distancia * transform}`);
        break;
    case (1000):
        console.log(`${Distancia * transform}`);
        break;
    case (0.100):
        console.log(`${Distancia * transform}`);
};

/// 10 Sistema de Notas por Conceitos

const Nots = 'B'; 


switch(Nots) {
    case 'A':
        console.log('Nota: 10');
        break;
    case 'B':
        console.log('Nota: 9');
        break;
    case 'C':
        console.log('Nota: 8');
        break;
    case 'D':
        console.log('Nota: 7');
        break;
    case 'F':
        console.log('Nota: 6');
        break;
}

/// 11 Conversor de Moedas

real = 1;
switch(real){
    case(real):
    console.log(`${real * 5.71}`);
} ;

/// 12  Identificador de Tipos de Curso 

let curso1 = "Dev Superior" 
switch (curso1) {
    case 'Dev Tecnico' :
    console.log ('Curso Tecnico');
    break;
    case 'Dev Superior':
    console.log('Curso Superior');
    break;
    case 'Dev Extensão':
        console.log('Curso Extensão');
    break;
}

/// 13 Sistema de Prioridades

let prioridade = 3;

switch(prioridade){
    case 1:
    console.log("Baixa");
break;
    case 2:
    console.log("Média");
break;
    case 3:
    console.log("Alta");
break;
    default:
    console.log("Prioridade inválida");
}

/// 14 Calculadora de IMC

const peso = 60;
const altura = 1.75;

const imc = peso / (altura * altura);


switch (true) {
case (imc < 18.5):
    console.log(`Seu IMC é: ${imc} - Baixo peso`);
    break;
case (imc < 24.9):
    console.log(`Seu IMC é: ${imc} - Peso normal`);
    break;
case (imc < 29.9):
    console.log(`Seu IMC é: ${imc} - Sobrepeso`);
    break;
    case (imc > 29.9):
    console.log(`Seu IMC é: ${imc} - Obesidade`);
    break;
}

/// 15 Classificador de Tipo de Documento

let RgE = 11;
let mensagemDeVida11 = "Numero do  RG Tem 9 digitos";
let mensagemDeVida12 = "Numero do  CPF Tem 11  digitos";
let mensagemDeVida13 = "Numero do  Passaporte Tem 6  digitos";

switch(true) {
    case (RgE = 9): 
        console.log(mensagemDeVida11);
        break;
    case (RgE = 9): 
        console.log(mensagemDeVida12);
        break;
        case  (RgE = 6): 
        console.log(mensagemDeVida13);
        break;
}


/// 16 Sistema de Tarifas de Transporte

let passagem = 2.20;
switch(passagem){
    case(passagem =2.20):
    console.log("Estudante");
break;
    case(passagem = 4.40):
    console.log("Trabalhador");
break;
    case(passagem = 0):
    console.log("Idoso");
break;
}


/// 17 Classificador de Tempo de Execução

let segundos = 55;

switch(true){
    case (segundos >=50 && segundos <= 59):
console.log("Muito lento");
break;
    case (segundos > 30 && segundos < 50):
console.log("Lento");
break;
    case (segundos >20 && segundos  < 30):
    console.log("Moderado");
break; 
    case (segundos  > 10 && segundos < 20):
    console.log("Rápido");
break;
}

/// 18 Sistema de Acessibilidade

let deficiencia = "Visual";

switch(deficiencia){
    case (deficiencia = "Visual"):
    console.log("Cão Guia, Bengala");
break;
    case (deficiencia = "Auditiva"):
    console.log("Libras");
break;
    case (deficiencia = "Motora"):
    console.log("Acompanhamento particular ")
}


/// 19 Conversor de Notas para Conceitos

let usuario = 90;

switch(true){
    case (usuario >=100):
    console.log("A");
break;
    case  (usuario >=80 && usuario <= 90):
    console.log("B");
break;
    case (usuario >=70 && usuario < 80):
    console.log("C");
break;
    case (usuario >=60 && usuario < 70):
    console.log("D");
break;
    case (usuario >= 0 && usuario < 60):
    console.log("F");
break;
    default:
    console.log("Nota invalida");
break;
}


/// 20 Simulador de Clima

let clima = "Nublado";

switch(clima){
    case (clima = "Sol"):
    console.log("UFAA aproveite o dia quente");
break;
    case (clima ="Nublado"):
    console.log("É sei não viu!!");
break;
    case  (clima = "Chuva"):
    console.log("É amigão não é hoje");
break;
    default:
    console.log("Clima invalido");
break;
}

