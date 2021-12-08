let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijão = 12;
let Brigadeiro = 8;

function microondas(prato, tempo) {

  switch (prato) {

    case 'Pipoca':
      prato = Pipoca
      break
    case 'Macarrão':
      prato = Macarrão
      break
    case 'Carne':
      prato = Carne
      break
    case 'Feijão':
      prato = Feijão
      break
    case 'Brigadeiro':
      prato = Brigadeiro
      break
    default:
      console.log("Prato Inexistente!/PIpiPIII")
      break
  }

  if (tempo >= prato && tempo < prato * 2) {
    console.log("Prato pronto, bom apetite!!!/PIpiPIII")
  } else if (tempo < prato) {
    console.log("Tempo insuficiente/PIpiPIII")
  } else if (tempo >= prato2 && tempo <= prato * 3) {
    console.log("O prato queimou/PIpiPIII")
  } else if (tempo >= prato * 3) {
    console.log("Kabummmmmmm/PIpiPIII")
  }
}
if (tempo >= prato && tempo < prato * 2) {
  console.log("Prato pronto, bom apetite!!!/PIpiPIII")
}
microondas('Brigadeiro', 30)