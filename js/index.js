

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