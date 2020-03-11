
var valor = 9
var arreglo = [7,9,8,4]

function ExistenciaRango(valor){
    for (let x = 0; x < lista.length; x++) {
        if(arreglo[x] == valor){
            return true;
        }
    }
}

if(ExistenciaRango(valor)){
    console.log("El numero "+valor+" si se encuentra en el arreglo")
    console.log(true)
}else{
    console.log("El numero "+valor+" no se encuentra en el arreglo")
    console.log(false)
}