# autor

Avilon Sayru do Amaral Melo

# Priority-Queue

Descrição breve da classe principal
- `PriorityQueue<T>`: TDA de fila com 5 níveis de prioridade (1=Muito baixa,[...],5=Muito alta). Recebe a capacidade máxima no construtor e mantém filas internas por prioridade. Métodos principais:
	- `enqueue(item, priority)`: insere item com prioridade (1-5). Lança erro se cheia.
	- `dequeue()`: remove e retorna o próximo elemento considerando prioridade mais alta.
	- `peek()`: retorna o próximo elemento sem remover.
	- `isEmpty()`, `isFull()`, `size()`, `clear()`.

# Como executar
1. Executar o exemplo com Node:

node examples/usage.js

2. Executar o teste simples:

node test/usage.test.js