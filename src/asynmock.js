const productos = [
    { nombre: "Rx 580", precio: 70000, id: "1", img: "../img/rx580.png", idCat: "2" },
    { nombre: "Rx 6500xt", precio: 200000, id: "2", img: "../img/6500xt.jpg", idCat: "2" },
    { nombre: "RTX 2060 SUPER", precio: 230000, id: "3", img: "../img/2060.png", idCat: "3" },
    { nombre: "RTX 3090", precio: 600000, id: "4", img: "../img/3090.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}