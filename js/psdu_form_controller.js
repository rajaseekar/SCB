$.fn.ajaxSubmit.debug = true;

$(document).ajaxError(function(ev,xhr,o,err) {
	$('#spinning-dialog, #login-dialog').dialog('close');												
	myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
});

var formidList = [  //PRD,    SIT
					"SGR49", "SGR201",  // CC
					"SGR122", "SGR201", // PL (CashOne & EzyCash)
					"SGR314", "SGR587",	// Bonus$aver
					"SGR289", "SGR291", // E$aver
					"SGR481", "SGR472", // CC AIP
					"SGR482", "SGR473"  // PL AIP PL (CashOne & EzyCash)
				];

//////////////////////////////////////////////////////////
//	corresponds to exact order of form ID in formidList //
//	4 characters = 4 document types                     // 
//  'ID'  'INCOME'  'SUPP'  'ADDR'                      //
//	'0' = document type not provided                    //
//	'1,2,3' = different variations                      //
//////////////////////////////////////////////////////////				
var formDocMap= [
					"1101", "1101", // CC
					"1101", "1101", // PL (CashOne & EzyCash)
					"2200",	"2200",	// Bonus$aver
					"3002", "3002", // E$aver
					"1101", "1101", // CC AIP
					"1101", "1101"  // PL AIP PL (CashOne & EzyCash)
				];

var formProductMap = [
					"Credit Card", "Credit Card/CashOne/EzyCash",  // CC
					"CashOne/EzyCash", "Credit Card/CashOne/EzyCash", // PL (CashOne & EzyCash)
					"Bonus$aver", "Bonus$aver",						// BonusSaver
					"E$aver", "E$aver",  // E$aver
					"Credit Card", "Credit Card", // CC AIP
					"CashOne/EzyCash", "CashOne/EzyCash"  // PL AIP PL (CashOne & EzyCash)
				];

var formFileNet =  [  
					"STP Credit Card Account Opening", "STP Credit Card Account Opening",  // CC
					"STP CashOne", "STP CashOne", // PL (CashOne & EzyCash) **DUPLICATED**
					"", "",	// Bonus$aver
					"", "",  // E$aver
					"STP Credit Card Account Opening", "STP Credit Card Account Opening", // CC AIP
					"STP CashOne", "STP CashOne"  // PL AIP PL (CashOne & EzyCash)
				];

var noteBoxMessage = [ 
					"1", "0", 	// CC
					"2", "0", 	// PL (CashOne & EzyCash)
					"2", "2",	// Bonus$aver
					"0", "0",  	// E$aver
					"1", "1", 	// CC AIP
					"2", "2"  	// PL AIP PL (CashOne & EzyCash)
				];				
				
var docRequirement = [ 
					"1", "1", 	// CC
					"1", "1", 	// PL (CashOne & EzyCash)
					"3", "3",	// Bonus$aver
					"2", "2",   // E$aver
					"1", "1", 	// CC AIP
					"1", "1"  	// PL AIP PL (CashOne & EzyCash)
				];								
				
var idleTime = 0;
var timeoutUrl = "http://www.standardchartered.com.sg/";
var MyuploadFilesCount = 0;
var MytotalUploadFileSize = 0;

function timerIncrement() {
    idleTime++;
    if (idleTime >= 900) { // 15 minutes
		window.location.replace(timeoutUrl);
    }
}

var FORM_NO = 0;
var MAX_DOC = 20;
var CUR_UPLOAD = 99999;
var FILENET = false;

// mouse over effect for upload file button
$(function() {
    $(".fileinputs_id")
        .mouseover(function(){
        	//$(this).css("text-decoration","underline");
		    $(".fileinputs_id .upload_file_over").show();
		    $(".fileinputs_id .upload_file").hide();
        })
        .mouseout(function(){
        	//$(this).css("text-decoration","none");
		    $(".fileinputs_id .upload_file_over").hide();
		    $(".fileinputs_id .upload_file").show();
        });
});

