// PROMPT APARECE NA TELA DO NAVEGADOR, RECEBENDO DADOS DO USUARIO
const idade = prompt("Qual sua idade?");

console.log("O usuario tem", idade, "de idade")


// Corecao Explicita (Conversao Manual)

console.log(Number("X")); // Resultado:NaN = Not a Number, X nao eh um numero

console.log(String(10), typeof String(10)); // Ja converte para String o 10

console.log(Boolean(0)); // Qualquer numero que nao seja = 0 no tipo Boolean sera true 


// Corecao Implicica

console.log(1+ "1"); // Ele retorna 11 do tipo de texto, convertando o primeiro de int para string

console.log(10 - "5"); // Se for subtracao,ele convertou o 10 para int e devolveu o resultado

console.log(10 * "5"); // Multiplica entao retornou 50

console.log(10 / "5"); // Divide e vira 2