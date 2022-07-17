

/*Script aplicado al botón enviar del formulario al final de la web*/

$(document).ready (function(){
    var botoncorreo = $("#enviar");
     botoncorreo.on("click", function(){
         alert("El mensaje fue enviado correctamente");
     });


     /*Script para cambiar el color de los títulos h2 de cada sección, quiénes somos, destacados, contacto*/


        $("#cambiodecolorquienessomos").on('dblclick', function() {
            $("#cambiodecolorquienessomos").css({'color':'#68CCC3'});
            });

            $("#cambiodecolordestacados").on('dblclick', function() {
                $("#cambiodecolordestacados").css({'color':'#68CCC3'});
                });

                $("#cambiodecolorcontacto").on('dblclick', function() {
                    $("#cambiodecolorcontacto").css({'color':'#68CCC3'});
                    });         
        
               /*Script para ocultar el texto de las tarjetas ubicadas en la sección destacados*/

                $(".card-title").on ("click", function(){
                    $(".card-text").toggle ("fast", function(){
                
                    });
                });
                
                  
 
    });


        /*Script para cambiar el movimiento smooths crool del menú*/

        $(document).ready(function() {

            $("a").click(function(){
                var gato = this.hash
                
                    $("html, body").animate(
                       {
                        scrollTop: $(gato).offset().top -70
                       },
                       1500

            )
                
    
            });
    
    
        });