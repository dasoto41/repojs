

class Solicitud {
    constructor(nombre, capital, plan) {
        this.nombre = nombre;
        this.capital = parseInt(capital);
        this.plan = parseInt(plan);
        this.apto = false;
    }



}
const creditos = [];

const simulador = document.getElementById("simulador");

simulador.addEventListener("click", simular);

function simular() {

    let nombreIngr = prompt("ingrese su nombre").toLowerCase();
    let capitalIngr = prompt("ingrese capital a solicitar");
    let planIngr = prompt("ingrese plan de cuotas MENSUALES => colocar = * 3 : para 3 cuotas mensuales"+" "+ "* 6 : para 6 cuotas mensuales" +" "+ "*9: para 9 cuotas mensuales " +" "+"*12 para 12 cuotas mensuales");

    creditos.push(new Solicitud(nombreIngr, capitalIngr, planIngr));

    let contenedor = document.getElementById("container");

    for (const elemento of creditos) {
        let li = document.createElement("li");
        li.innerHTML = `<h1>BIENVENID@ ${elemento.nombre}!!</h1>
                  
                `
        contenedor.append(li)


    }

    while (planIngr != "") {
        switch (planIngr) {
            case "3":
                alert("su cuota mensual es de " + Math.round(`${capitalIngr}` * 1.3 / 3));
                break;

            case "6":
                alert("su cuota mensual es de " + Math.round(`${capitalIngr}` * 1.55 / 3));
                
                break;

            case "9":
                alert("su cuota mensual es de " + Math.round(`${capitalIngr}` * 1.75 / 3));
                break;

            case "12":
                alert("su cuota mensual es de " + Math.round(`${capitalIngr}` * 1.9 / 3));
                break;

            default:
                alert("plan mal ingresado");
                break;


        }
        let salida = prompt("ingrese ESC").toLowerCase;
        
        if (salida === esc) {
            break;
        }
    }



    simular();
}









