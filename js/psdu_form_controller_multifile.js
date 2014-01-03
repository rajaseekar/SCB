// Multi file upload for non-flash
var userCancelled = false;
function roomService() {
	offAlert();

	if( MAX_DOC == MyuploadFilesCount) {
		onAlert("You have already selected the maximum number of documents.");				
	}	

	if( MytotalUploadFileSize > totalUploadFileMaxSize ) {		
		onAlert("Your documents exceed the allowed file size. Please check.");				
	}				
}

function showNextRoom() {
	var roomNum = 99999;
	for( var i= 1; i <= MAX_DOC; i++){
		if( $("#tr_selected_document"+i).css("display") == "none" ) {
			CUR_UPLOAD = roomNum = i;
			$("#uploadForm_id_0"+roomNum).show();
			$("#uploadForm_id_0"+roomNum+" .swf_upload_file").css("margin-left","0px").css("margin-top","0px").css("z-index","999");	
			break;			
		}
	}	
	if( roomNum == 99999 ) {
		onAlert("You have already selected the maximum number of documents.");				
	}	
}

function hideCurrentRoom() {
	$("#uploadForm_id_0"+CUR_UPLOAD+" .swf_upload_file").css("margin-left","-10000px").css("margin-top","-30px").css("z-index","-1");		
}