function validFormID( FormRefID ) {
	if( FormRefID.split("-").length != 2 && FormRefID.split("-").length != 3) {
		return false;
	}
	var pos = $.inArray( FormRefID.split("-")[0], formidList);
	if(  pos < 0 ) {
		return false;
	}	
	
	if( FormRefID.substring( FormRefID.length-1) == ("-") ) {
		return false;
	}	
	
	if( FormRefID.split("-").length == 2 && /^[0-9]+$/.test( FormRefID.split("-")[1] ) != true ) {
		return false;
	}

/*	
	if( FormRefID.split("-").length == 3 && (/^[0-9]+$/.test( FormRefID.split("-")[1] ) != true || /^[0-9]+$/.test( FormRefID.split("-")[2] ) != true) ) {
		return false;
	}			
*/	
	$("#formId").val(FormRefID.split("-")[0]);
	FORM_NO = pos;
	return true;
}	

function setupForForm(pos) {	
	populateDocType(pos);
	$("#form2_product").val( formProductMap[pos] );
	FILENET = formFileNet[pos];	
	
	switch(noteBoxMessage[pos]) {
		case "1" :
			$("#note-box-message1").show();	
			break;
		case "2" :
			$("#note-box-message2").show();		
			break;
		default:
			$(".note-box").hide();		
			break;
	}

	switch(docRequirement[pos]) {
		case "1" :
			$(".document_list2").remove();	
			$(".document_list3").remove();				
			break;
		case "2" :
			$(".document_list1").remove();	
			$(".document_list3").remove();				
			break;
		case "3" :
			$(".document_list1").remove();	
			$(".document_list2").remove();				
			break;			
		default:
			$(".document_list2").remove();	
			$(".document_list3").remove();						
			break;	
	}

}

function inlineError( element, message ) {
	if(message.length > 0) {
		$(element + " > div.error_message").html(message);
		$(element).show();
	} else {
		$(element + " > div.error_message").html("");
		$(element).hide();	
	}
}

function validateFields() {
	var allValid=true;
	var allInput1=false;
	var allInput2=false;	
	if( $("#form2_id_type").val() == "" ) {
		inlineError("#lbl_id_type","Residency status is mandatory. Please enter and try again.");
		allValid=false;
	} else {
		inlineError("#lbl_id_type","");		
	}

	if( $("#form2_id_type").val() != "FOREIGNER" ) {
		if( $("#form2_nric_number").val() == "" ) {
			inlineError("#lbl_nric_number","NRIC is mandatory. Please enter and try again.");
			allValid=false;
		} else {
			allInput1=true;
			inlineError("#lbl_nric_number","");	
			if( !isAlphanumericWithSpec($("#form2_nric_number").val()) ) {
				//inlineError("#lbl_nric_number","Invalid NRIC. Please enter and try again.");
				allValid=false;
			} else {
				if(!ValidateNRIC($("#form2_nric_number").val())) {
					//inlineError("#lbl_nric_number","Invalid NRIC. Please enter and try again.");
					allValid=false;				
				} else {
					inlineError("#lbl_nric_number","");	
				}	
			}
		}		
	} else {
		if( $("#form2_passport_number").val() == "" ) {
			inlineError("#lbl_passport_number","Passport No. is mandatory. Please enter and try again.");
			allValid=false;
		} else {
			allInput1=true;		
			inlineError("#lbl_passport_number","");
			if( !isAlphanumericWithSpec($("#form2_passport_number").val()) ) {
				//inlineError("#lbl_passport_number","Invalid characters in Passport No.  Please enter and try again.");
				allValid=false;
			} else {
				inlineError("#lbl_passport_number","");	
			}	
		}
	}		
	
	if( $("#form2_reference_number").val() == "" ) {
		inlineError("#lbl_reference_number","Reference No. is mandatory. Please enter and try again.");
		allValid=false;
	} else {
		allInput2=true;
		inlineError("#lbl_reference_number","");	
		if( !isAlphanumericWithSpec($("#form2_reference_number").val()) ) {
			//inlineError("#lbl_reference_number","Invalid Reference No. Please enter and try again.");
			allValid=false;
		} else {
			if (!validFormID($("#form2_reference_number").val() ) ) {
				//inlineError("#lbl_reference_number","Invalid Reference No. Please enter and try again.");
				allValid=false;			
			} else {
				inlineError("#lbl_reference_number","");	
			}
		}	
	}
	if(!allValid && allInput1 && allInput2) {
		myAlert("We are not able to locate any records with the given information. Please check that you have entered the correct Identification details and / or application Reference No. and try again.", "Application not found");	
	}
	return allValid;
}

