function sequenciaFibonacci(numero){

    const fibonacci = [0,1];

    while (fibonacci[fibonacci.length - 1] < numero){

        let proximo = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
        fibonacci.push(proximo);
    }
    return fibonacci;
}

function verificarFibonacci(numero){

    const fibonacci = sequenciaFibonacci(numero);

    if (fibonacci.includes(numero)){
        console.log("O número pertence à sequência de Fibonacci ")
    }else{
        console.log("O número não pertence à sequência de Fibonacci ")
    }
}

verificarFibonacci(4);



