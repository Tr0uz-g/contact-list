
let contactosDatos = ["Pablo Torre", "Sofia Gutierres", "Alberto Rodriguez"]

contactosDatos.push("Jose Suarez")

let contactoEliminado = contactosDatos.shift("Luis Lopez")

console.log(contactosDatos)
console.log(`${contactoEliminado}: este contacto se elimino con el metodo shift (__elimina_el_primer_elemento__) y se devolvio a la fucion contactoEliminado`)