//Tab Conrol
$(document).ready(function(){
	if ($.browser.mozilla) { // For Mozila
		//New Card : notes
		$("#form2_first_name").keypress(function (event) {
				if ( event.which  == 9 ){
					return false;
				}
			}
		);
		$("#form2_email_address").keypress(function (event) {
				if ( event.which  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-0
		$("#form2_loan_my_income").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_0, #form2_cheque_acc_no_verify, #form2_acc_holder_name").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-1
		$("#form2_name_on_card").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_1, #form2_contact_person_contact_number, #form2_overseas_contact_tel_no").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-2
		$("#form2_name_of_business, #form2_name_of_employer").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_2, #form2_employer_building_name").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-3
		$("#form2_sup_first_name").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_3, #form2_sup_address").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-4
		$("#check_new_credit_card_4").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_4, #form2_uploadsupcard_02").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-6
		$("#check_new_credit_card_6").keypress(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_6, #form2_declaration").keypress(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
	}
	
	else{ //For Other Browsers
		//New Card : notes
		$("#form2_salutation").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#form2_email_address").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				} else {
				}
			}
		);
		
		//New Card : Step-0
		$("#form2_loan_is_customer").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_0, #form2_cheque_acc_no_verify, #form2_acc_holder_name").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-1
		$("#form2_name_on_card").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_1, #form2_contact_person_contact_number, #form2_overseas_contact_tel_no").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-2
		$("#form2_nature_of_employment_salaried").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_2, #form2_mail_to_be_sent_to").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-3
		$("#form2_sup_card_yes").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_3, #form2_cc_insurance_no").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		
		//New Card : Step-4
		$("#form2_doc_upload_yes").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_4, #form2_doc_upload_no").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
				
		//New Card : Step-6
		$("#check_new_credit_card_6").keydown(function (event) {
				if ( event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);
		$("#check_new_credit_card_6, #form2_declaration").keydown(function (event) {
				if ( !event.shiftKey && event.keyCode  == 9 ){
					return false;
				}
			}
		);	
	}
	
});