// JavaScript Document
function validar_asopano(){
	var count_usuario = document.frmInicio.txtUsu.value.split(" ").length-1;
	var count_passwd1 = document.frmInicio.txtCon.value.split(" ").length-1;
	var count_passwd2 = document.frmInicio.txtotro.value.split(" ").length-1;


	if (document.frmInicio.txtUsu.value.length==0){
	   alert("Digite el Usuario");
	   document.frmInicio.txtUsu.focus();
	   return 0;
	}
	if(count_usuario > 0 ){
		alert("Digitar sin espacios en  el Usuario");
		document.frmInicio.txtUsu.value="";
		document.frmInicio.txtUsu.focus();
		return 0;
	}


	if (document.frmInicio.txtCon.value.length==0){
	   alert("Digite la Contrase\u00F1a");
	   document.frmInicio.txtCon.focus();
	   return 0;
	}

	document.frmInicio.submit.disabled = true;

document.frmInicio.txtUsu.value="";
document.frmInicio.txtCon.value="";
document.frmInicio.txtotro.value="";


    //document.frmInicio.method='POST';
	//document.frmInicio.action='acceso.php';
	//document.frmInicio.submit();
	var usuario=document.frmInicio.usuario.value;
	var con=document.frmInicio.con.value;
	var otro=document.frmInicio.otro.value;
	var eltexto=document.frmInicio.eltexto.value;

	location.href='acceso.php?usuario='+usuario+'&con='+con+'&otro='+otro;

}


function completaru(){
	var cadena = new String(document.frmInicio.txtUsu.value);
	cadena = cadena.toLowerCase();

	pasus=hex_sha1(cadena);
	document.frmInicio.usuario.value=pasus;
}

function completarc(){//0xE1889B461021BCADD96271FCA0DA2609
	pasos=hex_sha1(document.frmInicio.txtCon.value);
	document.frmInicio.con.value=pasos;

}


function completaro(){
	pases=document.frmInicio.txtotro.value;
	document.frmInicio.otro.value=pases;
}


