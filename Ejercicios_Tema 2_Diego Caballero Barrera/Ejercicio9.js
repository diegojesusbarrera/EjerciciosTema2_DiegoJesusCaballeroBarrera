    function sum(valores) {
        if (valores.length == 0) {
        return 0;
        } else {
            const [first, ...rest] = valores;
            return first + sum(rest);
        }
    }
    console.log("Resultado:"+sum([1,3,5,7,9,11]));
