// Class
var App = ( function () {
    // Constructor
    function App() {
        document .body .appendChild( this .principalForm() );
    }
    App .prototype .principalForm = function() {
        this .elDiv = document .createElement( 'div' );
        this .elDiv .appendChild ( this .createTag( 'label', '¿Cuántos campos desea generar?' ) );
        this .elDiv .appendChild ( this .createTag( 'input', '# de edades a ingresar', 'number' ) );
        this .elDiv .appendChild ( this .createTag( 'button', 'generar' ) );

        this .actionPrincipalForm();

        return this .elDiv;
    }
    App .prototype .actionPrincipalForm = function() {
        let btn = this .elDiv .lastChild;

        btn .addEventListener( 'click', () => {
            this .fields = this .elDiv .getElementsByClassName( 'input_form' )[ 0 ] .value;
            this .remove();
            document .body .appendChild( this .secondaryForm() );
        });
    }
    App .prototype .secondaryForm = function() {
        this .elDiv = document .createElement( 'div' );
        this .elDiv .appendChild ( this .createTag( 'label', 'Digite una edad en cada uno de los campos' ) );
        for( let i = 0; i < this .fields; i++ ) {
            this .elDiv .appendChild ( this .createTag( 'input', 'Ej: 20', 'number' ) );
        }
        this .elDiv .appendChild ( this .createTag( 'button', 'generar' ) );

        this .actionSecondaryForm();

        return this .elDiv;
    }
    App .prototype .actionSecondaryForm = function() {
        let accumulator = 0,
            btn = this .elDiv .lastChild;

        btn .addEventListener( 'click', () => {

            elements = this .elDiv .getElementsByClassName( 'input_form' ) .length;

            this .elDiv .childNodes .forEach( ( el ) => {
                if(  el .getAttribute( 'class' ) == 'input_form' ) {
                    if ( this .elDiv .getElementsByClassName( 'input_form' ) .length == 1 ) {
                        accumulator = parseInt( el .value != '' ? el .value : 0 );

                        return;
                    }
                    accumulator += parseInt( el .value != '' ? el .value : 0 );;

                }
            });

            this .calculate( parseFloat( accumulator / elements ) );
        });
    }
    App .prototype .calculate = function ( promedio ) {
        alert( `El promedio de las edades es: ${ promedio.toFixed( 2 ) }` );
    }
    App .prototype .remove = function () {
        this .elDiv .remove();
    }
    App .prototype .createTag = function( element, msg = '', type = null ) {

        let el = document .createElement( element ),
            attr = document .createAttribute( 'id' );

        setAttributeElement( element );

        function setAttributeElement( element ) {
            if( element == 'label' ) {
                el .htmlFor = 'label-form';
                el .appendChild( document .createTextNode( msg ) );
            }
            if( element == 'p' ) {
                attr .value = element;
                el .setAttributeNode( attr );
                el .appendChild( document .createTextNode( msg ) );
            }
            if( element == 'input' ) {
                attr = document .createAttribute( 'placeholder' );
                attr .value = msg;
                el .setAttributeNode( attr );
                attr = document .createAttribute( 'class' );
                attr .value = element + '_form';
                el .setAttributeNode( attr );
                attr = document .createAttribute( 'type' );
                attr .value = type;
                el .setAttributeNode( attr );
            }
            if( element == 'button' ) {
                attr .value = element;
                el .setAttributeNode( attr );
                el .textContent = msg;
            }
        }

        return el;
    }
    return App;
}());

window .onload = function() {
    var app = new App();
}
