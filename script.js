function calcularCapital() {
    var nombrePagador = document.getElementById("nombrePagador").value;
    var legajoPagador = document.getElementById("legajoPagador").value;
    var nombreJefe = document.getElementById("nombreJefe").value;
    var legajoJefe = document.getElementById("legajoJefe").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var mesa = parseInt(document.getElementById("mesa").value) || 0;
    var juego = document.getElementById("juego").value;

    var ficha500000 = parseInt(document.getElementById("ficha500000").value) || 0;
    var ficha100000 = parseInt(document.getElementById("ficha100000").value) || 0;
    var ficha50000 = parseInt(document.getElementById("ficha50000").value) || 0;
    var ficha20000 = parseInt(document.getElementById("ficha20000").value) || 0;
    var ficha10000 = parseInt(document.getElementById("ficha10000").value) || 0;
    var ficha5000 = parseInt(document.getElementById("ficha5000").value) || 0;
    var ficha2000 = parseInt(document.getElementById("ficha2000").value) || 0;
    var ficha1000 = parseInt(document.getElementById("ficha1000").value) || 0;
    var ficha500 = parseInt(document.getElementById("ficha500").value) || 0;
    var ficha200 = parseInt(document.getElementById("ficha200").value) || 0;
    var ficha100 = parseInt(document.getElementById("ficha100").value) || 0;

    var capital500000 = ficha500000 * 500000;
    var capital100000 = ficha100000 * 100000;
    var capital50000 = ficha50000 * 50000;
    var capital20000 = ficha20000 * 20000;
    var capital10000 = ficha10000 * 10000;
    var capital5000 = ficha5000 * 5000;
    var capital2000 = ficha2000 * 2000;
    var capital1000 = ficha1000 * 1000;
    var capital500 = ficha500 * 500;
    var capital200 = ficha200 * 200;
    var capital100 = ficha100 * 100;

    var capitalExistente = capital500000 + capital100000 + capital50000 +
                           capital20000 + capital10000 + capital5000 +
                           capital2000 + capital1000 + capital500 +
                           capital200 + capital100;
    var capitalInicial = parseInt(document.getElementById("capitalInicial").value) || 0;
    var beneficio = capitalExistente - capitalInicial;
    var capitalFijo = parseInt(document.getElementById("capitalFijo").value) || 0;
    var cajaEmpleados = parseInt(document.getElementById("cajaEmpleados").value) || 0;
    var existenciaTotal = capitalExistente + capitalFijo;   
    var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Nombre del Pagador: " + nombrePagador + "<br>" +
                                  "Legajo del Pagador: " + legajoPagador + "<br>" +
                                  "Nombre del Jefe: " + nombreJefe + "<br>" +
                                  "Legajo del Jefe: " + legajoJefe + "<br>" +
                                  "Fecha: " + fecha + "<br>" +
                                  "Hora: " + hora + "<br>" +
                                  "Número de Mesa: " + mesa + "<br>" +                                 "Juego: " + juego + "<br>" +
                                  "Capital Existente: " + capitalExistente + "<br>" +
                                  "Capital Fijo: " + capitalFijo + "<br>" + 
                                  "Recaudación C.E.: " + cajaEmpleados + "<br>" +
                                  "Existencia Total: " + existenciaTotal; + "<br>";
                                  
                
                                  var beneficioElemento = document.getElementById("beneficio");
                                  
                                  if (beneficio > 0) {
                                      beneficioElemento.className = "beneficio-verde";
                                      beneficioElemento.innerHTML = "Beneficio de la Mesa: " + beneficio
                                  } else {
                                      beneficioElemento.className = "quebranto-rojo";
                                      beneficioElemento.innerHTML = "Quebranto de la Mesa: " + beneficio;
                                  }     
                                      
                                  function enviar() {
                                    // Obtener los valores de los campos del formulario
                                    var nombrePagador = document.getElementById("nombrePagador").value;
                                    var legajoPagador = document.getElementById("legajoPagador").value;
                                    var nombreJefe = document.getElementById("nombreJefe").value;
                                    var legajoJefe = document.getElementById("legajoJefe").value;
                                    var fecha = document.getElementById("fecha").value;
                                    var hora = document.getElementById("hora").value;
                                    var mesa = document.getElementById("mesa").value;
                                    var juego = document.getElementById("juego").value;
                        
                                    // Construir el contenido del correo electrónico
                                    var contenidoEmail = "Nombre del Pagador: " + nombrePagador + "\n" +
                                                         "Legajo del Pagador: " + legajoPagador + "\n" +
                                                         "Nombre del Jefe: " + nombreJefe + "\n" +
                                                         "Legajo del Jefe: " + legajoJefe + "\n" +
                                                         "Fecha: " + fecha + "\n" +
                                                         "Hora: " + hora + "\n" +
                                                         "Número de Mesa: " + mesa + "\n" +
                                                         "Juego: " + juego + "\n";
                        
                                    // Crear enlace de correo electrónico con el contenido prellenado
                                    var mailtoLink = "mailto:correo@ejemplo.com?subject=Datos%20de%20arqueo%20de%20mesa&body=" + encodeURIComponent(contenidoEmail);
                        
                                    // Redireccionar al cliente de correo predeterminado
                                    window.location.href = mailtoLink;
                                }
                        
                                function imprimir() {
                                    // Generar contenido para imprimir
                                    var contenidoImprimir = "<h1>Arqueo de Mesa de Juego</h1>";
                                    // Agregar el contenido necesario para la impresión
                        
                                    // Comprobar si el dispositivo está conectado a una impresora
                                    if (window.print) {
                                        // Abrir la ventana de impresión y mostrar el contenido
                                        var printWindow = window.open('', '_blank');
                                        printWindow.document.open();
                                        printWindow.document.write(contenidoImprimir);
                                        printWindow.document.close();
                                        printWindow.print();
                                    } else {
                                        // Si no se puede imprimir, ofrecer guardar como PDF
                                        var pdfLink = "data:application/pdf," + encodeURIComponent(contenidoImprimir);
                                        var linkElement = document.createElement("a");
                                        linkElement.href = pdfLink;
                                        linkElement.target = "_blank";
                                        linkElement.download = "arqueo_de_mesa.pdf";
                                        linkElement.click();}
} 
}