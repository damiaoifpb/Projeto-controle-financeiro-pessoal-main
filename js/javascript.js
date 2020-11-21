function mes(){
	var data = new Date();
	var mes = data.getMonth();          
	var meses = [
	  "Janeiro",
	  "Fevereiro",
	  "Março",
	  "Abril",
	  "Maio",
	  "Junho",
	  "Julho",
	  "Agosto",
	  "Setembro",
	  "Outubro",
	  "Novembro",
	  "Dezembro"
	];
	

	return meses[mes];
}

function mostra(div){
	if (div=='gasto') {
		document.getElementById(div).style.display='Block';
		document.getElementById('inicio').style.display='none';
		document.getElementById('renda').style.display='none';
		document.getElementById('relatorio').style.display='none';
		document.getElementById('addrenda').style.display='none';
		document.getElementById('editrenda').style.display='none';
		document.getElementById('delrenda').style.display='none';
	}
}