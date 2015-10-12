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
				dataType: "json",
				url: "php/utilerias.php",
				data: parametros,
				success: function(response){
					if(response.respuesta==true)
					{
						$("#principal_usuario").hide("slow");
						$("#menuprincipal").show("slow");
						$("#semestreactual").show("slow");
						$("#nombreusuario").html("Usuario: "+response.nombre);
					}
				},
				error: function(xhr,ajaxOptions,thrownError){

				}
			});
		}
		else
			alert("Nombre de usuario o contraseña incorrectos");
	}
	var usuario_tecla = function(tecla)
	{
		if (tecla.which==13)
		{
			$("#clave").focus();
		}	
	}
	var clave_tecla=function(tecla)
	{
		if (tecla.which==13) 
		{
			ValidarUsuario();
		};
	}
	var menuAltaUsuario=function()
	{
		$("#frmAltaUsuarios").show("slow");
	}
	var enviarAltaUsuario=function()
	{
		var usuario    = $("#frmnombreusuario").val();
		var nombre     = $("#frmnombrecompleto").val();
		var estatus    = $("#frmestatususuario").val();
		var parametros = "opc=enviarAltaUsuario"+"&usuario="+usuario+"&nombre="+nombre+"&estatus="+estatus+"&id="+Math.random();
		$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/utilerias.php",
				data: parametros,
				success: function(response){
					if(response.respuesta==true)
					{
						alert("Usuario resgistrado con éxito");
						$("#frmnombreusuario").val("");
						$("#frmnombrecompleto").val("");
						$("#frmestatususuario").val("");
						$("#frmnombreusuario").focus();
					}
					else
					{
						alert("No se a podido dar de alta al usuario");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					console.log("Ha ocurrido un error");
				}
			});
	}
	$("#btnEntrar").on("click",ValidarUsuario);
	$("#usuario").on("keypress",usuario_tecla);
	$("#clave").on("keypress",clave_tecla);
	$("#btnmenuAltaUsuario").on("click",menuAltaUsuario);
	$("#btnenviarAltaUsuario").on("click",enviarAltaUsuario);

}
// inicio de la pagina
$(document).on("ready",empiezaApp);