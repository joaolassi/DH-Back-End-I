// Expressa
let soma2 = function (a, b) {
  console.log(a + b);
}

// arrow function
let soma3 = (a, b) => {
  console.log(a + b);
}

soma3(1, 1);

let escola = {
  alunos: ["Aluno 1", "Aluno2"],
  nome: "Escola X",
  // quando uso arrow function o "this" não funciona teria que usar o nome do 
  // objeto ".variavel"
  nomeEscola: () => {
    console.log(escola.nome);
  },
  nomeEscola2: function () {
    console.log(this.nome)
  }
}

for (let i = 0; i < escola.alunos.length; i++) {
  const aluno = escola.alunos[i];
}

escola.alunos.forEach((aluno, index) => {
  console.log(aluno, index)
})

function calculadora(n1, n2, n3) {
  // operacao(n1, n2)
}

calculadora(1, 1, (a, b) => {
  console.log(a + b)
});

console.log()

escola.nomeEscola();
escola.nomeEscola2();

// map

const numeros = [5, 4, 3, 2, 1];
const soma = numeros.reduce((numero1, numero2) => numero1 * numero2);
console.log(soma);

// percorre o array
const dobro = numeros.map((numero) => {
  return {
    dobro: numero * 2,
    triplo: numero *3
  }
})

console.log(dobro)