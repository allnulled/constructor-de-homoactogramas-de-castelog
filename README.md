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
### PARTE DE CARGA ################################################
Creo saludar como una función asíncrona donde {                 ###
    Hago asíncronamente persona.rotar.codo.derecho(0+200,1000). ### rota codo derecho +200 grados tras 1 segundo
    Hago pantalla.pintarse().                                   ###
    Hago asíncronamente persona.rotar.codo.derecho(0-40,1000).  ### rota codo derecho -40 grados tras 1 segundo
    Hago pantalla.pintarse().                                   ###
    Hago asíncronamente persona.rotar.codo.derecho(0+40,1000).  ### rota codo derecho +40 grados tras 1 segundo
    Hago pantalla.pintarse().                                   ###
    Hago asíncronamente persona.rotar.codo.derecho(0-40,1000).  ### rota codo derecho -40 grados tras 1 segundo
    Hago pantalla.pintarse().                                   ###
    Hago asíncronamente persona.rotar.codo.derecho(0-160,1000). ### rota codo derecho -160 grados tras 1 segundo
    Hago pantalla.pintarse().                                   ###
}.                                                              ###
### PARTE DE EJECUCIÓN ###################################
Hago asíncronamente saludar().                         ### 
Hago asíncronamente persona.bailar_pateticamente().    ### 
Hago persona.restablecer_estado().                     ### 
```

## API

La API más básica de Paloman consiste en mover la persona y refrescar la pantalla.

### API de movimientos de persona

Las funciones `pantalla.pintarse` y `pantalla.pintarse.cada` sirven para refrescar el lienzo o canvas. Si cambias los estados pero no refrescar el lienzo, no se verán los cambios.

```calo
hago pantalla.pintarse().          ### se pinta ahora
hago pantalla.pintarse.cada(20).   ### se pintará cada 20 milisegundos
hago pantalla.pintarse.cada(1000). ### dejára de pintarse cada 20 milisegundos y se pintará cada 1 segundo
```

La función `persona.restablecer_estado` es para volver al estado inicial de la persona:

```calo
hago asíncronamente persona.restablecer_estado().  
```

El estado inicial de la persona viene de `this.constructor.estado_inicial` que, en la clase `Persona` es:

```js
class Persona {
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
}
```

Las funciones bajo `persona.posicionar` son para asignar un valor **relativo a su valor inicial** correspondiente (tanto para ejes como para articulaciones):

```calo
####################################################################
                                                                 ###
hago asíncronamente persona.posicionar.eje.x(0,0).               ### pixels del eje horizontal; milisegundos
hago asíncronamente persona.posicionar.eje.y(0,0).               ### pixels del eje vertical; milisegundos
hago asíncronamente persona.posicionar.hombro.izquierdo(0,0).    ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.hombro.derecho(0,0).      ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.codo.izquierdo(0,0).      ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.codo.derecho(0,0).        ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.pierna.izquierdo(0,0).    ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.pierna.derecho(0,0).      ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.rodilla.izquierdo(0,0).   ### grados de 360; milisegundos
hago asíncronamente persona.posicionar.rodilla.derecho(0,0).     ### grados de 360; milisegundos
                                                                 ###
####################################################################
```

Las funciones bajo `persona.trasladar` son para asignar un valor **relativo a su valor actual** correspondiente (solo para los ejes):

```calo
######################################################
                                                   ###
hago asíncronamente persona.trasladar.eje.x(0,0).  ### pixels del eje horizontal; milisegundos
hago asíncronamente persona.trasladar.eje.y(0,0).  ### pixels del eje vertical; milisegundos de demora
                                                   ###
######################################################
```

Las funciones bajo `persona.rotar` son para asignar un valor **relativo a su valor actual** correspondiente (solo para las articulaciones):


```calo
###################################################################
                                                                ###
hago asíncronamente persona.rotar.hombro.derecho(90,1000).      ### grados de 360; milisegundos
hago asíncronamente persona.rotar.hombro.izquierdo(0-90,1000).  ### grados de 360; milisegundos
hago asíncronamente persona.rotar.codo.derecho(90,1000).        ### grados de 360; milisegundos
hago asíncronamente persona.rotar.codo.izquierdo(90,1000).      ### grados de 360; milisegundos
hago asíncronamente persona.rotar.pierna.derecha(90,1000).      ### grados de 360; milisegundos
hago asíncronamente persona.rotar.pierna.izquierda(90,1000).    ### grados de 360; milisegundos
hago asíncronamente persona.rotar.rodilla.derecha(90,1000).     ### grados de 360; milisegundos
hago asíncronamente persona.rotar.rodilla.izquierda(90,1000).   ### grados de 360; milisegundos
hago pantalla.pintarse().                                       ### 
hago pantalla.pintarse.cada(1000).                              ### milisegundos
                                                                ###
###################################################################
```

Las clases `juego.Persona`, `juego.Fondo` y `juego.Pantalla` son las que instanciaron a `persona`, `fondo` y `pantalla`. Sus constructores de instancia o sus `prototype` pueden interesarte.

```calo
imprimo juego.Persona.
imprimo juego.Fondo.
imprimo juego.Pantalla.
```

Las propiedades y métodos que siguen no se recomiendan usar directamente si no es como consulta para no interferir en el flujo, pero ahí están:

```calo
imprimo pantalla.elementos.
imprimo pantalla.contexto.
imprimo persona.pintarse(pantalla.contexto).
imprimo fondo.pintarse(pantalla.contexto).
```

A partir de aquí, puedes agrupar acciones, como en el primer ejemplo de `saludar`, pero también puedes crear personas e incluirlas en la pantalla:

```calo
desacoplo constante { Persona } a partir de juego.
creo persona2 como una nueva Persona().
hago pantalla.incluir(persona2).
hago pantalla.pintarse().
```

#### Consejos

 - Cuando quieres que un movimiento bloquee el avance del script, usas `asíncronamente` delante.
 - Cuando quieres que un movimiento no bloquee el avance del script, no usas `asíncronamente` delante.
 - Cuando quieres agrupar varias acciones en un nombre, creas una función asíncrona y usas las acciones en ella.
 - Cuando quieres hacer varias acciones simultáneamente (así como interrumpirlas todas simultáneamente), usas la función `Promise.all(...)` pasándole una lista con las llamadas de función asíncrona, es decir, con las `Promise` de las funciones.
   - y si quieres que esa simultaneidad bloquee el script, usas `asíncronamente` delante del `Promise.all`.
   - y si quieres que esa simultaneidad no bloquee el avance del script, no usas `asíncronamente` delante del `Promise.all`.
   - y si quieres que se interrumpa esa acción simultánea, debes `lanzar` un error desde dentro alguna función que hayas pasado como parámetro, y manejar el error que te lanzará consecuentemente el `Promise.all`.

## Ejemplos

Hay ejemplos de scripts para extender directamente las personas de esta aplicación en:

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
