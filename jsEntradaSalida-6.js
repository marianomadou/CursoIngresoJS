/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{


var numeroUno;
var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
//var suma;
//suma=parseInt (numeroUno) + parseInt(numeroDos);

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);

var suma=numeroUno+numeroDos;

alert("la suma es "+suma);

}

