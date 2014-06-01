$(document).ready(function(){
    $('.card_name').css("height","82px");
    $('#thanks_left h4').css("line-height","18px");
    $('.btn_ccform').css("margin-bottom","5px");
    $('.card_name_2line').css("height","52px");

	$('body').keypress(function(event){
	    if (event.keyCode == 10 || event.keyCode == 13) 
	        event.preventDefault();
	  });
	
	var selectedCard = jQuery.query.get("Cardtype")+"";
	var selectedGift = jQuery.query.get("GType")+"";
	/*
if( selectedCard == "" || selectedCard.length == 0 || selectedCard == null || selectedCard == "true" || selectedCard == "undefined" ) {
		$(".btn_ccform").hide();
	}
*/
	
	$.validator.addMethod("loginRegex", function(value, element) {
        return this.optional(element) || /^[a-z0-9]+$/i.test(value);
    }, "Please enter only letters, numbers.")
    
	$("#form_new_customer_office_form").validate({
  		rules: {
			staff_input_id: {required: true, loginRegex: true, minlength: 7}
  		},		
		messages: {
  			staff_input_id: {required: 'Please enter your staff ID', number: 'Your staff ID must be 7 digits', minlength: 'Your staff ID must be 7 digits'}
		},
		errorContainer: "#errorMessageBox_step0",
		errorElement: "div",
        wrapper: "div class='error_box_note'",
        errorPlacement: function(error, element) {
			if ( element.is(":radio") ) 
                error.appendTo( element.parent().next().next() ); 
            else 
                error.appendTo( element.parent().next() ); 
		}

	});
	
	$('.btn_cchyform').click(function() {
		if( $("#form_new_customer_office_form").valid() ) {
			$(this).attr('href','ezycash_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&formtype=HY');
			location.replace('ezycash_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&formtype=HY');
		}
	});
	var TGRTypeParam = "";
	var TGRType = jQuery.query.get("TGRType")+"";
	if( TGRType != "" && TGRType.length != 0 && TGRType != null && TGRType != "true" && TGRType != "undefined" && TGRType != "#" ) {
		TGRTypeParam = "&TGRType="+TGRType;
	}
	
	var GTypeParam = "";
	
	$('.btn_ccform, .apply-now').click(function() {
		if( $("#form_new_customer_office_form").valid() ) {
		    if( $(this).hasClass('SG_MPC') ) {
		        selectedCard = 'SG_MPC';
    	    } else if( $(this).hasClass('SG_SPC') ) {
		        selectedCard = 'SG_SPC';
    	    } else if( $(this).hasClass('SG_PVC') ) {
		        selectedCard = 'SG_PVC';
    	    } else if( $(this).hasClass('SG_PMC') ) {
		        selectedCard = 'SG_PMC';
    	    } else if( $(this).hasClass('SG_BPC') ) {
		        selectedCard = 'SG_BPC';
    	    } else if( $(this).hasClass('SG_PPC') ) {
		        selectedCard = 'SG_PPC';
    	    } else if( $(this).hasClass('SG_NA') ) {
		        selectedCard = 'SG_NA';
    	    } else if( $(this).hasClass('SG_PVC_TGR_FR') ) {
		        selectedCard = 'SG_PVC_TGR';
    	    } else if( $(this).hasClass('SG_PVC_TGR_URR') ) {
		        selectedCard = 'SG_PVC_TGR';
        		TGRTypeParam = "&TGRType=URR";
    	    }
    	    // check gift
    	    if( $(this).hasClass('GIFT_5303') ) {
        	    GTypeParam = "&GType=5303";
    	    } else if( $(this).hasClass('GIFT_5301') ) {
        	    GTypeParam = "&GType=5301";
    	    }
    	    
			$(this).attr('href','credit_card_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&Cardtype='+selectedCard+TGRTypeParam+GTypeParam);
			location.replace('credit_card_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&Cardtype='+selectedCard+TGRTypeParam+GTypeParam);        	    

		}
	});
	$('.btn_coform').click(function() {
		if( $("#form_new_customer_office_form").valid() ) {
			$(this).attr('href','cashone_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA');
			location.replace('cashone_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA');
		}
	});
});

