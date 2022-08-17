//LOGIN
//INGRESAR


const botonIngresar = document.getElementById("ingresar");

botonIngresar.addEventListener("click", ingresarCuenta);

function ingresarCuenta(evt) {
    evt.preventDefault();
    let form=document.getElementById("form")

    let ausuario = document.getElementById("user").value;
    let acontrasenna = document.getElementById("pass").value;

    let userStore = localStorage.getItem("nombreRegUsuario")
    let passStore = localStorage.getItem("nombreRegContrasenna")
    let contenedor = document.getElementById("container");

    if (ausuario === userStore && acontrasenna === passStore) {
        let li = document.createElement("li");
        li.innerHTML = `<h1>BIENVENID@ ${ausuario}!!</h1>
                  
                `
        contenedor.append(li)
        Swal.fire({
            icon: 'success',

            text: 'usuario logueado con exito',

        })&& form.reset();



    } else {
        Swal.fire({
            icon: 'error',

            text: 'error en login',

        })

    }




}

//REGISTRAR


const botonRegistrar = document.getElementById("registrar");

botonRegistrar.addEventListener("click", registrarCuenta);
formulario = document.getElementById("formulario")

function registrarCuenta(e) {
    e.preventDefault();



    let aregUsuario = document.getElementById("regUser").value;
    let aregContrasenna = document.getElementById("regPass").value;
    let nombre = document.getElementById("name").value;
    let mail = document.getElementById("email").value;

    ((nombre == "") || (mail == "") || (aregUsuario == "") || (aregContrasenna == "")) ? alert("debe completar todos los campos") : alert("registro exitoso")
    formulario.reset();


    localStorage.setItem("nombreRegUsuario", aregUsuario)
    localStorage.setItem("nombreRegContrasenna", aregContrasenna);


}


//productos a la pagina

const productos = [
    {
        id: 1,
        nombre: "DOLAR",
        precio: 300,
        cantidad: 1,
        img: "/imagenes/DOLAR.jpeg"
    },

    {
        id: 2,
        nombre: "PESO CHILENO",
        precio: 500,
        cantidad: 1,
        img: "/imagenes/peso chileno.jpg",
    }

]

/*renderizar productos a la pagina*/

fetch("/json/productos.json")
    .then((response) => response.json())
    .then((data) => {




        const mostrarProductos = () => {


            const contenedor = document.getElementById("contenedorProd")

            data.forEach(producto => {
                const div = document.createElement("div")

                div.innerHTML += `
                     <div class="" style="width: 18rem;">
                      <img src="${producto.img}" class="imagen-producto" alt="...">
                      <div class="">
                          <h5 class="">${producto.nombre}</h5>
                        <p class="card-text">Precio:$ ${producto.precio}</p>
                        <button class="" id=boton${producto.id}>Comprar</button>
                        </div>
                    </div>
        
                      `
                contenedor.appendChild(div)

                const boton = document.getElementById(`boton${producto.id}`)

                boton.addEventListener("click", () => {
                    addCart(producto.id)

                    Swal.fire({
                        icon: 'success',
                        title: 'Genial!!',
                        text: 'Producto Agregado!',

                    })

                })

            });

        }

        mostrarProductos(data)
    })





/*carrito*/



let carrito = [];/*para guardar productos que compran*/

function addCart(productoid) {



    let existe = carrito.some(producto => producto.id == productoid);


    // Agrego al carrito
    if (!existe) {
        let newproduct = productos.find((producto => producto.id == productoid))

        carrito.push(newproduct)

        const contenedorCart1 = document.getElementById("cart");
        console.log(contenedorCart1)

        const div = document.createElement("div")
        carrito.forEach((producto) => {
            div.innerHTML = `
              <div id="hola">
              <h3>NOMBRE:${producto.nombre}</h3>
              <p> PRECIO:${producto.precio}</p>
              <h4 id="cantidad${producto.id}">  CANTIDAD:${producto.cantidad}</h4>
              <button id=eliminar${producto.id}>ELIMINAR</button>                
              </div>`

            contenedorCart1.append(div);

            const carritoContenedor = document.getElementById(`eliminar${producto.id}`);
            carritoContenedor.addEventListener("click", eliminarProducto);

            function eliminarProducto(productoId) {
                let producto = carrito.filter(producto => producto.id == productoId);
                div.innerHTML = " ";

            }


        })

    } else {
        let duplicado = carrito.find((producto => producto.id == productoid))


        console.log(carrito)


        if (duplicado.id === 1) {
            carrito.push(duplicado.cantidad++)
            const contenedorCart2 = document.getElementById("cart");

            contenedorCart2.textContent = '';


            const div = document.createElement("div")
            carrito.forEach((producto) => {
                div.innerHTML = `
            <div>
            <h3>NOMBRE:${duplicado.nombre}</h3>
            <p> PRECIO:${duplicado.precio}</p>
            <h4 id="cantidad${duplicado.id}"> CANTIDAD:${duplicado.cantidad}</h4>
            <button id=eliminar${duplicado.id}>ELIMINAR</button>                
            </div>`

                contenedorCart2.append(div);

                const carritoContenedorB = document.getElementById(`eliminar${duplicado.id}`);
                carritoContenedorB.addEventListener("click", eliminarProducto);

                function eliminarProducto(productoId) {
                    carrito = carrito.filter(producto => producto.id == productoId);
                    div.innerHTML = " ";

                }
            })

        } else if (duplicado.id === 2) {
            carrito.push(duplicado.cantidad++);
            const contenedorCart1 = document.getElementById("hola");


            contenedorCart1.textContent.includes("PESO CHILENO") ? contenedorCart1.textContent = " " : null;




            const contenedorCart3 = document.getElementById("cart2");


            contenedorCart3.textContent = '';




            const div = document.createElement("div")
            carrito.forEach((producto) => {
                div.innerHTML = `
                <div>
                 <h3>NOMBRE:${duplicado.nombre}</h3>
                 <p> PRECIO:${duplicado.precio}</p>
                 <h4 id="cantidad${duplicado.id}"> CANTIDAD:${duplicado.cantidad}</h4>
                 <button id=eliminar${duplicado.id}>ELIMINAR</button>                
                 </div>`
                contenedorCart3.append(div);

                const carritoContenedorC = document.getElementById(`eliminar${duplicado.id}`);
                carritoContenedorC.addEventListener("click", eliminarProducto);

                function eliminarProducto(productoId) {
                    carrito = carrito.filter(duplicado => duplicado.id == productoId);
                    div.innerHTML = " ";




                }
            })

        }
    }
}

//mostrar carrito al  click
const modalContenedor = document.querySelector('#containerCart');

const abrirCarrito = document.getElementById('open')


abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('cart')
})





