var formidList = [  //PRD,    SIT
					"MYR219", "MYR266", // CC
					"MYR220", "MYR145", // CashOne
					"MYR289",			// JustOne (same for PRD and SIT)
					"MYR320", "MYR242", // C@S CC
					"MYR321", "MYR241"  // C@S PL
				];

//////////////////////////////////////////////////////////
//	corresponds to exact order of form ID in formidList //
//	4 characters = 4 document types                     // 
//  'ID'  'INCOME'  'SUPP'  'ADDR'                      //
//	'0' = document type not provided                    //
//	'1,2,3' = different variations                      //
//////////////////////////////////////////////////////////				
var formDocMap= [
					"1110", "1110", // CC
					"1100", "1100", // CashOne
					"1000",			// JustOne
					"1110", "1110", // C@S CC
					"1100", "1100"  // C@S PL
				];

var formProductMap = [
					"Credit Card", "Credit Card",  	// CC
					"CashOne", "CashOne", 			// CashOne
					"JustOne",				 		// JustOne
					"Credit Card", "Credit Card",  	// C@S CC
					"CashOne", "CashOne" 			// C@S PL
				];

var formFileNet =  [  
					"Credit Card|CC Account Opening", "Credit Card|CC Account Opening",  // CC
					"Personal Loan|PL Account Opening", "Personal Loan|PL Account Opening", // CashOne
					"",			// JustOne
					"Credit Card|CC Account Opening", "Credit Card|CC Account Opening", // C@S CC
					"Personal Loan|PL Account Opening", "Personal Loan|PL Account Opening"  // C@S PL
				];

var noteBoxMessage = [ 
					"1", "1", 		// CC
					"2", "2", 		// CashOne
					"2",			// JustOne
					"1", "1", 		// C@S CC
					"2", "2"  		// C@S PL
				];				
				
var docRequirement = [ 
					"1", "1", 		// CC
					"2", "2", 		// CashOne
					"3",			// JustOne
					"3", "3", 		// C@S CC
					"2", "2"  		// C@S PL
				];								
				
