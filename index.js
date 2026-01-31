function maquinaTuring(a, operacao, b) {

    let resultado = [];

    const operadores = ['/', '*', '-', '+'];

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
            };
        };
    };

    return resultado;

}

console.log(maquinaTuring(num1, operacao, num2));

