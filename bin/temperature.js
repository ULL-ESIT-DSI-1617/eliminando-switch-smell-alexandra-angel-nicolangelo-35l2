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
        conversion=((conversion* 9 / 5)+ 32);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Farenheit";
        return conversion;
    }
    
    Celsius2kelvin() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=(conversion + 273.15);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Kelvin";
        return conversion;
    }
    
    Celsius2Farenheit() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion* 9 / 5)+ 32);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Farenheit";
        return conversion;
    }
    
    Farenheit2Celsius() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=((conversion - 32)* 5/9);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Celsius";
        return conversion;
    }
    
    Farenheit2Kelvin() {
        var conversion = super.getValue ;
        conversion=parseFloat(conversion);
        conversion=(conversion + 273.15);
        conversion=conversion.toFixed(2);
        conversion=conversion+" Kelvin";
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