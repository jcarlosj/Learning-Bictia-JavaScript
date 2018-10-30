// class
var App = ( function() {
    // Constructor
    function App() {
        var string_entry = '',
            template = '';
        let btn = document .querySelector( 'button' );

        this .elDiv = document .getElementById( 'data' );

        btn .addEventListener( 'click', () => {
            string_entry = document .getElementById( 'phrase' ) .value;
            if( !string_entry ) {
                alert( 'Hey! escribe algo en el campo.' );
                return;
            }

            console .log( this .ReverseStringWithFunctions( string_entry ) );       // Forma 1
            console .log( this .ReverseStringWithLoop( string_entry ) );            // Forma 2
            console .log( this .ReverseStringWithRecursivity( string_entry ) );     // Forma 3

            template = `<p>
                           Forma 1 - Usando Funciones: ${ this .ReverseStringWithFunctions( string_entry ) } <br />
                           Forma 2 - Usando Iteracciones: ${ this .ReverseStringWithLoop( string_entry ) } <br />
                           Forma 3 - Usando Recursividad: ${ this .ReverseStringWithRecursivity( string_entry ) }
                        </p>`;

            document .getElementById( 'data' ) .innerHTML = template;
        });
    }
    App .prototype .ReverseStringWithFunctions = function( phrase ) {
        return phrase .split('') .reverse() .join('');
    }
    App .prototype .ReverseStringWithLoop = function( phrase ) {
        let new_string = '';

        for( let i = phrase .length - 1; i >= 0; i-- ) {
            new_string += phrase[ i ];
        }

        return new_string;
    }
    App .prototype .ReverseStringWithRecursivity = function( phrase ) {
        return ( phrase === '' ) ? '' : this .ReverseStringWithRecursivity( phrase.substr( 1 ) ) + phrase .charAt( 0 );
    }
    return App;
})();

window .onload = function() {
    var app = new App();
}
