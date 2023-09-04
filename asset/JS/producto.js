function alertCabello() {
    Swal.fire({
        title: 'Cortes de Cabello',
        html:
        '<div class= "PopUpCabello">'+
            '<div class= "PopUpNiños">'+
                '<h3>Cortes de Cabello para Niños:</h3>'+
                '<p>★ Corte Clásico</p>'+
                '<p>★ Corte de Pelo Corto</p>'+
                '<p>★ Corte de Pelo Largo</p>'+
                '<p>★ Fade o Degradado</p>'+
            '</div>' +
            '<div class= "PopUpAdultos">'+
                '<h3>Cortes de Cabello para Hombres Adultos:</h3>'+
                '<p>★ Corte de Pelo Clásico</p>'+
                '<p>★ Corte a la Moda</p>'+
                '<p>★ Corte Militar</p>'+
                '<p>★ Corte de Pelo Largo</p>'+
            '</div>' +
        '</div>',
        footer: 'Recuerda que la elección del corte de cabello depende en gran medida de las preferencias personales, la textura del cabello y el estilo de vida. Un buen estilista puede proporcionar asesoramiento adicional y personalizar el corte según las necesidades individuales',
        width:'80%',
        background: 'linear-gradient(#E5E7E9 , #CACFD2, #909497)',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        showConfirmButton : false,
        showCloseButton: true,
        customClass: {
            footer: 'footerPopUp',
            title: 'titlePopUp'
        },
    })
}

function alertBarba() {
    Swal.fire({
        title: 'Cortes de Barba',
        html:
        '<table class= "tablaCyB">'+ 
        '<tbody>' + 
        '<tr> <td><b>★ Barba Completa</b></td></tr>' + 
        '<tr> <td><b>★ Barba de Tres Días</b></td></tr>' + 
        '<tr> <td><b>★ Barba Corta</b></td></tr>' + 
        '<tr> <td><b>★ Barba Larga</b></td></tr>' + 
        '<tr> <td><b>★ Barba de Candado</b></td></tr>' +
        '<tr> <td><b>★ Barba de Chivo</b></td></tr>' +
        '<tr> <td><b>★ Barba Garibaldi</b></td></tr>' +
        '<tr> <td><b>★ Barba Verdi</b></td></tr>' +
        '<tr> <td><b>★ Barba de Hipster</b></td></tr>' +
        '<tr> <td><b>★ Barba de Ancla</b></td></tr>' +
        '</tbody>' +
        '</table>',
        footer: 'Recuerda que la elección del estilo de barba depende de la forma de tu rostro, la textura de tu vello facial y tus preferencias personales. Mantener y cuidar la barba es esencial para que se vea bien y saludable. Un barbero profesional puede ayudarte a lograr el estilo de barba que mejor se adapte a ti y proporcionarte el cuidado adecuado.',

        background: 'linear-gradient(#E5E7E9 , #CACFD2, #909497)',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        showConfirmButton : false,
        showCloseButton: true,
        customClass: {
            footer: 'footerPopUp',
            title: 'titlePopUp'
        },
    })
}

function alertCabelloBarba() {
    Swal.fire({
        title: 'Corte de Cabello + Barba',
        html:
        '<table class= "tablaCyB">'+ 
        '<tbody>' + 
        '<tr> <td><b>★ Combo Clásico de Corte de Pelo y Afeitado</b></td></tr>' + 
        '<tr> <td><b>★ Combo de Barba y Barba</b></td></tr>' + 
        '<tr> <td><b>★ Combo de Corte de Pelo Moderno y Barba a la Moda</b></td></tr>' + 
        '<tr> <td><b>★ Combo de Corte de Pelo y Barba Clásicos</b></td></tr>' + 
        '<tr> <td><b>★ Combo de Corte de Pelo para Niños con Barba para Adultos</b></td></tr>' +
        '<tr> <td><b>★ Combo de Corte de Pelo y Afeitado de Lujo</b></td></tr>' +
        '<tr> <td><b>★ Combo de Cambio de Imagen Total</b></td></tr>' +
        '</tbody>' +
        '</table>',
        footer: 'Estos combos proporcionan una amplia variedad de opciones para hombres que desean mantenerse bien arreglados y verse a la moda. Cada uno de ellos puede personalizarse según las necesidades individuales y las preferencias de estilo de cada persona. Un profesional de la peluquería o la barbería puede ayudar a los clientes a elegir el combo que mejor se adapte a su estilo y ofrecer servicios de calidad.',

        background: 'linear-gradient(#E5E7E9 , #CACFD2, #909497)',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        showConfirmButton : false,
        showCloseButton: true,
        customClass: {
            footer: 'footerPopUp',
            title: 'titlePopUp'
        },
    })
}
    

