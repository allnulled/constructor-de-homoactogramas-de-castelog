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

## Ejemplos

Puedes consultar ejemplos de scripts de homactogramas en:

- [`src/www/js/homactogramas/`](https://github.com/allnulled/constructor-de-homoactogramas-de-castelog/tree/main/src/www/js/homactogramas/)

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

El siguiente paso lógico sería agrupar movimientos de bajo nivel para conformar instrucciones más comprensibles para el usuario, donde:
 - intervengan movimientos sincronizados en tiempos paralelos, esto es que no todas las acciones son llevadas `asíncronamente` y se tendrá que usar el `Promise.parallel` o alguna alternativa de similar efecto para agrupar acciones coetáneas bajo un mismo nuevo nombre.
 - permitan concatenar asíncronamente otros movimientos, esto es que `retornan promesas` o son `funciones asíncronas`.
 - también deben poder cambiar las coordenadas de la persona cambiando los valores de `persona.x` y `persona.y`.

El personaje **PaloMan** es una instancia de la clase `Persona`, y pueden crearse más. Puedes explorar más en [`src/www/js/paloman-api.js`](https://github.com/allnulled/constructor-de-homoactogramas-de-castelog/blob/main/src/www/js/paloman-api.js)

La API de PaloMan de la clase Persona contiene los siguientes valores que se configuran en el constructor:

```js
static get estado_inicial() {
  return {
    x: 80,
    y: SETTINGS.height - (250),
    escala: 25,
    cabeza_con_cuello: 0,
    cuello_con_columna: 0,
    hombro_izquierdo: 0,
    hombro_derecho: 0,
    codo_izquierdo: 0,
    codo_derecho: 0,
    columna_con_cadera: 0,
    cadera_izquierda: 0,
    cadera_derecha: 0,
    rodilla_izquierda: 0,
    rodilla_derecha: 0,
    largo_de_brazo: 45,
    largo_de_antebrazo: 50,
    largo_de_pierna: 60,
    largo_de_antepierna: 70,
    largo_de_columna: 75,
    apertura_del_hombro_izq: 180,
    apertura_del_hombro_der: 180,
    apertura_del_codo_der: 180,
    apertura_del_codo_izq: 180,
    apertura_de_la_pierna_izq: 180,
    apertura_de_la_pierna_der: 180,
    apertura_de_la_rodilla_izq: 180,
    apertura_de_la_rodilla_der: 180,
  };
}
```

Todas estas propiedades forman parte del llamado *estado inicial* de la `Persona`. Este `Persona.estado_inicial` estático de la clase es accedido desde el método `constructor` para establecer estas propiedades como parte de la instancia de `Persona` construyéndose en cuestión. Es importante diferenciarlos, porque el método `Persona.prototype.restablecer_estado()` (o `persona.restablecer_estado` desde la instancia) usa esta propiedad estática de `Persona.estado_inicial` para volver a establecer en la instancia los valores de estado iniciales, definidos por `Persona.estado_inicial` anterior.

Además del estado inicial que emana de la propiedad estática `Persona.estado_inicial` (referida en los métodos internos mediante la expresión `this.constructor.estado_inicial` para permitir sobreescritura por herencia), la clase `Persona` proporciona otras 2 propiedades de interés establecidas: `this.

```js
this.rotar = {
  hombro: {
    izquierdo: function() { /* ... */ },
    derecho: function() { /* ... */ }
  },
  codo: {
    izquierdo: function() { /* ... */ },
    derecho: function() { /* ... */ }
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

Todos estos valores se establecen en el `Persona.constructor`, cada vez que una persona se construye. Y todos estos valores convergen en la función central de la API de PaloMan de Movimientos de Bajo Nivel:

 - `persona.rotar.{ articulación }.{ lateral }` donde:
   - `{ parte del cuerpo }` es una de: `hombro`, `codo`, `pierna` y `rodilla`.
   - `{ lateral }` es una de: `izquierdo` o `izquierda`, `derecho` o `derecha`.

Estas funciones bajo el patrón `persona.rotar.{ ... }.{ ... }` tienen todas la misma firma de entrada y salida de datos:

 - La función recibe un primer parámetro `Integer` con el valor de grados (º - 360, no radianes) del movimiento que queremos efectuar
 - La función recibe un segundo parámetro `Integer` con el valor de milisegundos que queremos que demore el movimiento.
 - La función retorna una `Promise` que se puede usar con la API de `asincronía` de Calo o `async/await` de JavaScript).

Si no se entiende del todo, no importa, porque en los ejemplos se ve mucho más claro, esto es solo para entender mejor qué ocurre por dentro de la API de PaloMan.

### API de PaloMan de Entorno de Desarrollo de Homactogramas

Esta parte de la API se refiere a los objetos y clases además de la Persona.

En los scripts de Calo se inyectan automáticamente los objetos siguientes:
  - `persona` - el personaje PaloMan. Es una instancia de la clase `Persona` de la API de PaloMan.
  - `fondo` - el fondo de pantalla. Es una instancia de la clase `Fondo` de la API de PaloMan.
  - `pantalla` - el recuadro que guarda los elementos a pintar y los pinta conjuntamente. Es una instancia de la clase `Pantalla` de la API de PaloMan.
  - `juego` - la instancia de `Paloman_API`, de la que cuelgan: `Persona`, `persona`, `Fondo`, `fondo`, `Pantalla`, `pantalla`...
    - éste es el objeto que necesitamos para extender las capacidades globales de todos los objetos `Persona` a la vez, por ejemplo.
  - `paloman_api` - la API de PaloMan global, la de `window.Paloman_API`.
  - `componente` - el componente Vue de la caja de texto del scripting de Calo. Es una instancia de la clase `Component` de la API de Vue2.

Para pintar los elementos de la pantalla en su estado actual, puedes hacer 2 cosas:
  - Llamar al método `pantalla.pintarse()`.
  - Llamar al método `pantalla.pintarse.cada(n)` donde `n` son los milisegundos cada los que se quiere llamar automáticamente al método `pantalla.pìntarse`.

En los ejemplos se utiliza el segundo procedimiento, para no estar repitiéndose, pero puede interesarte usar el método de más bajo nivel, `pantalla.pintarse` y tomar el control del ritmo del pintado.

Para saber más, puedes ir al fuente de `src/www/js/paloman-api.js` que es donde están definidas las clases.

## Ejemplos

Hay ejemplos scripts en:

  - [`src/www/js/homactogramas/`](https://github.com/allnulled/constructor-de-homoactogramas-de-castelog/tree/main/src/www/js/homactogramas/)

Estos ejemplos se cargan automáticamente (si lo especificas en `constructor-de-homactogramas-de-castelog.calo` y compilas el fichero).

De momento, puedes hacer:

```calo
Hago asíncronamente persona.bailar_pateticamente().
```

## ¿Por qué?

Porque es básico algo para representar esto visualmente y rápidamente.
