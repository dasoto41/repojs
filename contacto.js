
let formularioContacto= document.getElementById("formulario");


/* 1er forma de mostrar resultados :
let nombreF  = document.getElementById("name1")
nombreF.onchange= () => {
    console.log(nombreF.value)
};


let dniF  = document.getElementById("DNI1")
dniF.onchange= () => {
     console.log(dniF.value)
};

let emailF  = document.getElementById("email1")
emailF.onchange =() => {
     console.log(emailF.value)
};

let capitalF  = document.getElementById("capital1")
capitalF.onchange= () => {
     console.log(capitalF.value)
};
let salarioF  = document.getElementById("salario1")
salarioF.onchange= () => {
    console.log(salarioF.value)
};*/



    let nombreF=formulario.children[0].value;
    let dniF=formulario.children[1].value;
    let capitalF=formulario.children[2].value;
    let salarioF=formulario.children[3].value;
    let planF=formulario.children[4].value;
    

    

formularioContacto.addEventListener("submit",agregarSolicitud);

function agregarSolicitud(e){
    e.preventDefault();

    
     nombreF=formulario.children[0].value;
     dniF=formulario.children[1].value;
     capitalF=formulario.children[2].value;
     salarioF=formulario.children[3].value;
     planF=formulario.children[4].value;

     console.log(nombreF);
     console.log(dniF);
     console.log(capitalF);
     console.log(salarioF);
     console.log(planF);

   
    if((nombreF=="")|| (dniF=="")|| (capitalF=="")|| (salarioF==="")){
        alert("debe completar todos los campos")
    }else{
        console.log("formulario enviado")
    }
    
    }
    



