function buildMFObject( MF ) {
	var removeString = '<span style="float:left; color:#005d9a; font-size: 9pt; margin-left:10px;">Remove</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />';
	var func_afterfileappend = function(element, value, master_element){

		if ( ("FormData" in window) ) {
			var ff = $("#form2_uploadid_0"+MF).get(0).files[0];
			var ss = ff.size;
			var s = (ss/1024/1024).toFixed(2)+"mb";
			if( ss < (1024 * 1024) ) {	s = (ss/1024).toFixed(2)+"kb";	}		
		} else {
			var ss = 0.1;
			var s = "-";
		}
		uploadFilesCount++;
		MyuploadFilesCount++;
		totalUploadFileSize = totalUploadFileSize+ss;
		MytotalUploadFileSize = MytotalUploadFileSize+ss;
		$("#tr_selected_document"+MF).show();
		$("#selected_document_doctype"+MF).html( $("#form2_doc_type option:selected").text() );
		$("#selected_document_docsubtype"+MF).html( $("#form2_doc_subtype option:selected").text() );
		$("#selected_document_size"+MF).html(s).attr("filesize",ss);  
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_doc_subtype option:selected').text());
		$('#form2_upload_id_0'+MF+'selectedfile').val('').val(option_text_select);
		$('#form2_uploadid_0'+MF+'_lista .MultiFile-label:last-child .option_value').attr("value",$('select#form2_doc_subtype option:selected').val());
		$('#form2_uploadid_0'+MF+'_lista .MultiFile-label:last-child .option_text').attr("value",option_text_select);
		$('#form2_uploadid_0'+MF+'_lista .MultiFile-label:last-child .option_file_name').attr("value",value);
		$('#form2_uploadid_0'+MF+'_lista').show();
		$('#uploadForm_id_0'+MF+' .formidfield').val( $('#formId').val() );
		$('#uploadForm_id_0'+MF+' .documentnamefield').val("").val( $('#form2_doc_subtype option:selected').val() );
		$('#uploadForm_id_0'+MF+' .nricpassportnumberfield').val("").val( $('#form2_nric_passport').val() );
		$('#form2_upload_id_0'+MF).val("").val(option_text_select);
		$("#uploadForm_id_0"+MF+" .swf_upload_file").css("margin-left","-10000px").css("margin-top","-30px").css("z-index","-1");		
		if( MytotalUploadFileSize > totalUploadFileMaxSize ) {			
			alert('File size exceeded\n\nWe are only able to upload 5MB at any one time.\nPlease review your document file size before trying again. You can also try to rescan at a lower resolution, or upload the next file by using this site again.','Sorry!');
			window.setTimeout( function() {
				$('#form2_doc_type').val("");				
				showDocOptions();
				CUR_UPLOAD=99999;
				$('#form2_doc_subtype').val("");			
				$("#remove_doc"+MF).click();
			}, 50);
		} else {
			roomService();
			$('#form2_doc_type').val("");				
			showDocOptions();
			CUR_UPLOAD=99999;
			$('#form2_doc_subtype').val("");			
		}				
	};
	var func_afterfileremove = function(element, value, master_element){
		$("#uploadForm_id_0"+MF+" .fileinputs").show();
		$("#uploadForm_id_0"+MF+" .lbl_btn_upload_file").css("color","#005D9A");
		$("#uploadForm_id_0"+MF+" .btn_upload_file").css("background-position","0 5px");
		$('#form2_upload_id_0'+MF+'selectedfile').val('');

		$('#uploadForm_id_0'+MF+' .uploadid').val( "XXX" );		
		$('#uploadForm_id_0'+MF+' .formidfield').val( "" );
		$('#uploadForm_id_0'+MF+' .documentnamefield').val("");
		$('#uploadForm_id_0'+MF+' .nricpassportnumberfield').val("");
		$('#form2_upload_id_0'+MF).val("");
		
		$("#selected_document_doctype"+MF).html("");
		$("#selected_document_doctsubype"+MF).html("");
		$("#selected_document_size"+MF).html("");
		$("#tr_selected_document"+MF).hide();		
		if( $("#form2_doc_subtype").val().length > 0 && CUR_UPLOAD == 99999) { showNextRoom();	}
		$("input[id^='form2_uploadid_0"+MF+"_F']").attr("id","form2_uploadid_0"+MF);
		uploadFilesCount--;
		MyuploadFilesCount--;
		totalUploadFileSize=totalUploadFileSize - parseInt($("#selected_document_size"+MF).attr("filesize"),10);		
		MytotalUploadFileSize=MytotalUploadFileSize - parseInt($("#selected_document_size"+MF).attr("filesize"),10);		
		roomService();
	 };
	 
	 var MFObject = { 
		list: '#form2_uploadid_0'+MF+'_lista',
		max: 1,
		accept:'gif|jpg|jpeg|tif|png|pdf|GIF|JPG|JPEG|TIF|TIFF|PNG|PDF',
		onFileAppend: function(element, value, master_element) {},
		afterFileAppend: func_afterfileappend,
		onFileRemove: function(element, value, master_element){ },
		afterFileRemove: func_afterfileremove,
		STRING: {  remove: removeString, denied: "Incorrect file type detected\n\nYour file $file is not supported. We are only able to accept the following formats: PDF, JPG, PNG, GIF and TIFF." }
	};
	return MFObject;
}	

function buildSelectedDocTable() {
	var Html = "";
	for(var i=2; i <= MAX_DOC; i++) {
	Html=Html+'<tr id="tr_selected_document'+i+'" style="display:none;">'+
				'<td id="selected_document_doctype'+i+'"></td>'+
				'<td id="selected_document_docsubtype'+i+'"></td>'+
				'<td class="sizeDetectable" style="margin-right:10px; text-align:right;" id="selected_document_size'+i+'"></td>'+
				'<td id="selected_document_remove'+i+'"><div id="form2_uploadid_0'+i+'_lista"></div><a id="remove_doc'+i+'" class="remove_doc" href="javascript:void(0);">Remove</a></td>'+
				'</tr>';
	}
	$(Html).insertAfter("#tr_selected_document1");
}

