# My MovieApp :clapper:

Esta App desarrollada para el proyecto de RectJS de Coderhouse, me permite comprar peliculas entre clásicas, populares y nuevas.
Se puede iniciar sesión para agregar los datos del cliente, o completando un formulario para confirmar la compra.

[Ver el proyecto funcionando](https://sparkling-kitsune-742e74.netlify.app/)

## Principales interacciones :point_left:

-   Acceder al catálogo de películas, clickear en cada imagen y ver sus detalles en el top del home, luego con el botón ver mas se puede ir a sus detalles.
-   Filtrar por tipo de película (populares, clásicas o nuevas).
-   En el detalle se puede ver la sinopsis, afiche, precio e iniciar la compra, una vez elegida la cantidad.
-   Se puede registrar un usuario e iniciar sesión para comprar o utilizar un formulario sin estar logueado.
-   En el carrito se detalla la orden que incluye: película, cantidad, precio unitario y precio total.
-   Se pueden remover las películas que no se desean comprar.
-   Al finalizar la compra, el pedido se guarda en Firebase con los datos del comprador.
-   El carrito se vacía cuando se completa la compra.

## Capturas del proyecto :camera:

![Home](https://github.com/ayelenramonda/movieapp/blob/main/movieapp/src/assets/muestra1.png)
![Detalle](https://github.com/ayelenramonda/movieapp/blob/main/movieapp/src/assets/muestra2.png)
![Carrito](https://github.com/ayelenramonda/movieapp/blob/main/movieapp/src/assets/muestra3.png)
![Carrito](https://github.com/ayelenramonda/movieapp/blob/main/movieapp/src/assets/muestra4.png)

## El progreso de clase a clase :star:

**`La compra se agrega a firebase`**
El pedido que se realiza en el carrito se guarda en la base con precio y cantidad

**`Cambie API por firebase`**
Los datos ahora los trae desde firebase

**`Contador del icono de cart`**
Cuando se agrega un producto el icono del cart comienza a contar las peliculas

**`Desarrollo de carrito`**
Se agregaron los componentes del cart, se puede eliminar items y finalizar compra.

**`Agregar al carrito`**
Desde ItelDetail se agrega el producto

**`Primer preentrega`**
Cada pelicula seleccionada abre su detalle y da la opcion para comprar.

**`ItemDetailContent ItemDetail`**
Cambié el json por una API, traigo la información y muestro una sola en ItemDetail

**`API LOCAL y spinner`**
Agregué un json local y un spinner de espera

**`CardProduct`**
Agregué algunas imagenes para ir mostrando como se vería el contenido

**`ItemCount`**
Agregué ItemCount con los botones y stock

**`Nav`**
Hice un NavBar con el logo y 4 links

**`Props`**
Agregué props para que aparezca algun contenidor provisorio en ItemListContainer
