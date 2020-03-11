var listainicial = [2,4,8,2,4,5,10,13,15]
var listapares = []
var recurso = 0

function ListaPares(inicial) {
    if (inicial == 0) return true
    else return determinarImpares(inicial - 1)
}

function determinarImpares(inicial) {
    if (inicial == 0) return false
    else return ListaPares(inicial - 1)
}

for(var x = 0;x < listainicial.length;x++) {
    if(ListaPares(listainicial[x])==true) listapares[x] = listainicial[x]
}

do {
    if(listapares[recurso] == undefined) listapares.splice(recurso,1)
    console.log(listapares[recurso])
    recurso++
} while(recurso<listapares.length)