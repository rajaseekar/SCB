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
			resizeSlider();
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
			if( serverData != "EMF01" && serverData != "EMF02" && serverData != "EMF03" && serverData != "EMF04" ) {
				responseArray.push(serverData);
				uploadFilesCount--;
				totalUploadFileSize = totalUploadFileSize - file.size;
				// prepare the text for preview and PDF
				//console.log( $(this).parent().parent().parent().parent().find('select option:selected').text() );
				$('#form2_upload_file_list').val( '- '+$(this).parent().parent().parent().parent().find('select option:selected').text()+'\n'+$('#form2_upload_file_list').val() );
				$('#form2_upload_file_list_preview').val( $(this).parent().parent().parent().parent().find('select option:selected').text()+'<br>'+$('#form2_upload_file_list_preview').val() );
				$(this).parent().find('.swf_filenamelist').empty().hide();
				$(this).css('height','20px').css('z-index','1').css('margin-left','0');
				
				if( uploadFilesCount == 0 && totalUploadFileSize == 0) {
					if ($("#form2_upload_file_list_preview").val() == "" ) {
						var form2_upload_file_list = "No";
					} else {
						var form2_upload_file_list = $("#form2_upload_file_list_preview").val();
					}
					$("#pre_form2_upload_file_list").html(form2_upload_file_list);

					// prepare the upload id for the XML
            		$.each(responseArray, function(index, value) {
                		value = jQuery.trim(value);
                		$('#uploadfile'+index+'refid').val( value );
                	});
					$('#spinning-dialog').dialog('close');
					$('#completed-dialog').dialog('open');
					resetUiStyle();
					
					// call GA
					//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '5_DocUploadFlashSuccess');
					
					//$(".ui-dialog-titlebar").hide();
					//$('#pop-up-upload-completed').css('height','258px');
					//nextPage();
					/*
            		$.scrollTo(0,500,{onAfter:function() {
	            		$("#lbl_form2_doc_upload").hide();
						$("#new_credit_card .bc6").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
						$("#coda-slider-2 .panel06").addClass("selected-panel");
						$("#coda-slider-2 .panel04").removeClass("selected-panel");
						$(".form2_header_loan").hide();
						$(".form2_header_personal").hide();
						$(".form2_header_employment").hide();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").show();					
						$("#form2_upload_next_back .next").click();
            		}});
            		*/
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
				}
				
				$('#form2_upload_file_list').val('');
				$('#form2_upload_file_list_preview').val('');
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
				$('#form2_upload_file_list').val('');
				$('#form2_upload_file_list_preview').val('');
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
		if ( $("#form_new_customer_credit_cards_4").valid() ) {
			$('#form2_upload_file_list').val('');
			$('#form2_upload_file_list_preview').val('');
			if ($("#form2_upload_file_list_preview").val() == "" ) {
				var form2_upload_file_list = "No";
			} else {
				var form2_upload_file_list = $("#form2_upload_file_list_preview").val();
			}
			$("#pre_form2_upload_file_list").html(form2_upload_file_list);

			if( uploadFilesCount != 0 && $("input[name='form2_doc_upload']:checked").val() == "Yes") {
				var numberOfRequireDoc = $('#uploadForm_multifile table.application_form').filter(':visible').length;
				if( numberOfRequireDoc != uploadFilesCount ) {
					$('#uploadForm_multifile table.application_form').filter(':visible').each(function() {
						var currentActiveFileInput = $(this).find('.swf_filenamelist').filter(':visible').length;
						if( currentActiveFileInput == 0 ) {
							$(this).css('border','1px solid red');
						}
					});
					var r=confirm("You have not selected the documents highlighted in red. Click Cancel to upload those before proceeding with your application.\n\nIf you do not have these documents at the moment, please click OK to proceed with the application and send the documents via alternate channels within 7 working days upon submission of this application.");
					if(r==true) {
						$.scrollTo(0,500,{onAfter:function() {
							$('#spinning-dialog').dialog('open');
							resetUiStyle();
							//$(".ui-dialog-titlebar").hide();
							//$('#spinning-dialog').dialog( "option", "height", 304 );
							//$('.upload-msg-two').show();
							//$('#loader-image-container').empty().append('<img src="images/ajax-loader.gif" alt="" />');
							//$('#pop-up-upload').css('height','277px');
							// proceed to upload even not all doc uploaded
							// prepare all the post data and call the "swf startUpload"
							responseArray = new Array();
							$('#uploadForm_multifile table.application_form').filter(':visible').each(function() {
								$(this).find('.swf_upload_file').each(function() {
									var formid = $('#formId').val();
									
									var nricpassportnumber = "";
									if( $('#form2_nationality_non_singaporean').is(':checked') ) {
										nricpassportnumber = $('#form2_passport_number').val();
									} else {
										nricpassportnumber = $('#form2_nric_number').val();
									}
									var documentname = $(this).parent().parent().parent().parent().find('select option:selected').val();
									$(this).swfupload('addPostParam', 'formid', formid);
									$(this).swfupload('addPostParam', 'nricpassportnumber', nricpassportnumber);
									$(this).swfupload('addPostParam', 'documentname', documentname);
									$(this).swfupload('startUpload');
								});
							});
						}});
						
					}
					
				} else {
					$.scrollTo(0,500,{onAfter:function() {
						$('#spinning-dialog').dialog('open');
						resetUiStyle();
						//$(".ui-dialog-titlebar").hide();
						//$('#spinning-dialog').dialog( "option", "height", 304 );
						//$('.upload-msg-two').show();
						//$('#loader-image-container').empty().append('<img src="images/ajax-loader.gif" alt="" />');
						//$('#pop-up-upload').css('height','277px');
						// proceed to upload with all docs queued
						// prepare all the post data and call the "swf startUpload"						
						responseArray = new Array();
						$('#uploadForm_multifile table.application_form').filter(':visible').each(function() {
							$(this).find('.swf_upload_file').each(function() {
								var formid = $('#formId').val();
								var nricpassportnumber = "";
								if( $('#form2_nationality_non_singaporean').is(':checked') ) {
									nricpassportnumber = $('#form2_passport_number').val();
								} else {
									nricpassportnumber = $('#form2_nric_number').val();
								}
								var documentname = $(this).parent().parent().parent().parent().find('select option:selected').val();
								$(this).swfupload('addPostParam', 'formid', formid);
								$(this).swfupload('addPostParam', 'nricpassportnumber', nricpassportnumber);
								$(this).swfupload('addPostParam', 'documentname', documentname);
								$(this).swfupload('startUpload');
							});						
						});
					}});

				}
				
			} else {
				//$('#uploadForm_multifile table.application_form').filter(':visible').css('border','1px solid red');
				//var r=confirm("Would you like to proceed with your application without uploading the required documents and provide these to us within 7 days upon submission of this application?");
				//if(r==true) {
					// ok, go to next without doc upload
					// clear all stored value if user select no doc upload
					$('.swf_upload_file').each(function() {
						$(this).parent().find('.swf_filenamelist').empty().hide();
						$(this).css('height','20px').css('z-index','1').css('margin-left','0');
						$(this).parent().parent().parent().parent().css('border','1px solid #CCCCCC');
						uploadFilesCount = 0;
						totalUploadFileSize = 0;
					});
					nextPage();
					/*
					$("#lbl_form2_doc_upload").hide();
					$.scrollTo(0,500,{onAfter:function() {
						$("#new_credit_card .bc6").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
						$("#coda-slider-2 .panel06").addClass("selected-panel");
						$("#coda-slider-2 .panel04").removeClass("selected-panel");
						$(".form2_header_loan").hide();
						$(".form2_header_personal").hide();
						$(".form2_header_employment").hide();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").show();					
						$("#form2_upload_next_back .next").click();
					}});
					*/
				//}
			}
		}
		resizeSlider();
	});
	
});

