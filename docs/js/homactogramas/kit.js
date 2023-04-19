
const kit_de_movimientos = ( () => {
try {
const bailar_pateticamente = async function( vueltas = 4 ) {try {
for(let index = 0; index < vueltas; index++) {(await this.rotar.hombro.izquierdo( 0 + 45,
0 ));
(await this.rotar.hombro.derecho( 0 - 45,
0 ));
if(( index === 0 ) || ( index === 1 )) {
(await this.rotar.codo.izquierdo( 0 - 45,
0 ));
(await this.rotar.codo.derecho( 0 + 45,
0 ));
}
else if(( index === 2 ) || ( index === 3 )) {
(await this.rotar.codo.izquierdo( 0 + 45,
0 ));
(await this.rotar.codo.derecho( 0 - 45,
0 ));
}
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(200, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await this.rotar.hombro.izquierdo( 0 - 45,
0 ));
(await this.rotar.hombro.derecho( 0 + 45,
0 ));
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(200, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));}
} catch(error) {
console.log(error);
throw error;
}

};
const agacharse = async function() {try {
(await this.posicionar.pierna.izquierda( 0 + 75 ));
(await this.posicionar.rodilla.izquierda( 0 - 75 ));
(await this.posicionar.pierna.derecha( 0 - 75 ));
(await this.posicionar.rodilla.derecha( 0 + 75 ));
(await this.posicionar.eje.y( this.constructor.estado_inicial.y + 95 ));
} catch(error) {
console.log(error);
throw error;
}

};
const desagacharse = async function() {try {
(await this.posicionar.pierna.izquierda( 0 ));
(await this.posicionar.rodilla.izquierda( 0 ));
(await this.posicionar.pierna.derecha( 0 ));
(await this.posicionar.rodilla.derecha( 0 ));
(await this.posicionar.eje.y( this.constructor.estado_inicial.y ));
} catch(error) {
console.log(error);
throw error;
}

};
const medioagacharse = async function() {try {
(await this.posicionar.pierna.izquierda( 0 + 45 ));
(await this.posicionar.rodilla.izquierda( 0 - 45 ));
(await this.posicionar.pierna.derecha( 0 - 45 ));
(await this.posicionar.rodilla.derecha( 0 + 45 ));
(await this.posicionar.eje.y( this.constructor.estado_inicial.y + 38 ));
} catch(error) {
console.log(error);
throw error;
}

};
const desmedioagacharse = async function() {try {
(await this.posicionar.pierna.izquierda( 0 ));
(await this.posicionar.rodilla.izquierda( 0 ));
(await this.posicionar.pierna.derecha( 0 ));
(await this.posicionar.rodilla.derecha( 0 ));
(await this.posicionar.eje.y( this.constructor.estado_inicial.y ));
} catch(error) {
console.log(error);
throw error;
}

};
const bailar_agachandose = async function( vueltas = 4 ) {try {
const mover_brazos_tambien = async ( index ) => {try {
const index_compas = 4 - index;
if(( index_compas === 1 ) || ( index_compas === 3 )) {
(await this.rotar.hombro.izquierdo( 0 + 45,
0 ));
(await this.rotar.hombro.derecho( 0 - 45,
0 ));
}
else if(( index_compas === 0 ) || ( index_compas === 2 )) {
(await this.rotar.hombro.izquierdo( 0 - 45,
0 ));
(await this.rotar.hombro.derecho( 0 + 45,
0 ));
}
if(( index_compas === 0 ) || ( index_compas === 1 )) {
(await this.rotar.codo.izquierdo( 0 + 45,
0 ));
(await this.rotar.codo.derecho( 0 - 45,
0 ));
}
else if(( index_compas === 2 ) || ( index_compas === 3 )) {
(await this.rotar.codo.izquierdo( 0 - 45,
0 ));
(await this.rotar.codo.derecho( 0 + 45,
0 ));
}
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(200, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
} catch(error) {
console.log(error);
throw error;
}

};
for(let index = 0; index < 2; index++) {(await Castelog.metodos.una_espera_de(0.4 * 1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await mover_brazos_tambien( 1 ));
(await this.medioagacharse(  ));
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(0.4 * 1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await mover_brazos_tambien( 2 ));
(await this.agacharse(  ));
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(0.4 * 1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await mover_brazos_tambien( 3 ));
(await this.medioagacharse(  ));
window.datos_del_juego.juego.pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(0.4 * 1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await mover_brazos_tambien( 4 ));
(await this.desmedioagacharse(  ));
window.datos_del_juego.juego.pantalla.pintarse(  );}
} catch(error) {
console.log(error);
throw error;
}

};
const decir = function( mensaje = "...",
tiempo_duracion = 3000,
tiempo_demora = 0 ) {
};
return { decir,
bailar_pateticamente,
agacharse,
desagacharse,
medioagacharse,
desmedioagacharse,
bailar_agachandose
};
} catch(error) {
console.log(error);
throw error;
}
})();
if(typeof window.datos_del_juego.juego.Persona.prototype === 'undefined') {
window.datos_del_juego.juego.Persona.prototype = { 
};
}
Object.assign(window.datos_del_juego.juego.Persona.prototype, kit_de_movimientos );
/////////////////////////
// Ignorado por Castelog:
// persona.bailar_pateticamente(  );
