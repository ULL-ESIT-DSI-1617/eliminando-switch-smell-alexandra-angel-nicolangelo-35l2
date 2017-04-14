<<<<<<< HEAD
(function(exports){
    
    class Medida{
        constructor(value, string) {
            this.valor = value;
            this.cadena = string;
        }
        get getValue() {
            return this.valor;
        }
        get getString() {
            return this.cadena;
        }
        set setValue(newValue) {
            this.valor = newValue;
        }
        set setString(newString) {
            this.cadena = newString;
        }
    }
    // Medida.measures = Medida.measures || {};
    exports.Medida = Medida;
    
})(this);
=======
var regexp = XRegExp('^([ ]*) \n' +
                    '(?<val> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                    '([ ]*) \n' +
                    '(?<tip> [a-zA-Z]) # tip \n' +
                    '([ ]*) \n' +
                    '(?<to> (to))? # to \n' +
                    '([ ]*) \n' +
                    '(?<para> [a-zA-Z]+) # para \n' +
                    '([ ]*)$','x');

function Medida (valor, tipo)
{
    var val = XRegExp.exec(valor, regexp);
    if (val) {
      this.valor = val[1];
      this.tipo = val[2];
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
}


Medida.measures = {};

Medida.convertir = function(valor) {

  var match = XRegExp.exec(valor, regexp);
  if (match) {
    var numero = match.val,
        tipo   = match.tip.toLowerCase(),
        destino = match.para.toLowerCase();

    try {
      var source = new measures[tipo](numero);
      var target = "to"+measures[destino].name;
      return source[target]().toFixed(2) + " "+measures[destino].name;
    }
    catch(err) {
      console.log(err);
      return 'Se desconocen las unidades de medida de temperatura';
    }
  }
  else
    return "Introduzca una temperatura valida: 32 F to C";
};
>>>>>>> dc37ac254a2f2e46f5b899426a70ff403f0ddd48
