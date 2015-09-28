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
	$usuario   = "'".$_POST["usuario"]."'";
	$clave     = "'".md5($_POST["clave"])."'";
	$cn        = conexionBD();
	$qryvalida = sprintf("select * from usuarios where usuario=%s and clave=%s",$usuario,$clave);
	$res       = mysql_query($qryvalida);
	if($row = mysql_fetch_array($res))
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
 	
 	default:
 		# code...
 		break;
 } 
?>