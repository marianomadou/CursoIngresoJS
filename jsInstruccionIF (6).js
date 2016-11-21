function Mostrar()
{
//tomo la edad  

var laEdad;
	laEdad=document.getElementById('edad').value;


	if (laEdad>17) 
	{
	alert("La persona es mayor de edad");	
	}//(laEdad>17) 

	else 
	{
		if (laEdad>13) {
		alert("La persona es adolecente");	
		}//(laEdad<13) 
		else
		{
			alert("La persona es un niño");	
		}//else
	}





}//FIN DE LA FUNCIÓN