function validateFileSelected() {
	return true;
}	

function checkDocType( docRefId ) {
	if( docRefId ) {
		var docTypeId = docRefId.split('-')[2];
		if( docTypeId == "NRIC" || docTypeId == "PPort" || docTypeId == "EPass") {
			return "ID Document";
		} else if ( docTypeId == "CPFHS" || docTypeId == "PSlip" || docTypeId == "ITNA" ||
					docTypeId == "CPFSingpass" || docTypeId == "UtilityBill" || 
					docTypeId == "TelcoBill" || docTypeId == "BankStatement" ) {
			return "Income Document";
		} else if ( docTypeId == "FOR01_LUB" || docTypeId == "FOR01_LBS" || docTypeId == "FOR01_RA" || 
					docTypeId == "FOR01_LMPS" || docTypeId == "FOR01_LESA" || docTypeId == "FOR01_GDSA" ) {
			return "Address Document";					
		}					
	} else {
		return "";
	}
}

function isAlphanumericWithSpec(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)	{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32) || (hh>32 && hh<38) || (hh>38 && hh<48) || (hh>57 && hh<60) || (hh>62 && hh<65) || (hh>90 && hh<97) || (hh>122 && hh<127) ) {
		  }
		  else	{
			 return false;
		  }
		}
	return true;
}

function ValidateNRIC(strNRIC)
{
	var arrNumbers = new Array(2, 7, 6, 5, 4, 3, 2);
	var arrUIN = new Array('J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A');
	var arrFIN = new Array('X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K');
	var strPrefix = "", strDigit = "";
	var blnValidNRIC = true;
	var intTotal = 0, intMod = 0;
	var intDigit = 0;
	strNRIC = strNRIC.toUpperCase();
	// Validate NRIC based on length
	if (strNRIC.length != 9) {
		blnValidNRIC = false;
	} else {
		// Validate NRIC based on algorithm
		strPrefix = strNRIC.charAt(0);
		if (strPrefix == 'S' || strPrefix == 'F') {
			intTotal = 0; // total starts with 0 for prefixes S or F
			for (var i = 0; i<7; i++){
				strDigit = strNRIC.charAt(i + 1);
				if (isNaN(intDigit)){
					blnValidNRIC = false;
					break;
				} else {
					intTotal += (Number(strDigit) * arrNumbers[i]);
				}
			}
			if (blnValidNRIC) {
				intMod = intTotal % 11;				
				if (arrUIN[intMod] == strNRIC.charAt(8))
					blnValidNRIC = true;
				else
					blnValidNRIC = false;
			}
		} else if (strPrefix == 'T' || strPrefix == 'G') {
			intTotal = 4; // total starts with 4 for prefixes T or G
			for (var i = 0; i < 7; i++)	{
				strDigit = strNRIC.charAt(i + 1);
				if (isNaN(intDigit)) {
					blnValidNRIC = false;
					break;
				} else {
					intTotal += (Number(strDigit) * arrNumbers[i]);
				}
			}			
			if (blnValidNRIC){
				intMod = intTotal % 11;
				if (arrUIN[intMod] == strNRIC.charAt(8)){
					blnValidNRIC = true;
				} else {
					blnValidNRIC = false;
				}
			}
		}
		else  {
			// invalid prefix
			blnValidNRIC = false;
		}
	}
	return blnValidNRIC;
}


function generateLoginXml() {
	var startXML=commonXML=endXML=finalXML='';

	startXML=startXML+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	startXML=startXML+"<eform FID=\""+$('#formId').val()+"\">\n";	
	startXML=startXML+"\t<model>\n";
	startXML=startXML+"\t\t<instance id=\"psdu\">\n";	
	commonXML=commonXML+"\t\t\t<form2_refid>"+$("#form2_refid").val()+"</form2_refid>\n";	
	commonXML=commonXML+"\t\t\t<form2_nric_passport>"+$("#form2_nric_passport").val()+"</form2_nric_passport>\n";			
	commonXML=commonXML+"\t\t\t<form2_product><![CDATA["+$("#form2_product").val()+"]]></form2_product>\n";		
	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";

	finalXML=startXML+commonXML+endXML;	
	
	return finalXML;
}

