var idleTime = 0;
var timeoutUrl = "http://www.standardchartered.com.sg/credit-cards/";

function timerIncrement() {
    idleTime++;
    if (idleTime >= 900) { // 15 minutes
		window.location.replace(timeoutUrl);
    }
}

var status = false;

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

$(function() {
    $(".fileinputs_income")
        .mouseover(function(){
		    $(".fileinputs_income .upload_file_over").show();
		    $(".fileinputs_income .upload_file").hide();
        })
        .mouseout(function(){
		    $(".fileinputs_income .upload_file_over").hide();
		    $(".fileinputs_income .upload_file").show();
        });
});

// Mask the input field
var W3CDOM = (document.createElement && document.getElementsByTagName);

function initFileUploads() {
	if (!W3CDOM) return;
	var fakeFileUpload = document.createElement('div');
	fakeFileUpload.className = 'fakefile';
	fakeFileUpload.appendChild(document.createElement('input'));
	var image = document.createElement('img');
	image.src='btn_next.gif';
	fakeFileUpload.appendChild(image);
	var x = document.getElementsByTagName('input');
	for (var i=0;i<x.length;i++) {
		if (x[i].type != 'file') continue;
		if (x[i].parentNode.className != 'fileinputs') continue;
		x[i].className = 'file hidden';
		var clone = fakeFileUpload.cloneNode(true);
		x[i].parentNode.appendChild(clone);
		x[i].relatedElement = clone.getElementsByTagName('input')[0];
		x[i].onchange = x[i].onmouseout = function () {
			this.relatedElement.value = this.value;
		}
	}
}

function validateFileSelected() {
	var result = false;
	if( uploadFilesCount != 0 ) {
		var numberOfRequireDoc = $('#uploadForm_multifile table.application_form').filter(':visible').length;
		if( numberOfRequireDoc == uploadFilesCount ) {
			result = true;
		}
	}		
	return result;
}	

function checkDocType( docRefId ) {
	if( docRefId ) {
		var docTypeId = docRefId.split('-')[2];
		if( docTypeId == "NRIC" || docTypeId == "PPort" || docTypeId == "EPass") {
			return "ID Document";
		} else if( docTypeId == "CPFHS" || docTypeId == "PSlip" || docTypeId == "ITNA") {
			return "Income Document";
		} else if ( docTypeId == "FOR01_LUB" || docTypeId == "FOR01_LBS" || docTypeId == "FOR01_RA" || 
					docTypeId == "FOR01_LMPS" || docTypeId == "FOR01_LESA" || docTypeId == "FOR01_GDSA" ) {
			return "Address Document";					
		}					
	} else {
		return "";
	}
}


