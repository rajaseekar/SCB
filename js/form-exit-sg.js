//JavaScript Document

//var leads_url = "https://apps2.standardchartered.com/leads/"; // Server URL
var leads_url = "https://apps.mykorn.com/leads/"; // Server URL
//var leads_url = "http://localhost:8080/leads/"; // Server URL
//var leads_url = "http://192.168.86.3:8080/leads/"; // Server URL

var country = "SG"; /** Country **/
var formid = "CC"; // or PL
var language = ""; // leave blank for default
var subchancode = jQuery.query.get("subChanCode");;  // set here, or pickup value from form
var staffid = "";  // set here, or pickup value from form

var ping_interval_seconds = 60;

var isComplete = false;

// TQID (random)
var tqid =((Math.floor(Math.random() * 1000000000000) + (new Date()).getTime()) + "" ).substr(0, 10);

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
				+'&namemiddle='+encodeURIComponent(" ")
				+'&namelast='+encodeURIComponent(jQuery('#form2_name').val())
				+'&mobile='+encodeURIComponent(jQuery('#form2_mobile').val())
				+'&email='+encodeURIComponent(jQuery('#form2_email_address').val())
				+'&tqid='+encodeURIComponent(tqid)
				+'&leadcard='+encodeURIComponent(jQuery('#selectedCard').val())
				+'&country='+encodeURIComponent(country)
				+'&omnitureid='+encodeURIComponent(tqid)
				+'&subchancode='+encodeURIComponent(subchancode)
				+'&leadsource='+encodeURIComponent(($.browser.msie?"IE":"Not IE"))
				+'&ic='+encodeURIComponent(navigator.platform+"|"+navigator.userAgent)		
				+'&staffid='+encodeURIComponent(" ");
			
			$('#LeadsFrame').attr('src', url);

			var pingUrl = leads_url + 'ping?' 
				+ 'tqid=' + encodeURIComponent(tqid)
				+'&mobile='+encodeURIComponent(jQuery('#form2_mobile').val())
				+'&email='+encodeURIComponent(jQuery('#form2_email_address').val());
				
			$(window).unload( function (event) { 
				dropOffOnClose();
			});
				
			window.onbeforeunload = dropOffBeforeOnClose;			

			startIdleCounter();

			if($.browser.msie) {} 
			else {
				setInterval( function() {
				if (!isComplete)				
					$('#LeadsFrame').attr('src', pingUrl);
				}, ping_interval_seconds * 1000);
			}
		}	  
	}
}

function onCompleted()
{
	isComplete = true;
	
	var url = leads_url + 'success?form='+formid+'&mobile='+jQuery('#form2_mobile').val()+'&email='+jQuery('#form2_email_address').val()+'&tqid='+tqid+'&leadcard='+jQuery('#selectedCard').val()+'&country='+country;
	
	$('#LeadsFrame').attr('src', url);
}

var idleTime = 0;
var t_timeout_dropoff;
var t_timeout_idle;
var TIMEOUT_DROPOFF = 900;  // in seconds
var INTERVAL_DROPOFF = 60; // in seconds
var dropOffSent = false;

function dropOff(leave)
{
	if(!dropOffSent) {
		var url = leads_url + 'dropoff?tqid='+tqid;
		$('#LeadsFrame').attr('src', url);		
//		$.get( url );		
		dropOffSent	= true;
		if(leave) {
			setTimeout( function() { window.location.href = "http://www.standardchartered.com.sg";	}, 1000);
		}		
	}
}

$(document).ready(function () {
	addIdleDialog();
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).mousedown(function (e) {
        idleTime = 0;
    });	
	$("#idleResumeButton").click( function() {
		clearTimeout(t_timeout_dropoff);	
		clearTimeout(t_timeout_idle);			
		t_timeout_idle = setInterval("timerIncrement()", 1000); // 1 minute		
		$("#idle-dialog").dialog('close');	
	});
})

function dropOffOnClose() {
	dropOff(false);
}

function dropOffBeforeOnClose() {
	dropOff(false);
}

function startIdleCounter() {
    t_timeout_idle = setInterval("timerIncrement()", 1000); // 1 second
}

function timerIncrement() {
    idleTime++;
	//$("#form2_block_number").val(idleTime);
    if (idleTime >= TIMEOUT_DROPOFF) { 
		clearTimeout(t_timeout_idle);	
		$("#idle-dialog").dialog('open');	
		t_timeout_dropoff=setTimeout( 'dropOffAfterAlert()', (INTERVAL_DROPOFF * 1000));	
    }
}

function dropOffAfterAlert() {
	clearTimeout(t_timeout_dropoff);
	$("#idle-dialog").dialog('close');
	dropOff(true);
}

function addIdleDialog() {
	var div_idle_dialog = $("<div id='idle-dialog' style='padding: 10px 10px 5px; height:auto !important; background:url(" +'"images/bg-popup.jpg"'+ ") 0 bottom repeat-x #F2F2F2;'>");
	var div_pop_up_idle_timeout = $("<div id='pop-up-idle-timeout' style='padding:5px;'>");
	var div_wrap_img = $("<div class='wrap-img'>");
	var h2_green = $("<p style='font-size:12px; color:#808080; line-height:20px; padding:0 0 10px 5px;'>");
	var pp1 = $("<p>");
	var div_clear = $("<div class='clear'>");
	var div_button = $("<div class='buttons-pop padding-top-pop' style='padding-top:0px;'>");
	var pp2 = $("<p style='text-align:center !important; float:none !important;'>");
	var img_idleresumebutton=$("<img id='idleResumeButton' src='images/btn_ok.jpg' width='45' height='27'>");
	$(h2_green).html('As a security precaution, this online application session is about to time out in around 1 minute.<br/><br/>If you wish to continue your current session, please click "OK"');
	$(pp1).html("");
	pp2.append(img_idleresumebutton);
	div_button.append(pp2);
	div_wrap_img.append(h2_green).append(pp1).append(div_clear);
	div_pop_up_idle_timeout.append(div_wrap_img).append(div_button);
	div_idle_dialog.append(div_pop_up_idle_timeout);
	$("body").append(div_idle_dialog);		
	$("#idle-dialog").dialog({bgiframe:true,width:460,height:250,modal:true,autoOpen:false,draggable:false,resizable:false,title:"Session Timeout Warning"});	
	$("#idle-dialog").parent().children('.ui-dialog-titlebar').hide();		
	$("#idle-dialog").parent().css("padding","0");
}
