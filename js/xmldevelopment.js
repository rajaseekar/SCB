function generateForm() {
		if ($("input[name='form2_nature_of_employment']:checked").val() == "Salaried"){
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip.html">');
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip.html">');
 			} else {
 				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_f.html">');
			}
		} else {
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_ss.html">');
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_ss.html">');
			} else {
				$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/credit_card_form_thankyou_aip_fs.html">');
			}
		}

	$('#hiddenForm').append('<input type="hidden" name="formXSD" value="FALSE">');
	$('#hiddenForm').append('<input type="hidden" name="Form_ID" value="SGCCEN">');
	
	$('select').each(function() {
		$('#hiddenForm').append('<input id="'+$(this).attr('id')+'_text" name="'+$(this).attr('name')+'_text" type="hidden" value="'+$(this).find('option:selected').text()+'"/>');
		if ( $('#'+$(this).attr('id')+'_text').val().toUpperCase() == "PLEASE SELECT") { $('#'+$(this).attr('id')+'_text').attr("value","") }
	});
	
	//$('#residentail_address').val( $('#residentail_address').val() + " " + $('#country_code_home').val() + " " + $('#form2_postal_code').val() );
	$('#form_notes_information input:text, #form_notes_information select, #form_notes_information textarea, #form_notes_information input:radio, #form_notes_information input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});	
	$('#form_new_customer_credit_cards_1 input:text, #form_new_customer_credit_cards_1 select, #form_new_customer_credit_cards_1 textarea, #form_new_customer_credit_cards_1 input:radio, #form_new_customer_credit_cards_1 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards_2 input:text, #form_new_customer_credit_cards_2 select, #form_new_customer_credit_cards_2 textarea, #form_new_customer_credit_cards_2 input:radio, #form_new_customer_credit_cards_2 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards_3 input:text, #form_new_customer_credit_cards_3 select, #form_new_customer_credit_cards_3 textarea, #form_new_customer_credit_cards_3 input:radio, #form_new_customer_credit_cards_3 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards_4 input:text, #form_new_customer_credit_cards_4 select, #form_new_customer_credit_cards_4 textarea, #form_new_customer_credit_cards_4 input:radio, #form_new_customer_credit_cards_4 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards_5 input:text, #form_new_customer_credit_cards_5 select, #form_new_customer_credit_cards_5 textarea, #form_new_customer_credit_cards_5 input:radio, #form_new_customer_credit_cards_5 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards_6 input:text, #form_new_customer_credit_cards_6 select, #form_new_customer_credit_cards_6 textarea, #form_new_customer_credit_cards_6 input:radio, #form_new_customer_credit_cards_6 input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});
	$('#form_new_customer_credit_cards input:text, #form_new_customer_credit_cards select, #form_new_customer_credit_cards textarea, #form_new_customer_credit_cards input:radio, #form_new_customer_credit_cards input:checkbox').each(function() {
		if( $(this).attr('type') == 'radio' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="radio" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') == 'checkbox' && $(this).attr('checked') == true ) {
			$('#hiddenForm').append('<input id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" type="checkbox" value="'+$(this).attr('value')+'" checked="'+$(this).attr('checked')+'" />');
		} else if( $(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'  ) {
			$('#hiddenForm').append( $(this) );
		}
		generatePdfFields( $(this) );
	});

	//$('#form2_product_select').val('');

	/*
	if ($("#card_1").attr("checked")) {
		$('#form2_product_select').val('Platinum Card Visa');
	}
	if ($("#card_2").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Platinum Card MasterCard');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and MasterCard Platinum Card' );
	}
	if ($("#card_3").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Business Platinum Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and Business Platinum Card' );
	}
	if ($("#card_4").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('NUS Alumni Platinum Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and NUS Alumni Platinum Card' );
	}
	if ($("#card_5").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Prudential Platinum Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and Prudential Platinum Card' );
	}
	if ($("#card_6").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Manhattan Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and Manhattan Platinum Card' );
	}
	if ($("#card_7").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Manhattan Platinum Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and Manhattan Platinum Card' );
	}
	if ($("#card_9").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('NUS $500 Credit Card');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and NUS $500 Credit Card' );
	}
	if ($("#card_10").attr("checked")) {
		//if( $('#form2_product_select').val() == '' )
		$('#form2_product_select').val('Preferred World MasterCard');
		//else	
		//	$('#form2_product_select').val( $('#form2_product_select').val()+' and Preferred World MasterCard' );
	}
	*/


	$('#hiddenForm').append('<input type="hidden" id="form2_ref_id" name="form2_ref_id">');
	$('#form2_ref_id').val( $('#form2_refrence').val() );

	today = new Date();

	$('#hiddenForm').append('<input type="hidden" id="form2_application_date" name="form2_application_date">');
	$('#form2_application_date').val( 'Application Date: ' + dateFormat(today, "d mm yyyy") );

	$('#hiddenForm').append('<input type="hidden" id="form2_full_name" name="form2_full_name">');
	$('#form2_full_name').val( $('#form2_salutation').val()+' '+$('#form2_first_name').val()+' '+$('#form2_name').val() );

	//$('#hiddenForm').append('<input type="hidden" id="form2_residential" name="form2_residential">');
	//$('#form2_residential').val( $('#form2_areacode_residential').val()+' '+$('#form2_residential').val() );
	
	//$('#hiddenForm').append('<input type="hidden" id="form2_mobile" name="form2_mobile">');
	//$('#form2_mobile').val( $('#form2_areacode_mobile').val()+' '+$('#form2_mobile').val() );

	//$('#hiddenForm').append('<input type="hidden" id="form2_office" name="form2_office">');
	//$('#form2_office').val( $('#form2_areacode_office').val()+' '+$('#form2_office').val() );
	
	$('#form2_contact_person_contact_number').val( $('#form2_contact_person_contact_number').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_oversea_phone_number" name="form2_oversea_phone_number">');
	$('#form2_oversea_phone_number').val( $('#form2_overseas_contact_country_code').val()+' '+$('#form2_overseas_contact_area_code').val()+' '+$('#form2_overseas_contact_tel_no').val() );

	if ($('#form2_unit_number').val() == undefined || $('#form2_unit_number').val() == "N.A") {
		$('#form2_unit_number').val("");
	}		

	if ($('#form2_employer_unit_number').val() == undefined || $('#form2_employer_unit_number').val() == "N.A") {
		$('#form2_employer_unit_number').val("");
	}		

	$('#hiddenForm').append('<input type="hidden" id="form2_home_address1" name="form2_home_address1">');
	$('#form2_home_address1').val( $('#form2_block_number').val()+' '+$('#form2_unit_number').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_home_address2" name="form2_home_address2">');
	$('#form2_home_address2').val( $('#form2_street_name').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_home_address3" name="form2_home_address3">');
	$('#form2_home_address3').val( $('#form2_building_name').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_home_address4" name="form2_home_address4">');
	$('#form2_home_address4').val( $('#country_code_home :selected').text()+' '+$('#form2_postal_code').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_business_address1" name="form2_business_address1">');
	$('#form2_business_address1').val( $('#form2_employer_block_number').val()+' '+$('#form2_employer_unit_number').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_business_address2" name="form2_business_address2">');
	$('#form2_business_address2').val( $('#form2_employer_street_name').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_business_address3" name="form2_business_address3">');
	$('#form2_business_address3').val( $('#form2_employer_building_name').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_business_address4" name="form2_business_address4">');
	$('#form2_business_address4').val( $('#country_code_emp :selected').text()+' '+$('#form2_employer_postal_code').val() );

	//$('#hiddenForm').append('<input type="hidden" id="form2_insurance_apply" name="form2_insurance_apply">');
	//$('#form2_insurance_apply').val("Yes");

		//var form2_insurance_apply = "";
		//	if ($("input[name='form2_cc_insurance']:checked").val() == "Yes") { form2_insurance_apply = 'Yes'; } else { form2_insurance_apply = 'No'; }
	//$('#hiddenForm').append('<input type="hidden" id="form2_insurance_apply" name="form2_insurance_apply">');
	//$('#form2_insurance_apply').val(form2_insurance_apply);

		var form2_mail_to_be_sent_to = "";
	if( $('#form2_mail_to_be_sent_to').is(':checked') ) { form2_mail_to_be_sent_to = 'Office address'; } else { form2_mail_to_be_sent_to = 'Home address'; }
	$('#hiddenForm').append('<input type="hidden" id="form2_mail_to_be_sent_to_text" name="form2_mail_to_be_sent_to_text">');
	$('#form2_mail_to_be_sent_to_text').val(form2_mail_to_be_sent_to);

	$('#hiddenForm').append('<input type="hidden" id="form2_sup_full_name" name="form2_sup_full_name">');
	$('#form2_sup_full_name').val( $('#form2_sup_salutation').val()+' '+$('#form2_sup_first_name').val()+' '+$('#form2_sup_middle_name').val()+' '+$('#form2_sup_name').val() );

	$('#hiddenForm').append('<input type="hidden" id="form2_doc_upload_list" name="form2_doc_upload_list">');
	$('#hiddenForm').append('<input type="hidden" id="form2_doc_upload_request" name="form2_doc_upload_request">');
	if ($('#form2_upload_file_list').val() == '') {
		$('#form2_doc_upload_list').val( "" );
		$('#form2_doc_upload_request').val( "No" );
	} else {
		$('#form2_doc_upload_list').val( $('#form2_upload_file_list').val() );
		$('#form2_doc_upload_request').val( "Yes" );
	}


// Bank Info
	
	$('#hiddenForm').append('<input type="hidden" id="selectedForms" name="selectedForms" value="sgccenaip" >');
	setTimeout(function(){
		document.hiddenForm.submit();
	}, 1000);
	
}

function callback(obj){
	//alert('UUID: '+obj.uuid);
	//$('#form2_ipaddress_temp').val( obj.ip );
}

$(document).ready(function(){
	$('input:text').mousemove(function(){
		return false;
	});
	//display_none(); disable the hide function, otherwise IE cannot show the card images
	$('#form2_upload_file_list').val('');
	//$('body').append('<div style="display: none;"><form id="hiddenForm" name="hiddenForm" method="post" action="https://apps.mykorn.com/FormProcessor/ThankYouRedirect"></form></div>');
	$('body').append('<div style="display: none;"><form id="hiddenForm" name="hiddenForm" method="post" action="https://apps1.standardchartered.com/FormProcessor/ThankYouRedirect"></form></div>');
	//$('body').append('<div style="display: none;"><form id="hiddenForm" name="hiddenForm" method="post" action="http://10.20.218.168/FormProcessor/ThankYouRedirect"></form></div>');
	//$('body').append('<div style="display: none;"><form id="hiddenForm" name="hiddenForm" method="post" action="/FormProcessor/ThankYouRedirect"></form></div>');
	$('#hiddenForm').append('<input type="hidden" name="FormRefID" id="FormRefID">');
	$('#hiddenForm').append('<input type="hidden" name="FormRefID_AIP" id="FormRefID_AIP">');
	$('#hiddenForm').append('<input type="hidden" name="selectedCard" id="selectedCard">');
	//$('#hiddenForm').append('<input type="hidden" name="formId" id="formId" value="SGR49">'); // prod
	//$('#hiddenForm').append('<input type="hidden" name="formId" id="formId" value="SGR472">'); // AIP SIT
	$('#hiddenForm').append('<input type="hidden" name="formId" id="formId" value="SGR481">'); // AIP PROD
	$('.formidfield').val( $('#formId').val() );
	$('#hiddenForm').append('<input type="hidden" name="numberOfDocsUploaded" id="numberOfDocsUploaded">');
	$('#hiddenForm').append('<input type="hidden" id="form2_product_select" name="form2_product_select">');
	$('#hiddenForm').append('<input type="hidden" id="subChanCode" name="subChanCode">');
	subChanCode = jQuery.query.get("subChanCode")+'';
	if( subChanCode != "" && subChanCode != "true" && subChanCode != "undefined" ) {
		subChanCode = subChanCode.substr(0, 4);
	} else {
		subChanCode = "IB03";
	}
	$('#subChanCode').val( subChanCode );

	$('.sc_mpc_text').hide();
	$('.sc_mpc').hide();
	$(".sc_platinum_mastercard_text").hide();
	$(".sc_platinum_mastercard").hide();
	$(".sc_platinum_visa_card_text").hide();
	$(".sc_platinum_visa_card").hide();
	$(".business_platinum_card_text").hide();
	$(".business_platinum_card").hide();
	$(".nus_alumni_platinum_card_text").hide();
	$(".nus_alumni_platinum_card").hide();
	$(".prudential_platinum_card_text").hide();
	$(".prudential_platinum_card").hide();
	$(".manhattan_platinum_card_text").hide();
	$(".manhattan_platinum_card").hide();
	$('.sc_nus_text').hide();
	$('.sc_nus').hide();
	$('.sc_wmc_text').hide();
	$('.sc_wmc').hide();

	var selectedCard = jQuery.query.get("Cardtype");
	$('#selectedCard').val('').val(selectedCard);

	if( selectedCard != '' || selectedCard.length != 0 ) {
		if ( selectedCard == 'SG_MPC') {
			$('#card_7').attr('checked','checked');
			$('.sc_mpc_text').show();
			$('.sc_mpc').show();
			//$('#note_selected_card').append('<img class="reflect" src="images/cards/manhattan_plat_front.jpg" />');
			$('#note_selected_card').append('<img class="reflect" src="images/cards/manhattan-2012-front.jpg" />');
			//$('.selected_card_name').append('Manhattan Platinum Card');
			$('.selected_card_name').append('Manhattan World Mastercard');
			//$('#side_selected_card').append('<img class="reflect" src="images/cards/manhattan_plat_side.jpg" />');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/manhattan-2012-side.jpg" />');
			//$('#form2_product_select').val('Manhattan Platinum Card');
			$('#form2_product_select').val('Manhattan World Mastercard');
		} else if ( selectedCard == 'SG_PVC') {
			$('#card_1').attr('checked','checked');
			$('.sc_platinum_mastercard_text').show();
			$('.sc_platinum_mastercard').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/platinum-visa_front.jpg" />');
			$('.selected_card_name').append('Platinum Card Visa');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/platinum-visa_side.jpg" />');
			$('#form2_product_select').val('Platinum Card Visa');
			var URType = jQuery.query.get("URType");
			if( URType == "PVCU0001" || URType == "PVCU0005" || URType == "PVCU0006" ){
				$('#selected_cards').find('h4').css('padding','0 0 10px 9px');
				$('.selected_card_name').empty().append('Platinum Card Visa (Upfront Rewards)').css('line-height','18px');
				if( URType == "PVCU0001" ) {
					$('.upfront_msg_0001').show();
				} else if( URType == "PVCU0005" ) {
					$('.upfront_msg_0005').show();
				} if( URType == "PVCU0006" ) {
					$('.upfront_msg_0006').show();
				}
			}
		} else if ( selectedCard == 'SG_PMC') {
			$('#card_2').attr('checked','checked');
			$('.sc_platinum_visa_card_text').show();
			$('.sc_platinum_visa_card').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/Platinum-master_front.jpg" />');
			$('.selected_card_name').append('Platinum Card MasterCard');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/Platinum-master_side.jpg" />');
			$('#form2_product_select').val('Platinum Card MasterCard');
			var URType = jQuery.query.get("URType");
			if( URType == "PMCU0001" || URType == "PMCU0005" || URType == "PMCU0006" ){
				$('#selected_cards').find('h4').css('padding','0 0 10px 9px');
				$('.selected_card_name').empty().append('Platinum Card MasterCard (Upfront Rewards)').css('line-height','18px');
				if( URType == "PMCU0001" ) {
					$('.upfront_msg_0001').show();
				} else if( URType == "PMCU0005" ) {
					$('.upfront_msg_0005').show();
				} if( URType == "PMCU0006" ) {
					$('.upfront_msg_0006').show();
				}
			}
		} else if ( selectedCard == 'SG_BPC') {
			$('#card_3').attr('checked','checked');
			$('.business_platinum_card_text').show();
			$('.business_platinum_card').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/business-platinum_front.jpg" />');
			$('.selected_card_name').append('Business Platinum Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/business-platinum_side.jpg" />');
			$('#form2_product_select').val('Business Platinum Card');
		} else if ( selectedCard == 'SG_NA') {
			$('#card_4').attr('checked','checked');
			$('.nus_alumni_platinum_card_text').show();
			$('.nus_alumni_platinum_card').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/NUS-PLatinum-Silver_front.jpg" />');
			$('.selected_card_name').append('NUS Alumni Platinum Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/NUS-PLatinum-Silver_side.jpg" />');
			$('#form2_product_select').val('NUS Alumni Platinum Card');
		} else if ( selectedCard == 'SG_PPC') {
			$('#card_5').attr('checked','checked');
			$('.prudential_platinum_card_text').show();
			$('.prudential_platinum_card').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/PruPlatVisa_front.jpg" />');
			$('.selected_card_name').append('Prudential Platinum Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/PruPlatVisa_side.jpg" />');
			$('#form2_product_select').val('Prudential Platinum Card');
		} else if ( selectedCard == 'SG_MC') {
			$('#card_6').attr('checked','checked');
			$('.manhattan_platinum_card_text').show();
			$('.manhattan_platinum_card').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/Manhattan_front.jpg" />');
			$('.selected_card_name').append('Manhattan Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/manhattan_side.jpg" />');
			$('#form2_product_select').val('Manhattan Card');
		} else if ( selectedCard == 'SG_NUS') {
			$('#card_9').attr('checked','checked');
			$('.sc_nus_text').show();
			$('.sc_nus').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/nus500_front.jpg" />');
			$('.selected_card_name').append('NUS $500 Credit Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/nus500_side.jpg" />');
			$('#form2_product_select').val('NUS $500 Credit Card');
		} else if ( selectedCard == 'SG_WMC') {
			$('#card_10').attr('checked','checked');
			$('.sc_wmc_text').show();
			$('.sc_wmc').show();
			$('#note_selected_card').append('<img class="reflect" src="images/cards/PrFCard_front.jpg" />');
			$('.selected_card_name').append('Preferred World MasterCard');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/PrFCard_side.jpg" />');
			$('#form2_product_select').val('Preferred World MasterCard');
			var URType = jQuery.query.get("URType");
			if( URType == "WMCU0001" || URType == "WMCU0004" || URType == "WMCU0005" ){
				$('#selected_cards').find('h4').css('padding','0 0 10px 9px');
				$('.selected_card_name').empty().append('Preferred World MasterCard (Upfront Rewards)').css('line-height','18px');
				if( URType == "WMCU0001" ) {
					$('.upfront_msg_0001').show();
				} else if( URType == "WMCU0004" ) {
					$('.upfront_msg_0004').show();
				} if( URType == "WMCU0005" ) {
					$('.upfront_msg_0005').show();
				}
			}
		} else if ( selectedCard == 'SG_PVC_TGR') {
			var TGRCardName = "";
			var TGRType = jQuery.query.get("TGRType");
			if( TGRType == "UR" ) {
				TGRCardName = "Tigerair Platinum Credit Card (Upfront Rewards)";
			} else if( TGRType == "URR" ) {
				TGRCardName = "Tigerair Platinum Credit Card (Upfront Rewards)";
			} else {
				TGRCardName = "Tigerair Platinum Credit Card (Future Rewards)";
			}
			$('#card_11').attr('checked','checked');
			$('#note_selected_card').append('<img class="reflect" src="images/cards/platinum-visa_front-tiger.jpg" />');
			$('.notes_selected_product_name .selected_card_name').append('<span style="font-size: 19px;">'+TGRCardName+'</span>');
			$('#selected_cards .selected_card_name').append('<span style="font-size: 13px;line-height: 15px;"><br/>'+TGRCardName+'</span>');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/platinum-visa_side-tiger.jpg" />');
			$('#form2_product_select').val(TGRCardName);
			$('#declarationmsg').hide();
			$('#declarationmsg-tiger').show();
		} else if ( selectedCard == 'SG_SPC') {
			$('#note_selected_card').append('<img class="reflect" src="images/cards/SingPost_front.jpg" />');
			$('.selected_card_name').append('SingPost Platinum Visa Credit Card');
			$('#side_selected_card').append('<img class="reflect" src="images/cards/SingPost_side.jpg" />');
			$('#form2_product_select').val('SingPost Platinum Visa Credit Card');
			var URType = jQuery.query.get("URType");
			if( URType == "SPCU0001" || URType == "SPCU0004" || URType == "SPCU0005" ){
				$('#selected_cards').find('h4').css('padding','0 0 10px 9px');
				$('.selected_card_name').empty().append('SingPost Platinum Visa Credit Card (Upfront Rewards)').css('line-height','18px');
				if( URType == "SPCU0001" ) {
					$('.upfront_msg_0001').show();
				} else if( URType == "SPCU0004" ) {
					$('.upfront_msg_0004').show();
				} if( URType == "SPCU0005" ) {
					$('.upfront_msg_0005').show();
				}
			}
			$("#normal_declaration").hide();
			$("#singpost_declaration").show();

		}
		//$(".check_landing_page").click();
		display_notes_page();
			$("#note_selected_card img").reflect();
			$("#side_selected_card img").reflect();
	} else {
		display_landing_page();
	}

	//display_landing_page();
	
});

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

		