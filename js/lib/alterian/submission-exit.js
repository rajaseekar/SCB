// JavaScript Document

var country = "SG"; /** Country **/
var formid = "cards"; /** Form ID **/

// TQID (random)
var tqid =((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 10);

window.onbeforeunload = confirmexit;

function confirmexit(){
	return "You will lose the current information on this page if you press OK";
}

function sendLeads()
{
	if (jQuery('.newcard_receipt').html() == "")
	{
		// If either email address or mobile number is filled
		if (jQuery('#form2_email_address').val() != "" || jQuery('#form2_mobile').val() != "")
		{
			// Send TQID to Alterian
			//this.altTracker.set_userName(tqid);
			
			var url = 'https://www.scb-prospectdb.info/form/capture.php?form='+formid+'&salutation='+jQuery('#form2_salutation').val()+'&namefirst='+jQuery('#form2_first_name').val()+'&namemiddle='+jQuery('#form2_middle_name').val()+'&namelast='+jQuery('#form2_name').val()+'&mobile='+jQuery('#form2_areacode_mobile').val()+'-'+jQuery('#form2_mobile').val()+'&email='+jQuery('#form2_email_address').val()+'&tqid='+tqid+'&leadcard='+jQuery('#selectedCard').val()+'&country='+country;
			
			$('#LeadsFrame').attr('src', url);

		}	  
	}
}

function onCompleted()
{
	var url = 'https://www.scb-prospectdb.info/form/success.php?form='+formid+'&mobile='+jQuery('#form2_areacode_mobile').val()+'-'+jQuery('#form2_mobile').val()+'&email='+jQuery('#form2_email_address').val()+'&tqid='+tqid+'&leadcard='+jQuery('#selectedCard').val()+'&country='+country;
	
	$('#LeadsFrame').attr('src', url);
}