function buildUploadFormRows() {
	var Html = "";
	for(var i=1; i <= MAX_DOC; i++) {
		Html=Html+'<div class="uploadforms" id="uploadForm_id_0'+i+'">'+
		'<input type="hidden" class="formidfield" name="formid">'+
		'<input type="hidden" class="nricpassportnumberfield" name="nricpassportnumber">'+
		'<input type="hidden" class="documentnamefield" name="documentname">'+
		'<div style="display:none !important;">'+
		'<div id="form2_uploadid_0'+i+'_list" class="swf_filenamelist"></div>'+
		'</div>'+
		'<div class="swf_upload_file fileinputs btn_upload_file fileinputs_id" style="margin-left:-10000px;margin-top:0px;z-index:-1;padding:5px 0;float:left;">'+
		'<input type="file" class="file" id="form2_uploadid_0'+i+'" name="form2_uploadid_0'+i+'" style="width:150px; margin-left:0px;"/>'+
		'<label for="form2_uploadid_0'+i+'" class="lbl_btn_upload_file">'+
		'<span class="form2_uploadid_0'+i+'_a_file">'+
		'<span class="upload_file">Select a file to upload</span>'+
		'<span class="upload_file_over" style="text-decoration:underline; display:none;">Select a file to upload</span>'+
		'</span>'+
		'</label>'+
		'<input type="button" class="button">'+
		'</div>'+
		'<input type="hidden" id="uploadfile'+(i-1)+'refid" name="uploadfile'+i+'refid" value="" class="uploadfileredidgroup">'+
		'<input type="hidden" id="uploadOutputStatus_id_0'+i+'" name="uploadOutputStatus_id_0'+i+'">'+
		'<input type="hidden" id="form2_upload_id_0'+i+'selectedfile" name="form2_upload_id_0'+i+'selectedfile" class="selectedfile" value="">'+
		'<input type="hidden" id="form2_upload_id_0'+i+'" name="form2_upload_id_0'+i+'" value="XXX" class="uploadid">'+
		'<!--div id="uploadOutput_id_0'+i+'" style="display: none;" class="errorMessageContainer_upload"></div-->'+
		'</div>';
	}
	$(Html).insertAfter("#uploadForm_multifile_status");
}


	
$(function(){
	buildSelectedDocTable();
	buildUploadFormRows();		
	$('#form2_uploadid_01').MultiFile(buildMFObject(1)); 
	$('#form2_uploadid_02').MultiFile(buildMFObject(2)); 	
	$('#form2_uploadid_03').MultiFile(buildMFObject(3)); 
	$('#form2_uploadid_04').MultiFile(buildMFObject(4)); 
	$('#form2_uploadid_05').MultiFile(buildMFObject(5)); 
	$('#form2_uploadid_06').MultiFile(buildMFObject(6)); 
	$('#form2_uploadid_07').MultiFile(buildMFObject(7)); 
	$('#form2_uploadid_08').MultiFile(buildMFObject(8)); 
	$('#form2_uploadid_09').MultiFile(buildMFObject(9)); 
	$('#form2_uploadid_10').MultiFile(buildMFObject(10)); 
	$('#form2_uploadid_11').MultiFile(buildMFObject(11)); 
	$('#form2_uploadid_12').MultiFile(buildMFObject(12)); 
	$('#form2_uploadid_13').MultiFile(buildMFObject(13)); 
	$('#form2_uploadid_14').MultiFile(buildMFObject(14)); 
	$('#form2_uploadid_15').MultiFile(buildMFObject(15)); 
	$('#form2_uploadid_16').MultiFile(buildMFObject(16)); 
	$('#form2_uploadid_17').MultiFile(buildMFObject(17)); 
	$('#form2_uploadid_18').MultiFile(buildMFObject(18)); 
	$('#form2_uploadid_19').MultiFile(buildMFObject(19)); 
	$('#form2_uploadid_20').MultiFile(buildMFObject(20)); 

	$("#remove_doc1").click( function() {$("#form2_uploadid_01_lista a").click();roomService();});
	$("#remove_doc2").click( function() {$("#form2_uploadid_02_lista a").click();roomService();});
	$("#remove_doc3").click( function() {$("#form2_uploadid_03_lista a").click();roomService();});
	$("#remove_doc4").click( function() {$("#form2_uploadid_04_lista a").click();roomService();});
	$("#remove_doc5").click( function() {$("#form2_uploadid_05_lista a").click();roomService();});
	$("#remove_doc6").click( function() {$("#form2_uploadid_06_lista a").click();roomService();});
	$("#remove_doc7").click( function() {$("#form2_uploadid_07_lista a").click();roomService();});
	$("#remove_doc8").click( function() {$("#form2_uploadid_08_lista a").click();roomService();});
	$("#remove_doc9").click( function() {$("#form2_uploadid_09_lista a").click();roomService();});
	$("#remove_doc10").click( function() {$("#form2_uploadid_10_lista a").click();roomService();});
	$("#remove_doc11").click( function() {$("#form2_uploadid_11_lista a").click();roomService();});
	$("#remove_doc12").click( function() {$("#form2_uploadid_12_lista a").click();roomService();});
	$("#remove_doc13").click( function() {$("#form2_uploadid_13_lista a").click();roomService();});
	$("#remove_doc14").click( function() {$("#form2_uploadid_14_lista a").click();roomService();});
	$("#remove_doc15").click( function() {$("#form2_uploadid_15_lista a").click();roomService();});
	$("#remove_doc16").click( function() {$("#form2_uploadid_16_lista a").click();roomService();});
	$("#remove_doc17").click( function() {$("#form2_uploadid_17_lista a").click();roomService();});
	$("#remove_doc18").click( function() {$("#form2_uploadid_18_lista a").click();roomService();});
	$("#remove_doc19").click( function() {$("#form2_uploadid_19_lista a").click();roomService();});
	$("#remove_doc20").click( function() {$("#form2_uploadid_20_lista a").click();roomService();});
});
	
