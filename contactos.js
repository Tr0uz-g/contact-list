// Lista de contactos
let listaContactos = [];

// Función para crear un contacto
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    let nuevoContacto = {
        Id: id,
        Nombres: nombres,
        Apellidos: apellidos,
        Telefono: telefono,
        Ubicaciones: {
            Ciudad: ciudad,
            Direccion: direccion
        }
    };
    
    listaContactos.push(nuevoContacto);
    console.log("Contacto creado:", nuevoContacto);
    console.log("Lista de contactos:", listaContactos);
}

// Función para eliminar un contacto por su ID
function eliminarContactoPorId(id) {
    // Filtrar la lista de contactos para excluir el contacto con el ID dado
    const contactosFiltrados = listaContactos.filter(contacto => contacto.Id !== id);
    console.log("Contacto(s) eliminado(s):", listaContactos.filter(contacto => contacto.Id === id));
    listaContactos = contactosFiltrados;
    console.log("Lista de contactos actualizada:", listaContactos);
}

// Crear un contacto
crearContacto(1, "Juan", "Perez", "123456789", "Ciudad Ejemplo", "Calle Principal, 123");
crearContacto(2, "Maria", "Lopez", "987654321", "Otra Ciudad", "Avenida Secundaria, 456");

// Eliminar un contacto por su ID
eliminarContactoPorId(1);
