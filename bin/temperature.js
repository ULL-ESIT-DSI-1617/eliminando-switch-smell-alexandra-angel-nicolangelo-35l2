// import Medida from 'medida.js';
"use strict";
// impoort Temperatura = require("../bin/temperature");
import Temperatura from './temperature';
// class Temperatura extends Medida {
//     constructor(value, string) {
//         super(value, string);
//     }
// }
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

module.exports = Kelvin;