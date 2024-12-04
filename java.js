///
 
function verificarParImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
  }
 
///

function verificarMaiorIdade(anoNascimento) {
    const idade = new Date().getFullYear() - anoNascimento;
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
  }

///

function verificarAprovacao(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media >= 7 ? 'Aprovado' : 'Reprovado';
  }

///

function verificarVoto(idade) {
    return idade >= 16 ? 'Pode votar' : 'Não pode votar';
  }

///

function maiorNumero(a, b) {
    return a > b ? a : b;
  }

///

function verificarHoraExtra(horasTrabalhadas) {
    return horasTrabalhadas > 40 ? 'Fez hora extra' : 'Não fez hora extra';
  }

///

function verificarIntervalo(numero) {
    return numero >= 10 && numero <= 50 ? 'Dentro do intervalo' : 'Fora do intervalo';
  }

///

function verificarVogalConsoante(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra.toLowerCase()) ? 'Vogal' : 'Consoante';
  }

///

function verificarFerias(mes) {
    const mesesFerias = ['dezembro', 'janeiro', 'julho'];
    return mesesFerias.includes(mes.toLowerCase()) ? 'Mês de férias' : 'Não é mês de férias';
  }

///

function atribuirNota(nota) {
    if (nota >= 9) {
      return 'A';
    } else if (nota >= 7) {
      return 'B';
    } else if (nota >= 5) {
      return 'C';
    } else if (nota >= 3) {
      return 'D';
    } else {
      return 'F';
    }
  }

  
