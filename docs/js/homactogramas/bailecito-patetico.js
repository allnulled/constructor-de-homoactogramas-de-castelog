
persona.restablecer_estado(  );
for(let index = 0; index < 4; index++) {(await persona.rotar.hombro.izquierdo( 0 + 45,
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
(await Castelog.metodos.una_espera_de(1000, () => {try {
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
(await Castelog.metodos.una_espera_de(1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));}
persona.restablecer_estado(  );
pantalla.pintarse(  );