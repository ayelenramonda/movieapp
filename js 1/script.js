let num = prompt("ingresá un número para saber qué ganaste, si no querés jugar mas ingresá salir.")
while (num != "salir") {
    switch (num){
        case "1":
            alert("Ganaste una silla");
        break;
        case "2":
            alert("Ganaste una bebida");
        break;
        case "3":
            alert("Ganaste un celular");
        break;
        case "4":
            alert("Ganaste un auricular");
        break;
        default:
            alert("no es un numero válido");
        break;
    }
    num = prompt("volvé a ingresar un número, o ingresá salir")
}