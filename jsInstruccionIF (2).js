function Mostrar()
{
//tomo la edad  


	var laEdad;
	laEdad= document.getElementById('edad').value;
	
	//alert(laEdad);
	console.log("La persona tiene "+ laEdad + " años");

	if (laEdad >17) //tener en cuenta en usar los operadores logicos de manera discreta
	{
		alert("La persona es mayor de edad")
	}



}//FIN DE LA FUNCIÓN