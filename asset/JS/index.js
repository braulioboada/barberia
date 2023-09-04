// Botón scrollup

$(function(){
    $.scrollUp({
        scrollImg: true
    });
  });

  //carrousel

var imagenes = ['asset/img/Barberia.jpg', 'asset/img/Barberia1.jpg', 'asset/img/Barberia2.jpg', 'asset/img/Barberia3.jpg', ],
    cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length -1;
            }

        }else if(tgt == adelante){
            if(cont < imagenes.length -1){
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor)
    
})