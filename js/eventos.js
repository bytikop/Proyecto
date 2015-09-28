//la function principal de la pagina
var empiezaApp = function()
{
	var ValidarUsuario = function()
	{
		var usuario = $("#usuario").val();
		var clave   = $("#clave").val();
		if (usuario!="" && clave!="")
		{
			var parametros = "opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&id="+Math.random();
			$.ajax({
				cache:false,
				type: "POST",
				dateType: "json",
				url: "php/utilerias.php",
				data: parametros,
				success: function(response){
					console.log(response.respuesta);
					if (response.respuesta==true) 
					{
						alert("aqui");
					}
				}
			});
		}
		else
			alert("Nombre de usuario o contraseña incorrectos");
	}
	$("#btnEntrar").on("click",ValidarUsuario);
}
// inicio de la pagina
$(document).on("ready",empiezaApp);