function generateXml() {
	var startXML=commonXML=endXML=hiddenXML=addXML=finalXML='';

	startXML=startXML+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	startXML=startXML+"<eform FID=\""+$('#formId').val()+"\" REFID=\""+$('#form2_fullrefid').val()+"\">\n";	
	startXML=startXML+"\t<model>\n";
	startXML=startXML+"\t\t<instance id=\"psdusubmission\">\n";	
	commonXML=commonXML+"\t\t\t<form2_refid><![CDATA["+$("#form2_refid").val()+"]]></form2_refid>\n";	
	commonXML=commonXML+"\t\t\t<form2_nric_passport>"+$("#form2_nric_passport").val()+"</form2_nric_passport>\n";			
	commonXML=commonXML+"\t\t\t<form2_product><![CDATA["+$("#form2_product").val()+"]]></form2_product>\n";		
	
	// upload docs
	hiddenXML=hiddenXML+"\t\t\t<attchments>\n";
	for( var i=0; i < MAX_DOC; i ++) {
		var uploadfilerefid = $("#uploadfile"+i+"refid").val() ;
		if( uploadfilerefid != "") {
			uploadfilerefid = uploadfilerefid.replace(/\s+/g,'');
			hiddenXML=hiddenXML+"\t\t\t<attachment type=\""+checkDocType( uploadfilerefid )+"\">"+uploadfilerefid+"</attachment>\n";		
		}
	}
	
	hiddenXML=hiddenXML+"\t\t\t</attchments>\n";
	
	if(FILENET!="") {
		// Filenet implementation
		addXML=addXML+"\t\t\t<filenetProduct>Credit Card</filenetProduct>\n";
		addXML=addXML+"\t\t\t<filenetSubProduct><![CDATA["+FILENET+"]]></filenetSubProduct>\n";		
		addXML=addXML+"\t\t\t<filenetCity>SG</filenetCity>\n";
		addXML=addXML+"\t\t\t<filenetCountry>SG</filenetCountry>\n";
		addXML=addXML+"\t\t\t<form2_name><![CDATA["+$("#form2_nric_passport").val()+"]]></form2_name>\n";
		addXML=addXML+"\t\t\t<filenetIdNumber><![CDATA["+$("#form2_nric_passport").val()+"]]></filenetIdNumber>\n";
	} else {
		addXML=addXML+"\t\t\t<filenetProduct></filenetProduct>\n";
		addXML=addXML+"\t\t\t<filenetSubProduct></filenetSubProduct>\n";		
		addXML=addXML+"\t\t\t<filenetCity></filenetCity>\n";
		addXML=addXML+"\t\t\t<filenetCountry></filenetCountry>\n";
		addXML=addXML+"\t\t\t<form2_name></form2_name>\n";
		addXML=addXML+"\t\t\t<filenetIdNumber></filenetIdNumber>\n";
	}	
	
	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";

	finalXML=startXML+commonXML+hiddenXML+addXML+endXML;	
	
	return finalXML;
}

