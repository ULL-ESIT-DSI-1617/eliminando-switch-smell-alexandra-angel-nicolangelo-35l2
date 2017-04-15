"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

// import Temperatura from 'temperature1.js';
// import Kelvin from 'temperature1.js';
// var Temperatura = require("../bin/temperature1");
// import Kelvin from './temperature1';

// var Medida = require("./medida");

class Medida {
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
class Temperatura extends Medida {
    constructor(value, string) {
        super(value, string);
    }
}
class Celsius extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }
    celsius2Kelvin() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=(conversion+273.15);
        conversion=conversion.toFixed(2);
        conversion+=" Kelvin";
        return conversion;
    }
    celsius2Farenheit() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion* 1.8)+32);
        conversion=conversion.toFixed(2);
        conversion+=" Farenheit";
        return conversion;
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return this.celsius2Kelvin();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return this.celsius2Farenheit();
        }
    }
}

class Farenheit extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }
    farenheit2Kelvin() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=(((conversion+459.67)*5)/9);
        conversion=conversion.toFixed(2);
        conversion+=" Kelvin";
        return conversion;
    }
    farenheit2Celsius() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion-32) * 5 / 9);
        conversion=conversion.toFixed(2);
        conversion+= " Celsius";
        return conversion;
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return this.farenheit2Kelvin();
        } else if (super.getString == 'c' || super.getString == 'C') {
            return this.farenheit2Celsius();
        }
    }
}

class Kelvin extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }

    kelvin2Celsius() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=(conversion-273.15);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Celsius";
        return conversion;
    }

    kelvin2Farenheit() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion* 9 / 5)- 459.67);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Farenheit";
        return conversion;
    }
    convert() {
        if (super.getString == 'c' || super.getString == 'C') {
            return this.kelvin2Celsius();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return this.kelvin2Farenheit();
        }
    }
}


function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^([-+])?(\d+)(.\d*)?(e[-+]?\d+)?([cCfFkK])(\sto)?\s([cCfFkK])$/;
  var m = temp.match(regexp);
  var num = m[2]; // valor numerico
  var type1 = m[5]; // primera letra
  var type2 = m[7]; // segunda letra
   if (m) {
        if (type1 == 'c' || type1 == 'C') {
            var celsius = new Celsius(num, type2);
            result = celsius.convert();
        }else if (type1 == 'f' || type1 == 'F') {
            var farenheit = new Farenheit(num, type2);
            result = farenheit.convert();
        }else if (type1 == 'k' || type1 == 'K') {
             
            var kelvin = new Kelvin(num, type2);
            
            result = kelvin.convert();
        }
        console.log(result);
        converted.innerHTML = result;
   }
}