// File upload by Flash plugin

var totalUploadFileSize = 0;
var totalUploadFileMaxSize = 5125000;
var totalUploadedFileProgress = 0;
var totalUploadedFileSize = 0;
var uploadFilesCount = 0;

var responseArray = new Array();
var virusDetected = false;
jQuery.fn.bindAll = function(options) {
	var $this = this;
	jQuery.each(options, function(key, val){
		$this.bind(key, val);
	});
	return this;
}
$(function(){
	$.swfupload.additionalHandlers('swfupload_pre_load_handler');
	$.swfupload.additionalHandlers('swfupload_load_failed_handler');
	
	var listeners = {
		swfuploadPreLoad: function(event){
			//console.log('Swf Pre Load');
			$('.lbl_btn_upload_file').remove();
			$('input:file').remove();
			//$('.MultiFile-wrap, .upload_file_over').remove();
			
			$('#check_new_credit_card_4').remove();
			$('#check_new_credit_card_4_swf').show();
			$(".uploadforms").css("margin-top","0");			
	
		},
			
		swfuploadLoaded: function(event){
			$('.log', this).append('<li>Loaded</li>');
		},
		fileQueued: function(event, file){
			$('.log', this).append('<li>File queued - '+file.name+'</li>');
			uploadFilesCount++;
			MyuploadFilesCount++;
			totalUploadFileSize = totalUploadFileSize+file.size;
			MytotalUploadFileSize = MytotalUploadFileSize+file.size;
			//console.log('Total file size: '+totalUploadFileSize);
			if( totalUploadFileSize > totalUploadFileMaxSize ) {
				$(this).swfupload('cancelUpload', file.id);
				alert('File size exceeded\n\nWe are only able to upload 5MB at any one time.\nPlease review your document file size before trying again. You can also try to rescan at a lower resolution, or upload the next file by using this site again.','Sorry!');
			} else {

				var n = CUR_UPLOAD;
				var s = (file.size/1024/1024).toFixed(2)+"mb";
				if( file.size < (1024 * 1024) ) {
					s = (file.size/1024).toFixed(2)+"kb";
				}
				
				$("#tr_selected_document"+n).show();
				$("#selected_document_doctype"+n).html( $("#form2_doc_type option:selected").text() );
				$("#selected_document_docsubtype"+n).html( $("#form2_doc_subtype option:selected").text() );
				$("#selected_document_size"+n).html(s).attr("filesize",file.size);

				$('#uploadForm_id_0'+n+' .documentnamefield').val("").val( $('#form2_doc_subtype option:selected').val() );
				$('#uploadForm_id_0'+n+' .nricpassportnumberfield').val("").val( $('#form2_nric_passport').val() );
				$("#uploadForm_id_0"+n+" .swf_upload_file").css("margin-left","-10000px").css("margin-top","-30px").css("z-index","-1");					
				CUR_UPLOAD=99999;
				roomService();
				
				$('#form2_doc_type').val("");				
				showDocOptions();					
				$('#form2_doc_subtype').val("");

				$('#remove_doc'+n).click(function() {
					swfFileRemover(n, file.id);
				});
			}
			//console.log(file);
		},
		fileQueueError: function(event, file, errorCode, message){
			$('.log', this).append('<li>File queue error - '+message+'</li>');
			//console.log('fileQueueError',event, file, errorCode, message);
			if( message == 'File size exceeds allowed limit.' ) {
				alert('File size exceeded\n\nWe are only able to upload 5MB at any one time.\nPlease review your document file size before trying again. You can also try to rescan at a lower resolution, or upload the next file by using this site again.','Sorry!');
			}
			if( message == 'File is not an allowed file type.') {
				alert("Incorrect file type detected\n\nYour file "+file.name+" is not supported. We are only able to accept the following formats: PDF, JPG, PNG, GIF and TIFF.");
			}
		},
		fileDialogStart: function(event){
			$('.log', this).append('<li>File dialog start</li>');
			//console.log('fileDialogStart',event);
		},
		fileDialogComplete: function(event, numFilesSelected, numFilesQueued){
			$('.log', this).append('<li>File dialog complete</li>');
			//console.log('fileDialogComplete',numFilesSelected, numFilesQueued);
		},
		uploadStart: function(event, file){
			$('.log', this).append('<li>Upload start - '+file.name+'</li>');
			//console.log('uploadStart',event, file);
		},
		uploadProgress: function(event, file, bytesLoaded){
			$('.log', this).append('<li>Upload progress - '+bytesLoaded+'</li>');
			//console.log('Byte loaded per file: '+file.name+' size: '+bytesLoaded);
		},
		uploadSuccess: function(event, file, serverData){
			$('.log', this).append('<li>Upload success - '+file.name+'</li>');
			////console.log(serverData);
			serverData = $.trim( serverData );
			serverData = serverData.replace(/\s+/g,'');
			if( serverData != "EMF01" && serverData != "EMF02" && serverData != "EMF03" && serverData != "EMF04"  && serverData != "EMF05") {
				responseArray.push(serverData);
				uploadFilesCount--;
				totalUploadFileSize = totalUploadFileSize - file.size;
				MyuploadFilesCount--;
				MytotalUploadFileSize = MytotalUploadFileSize - file.size;				
				// prepare the text for preview and PDF
				//console.log( $(this).parent().parent().parent().parent().find('select option:selected').text() );
				$(this).parent().find('.swf_filenamelist').empty().hide();
				//$(this).css('height','20px').css('z-index','1').css('margin-left','0');
				
				if( uploadFilesCount == 0 && totalUploadFileSize == 0) {
					// prepare the upload id for the XML
            		$.each(responseArray, function(index, value) {
                		value = jQuery.trim(value);
                		$('#uploadfile'+index+'refid').val( value );
                	});
					submit_form();
//					$('#spinning-dialog').dialog('close');
//					$('#completed-dialog').dialog('open');
					resetUiStyle();
				}
				
			} else {
				// change error message if error code is virus detected
				// capture the return error for each return
				if( serverData == "EMF04" ) {
					virusDetected = true;
				}
				if( virusDetected ) {
					$('.normalerror').hide();
					$('.viruserror').show();
				} else {
					$('.normalerror').show();
					$('.viruserror').hide();				
				}
				
				$('#spinning-dialog').dialog('close');
				$('#error-dialog').dialog('open');
				resetUiStyle();
				$('.swf_upload_file').each(function() {
					$(this).parent().find('.swf_filenamelist').empty().hide();
					//$(this).css('height','20px').css('z-index','1').css('margin-left','0');
					//$(this).parent().parent().parent().parent().css('border','1px solid #CCCCCC');
					var currentSwf = $.swfupload.getInstance( $(this) );
					currentSwf.cancelUpload( );										
				});
				uploadFilesCount = MyuploadFilesCount = 0;
				MytotalUploadFileSize = totalUploadFileSize = 0;				
				$("tr[id^='tr_selected_document']").hide();	
				$("td[id^='selected_document_doctype']").html("");
				$("td[id^='selected_document_docsubtype']").html("");
				$("td[id^='selected_document_size']").html("");					
				roomService();		
			}

		},
		uploadComplete: function(event, file){
			$('.log', this).append('<li>Upload complete - '+file.name+'</li>');
			//console.log('uploadComplete',event, file);
			return false;
		},
		uploadError: function(event, file, errorCode, message){
			$('.log', this).append('<li>Upload error - '+message+'</li>');
			if( window.console && window.console.log) console.log('uploadError',event, file, errorCode, message);			
			if( message == 'File Cancelled' ) {
				if( uploadFilesCount > 0 ) {
					uploadFilesCount--;
					totalUploadFileSize = totalUploadFileSize - file.size;
					MyuploadFilesCount--;
					MytotalUploadFileSize = MytotalUploadFileSize - file.size;						
				}
//				uploadFilesCount = MyuploadFilesCount = 0;
//				MytotalUploadFileSize = totalUploadFileSize = 0;
				
				$(this).parent().find('.swf_filenamelist').empty().hide();
				////$(this).css('height','20px').css('z-index','1').css('margin-left','0');
			} else {

				$('#spinning-dialog').dialog('close');
				if( !userCancelled ) $('#error-dialog').dialog('open');
				resetUiStyle();

				// so if upload stopped abnormally, we do the page reset 
				$('.swf_upload_file').each(function() {
					$(this).parent().find('.swf_filenamelist').empty().hide();
					var currentSwf = $.swfupload.getInstance( $(this) );
					currentSwf.cancelUpload( );		
				});
				$("tr[id^='tr_selected_document']").hide();	
				$("td[id^='selected_document_doctype']").html("");
				$("td[id^='selected_document_docsubtype']").html("");
				$("td[id^='selected_document_size']").html("");										
				uploadFilesCount = MyuploadFilesCount = 0;
				MytotalUploadFileSize = totalUploadFileSize = 0;
				roomService();					
			}
		}
	};
	$('.swf_upload_file').bindAll(listeners);
	
});

