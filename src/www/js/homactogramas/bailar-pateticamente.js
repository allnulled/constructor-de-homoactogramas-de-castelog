
console.log("Aplicando bailar patéticamente.");
try {
window.datos_del_juego.juego.PersonaPrototipo.prototype.bailar_pateticamente = async function() {try {
const { persona, pantalla
} = window.datos_del_juego.juego;
persona.restablecer_estado(  );
for(let index = 0; index < 10; index++) {for(let index = 0; index < 4; index++) {(await persona.rotar.hombro.izquierdo( 0 + 45,
0 ));
(await persona.rotar.hombro.derecho( 0 - 45,
0 ));
if(( index === 0 ) || ( index === 1 )) {
(await persona.rotar.codo.izquierdo( 0 - 45,
0 ));
(await persona.rotar.codo.derecho( 0 + 45,
0 ));
}
else if(( index === 2 ) || ( index === 3 )) {
(await persona.rotar.codo.izquierdo( 0 + 45,
0 ));
(await persona.rotar.codo.derecho( 0 - 45,
0 ));
}
pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(200, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
(await persona.rotar.hombro.izquierdo( 0 - 45,
0 ));
(await persona.rotar.hombro.derecho( 0 + 45,
0 ));
pantalla.pintarse(  );
(await Castelog.metodos.una_espera_de(200, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));}}
persona.restablecer_estado(  );
pantalla.pintarse(  );
} catch(error) {
console.log(error);
this.mostrar_error( error );}
};
console.log("Aplicado bailar patéticamente.");
} catch(error) {
console.log(error);}