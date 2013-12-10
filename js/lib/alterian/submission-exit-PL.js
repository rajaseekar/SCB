// JavaScript Document

var country = "SG"; /** Country **/
var formid = "ploans"; /** Form ID **/

// TQID (random)
var tqid =((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 10);

var fieldx = new Array();
function variables()
{
	// Fields to send
	// Possible fields: salutation, namefirst, namelast, namemiddle, mobile, email
	
	fieldx[0] = "salutation="+$('#form2_salutation').val();
	fieldx[1] = "namefirst="+$('#form2_first_name').val();
	fieldx[2] = "namelast="+$('#form2_name').val();
	fieldx[3] = "mobile="+jQuery('#form2_mobile').val(); // AREA CODE + MOBILE
	fieldx[4] = "email="+$('#form2_email_address').val();

	
	// Other variables
	//fieldx[4] = "namelast="+$('#XXXX').val();
	//fieldx[5] = "namemiddle="+$('#XXXX').val();
	
	return variablesToURL(fieldx);
}

window.onbeforeunload = confirmexit;

function confirmexit(){
	return "You will lose the current information on this page if you press OK";
}

var flag_sent = 0
var fieldsurl = "";
function sendLeads()
{
	if (flag_sent == 0)
	{	
		fieldsurl = variables();
		
		var url = 'https://www.scb-prospectdb.info/form/capture.php?form='+formid+'&tqid='+tqid+'&country='+country+fieldsurl;
		//console.log(url);
		$('#LeadsFrame').attr('src', url);

		flag_sent = 1;
	}
}

function onCompleted()
{
	fieldsurl = variables();
	
	var url = 'https://www.scb-prospectdb.info/form/success.php?form='+formid+'&tqid='+tqid+'&country='+country+fieldsurl;
	//console.log(url);
	$('#LeadsFrame').attr('src', url);
}

function variablesToURL(variables)
{
	var variableurl = "";
	//console.log("length:"+variables.length);
	for (i=0; i<variables.length; i++)
	{
	//	console.log(i+": "+variables[i]);
		variableurl = variableurl+"&"+variables[i];
	}
	return variableurl;
}