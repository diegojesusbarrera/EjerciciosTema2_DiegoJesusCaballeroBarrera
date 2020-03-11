function uniinterdif(grupo1,grupo2) {
        let union1 = new Set([...grupo1, ...grupo2]);
        let interseccion1 = new Set([...grupo1].filter(x => grupo2.has(x)));
        let diferencia1 = new Set([...grupo1].filter(x => !grupo2.has(x)));
        console.log("Union:");
        console.log(union1);
        console.log("Interseccion:");
        console.log(interseccion1);
        console.log("Diferencia:");
        console.log(diferencia1);
    }
    console.log("Resultado :")
    let grupo1 = new Set([1,2,3,4,5]);
    let grupo2 = new Set([2,6,8,10]);
    uniinterdif(grupo1,grupo2);        