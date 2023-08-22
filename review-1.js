
let listaContactos = [];


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
    console.log("Lista de contactos " + listaContactos)
    listaContactos.push(nuevoContacto);
    console.log("Contacto creado:", nuevoContacto);
    console.log("Lista de contactos:", listaContactos);
}


function eliminarContactoPorId(id) {
    
    const contactosFiltrados = listaContactos.filter(contacto => contacto.Id !== id);
    console.log("Contacto(s) eliminado(s):", listaContactos.filter(contacto => contacto.Id === id));
    listaContactos = contactosFiltrados;
    console.log("Lista de contactos actualizada:", listaContactos);
}


crearContacto(1, "Juan", "Perez", "123456789", "Ciudad Ejemplo", "Calle Principal, 123");
crearContacto(2, "Maria", "Lopez", "987654321", "Otra Ciudad", "Avenida Secundaria, 456");



eliminarContactoPorId(1);
