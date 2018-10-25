// Clase Estudiante
class Student {
    constructor( name, score ) {
        this .name = name;
        this .score = score;
        this .approve_score = 4;
    }
    isApproved() {
        return this .score >= this .approve_score;
    }
}

window .onload = function () {
    App .init();
};

// Objeto Implicito
var App = {
    estudiantes : new Array(),
    init : function () {
        document .getElementById( 'add-student' ) .addEventListener( 'click', () => { App .addData() } );
        document .getElementById( 'results' ) .addEventListener( 'click', () => { App .showData() } );
    },
    addData : function () {
        let nombre = prompt( 'Nombre: ', undefined );
        if( App .validateName( nombre ) ) {
            let nota = prompt( 'Nota: ', undefined );
            if( App .validateScore( nota ) ) {
                this .estudiantes .push( new Student( nombre, nota ) );
                console .log( 'Estudiante: ', this .estudiantes );
                App .makeTemplate();
            }
            else {
                alert( 'La nota válida es un número entre 0 y 5' );
            }
        }
        else {
            alert( 'El nombre del estudiante no puede estar vacío' );
        }
    },
    validateName : function ( nombre ) {
        return nombre ? nombre : undefined;
    },
    validateScore : function ( nota ) {
        return ( nota >= 0 && nota <= 5 ) ? nota : false;
    },
    showData : function () {
        results = App .calculate();

        alert( 'Estudiantes \nAprobados: ' + results .approved + '\nReprobados: ' + results .reprobated );
    },
    calculate : function () {
        let approved = 0,
            reprobated = 0;

        this .estudiantes .forEach( ( estudiante ) => {
            if( estudiante .isApproved() ) {
                approved++;
                return;
            }
            reprobated++;
        });

        return { 'approved': approved, reprobated: reprobated};
    },
    makeTemplate : function () {
        let message = `
            <hr />
            <table>
                <tr>
                    <th>Estudiante</th>
                    <th>Nota</th>
                    <th>&nbsp;</th>
                </tr>
        `;
        this .estudiantes .forEach( ( estudiante ) => {
            message += `<tr><td>${ estudiante .name } </td><td> ${ estudiante .score }</td><td>${ estudiante .isApproved() ? 'Aprobó' : 'Reprobó' } </td></tr>`;
        });
        document .getElementById( 'data' ) .innerHTML = message + '</table>';
    }
}