function generateXml() {
	var startXML='';
	var commonXML='';
	var endXML='';
	var hiddenXML='';
	var finalXML='';

	startXML=startXML+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	startXML=startXML+"<eform FID=\""+$('#formId').val()+"\">\n";	
	startXML=startXML+"\t<model>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"savemodel\">\n";
	startXML=startXML+"\t\t\t<sigfields>\n";
	startXML=startXML+"\t\t\t\t<sigchar>\n";
	
	startXML=startXML+"\t\t\t\t\t<sigchar1>"+$("#form2_refid").val()+"</sigchar1>\n";	

	startXML=startXML+"\t\t\t\t</sigchar>\n";
	startXML=startXML+"\t\t\t\t<signum/>\n";
	startXML=startXML+"\t\t\t\t<sigdate/>\n";
	startXML=startXML+"\t\t\t</sigfields>\n";
	startXML=startXML+"\t\t</instance>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"outputmodel\">\n";	

	commonXML=commonXML+"\t\t\t<form2_refid>"+$("#form2_refid").val()+"</form2_refid>\n";	
	commonXML=commonXML+"\t\t\t<form2_product>"+$("#form2_product").val()+"</form2_product>\n";		
	
	// upload docs
	hiddenXML=hiddenXML+"\t\t\t<attchments>\n";
	var uploadfile0refid = $('#uploadfile0refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile0refid )+"'>"+uploadfile0refid+"</attachment>\n";
	var uploadfile1refid = $('#uploadfile1refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile1refid )+"'>"+uploadfile1refid+"</attachment>\n";
	var uploadfile2refid = $('#uploadfile2refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile2refid )+"'>"+uploadfile2refid+"</attachment>\n";
	var uploadfile3refid = $('#uploadfile3refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile3refid )+"'>"+uploadfile3refid+"</attachment>\n";
	var uploadfile4refid = $('#uploadfile4refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile4refid )+"'>"+uploadfile4refid+"</attachment>\n";
	hiddenXML=hiddenXML+"\t\t\t</attchments>\n";
	
	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";

	finalXML=startXML+commonXML+hiddenXML+endXML;	
	
	return finalXML;
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

	if (!checkFormValidity()) {
		$("div").remove();
		$("head, body").remove();		
		return false;
	}	
	
	$('#form2_upload_id_01').change(function() {
		if( $('#form2_upload_id_01selectedfile').val() != '' ) {
			$('#form2_upload_id_01selectedfile').val('').val( $('#form2_upload_id_01 option:selected').text() );
		}
	});
	$('#form2_upload_id_02').change(function() {
		if( $('#form2_upload_id_02selectedfile').val() != '' ) {
			$('#form2_upload_id_02selectedfile').val('').val( $('#form2_upload_id_02 option:selected').text() );
		}
	});
	$('#form2_upload_id_03').change(function() {
		if( $('#form2_upload_id_03selectedfile').val() != '' ) {
			$('#form2_upload_id_03selectedfile').val('').val( $('#form2_upload_id_03 option:selected').text() );
		}
	});
	$('#form2_upload_income_01').change(function() {
		if( $('#form2_upload_income_01selectedfile').val() != '' ) {
			$('#form2_upload_income_01selectedfile').val('').val( $('#form2_upload_income_01 option:selected').text() );
		}
	});
	$('#form2_upload_for_01').change(function() {
		if( $('#form2_upload_for_01selectedfile').val() != '' ) {
			$('#form2_upload_for_01selectedfile').val('').val( $('#form2_upload_for_01 option:selected').text() );
		}
	});
	
	function checkFormValidity() {
		if(location.hash.length > 0) {
			return false;
		}
	
		var referrerList = new Array();

		referrerList =  [
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_f.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_fs.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_ss.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_f.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_fs.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_ss.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_f.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_fs.html",
							"https://apps1.standardchartered.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_ss.html",

							"http://localhost/singapore/OnlineSalesAIP/1credit_card_form_thankyou_aip.html",
							"http://localhost/singapore/OnlineSalesAIP/1credit_card_form_thankyou_aip_f.html",
							"http://localhost/singapore/OnlineSalesAIP/1credit_card_form_thankyou_aip_fs.html",
							"http://localhost/singapore/OnlineSalesAIP/1credit_card_form_thankyou_aip_ss.html",
							"http://localhost/singapore/OnlineSalesAIP/1cashone_form_thankyou_aip.html",
							"http://localhost/singapore/OnlineSalesAIP/1cashone_form_thankyou_aip_f.html",
							"http://localhost/singapore/OnlineSalesAIP/1cashone_form_thankyou_aip_fs.html",
							"http://localhost/singapore/OnlineSalesAIP/1cashone_form_thankyou_aip_ss.html",
							"http://localhost/singapore/OnlineSalesAIP/1ezycash_form_thankyou_aip.html",
							"http://localhost/singapore/OnlineSalesAIP/1ezycash_form_thankyou_aip_f.html",
							"http://localhost/singapore/OnlineSalesAIP/1ezycash_form_thankyou_aip_fs.html",
							"http://localhost/singapore/OnlineSalesAIP/1ezycash_form_thankyou_aip_ss.html",

							"https://apps.mykorn.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_f.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_fs.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_ss.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_f.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_fs.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_ss.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_f.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_fs.html",
							"https://apps.mykorn.com/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_ss.html",

							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_f.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_fs.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_ss.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/cashone_form_thankyou_aip.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_f.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_fs.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/cashone_form_thankyou_aip_ss.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_f.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_fs.html",
							"https://10.20.218.168:8080/public_website/singapore/OnlineSales/ezycash_form_thankyou_aip_ss.html"
						];

		var referrer = document.referrer;

		if(referrer == undefined || referrer == "" ) {
			return false;
		}
		
		if( $.inArray(referrer.split("?")[0], referrerList) < 0 ) {
			return false;
		}

		if( referrer.indexOf("_form_thankyou_aip_f") > -1) {
			$(".foreignor").show();
			$(".singaporean").hide();								
		} else {
			$(".foreignor").hide();
			$(".singaporean").show();									
		}		

		var r_param = referrer.split("?")[1].split("&");
		var FormRefID = selectedCard = "";
		
		for(var i=0; i < r_param.length; i++) {
			var j = r_param[i].indexOf("FormRefID=");
			if( j > -1) {
				FormRefID = r_param[i].substring(j+10).split("|")[0].replace(/%20/g,"");
			}
			j = r_param[i].indexOf("selectedCard=");
			if( j > -1) {
				selectedCard = r_param[i].substring(j+13).replace(/%20/g,"");
			}
		}
	
		if( FormRefID.length == 0 ) {
			return false;
		}
		var form2_product = "";

		if( referrer.indexOf("/ezycash_form_thankyou_") > -1 ) {
			form2_product = "EZY";		
			$("#form2_product").val("EzyCash");
			timeoutUrl = "http://www.standardchartered.com.sg/borrow/loans-ezycash.html";
			$(".EZY-note").show();			
		} else if( referrer.indexOf("/cashone_form_thankyou_") > -1 ) {
			form2_product = "CO";					
			$("#form2_product").val("CashOne");
			timeoutUrl = "http://www.standardchartered.com.sg/borrow/loans-cashone.html";							
			$(".CO-note").show();			
		} else if( referrer.indexOf("/credit_card_form_thankyou_") > -1 ) {
			form2_product = "CC";
			timeoutUrl = "http://www.standardchartered.com.sg/credit-cards/";							
			$(".CC-note").show();			
			switch( selectedCard ) {
				case "SG_MPC" :
					$("#form2_product").val("Manhattan World Mastercard");
					break;
				case "SG_PVC" :
					$("#form2_product").val("Platinum Card Visa");
					break;					
				case "SG_PMC" :
					$("#form2_product").val("Platinum Card MasterCard");
					break;					
				case "SG_BPC" :
					$("#form2_product").val("Business Platinum Card");
					break;					
				case "SG_NA" :
					$("#form2_product").val("NUS Alumni Platinum Card");
					break;					
				case "SG_PPC" :
					$("#form2_product").val("Prudential Platinum Card");
					break;					
				case "SG_MC" :
					$("#form2_product").val("Manhattan Card");
					break;					
				case "SG_NUS" :
					$("#form2_product").val("NUS $500 Credit Card");
					break;					
				case "SG_WMC" :
					$("#form2_product").val("Preferred World MasterCard");
					break;					
				case "SG_PVC_TGR" :
					$("#form2_product").val("Tigerair Platinum Credit Card");
					break;					
				case "SG_SPC" :
					$("#form2_product").val("SingPost Platinum Visa Credit Card");
					break;					
				default :
					return false;
			}
		}

		var formidList = new Array();
		formidList = ["SGR472", "SGR473"];		
		
		if( FormRefID.split("-").length != 2) {
			return false;
		}

		if( $.inArray( FormRefID.split("-")[0], formidList) < 0 ) {
			return false;
		}		

		if( /[0-9]/.test( FormRefID.split("-")[1] ) != true ) {
			return false;
		}		

		$("#form2_refid").val(FormRefID);
		$("#product_selected").html($("#form2_product").val());			

		return true;
	}

	$("#check_new_credit_card_4").click(
		function() {
			if ( !validateFileSelected() ) {
				alert("Please upload all the required documents.");
			} else {
				// before proceed to file upload logic, first clear all the previous records
				$('.uploadfileredidgroup').val('');
				$('#uploadForm_multifile').submit();
			}
			return false;
		}
	);

	// form submission
	$("#header").show();
	$("#main_content").show();
	$("#footer").show();	
});

function submit_form() {
	window.scrollTo(0,0);
	resetUiStyle();

/*	
	$('#spinning-dialog .wrap-img h2').empty().append('Please wait and do not close your browser while we are processing your request.');
	$('#spinning-dialog .wrap-img p').empty().append('This may take some time. Thank you for your patience.');
	$('#spinning-dialog .buttons-pop').empty();
	$('#spinning-dialog').css('height','290px');
	$('#pop-up-upload').css('height','250px');
	$('#spinning-dialog').dialog('open');
	$('#counter').show();
	$('#counter').countdown({
	  image: 'images/digits.png',
	  startTime: '00:60',
	  timerEnd: function(){},
	  format: 'mm:ss'
	});
*/			
	window.onbeforeunload = null;
	var formxml = generateXml();
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
		setTimeout(function(){
		
			var postURL="/nfs-ofp/ofpservice.htm";					
			if(window.location.hostname.toLowerCase().indexOf("localhost") > -1)			
				postURL = "/outputaip2.php";
			$.post(postURL, { formXML :  resultXML }, function(responseText, statusText){					

				if(statusText == "success") {
					var returnCode = "";
					var returnID = "";

					var regRefID = new RegExp("</REFID>");
					returnID = responseText.substring(13, responseText.search(regRefID));
					
					var regStatus1 = new RegExp("<STATUS>"); 
					var regStatus2 = new RegExp("</STATUS>");
					returnCode = responseText.substring(responseText.search(regStatus1)+8, responseText.search(regStatus2));
					
					if(returnID != null && returnID != "" ) {
						$('#FormRefID').val(returnID+"|"+returnCode);
						$('#FormRefID_AIP').val(returnID);
						$('#spinning-dialog').dialog('close');								
						$("#main_content").hide();
						$("#thanks_page").show();
						location.href = location.href + "#done";						
					} else {
						alert("Form submission failed, please try again later");
					}
					
				} else {
					alert("System is busy, please try again later");
				}

			});
		}, 2000); // end of timer
	});

}
