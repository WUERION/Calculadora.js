// vamos utilizar un poco de manejo de DOM
// el DOM lo vamos a utilisar para selecionar los elemtos del html y les vamos a dar funcionalidad
// El txt es para indicar que es un elelmeto de DOM
// Con el ducumen.getelementbyid estamo accediendo al documento html por el id
// 

const txtop1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtop2 = document.getElementById("op2")
const btncalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")

// Pra crear la fincion que se ejecute cada ves que se oprima el boton de calcular

// para que funcione el boton hay que añadir el evento 
btncalcular.addEventListener("click", calcular)

// Primero vamos hacer que los valore sen corectos y no falsos para que funcione
// primero vamos a checar que lo que este en el campo de op1 sea el valor corecto

// el elemto value es para mostrar lo que hay en el campo en la consola

function calcular(){
    const operacion = txtoperacion.value
    // Ahora vamos a hacer los calculos entre operador 1 y operador2 
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat (txtop2.value)  
   // aqui estamos preguntado si operador es +,  -, *, / si ese es el caso damos un resultado 
    // sino es el caso dammos un error
    // sinan significa que no es un numero
    // el sinan es para que en el operador1 no es un numero nodejara avanzar al switch
    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" )
    && !isNaN(op1) && !isNaN(op2)){
        // Toda esta condicion verifica que los valores sena corectos y que los operados si sena numeros
        // inenertext es para que el sesultado no se muestre en la consola sino en la pantalla
        // el switch es como un if y else pero mejor
        // el switch nos permite agarar un valor y envase del valor de operacion +, -, etc. acemos algo difente
        let resultado;
        switch(operacion){
            case "+":
            resultado = op1 + op2
            break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }       
        presultado.style = "color:black"
	    presultado.innerText = "= " + resultado
    }else{
        presultado.style = "color:red"
        presultado.innerText = "calculo imposible"
    }
}
