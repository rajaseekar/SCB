// Multi file upload
$(function(){ 
 $('#form2_uploadid_01').MultiFile({ 
  list: '#form2_uploadid_01_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|GIF|JPG|JPEG|TIF|TIFF|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

 	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_01 option:selected').text());
		$('#form2_upload_id_01selectedfile').val('').val(option_text_select);
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_01 option:selected').val());
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		$("#form2_uploadid_01_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_01 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_01 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_01_a_file").hide();
			$(".form2_uploadid_01_other_file").show()
		}			
			$('#uploadForm_id_01 .documentnamefield').val("").val( $('#form2_upload_id_01 option:selected').val() );
			$('#uploadForm_id_01 .nricpassportnumberfield').val("").val( $('#form2_refid').val() );
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
	  
   },
  afterFileRemove: function(element, value, master_element){
		$("#uploadForm_id_01 .fileinputs").show();
       	$("#uploadForm_id_01 .lbl_btn_upload_file").css("color","#005D9A");
       	$("#uploadForm_id_01 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_01_a_file").show();
			$(".form2_uploadid_01_other_file").hide();
		}
		$('#form2_upload_id_01selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ 
 $('#form2_uploadid_02').MultiFile({ 
  list: '#form2_uploadid_02_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_02 option:selected').text());
		$('#form2_upload_id_02selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_02 option:selected').val());
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_02 option:selected').remove(); 
		$("#form2_uploadid_02_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_02 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_02 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_02_a_file").hide();
			$(".form2_uploadid_02_other_file").show();
		}
		$('#uploadForm_id_02 .documentnamefield').val("").val( $('#form2_upload_id_02 option:selected').val() );
		$('#uploadForm_id_02 .nricpassportnumberfield').val("").val( $('#form2_refid').val() );						
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){

	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_id_02 .fileinputs").show();
        $("#uploadForm_id_02 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_id_02 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_02_a_file").show();
			$(".form2_uploadid_02_other_file").hide();
		}
		$('#form2_upload_id_02selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ 
 $('#form2_uploadid_03').MultiFile({ 
  list: '#form2_uploadid_03_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_03 option:selected').text());
		$('#form2_upload_id_03selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_03 option:selected').val());
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_03 option:selected').remove(); 
		$("#form2_uploadid_03_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_03 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_03 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_03_a_file").hide();
			$(".form2_uploadid_03_other_file").show();
		}

		$('#uploadForm_id_03 .documentnamefield').val("").val( $('#form2_upload_id_03 option:selected').val() );
		$('#uploadForm_id_03 .nricpassportnumberfield').val("").val( $('#form2_refid').val() );			
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_id_03 .fileinputs").show();
        $("#uploadForm_id_03 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_id_03 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_03_a_file").show();
			$(".form2_uploadid_03_other_file").hide();
		}
		$('#form2_upload_id_03selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ 
 $('#form2_uploadincome_01').MultiFile({ 
  list: '#form2_uploadincome_01_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_income_01 option:selected').text());
		$('#form2_upload_income_01selectedfile').val('').val(option_text_select);
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_income_01 option:selected').val());
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		$("#form2_uploadincome_01_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_income_01 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_income_01 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadincome_01_a_file").hide();
			$(".form2_uploadincome_01_other_file").show();
		}

		$('#uploadForm_income_01 .documentnamefield').val("").val( $('#form2_upload_income_01 option:selected').val() );
		$('#uploadForm_income_01 .nricpassportnumberfield').val("").val( $('#form2_refid').val() );						
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_income_01 .fileinputs").show();
        $("#uploadForm_income_01 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_income_01 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadincome_01_a_file").show();
			$(".form2_uploadincome_01_other_file").hide();
		}
		$('#form2_upload_income_01selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ // wait for document to load 
	 $('#form2_uploadfor_01').MultiFile({ 
	  list: '#form2_for_01_list',
	  max: 1,
	  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
	  onFileAppend: function(element, value, master_element) {
		},
	  afterFileAppend: function(element, value, master_element){
			$("#table_upload_container tr").removeClass("formFieldFocus");
			var option_text_select = ($('#form2_upload_for_01 option:selected').text());
			$('#form2_upload_for_01selectedfile').val('').val(option_text_select);
			$("#form2_for_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_for_01 option:selected').val());
			$("#form2_for_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
			$("#form2_for_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);

			$("#form2_for_01_list").show();
			if (master_element.n > master_element.max) {
	        	$("#uploadForm_for_01 .lbl_btn_upload_file").css("color","#fff");
	        	$("#uploadForm_for_01 .btn_upload_file").css("background-position","0 50px");
			} else if (master_element.n == 2) {
				$(".form2_uploadfor_01_a_file").hide();
				$(".form2_uploadfor_01_other_file").show();
			}

			$('#uploadForm_for_01 .documentnamefield').val("").val( $('#form2_upload_for_01 option:selected').val() );
			$('#uploadForm_for_01 .nricpassportnumberfield').val("").val( $('#form2_refid').val() );							
			uploadFilesCount++;
			},
		onFileRemove: function(element, value, master_element){
				
		   },
	  afterFileRemove: function(element, value, master_element){
			//alert ( master_element.n);//no of file add
			$("#uploadForm_for_01 .fileinputs").show();
	        $("#uploadForm_for_01 .lbl_btn_upload_file").css("color","#005D9A");
	        $("#uploadForm_for_01 .btn_upload_file").css("background-position","0 5px");
			if (master_element.n == 2) {
				$(".form2_uploadfor_01_a_file").show();
				$(".form2_uploadfor_01_other_file").hide();
			}
			$('#form2_upload_for_01selectedfile').val('');
			uploadFilesCount--;
	     },
	STRING: {
	   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
	  }
	  }); 
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

		},
			
		swfuploadLoaded: function(event){
			$('.log', this).append('<li>Loaded</li>');
		},
		fileQueued: function(event, file){
			$('.log', this).append('<li>File queued - '+file.name+'</li>');
			uploadFilesCount++;
			totalUploadFileSize = totalUploadFileSize+file.size;
			//console.log('Total file size: '+totalUploadFileSize);
			if( totalUploadFileSize > totalUploadFileMaxSize ) {
				$(this).swfupload('cancelUpload', file.id);
				alert('Your selected files\' size is larger than the total files\' size 5 MB, please select a smaller size file and try again.');
			} else {
				$(this).parent().parent().parent().parent().css('border','1px solid #CCCCCC');
				$(this).css('height','0px').css('z-index','-1').css('margin-left','-999px');
				$(this).parent().find('.swf_filenamelist').empty().append('<div><span style="float:left">'+file.name+'</span><a id="'+file.id+'" href="#" style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</a></div>').show();
				$('#'+file.id).click(function() {
					swfFileRemover(file.id);
				});
			}
			//console.log(file);
		},
		fileQueueError: function(event, file, errorCode, message){
			$('.log', this).append('<li>File queue error - '+message+'</li>');
			//console.log('fileQueueError',event, file, errorCode, message);
			if( message == 'File size exceeds allowed limit.' ) {
				alert('Your selected file\'s size is larger than 5 MB, please select a smaller size file and try again.');
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
				// prepare the text for preview and PDF
				//console.log( $(this).parent().parent().parent().parent().find('select option:selected').text() );
				$(this).parent().find('.swf_filenamelist').empty().hide();
				$(this).css('height','20px').css('z-index','1').css('margin-left','0');
				
				if( uploadFilesCount == 0 && totalUploadFileSize == 0) {
					// prepare the upload id for the XML
            		$.each(responseArray, function(index, value) {
                		value = jQuery.trim(value);
                		$('#uploadfile'+index+'refid').val( value );
                	});
					submit_form();
					$('#spinning-dialog').dialog('close');
					$('#completed-dialog').dialog('open');
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
					$(this).css('height','20px').css('z-index','1').css('margin-left','0');
					$(this).parent().parent().parent().parent().css('border','1px solid #CCCCCC');
					uploadFilesCount = 0;
					totalUploadFileSize = 0;
				});
			}

		},
		uploadComplete: function(event, file){
			$('.log', this).append('<li>Upload complete - '+file.name+'</li>');
			//console.log('uploadComplete',event, file);
			return false;
		},
		uploadError: function(event, file, errorCode, message){
			$('.log', this).append('<li>Upload error - '+message+'</li>');
			//console.log('uploadError',event, file, errorCode, message);			
			if( message == 'File Cancelled' ) {
				uploadFilesCount--;
				totalUploadFileSize = totalUploadFileSize - file.size;
				$(this).parent().find('.swf_filenamelist').empty().hide();
				$(this).css('height','20px').css('z-index','1').css('margin-left','0');
			} else {
				//$('#loader-image-container').empty().append('<span style="color: red;">File upload failed, please try again later. <a id="swf-closebtn" href="#">Close</a></span>');
				//$('#swf-closebtn').click(function() { swfStopUpload() });
				// replace close link on error with a pop up box

				$('#spinning-dialog').dialog('close');
				$('#error-dialog').dialog('open');
				resetUiStyle();
				// call GA
				//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '5_DocUploadFlashFailed');
				//$(".ui-dialog-titlebar").hide();
				//$('#pop-up-upload-error').css('height','258px');

				// so if upload stopped abnormally, we do the page reset 
				$('.swf_upload_file').each(function() {
					$(this).parent().find('.swf_filenamelist').empty().hide();
					$(this).css('height','20px').css('z-index','1').css('margin-left','0');
					$(this).parent().parent().parent().parent().css('border','1px solid #CCCCCC');
					uploadFilesCount = 0;
					totalUploadFileSize = 0;
				});
			}
		}
	};
	$('.swf_upload_file').bindAll(listeners);
	
	// start the queue if the queue is already disabled
	$('#check_new_credit_card_4_swf').click(function(){
		if ( !validateFileSelected() ) {
			alert("Please upload all the required documents.");
		} else {

			if( uploadFilesCount != 0) {
				$.scrollTo(0,500,{onAfter:function() {
					$('#spinning-dialog').dialog('open');
					resetUiStyle();

					responseArray = new Array();
					$('#uploadForm_multifile table.application_form').filter(':visible').each(function() {
						$(this).find('.swf_upload_file').each(function() {
							var formid = $('#formId').val();
							var nricpassportnumber = $('#form2_refid').val();

							var documentname = $(this).parent().parent().parent().parent().find('select option:selected').val();
							$(this).swfupload('addPostParam', 'formid', formid);
							$(this).swfupload('addPostParam', 'nricpassportnumber', nricpassportnumber);
							$(this).swfupload('addPostParam', 'documentname', documentname);
							$(this).swfupload('startUpload');
						});						
					});
				}});
				
			} else {

			}
		}
	});
	
});

