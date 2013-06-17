$(document).ready(function(){
	var selectedCard = jQuery.query.get("Cardtype")+"";
	if( selectedCard == "" || selectedCard.length == 0 || selectedCard == null || selectedCard == "true" || selectedCard == "undefined" ) {
		$(".btn_ccform").hide();
	}
	
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
	$('.btn_ccform').click(function() {
		if( $("#form_new_customer_office_form").valid() ) {
			$(this).attr('href','credit_card_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&Cardtype='+selectedCard);
			location.replace('credit_card_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA&Cardtype='+selectedCard);
		}
	});
	$('.btn_coform').click(function() {
		if( $("#form_new_customer_office_form").valid() ) {
			$(this).attr('href','cashone_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA');
			location.replace('cashone_form_swf.html?dsaStaffId='+$('#staff_input_id').val()+'&inputmode=DSA');
		}
	});
});

