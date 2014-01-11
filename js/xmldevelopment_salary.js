function generateForm() {
	$('#hiddenForm').append('<input type="hidden" name="thankYouPage" id="thankYouPage" value="/public_website/singapore/OnlineSales/salary_advance_form_thankyou.html">');
	$('#hiddenForm').append('<input type="hidden" name="formXSD" value="FALSE">');
	$('#hiddenForm').append('<input type="hidden" name="Form_ID" value="SGCCEN">');
	
	$('select').each(function() {
		$('#hiddenForm').append('<input id="'+$(this).attr('id')+'_text" name="'+$(this).attr('name')+'_text" type="hidden" value="'+$(this).find('option:selected').text()+'"/>');
		if ( $('#'+$(this).attr('id')+'_text').val().toUpperCase() == "PLEASE SELECT") { $('#'+$(this).attr('id')+'_text').attr("value","") }
	});

	$('input:text, textarea').each(function() {
		$('#hiddenForm').append('<input id="'+$(this).attr('id')+'_text" name="'+$(this).attr('name')+'_text" type="hidden" value="'+$(this).val()+'"/>');
	});

	$('input:radio').each(function() {
		if( $(this).attr('checked') == true ) {	
			$('#hiddenForm').append('<input id="'+$(this).attr('name')+'_text" name="'+$(this).attr('name')+'_text" type="hidden" value="'+	$(this).val()+'"/>');
		}
	});

	$('input:checkbox').each(function() {
		if( $(this).attr('checked') == true ) {	
			$('#hiddenForm').append('<input id="'+$(this).attr('name')+'_text" name="'+$(this).attr('name')+'_text" type="hidden" value="YES"/>');
		}
	});
	
	$("#form2_gender_text").val(  $("input[name='form2_gender']:checked").next().text() );
	
	$('#hiddenForm').append('<input type="hidden" id="form2_ref_id" name="form2_ref_id">');
	$('#form2_ref_id').val( $('#form2_refrence').val() );

	today = new Date();

	$('#hiddenForm').append('<input type="hidden" id="form2_application_date" name="form2_application_date">');
	$('#form2_application_date').val( 'Application Date: ' + dateFormat(today, "dd/mm/yyyy") );

	$('#hiddenForm').append('<input type="hidden" id="form2_nric_passport_number_text" name="form2_nric_passport_number_text">');
	if( $('#form2_nationality_singaporean').is(':checked') ) {
		$('#form2_nric_passport_number_text').val( $('#form2_nric_number').val() );
	} else {
		$('#form2_nric_passport_number_text').val( $('#form2_passport_number').val() );
	}

	$('#hiddenForm').append('<input type="hidden" id="form2_length_of_stay_at_address_text" name="form2_length_of_stay_at_address_text">');
	$('#form2_length_of_stay_at_address_text').val( $('#form2_length_of_stay_at_address_years').val() +" Year(s) "+ $('#form2_length_of_stay_at_address_months').val() +" Month(s) ");

	$('#hiddenForm').append('<input type="hidden" id="form2_years_in_service_text" name="form2_years_in_service_text">');
	$('#form2_years_in_service_text').val( $('#form2_years_in_service').val() +" Year(s) "+ $('#form2_months_in_service').val() +" Month(s) ");

	$('#hiddenForm').append('<input type="hidden" id="form2_overseas_contact_text" name="form2_overseas_contact_text">');
	$("#form2_overseas_contact_text").val(  $("#form2_overseas_contact_country_code").val() + " " + 
											$("#form2_overseas_contact_area_code").val() + " " +
											$("#form2_overseas_contact_tel_no").val() );
	
	for(var i=1, form2_pdpa; i < 11; i++) {
		$('#hiddenForm').append('<input type="hidden" id="form2_pdpa_q'+i+'_yesno" name="form2_pdpa_q'+i+'_yesno" value="Not selected">');		
		if($('input[name="form2_pdpa_q'+i+'"]:checked').val() == "Yes") $("#form2_pdpa_q"+i+"_yesno").val("Yes");		
		if($('input[name="form2_pdpa_q'+i+'"]:checked').val() == "No") $("#form2_pdpa_q"+i+"_yesno").val("No");			
	}		
	
// Bank Info
	$("#selectedCard").val( $("input[name='form2_submissionType']:checked").val() );
	$("#form2_submit_cpf_text").val( "N/A" );
	
	$('#hiddenForm').append('<input type="hidden" id="selectedForms" name="selectedForms" value="sgadvance" >');
	setTimeout(function(){
		document.hiddenForm.submit();
	}, 100);
	
}

function callback(obj){
	//alert('UUID: '+obj.uuid);
	//$('#form2_ipaddress_temp').val( obj.ip );
}

$(document).ready(function(){
	display_none();
	$('body').append('<div style="display: none;"><form id="hiddenForm" name="hiddenForm" method="post" action="https://apps1.standardchartered.com/FormProcessor/ThankYouRedirect"></form></div>');
	
	$('#hiddenForm').append('<input type="hidden" name="FormRefID" id="FormRefID">');
	$('#hiddenForm').append('<input type="hidden" name="selectedCard" id="selectedCard">');
	$('#hiddenForm').append('<input type="hidden" name="formId" id="formId" value="SGR586">'); // SIT 
	$('.formidfield').val( $('#formId').val() );
	$('#hiddenForm').append('<input type="hidden" name="numberOfDocsUploaded" id="numberOfDocsUploaded">');
	display_notes_page();
	
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

		