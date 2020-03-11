    function reloj(segundos) {
        var horas = Math.floor(segundos / 3600);
        horas = (horas < 10)? '0' + horas : horas;
        var minutos = Math.floor((segundos / 60) % 60);
        minutos = (minutos < 10)? '0' + minutos : minutos;
        var segundos = segundos % 60;
        segundos = (segundos < 10)? '0' + segundos : segundos;
        return horas + ':' + minutos + ':' + segundos;
    }
    console.log("Resultado"+ reloj(4000));
