function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function verificarFibonacci(numero) {
  let encontrou = false;
  let i = 0;
  let valorAtual = fibonacci(i);

  while (valorAtual <= numero) {
    if (valorAtual === numero) {
      encontrou = true;
      break;
    }

    i++;
    valorAtual = fibonacci(i);
  }

  if (encontrou) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

// Exemplo de uso
verificarFibonacci(13);