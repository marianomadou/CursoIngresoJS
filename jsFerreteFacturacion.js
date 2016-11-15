/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

var PrecioUno;
var PrecioDos;
var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	
PrecioUno=parseInt(PrecioUno);
PrecioDos=parseInt(PrecioDos);
PrecioTres=parseInt(PrecioTres);

var suma=PrecioUno+PrecioDos+PrecioTres;

alert("el resultado es "+suma);

	
}
function Promedio () 
{

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	
PrecioUno=parseInt(PrecioUno);
PrecioDos=parseInt(PrecioDos);
PrecioTres=parseInt(PrecioTres);

var suma=PrecioUno+PrecioDos+PrecioTres;
var promedio=suma/3;

alert("el resultado es "+promedio);
	
}
function PrecioFinal () 
{
	
var PrecioUno;
var PrecioDos;
var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	
PrecioUno=parseInt(PrecioUno);
PrecioDos=parseInt(PrecioDos);
PrecioTres=parseInt(PrecioTres);

var suma=PrecioUno+PrecioDos+PrecioTres;
var totalmasiva= suma*1.21;

alert("el resultado es "+totalmasiva);

}