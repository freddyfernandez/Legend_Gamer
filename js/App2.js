var baner=["../IMAGENES/PAGINA2.jpg","../IMAGENES/b001.jpg","../IMAGENES/b002.jpg","../IMAGENES/b003.jpg"];

var red=["https://twitter.com","http://www.facebook.com","http://www.instragram.com"];


var contenido=["../IMAGENES/fc1.jpg","../IMAGENES/fc2.jpg","../IMAGENES/fc3.jpg",
"../IMAGENES/fc4.jpg","../IMAGENES/fc5.png","../IMAGENES/fc6.jpg","../IMAGENES/fc7.jpg","../IMAGENES/fc8.jpg"
,"../IMAGENES/fc9.jpg","../IMAGENES/fc10.jpeg","../IMAGENES/fc11.jpg","../IMAGENES/fc12.jpg"];

var paginas=["../index.html","pagina1.html","pagina3.html"];

var contador=0;
function rotacion(){
    if(document.images){

       contador++;
       if(contador==baner.length){
           contador=0;
       }
       document.getElementById("baner").src=baner[contador];
    }
    setTimeout("rotacion()",2000);

}

function redsocial(x){
    window.open(red[x]);
}

function pagina(x){
    window.open(paginas[x]);
}



var cont=0;
function avanzar(){
    if(contador!=3){
        cont=contador+1;
        document.getElementById("baner").src=baner[cont];
        
    }
        
    else {
        contador=-1;
        document.getElementById("baner").src=baner[0];
        }  

}

function retroceder(){
    if(contador!=0){

        cont=contador;
        document.getElementById("baner").src=baner[contador-1];
        contador=cont;}
       
       else{
         document.getElementById("baner").src=baner[article.length-1];
         contador=0;}

}



var boton=document.getElementsByClassName("boton");


boton[0].addEventListener('mouseover', function(){
    boton[0].style.background = "rgb(8, 180, 202)";
    boton[0].style.color = "white";

});
boton[0].addEventListener('mouseout', function(){
    boton[0].style.background = "rgb(182, 181, 181)";
    boton[0].style.color = "black";
});

boton[1].addEventListener('mouseover', function(){
    boton[1].style.background = "rgb(219, 15, 15)";
    boton[1].style.color = "white";
});
boton[1].addEventListener('mouseout', function(){
    boton[1].style.background = "rgb(182, 181, 181)";
    boton[1].style.color = "black";
});

boton[2].addEventListener('mouseover', function(){
    boton[2].style.background = "rgb(8, 180, 202)";
    boton[2].style.color = "white";
});
boton[2].addEventListener('mouseout', function(){
    boton[2].style.background = "rgb(182, 181, 181)";
    boton[2].style.color = "black";
});

boton[3].addEventListener('mouseover', function(){
    boton[3].style.background = "rgb(219, 15, 15)";
    
   
    boton[3].style.color = "white";
});
boton[3].addEventListener('mouseout', function(){
    boton[3].style.background = "rgb(182, 181, 181)";
   
    boton[3].style.color = "black";
});


$(".imgsocial").mouseover(function(){
	$(this).css('opacity','0.5');
	$(this).css({"width":"50px"});
    $(this).css({"height":"55px"});
	
});

$(".imgsocial").mouseout(function(){
	$(this).css('opacity','1');
	$(this).css({"width":"45px"});
    $(this).css({"height":"50px"});
   
});


$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});



