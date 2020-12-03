function closeall(){
		document.getElementById('divinicio').style.display= 'none';
		document.getElementById('divrendas').style.display= 'none';
		document.getElementById('divgastos').style.display= 'none';
		document.getElementById('divrelatorio').style.display= 'none';
		document.getElementById('divaddrendas').style.display= 'none';
		document.getElementById('diveditrendas').style.display= 'none';
		document.getElementById('divdelrendas').style.display= 'none';
		document.getElementById('divaddgastos').style.display= 'none';
		document.getElementById('diveditgastos').style.display= 'none';
		document.getElementById('divdelgastos').style.display= 'none';
}
function divinicio(){
		closeall();
		document.getElementById('divinicio').style.display= 'block';	
}
function divrendas(){
		closeall();
		document.getElementById('divrendas').style.display= 'block';	
}
function divgastos(){
		closeall();
		document.getElementById('divgastos').style.display= 'block';	
}
function divrelatorio(){
		closeall();
		document.getElementById('divrelatorio').style.display= 'block';	
}
function divaddrendas(){
		closeall();
		document.getElementById('divaddrendas').style.display= 'block';	
}
function diveditrendas(){
		closeall();
		document.getElementById('diveditrendas').style.display= 'block';	
}
function divdelrendas(){
		closeall();
		document.getElementById('divdelrendas').style.display= 'block';	
}
function divaddgastos(){
		closeall();
		document.getElementById('divaddgastos').style.display= 'block';	
}
function diveditgastos(){
		closeall();
		document.getElementById('diveditgastos').style.display= 'block';	
}
function divdelgastos(){
		closeall();
		document.getElementById('divdelgastos').style.display= 'block';	
}
function cadRenda(descricao,valor,tipo){
	if (tipo=="fx") {
		var tb = document.getElementById("rendafx");
	}else{
		var tb = document.getElementById("rendavar"); 
	}
	var qtdLinhas = tb.rows.length;
	var linha = tb.insertRow(qtdLinhas);

	var cellID = linha.insertCell(0);
	var cellDesc = linha.insertCell(1);
	var cellValor = linha.insertCell(2);

	cellID.innerHTML = qtdLinhas;
	cellDesc.innerHTML = descricao;
	cellValor.innerHTML = valor;

	divrendas();

}
