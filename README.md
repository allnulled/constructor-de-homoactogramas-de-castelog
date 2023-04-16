# constructor-de-homoactogramas-de-castelog

Constructor de homoactogramas de Castelog.

## ¿Qué es un *homoactograma*?

> Un homoactograma u **homactograma** es una representación de la actividad humana.

Etimológicamente:
  - *Homo* de «humano» («homo» o igual, griego)
  - *Acto* de «actividad» («activitas» o llevar a cabo, latín)
  - *Grama* de «representación» («graphéin» o dibujo, griego)

## Versión online

[https://allnulled.github.io/constructor-de-homoactogramas-de-castelog](https://allnulled.github.io/constructor-de-homoactogramas-de-castelog)


## Uso

Entra en la aplicación y prueba a meter scripts en castelog:


```calo
Creo saludar como asíncronamente una función asíncrona donde {
    Hago asíncronamente persona.rotar.codo.derecho(0+200,1000).
    Hago asíncronamente persona.rotar.codo.derecho(0-40,1000).
    Hago asíncronamente persona.rotar.codo.derecho(0+40,1000).
    Hago asíncronamente persona.rotar.codo.derecho(0-40,1000).
    Hago asíncronamente persona.rotar.codo.derecho(0-160,1000).
    Hago pantalla.pintarse().
}.
Hago asíncronamente saludar(). ### Función que se puede bloquear asíncronamente
Hago asíncronamente persona.bailar_pateticamente(). ### Secuencia atomizada de ejemplo
Hago persona.restablecer(). ### Retornar el estado inicial a la persona.
```

La API de Paloman de movimientos vendría a ser esto:

```calo
hago asíncronamente persona.rotar.hombro.derecho(90, 1000). ### rota hombro derecho 90º tras esperar 1000 milisegundos (o 1 segundo)
hago asíncronamente persona.rotar.hombro.izquierdo(0-90, 1000). ### rota hombro derecho 90º negativos tras esperar 1000 milisegundos (o 1 segundo)
hago asíncronamente persona.rotar.codo.derecho(90, 1000). ### y así todo el rato...
hago asíncronamente persona.rotar.codo.izquierdo(90, 1000).
hago asíncronamente persona.rotar.pierna.derecha(90, 1000).
hago asíncronamente persona.rotar.pierna.izquierda(90, 1000).
hago asíncronamente persona.rotar.rodilla.derecha(90, 1000).
hago asíncronamente persona.rotar.rodilla.izquierda(90, 1000).
hago pantalla.pintarse(). ### pintarse manualmente
hago pantalla.pintarse.cada(1000). ### pintarse automáticamente cada segundo
```

## Uso avanzado

Para extender las capacidades de `Persona` como clase, y así todas sus instancias presentes o futuras al mismo tiempo, puedes sobreescribir con métodos al objeto `window.datos_del_juego.juego.PersonaPrototipo.prototype`:

```calo
Asigno window.datos_del_juego.juego.PersonaPrototipo.prototype.una_nueva_habilidad_en_todas_las_personas como una función asíncrona donde {
  Hago asíncronamente persona.rotar.codo.derecho(200,1000).
}.
Hago persona.una_nueva_habilidad_en_todas_las_personas().
```

## Ejemplos

Hay ejemplos scripts en:

  - [`src/www/js/homactogramas/`](https://github.com/allnulled/constructor-de-homoactogramas-de-castelog/tree/main/src/www/js/homactogramas/)

Estos ejemplos se cargan automáticamente (si lo especificas en `constructor-de-homactogramas-de-castelog.calo` y compilas el fichero).

De momento, puedes hacer solamente:

```calo
Hago asíncronamente persona.bailar_pateticamente().
```

## Instalación y ejecución local

En un directorio nuevo, clona el proyecto:

```sh
git clone .
npm install
mpm test
```

## ¿Por qué?

Porque es básico algo para representar esto visualmente y rápidamente.
