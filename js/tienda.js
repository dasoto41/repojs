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
.then( (data) => {
    
    


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
        console.log(boton)
        boton.addEventListener("click", () => {
            carritoIndex(producto.id)

            Swal.fire({
                icon: 'success',
                title: 'Genial!!',
                text: 'Producto Agregado!',

            })

        })


    });

}
mostrarProductos(data)





/*carrito*/



let carrito = [];/*para guardar productos que compran*/




const carritoIndex = (productoId) => {

    const carritoContenedor = document.getElementById("carrito-contenedor");



    const renderProductosCarrito = () => {



        let producto = data.find(producto => producto.id == productoId)


        carrito.push(producto);



        let div = document.createElement("div")
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                 <p>${producto.nombre}</p>
                 <p>Precio: ${producto.precio}</p>
                 <p id="cantidad${producto.id}">Cantidad:${producto.cantidad}</p>
                 <button id="eliminar${producto.id}">Eliminar</button>
    
                  `

        carritoContenedor.appendChild(div);

        //eliminar producto//


        const carritoContenedorB = document.getElementById(`eliminar${producto.id}`);


        carritoContenedorB.addEventListener("click", eliminarProducto);

        function eliminarProducto(productoId) {
            let producto = data.filter(producto => producto.id == productoId);
            div.innerHTML = " ";
            console.log(producto)


        }



    }

    renderProductosCarrito();


}





/* MOSTRAR CARRITO */

const modalContenedor = document.querySelector('#carrito-contenedor');

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('close')

const modalCarrito = document.querySelector('.modal-carrito')




abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
})

})