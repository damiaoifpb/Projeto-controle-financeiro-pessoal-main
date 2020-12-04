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


//codigo localStorege de renda
      if (localStorage.descrenda) {

	document.getElementById('descrenda').value = localStorage.descrenda;

}
      if (localStorage.valorrenda) {
	document.getElementById('valorrenda').value = localStorage.valorrenda;
}
      if (localStorage.checkrenda) {
	document.getElementById('checkrenda').value = localStorage.checkrenda;
}
      if (localStorage.checkrenda2) {
	document.getElementById('checkrenda2').value = localStorage.checkrenda2;
}


var adicionarRenda = function() {
	var descrenda = document.getElementById('descrenda').value;
	var valorrenda = document.getElementById('valorrenda').value;
	var checkrenda = document.getElementById('checkrenda').value;
	var checkrenda2 = document.getElementById('checkrenda2').value;
	localStorage.setItem('descrenda', descrenda);
	localStorage.setItem('valorrenda', valorrenda);
	localStorage.setItem('checkrenda', checkrenda);
	localStorage.setItem('checkrenda2', checkrenda2);
};

document.onchange = adicionarRenda ;

//codigo localStorege de gastos
      if (localStorage.descrenda) {

	document.getElementById('desgastos').value = localStorage.desgastos;

}
      if (localStorage.valorrenda) {
	document.getElementById('valor').value = localStorage.valorgasto;
}
      if (localStorage.checkrenda) {
	document.getElementById('c1').value = localStorage.c1;
}
   
      if (localStorage.checkrenda) {
	document.getElementById('c2').value = localStorage.c2;
}
   

      if (localStorage.checkrenda) {
	document.getElementById('c3').value = localStorage.c4;
}
   

      if (localStorage.checkrenda) {
	document.getElementById('c4').value = localStorage.c4;
}
   

var adicionarGasto = function() {
	var desgastos = document.getElementById('desgastos').value;
	var valorgasto = document.getElementById('valor').value;
	var checkgasto = document.getElementById('c1').value;
	var checkgasto2 = document.getElementById('c2').value;
	var checkgasto = document.getElementById('c3').value;
	var checkgasto2 = document.getElementById('c4').value;
	localStorage.setItem('desgastos', desgastos);
	localStorage.setItem('valor', valor);
	localStorage.setItem('c1', c1);
	localStorage.setItem('c2', c2);
	localStorage.setItem('c3', c3);
	localStorage.setItem('c4', c4);
	
};

document.onchange = adicionarGasto;

//adiciornaRendaTabela

function cadPessoa( descricao, valor) {
    pessoas = document.getElementById("rendafx");    
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var celldescricao = linha.insertCell(2);
    var cellvalor = linha.insertCell(3);
    

    cellCodigo.innerHTML = qtdlLinhas;
    cellDescricao.innerHTML = descricao;
    cellvalor.innerHTML = valor;
    
    preencheCamposForm();

}

//adiciornaGastosTabela

function cadPessoagastos( descricao, valor, parcelas) {
    pessoas = document.getElementById("gastovar");    
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var celldescricao = linha.insertCell(2);
    var cellvalor = linha.insertCell(3);
    

    cellCodigo.innerHTML = qtdlLinhas;
    cellDescricao.innerHTML = descricao;
    cellvalor.innerHTML = valor;
    
    preencheCamposForm();

}