$(function(){
	$('.swf_upload_file').each(function(){
		$(this).swfupload({
			upload_url: "/FormProcessor/FormReceiverAttchServlet",
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
		//swfStopUpload();
		$('#spinning-dialog').dialog('close');
	});
	
	$('#completedUploadButton').click(function() {
		$('#completed-dialog').dialog('close');
		nextPage();
	});
	
	$('#errorNextButton').click(function() {
		$('#error-dialog').dialog('close');
		nextPage();
	});
	
	$('#errorTryButton').click(function() {
		$('#error-dialog').dialog('close');
	});

	//$('#spinning-dialog').dialog('open');
	//$('#completed-dialog').dialog('open');
	//$('#error-dialog').dialog('open');
	//resetUiStyle();
	
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

function nextPage() {
	$("#lbl_form2_doc_upload").hide();
	$.scrollTo(0,500,{onAfter:function() {
		$("#new_credit_card .bc6").addClass("selected");
		$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
		$("#coda-slider-2 .panel06").addClass("selected-panel");
		$("#coda-slider-2 .panel04").removeClass("selected-panel");
		$(".form2_header_loan").hide();
		$(".form2_header_personal").hide();
		$(".form2_header_employment").hide();
		$(".form2_header_vas").hide();
		$(".form2_header_documents").hide();
		$(".form2_header_review").show();					
		$("#form2_upload_next_back .next").click();
	}});
}

function resetUiStyle() {
	$(".ui-dialog-titlebar").hide();
	$('.ui-widget-content').css('background','none repeat scroll 0 0 transparent');
	$('.ui-widget-content').css('border','0px solid #A6C9E2');

}