var img=document.getElementsByClassName("imgarticulo");
var h2=document.getElementsByClassName("h2");
var p=document.getElementsByClassName("p1");
function mostrar(x){
    document.getElementById("contenido").style.display ='block';
    document.getElementById("bienvenida").style.display ='none';
    document.getElementById("mainpanel").style.height ='640px';
    if(x==0){
        img[0].src=contenido[0];
        h2[0].innerHTML="DOTA 2";
        p[0].innerHTML="El original mod para Warcraft III, DOTA 2, se convierte en juego free to play de estrategia en tiempo real y fantasía en esta segunda entrega apadrinada por Valve para PC. Cuando se trata de variedad de héroes, habilidades y poderosos objetos, DOTA 2 no tiene fin. No hay dos partidas iguales.";
        
        img[1].src=contenido[1];
        h2[1].innerHTML="Dark Souls III";
        p[1].innerHTML="Dark Souls III es la tercera entrega de la saga de acción y rol Dark Souls a cargo de From Software y Namco Bandai Games para PC, PlayStation 4 y Xbox One. Presenta novedades en términos jugables con combates más ágiles y más posibilidades de exploración";
        img[2].src=contenido[2];
        h2[2].innerHTML="Call of Duty";
        p[2].innerHTML="Acción en primera persona ambientada en la Segunda Guerra Mundial por parte de algunos de los creadores de MoH: Allied Assault."
        img[3].src=contenido[3];
        h2[3].innerHTML="FIFA 17";
        p[3].innerHTML="es un videojuego de fútbol desarrollado por Electronic Arts y publicado por EA Sports. Es el 24.º de la serie y salió a la venta el 28 de septiembre del 2016 en Norteamérica y el 29 de septiembre para el resto del mundo.";

    }
    if(x==1){
        img[0].src=contenido[4];
        h2[0].innerHTML="Grand Theft Auto V";
        p[0].innerHTML="Grand Theft Auto V para PS4 es una versión mejorada y ampliada del GTA V original aparecido en PS3 en 2013. Contará con nuevos gráficos y nuevo contenido como armas, vehículos o misiones, además de una banda sonora ampliada y más jugadores en el modo online. Nos cuenta la épica historia de Michael, Franklin y Trevor en la ciudad de Los Santos y sus alrededores.";
        img[1].src=contenido[5];
        h2[1].innerHTML="God of War";

        p[1].innerHTML="La vuelta de Kratos a los videojuegos tras la trilogía original, con la ambientación nórdica, ofreciéndonos una perspectiva más realista de la mitología de dioses y monstruos milenarios. Kratos será un guerrero más curtido y pasivo, pues tendrá que desempeñar el rol de padre en un frío y hostil escenario.";
        img[2].src=contenido[6];
        h2[2].innerHTML="Dragon Ball Xenoverse";
        p[2].innerHTML="El universo Dragon Ball se expande con este videojuego que debuta en los sistemas de nueva generación para ofrecer a los jugadores combates frenéticos entre Goku y sus mayores enemigos tales como Vegeta, Freezer, Célula y muchos otros. Todo ello con un nuevo sistema de juego, un nuevo mapa del mundo y una ciudad misteriosa entre otras novedades.";
        img[3].src=contenido[7];
        h2[3].innerHTML="Red Dead Redemption 2";
        p[3].innerHTML="Es la secuela del videojuego de éxito de Rockstar Red Dead Redemption (2010). Se trata de la tercera entrega de la saga Red Dead, iniciada en 2004 con Red Dead Revolver y nos trasladará de nuevo al Salvaje Oeste y contarnos una historia sobre forajidos, venganza y atracos";

    }
    if(x==2){
        img[0].src=contenido[8];
        h2[0].innerHTML="En Minecraft - Season Two";
        p[0].innerHTML="Desarrollado por Telltale Games y editado por Mojang para PC, PlayStation 4, Xbox One y dispositivos iOS y Android, Jesse, junto a sus viejos amigos y nuevos compañeros,";

        img[1].src=contenido[9];
        h2[1].innerHTML="Arena of Valor";
        p[1].innerHTML="Arena of Valor es un nuevo y épico campo de batalla multijugador en línea 5v5 tipo MOBA diseñado por Tencent Games para dispositivos iOS y Android y Nintendo Switch. Domina únicos y poderosos héroes ";
        img[2].src=contenido[10];
        h2[2].innerHTML="Super Mario Run";
        p[2].innerHTML="Super Mario Run, desarrollado y distribuido por Nintendo para dispositivos iOS y Android, es un plataformas de corte speed-run en el que Mario debe correr a toda prisa por niveles frenéticos basados en el mundo de Super Mario Bros.";
        img[3].src=contenido[11];
        h2[3].innerHTML="Free Fire";
        p[3].innerHTML="Free Fire es el último juego de disparos de supervivencia disponible en el móvil. Cada juego de 10 minutos te ponga en una isla remota con otros 49 jugadores buscando supervivencia. Jugadores eligen con libertad su punto de partida con su paracaídas e intente mantenerse en la zona segura para mayor tiempo posible.";

    }
    if(x==3){
        document.getElementById("bienvenida").style.display ='block';
        document.getElementById("contenido").style.display ='none';
        document.getElementById("mainpanel").style.height ='320px';

    }

}    


$(".articulo").mouseover(function(){
    $(this).css({"background-color":"royalblue"});
    $(this).css({"color":"black"});
  
    	
});



$(".articulo").mouseout(function(){
    $(this).css({"background-color":"whitesmoke"});
    $(this).css({"color":"#024959"});
   
});


//borde de imagenes
$(".imgarticulo").mouseover(function(){
    
    $(this).css({"border":"rgb(202, 100, 16) 5px solid"}); 	
});
$(".imgarticulo").mouseout(function(){
    $(this).css({"border":"black 5px solid"});
    
});



//desplazamiento

$(".detalle").mouseover(function(){
    $(this).css({"background":"black"});
    $(this).css({"color":"goldenrod"});
    

   
});
$(".detalle").mouseout(function(){
    $(this).css({"background":"#d3d6d6"});
    $(this).css({"color":"black"});
   
});

var detalle=document.getElementsByClassName("detalle")
var subcontenido=document.getElementsByClassName("subcontenido");


detalle[0].addEventListener('click',function(){
    detalle[0].style.height ='0px';
    detalle[0].style.display ='none';
    img[0].style.height ='0px'; 


});

subcontenido[0].addEventListener('mouseout',function(){
    img[0].style.height ='240px';
    detalle[0].style.display ='block';
    detalle[0].style.height ='30px';


});
detalle[1].addEventListener('click',function(){
    detalle[1].style.height ='0px';
    detalle[1].style.display ='none';
    img[1].style.height ='0px'; 


});

subcontenido[1].addEventListener('mouseout',function(){
    img[1].style.height ='240px';
    detalle[1].style.display ='block';
    detalle[1].style.height ='30px';


});

detalle[2].addEventListener('click',function(){
    detalle[2].style.height ='0px';
    detalle[2].style.display ='none';
    img[2].style.height ='0px'; 


});

subcontenido[2].addEventListener('mouseout',function(){
    img[2].style.height ='240px';
    detalle[2].style.display ='block';
    detalle[2].style.height ='30px';


});
detalle[3].addEventListener('click',function(){
    detalle[3].style.height ='0px';
    detalle[3].style.display ='none';
    img[3].style.height ='0px'; 


});

subcontenido[3].addEventListener('mouseout',function(){
    img[3].style.height ='240px';
    detalle[3].style.display ='block';
    detalle[3].style.height ='30px';


});




$(".boton2").mouseover(function(){
	$(this).css('opacity','0.9');
	$(this).css({"width":"170px"});
    $(this).css({"height":"60px"});
	
});

$(".boton2").mouseout(function(){
	$(this).css('opacity','1');
	$(this).css({"width":"160px"});
    $(this).css({"height":"50px"});

   
});








