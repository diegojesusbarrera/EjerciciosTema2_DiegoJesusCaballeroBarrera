

var numDatos = 4, Suma = 0
var valores = [0,0,0,0]
for (let index = 0; index < numDatos; index++) {
    valores[index] = 2
}

var sumar = function(valoresx){
    for (let x = 0; x < valoresx.length; x++) {
        Suma += valoresx[x]
    }
    console.log("La suma es: "+Suma)
}

sumar(valores)



