// lImpiar
function limpiar(){
    document.getElementById('nombre').value = null;
    document.getElementById('apellido').value = null;
    document.getElementById('email').value = null;
    document.getElementById('celular').value = null;
    document.getElementById('dni').value = null;
    document.getElementById('direccion').value = null;
}
// Función para suscripción
function validarRegistro(nombre, apellido, email, celular, dni, direccion){
    
    expr1 = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    expr2 = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
    expr3 = /^[\d]{9}$/;
    expr4 = /^[\d]{8}$/;
    expr5 = /^[A-Za-z0-9\s]+$/;

    if (expr1.test(nombre) == false){
        alert("Ingreso nombres correcto");
    } 
    else 
        if (expr1.test(nombre) == true && 
            expr1.test(apellido) == false){
            alert("Ingreso apellidos correcto");
        }
        else
            if (expr1.test(nombre) == true && 
                expr1.test(apellido) == true && 
                expr2.test(email) == false){
                alert("Ingreso un email correcto");
            }
            else
                if (expr1.test(nombre) == true && 
                    expr1.test(apellido) == true && 
                    expr2.test(email) == true &&
                    expr3.test(celular) == false){
                    alert("Ingreso celular correcto");
                }
                else
                    if (expr1.test(nombre) == true && 
                        expr1.test(apellido) == true && 
                        expr2.test(email) == true &&
                        expr3.test(celular) == true &&
                        expr4.test(dni) == false){
                        alert("Ingreso su dni correcto");
                    }
                    else
                        if (expr1.test(nombre) == true && 
                            expr1.test(apellido) == true && 
                            expr2.test(email) == true &&
                            expr3.test(celular) == true &&
                            expr4.test(dni) == true && 
                            expr5.test(direccion) == false){
                            alert("Ingreso su direccion correcto");
                        }
                        else
                            if (expr1.test(nombre) == true && 
                                expr1.test(apellido) == true && 
                                expr2.test(email) == true &&
                                expr3.test(celular) == true &&
                                expr4.test(dni) == true && 
                                expr5.test(direccion) == true){
                                alert("Se registro correctamente");
                                limpiar();
                            }
}
    
// Botones
function btn1_1(){
    document.getElementById('btn_limpia').style.backgroundColor = "green";
}
function btn1_2(){
    document.getElementById('btn_limpia').style.backgroundColor = "red";
}
function btn2_1(){
    document.getElementById('btn_valida').style.backgroundColor = "green";
}
function btn2_2(){
    document.getElementById('btn_valida').style.backgroundColor = "red";
}


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