
const ConstructorDeHomactogramasDeCastelog = Castelog.metodos.un_componente_vue2("ConstructorDeHomactogramasDeCastelog",
  "<div class=\"ConstructorDeHomactogramasDeCastelog Component win7\">"
 + "    <div class=\"editor_box\">"
 + "      <div v-if=\"exito_de_compilacion\">"
 + "        <span>✔ La compilación fue exitosa.</span>"
 + "        <details>"
 + "          <summary>Mostrar código</summary>"
 + "          <div>"
 + "            <textarea class=\"w_100\" style=\"min-height: 300px;\" disabled=\"true\" :value=\"codigo_actual_js\"></textarea>"
 + "          </div>"
 + "        </details>"
 + "      </div>"
 + "      <div v-if=\"exito_de_ejecucion\">"
 + "        <span>✔ La ejecución fue exitosa.</span>"
 + "        <pre>{{ JSON.stringify(exito_de_ejecucion, null, 2) }}</pre>"
 + "      </div>"
 + "      <div v-if=\"error\">"
 + "        <span>✘ Error: {{ error.message }}</span>"
 + "      </div>"
 + "      <div style=\"position: relative;\">"
 + "        <textarea style=\"font-family: monospace; font-size: 9px; resize: vertical; min-height: 900px;\" class=\"w_100\" v-model=\"codigo_actual\"></textarea>"
 + "        <div style=\"position: absolute; top: 5px; right: 5px; left: auto; bottom: auto;\">"
 + "          <button style=\"opacity: 0.8;\" v-on:click=\"() => compilar(true)\">Compilar</button>"
 + "          <button style=\"opacity: 0.8;\" v-on:click=\"() => aplicar()\">Aplicar</button>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { codigo_actual_js:"",
codigo_actual:"\nHago pantalla.pintarse.cada(200).\nDesde 0 hasta 10 {\n  Hago asíncronamente persona.rotar.codo.izquierdo(40,1000).\n}.\n".trim(  ),
exito_de_ejecucion:undefined,
exito_de_compilacion:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_exito_de_ejecucion:function( resultado ) {try {
this.error = undefined;
this.exito_de_compilacion = undefined;
this.exito_de_ejecucion = resultado;
this.exito_de_ejecucion_timeout_id = setTimeout( () => {try {
this.exito_de_ejecucion = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_exito_de_compilacion:function(  ) {try {
this.error = undefined;
this.exito_de_ejecucion = undefined;
this.exito_de_compilacion = true;
this.exito_timeout_id = setTimeout( () => {try {
this.exito_de_compilacion = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_error:function( error ) {try {
console.log(error);
this.exito_de_ejecucion = undefined;
this.exito_de_compilacion = undefined;
this.error = error;
this.error_timeout_id = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
compilar:function( mostrar_exito ) {try {
const codigo_calo = this.codigo_actual;
const codigo_js = Castelog_parser.parse( codigo_calo );
const codigo_temporal = `(async function(persona, pantalla, fondo, juego, paloman_api, window, componente) { try { ${codigo_js} } catch(error) { this.mostrar_error(error); } })`;
const codigo_js_final = codigo_temporal;
this.codigo_actual_js = codigo_js_final;
if(mostrar_exito) {
this.mostrar_exito_de_compilacion(  );
}
return codigo_js_final;
} catch(error) {
this.mostrar_error( error );}
},
aplicar:async function() {try {
const codigo_js = this.compilar(  );
const funcion_js = this.$window.eval( codigo_js );
const { juego, persona, pantalla, fondo
} = this.$window.datos_del_juego;
const resultado = (await funcion_js.call( this,
persona,
pantalla,
fondo,
juego,
this.$window.Paloman_API,
this.$window.window,
this ));
if((!(typeof resultado === 'undefined'))) {
this.mostrar_exito_de_ejecucion( resultado );
}
} catch(error) {
this.mostrar_error( error );}
}
},
mounted() {try {
if(typeof this.$window.Paloman_API === 'undefined') {
throw new Error( "El Homactógrafo de Castelog requiere tener cargada la Paloman_API para funcionar" );
}
this.$window.datos_del_juego = this.$window.Paloman_API.iniciar(  );
setTimeout( () => {try {
this.$window.datos_del_juego.pantalla.pintarse(  );
} catch(error) {
console.log(error);
throw error;
}

},
1000 );
const scripts_de_ejemplo = [ "./js/homactogramas/bailar-pateticamente.js" ];
for(let index = 0; index < scripts_de_ejemplo.length; index++) {const script_url = scripts_de_ejemplo[ index ];
const script_tag = document.createElement( "script" );
script_tag.src = script_url;
document.body.append( script_tag );}
} catch(error) {
this.mostrar_error( error );}
}
};},
  null);