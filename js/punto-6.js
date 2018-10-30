// Class
class App {
    // Constructor
    constructor() {
        this .months = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ];
        this .totalDays = 0;
        var btn = document .querySelector( 'button' );
            this .elDiv = document .getElementById( 'data' );

        btn .addEventListener( 'click', () => {
            this .captureData();
            this .elDiv .innerText = this .showDate();
            //document .body .appendChild( this .showDate() );
        });
    }
    captureData() {
        let dias = this .daysPerMonth();
        this .dia = document .getElementById( 'dia' ) .value .trim();
        this .mes = document .getElementById( 'mes' ) .value .trim();
        this .anio = document .getElementById( 'anio' ) .value .trim();

        if( !isNaN() ) {
            if( !this .validateMonth() ) {
                alert( 'Son 12 meses los que posee el año \n¿Tal vez ingresaste un número fuera de este rango?' );
                return;
            }
        }
        else {
            alert( this .mes + ' es un ' + this .msgMonth );
            return;
        }

        if( !this .validateDay() ) {
            alert( `Día ingresado no es válido: \nEl mes ${ this .mes } tiene hasta ${ dias } días en año ${ this .leapYear() ? 'bisiesto ' : 'no bisiesto' }` );
            return;
        }

        console .log( this .mes );
        console .log( 'mes: ', this .convertMonth() );
        console .log( this .leapYear() ? ' es bisiesto ' : 'no es bisiesto' );
    }
    showDate() {
        this .format_date = '';

        if( Number .isInteger( this .convertMonth() ) ) {
            return this .format_date = `${ this .dia }/${ this .convertMonth() }/${ this .anio }`;
        }

        return this .format_date = `${ this .dia } de ${ this .convertMonth() } de ${ this .anio }`;
    }
    validateDay() {
        return this .dia > 0 && this .dia <= this .daysPerMonth();
    }
    validateMonth() {
        return this .mes > 0 && this .mes < 13;
    }
    convertMonth() {
        if( isNaN( this .mes ) ) {
            return ( this .months .findIndex( month => month === this .mes ) ) + 1;     // Retorna el número del mes
        }

        return this .months[ ( this .mes - 1 ) ];   // Retorna el mes (cadena)
    }
    leapYear() {
        return this .anio % 4 == 0 && this .anio % 100 != 0 || this .anio % 400 == 0;
    }
    daysPerMonth() {

        switch( this .mes ) {
            case '1' || 'enero':
            case '3' || 'marzo':
            case '5' || 'mayo':
            case '7' || 'julio':
            case '8' || 'agosto':
            case '10' || 'octubre':
            case '12' || 'diciembre':
                this .totalDays = 31;
                break;
            case '4' || 'abril':
            case '6' || 'junio':
            case '9' || 'septiembre':
            case '11' || 'noviembre':
                this .totalDays = 30;
                break;
            case '2' || 'febrero':
            //case 'febrero':
                this .totalDays = this .leapYear() ? 29 : 28;
                break;
            default: this .msgMonth = 'mes desconocido';
        }
        console .log( 'dias: ', this .totalDays );

        return this .totalDays;
    }

}

window .onload = function() {
    var app = new App();
}
