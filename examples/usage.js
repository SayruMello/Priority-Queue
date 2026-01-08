const PriorityQueue = require('../lib/PriorityQueue');

function demo() {
  const q = new PriorityQueue(6);
  console.log('Inicialmente vazio?', q.isEmpty());

  q.enqueue('tarefa-baixa', 2);
  q.enqueue('tarefa-normal-1', 3);
  q.enqueue('tarefa-muito-alta', 5);
  q.enqueue('tarefa-normal-2', 3);
  q.enqueue('tarefa-alta', 4);

  console.log('Tamanho (esperado 5):', q.size());
  console.log('Próximo (peek) (esperado tarefa-muito-alta):', q.peek());

  console.log('Removendo (esperado tarefa-muito-alta):', q.dequeue());
  console.log('Removendo (esperado tarefa-alta):', q.dequeue());
  console.log('Removendo (esperado tarefa-normal-1):', q.dequeue());

  console.log('Tamanho (esperado 2):', q.size());

  try {
    q.enqueue('overflow1', 5);
    q.enqueue('overflow2', 5); // should fill
    q.enqueue('overflow3', 5); // should throw
  } catch (err) {
    console.log('Erro ao inserir quando cheia (esperado):', err.message);
  }

  console.log('Esvaziando...');
  q.clear();
  console.log('Vazio (esperado true):', q.isEmpty());
}

if (require.main === module) demo();
