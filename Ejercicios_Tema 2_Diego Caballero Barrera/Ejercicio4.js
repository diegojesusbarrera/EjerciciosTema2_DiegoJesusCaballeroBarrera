var valores = [3,12,13,5], def = valores[0]
for (let x = 0; x < valores.length; x++) {
    if(def < valores[x]) def = valores[x]
}
console.log("Este número  es el mayor de los valores:"+def+"")