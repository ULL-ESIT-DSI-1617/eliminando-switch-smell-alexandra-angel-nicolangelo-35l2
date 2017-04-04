"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

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
        conversion=(conversion+273.15)+" Kelvin";
        return conversion;
    }
    celsius2Farenheit() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion* 1.8)+32)+" Farenheit";
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
        }
        console.log(result);
        converted.innerHTML = result;
   }
  
}