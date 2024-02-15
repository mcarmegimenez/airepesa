
window.onload = function () {

var UrlDir = 'data/imgns/';
var arrayImagenes = ["aire.png", "aula.png", "bascula.png", "bocadillo.png",
 "bomba.png", "boton_bascula.png", "cartel.png", "flechas.png", "maleta0.png", "maleta1.png", "maleta2.png",
  "maleta3.png", "maleta4.png", "pelota0.png", "pelota1.png", "pelota2.png", "pelota3.png", "pelota4.png",
   "profesor1.jpg", "profesor2.jpg", "pusher.png", "pusher_base.png", "valv_conexion.png" ];

var loadedImgs = 0;

function preload(funct){

  for (i = 0; i < arrayImagenes.length; i++) {
    var img = new Image();
  img.onload = function() {
    loadedImgs++;
  

    $('#preloaderBar').css({'width':(loadedImgs/arrayImagenes.length)*100.0+'%'}); 
    $('#preloaderPercent').html(parseInt((loadedImgs/arrayImagenes.length)*100.0)+'%'); 
    if(loadedImgs == arrayImagenes.length - 1) {
  

     $('#preloader').hide() 

    }
};
    img.src = UrlDir+arrayImagenes[i];
  }
}

preload()

//$('#preloader').hide();

$(document).on('touchmove', function(e) {
    if (!$(e.target).parents('.scroll')[0]) {
        e.preventDefault();
    }
});

$(window).resize(function(){

  $("#slider_boton").css({ top: "0%"});
})

var logo_ancho = ($('#logo').width()/960) * 100;
var logo_alto = ($('#logo').height()/600) * 100;
var logo_left = ($('#logo').position().left/960) * 100;
var logo_top = ($('#logo').position().top/600) * 100;

$('#logo').css({ width: +logo_ancho+'%', height: +logo_alto+'%', left: +logo_left+'%', top: +logo_top+'%'});
      
  setInterval(function(){

    /*var logo_ancho = ($('#logo').width()/$('#fondo').width()) * 100;
    var logo_alto = ($('#logo').height()/$('#fondo').height()) * 100;

    $('#logo').css({ width: +logo_ancho+'%', height: +logo_alto+'%'});*/
   
    var fondo = $('#fondo');
    var ventana = $(window);
    var ancho = 1440;
    var alto = 900;
    var ancho_min = 672;
    var alto_min = 420;

    if((ventana.height() < alto || ventana.width() < ancho )){
        if(ventana.width() < ventana.height()*1.6){
          fondo.css({ width: '100%' })
          fondo.css({ height: fondo.width()/1.6 + 'px' })
        }else{
          fondo.css({ height: ventana.height()+ 'px' })
          fondo.css({ width: fondo.height()*1.6 + 'px' })
        }                        
    };

    if(ventana.height() < alto_min || ventana.width() < ancho_min){

          fondo.css({ height: '420px' })
          fondo.css({ width: '672px' })                                
    };

    if(ventana.height() > alto && ventana.width() > ancho){
                              fondo.css({ height: alto+'px' })
                              fondo.css({ width: ancho+'px' })      
    };

    /* para darle referencia al texto */
    var anchoFondo = $('#fondo').width()/ancho;

    $('#top').css({ 'font-size' : 30*anchoFondo + 'px'}).addClass('estilos_cabecera');
    $('.colorTablaEncabezado').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('.colorTabla1, .colorTabla2').css({ 'font-size' : 40*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('.prueba, .resp_2').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#textoIndicaOver, #textoIndicaPesoOver').css({ 'font-size' : 40*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#textoIndicaInfo, #textoIndicaResp').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#textoMatematicas').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#textoFase3').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#bocadillo').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('.cartel').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 40*anchoFondo+'px'}).addClass('estilos_normales');
    $('.boton').css({ 'font-size' : 30*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#basculaPantalla').css({ 'font-size' : 40*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('.medidas').css({ 'font-size' : 35*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    $('#pesoMaleta').css({ 'font-size' : 35*anchoFondo + 'px','line-height': 30*anchoFondo+'px'}).addClass('estilos_normales');
    
    

  }, 100);


  bien = document.getElementById("bien");
  pop = document.getElementById("pop");
  clip = document.getElementById("clip");
  clap = document.getElementById("clap");
  click = document.getElementById("click");
  bombaAire = document.getElementById("bombaAire");
  balon_aire = document.getElementById("balon_aire");
  mal = document.getElementById("mal");
  aspirador = document.getElementById("aspirador");
  grito = document.getElementById("grito");

 /* bien.load();
  pop.load();
  clip.load();
  clap.load();
  click.load();
  bombaAire.load();
  balon_aire.load();
  mal.load();
  aspirador.load();
  grito.load();
*/
  
  $('#top').html(textos.top);
  $('#tabla1').html(textos.tabla_1);
  $('#tabla7').html(textos.tabla_7);

  $('#pontePrueba').html(textos.pontePrueba);
  $('#pontePruebaText').html(textos.pontePruebaText);
  $('#resp1').html(textos.resp1);
  $('#resp2').html(textos.resp2);
  $('#resp3').html(textos.resp3);
  $('#textoIndicaInfo').html(textos.textoIndicaInfo);
  $('#textoIndicaResp').html(textos.textoIndicaResp);
  $('#textoFase3').html(textos.textoFase3);
  $('#bocadillo').html(textos.bocadillo);
  $('#botonContinuar').html(textos.seguir);
  $('#botonFase3').html(textos.seguir);
  $('#botonCalculo').html(textos.botonCalculo);
  $('#alto').html(textos.alto);
  $('#ancho').html(textos.ancho);
  $('#largo').html(textos.largo);
  $('#botonReinicio').html(textos.repetir);
  $('#pesoMaleta').html(textos.pesoMaleta);
  $('#resp1_2').html(textos.resp1_2);
  $('#resp2_2').html(textos.resp2_2);
  $('#resp3_2').html(textos.resp3_2);

  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  var litros = 0;
  var pusher = $('#slider_boton');
  var paso = 0;

  var puedeSalirCalculoAire = 0;
  var puedeSalirCalculoProf = 0;
  var puedeSalirCalculoMesas = 0;

  var primerClick = 0;

  var conexion = setInterval(movConexion, 15);
  primerPusherDestroy()

  $("#cartelIntro").fadeIn(0).html(textos.cartelIntro);

function deNuevo(){

  $('.profesor').fadeOut(1000);
  $('.medidas').fadeOut(1000);
  $('.aula').fadeOut(1000);
  $('#bocadillo').fadeOut(1000);
  $('#textoMatematicas').fadeOut(1000);
  $('.over').fadeOut(1000);
  $('.maleta').fadeOut(0);
  $('#pesoMaleta').fadeOut(0);
  $('#tapa1').fadeIn(0);

  $("#resp1").css({'opacity': '1', 'background-color': '#eceaf0', color: '#000' })
  $('#resp2').css({'opacity': '1', 'background-color': '#eceaf0', color: '#000' })
  $('#resp3').css({ 'background-color': '#eceaf0', color: '#000' });

  $(".resp_2").css({'opacity': '1', 'background-color': '#eceaf0', color: '#000' })

  $('#textoMatematicas').fadeOut(0)

  setTimeout(function(){

    $('#textoMatematicas').css({ top: '28%' });
  }, 2000);
  


  setTimeout(function(){

    litros = 0;
    paso = 0;

    puedeSalirCalculoAire = 0;
    puedeSalirCalculoProf = 0;
    puedeSalirCalculoMesas = 0;

    conexion = setInterval(movConexion, 15);
    primerPusherDestroy()

    $("#cartelIntro").fadeIn(0).html(textos.cartelIntro);

    $('#valvConexion').fadeIn(1000).css({ top: "68%", left: "20%"})
    $('#valvConexion').css({ "background-position": "0% 0%" });
    $('#pelota').fadeIn(1000);
    $('#bascula').fadeIn(1000);
    $('#basculaPantalla').html("").fadeIn(1000);
    $('.tabla').fadeIn(1000);
    $('#pusherBase').fadeIn(1000);
    $('#canvas').fadeIn(1000);
    $('#slider').css("width", "3%");

  }, 2000);

};


function movConexion(){

  //movimiento de la valvula para conectar

  var valvRef = $('#valvConexion');
  var mitadAlto = valvRef.height() / 2;
  var mitadAncho = valvRef.width() / 2;
  var valvX = valvRef.position().left;
  var valvY = valvRef.position().top;
  var fondo = $('#fondo');
  var altoFondo = fondo.height();
  var anchoFondo = fondo.width();
  var posXcentral = ((valvX + mitadAncho) / anchoFondo)*960;
  var posYcentral = ((valvY + mitadAlto) / altoFondo)*600;

  context.clearRect(0, 0, canvas.width, canvas.height); //
  context.beginPath();
  context.moveTo(175, 515);
  context.lineTo(posXcentral, posYcentral);
  context.lineWidth = 5;
  context.strokeStyle = 'grey';
  context.stroke();
  context.closePath();

  var altoSlider = $('#slider').height();
  var pusherPosX = pusher.position().top;
  var pusherPosXrel = (pusherPosX / altoSlider)*100;


  if( litros == 1 && paso == 0 && pusherPosXrel < 10)paso = 1;
  if( litros == 1 && paso == 1 && pusherPosXrel > 40)paso = 2;
  if( litros == 1 && paso == 2 && pusherPosXrel < 10)paso = 3;
  if( litros == 1 && paso == 3 && pusherPosXrel > 40){
                                                   paso = 4;
                                                   clearInterval(conexion);
                                                   apareceBalon(1);
                                                   pusherDestroy();
                                                 };
  if( litros == 2 && paso == 4 && pusherPosXrel < 10)paso = 5;
  if( litros == 2 && paso == 5 && pusherPosXrel > 40)paso = 6;
  if( litros == 2 && paso == 6 && pusherPosXrel < 10)paso = 7;
  if( litros == 2 && paso == 7 && pusherPosXrel > 40){
                                                   paso = 8;
                                                   clearInterval(conexion);
                                                   apareceBalon(2);
                                                   pusherDestroy();
                                                 };
  if( litros == 3 && paso == 8 && pusherPosXrel < 10)paso = 9;
  if( litros == 3 && paso == 9 && pusherPosXrel > 40)paso = 10;
  if( litros == 3 && paso == 10 && pusherPosXrel < 10)paso = 11;
  if( litros == 3 && paso == 11 && pusherPosXrel > 40){
                                                   paso = 12;
                                                   clearInterval(conexion);
                                                   apareceBalon(3);
                                                   pusherDestroy();
                                                 };
  if( litros == 4 && paso == 12 && pusherPosXrel < 10)paso = 13;
  if( litros == 4 && paso == 13 && pusherPosXrel > 40)paso = 14;
  if( litros == 4 && paso == 14 && pusherPosXrel < 10)paso = 15;
  if( litros == 4 && paso == 15 && pusherPosXrel > 40){
                                                   paso = 16;
                                                   clearInterval(conexion);
                                                   apareceBalon(4);
                                                   pusherDestroy();
                                                 };
  if( litros == 5 && paso == 16 && pusherPosXrel < 10)paso = 17;
  if( litros == 5 && paso == 17 && pusherPosXrel > 40)paso = 18;
  if( litros == 5 && paso == 18 && pusherPosXrel < 10)paso = 19;
  if( litros == 5 && paso == 19 && pusherPosXrel > 40){
                                                   paso = 20;
                                                   clearInterval(conexion);
                                                   apareceBalon(5);
                                                   pusherDestroy();
                                                 };


};

function hacerDraggeable(){

  $('#tapa2').fadeIn(0);

  $('#slider_boton').animate({ top: "0%"}, 800, function(){ $('#tapa2').fadeOut(0) });

  $('#slider_boton').css("cursor", "pointer");

  $('#slider_boton').draggable({
    
            axis: "y",
            containment: "parent",
            delay: 0,
            revert: false,
            revertDuration: 10,
            start: function( event, ui ){ 

              bombaAire.play();
              
            },
            stop: function( event, ui ) {                                                
                                                                                                                
            },
            drag: function( event, ui ) { 

              $('#basculaPantalla').html("")
         
            }                           
  });

};

function hacerValvDraggeable(){

  $('#tapa1').delay(2000).fadeOut(0);

  $('#valvConexion').css({ "background-position": "0% 0%",
                           cursor: 'pointer' });

  /*$('#valvConexion').animate({
                              top: "40%",
                              left: "30%"
  }, 1000);*/


  $('#valvConexion').draggable({
    
            //axis: "y",
            containment: "parent",
            delay: 0,
            revert: false,
            revertDuration: 500,
            start: function( event, ui ){ 

     
            },
            stop: function( event, ui ) {  
                                                                                                             
            },
            drag: function( event, ui ) { 

            }                           
  });

  $('#valvConexion').draggable("enable");

};


$('#pelota').droppable({               
          activate: function( event, ui ) {                                                                                                     
          },                              
          deactivate: function( event, ui ) {

          },
          over: function( event, ui ) {

          },
                    
          drop: function() { 

            $('#cartelIntro').fadeOut(0).html("");
            $('#cartelIntro').delay(500).fadeIn(200).html(textos.cartelIntro3);

            $('#slider_boton').delay(500).animate({ top: "30%"}, 600, function(){
                                                $('#tapa2').delay(1200).fadeOut(0);
                                            
                                                  bombaAire.play();
                                                }).animate({ top: "0%"}, 600);
     
            $('#valvConexion').css({
                                     top: "57.5%",
                                     left: "34%",
                                     "background-position": "100% 0%",
                                     cursor: "default"
            })

            $('#valvConexion').draggable("disable");

            hacerDraggeable();
            
      
            clap.play()

       
          },
          accept: '#valvConexion', 
          tolerance: 'touch'              
});

var apareceBalon = function(numBalon){


  balon_aire.play()

  $("#pelota"+numBalon+"").fadeIn(500);


  if(numBalon == 1){

        $('#cartelIntro').fadeOut(0).html("")
        $('#cartelIntro').delay(500).fadeIn(200).html(textos.cartelIntro4)
  }

};

function primerPusherDestroy(){

    pusher.css("cursor", "default");
    $('#valvConexion').css("cursor", "default");

    $('#botonComprobarPeso').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

};

function pusherDestroy(){

    pusher.draggable("destroy")
    pusher.css("cursor", "default");

    $('#botonComprobarPeso').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

};


$('#botonComprobarPeso').on('mousedown', function(){

  if( primerClick == 0 ){

    /*bien.volume = 0;
    pop.volume = 0;
    clip.volume = 0;
    clap.volume = 0;
    click.volume = 0;
    bombaAire.volume = 0;
    balon_aire.volume = 0;
    mal.volume = 0;
    aspirador.volume = 0;
    grito.volume = 0;

    bien.play()
    pop.play()
    clip.play()
    clap.play()
    click.play()
    bombaAire.play()
    balon_aire.play()
    mal.play()
    aspirador.play()
    grito.play()*/

  }

  primerClick++

  $(this).stop(true).fadeOut(0);
  comprobandoPeso(litros);

  click.volume = 1;
  click.play()

  setTimeout(function(){

    pop.volume = 1;
    pop.play()

  }, 500)

  setTimeout(function(){

    pop.play()

  }, 1000);

});

function comprobandoPeso(numLitros){

  $('#cartelIntro').fadeOut(0).html("")
    
  if(numLitros == 0){

    $('#basculaPantalla').html(textos.basculaPantalla0)

    setTimeout(function(){

      $('#tabla2').html(textos.tabla_2);

      $('#cartelIntro').delay(500).fadeIn(200).html(textos.cartelIntro2)

    }, 500);

    setTimeout(function(){

      $('#tabla8').html(textos.tabla_8);

      hacerValvDraggeable()

      $("#valvConexion").animate({ top: "58%" }, 500)
                        .animate({ top: "68%" }, 300)
      

    }, 1000);

    setTimeout(function(){

      conexion = setInterval(movConexion, 15);
      litros = 1;

    }, 2000);

  }

  if(numLitros == 1){

    $('#basculaPantalla').html(textos.basculaPantalla1)

    setTimeout(function(){

      $('#tabla3').html(textos.tabla_3);

      $('#cartelIntro').delay(500).fadeIn(200).html(textos.cartelIntro5)

    }, 500);

    setTimeout(function(){

      $('#tabla9').html(textos.tabla_9);

    }, 1000);

    setTimeout(function(){

      hacerDraggeable()
      conexion = setInterval(movConexion, 15);
      litros = 2;

    }, 2000);

  }

  if(numLitros == 2){

    $('#basculaPantalla').html(textos.basculaPantalla2)

    setTimeout(function(){

      $('#tabla4').html(textos.tabla_4);

    }, 500);

    setTimeout(function(){

      $('#tabla10').html(textos.tabla_10);

    }, 1000);

    setTimeout(function(){

      hacerDraggeable()
      conexion = setInterval(movConexion, 15);
      litros = 3;

    }, 2000);

  }

  if(numLitros == 3){

    $('#basculaPantalla').html(textos.basculaPantalla3)

    setTimeout(function(){

      $('#tabla5').html(textos.tabla_5);

    }, 500);

    setTimeout(function(){

      $('#tabla11').html(textos.tabla_11);

    }, 1000);

    setTimeout(function(){

      hacerDraggeable()
      conexion = setInterval(movConexion, 15);
      litros = 4;

    }, 2000);

  }

  if(numLitros == 4){

    $('#basculaPantalla').html(textos.basculaPantalla4)

    setTimeout(function(){

      $('#tabla6').html(textos.tabla_6);

    }, 500);

    setTimeout(function(){

      $('#tabla12').html(textos.tabla_12);

    }, 1000);

    setTimeout(function(){

      litros = false;

      fase2();

    }, 2000);

  }

};

function fase2(){

  $('.tapa').fadeOut()

  $('.pelota, #valvConexion, #bascula, #pusherBase, #canvas').fadeOut(0);
  $('#slider').css('width', '0%');

  $('.tabla').each(function(){

    $(this).animate({
                     top: '+=7%',
                     left: '-=7%'
    }, 1000);

  });

  $('.prueba').delay(1500).fadeIn(500);

  //paluego
  $('.over').on("mouseover touchstart", function(){

  var thisId = $(this).attr('id');

  if( thisId == "profOver"){

    $('#textoIndicaOver').html(textos.textoIndicaOver2)
    $('#textoIndicaPesoOver').html(textos.textoIndicaPesoOver2)
      puedeSalirCalculoProf = 1;
    }
  if( thisId == "mesasOver"){

    $('#textoIndicaOver').html(textos.textoIndicaOver3)
    $('#textoIndicaPesoOver').html(textos.textoIndicaPesoOver3)
      puedeSalirCalculoMesas = 1;
    }

  saleResp2(puedeSalirCalculoProf, puedeSalirCalculoMesas)

}); 

}


$('#resp1').on('mousedown', function(){

  $(this).css({'opacity': '0.5', 'background-color': '#ffb9b9', color: '#ffffff' })

  mal.play()

});

$('#resp2').on('mousedown', function(){

  $(this).css({'opacity': '0.5', 'background-color': '#ffb9b9', color: '#ffffff' })

  mal.play()

});

$('#resp3').on('mousedown', function(){

  $(this).css({ 'background-color': '#73de65', color: '#ffffff' });
  $('#botonContinuar').fadeIn(200);

  bien.play()

});

$('#botonContinuar').on('mousedown', function(){

  $('#botonContinuar, .tabla, .prueba').fadeOut(0);
  $('.aula, .over, .medidas').delay(800).fadeIn(500);
  click.play()

});

$('.over').on("mouseout", function(){
   
   $('#textoIndicaOver, #textoIndicaPesoOver').html("")

});  

function saleResp2(one, two){

   if( one == 1 && two == 1 ){

      $('.resp_2').fadeIn(500);
      $('#textoIndicaResp').fadeIn(500);
   }
} 

$('#resp1_2').on('mousedown', function(){

  $(this).css({'opacity': '0.5', 'background-color': '#ffb9b9', color: '#ffffff' })

  mal.play()

});

$('#resp2_2').on('mousedown', function(){

  $(this).css({ 'background-color': '#73de65', color: '#ffffff' });
  $('#botonCalculo').fadeIn(200);

  bien.play()

});

$('#resp3_2').on('mousedown', function(){

  $(this).css({'opacity': '0.5', 'background-color': '#ffb9b9', color: '#ffffff' })

  mal.play()

});

 
$('#botonCalculo').on("mousedown", function(){

   $(this).fadeOut(500);

   $('.resp_2, #textoIndicaResp').fadeOut(500);

   click.play()

   $('.over').each(function(){

      $(this).off("mouseover");
   
   })

   $('#textoIndicaOver, #textoIndicaPesoOver, #textoIndicaInfo').fadeOut(500);

   matematicas();

}); 

$('#textoIndicaInfo, #textoFase3').on("mousedown", function(){

  $(this).fadeOut(0);

});

function matematicas(){

  setTimeout(function(){

    $('#textoMatematicas').fadeIn(500);

    var arrayMates = textos.matematicas.split(" ");

    rellenarTextoMates(arrayMates, 0, "");

  }, 1000);
} 


function rellenarTextoMates(arrayMates, numRep, textoEscribir){

  var numAleatorio = Math.random();

  if( numRep == 13 )click.play()
  if( numRep == 19 )click.play()
  if( numRep == 30 )click.play()


  var numRep = numRep;
  var textoEscribir = textoEscribir;

  var textoAnadir = arrayMates[numRep].toString();

  textoEscribir += arrayMates[numRep] + " ";

  numRep++

  $('#textoMatematicas').html('<p>'+textoEscribir+'</p>')

  setTimeout(function(){

    if(numRep < arrayMates.length){ rellenarTextoMates(arrayMates, numRep, textoEscribir) }
    else{
         $('#textoFase3').delay(1000).fadeIn(200);
         $('#botonFase3').delay(1000).fadeIn(200);
         bien.play()
    };

  }, 200);

}

$('#botonFase3').on("mousedown", function(){

  $(this).fadeOut(300);

  click.play()


  $('#textoFase3').fadeOut(200);
  $('#textoMatematicas').delay(500).animate({ top: '15%' }, 600);

  setTimeout(function(){

    theEnd();

  }, 1000);

});

function theEnd(){

  //colocando bien los elementos de la tabla para el reinicio
    $('.tabla').each(function(){

      $(this).animate({
                       top: '-=7%',
                       left: '+=7%'
      }, 10)

      if( ! $(this).hasClass("colorTablaEncabezado") )$(this).html("");

    });
    //////////////////////////////////////////

  aspirador.play();

  $('#bomba').fadeIn(300);
  $('#aireAula').fadeOut(5000);

  $('#maleta0').fadeIn(300);
  $('#maleta1').delay(1000).fadeIn(300, function(){ $('#maleta0').fadeOut(0) });
  $('#maleta2').delay(2000).fadeIn(300, function(){ $('#maleta1').fadeOut(0) });
  $('#maleta3').delay(3000).fadeIn(300, function(){ $('#maleta2').fadeOut(0) });
  $('#maleta4').delay(4000).fadeIn(300, function(){ $('#maleta3').fadeOut(0) });

  $('#bomba').delay(5000).fadeOut(0);
  $('#pesoMaleta').delay(5000).fadeIn(500);

  $('#flechas').delay(300).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);

  setTimeout(function(){

    $('#profesor2').fadeIn(10);
    $('#profesor1').delay(1000).fadeIn(100);
    $('#profesor1').delay(1000).fadeOut(100);
    $('#profesor1').delay(1000).fadeIn(100);
    $('#profesor1').delay(1000).fadeOut(100, function(){
                                                       
                                                         grito.play();
                                           });


  }, 6000)

  setTimeout(function(){

    $('#bocadillo').fadeIn(100);

  }, 11000)

  setTimeout(function(){

    $('#botonReinicio').fadeIn(100);

  }, 12500);

  
}

$('.cartel').on("mousedown", function(){

  $(this).fadeOut(0).html("");
})

$('#botonReinicio').on("mousedown", function(){

  $(this).fadeOut(0);

  click.play();

  deNuevo();
})



 
}; //fin del onload
