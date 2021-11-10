function podeSubir(altura, acompanhado) {
  let sobe = false;
  if (altura > 1.4 && altura < 2) {
    sobe = true;
  } else if (altura <= 1.4 && altura >= 1.20 && acompanhado == true) {
    sobe = true;
  }
  return sobe
}
// 1.4
console.log(podeSubir(1.4, true));
// 1.2 e acompanhado
console.log(podeSubir(1.2, true));
// 1.2 e não acompanhado
console.log(podeSubir(1.2, false));
console.log(podeSubir(1.1, true));
// maior de 3
// menor que 1.2
console.log(podeSubir(3, true));
// maior de 3
console.log(podeSubir(3, true));