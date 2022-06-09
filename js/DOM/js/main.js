let usuario = prompt("Ingresá tu nombre").toUpperCase()

let textoDelDia=new Array()    
    textoDelDia[0] = `Bienvenido ${usuario} que tengas un buen día`
    textoDelDia[1] = `Hola ${usuario} que bueno que entraste a este sitio`
    textoDelDia[2] = `Buenas, ${usuario} ¿Qué vas a querer hoy?`
    textoDelDia[3] = `¡Qué alegría!, ${usuario} hay una oferta para vos`
        
    let a = textoDelDia.length
    let numAleatorio=Math.round(Math.random()*(a-1))

    function mostrartextoDelDia() {
        let texto = (textoDelDia[numAleatorio])
        document.getElementById('box').append(texto)
    } 
    

console.log(mostrartextoDelDia());

document.querySelector(".facebook").style.backgroundImage =
      "url(img/" + "face" + ".svg)";
document.querySelector(".whatsapp").style.backgroundImage =
      "url(img/" + "wp" + ".svg)";
document.querySelector(".insta").style.backgroundImage =
      "url(img/" + "ig" + ".svg)";
document.querySelector(".imagen").style.backgroundImage =
      "url(img/" + "logo-03" + ".png)";