function Mostrar()
{
//tomo la edad  


var laEdad;
	laEdad= document.getElementById('edad').value;
	
	//alert(laEdad);
	console.log("La persona tiene "+ laEdad + " años");

	//la variable valorEdad compara el dato ingresado para determinar si el numero es mayor o menor a 17
	var valorEdad;

	valorEdad = laEdad >17;

	if (valorEdad) {

		alert("La persona es mayor de edad");
	}
	
	else
	{
		alert("La persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN