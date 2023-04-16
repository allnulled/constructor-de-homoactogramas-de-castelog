# constructor-de-homoactogramas-de-castelog

Constructor de homoactogramas de Castelog.

## ¿Qué es un *homoactograma*?

Etimológicamente:
  - *Homo* de «humano» («homo» o igual, griego)
  - *Acto* de «actividad» («activitas» o llevar a cabo, latín)
  - *Grama* de «representación» («graphéin» o dibujo, griego)

Un homoactograma u **homactograma** es una representación de la actividad humana.

## Versión online

[https://allnulled.github.io/constructor-de-homoactogramas-de-castelog](https://allnulled.github.io/constructor-de-homoactogramas-de-castelog)

## Instalación

En un directorio nuevo, clona el proyecto:

```sh
git clone .
```

Luego, dentro del proyecto creado, instala las dependencias:

```
npm install
```

## Ejecución

Para arrancar el servidor:

```sh
mpm test
```

## API de PaloMan y su entorno

**PaloMan** es el referente principal de los homactogramas de Castelog. Es una representación humana, a base de palos.

El entorno son todas las herramientas que hacen posible a PaloMan.

### API de PaloMan de Movimientos de Bajo Nivel

Los **Movimientos de Bajo Nivel** de PaloMan son las articulaciones más básicas. Se supone que con esta interfaz, puedes crear otras de más alto nivel, atomizando/agrupando instrucciones de movimientos de bajo nivel.

En el campo de texto donde introduces el código, puedes usar Castelog:

```calo
hago asíncronamente persona.rotar.hombro.derecho(90, 1000). ### rota hombro derecho 90º tras esperar 1000 milisegundos (o 1 segundo)
hago asíncronamente persona.rotar.hombro.izquierdo(0-90, 1000). ### rota hombro derecho 90º negativos tras esperar 1000 milisegundos (o 1 segundo)
hago asíncronamente persona.rotar.codo.derecho(90, 1000).
hago asíncronamente persona.rotar.codo.izquierdo(90, 1000).
hago asíncronamente persona.rotar.pierna.derecha(90, 1000).
hago asíncronamente persona.rotar.pierna.izquierda(90, 1000).
hago asíncronamente persona.rotar.rodilla.derecha(90, 1000).
hago asíncronamente persona.rotar.rodilla.izquierda(90, 1000).
```

Para **secuencias de movimientos atomizadas** o agrupados, puedes usar Castelog parecidamente a esto, en lugar de `hecho`, en `función` para almacenar la secuencia en memoria:

```calo
creo saludo como un hecho asíncrona donde {
    hago asíncronamente persona.rotar.codo.derecho(200,1000).
    hago asíncronamente persona.rotar.codo.derecho(0-40,1000).
    hago asíncronamente persona.rotar.codo.derecho(40,1000).
    hago asíncronamente persona.rotar.codo.derecho(0-40,1000).
    hago asíncronamente persona.rotar.codo.derecho(0-160,1000).
}.
```

El siguiente paso lógico sería agrupar movimientos de bajo nivel para conforar instrucciones más comprensibles para el usuario, donde:
 - intervengan movimientos sincronizados en tiempos paralelos, esto es que no todas las acciones son llevadas `asíncronamente` y se tendrá que usar el `Promise.parallel` o alguna alternativa de similar efecto para agrupar acciones coetáneas bajo un mismo nuevo nombre.
 - permitan concatenar asíncronamente otros movimientos, esto es que `retornan promesas` o son `funciones asíncronas`.
 - también deben poder cambiar las coordenadas de la persona cambiando los valores de `persona.x` y `persona.y`.

Puedes explorar por consola los objetos inyectados automáticamente en el scripting de Calo siguientes:
  - `persona` - el personaje PaloMan
  - `fondo` - el fondo de pantalla
  - `pantalla` - el recuadro que guarda los elementos a pintar y los pinta conjuntamente
  - `componente` - el componente Vue de la caja de texto del scripting de Calo.

Para 

## ¿Por qué?

Porque es básico algo para representar esto rápidamente.