function populateDocType(pos) {
	var docMap = formDocMap[pos];
	$("#form2_doc_type option").remove();
	var html = '<option class="select" selected="selected" value="">Please select doc type</option>';
	
	switch( docMap.substr(0,1) ) {
		case "1"  :
			html = html + '<option value="ID_PROOF1">Identification proof</option>';
			break;
		case "2"  :  // BonusSaver
			if( $("#form2_id_type").val() != "FOREIGNER") {				
				html = html + '<option value="ID_PROOF2">Identification proof</option>';
			}
			break;
		case "3"  :  // eSaver
			if( $("#form2_id_type").val() != "FOREIGNER") {		
				html = html + '<option value="ID_PROOF3">Identification proof</option>'; 
			}
			break;
		default:
			break;		
	}
	
	switch( docMap.substr(1,1) ) {
		case "1"  :
			html = html + '<option value="INCOME_PROOF1">Proof of income</option>';
			break;
		case "2"  :  // BonusSaver
			if( $("#form2_id_type").val() != "FOREIGNER") {
				html = html + '<option value="INCOME_PROOF2">Additional document</option>';
			}
			break;
		default:
			break;		
	}

	switch( docMap.substr(2,1) ) {
		case "1"  :
			html = html + '<option value="SUPP_PROOF">ID proof of supplementary card</option>';
			break;
		default:
			break;		
	}
alert
	switch( docMap.substr(3,1) ) {
		case "1"  :
			if( $("#form2_id_type").val() == "FOREIGNER") {		
				html = html + '<option value="ADDR_PROOF1">Proof of residential address</option>';
			}
			break;
		case "2"  :  // eSaver
			if( $("#form2_id_type").val() != "FOREIGNER") {		
				html = html + '<option value="ADDR_PROOF2">Proof of residency</option>';
			}	
			break;			
		default:
			break;		
	}
	$("#form2_doc_type").html(html);										
}

function showDocOptions( option ) {
	$("#form2_doc_subtype option").remove();
	switch( $("#form2_doc_type").val() ) {
		case "ID_PROOF1"  :
			if( $("#form2_id_type").val() != "FOREIGNER") {		
				var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
							'<option class="id_proof1" value="NRIC">NRIC (front and back)</option>'+
							'<option class="id_proof1" value="PPort">Passport</option>';
			} else {
				var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
							'<option class="id_proof1" value="PPort">Passport</option>'+
							'<option class="id_proof1" value="EPass">Employment Pass</option>';	
			}
			$("#form2_doc_subtype").html(html);		
			break;						

		case "ID_PROOF2"  : // BonusSaver
			if( $("#form2_id_type").val() == "SINGAPOREAN") {				
				var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
							'<option class="id_proof2" value="NRIC">NRIC (front and back)</option>';
			} else {
				var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
							'<option class="id_proof2" value="NRIC">NRIC (front and back)</option>' +
							'<option class="id_proof2" value="PPort">Passport</option>';
			}
			$("#form2_doc_subtype").html(html);		
			break;

		case "ID_PROOF3"  : // eSaver
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="id_proof3" value="NRIC">NRIC (front and back)</option>';
			$("#form2_doc_subtype").html(html);		
			break;
						
		case "INCOME_PROOF1"  :
			var html =	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="income_proof1" value="PSlip">Computerised pay slip</option>'+
						'<option class="income_proof1" value="CPFHS">CPF Contribution History Statement</option>'+
						'<option class="income_proof1" value="ITNA">Income Tax Notice of Assessment</option>';					
			$("#form2_doc_subtype").html(html);		
			break;
							
		case "INCOME_PROOF2"  : // BonusSaver
			var html =	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="income_proof2" value="PSlip">Computerised pay slip</option>';
			$("#form2_doc_subtype").html(html);		
			break;
							
		case "SUPP_PROOF"  :
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="supp_proof" value="NRICSup">NRIC</option>'+
						'<option class="supp_proof" value="PPortSup">Passport</option>';
			$("#form2_doc_subtype").html(html);		
			break;
		
		case "ADDR_PROOF1"  :
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="addr_proof" value="FOR01_LUB">Latest Utility bills (electricity, water, refuse collection), rates or tax bills</option>'+
						'<option class="addr_proof" value="FOR01_LBS">Latest Bank or Credit Card statements (including e-statement)</option>'+
						'<option class="addr_proof" value="FOR01_RA">Copy of Rental agreements showing your address</option>'+
						'<option class="addr_proof" value="FOR01_LMPS">Latest Mobile phone statements / pay TV statement</option>'+
						'<option class="addr_proof" value="FOR01_LESA">Letter from Employer stating current address</option>'+
						'<option class="addr_proof" value="FOR01_GDSA">Government issued documents stating address (e.g. IRAS, CPF, ICA)</option>';
			$("#form2_doc_subtype").html(html);		
			break;		

		case "ADDR_PROOF2"  :
			var html =	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="income_proof3" value="UtilityBill">Utility Bill</option>'+
						'<option class="income_proof3" value="TelcoBill">Telco Bill</option>'+
						'<option class="income_proof3" value="BankStatement">Bank Statement</option>';
			$("#form2_doc_subtype").html(html);		
			break;
			
		default:
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>';
			$("#form2_doc_subtype").html(html);				
			break;				
	}
}