var idleTime = 0;
var timeoutUrl = "http://www.standardchartered.com.my/";
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
	if( $("#form2_id_type").val() == "" ) {
		inlineError("#lbl_id_type","ID Type is mandatory. Please enter and try again.");
		allValid=false;
	} else {
		inlineError("#lbl_id_type","");		
	}

	if( $("#form2_id_type").val() == "NRIC" ) {
		if( $("#form2_nric_number1").val() == "" || $("#form2_nric_number2").val() == "" || $("#form2_nric_number3").val() == "") {
			inlineError("#lbl_nric_number","NRIC is mandatory. Please enter and try again.");
			allValid=false;
		} else {
			if( !isNumeric($("#form2_nric_number1").val()) || !isNumeric($("#form2_nric_number2").val()) || !isNumeric($("#form2_nric_number3").val())) {
				inlineError("#lbl_nric_number","Invalid NRIC. Please enter and try again.");
				allValid=false;
			} else {
				if(!ValidateNRIC($("#form2_nric_number1").val(),$("#form2_nric_number2").val())) {
					inlineError("#lbl_nric_number","Invalid NRIC. Please enter and try again.");
					allValid=false;				
				} else {
					$("#form2_nric_number").val( $("form2_nric_number1").val()+$("form2_nric_number2").val()+$("form2_nric_number3").val());
					inlineError("#lbl_nric_number","");		
			}	}
		}		
	}
	
	if( $("#form2_id_type").val() == "Passport" ) {
		if( $("#form2_passport_number").val() == "" ) {
			inlineError("#lbl_passport_number","Passport No. is mandatory. Please enter and try again.");
			allValid=false;
		} else {
			if( !isAlphanumericWithSpec($("#form2_passport_number").val()) ) {
				inlineError("#lbl_passport_number","Invalid characters in Passport No.  Please enter and try again.");
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
		if( !isAlphanumericWithSpec($("#form2_reference_number").val()) ) {
			inlineError("#lbl_reference_number","Invalid Reference No. Please enter and try again.");
			allValid=false;
		} else {
			if (!validFormID($("#form2_reference_number").val() ) ) {
				inlineError("#lbl_reference_number","Invalid Reference No. Please enter and try again.");
				allValid=false;			
			} else {
				inlineError("#lbl_reference_number","");	
			}
		}	
	}
	
	return allValid;
}

function validateFileSelected() {
	return true;
}	

function checkDocType( docRefId ) {
	if( docRefId ) {
		var docTypeId = docRefId.split('-')[2];
		if( docTypeId == "NRICnew" || docTypeId == "PPort" || docTypeId == "SID" || docTypeId == "PWC") {
			return "ID Document";
		} else if ( docTypeId == "EAFORM" || docTypeId == "PSlip" || docTypeId == "EPFSTATEMENT" ||
					docTypeId == "BORANG" || docTypeId == "ELETTER" ) {
			return "Income Document";
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

function ValidateNRIC(strNRIC1,strNRIC2) {
	var validBP="01,21,22,23,24,02,25,26,27,03,28,29,04,30,05,31,59,06,32,33,07,34,35,08,36,37,38,39,09,40,10,41,42,43,44,11,45,46,12,47,48,49,13,50,51,52,53,14,54,55,56,57,15,58,"+
				"16,82,60,61,62,63,64,65,66,67,68,71,74,75,76,77,78,79,83,84,85,86,87,88,89,90,91,92,93";
			
	if(strNRIC1.length != 6 || strNRIC2.length != 2) {
		return false;
	}
	if(validBP.indexOf(strNRIC2) < 0) {
		return false;
	}

	var yy = parseInt(strNRIC1.substr(0,2),10);
	var mm = parseInt(strNRIC1.substr(2,2),10);
	var dd = parseInt(strNRIC1.substr(4,2),10);
	
	if( mm < 1 || mm > 12 ) {
		return false;
	}

	if( dd < 1 || dd > 31) {
		return false;
	}
	
	var ddate = new Date( yy, (mm-1), dd);
	
	if( ddate.getMonth()+1 != mm || ddate.getDate() != dd ) {
		return false;
	}
	
	return true;
}

function isNumeric(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)	{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) ) {
		  }
		  else	{
			 return false;
		  }
	}
	return true;
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
	
	if(FILENET!="" & FILENET.split("|").length == 2) {
		// Filenet implementation
		addXML=addXML+"\t\t\t<filenetProduct><![CDATA["+FILENET.split("|")[0]+"]]></filenetProduct>\n";
		addXML=addXML+"\t\t\t<filenetSubProduct><![CDATA["+FILENET.split("|")[1]+"]]></filenetSubProduct>\n";		
		addXML=addXML+"\t\t\t<filenetCity>KL</filenetCity>\n";
		addXML=addXML+"\t\t\t<filenetCountry>MY</filenetCountry>\n";
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
			html = html + '<option value="ID_PROOF">Proof of ID</option>';
			break;
		default:
			break;		
	}
	
	switch( docMap.substr(1,1) ) {
		case "1"  :
			html = html + '<option value="INCOME_PROOF">Proof of income</option>';
			break;
		default:
			break;		
	}

	switch( docMap.substr(2,1) ) {
		case "1"  :
			html = html + '<option value="SUPP_PROOF">Proof of ID (supplementary card)</option>';
			break;
		default:
			break;		
	}
/*
	switch( docMap.substr(3,1) ) {
		case "1"  :
			html = html + '<option value="ADDR_PROOF">Proof of residential address</option>';
			break;
		default:
			break;		
	}
*/	
	$("#form2_doc_type").html(html);										
}

function showDocOptions( option ) {
	$("#form2_doc_subtype option").remove();
	switch( $("#form2_doc_type").val() ) {
		case "ID_PROOF"  :
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="id_proof" value="NRICnew">NRIC (front and back)</option>'+
						'<option class="id_proof" value="SID">Service ID (Armed Forces)</option>'+												
						'<option class="id_proof" value="PWC">Police Warrant Card</option>'+						
						'<option class="id_proof" value="PPort">Passport</option>';
			$("#form2_doc_subtype").html(html);		
			break;						
						
		case "INCOME_PROOF"  :
			var html =	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="income_proof" value="PSLIP">Payslip/ePayslip with commission/fixed allowance</option>'+
						'<option class="income_proof" value="EAFORM">EA Form</option>'+
						'<option class="income_proof" value="EPFSTATEMENT">EPF Statement</option>'+
						'<option class="income_proof" value="BORANG">Borang B / BE</option>'+
						'<option class="income_proof" value="ELETTER">Employment Letter</option>';
			$("#form2_doc_subtype").html(html);		
			break;

		case "SUPP_PROOF"  :
			var html = 	'<option class="select" selected="selected" value="">Please select doc subtype</option>'+
						'<option class="supp_proof" value="NRICnew">NRIC (front and back)</option>'+
						'<option class="supp_proof" value="SID">Service ID (Armed Forces)</option>'+												
						'<option class="supp_proof" value="PWC">Police Warrant Card</option>'+						
						'<option class="supp_proof" value="PPort">Passport</option>';
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
	
	$("#form2_id_type").change( function() {
		if( $("#form2_id_type").val() == "NRIC" ) {
			$(".tr_passport").hide();
			$(".tr_passport input").val("");			
			$(".tr_nric").show();			
		} else if ( $("#form2_id_type").val() == "Passport" ) {
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
				if ( $("#form2_id_type").val() == "NRIC" ) {
					$('#form2_nric_passport').val( $('#form2_nric_number').val() );
				} else {
					$('#form2_nric_passport').val( $('#form2_passport_number').val() );			
				}
				$("#form2_refid").val( $("#form2_reference_number").val()  );
				
				$('#login-dialog').dialog('open');
				
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
											myAlert("We noticed your application was submitted more than 2 days ago. Our staff would be in contact with you to obtain the required supporting documents.", "Your application has expired."  );
											break;
										default:
											myAlert("We are currently experiencing network issues with the site. Please try again later. We sincerely apologised for any inconvenience caused.", "System issue encountered");											
											break;
									}
									return false;
								} else {
									$('#login-dialog').dialog('close');								
									myAlert("We are currently experiencing network issues with the site. Please try again later. We sincerely apologised for any inconvenience caused.", "System issue encountered");
									return false;
								}
								
							} else {
								$('#login-dialog').dialog('close');							
								myAlert("We are currently experiencing network issues with the site. Please try again later. We sincerely apologised for any inconvenience caused.", "System issue encountered");
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
					onAlert("Please select at least one document to upload.");
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
				onAlert("Please select at least one document to upload.");			
			}
		}
	});
	
	if (window.location.hostname.toLowerCase().indexOf("localhost") > -1) {
		$("#uploadForm_multifile").attr("action","/upload.php");
		$("#form2_id_type").val("NRIC");
		$("#form2_nric_number").val("S0000003E");
	}	

	var formrefid = jQuery.query.get("formRefID");
	if( formrefid != "" ) {
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
						myAlert("We are currently experiencing network issues with the site. Please try again later. We sincerely apologised for any inconvenience caused.", "System issue encountered");
					}
					
				} else {
					$('#spinning-dialog').dialog('close');												
					myAlert("We are currently experiencing network issues with the site. Please try again later. We sincerely apologised for any inconvenience caused.", "System issue encountered");
				}
			});
		}, 2000); // end of timer
	});
}

function onAlert(mm) {
	$("#doc_upload_message_box").html(mm).show();
}

function offAlert(mm) {
	$("#doc_upload_message_box").html("").hide();
}

function myAlert( mm, hh) {
	var header = " ";
	if( hh != "" && hh != undefined && hh != null) {
		header = hh;
	}	
	$("#general-heading").html(header);
	$("#general-message").html(mm);
	$('#general-dialog').dialog('open');	
}