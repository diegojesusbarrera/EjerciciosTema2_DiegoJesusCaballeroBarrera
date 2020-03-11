   


    function comparacion (arreglo1,arreglo2){
        var igualacion=true;
        for(let i=0; i<arreglo1.length;i++){
            if(arreglo1[i]!=arreglo2[i]){
                igualacion=false;
            }
        }
        return igualacion? true: false;
    }

    let arreglo1 =[1,2,3,4,5]; 
    let arreglo2 =[1,2,3,4,5]; 
    console.log("Resultado:"+comparacion(arreglo1,arreglo2));
