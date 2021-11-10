function microondas(comida, tempo) {
  switch (comida) {
    case 'Pipoca':
      if (tempo < 10) {
        console.log("Tempo insuficiente")
      } else if (tempo >= 20 && tempo < 30) {
        console.log(`O seu prato ${comida} queimou!`)
      } else if (tempo >= 30) {
        console.log("Kabummmmm!!")
      } else {
        console.log(`O seu prato ${comida} está no ponto!`)
      }
      break;

    case 'Macarrão': case 'Brigadeiro':
      if (tempo < 8) {
        console.log("Tempo insuficiente")
      } else if (tempo >= 14 && tempo < 21) {
        console.log(`O seu prato: ${comida} queimou!`)
      } else if (tempo >= 21) {
        console.log("Kabummmmm!!")
      } else {
        console.log(`O seu prato ${comida} está no ponto!`)
      }
      break;

    case 'Carne':
      if (tempo < 15) {
        console.log("Tempo insuficiente")
      } else if (tempo >= 30 && tempo < 60) {
        console.log(`O seu prato: ${comida} queimou!`)
      } else if (tempo >= 60) {
        console.log("Kabummmmm!!")
      } else {
        console.log(`O seu prato ${comida} está no ponto!`)
      }
      break;
    case 'Feijão':
      if (tempo < 12) {
        console.log("Tempo insuficiente")
      } else if (tempo >= 24 && tempo < 48) {
        console.log(`O prato ${comida} queimou`)
      } else if (tempo >= 48) {
        console.log("Kabummmmm!!")
      } else {
        console.log(`O seu prato ${comida} está no ponto!`)
      }
      break;
    default:
      console.log("Prato inexistente")

  }
  console.log(`O prato ${comida} está pronto bom apetite!`)
}


// Casos de teste
console.log("---------Pipoca Insuficiente---------")
microondas("Pipoca", 9)
console.log("---------Pipoca Tempo certo---------")
microondas("Pipoca", 10)
console.log("---------Pipoca Queimado---------")
microondas("Pipoca", 20)
console.log("---------Pipoca Kabum---------")
microondas("Pipoca", 30)

console.log("---------Macarrão Insuficiente---------")
microondas("Macarrão", 7)
console.log("---------Macarrão Tempo certo---------")
microondas("Macarrão", 8)
console.log("---------Macarrão Queimou---------")
microondas("Macarrão", 16)
console.log("---------Macarrão Kabum---------")
microondas("Macarrão", 32)

console.log("---------Carne Insuficiente---------")
microondas("Carne", 14)
console.log("---------Carne Tempo certo---------")
microondas("Carne", 15)
console.log("---------Carne Queimou---------")
microondas("Carne", 30)
console.log("---------Carne Kabum---------")
microondas("Carne", 60)

console.log("---------Feijão Insuficiente---------")
microondas("Feijão", 11)
console.log("---------Feijão Tempo certo---------")
microondas("Feijão", 12)
console.log("---------Feijão Queimou---------")
microondas("Feijão", 24)
console.log("---------Feijão Kabum---------")
microondas("Feijão", 48)

console.log("---------Brigadeiro Insuficiente---------")
microondas("Brigadeiro", 7)
console.log("---------Brigadeiro Tempo certo---------")
microondas("Brigadeiro", 8)
console.log("---------Brigadeiro Queimou---------")
microondas("Brigadeiro", 16)
console.log("---------Brigadeiro Kabumm---------")
microondas("Brigadeiro", 32)