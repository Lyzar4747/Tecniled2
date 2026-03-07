let botones = document.querySelectorAll(".btn-producto");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        let nombre = boton.dataset.nombre;
        let precio = parseInt(boton.dataset.precio);

        let producto = { nombre, precio };

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert("Producto agregado al carrito");
    });
});
