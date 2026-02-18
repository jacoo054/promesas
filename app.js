const usuarios = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Carlos", edad: 25 },
    { id: 3, nombre: "María", edad: 30 }
];


function buscarUsuarioPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find(u => u.id === id);

            if (usuarioEncontrado) {
                resolve(usuarioEncontrado);
            } else {
                reject("Error: Usuario no encontrado");
            }
        }, )
    });
}

const boton = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const id = Number(document.getElementById("inputId").value);

    
    

    buscarUsuarioPorId(id)
        .then(usuario => {
            resultado.textContent = 
                `Usuario encontrado:
                 Nombre: ${usuario.nombre}
                 Edad: ${usuario.edad}`;
        })
        .catch(error => {
            resultado.textContent = error;
        })
        .finally(() => {
            console.log("Proceso finalizado");
        });
});
