$(document).ready(function(){
	var loopcheck;
    var uuid;
    var FormRefID;
    var selectedCard;
	
    FormRefID = jQuery.query.get("FormRefID");
    selectedCard = jQuery.query.get("selectedCard");

    //console.log('2 FormRefID: '+FormRefID);
    //console.log('2 selectedCard: '+selectedCard);
	
	$('#thanks_left span').hide();
	if( selectedCard != '' || selectedCard.length != 0 ) {
		if( selectedCard == 'SG_PC') {
			$('#card_1').attr('checked','checked');
			$('.sc_platinum_mastercard_text').show();
		} else if( selectedCard == 'SG_MPC') {
			$('#card_2').attr('checked','checked');
			$('.sc_platinum_visa_card_text').show();
		} else if( selectedCard == 'SG_BPC') {
			$('#card_3').attr('checked','checked');
			$('.business_platinum_card_text').show();
		} else if( selectedCard == 'SG_NA') {
			$('#card_4').attr('checked','checked');
			$('.nus_alumni_platinum_card_text').show();
		} else if( selectedCard == 'SG_PPC') {
			$('#card_5').attr('checked','checked');
			$('.prudential_platinum_card_text').show();
		} else if( selectedCard == 'SG_MC') {
			$('#card_6').attr('checked','checked');
			$('.manhattan_platinum_card_text').show();
		}
		$(".check_landing_page").click();
	}
	
	// check if doc upload number > 0
	var numberOfDocsUploaded = parseInt(jQuery.query.get("numberOfDocsUploaded"));
	if( numberOfDocsUploaded > 0 ) {
		$('#thanks_right').hide();
	}
	
	$('#print-pdf-button-2').click(function(){
		$('#print-pdf-form').submit();
	});
	
});

	