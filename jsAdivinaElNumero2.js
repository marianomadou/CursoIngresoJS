/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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

document.getElementById('intentos').value=contadorIntentos; // devuelve datos del contador al html

	if (numeroLeido==numeroSecreto)
	{
			alert("ganaste");
		
				if(contadorIntentos==1)
				{
				(alert"usted es un Psíquico");
				}
				if(contadorIntentos==2)
				{
				(alert"excelente percepción");
				}
				if(contadorIntentos==3)
				{
				(alert"Esto es suerte");
				}
				if(contadorIntentos==4)
				{
				(alert"Excelente técnica");
				}
				if(contadorIntentos==5)
				{
				(alert"usted está en la media");
				}
				if(contadorIntentos>=6)
				{
				(alert"falta técnica");
				}
				if(contadorIntentos>=11)
				{
				(alert"afortunado en el amor!!");
				}


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