/************************** onload functions ***************************/
$(document).ready(function(){
	
    // AVT 15 mins timeout
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).mousedown(function (e) {
        idleTime = 0;
    });	
	setInterval("timerIncrement()", 1000); // 1 second

	$("#login_page input").blur( function() {
		this.value = this.value.toUpperCase();
	});

	$('#short_document-listing-link_left').click(function() {
		$(this).hide();
		$('#short_notes_document_lists_left').hide();
		$('#notes_document_lists_left').show();
		$('#notes_documents').css('height','600px');
		$('#notes_document_table_row').css('height','482px');
		$('#document-listing-link_left').show();
		$('#document-listing_vbar_short').hide();
		$('#document-listing_vbar_long').show();
		$('#documents-reference').show();

	});
	$('#short_document-listing-link_right').click(function() {
		$(this).hide();
		$('#short_notes_document_lists_right').hide();
		$('#notes_document_lists_right').show();
		$('#notes_documents').css('height','600px');
		$('#notes_document_table_row').css('height','482px');
		$('#document-listing-link_right').show();
		$('#document-listing_vbar_short').hide();
		$('#document-listing_vbar_long').show();
		$('#documents-reference').show();
		
	});
	$('#document-listing-link_left').click(function() {
		$(this).hide();
		$('#notes_document_lists_left').hide();
		$('#short_notes_document_lists_left').show();
		if( !$('#notes_document_lists_left').is(':visible') && !$('#notes_document_lists_right').is(':visible') ) {
			$('#document-listing_vbar_long').hide();
			$('#notes_documents').css('height','222px');
			$('#notes_document_table_row').css('height','140px');
			$('#document-listing_vbar_short').show();
			$('#documents-reference').hide();
		} 
		$('#short_document-listing-link_left').show();
		
	});
	$('#document-listing-link_right').click(function() {
		$(this).hide();
		$('#notes_document_lists_right').hide();
		$('#short_notes_document_lists_right').show();
		if( !$('#notes_document_lists_left').is(':visible') && !$('#notes_document_lists_right').is(':visible') ) {
			$('#document-listing_vbar_long').hide();
			$('#notes_documents').css('height','222px');
			$('#notes_document_table_row').css('height','140px');
			$('#document-listing_vbar_short').show();
			$('#documents-reference').hide();
		} 
		$('#short_document-listing-link_right').show();
		
	});
	
	$("#form2_id_type").change( function() {
		if( $("#form2_id_type").val() == "SINGAPOREAN" || $("#form2_id_type").val() == "SINGAPORE-PR") {
			$(".tr_passport").hide();
			$(".tr_passport input").val("");			
			$(".tr_nric").show();			
		} else if ( $("#form2_id_type").val() == "FOREIGNER" ) {
			$(".tr_passport").show();
			$(".tr_nric").hide();			
			$(".tr_nric input").val("");						
		} else {
			$(".tr_passport").hide();
			$(".tr_nric").hide();			
			$(".tr_passport input").val("");						
			$(".tr_nric input").val("");							
		}
		inlineError("#lbl_nric_number","");
		inlineError("#lbl_passport_number","");
		inlineError("#lbl_id_type","");
	});

	showDocOptions();
	
	$("#form2_doc_type").change( function() {
		showDocOptions();
		offAlert();
		$("#form2_doc_subtype").val("");	
		hideCurrentRoom();
	});
	
	$("#form2_doc_subtype").change( function() {
		hideCurrentRoom();	
		if( MyuploadFilesCount < MAX_DOC) {
			if( $("#form2_doc_subtype").val().length > 0) {
				showNextRoom();			
			}
		}		
	});

	$("#check_new_credit_card_1").click(
		function() {
			if ( validateFields() ) {
				setupForForm(FORM_NO);
				if ( $("#form2_id_type").val() != "FOREIGNER" ) {
					$('#form2_nric_passport').val( $('#form2_nric_number').val() );
				} else {
					$('#form2_nric_passport').val( $('#form2_passport_number').val() );			
				}
				$("#form2_refid").val( $("#form2_reference_number").val()  );
				
				$('#login-dialog').dialog('open');
				resetUiStyle();	
				window.onbeforeunload = null;
				var formxml = generateLoginXml();
				formxml = formxml.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n", "");
				formxmlArr = formxml.split("<eform FID=\""+$('#formId').val()+"\">");
				formxmlArr.splice(0,1);

				$.each(formxmlArr, function(index, value) {
					var resultXML="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
					resultXML=resultXML+"<eform FID=\""+$('#formId').val()+"\">";  
					resultXML=resultXML+ value;
					if ((index != formxmlArr.length-1) && formxmlArr.length > 1) {
						resultXML = resultXML.substring(0, resultXML.length-39);
					}
					$.ajaxSetup({
						async: 'true'
					});
		
					setTimeout( function() {	
						var postURL="/nfs-ofp/ofpservice.htm";					
						if(window.location.hostname.toLowerCase().indexOf("localhost") > -1 || window.location.hostname.indexOf("192.168.86") > -1)			
							postURL = "/outputdoc.php";

						$.post(postURL, { formXML :  resultXML }, function(responseText, statusText){	
							if(statusText == "success") {
								var returnCode = "";
								var returnID = "";

								var regRefID = new RegExp("</FULLREFID>");
								returnID = $.trim(responseText.substring(17, responseText.search(regRefID)));
								
								var regStatus1 = new RegExp("<STATUS>"); 
								var regStatus2 = new RegExp("</STATUS>");
								returnCode = responseText.substring(responseText.search(regStatus1)+8, responseText.search(regStatus2));
				
								$('#login-dialog').dialog('close');
								if(returnCode != null && returnCode != "" && returnID != null && returnID != "" ) {

									$("#form2_fullrefid").val(returnID);																	

									switch ( returnCode ) {
										case 'SUCCESS' :
											$("#login_page").hide();			
											$("#main_content").show();										
											break;
										case 'FAILURE' :
											myAlert("We are not able to locate any records with the given information. Please check that you have entered the correct Identification details and / or application Reference No. and try again.", "Application not found");
											break;
										case 'EXPIRED' :
											myAlert("We noticed your application was submitted more than two months ago. Please submit another application online along with your supporting documents or approach any of our branches for assistance.", "Your application has expired."  );
											break;
										default:
											myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
											break;
									}
									return false;
								} else {
									$('#login-dialog').dialog('close');								
									myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
									return false;
								}
								
							} else {
								$('#login-dialog').dialog('close');							
								myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
								return false;				
							}
						});		
					}, 1000);
				});
				return false;
			}
			return false;
		}
	);	
	
	$("#check_new_credit_card_4").click(function() {
			userCancelled=false;
			if( MytotalUploadFileSize > totalUploadFileMaxSize ) {		
				onAlert("Your documents exceed the allowed file size. Please check.");				
				return false;
			}				
		
			if ( !validateFileSelected() ) {
				onAlert("Please upload all the required documents.");
			} else {
				if( MyuploadFilesCount != 0) {			
					// before proceed to file upload logic, first clear all the previous records
					$('.uploadfileredidgroup').val('');
					$('.formidfield').val( $('#formId').val() );				
            		$('#spinning-dialog').dialog('open');					
					resetUiStyle();
					setTimeout( function() {
						$('#uploadForm_multifile').submit();
					}, 1000);
				} else {
					onAlert("Please select a document to upload.");
				}
			}
			return false;
		}
	);

	$('#check_new_credit_card_4_swf').click(function(){
		userCancelled=false;
		if( MytotalUploadFileSize > totalUploadFileMaxSize ) {		
			onAlert("Your documents exceed the allowed file size. Please check.");				
			return false;
		}					
		if ( !validateFileSelected() ) {
			onAlert("Please upload all the required documents.");
		} else {
			if( MyuploadFilesCount != 0) {
				$.scrollTo(0,500,{onAfter:function() {
					$('#spinning-dialog').dialog('open');
					resetUiStyle();
					responseArray = new Array();
					$('#uploadForm_multifile .uploadforms').each(function() {
						var documentname = $(this).find('.documentnamefield').val();
						var formid = $('#formId').val();
						var nricpassportnumber = $('#form2_nric_passport').val();
						$(this).find('.swf_upload_file').each(function() {
							if( documentname != "" && documentname != undefined )  {
								$(this).swfupload('addPostParam', 'formid', formid);
								$(this).swfupload('addPostParam', 'nricpassportnumber', nricpassportnumber);
								$(this).swfupload('addPostParam', 'documentname', documentname);
								$(this).swfupload('startUpload');
							}
						});						
					});
				}});
			} else {
				onAlert("Please select a document to upload.");			
			}
		}
	});
	
	if (window.location.hostname.toLowerCase().indexOf("localhost") > -1) {
		$("#uploadForm_multifile").attr("action","/upload.php");
		$("#form2_id_type").val("SINGAPOREAN");
		$("#form2_nric_number").val("S0000003E");
	}	

	var formrefid = jQuery.query.get("formRefID");
	if( formrefid != "" && formrefid != true && formrefid != undefined && formrefid != null ) {
		$("#form2_reference_number").val(formrefid);	
	}

});

