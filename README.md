# Priority-Queue

Identificação dos membros
- Aluno: Seu Nome

Descrição breve da classe principal
- `PriorityQueue<T>`: TDA de fila com 5 níveis de prioridade (1=Muito baixa ... 5=Muito alta). Recebe a capacidade máxima no construtor e mantém filas internas por prioridade. Métodos principais:
	- `enqueue(item, priority)`: insere item com prioridade (1-5). Lança erro se cheia.
	- `dequeue()`: remove e retorna o próximo elemento considerando prioridade mais alta.
	- `peek()`: retorna o próximo elemento sem remover.
	- `isEmpty()`, `isFull()`, `size()`, `clear()`.

Arquivos importantes
- `src/PriorityQueue.ts` - implementação TypeScript.
- `lib/PriorityQueue.js` - versão CommonJS pronta para execução com `node`.
- `examples/usage.js` - exemplo de uso (executável).
- `test/usage.test.js` - teste simples com `assert`.

Como executar
1. Executar o exemplo com Node (não precisa instalar dependências):

```bash
node examples/usage.js
```

2. Executar o teste simples:

```bash
node test/usage.test.js
```

Observações
- A implementação principal está em TypeScript (`src/PriorityQueue.ts`) para ser usada/compilada em projetos TS. A pasta `lib` contém uma versão JavaScript pronta para uso imediato.
- Substitua o campo "Aluno: Seu Nome" pelos integrantes da dupla, se aplicável.
# Priority-Queue