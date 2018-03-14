/*#####MY.JS#####*/
var onOff=0;//Variabile per controllo apertura e chisura Hamburger Menu
$(window).ready(function(){
	/*Hamburger menu per mobile*/
	$("#nav-toogle").click(function(){
		if (onOff==0){
			onOff=1;
			$("nav").addClass("navbar-click");//<--Scambio classe Navbar Aperta
			console.log("NAVBAR ATTIVA"+" "+onOff);
			//^--Controllo per dubug inerno
		}
		else{
			onOff=0;
			$("nav").removeClass("navbar-click").addClass("navbar");//<--Ricambio classe con Navbar chiusa
			console.log("NAVBAR CHIUSA"+" "+onOff);
		   	//^--Controllo per dubug inerno
		}
	});
});