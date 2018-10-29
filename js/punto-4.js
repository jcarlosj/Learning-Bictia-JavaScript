// Class
var App = ( function () {
    // Constructor
    function App() {
        let btn = document .getElementsByTagName( 'button' );

        this .count = 0;

        btn[ 0 ] .addEventListener( 'click', () => {
            this .numero = parseInt( document .querySelector( 'input#numero' ) .value );

            //console .log( this .numero + ': ' + this .esPrimo( this .numero ) );

            alert(
                'El número ' + this .numero + '\n' +
                ( this .esPar( this .numero ) ? ' PAR' : ' IMPAR' ) + ' | ' +
                ( this .esPrimo( this .numero ) ? ' PRIMO' : ' NO es PRIMO' )
           );
        });

    }
    App .prototype .esPar = function( num ) {
        return num % 2 === 0;
    }
    App .prototype .esPrimo = function( num ) {
        let cont = 0;

        for( let i = 1; i <= num; i++ ) {
            if( num % i == 0 ) {
                cont++;
            }
        }

        return cont == 2;
    }
    return App;
}());

window .onload = function() {
    var app = new App();
}