$(function(){

	$('.swf_upload_file').each(function(){
		$(this).swfupload({

			upload_url: ((window.location.hostname.toLowerCase().indexOf("localhost") > -1) ? "/uploadswf.php" : "/nfs-ofp/ofpservice.htm"),
			
			file_size_limit : "5120",
			file_types : "*.jpg;*.gif;*.tif;*.pdf;*.png;*.jpeg",
			file_types_description : "All Files",
			file_upload_limit : "0",
			file_queue_limit : "1",
			flash_url : "js/lib/swfupload/Flash/swfupload.swf",
			button_image_url : 'images/btn_add_more_files.gif',
			button_width : 160,
			button_height : 22,
			button_cursor : SWFUpload.CURSOR.HAND,
			button_placeholder : $('.button', this)[0],
			debug: false
		});
	});

	$("#spinning-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Please wait..."
	});
	$("#completed-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Information"
	});
	$("#error-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Information"
	});
	$("#login-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Please wait..."
	});	
	$("#general-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 150,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Information"
	});	
	$('#cancelUploadButton').click(function() {
		swfStopUpload();
		$('#spinning-dialog').dialog('close');
	});
	
	$('#completedUploadButton').click(function() {
//		submit_form();
		$('#completed-dialog').dialog('close');
	});
	$('#cancelLoginButton').click(function() {
		$('#login-dialog').dialog('close');
	});
	$('#generalButton').click(function() {
		$('#general-dialog').dialog('close');
	});
	
	$('#errorNextButton').click(function() {
		$('#error-dialog').dialog('close');
	});
	
	$('#errorTryButton').click(function() {
		$('#error-dialog, #general-dialog').dialog('close');
	});
	
});	

