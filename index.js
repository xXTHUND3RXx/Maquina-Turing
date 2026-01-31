function maquinaTuring(a, operacao, b) {

    let resultado = [];

    const operadores = ['/', '*', '-', '+']

    for(let i = 0; i < operadores.length; i++) {
        if (operadores[i] === operacao) {
            switch (operacao) {
                case '/':
                    resultado = a / b;
                    break;
                case '*':
                    resultado = a * b;
                    break;
                case '-':
                    resultado = a - b;
                    break;
                case '+':
                    resultado = a + b;
                    break;
            }
        }
    }

    return resultado;

}

const num1 = prompt('Digite o primeiro número')
const operacao = prompt('Digite uma operação matemática (resultados aceitos: /, *, -, +)')
const num2 = prompt('Digite o segundo número')

const resultado = alert(maquinaTuring(num1,operacao, num2));

