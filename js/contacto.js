



let formularioContacto = document.getElementById("formulario");

formularioContacto.addEventListener("submit", agregarSolicitud);

function aptitud(a, b) {

    const aprobado = a > (b * 2) ? true : false

    aprobado ? Swal.fire({
        icon: 'error',

        text: 'Cliente  NO APTO!',

    }) &&
        formulario.reset()
        :
        Swal.fire({
            icon: 'success',

            text: 'Cliente APTO!',

        })&&
    
    formulario.reset();

    /*
        if (a > (b * 2)) {
            Swal.fire({
                icon: 'error',
    
                text: 'Cliente  NO APTO!',
    
            });
            formulario.reset();
        }
    
        else {
            Swal.fire({
                icon: 'success',
    
                text: 'Cliente APTO!',
    
            })
            alert("formulario enviado");
            formulario.reset();
        }*/
}




function agregarSolicitud(e) {



    e.preventDefault();
    let nombreF = formulario.children[1].value;
    let dniF = formulario.children[3].value;
    let capitalF = formulario.children[7].value;
    let salarioF = formulario.children[9].value;
    let planF = formulario.children[11].value;


    // OPERADOR TERNARIO//

    ((nombreF == "") || (dniF == "") || (capitalF == "") || (salarioF === "")) ? alert("debe completar todos los campos") :
        aptitud(capitalF, salarioF);


}






















