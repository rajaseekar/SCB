
function generateInCompleteXml() {
	var inCompleteXml = "";
	inCompleteXml += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
	inCompleteXml += "<eform FID=\""+$('#formId').val()+"\">";
	inCompleteXml += "<model>";
	inCompleteXml += "<instance id=\"incomplete\">";
	inCompleteXml += "<form2_salutation>"+$('#form2_salutation').val()+"</form2_salutation>";
	inCompleteXml += "<form2_name><![CDATA["+$('#form2_name').val()+"]]></form2_name>";
	inCompleteXml += "<form2_mobile><![CDATA["+$('#form2_mobile').val()+"]]></form2_mobile>";
	inCompleteXml += "<form2_residential><![CDATA["+$('#form2_residential').val()+"]]></form2_residential>";
	inCompleteXml += "<form2_office><![CDATA["+$('#form2_office').val()+"]]></form2_office>";
	inCompleteXml += "<form2_email_address><![CDATA["+$('#form2_email_address').val()+"]]></form2_email_address>";
	inCompleteXml += "</instance>";
	inCompleteXml += "</model>";
	inCompleteXml += "</eform>";
	return inCompleteXml;
}

function postInCompleteXml() {
	
	$.post("/nfs-ofp-foa/ofpservice.htm", { formIncXML :  generateInCompleteXml() }, function(responseText, statusText){
		if(statusText == "success") {
			
		} else {
			alert("System is busy, please try again later");
		}

	});
}


