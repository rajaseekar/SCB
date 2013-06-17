/* You may give each page an identifying name, server, and channel on
the next lines. */
var pageNameString = "co";

if(s){
	s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step1";
	s.eVar25="cashoneform";
	s.events="event43";
	s.products="Loans;CashOne";
}

$(document).ready(function(){
	if(s){
		$('#form2_loaddetails_next_back .btn_back').bind('click', function(){ 
			s.manageVars('clearVars');
			s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step1";
			s.events="event43";
			s.products="Loans;CashOne";
			s.eVar25="cashone";
			s.t();
			return false;
		});
		$('#check_notes_page, #form2_peronal_next_back .btn_back').bind('click', function(){
			if( $("#form_notes_information").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step2";
				s.events="event32";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();	
			}
			return false;
		});	
		$('#check_new_credit_card_0, #form2_office_next_back .btn_back').bind('click', function(){
			if( $("#form_new_customer_credit_cards_0").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step3";
				s.events="event33";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();				
			}
			return false;
		});
		$('#check_new_credit_card_1, #form2_addoption_next_back .btn_back').bind('click', function(){
			if( $("#form_new_customer_credit_cards_1").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step4";
				s.events="event33";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();				
			}
			return false;
		});
		$("#check_new_credit_card_2, #form2_upload_next_back .btn_back").bind('click', function(){
			if( $("#form_new_customer_credit_cards_2").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step5";
				s.events="event34";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();
			}
			return false;
		});
		$("#check_new_credit_card_3, #newcard_submit_form .btn_back").bind('click', function(){
			if( $("#form_new_customer_credit_cards_3").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step6";
				s.events="event35";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();
			}
			return false;
		});
		$("#check_new_credit_card_4, #check_new_credit_card_4_swf").bind('click', function(){
			if( $("#form_new_customer_credit_cards_4").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step7";
				s.events="event36";
				s.products="Loans;CashOne";
				s.eVar25="cashone";
				s.t();
			}
			return false;
		});
	}

});

function sendscode(returnText){
	s.manageVars('clearVars');
	s.pageName="SCB:sg:forms:onlinesales:cashoneform:c1step8";
	s.events="event44";
	s.products="Loans;CashOne";
	s.eVar25="cashone";
	s.transactionID=returnText;
	s.eVar20=s.transactionID;
	s.t();
	var b=new Date; var e=b; while(e.getTime()-b.getTime()<500) { e=new Date; }
	return false;
}

