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
creo saludo como un hecho asíncrono donde {
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

El personaje `PaloMan` es una instancia de la clase `Persona`. Puedes explorar más en [`src/www/js/play.js`](https://github.com/allnulled/constructor-de-homoactogramas-de-castelog/blob/main/src/www/js/play.js)

La API de PaloMan de la clase Persona contiene los siguientes valores que se configuran en el constructor:

```js
this.x = 80;
this.y = SETTINGS.height - (250);
this.escala = 25;
this.cabeza_con_cuello = 0;
this.cuello_con_columna = 0;
this.hombro_izquierdo = 0;
this.hombro_derecho = 0;
this.codo_izquierdo = 0;
this.codo_derecho = 0;
this.columna_con_cadera = 0;
this.cadera_izquierda = 0;
this.cadera_derecha = 0;
this.rodilla_izquierda = 0;
this.rodilla_derecha = 0;
this.largo_de_brazo = 45;
this.largo_de_antebrazo = 50;
this.largo_de_pierna = 60;
this.largo_de_antepierna = 70;
this.largo_de_columna = 75;
this.apertura_del_hombro_izq = 180;
this.apertura_del_hombro_der = 180;
this.apertura_del_codo_der = 180;
this.apertura_del_codo_izq = 180;
this.apertura_de_la_pierna_izq = 180;
this.apertura_de_la_pierna_der = 180;
this.apertura_de_la_rodilla_izq = 180;
this.apertura_de_la_rodilla_der = 180;
this.rotar = {
  hombro: {
    izquierda: function() { /* ... */ },
    derecha: function() { /* ... */ }
  },
  codo: {
    izquierda: function() { /* ... */ },
    derecha: function() { /* ... */ }
  },
  pierna: {
    izquierda: function() { /* ... */ },
    derecha: function() { /* ... */ }
  },
  rodilla: {
    izquierda: function() { /* ... */ },
    derecha: function() { /* ... */ }
  }
};
this.pintarse = function() { /* ... */ };
```



### API de PaloMan de Entorno de Desarrollo de Homactogramas

Esta API se refiere a los objetos y clases que no son la Persona.

Puedes explorar por consola los objetos inyectados automáticamente en el scripting de Calo siguientes:
  - `persona` - el personaje PaloMan. Es una instancia de la clase `Persona` de la API de PaloMan.
  - `fondo` - el fondo de pantalla. Es una instancia de la clase `Fondo` de la API de PaloMan.
  - `pantalla` - el recuadro que guarda los elementos a pintar y los pinta conjuntamente. Es una instancia de la clase `Pantalla` de la API de PaloMan.
  - `componente` - el componente Vue de la caja de texto del scripting de Calo. Es una instancia de la clase `Component` de la API de Vue2.

Para pintar los elementos de la pantalla en su estado actual, puedes hacer 2 cosas:
  - Llamar al método `pantalla.pintarse()`.
  - Llamar al método `pantalla.pintarse.cada(n)` donde `n` son los milisegundos cada los que se quiere llamar automáticamente al método `pantalla.pìntarse`.

En los ejemplos se utiliza el segundo procedimiento, para no estar repitiéndose, pero puede interesarte usar el método de más bajo nivel, `pantalla.pintarse` y tomar el control del ritmo del pintado.

Para saber más, puedes ir al fuente de `src/www/js/play.js` que es donde están definidas las clases.

## ¿Por qué?

Porque es básico algo para representar esto visualmente y rápidamente.
