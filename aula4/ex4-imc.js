let nome = "José da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.70;
let plano = true;
let imc = peso / (altura * altura);

let saida = nome + " tem " + idade + " anos " + " e seu índice de massa corporal é de: " + imc.toFixed(2);
console.log(saida)