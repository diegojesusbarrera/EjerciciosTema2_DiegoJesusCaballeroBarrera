
function datos(){
    xdatos = new date()

    xdatos.set(10,"Gato")
    xdatos.set(20,"Perro")
    xdatos.set(30,"Raton")
    return xdatos


}
animales = datos()
clave = 20
console.log("El dato de la clave de busqueda es: "+animales.get(clave))