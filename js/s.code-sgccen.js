/* You may give each page an identifying name, server, and channel on
the next lines. */
var selectedCard = jQuery.query.get("Cardtype");
var pageNameString = "";
var productNameString = "";

if(s){
	if(selectedCard == 'SG_MPC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;manhattan platinum card";
		
	} else if(selectedCard == 'SG_PVC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;platinum card visa";
		
	} else if(selectedCard == 'SG_PMC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;platinum card mastercard";
		
	} else if(selectedCard == 'SG_BPC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;business platinum card";
		
	} else if(selectedCard == 'SG_NA'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;nus alumni platinum card";
		
	} else if(selectedCard == 'SG_PPC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;prudential platinum card";
		
	} else if(selectedCard == 'SG_MC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;manhattan card";
		
	} else if(selectedCard == 'SG_NUS'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;nus $500 credit card";
		
	} else if(selectedCard == 'SG_WMC'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;preferred world mastercard";
		
	} else if(selectedCard == 'SG_PVC_TGR'){
		pageNameString=selectedCard.split('_')[1].toLowerCase();
		//s.pageName="SCB:forms:sg:public_website:onlinesales:creditcardform:"+pageNameString+"_contactus";
		s.products="credit card;tiger airways platinum credit card";
		
	} 
}
	
if(s){
	s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep1";
	s.eVar25="credit card";
	s.events="event43";
	productNameString=s.products;
}

$(document).ready(function(){
	if(s){
		$('#new_credit_card_back').bind('click', function(){
			s.manageVars('clearVars');
			s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep1";
			s.events="event43";
			s.products=productNameString;
			s.eVar25="credit card";
			s.t();
			return false;
		});
		$('#check_notes_page, #form2_office_next_back .btn_back').bind('click', function(){
			if( $("#form_notes_information").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep2";
				s.events="event32";
				s.products=productNameString;
				s.eVar25="credit card";
				s.t();	
			}
			return false;
		});	
		$('#check_new_credit_card_1, #form2_addoption_next_back .btn_back').bind('click', function(){
			if( $("#form_new_customer_credit_cards_1").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep3";
				s.events="event33";
				s.products=productNameString;
				s.eVar25="credit card";
				s.t();				
			}
			return false;
		});
		$("#check_new_credit_card_2, #form2_upload_next_back .btn_back").bind('click', function(){
			if( $("#form_new_customer_credit_cards_2").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep4";
				s.events="event34";
				s.products=productNameString;
				s.eVar25="credit card";
				s.t();
			}
			return false;
		});
		$("#check_new_credit_card_3, #newcard_submit_form .btn_back").bind('click', function(){
			if( $("#form_new_customer_credit_cards_3").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep5";
				s.events="event35";
				s.products=productNameString;
				s.eVar25="credit card";
				s.t();
			}
			return false;
		});
		$("#check_new_credit_card_4, #check_new_credit_card_4_swf").bind('click', function(){
			if( $("#form_new_customer_credit_cards_4").valid() ) {
				s.manageVars('clearVars');
				s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep6";
				s.events="event36";
				s.products=productNameString;
				s.eVar25="credit card";
				s.t();
			}
			return false;
		});
	}

});

function sendscode(returnText){
	s.manageVars('clearVars');
	s.pageName="SCB:sg:forms:onlinesales:creditcard:ccstep7";
	s.events="event44";
	s.products=productNameString;
	s.eVar25="credit card";
	s.transactionID=returnText;
	s.eVar20=s.transactionID;
	s.t();
	var b=new Date; var e=b; while(e.getTime()-b.getTime()<500) { e=new Date; }
	return false;
}







