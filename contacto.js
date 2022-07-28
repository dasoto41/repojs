



let formularioContacto = document.getElementById("formulario");

formularioContacto.addEventListener("submit", agregarSolicitud);

function aptitud(a, b) {


    if (a > (b * 2)) {
        alert("no es apto");
        formulario.reset();
    }

    else {
        alert("es apto");
        alert("formulario enviado");
        formulario.reset();
    }
}




function agregarSolicitud(e) {



    e.preventDefault();
    let nombreF = formulario.children[1].value;
    let dniF = formulario.children[3].value;
    let capitalF = formulario.children[7].value;
    let salarioF = formulario.children[9].value;
    let planF = formulario.children[11].value;




    if ((nombreF == "") || (dniF == "") || (capitalF == "") || (salarioF === "")) {
        alert("debe completar todos los campos");




    } else {
        aptitud(capitalF, salarioF);

    }
}






















