//Para resolver este problema, você pode usar uma abordagem eficiente baseada em dois ponteiros. A ideia é percorrer o array de notas com dois ponteiros, um começando do início e o outro do final, e verificar se a soma de quaisquer duas notas é igual a 150. Se encontrar tal par, o suspeito pode ser o ladrão.

function podeTerRoubado(carteira) {
  let left = 0;
  let right = carteira.length - 1;

  while (left < right) {
    const soma = carteira[left] + carteira[right];

    if (soma === 150) {
      return true;
    } else if (soma < 150) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// Exemplo de uso:
const carteira1 = [20, 50, 100, 130];
const carteira2 = [70, 80, 100];
const carteira3 = [30, 120, 150];

console.log(podeTerRoubado(carteira1)); // true
console.log(podeTerRoubado(carteira2)); // true
console.log(podeTerRoubado(carteira3)); // false

/*Como funciona:
  Inicialização: Dois ponteiros, left e right, são inicializados. left começa no início do array e right começa no final.
  Percorrendo o array:
  Verificação da soma: A soma das notas nas posições left e right é calculada.
  Comparação:
  Se a soma for 150, retorna true, indicando que o suspeito pode ser o ladrão.
  Se a soma for menor que 150, move o ponteiro left para a direita para aumentar a soma.
  Se a soma for maior que 150, move o ponteiro right para a esquerda para diminuir a soma.
  Conclusão: Se todos os pares forem verificados e nenhum tiver a soma igual a 150, retorna false.
  Essa abordagem é eficiente com complexidade de tempo O(n), onde n é o tamanho do array, porque cada elemento é processado no máximo uma vez.*/
