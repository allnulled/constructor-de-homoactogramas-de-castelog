
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"app-por-defecto","version":"0.0.1","contenido":{"head":"<head>\n    <title>🧍‍♂️ Homactogramas de Calo</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style>\n      .canvas_box {\n        width: 100%;\n        text-align: center;\n        padding-top: 20px;\n        padding-bottom: 20px;\n      }\n      .w_100 { width: 100%; }\n      textarea,\n      pre {\n        -moz-tab-size : 2;\n        -o-tab-size : 2;\n        tab-size : 2;\n      }\n    </style>\n    <script src=\"js/calo.js\"></script>\n    <script src=\"js/castelog-parser.js\"></script>\n    <script src=\"js/play.js\"></script>\n    <script src=\"js/constructor-de-homactogramas-de-castelog.js\"></script>\n</head>","body":"<body class=\"win7\">\n  <div style=\"padding:4px;\">\n    <div class=\"window\">\n      <div class=\"title-bar\">\n        <div class=\"title-bar-text\">\n          ✨ Homactógrafo de Castelog ✨\n        </div>\n      </div>\n      <div class=\"window-body\">\n        <div style=\"overflow-y: scroll;background-color: #222;box-shadow: 0 0 4px black;\">\n          <div class=\"canvas_box\">\n            <canvas id=\"canvas_for_demo\"></canvas>\n          </div>\n        </div>\n        <div id=\"app\"></div>\n      </div>\n    </div>\n  </div>\n</body>"}}

const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:ConstructorDeHomactogramasDeCastelog,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");