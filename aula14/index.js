// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)

function Conta(nContaP, tipoContaP, saldoP, titularP) {
  this.nConta = nContaP;
  this.tipoConta = tipoContaP;
  this.saldo = saldoP;
  this.titular = titularP;
}

let conta1 = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte");
let conta2 = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let conta3 = new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");

const contas = [conta1, conta2, conta3];

const banco = {
  clientes = contas,
  
  consultarCliente: function() {
    for(let conta of contas) {
      console.log(conta.titular)
    }
  }
};

banco.consultarCliente();