function swfFileRemover( n, fileId ) {
	var currentSwf = $.swfupload.getInstance( $("#uploadForm_id_0"+n).find('.swf_upload_file') );
	currentSwf.cancelUpload( fileId );	
		
	$("#tr_selected_document"+n).hide();	
	$("#selected_document_doctype"+n).html("");
	$("#selected_document_docsubtype"+n).html("");
	$("#selected_document_size"+n).html("");	
	
	roomService();					
	if( $("#form2_doc_subtype").val().length > 0 && CUR_UPLOAD==99999) {
		showNextRoom();
	}	
}

function swfStopUpload() {
	userCancelled = true;
	$('.swf_upload_file').each(function() {
		$(this).swfupload('stopUpload');
	});
	$('#spinning-dialog, #error-dialog').dialog('close');
	return false;
}

function resetUiStyle() {
	$(".ui-dialog-titlebar").hide();
	$('.ui-widget-content').css('background','none repeat scroll 0 0 transparent');
	$('.ui-widget-content').css('border','0px solid #A6C9E2');
}

(function($) {
$.fn.ajaxSubmit.debug = true;

$(document).ajaxError(function(ev,xhr,o,err) {
	$('#spinning-dialog, #login-dialog').dialog('close');												
	$('#error-dialog').dialog('open');
	resetUiStyle();
});

$(function() {
    $('#uploadForm_multifile').ajaxForm({
    	iframe: true,
		timeout: 3000,		
        beforeSubmit: function(a,f,o) {
            o.dataType = "html";
            $('#uploadOutput_id_01').html('Submitting...');
        },
        success: function(data) {
        	var noerror = true;
        	var refidarray = data.split(',');
        	if( $.isArray(refidarray) ) {

        		$.each(refidarray, function(index, value) {
        			var errorcode = jQuery.trim(refidarray[index]);
        			if( errorcode == "EMF01" || errorcode == "EMF02" || errorcode == "EMF03" || errorcode == "EMF04" || errorcode == "EMF05") {
        				if( errorcode == "EMF01"  ) {
							$('#spinning-dialog').dialog('close');									
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF02"  ) {
							$('#spinning-dialog').dialog('close');
							alert('File size exceeded\n\nWe are only able to upload 5MB at any one time.\nPlease review your document file size before trying again. You can also try to rescan at a lower resolution, or upload the next file by using this site again.','Sorry!');
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF03"  ) {
							$('#spinning-dialog').dialog('close');									
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF04"  ) {
							$('#spinning-dialog').dialog('close');									
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            }else if( errorcode == "EMF05"  ) {
							$('#spinning-dialog').dialog('close');									
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            }
        			}
					if( data.toUpperCase().indexOf("NOT FOUND") > 0 || data.toUpperCase().indexOf("ERROR") > 0 || data.toUpperCase().indexOf("PROBLEM") > 0) {
						noerror = false;
					}
        		});
        		if( noerror ) {
            		$.each(refidarray, function(index, value) {
                		value = jQuery.trim(value);
                		$('#uploadfile'+index+'refid').val( value );
                	});
					submit_form();
//            		$('#spinning-dialog').dialog('close');
//            		$('#completed-dialog').dialog('open');
					resetUiStyle();
        		} else {
            		$('#spinning-dialog').dialog('close');				
					$("#error-dialog").dialog('open');
					resetUiStyle();
				}
        	} else {
				$('#spinning-dialog').dialog('close');			
				$("#error-dialog").dialog('open');
				resetUiStyle();
			}
        }
    });
});
})(jQuery);
	