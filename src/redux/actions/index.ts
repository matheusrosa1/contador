export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const actionCreator = (increment = 1) => ({ // increment = 1, isto informa que o valor default é 1, mas caso colocar um numero dentro do parenteses ele irá responder ao número
  type: INCREMENT_COUNTER,
  payload: increment,
});

// o () entre as arrow functions informa para a função que ela deve retornar o que estám dentro dos parenteses, neste caso, um objeto.