function submit_form() {
	window.scrollTo(0,0);
	resetUiStyle();
	window.onbeforeunload = null;
	var formxml = generateXml();
	formxml = formxml.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n", "");
	formxmlArr = formxml.split("<eform FID=\""+$('#formId').val()+"\" REFID=\""+$('#form2_fullrefid').val()+"\">");
	
	formxmlArr.splice(0,1);
	$.each(formxmlArr, function(index, value) {
		var resultXML="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		resultXML=resultXML+"<eform FID=\""+$('#formId').val()+"\" REFID=\""+$('#form2_fullrefid').val()+"\">";  
		resultXML=resultXML+ value;
		if ((index != formxmlArr.length-1) && formxmlArr.length > 1) {
		resultXML = resultXML.substring(0, resultXML.length-39);
		}
		$.ajaxSetup({
			async: 'true'
			});
		setTimeout(function(){
		
			var postURL="/nfs-ofp/ofpservice.htm";					
			if(window.location.hostname.toLowerCase().indexOf("localhost") > -1)			
				postURL = "/outputdoc2.php";
			$.post(postURL, { formXML :  resultXML }, function(responseText, statusText){	

				if(statusText == "success") {
					$('#tempReturn').empty();
					$('#tempReturn').append(responseText);
					var returnText = $("#tempReturn td:contains('Form ')").text();
					returnText = returnText.replace(/\s*/g, '');
					returnText = returnText.replace(/PSDUFormSubmittedSuccesfully/g, ',');
					returnText = returnText.split(',')[1];
					if(returnText != null) {
						if( returnText.indexOf('%') != -1 ) {
							returnText = returnText.substring(0, returnText.indexOf('%'));
						}
						if(returnText.charCodeAt(returnText.length - 1) == 160) {
							returnText = returnText.substr(0,returnText.length-1);
						}								
						$('#spinning-dialog').dialog('close');								
						$("#main_content").hide();
						$("#thanks_page").show();
					
					} else {
						$('#spinning-dialog').dialog('close');													
						myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
					}
					
				} else {
					$('#spinning-dialog').dialog('close');												
					myAlert("We are currently experiencing network issues with the site. Please try again later while we work to resolve the issue. Your kind understanding is appreciated.", "System issue encountered");
				}
			});
		}, 2000); // end of timer
	});
}

function onAlert(mm) {
	$("#doc_upload_message_box").html(mm);
}

function offAlert(mm) {
	$("#doc_upload_message_box").html("");
}

function myAlert( mm, hh) {
	var header = " ";
	if( hh != "" && hh != undefined && hh != null) {
		header = hh;
	}	
	resetUiStyle();	
	$("#general-heading").html(header);
	$("#general-message").html(mm);
	$('#general-dialog').dialog('open');	
	resetUiStyle();	
}