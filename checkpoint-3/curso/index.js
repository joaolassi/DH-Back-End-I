module.exports = {
  curso: {
    nome: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 10,
    listaEstudantes: [],
    // adiciono os alunos no array "listaEstudantes"
    adicionarAlunos: function (aluno) {
      // adiciona um aluno no final da array
      this.listaEstudantes.push(aluno);
    },
    aprovacao: function (aluno) {
      // crio as variáveis para diminuir código e ficar mais legível nas condições
      let mediaAluno = aluno.calcularMedia();
      let faltasAluno = aluno.qtdFaltas;
      // condição para que o aluno só seja aprovado se estiver acima ou igual à media
      // e com faltas abaixo das faltas máximas ou se tiver com faltas iguais às faltas
      //  máximas ele teria que tirar mais que 10% da nota de aprovação
      if (mediaAluno >= this.notaAprovacao && faltasAluno < this.faltasMaximas ||
        faltasAluno == this.faltasMaximas && mediaAluno > (this.notaAprovacao * 1.1)) {
        return true;
      } else {
        return false;
      }
    },
    listaAprovacoes: function() {
      // array para os resultados
      let resultados = [];
      for (let i = 0; i < this.listaEstudantes.length; i++) {
        // adiciono na ultima posição da array "resultados" os resultados
        resultados.push(this.aprovacao(this.listaEstudantes[i]));
      }
      // retorno o array de resultados
      return resultados;
    }
  }
}