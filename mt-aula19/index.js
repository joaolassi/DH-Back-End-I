function Pessoa(nome, altura, sexo) {
  this.nome = nome;
  this.altura = altura;
  this.sexo = sexo;
}

const p1 = new Pessoa('Jão', 1.79, 'H');
const p2 = new Pessoa('Karine', 1.52, 'M');
const p3 = new Pessoa('Maria', 1.60, 'M');
const p4 = new Pessoa('Henrique', 1.80, 'H');
const p5 = new Pessoa('Marcelo', 1.99, 'H');

let grupo = {
  pessoas: [p1, p2, p3, p4, p5],
  numeroHomens: function () {
    let qtdHomens = 0;
    for (let i = 0; i < this.pessoas.length; i++) {
      const pessoa = this.pessoas[i];
      if (pessoa.sexo == 'H') {
        qtdHomens++;
      }
    }
    return qtdHomens;
  },
  mediaMulheres: function () {
    let mediaMulheres = 0;
    let qtdMulheres = 0;

    for (let i = 0; i < this.pessoas.length; i++) {
      const pessoa = this.pessoas[i];
      if (pessoa.sexo == 'M') {
        qtdMulheres++;
        mediaMulheres += pessoa.altura;
      }
    }
    return mediaMulheres / qtdMulheres;
  },
  maiorEMenorAltura: function () {
    let maiorAltura = this.pessoas[0].altura;
    let menorAltura = this.pessoas[0].altura;
    for (let i = 1; i < this.pessoas.length; i++) {

      if (this.pessoas[i].altura > maiorAltura) {
        maiorAltura = this.pessoas[i].altura;
      }

      if (this.pessoas[i].altura < menorAltura) {
        menorAltura = this.pessoas[i].altura;
      }
    }
    return [maiorAltura, menorAltura];
  },
}
console.log(`
  Números de homens: ${grupo.numeroHomens()}
  
  Média altura mulheres: ${grupo.mediaMulheres()}

  Maior e menor altura: ${grupo.maiorEMenorAltura()}
`);