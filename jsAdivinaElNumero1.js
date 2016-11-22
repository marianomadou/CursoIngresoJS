/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;


function comenzar()
{
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	//Genero el número RANDOM entre 1 y 100
	 


		//alert(numeroSecreto );
	contadorIntentos=0; //el contador arranca de cero en la funcion "comenzar"


}

function verificar()
{
	contadorIntentos++; //concepto de parcial

var numeroLeido;

numeroLeido=document.getElementById('numero').value;

document.getElementById('intentos').value=contadorIntentos;

	if (numeroLeido==numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos pudo encontrar el numero secreto");
	}
		else
		{
			if (numeroLeido>numeroSecreto)
			{
			alert("el numero secreto es menor al que usted eligió" );
			}	
			else
			{
			alert("el numero secreto es mayor al que usted eligió" );
			}
		}
	
		

}