	function desabilitando(){
		var perder=document.getElementsByTagName('button');
		for (var i=0;i<perder.length;i++){
			perder[i].disabled=true;
		}
	}


	var reinicar=document.getElementById('reiniciar');
	reinicar.addEventListener("click", inicio);

	var vacio = document.getElementsByClassName("vacio");
	for (var i=0;i< vacio.length;i ++){
		vacio[i].addEventListener("click",seguir);
	}
	var bomba = document.getElementsByClassName("bomba");
	for (var i=0;i< bomba.length;i ++){
		bomba[i].addEventListener("click",explotar);
	}


	var numero=document.getElementsByClassName('numero');
	for (var i=0;i< numero.length;i ++){
		numero[i].addEventListener("click",celdaVacia);
	}


	function explotar (){
	    alert("Esto ha explotado");
	    alert("Boooooom!!");
	    var imagen=document.createElement("img");
	    imagen.src="bomba.png";
	    imagen.style="width : 45px"
	    this.appendChild(imagen);
	    desabilitando();


	}

	function seguir (){

	    this.style.backgroundColor='#FF0000';
	}

	function celdaVacia (){

	    this.innerText= this.value;


	}

	function inicio(){
			location.reload();


	}
	function desabilitando(){
		var perder=document.getElementsByTagName('button');
		for (var i=0;i<perder.length;i++){
			perder[i].disabled=true;
		}
	}
