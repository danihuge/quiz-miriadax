var path = require('path');

// Modelo
var Sequelize = require('sequelize');

// SQLite:
var sequelize = new Sequelize(null, null, null, {dialect: "sqlite", storage: "quiz.sqlite"});

// Importar definición de Quiz
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; // exportar definición de tabla Quiz

// Crea e inicializa tabla de preguntas en DB
sequelize.sync().success(function() {
  Quiz.count().success(function (count){
    if(count === 0) {   // Inicializa si está vacía
      Quiz.create({ pregunta: 'Capital de Italia',
      	            respuesta: 'Roma'
      	         })
      .success(function(){console.log('Base de datos inicializada')});
    };
  });
});