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
calculadora(ingreseCapital, ingresePlan);

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

console.log(creditos);*/



class Solicitud{
    constructor(nombre,dni,capital,plan,ingresoMensual) {
        this.nombre = nombre;
        this.dni = dni;
        this.capital = parseInt(capital);
        this.plan = parseInt(plan);
        this.ingresoMensual= parseInt(ingresoMensual);
        this.apto = false;
    }

    aptitud(){ this.apto=true;}
        
}
const creditos = [];

for(i=0;i<3;i++){
let entrada=prompt("ingrese su nombre o ESC para salir").toLowerCase();

    if(entrada==="esc"){
        break;
    }else{
         nombreIngr=entrada;
        let dniIngr=prompt("ingrese su DNI");
        let capitalIngr=prompt("ingrese capital a solicitar");
        let planIngr=prompt("ingrese plan de cuotas MENSUALES => colocar = 3 : para 3 cuotas mensuales;6 : para 6 cuotas mensuales; 9: para 9 cuotas mensuales ; 12 para 12 cuotas mensuales");
        let ingresoMensualIngr=prompt("especifique su ingreso mensual neto");
        creditos.push(new Solicitud(nombreIngr,dniIngr,capitalIngr,planIngr,ingresoMensualIngr));
    }  
}

  

  for(const elemento of creditos){
    if(elemento.capital<(elemento.ingresoMensual*2)){
      elemento.aptitud();
      alert("es apto");

    }else{
        alert("no es apto");
    }
    
  }


  console.log(creditos);

  let contenedor=document.getElementById("container");

  for(const elemento of creditos){
    let li=document.createElement("li");
    li.innerHTML=`<h1>BIENVENIDO/A ${elemento.nombre}</h1>
                  
                `
    contenedor.append(li)         
  }
