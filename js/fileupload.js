(function($) {
	
$.fn.ajaxSubmit.debug = true;

$(document).ajaxError(function(ev,xhr,o,err) {
    //alert(xhr);
	//alert("File upload failed, please try again");
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
        			if( errorcode == "EMF01" || errorcode == "EMF02" || errorcode == "EMF03" || errorcode == "EMF04" ) {
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
        	            }

        			}
        		});
        		if( noerror ) {
        			var noOfRequireDocs = $('#uploadForm_id_01 .application_form, #uploadForm_id_02 .application_form, #uploadForm_id_03 .application_form, #uploadForm_id_04 .application_form, #uploadForm_income_01 .application_form, #uploadForm_income_02 .application_form, #uploadForm_supcard_01 .application_form, #uploadForm_supcard_02 .application_form').filter(':visible').length;
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
            		$('#spinning-dialog').dialog('close');
            		$('#completed-dialog').dialog('open');
					resetUiStyle();
					
					/*
            		$.scrollTo(0,500,{onAfter:function() {
	            		$("#lbl_form2_doc_upload").hide();
	    				//$("#form_new_customer_credit_cards_4 .next").click();
	    				//$("#new_credit_card .tabs li").removeClass("selected");
	    				$("#new_credit_card .bc6").addClass("selected");
	    				$("#new_credit_card .breadcrumb").removeClass("step_3").addClass("step_5");
	    				$("#coda-slider-2 .panel06").addClass("selected-panel");
	    				$("#coda-slider-2 .panel04").removeClass("selected-panel");
	    				$(".form2_header_personal").hide();
	    				$(".form2_header_employment").hide();
	    				$(".form2_header_vas").hide();
	    				$(".form2_header_documents").hide();
	    				$(".form2_header_review").show();
	    				$("#form2_upload_next_back .next").click();
            		}});
            		*/
        			
        		}
				
        	}
        	
        }
    });


});

})(jQuery);

function executeUpload() {
	$('#uploadForm_multifile').submit();
	$('#form2_upload_file_list').val('');
	$('#form2_upload_file_list_preview').val('');
	
	$('.selectedfile').each(function() {
		if( $(this).val() != '' ) {
			$('#form2_upload_file_list').val( $(this).val()+'\n'+$('#form2_upload_file_list').val() );
			$('#form2_upload_file_list_preview').val( $(this).val()+'<br>'+$('#form2_upload_file_list_preview').val() );
		}
	});
	

}







