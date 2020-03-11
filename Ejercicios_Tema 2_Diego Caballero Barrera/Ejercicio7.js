
    function ordenar() {
        var orden=true;
        for (let i = 0; i < arguments.length; i++) {    
            if (i + 1 < arguments.length) {
                if (arguments[ i ] > arguments[i + 1]) {
                    orden = false;
                    break;
                }
            }      
        }
        return (orden)?true:false;
       
    }
    console.log("Resultado: "+ordenar(7,2,4,10,6,3));
