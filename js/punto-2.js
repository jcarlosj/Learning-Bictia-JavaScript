window .onload = function () {
    let maximo = 10;
    document .getElementById( 'result' ) .addEventListener( 'click', () => {
        var multiplicador = Number .parseInt( document .getElementById( 'num' ) .value ),
            results = `Tabla del ${ multiplicador } \n\n`;

            if( multiplicador || multiplicador == 0 ) {
                console .log( multiplicador );
                if( !Number .isNaN( multiplicador ) ) {
                    for( let i = 0; i <= maximo; i++ ) {
                        results += `${ i } x ${ multiplicador } = ${ calculate( i, multiplicador ) } \n`;
                    }
                }
            }
            else {
                results = 'Hey! No me has pasado ningún valor';
            }
            alert( results );
            
    });

    function calculate ( num1, num2 ) {
        return num1 * num2;
    }

};
