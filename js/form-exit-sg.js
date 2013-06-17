//JavaScript Document

var leads_url = "https://apps2.standardchartered.com/leads/"; // Server URL

var country = "SG"; /** Country **/
var formid = "CC"; // or PL
var language = ""; // leave blank for default
var subchancode = jQuery.query.get("subChanCode");;  // set here, or pickup value from form
var staffid = "";  // set here, or pickup value from form

var ping_interval_seconds = 60;

var isComplete = false;

// TQID (random)
var tqid =((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 10);

//window.onbeforeunload = confirmexit;

function confirmexit(){
	return "You will lose the current information on this page if you press OK";
}

function sendLeads()
{
	if (true)
	{
		// If either email address or mobile number is filled
		if (jQuery('#form2_email_address').val() != "" || jQuery('#form2_mobile').val() != "")
		{
			// Send TQID to Alterian
			//this.altTracker.set_userName(tqid);
			
			var url = leads_url + 'capture?' 
				+'form='+formid
				+'&language='+language
				+'&salutation='+encodeURIComponent(jQuery('#form2_salutation').val())
				+'&namefirst='+encodeURIComponent(jQuery('#form2_first_name').val())
				+'&namemiddle='+encodeURIComponent("")
				+'&namelast='+encodeURIComponent(jQuery('#form2_name').val())
				+'&mobile='+encodeURIComponent(jQuery('#form2_mobile').val())
				+'&email='+encodeURIComponent(jQuery('#form2_email_address').val())
				+'&tqid='+encodeURIComponent(tqid)
				+'&leadcard='+encodeURIComponent(jQuery('#selectedCard').val())
				+'&country='+encodeURIComponent(country)
				+'&omnitureid='+encodeURIComponent(tqid)
				+'&subchancode='+encodeURIComponent(subchancode)
				+'&staffid='+encodeURIComponent("");
			
			$('#LeadsFrame').attr('src', url);

			var pingUrl = leads_url + 'ping?' 
				+ 'tqid=' + encodeURIComponent(tqid)
				+'&mobile='+encodeURIComponent(jQuery('#form2_mobile').val())
				+'&email='+encodeURIComponent(jQuery('#form2_email_address').val());
			
			/*
			window.setInterval(function() {
				if (!isComplete)
					$('#LeadsFrame').attr('src', pingUrl);
			}, ping_interval_seconds * 1000);
			*/
		}	  
	}
}

function onCompleted()
{
	isComplete = true;
	
	var url = leads_url + 'success?form='+formid+'&mobile='+jQuery('#form2_mobile').val()+'&email='+jQuery('#form2_email_address').val()+'&tqid='+tqid+'&leadcard='+jQuery('#selectedCard').val()+'&country='+country;
	
	$('#LeadsFrame').attr('src', url);
}