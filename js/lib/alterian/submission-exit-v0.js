// JavaScript Document

window.onbeforeunload = function() {
	// If there is no completed/sucesss message...
	if ($('.newcard_receipt').html() == "")
	{
		// If either email address or mobile number is filled
		if ($('#form2_email_address').val() != "" && $('#form2_mobile').val() != "")
		{
			$.ajax({
				type: "GET",
				url: 'http://tbwa-group.com.sg/scb/data-capture.php?form=cards&salutation='+$('#form2_salutation').val()+'&namefirst='+$('#form2_first_name').val()+'&namemiddle='+$('#form2_middle_name').val()+'&namelast='+$('#form2_name').val()+'&mobile='+$('#form2_areacode_mobile').val()+'-'+$('#form2_mobile').val()+'&email='+$('#form2_email_address').val(),
				dataType: 'json',
				timeout: 10000,
				error: function(){},
				success: function(){}
			});	
		}
		return "";
	}
};