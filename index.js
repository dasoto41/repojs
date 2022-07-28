

class Solicitud {
    constructor(nombre, dni, capital, plan, ingresoMensual) {
        this.nombre = nombre;
        this.dni = dni;
        this.capital = parseInt(capital);
        this.plan = parseInt(plan);
        this.ingresoMensual = parseInt(ingresoMensual);
        this.apto = false;
    }

    aptitud() { this.apto = true; }

}
const creditos = [];

for (i = 0; i < 3; i++) {
    let entrada = prompt("ingrese su nombre o ESC para salir").toLowerCase();

    if (entrada === "esc") {
        break;
    } else {
        nombreIngr = entrada;
        let dniIngr = prompt("ingrese su DNI");
        let capitalIngr = prompt("ingrese capital a solicitar");
        let planIngr = prompt("ingrese plan de cuotas MENSUALES => colocar = 3 : para 3 cuotas mensuales;6 : para 6 cuotas mensuales; 9: para 9 cuotas mensuales ; 12 para 12 cuotas mensuales");
        let ingresoMensualIngr = prompt("especifique su ingreso mensual neto");
        creditos.push(new Solicitud(nombreIngr, dniIngr, capitalIngr, planIngr, ingresoMensualIngr));
    }
}



for (const elemento of creditos) {
    if (elemento.capital < (elemento.ingresoMensual * 2)) {
        elemento.aptitud();
        alert("es apto");

    } else {
        alert("no es apto");
    }

}


console.log(creditos);

let contenedor = document.getElementById("container");

for (const elemento of creditos) {
    let li = document.createElement("li");
    li.innerHTML = `<h1>BIENVENIDO/A ${elemento.nombre}</h1>
                  
                `
    contenedor.append(li)
}
