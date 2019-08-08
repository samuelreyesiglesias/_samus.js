var aj=function(){
this.j=function(url,obj){
	metodo=obj.metodo;
	parametros=obj.parametros;
	f=obj.eureka;
	if(window.XMLHttpRequest){
		a=new window.XMLHttpRequest();
	}else{
		try{
			a=new ActiveXObject("microsoft.XMLHTTP");
		}catch(e){
			a=new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	if(metodo=="get" || metodo=="GET"){
		a.open(metodo,url+"?"+parametros,true);
		a.send(null);
	}else{
		a.open(metodo,url,true);
		a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		a.send(parametros);
	}
	a.onreadystatechange=function(){
		if(a.readyState==4){
			f(a.responseText||"");
		}
	}
}
}
function $(id){
 return document.getElementById(id);
}

evento=function(e,f){
	var codigo=e.keyCode || e.which;
	if(codigo==13){
		eval(f);
	}
}

function efect(){
	this.colores=["888888","999999","aaaaaa","bbbbbb","cccccc","dddddd","ffffff"];
	this.i=0;
	this.obj=null;
	this.intervalo=200;
	this.ejecutar=function(){
		this.obj.style.backgroundColor="#"+this.colores[this.i];
		this.i++;
		if(this.i<=this.colores.length-1){
			setInterval('obj_['+(obj_.length-1)+'].ejecutar()',this.intervalo);
		}
	}
}
obj_=new Array();
function fade(k){
	l=obj_.length;
	obj_[l]=new efect();
	obj_[l].obj=k;
	obj_[l].ejecutar();
}


function validar_correo(nodo){
	text=nodo.value;
	var exp=/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w]{2,}\.)[\w]{2,4}$/;
	if(!exp.test(text)){
		alert("Ingresa un correo valido.");
		nodo.select();
		return false;
	}
	return true;
}


function eliminarE(v,d,elm,e){
try{
		if(confirm("Seguro que deseas eliminar este elemento?")){
			ajax=new aj();
			ajax.j(d,{
				metodo:'post',parametros:v,eureka:
				function(trs){
					//alert(trs.responseText);
					if((trs)=="OK"){
							elemento=$(elm);
							elemento.parentNode.removeChild(elemento);
					}
				}
			});
		}
	var ev=e||window.event;
	ev.cancelBubble=true;
	ev.returnvalue=false;
	if(ev.stopPropagation){
		ev.stopPropagation();
		ev.preventDefault();
	}
}catch(e){
	alert(e);
}
}

comp=true;
jindex=0;
mover=function(){
	jindex+=1;
	x=$('contenedor_slider');
	posx=posx+2;
	coordenadas=posx+"px center";
	x.style.backgroundPosition=coordenadas;
	if(jindex<350){
		setTimeout("mover()","1");
	}
}