$(function(){
	$('.swf_upload_file').each(function(){
		$(this).swfupload({
		
			upload_url: "/nfs-ofp/ofpservice.htm",
			//upload_url: "/uploadswf.php",
			
			
			file_size_limit : "5120",
			file_types : "*.jpg;*.gif;*.tif;*.pdf;*.png",
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
        title: "Please wait..."
	});
	$("#error-dialog").dialog({
        bgiframe: true,
        width: 460,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Please wait..."
	});
	
	$('#cancelUploadButton').click(function() {
		swfStopUpload();
		$('#spinning-dialog').dialog('close');
	});
	
	$('#completedUploadButton').click(function() {
		$('#completed-dialog').dialog('close');
	});
	
	$('#errorNextButton').click(function() {
		$('#error-dialog').dialog('close');
	});
	
	$('#errorTryButton').click(function() {
		$('#error-dialog').dialog('close');
	});
	
});	

function swfFileRemover( fileId ) {
	var currentSwf = $.swfupload.getInstance( $('#'+fileId).parent().parent().parent().find('.swf_upload_file') );
	currentSwf.cancelUpload( fileId );
}

function swfStopUpload() {
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
    if (window.console && window.console.log) console.log(err);
});

$(function() {

    $('#uploadForm_multifile').ajaxForm({
    	iframe: true,
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
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF02"  ) {
        	            	alert("The file uploaded exceed the allowable limit. Please ensure the file size is less than 5 MB and try again");
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF03"  ) {
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            } else if( errorcode == "EMF04"  ) {
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            }else if( errorcode == "EMF05"  ) {
        	            	alert("File upload failed, please try again later");
        	            	noerror = false;
        	            	return false;
        	            }

        			}
        		});
        		if( noerror ) {
        			var noOfRequireDocs = $('#uploadForm_id_01 .application_form, #uploadForm_id_02 .application_form, #uploadForm_id_03 .application_form, #uploadForm_income_01 .application_form, #uploadForm_for_01 .application_form').filter(':visible').length;
        			var noOfSuccessUploaded = refidarray.length;
        			if ( noOfRequireDocs != noOfSuccessUploaded ) {
        				$('#numberOfDocsUploaded').val('0');
        			} else {
        				$('#numberOfDocsUploaded').val( noOfSuccessUploaded );
        			}
        			
            		$.each(refidarray, function(index, value) {
                		value = jQuery.trim(value);
                		$('#uploadfile'+index+'refid').val( value );
                	});
					submit_form();
            		$('#spinning-dialog').dialog('close');
            		$('#completed-dialog').dialog('open');
					resetUiStyle();
        			
        		}
				
        	}
        	
        }
    });


});
})(jQuery);
	