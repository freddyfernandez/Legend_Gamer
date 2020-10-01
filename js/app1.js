
var interaccion1=document.getElementById("imgrs1");
        interaccion1.addEventListener('mouseover',function(){
            interaccion1.style.width="150px";
            interaccion1.style.height="150px";
        })

         var interaccion1=document.getElementById("imgrs1");
        interaccion1.addEventListener('mouseout',function(){
            interaccion1.style.width="200px";
            interaccion1.style.height="200px";
        })

///////////////////////////////////

        var interaccion2=document.getElementById("imgrs2");
        interaccion2.addEventListener('mouseover',function(){
            interaccion2.style.transform=scale("2","2");
            interaccion2.style.scale="2.0";
            interaccion2.style.height="150px";
        })

        /* var interaccion2=document.getElementById("imgrs2");
        interaccion2.addEventListener('mouseout',function(){
            interaccion2.style.width="200px";
            interaccion2.style.height="200px";
        })*/

//////////////////////////////////

        var interaccion3=document.getElementById("imgrs3");
        interaccion3.addEventListener('mouseover',function(){
            interaccion3.style.width="150px";
            interaccion3.style.height="150px";
        })

         var interaccion3=document.getElementById("imgrs3");
        interaccion3.addEventListener('mouseout',function(){
            interaccion3.style.width="200px";
            interaccion3.style.height="200px";
        })


/////////////////////////////////

        var interaccion4=document.getElementById("imgrs4");
        interaccion4.addEventListener('mouseover',function(){
            interaccion4.style.width="150px";
            interaccion4.style.height="150px";
        })

         var interaccion4=document.getElementById("imgrs4");
        interaccion4.addEventListener('mouseout',function(){
            interaccion4.style.width="200px";
            interaccion4.style.height="200px";
        })

//interaccion Botones Redes Sociales
var red=["https://twitter.com","http://www.facebook.com","http://www.instragram.com"];
function redsocial(x){
    window.open(red[x]);
}

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