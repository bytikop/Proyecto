<?php
function conexionBD()
{
	$cn = mysql_connect("localhost","root","");
	mysql_select_db("curso");
	return $cn;
}
function validaentrada()
{
	$respuesta = false;
	$nombre    ="";
	$usuario   = "'".$_POST["usuario"]."'";
	$clave     = "'".md5($_POST["clave"])."'";
	$cn        = conexionBD();
	$qryvalida = sprintf("select * from usuarios where usuario=%s and clave=%s",$usuario,$clave);
	$res       = mysql_query($qryvalida);
	if($row = mysql_fetch_array($res))
	{
		$nombre    = $row["nombre"];
		$respuesta = true;
	}
	else
	{
		echo $qryvalida;
	}
	$arrayJSON = array('respuesta' => $respuesta,'nombre' => $nombre);
	print json_encode($arrayJSON);
}
function enviarAltaUsuario()
{
	$respuesta = false;
	$usuario   = $_POST["usuario"];
	$nombre    = $_POST["nombre"];
	$estatus   = $_POST["estatus"];
	$cn        = conexionBD();
	//echo "INSERT INTO usuarios(usuario,nombre,estatus) VALUES('".$usuario."','".$nombre."','".$estatus."')";
	$qryinsertausuario ="INSERT INTO usuarios(usuario,nombre,estatus) VALUES('".$usuario."','".$nombre."','".$estatus."')";
	$resinsertausuario =mysql_query($qryinsertausuario);
	if (mysql_affected_rows()>0) 
	{
		$respuesta = true;
	}
	$arrayJSON = array('respuesta' => $respuesta);
	print json_encode($arrayJSON);
}
//menu principal o controlador
$opc = $_POST["opc"];
switch ($opc) {
 	case 'validaentrada':
 		validaentrada();
 		break;
 	case 'enviarAltaUsuario':
 	enviarAltaUsuario();
 		break;
 	default:
 		# code...
 		break;
 } 
?>