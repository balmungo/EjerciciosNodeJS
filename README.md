# EJERCICIO DE LOGICA PROGRAMADOS EN JAVASCRIPT

Este repositorio contiene la solucion al diferentes ejercicios, que fueron obtenidos del sitio web [Codewars](https://www.codewars.com/)

El presente repositorio esta enfocado a la resolucion de problemas de ejercicios propuestos en diferentes plataformas de programacion, siendo esta la version para JavaScript.

## Derechos de autor

El ejercicio y su descripcion son propiedad de [Codewars](https://www.codewars.com/) y sus respectivos autores.
Agradezco a [Codewars](https://www.codewars.com/) por proporcionar este desafio y permitirme compartir mi solucion.

## Licencia

Este código se proporciona bajo la licencia [MIT](LICENSE).
Sin embargo, el ejercicio y su descripción son propiedad de [Codewars](https://www.codewars.com) y deben respetarse sus términos y condiciones.

<br>

> # (#1) Do you speak "English"? - ¿HABLAS INGLES?

**Ejercicio obtenido de:** [Codewars - Do you speak "English"?](https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058)

## Descripción del Ejercicio

Dada una cadena de longitud arbitraria con cualquier caracteres ASCII.
Escriba una función para determinar si la cadena contiene toda la palabra "inglés".
El orden de los caracteres es importante:
una cadena "abcenglishdef" es correcta pero "abcneglishsef" no es correcta.
La letra superior o minúscula no importa:
"inglés" también es correcto.
Valor de retorno como valores booleanos, verdadero para que la cadena contenga "inglés",
falso porque no lo hace.

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo[ejercicio_01.js](./ejercicio_01.js).

<br>

> # (#2) Do you speak retsec? - ¿HABLAS RETSEC?

**Ejercicio obtenido de:** [Codewars Do you speak retsec?](https://www.codewars.com/kata/5516ab668915478845000780)

## Descripción del Ejercicio

Tú y tus amigos quieren jugar agentes encubiertos.
Para intercambiar sus mensajes secretos , ha creado el siguiente sistema:
toma la palabra, la corta por la mitad y coloca la primera mitad detrás de este último.
Si la palabra tiene un número desigual de caracteres, deja el medio en su lugar anterior:

    SECRET ===> [RET][SEC] AGENT ===> [NT](E)[AG]

De esa manera, podrá intercambiar sus mensajes en privado.
Tarea

Te dan una sola palabra.
Tu tarea es intercambiar las mitades.
Si la palabra tiene una longitud desigual,
deje el personaje en el medio en esa posición e intercambie los trozos a su alrededor.

Ejemplos

    reverse_by_center("secret") == "retsec" # no center character
    reverse_by_center("agent") == "nteag" # center character is "e"

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_02.js](./ejercicio_02.js).

<br>

> # (#3) GRABDOLL

**Ejercicio obtenido de:** [Codewars Training JS #11: loop statement --break,continue](https://www.codewars.com/kata/5721c189cdd71194c1000b9b)

## Descripción del Ejercicio

Codifica la función grabDoll.
La función acepta un parámetro: dolls.
Este es un arreglo de cadenas (strings), una lista de algunas muñecas.
Debes recorrer el arreglo dolls utilizando un bucle for.
Si el elemento es "Hello Kitty" o "Barbie doll",
debes agregarlo a una bolsa (la bolsa es un arreglo que ya está definido en la función);
si es cualquier otra cadena, debes usar continue para saltar ese elemento.
Cuando la bolsa tenga tres elementos, la bolsa estará llena.
Debes usar break para salir del bucle;
si la bolsa no está llena, debes continuar recorriendo dolls hasta el último elemento.
Retorna la bolsa después de que el bucle for haya terminado.
Debes usar for, break y continue en tu código.

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_03.js](./ejercicio_03.js).

<br>

> # (#4) Split The Bill - SEPARA EL DINERO

**Ejercicio obtenido de:** [Codewars Split The Bill](https://www.codewars.com/kata/5641275f07335295f10000d0)

## Descripción del Ejercicio

Estás en un restaurante con tus amigos y es hora de irse,
pero todavía hay un gran problema... la factura.
¿Quién pagará qué? Por suerte para ti,
¡tienes tu computadora a mano! Una función simple y la factura se paga,
¡y de manera justa!

La función debe tomar un parámetro:
un objeto/diccionario con dos o más pares clave-valor que representan
a los miembros del grupo y la cantidad gastada por cada uno.

Tu función debe devolver un objeto/diccionario con los mismos nombres,
mostrando cuánto dinero deben pagar o recibir los miembros.

Puntos adicionales:

    Los valores deben ser números positivos si la persona
    debe recibir dinero del grupo, y números negativos si
    debe pagar dinero al grupo.

    Si el valor es un decimal, redondéalo a dos decimales.

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_04.js](./ejercicio_04.js).

<br>

> # (#5) Transform To Prime PRIMO MAS CERCANO

**Ejercicio obtenido de:** [Ƈodewars Transform To Prime](https://www.codewars.com/kata/5a946d9fba1bb5135100007c).

## Descripción

Dada una lista de enteros positivos,
determine el número mínimo que debe insertarse para que la suma de todos
los elementos se convierta en el número primo más cercano .
Notas

    La lista siempre tendrá al menos 2 elementos .
    Todos los elementos serán enteros positivos ( n > 0).
    La lista puede contener valores duplicados .
    La nueva suma debe ser el número primo más cercano .

Ejemplos

minimumNumber({3, 1, 2}) // ➞ 1

Explicación:

    La suma de [3, 1, 2] es 6.
    El número primo más cercano es 7.
    Necesitamos insertar 1 para alcanzar 7.

minimumNumber({2, 12, 8, 4, 6}) // ➞ 5

Explicación:

    La suma de [2, 12, 8, 4, 6] es 32.
    El número primo más cercano es 37.
    Necesitamos insertar 5 para alcanzar 37.

minimumNumber({50, 39, 49, 6, 17, 28}) // ➞ 2

Explicación:

    La suma de [50, 39, 49, 6, 17, 28] es 189.
    El número primo más cercano es 191.
    Necesitamos insertar 2 para alcanzar 191.

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_05.js](./ejercicio_05.js).

<br>

> # (#6) The Office V - Find a Chair - BUSCA SILLAS

**Ejercicio obtenido de:** [Codewars The Office V - Find a Chair](https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/javascript).

## Descripción

Has encontrado una sala de reuniones.
¡Uf! Llegas listo para presentar y descubres que alguien ha tomado una o más de las sillas.
Necesitas encontrar sillas rápidamente...
Revisa todas las otras salas de reuniones para ver si hay sillas disponibles.

Tu sala de reuniones tiene capacidad para 8 sillas.
Te diré cuántas sillas han sido tomadas.
Necesitas encontrar esa cantidad de sillas.

Encuentra sillas de repuesto en las otras salas de reuniones.
Cada sala de reuniones está representada por una tupla que contiene:

    El número de ocupantes, representado por una cadena de texto donde cada ocupante es una 'X'.

    Un número entero que indica cuántas sillas hay en esa sala.

Debes devolver una lista de números enteros que muestre cuántas sillas tomas de cada sala,
en orden, hasta que tengas la cantidad necesaria.

Ejemplo:

Si tienes la siguiente lista de salas:
[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]]
Y necesitas 4 sillas, el resultado sería:
[0, 1, 3]
Esto significa:

    No tomas ninguna silla de la sala 0 (porque no hay sillas libres).

    Tomas 1 silla de la sala 1.

    Tomas 3 sillas de la sala 2.

    No necesitas revisar la sala 3 porque ya tienes las 4 sillas que necesitabas.

Notas adicionales:

    Si no necesitas sillas, devuelve "Game On".

    Si no hay suficientes sillas disponibles en todas las salas, devuelve "Not enough!".

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_06.js](./ejercicio_06.js).

<br>

> # (#7) ALBUM DE FOTOS

**Ejercicio obtenido de:** [Codewars]

## Descripción

Estás en la cima de una increíble montaña del Himalaya. ¡La vista es absolutamente impresionante! Quieres tomar una foto con tu teléfono, pero... ¡tu memoria está llena otra vez! Bueno, es hora de organizar tus fotos desordenadas y liberar algo de espacio...

Dada una galería de fotos, escribe una función para organizar tus imágenes. Recibes un disco duro lleno de fotos en orden aleatorio, y debes devolver un arreglo con las 5 fotos más recientes MÁS la siguiente foto que siga en secuencia (del mismo año y con el número siguiente al de la última foto).

Siempre recibirás al menos una foto, y todas las fotos estarán en el formato YYYY.imgN, donde:

    YYYY es el año.

    N es el número de la imagen.

Ejemplos:

    Si recibes:
    ["2016.img1", "2016.img2", "2015.img3", "2016.img4", "2013.img5"]
    Debes devolver:
    ["2013.img5", "2015.img3", "2016.img1", "2016.img2", "2016.img4", "2016.img5"]
    Explicación:

        Las 5 fotos más recientes son: 2013.img5, 2015.img3, 2016.img1, 2016.img2, 2016.img4.

        La siguiente foto en secuencia sería 2016.img5 (porque sigue a 2016.img4).

    Si recibes:
    ["2016.img1"]
    Debes devolver:
    ["2016.img1", "2016.img2"]
    Explicación:

        Solo hay una foto, pero debes incluir la siguiente en secuencia, que sería 2016.img2.

Notas:

    Las fotos están desordenadas, así que primero debes ordenarlas por año y número.

    Siempre debes devolver las 5 fotos más recientes más la siguiente en secuencia.

    Si no hay suficientes fotos para completar las 5, devuelve las que haya más la siguiente en secuencia.

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_07.js](./ejercicio_07.js).

<br>

> # (#8) Summarize ranges - Resumir Rangos

**Ejercicio obtenido de:** [Codewars Summarize ranges](https://www.codewars.com/kata/55fb6537544ae06ccc0000dc).

## Descripción

Dada una matriz ordenada de números, devuelva el resumen de sus rangos.
Entradas y salidas:

    [1, 2, 3, 4] ==> ["1->4"]
    [1, 1, 1, 1, 1] ==> ["1"]
    [0, 1, 2, 5, 6, 9] ==> ["0->2", "5->6", "9"]
    [0, 1, 2, 3, 3, 3, 4, 5, 6, 7] ==> ["0->7"]
    [0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10] ==> ["0->7", "9->10"]
    [-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12] ==> ["-2", "0->7", "9->10", "12"]

> [!TIP]
>
> ## Solución
>
> La solucion se encuetra en el archivo [ejercicio_08.js](./ejercicio_08.js).

<br>

> # (#9) UN-usual Sort - ORDENAMIENTO ESPECIAL

**Ejercicio obtenido de:** [Codewars UN-usual Sort](https://www.codewars.com/kata/5443b8857fc4473cb90008e4).

## Descripción

Tienes que crear una función que ordene una lista de caracteres y números
de un solo dígito de la siguiente manera:

    Letras: Deben ordenarse de la manera habitual, es decir:

        Las letras mayúsculas van antes que las minúsculas.

        Dentro de las mayúsculas o minúsculas,
        se ordenan alfabéticamente (por ejemplo, 'A' antes de 'B', 'Z' antes de 'a').

    Números: Deben ir después de todas las letras,
    y deben ordenarse de menor a mayor.
    Además, si hay números como cadenas (por ejemplo, "1") y
    números como valores numéricos (por ejemplo, 1),
    los números como valores numéricos deben ir antes que los números como cadenas.

Ejemplos:

    ["a", "z", "b"] → ["a", "b", "z"] (orden alfabético normal)

    ["a", "Z", "B"] → ["B", "Z", "a"] (las mayúsculas van antes que las minúsculas)

    ["1", "z", "a"] → ["a", "z", "1"] (los números van después de las letras)

    [3, "2", 1, "a", "c", "b"] → ["a", "b", "c", 1, "2", 3] (los números van después de las letras, y los números como valores van antes que los números como cadenas)

    [3, "2", 1, "1", "3", 2] → [1, "1", 2, "2", 3, "3"] (los números como valores van antes que los números como cadenas)

Nota:

    Puedes asumir que la entrada siempre será una lista de caracteres o números de un solo dígito.

Resumen:

Tu función debe ordenar las letras primero (mayúsculas antes que minúsculas,
y en orden alfabético) y luego los números (valores numéricos antes que cadenas numéricas,
y en orden ascendente).

> [!TIP]
>
> ## Solución
>
> La solución se encuentra en el archivo [ejercicio_09.js](./ejercicio_09.js).

<br>

> # (#10) Rectangle into Squares - CUADRADOS DENTRO UN RECTANGULO

**Ejercicio obtenido de:** [Codewars Rectangle into Squares](https://www.codewars.com/kata/55466989aeecab5aac00003e/python).

## Descripción

```
┌──────┬──────┬──────┬──────┬──────┐
│░░░░░░│░░░░░░│░░░░░░│▒▒▒▒▒▒│▒▒▒▒▒▒│
│░     │      │     ░│▒     │     ▒│
├──────┼──────┼──────┼─── 4=2^2 ───┤
│░     │9=3^2 │     ░│▒     │     ▒│
│░     │      │     ░│▒▒▒▒▒▒│▒▒▒▒▒▒│
├──────┼──────┼──────┼──────┼──────┤
│░     │      │     ░│  1   │  1   │
│░░░░░░│░░░░░░│░░░░░░│      │      │
└──────┴──────┴──────┴──────┴──────┘
```

El dibujo proporcionado muestra cómo cortar un rectángulo "verdadero"
(es decir, un rectángulo donde las dos dimensiones son diferentes)
en cuadrados.
Tu tarea es convertir este dibujo en un algoritmo.

Entrada:

    Un número entero positivo que representa la longitud del rectángulo.

    Un número entero positivo que representa el ancho del rectángulo.

Salida:

Debes devolver una colección o una cadena
(dependiendo del lenguaje de programación)
con el tamaño de cada uno de los cuadrados resultantes.

Ejemplos:

    sqInRect(5, 3) debería devolver [3, 2, 1, 1]

    sqInRect(3, 5) debería devolver [3, 2, 1, 1]

Notas:

    Si la longitud y el ancho son iguales, es decir,
    si el rectángulo es en realidad un cuadrado,
    el problema es diferente.
    En ese caso, debes devolver None, nil, null, o una estructura vacía,
    dependiendo del lenguaje.
    Por ejemplo, en Python devolverías None,
    en C++ devolverías {}, y en Bash devolverías "nil".

    Si el rectángulo es un cuadrado,
    la solución obvia sería devolver un solo cuadrado del tamaño del lado,
    pero eso no está en el espíritu de este ejercicio.
    Por lo tanto, en ese caso,
    debes devolver un valor que indique que no hay solución
    válida bajo las reglas de este problema.

> [!TIP]
>
> ## solución
>
> La solucion se encuentra en el archivo [ejericio_10.js](./ejercicio_10.js).
