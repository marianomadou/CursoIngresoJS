/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var marcaLampara;
 	var	cantidadLampara;
 	var	precioBruto;
 	var precioFinal;
 	

marcaLampara=document.getElementById('Marca').value;
cantidadLampara=document.getElementById('Cantidad').value;
precioBruto=cantidadLampara*35; //Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.


	if(cantidadLampara>5) //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
	{
		precioFinal=precioBruto*0.5;
	}

if(cantidadLampara==5) //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
	{	
		if(marcaLampara=="ArgentinaLuz")
		{
			precioFinal= precioBruto*0.6;
		}
		else
		{
			precioFinal= precioBruto*0.7;
		}
	}


if(cantidadLampara==4) //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
	{	
		if(marcaLampara=="ArgentinaLuz"||marcaLampara=="FelipeLamparas")
		{
			precioFinal= precioBruto*0.75;
		}
		else
		{
			precioFinal= precioBruto*0.8;
		}
	}


if(cantidadLampara==3) //D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	{	
		if(marcaLampara=="ArgentinaLuz")
		{
			precioFinal= precioBruto*0.85;
		}

			else
			{
				if(marcaLampara=="FelipeLamparas")
				{precioFinal= precioBruto*0.9;
				}

				else
				{
				precioFinal= precioBruto*0.95;
				}
			}
	}





document.getElementById("precioDescuento").value=precioFinal+" pesos.";

alert("Precio bruto: " + precioBruto);

//despues de todos los if 





if(precioFinal>120) //D. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
	
	{	
		var importeIIBB;
		importeIIBB = precioFinal*0.1;
		//precioFinal=precioFinal*1.10;
		alert("Usted pagó "+ importeIIBB+ " de IIBB");
	}	

}
