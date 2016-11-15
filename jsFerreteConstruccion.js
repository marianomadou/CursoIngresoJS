/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var Largo;
var Ancho;

	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	
	
Largo=parseInt(Largo);
Ancho=parseInt(Ancho);

var perimetro=(Largo+Ancho)*2;
var alambrado= perimetro*3;

alert("la cantidad de alambre es: "+alambrado);

}
function Circulo () 
{

	var Radio;
	
	Radio=document.getElementById('Radio').value;
	
	
	Radio=parseInt(Radio);

var circunferencia= Radio*3.14;
var alambradocircular= circunferencia*3;

alert("la cantidad de alambre es: "+alambradocircular);
	
}
function Materiales () 
{
	

var Largo;
var Ancho;

	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	
	
Largo=parseInt(Largo);
Ancho=parseInt(Ancho);

var superficie=Largo*Ancho;
var cal_bolsas= superficie*3;
var cemento_bolsas= superficie*2;

alert("se necesitan" + cemento_bolsas+ "bolsas de cemento y "+ cal_bolsas"bolsas de cal");





}