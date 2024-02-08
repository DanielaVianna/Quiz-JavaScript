const perguntas = [
    {
      pergunta: "Qual método JavaScript é usado para adicionar um novo elemento HTML a uma página?",
      respostas: [
        "createElement()",
        "newElement()",
        "addHTML()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof(42))?",
      respostas: [
        "number",
        "string",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de se iniciar um loop infinito em JavaScript?",
      respostas: [
        "while (true) {...}",
        "for (;;) {...}",
        "do {...} while (true)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "shift()",
        "slice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para definir uma função em JavaScript?",
      respostas: [
        "function = minhaFuncao() {...}",
        "def minhaFuncao() {...}",
        "function minhaFuncao() {...}",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Converter um número em uma string",
        "Converter uma string em um número decimal",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para concatenar dois ou mais arrays?",
      respostas: [
        "concat()",
        "merge()",
        "join()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão: 3 + '3' em JavaScript?",
      respostas: [
        "6",
        "33",
        "Error",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método JavaScript usado para remover o primeiro elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "shift()",
        "unshift()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
  
      if(estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
    }
  
    quizItem.querySelector("dl").appendChild(dt)
  }
  
  quizItem.querySelector("dl dt").remove()
  
    quiz.appendChild(quizItem)
  }