/*let entrada = prompt("Ingresar un numero");
if (entrada <= 5){
    alert("el numero es menor o igual a 5")
}
else if(entrada >5 && entrada <10){
    alert("el numero es mayor a 5 y menor que 10")

}

else{
    alert("el numero es mayor o igual a 10")
}

/*desafio2 
let ingreseCapital = parseInt(prompt("Ingrese Capital a Solicitar"));

let ingresePlan = parseInt(prompt("Ingrese Plan de Cuotas Elegido:3, 6 o 9 cuotas mensuales"));



let resultado =0;

const calculadora = (ingreseCapital, ingresePlan) => {


    if (ingresePlan === 3) {
        resultado= (ingreseCapital * 1.20 / ingresePlan);
        alert(" su cuota mensual es de "+ resultado)
         
         
    }
    else if (ingresePlan === 6) {
         resultado= (ingreseCapital * 1.45 / ingresePlan);
         alert(" su cuota mensual es de "+ resultado)
         

    }
    else if (ingresePlan === 9) {
         resultado= (ingreseCapital * 1.60 / ingresePlan);
         alert(" su cuota mensual es de "+ resultado)
         

    }
    else {
        alert("El plan elegido no es correcto");
    }

    
}
calculadora(ingreseCapital, ingresePlan);*/

class Solicitudes {
    constructor(nombre,apellido,dni,capital,plan) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.capital = capital;
        this.plan = plan;
        this.otorgado = false;
    }
}
const creditos = [];
creditos.push(new Solicitudes("Daniela","Soto", 32587456 , 100000, 12));
creditos.push(new Solicitudes("Noelia","Manresa",35697412, 180000,9));
creditos.push(new Solicitudes("Facundo","Diaz", 30145236, 20000,6));
creditos.push(new Solicitudes("Matias","Lopez", 42156874, 2000,3));

console.log(creditos);









