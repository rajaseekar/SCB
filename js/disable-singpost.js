$(document).ready(function(){
	if ( jQuery.query.get("Cardtype") == 'SG_SPC' ) {
		window.onbeforeunload = null;
		document.location.replace('http://www.standardchartered.com.sg/personal-banking/cards/en/');
	}
});