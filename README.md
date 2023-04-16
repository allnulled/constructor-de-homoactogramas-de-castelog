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

## Instalación y ejecución

En un directorio nuevo, clona el proyecto:

```sh
git clone .
npm install
mpm test
```

## Uso

Entra en la aplicación y prueba a meter scripts en castelog:

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

El resultado de atomizar secuencias de movimientos resulta en llamadas de este estilo:

```calo
Hago asíncronamente persona.bailar_pateticamente().
```

Para extender las capacidades de `Persona` como clase, y así todas sus instancias presentes o futuras al mismo tiempo, puedes:

```calo
Asigno window.datos_del_juego.juego.PersonaPrototipo.prototype.una_nueva_habilidad_en_todas_las_personas como una función asíncrona donde {
  Hago asíncronamente persona.rotar.codo.derecho(200,1000).
}.
```

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
