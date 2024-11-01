/// 1 

let nota1 = 8.8;
let nota2 = 9.0;
let nota3 = 12.0;

let media = (nota1 + nota2 + nota3) / 3; 

if(media >=6) {
    console.log("Aprovado");
} else {
console.log("Reprovado"); }

/// 2 

let Idadealuno = 15

if(Idadealuno >= 16) {
    console.log("Aprovado");
} else {
    console.log("Reprovado")
}

/// 3 

let valor = 59;

if(valor >50) {
    let desconto = valor * 0.1;
    console.log(desconto);
} else {
console.log("Nao há desconto!")
}

/// 4 

let presenca = 79;

if(presenca >75) {
    console.log("a presença do aluno esta boa")}
else{
    console.log("a presença do aluno esta ruim")
}

/// 5 

let periodo = 'V'

if (periodo === "M"){
    console.log("Periodo Matituno");
}else if (periodo === "V"){
    console.log("Periodo Vespertino");
}else if (periodo === "N"){
    console.log("Periodo Noturno");
} else { 
    console.log("Adicione um Periodo Valido")
}

/// 6


/// 7 

let estoque = 10;

if (estoque > 10 ) {
    console.log("Estoque suficiente")
} else if (estoque <10) {
    console.log("Repor o estoque")
}

/// 8 

let rendimento = 9
if (rendimento >= 8){
    console.log("Excelente");
}
else if (rendimento >= 6 && rendimento <= 7.9){
    console.log("Bom");
} else {(console.log("Precisa Melhorar"))};

/// 9

let matricula = "Matriculado";
let curso = 1000;
let dessconto = curso * 0.20;
if(matricula === "Matriculado"){
    console.log(`O valor do curso será ${curso - dessconto}R$`);
}else{(console.log(`O valor do curso será ${curso}R$`))};

// 10

// Funcionalidade
let funcionalidade = 9;
if (funcionalidade >=8){
    console.log("A funcionalidade está excelente");
}
else if (funcionalidade >= 6 && funcionalidade <= 7.9){
    console.log("A funcionalidade está boa");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Desing
let desing = 6;
if (desing >=8){
    console.log("O desing está excelente");
}
else if (desing >= 6 && desing <= 7.9){
    console.log("O desing está bom");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Documentação
let documentação = 2;
if (documentação >=8){
    console.log("A documentação está excelente");
}
else if (documentação >= 6 && documentação <= 7.9){
    console.log("A documentação está boa");
} else {(console.log("A documentação precisa melhorar"))};

// 11 
let presença = 75;
if (presença >= 75){
    console.log("Parabéns, você passou!");
} else {
    console.log("Venha com mais frequência no próximo ano!");
}let notas1 = 1;
let notas2 = 3;
let notas3 = 6.3;
let divisão = (notas1 + notas2 + notas3) /3;
if( divisão >= 6) {
    console.log("Parabéns, boas notas");
} else {console.log("Estude mais e se dedique da próxima vez")};

// 12 
let val = "cartão inativo"
console.log("Possui cartão valido?")
if ( val === "cartão ativo"){
    console.log("Entrada liberada")
}else{(console.log("Acesso negado"))}

// 13 
let recursos = 100;
if (recursos <100){
    console.log("Recursos insuficientes, reserve uma data!")
} else {(console.log("Retire seus recursos no estoque!"))}

// 14 

let tipoDisciplina = "Eletiva"; // Exemplo: "Obrigatória" ou "Eletiva"
let vagasDisponiveis = "Sim"; // Exemplo: "Sim" ou "Não"

if (tipoDisciplina === "Obrigatória") {
    console.log("Você está matriculado na disciplina obrigatória. Confirmação de matrícula realizada com sucesso!");
} else if (tipoDisciplina === "Eletiva") {
    if (vagasDisponiveis === "Sim") {
        console.log("Você está matriculado na disciplina eletiva. Confirmação de matrícula realizada com sucesso!");
    } else {
        console.log("Infelizmente, não há vagas disponíveis. Você está na lista de espera.");
    }
} else {
    console.log("Tipo de disciplina inválido. Por favor, escolha entre 'Obrigatória' ou 'Eletiva'.");
}


/// 15 

let prova23 = 7;
let prova24 = 8;
let prova35 = 5;

let mediaaa = (prova23 + prova24 + prova35) / 3;

if (mediaaa >= 6) {
    console.log("Você passou!");
    if (mediaaa > 8) {
        console.log("Excelente desempenho!");
    }
} else if (mediaaa >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}

/// 16
let infrações = [5, 3, 7];
let totalPontos = 0;

for (const pontos of infrações) {
    totalPontos += pontos;
}

if (totalPontos >= 20) {
    console.log("Sua carteira de motorista está suspensa.");
} else {
    console.log(`Você ainda pode acumular ${20 - totalPontos} pontos.`);
}


/// 17
let valorEmprestimo = 1000;
let numeroParcelas = 12;
let taxaJuros = 0.05;

let valorTotal1 = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);
console.log(`O valor total a ser pago ao final do empréstimo é: R$ ${valorTotal1.toFixed(2)}`);


/// 18
let prova1 = 6;
let prova2 = 7;
let prova3 = 8;
let atividadesExtras = true;

let media3 = (prova1 + prova2 + prova3) / 3;

if (atividadesExtras) {
    media3 *= 1.05;
}

if (media3 >= 6) {
    console.log("Você passou!");
} else if (media3 >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}


/// 19

let qualidade = 9;
let preco = 45;

let classificacao;

if (qualidade >= 8 && preco < 50) {
    classificacao = "Ótimo Custo-Benefício";
} else if (qualidade >= 6) {
    classificacao = "Bom";
} else if (qualidade >= 4) {
    classificacao = "Regular";
} else {
    classificacao = "Ruim";
}

console.log(`Classificação do produto: ${classificacao}`);


/// 20
let consumo = 150;
let valorTotal = 0;

if (consumo <= 100) {
    valorTotal = consumo * 0.50;
} else if (consumo <= 200) {
    valorTotal = 100 * 0.50 + (consumo - 100) * 0.75;
} else {
    valorTotal = 100 * 0.50 + 100 * 0.75 + (consumo - 200) * 1.00;
}

console.log(`O valor total da conta de energia é: R$ ${valorTotal.toFixed(2)}`);