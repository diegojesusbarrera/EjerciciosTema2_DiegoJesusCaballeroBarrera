var n = 5
var rangoinicio = 1
var rangofinal = 10
for (let x = rangoinicio; x <= rangofinal; x++) {
    if(n==x){
        console.log("El número "+n+" si se encuentra dentro del rango")
        break;
    }
    if(n!=x && x==rangofinal) console.log("El número "+n+" no se encuentra dentro del rango")
}