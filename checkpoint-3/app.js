let curso = require('./curso');

function Aluno(nome, qtdFaltas, notas) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;
  this.calcularMedia = function() {
    // declaro a variável para somar todas as notas
    let somaNotas = 0;
    // laço de repetição for para percorrer o array de notas
    for (let i = 0; i < this.notas.length; i++) {
      // Adiciono cada nota à soma de notas
      somaNotas += this.notas[i];
    }
    // retorno a média das notas
    return somaNotas / this.notas.length;
  },
  // apenas adiciono um às faltas quando o método for chamado
  this.faltas = function () {
    this.qtdFaltas ++;
  }
}
// crio os alunos
var aluno1 = new Aluno("Michael", 2, [10, 7.5, 6, 8.6]);
var aluno2 = new Aluno("Renata", 1, [10, 10, 9.8, 10]);
var aluno3 = new Aluno("José", 7, [5.2, 4.5, 6, 9]);
var aluno4 = new Aluno("Misser", 10, [10, 5, 5, 10]);

// adiciono os alunos à array de alunos
curso.curso.adicionarAlunos(aluno1);
curso.curso.adicionarAlunos(aluno2);
curso.curso.adicionarAlunos(aluno3);
curso.curso.adicionarAlunos(aluno4);

console.log(curso.curso.listaEstudantes);

console.log(curso.curso.listaAprovacoes());