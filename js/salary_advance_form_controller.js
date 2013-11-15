/*************************** validation ***************************/
// get80 start
var get80id = '';
var isDGM;
var subChanCode = '';
// get80 end

var status = false;

function resizeSlider() {
	$('#coda-slider-2').height(($("#coda-slider-2 .selected-panel").height())+20);
	//console.log('resizeSlider');
}

// get80 start
var refid = '';
// get80 end

// declaring required variables
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// minimum no of digits in a phone no.
var minDigitsInIPhoneNumber = 7;
if(!Array.indexOf){
	    Array.prototype.indexOf = function(obj){
	        for(var i=0; i<this.length; i++){
	            if(this[i]==obj){
	                return i;
	            }
	        }
	        return -1;
	    }
	}

function isInteger(s) {   
	var i;
    for (i = 0; i < s.length; i++) {   
        // check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // all characters are numbers.
    return true;
}

function trim(s) {   
	var i;
    var returnString = "";
    // search through string's characters one by one.
    // if character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++) {   
        // check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}

function stripCharsInBag(s, bag) {   
	var i;
    var returnString = "";
    // search through string's characters one by one.
    // if character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {   
        // check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function isPhoneNumber(strPhone){
	var bracket=3
	strPhone=trim(strPhone)
	if(strPhone.indexOf("+")>1) return false
	if(strPhone.indexOf("-")!=-1)bracket=bracket+1
	if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
	var brchr=strPhone.indexOf("(")
	if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return false
	if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return false
	s=stripCharsInBag(strPhone,validWorldPhoneChars);
	return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function isPhone(phoneNumber) {
	var phone = phoneNumber;
	if (phone.charAt(0) == "3" || phone.charAt(0) == "6" || phone.charAt(0) == "8" || phone.charAt(0) == "9") {
		return true;
	}
	else {
		return false;	
	}
}

function isMobile(phoneNumber) {
	var phone = phoneNumber;
	if (phone.charAt(0) == "8" || phone.charAt(0) == "9") {
		return true;
	}
	else {
		return false;	
	}
}

// currency
function isMoney(s){
 	return(s.match(/^[0-9]+(\.[0-9]{1,2})?$/)!=null);
}

// alphanumeric characters validation
function isAlphanumeric(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)
		{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32))
		  {
		  }
		else	{
			 return false;
		  }
		}
	return true;
}

function isAlphanumericWithSpec(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)
		{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32) || (hh>32 && hh<38) || (hh>38 && hh<48) || (hh>57 && hh<60) || (hh>62 && hh<65) || (hh>90 && hh<97) || (hh>122 && hh<127) )
		  {
		  }
		  else	{
			 return false;
		  }
		}
	return true;
}

function isAlphanumericWith2Spec(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)
		{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32) || (hh==35) || (hh==45) )
		  {
		  }
		  else	{
			 return false;
		  }
		}
	return true;
}

// employee validation
function isEmp(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)
		{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32) )
		  {
		  }
		else	{
			 return false;
		  }
		}
	return true;
}

// alpha characters validation
function isAlpha(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++)
		{
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  // if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32))
		  if((hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32))
		  {
		  }
		else	{
			 return false;
		  }
		}
 return true;
}

// unit number
// alphanumeric characters validation
function isUnitNo(alphane){
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++) {
		var alphaa = numaric.charAt(j);
		var hh = alphaa.charCodeAt(0);
		if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || (hh==32) || (hh==45) || (hh==35)) {
		}
		else {
			return false;
		}		
	}
 	return true;
}

// to fetch present date

// declaring valid date character, minimum year and maximum year
// declaring valid date character, minimum year and maximum year
var dtCh= "/";
var currYear = new Date().getFullYear();
var maxAge=60;
var minAge=18;
var minYear=currYear - maxAge;
var maxYear=currYear - minAge;
var minYear2=1950;
var maxYear2=2020;
//var minYear=1950;
//var maxYear=1989;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // all characters are numbers.
    return true;
}

function isCountryCode(s) {
	var c = s.charAt(0);
	var input = "";
	if( c == '+' ) {
		input = s.substr(1,s.length);
	} else {
		input = s;
	}
	return isInteger(input);
}

function isSGCode(s) {
	/*
	var i;
    for (i = 0; i < s.length; i++){   
        // check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    */
	var result = "";
	var i;
	var alreadyNum = 0;
    for (i = 0; i < s.length; i++){
    	var c = s.charAt(i);
    	if ( c == "0" && alreadyNum == 0) {
    		
    	} else {
    		alreadyNum = 1;
    		result += c;
    	}
    	//console.log(result);
    }
	if( result == "" ) {
    	return false
    } else {
    	var num = parseInt(result);
    	if( num < 18000 || num > 919999 ) {
    		return false
    	}
    }
	return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // search through string's characters one by one.
    // if character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// february has 29 days in any year evenly divisible by four,
    // except for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = [31,29, 31,30,31,30,31,31,30,31,30,31];
	var pos1=dtStr.indexOf(dtCh);
	var pos2=dtStr.indexOf(dtCh,pos1+1);
	var strDay=dtStr.substring(0,pos1);
	var strMonth=dtStr.substring(pos1+1,pos2);
	var strYear=dtStr.substring(pos2+1);
	strYr=strYear;
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1);
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1);
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1);
	}
	month=parseInt(strMonth);
	day=parseInt(strDay);
	year=parseInt(strYr);
	
	age = calculateAge(year,month,day);
	
	if (pos1==-1 || pos2==-1){
		//alert("The date format should be : mm/dd/yyyy")
		return false;
	}
	if (strMonth.length<1 || month<1 || month>12){
		//alert("Please enter a valid month")
		return false;
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month-1]){
		//alert("Please enter a valid day")
		return false;
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false;
	}
	if(age<18 || age >60){
		//Age should be 21-60
		return false;
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		//alert("Please enter a valid date")
		return false;
	}
	return true
}

function calculateAge(dob_year,dob_month,dob_date){
	today = new Date();
	today_year = today.getFullYear();
	today_month = today.getMonth()+1;
	today_date = today.getDate();
	
	age_days = today_date - dob_date;
	if(age_days<0){
		if(today_month==1 || today_month==3 || today_month==5 || today_month==7 || today_month==8 || today_month==10 || today_month==12 ){
			age_days = age_days + 31;
		}
		if(today_month==4 || today_month==6 || today_month==9 || today_month==11 ){
			age_days = age_days + 30;
		}
		if(today_month==2 &&  today_year%4==0){
			age_days = age_days + 29;
		}
		if(today_month==2 &&  today_year%4!=0){
			age_days = age_days + 28;
		}
		today_month = today_month -1;
	}
	
	age_month = today_month - dob_month;
	if(age_month<0){
		age_month = age_month + 12;
		today_year = today_year -1;
	}
	
	age_year = today_year - dob_year;
	
	return age_year;
}


function isFutureDate(dtStr) {
	var bDate = dtStr;
	var temp = new Array();
	temp = bDate.split('/');
	var newbDate = temp[1] + '/' + temp[0] + '/' + temp[2];
	var dob = new Date(newbDate);
	var today = new Date();
	// alert(today + "=>" + dob);
	if(dob > today) 
		return true 
	else
		return false;
	// return true;
}

function formatDate(dateValue, format) {
	var fmt = format.toUpperCase();
	var re = /^(M|MM|D|DD|YYYY)([\-\/]{1})(M|MM|D|DD|YYYY)(\2)(M|MM|D|DD|YYYY)$/;
	if (!re.test(fmt)) { fmt = "MM/DD/YYYY"; }
	if (fmt.indexOf("M") == -1) { fmt = "MM/DD/YYYY"; }
	if (fmt.indexOf("D") == -1) { fmt = "MM/DD/YYYY"; }
	if (fmt.indexOf("YYYY") == -1) { fmt = "MM/DD/YYYY"; } 
   
	var M = "" + (dateValue.getMonth()+1);
	var MM = "0" + M;
	MM = MM.substring(MM.length-2, MM.length);
	var D = "" + (dateValue.getDate());
	var DD = "0" + D;
	DD = DD.substring(DD.length-2, DD.length);
	var YYYY = "" + (dateValue.getFullYear());
	var sep = "/";
	if (fmt.indexOf("-") != -1) { sep = "-"; }
	var pieces = fmt.split(sep);
	var result = ""; 
	switch (pieces[0]) {
		case "M" : result += M + sep; break;
		case "MM" : result += MM + sep; break;
		case "D" : result += D + sep; break;
		case "DD" : result += DD + sep; break;
		case "YYYY" : result += YYYY + sep; break;
	} 
	switch (pieces[1]) {
		case "M" : result += M + sep; break;
		case "MM" : result += MM + sep; break;
		case "D" : result += D + sep; break;
		case "DD" : result += DD + sep; break;
		case "YYYY" : result += YYYY + sep; break;
	}
	switch (pieces[2]) {
		case "M" : result += M; break;
		case "MM" : result += MM; break;
		case "D" : result += D; break;
		case "DD" : result += DD; break;
		case "YYYY" : result += YYYY; break;
	} 
	return result;
}

function ValidateNRIC(strNRIC)
{
	var arrNumbers = new Array(2, 7, 6, 5, 4, 3, 2);
	var arrUIN = new Array('J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A');
	var arrFIN = new Array('X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K');

	var strPrefix = "", strDigit = "";
	var blnValidNRIC = true;
	var intTotal = 0, intMod = 0;
	var intDigit = 0;

	strNRIC = strNRIC.toUpperCase();

	// Validate NRIC based on length
	if (strNRIC.length != 9)
		blnValidNRIC = false;
	else
	{
		// Validate NRIC based on algorithm
		strPrefix = strNRIC.charAt(0);
		
		if (strPrefix == 'S' || strPrefix == 'F')
		{
			intTotal = 0; // total starts with 0 for prefixes S or F
			
			var i;
			for (i = 0; i<7; i++)
			{
				strDigit = strNRIC.charAt(i + 1);
				
				if (isNaN(intDigit))
				{
					blnValidNRIC = false;
					break;
				}
				else
					intTotal += (Number(strDigit) * arrNumbers[i]);
			}
	
			if (blnValidNRIC)
			{
				intMod = intTotal % 11;				
				if (arrUIN[intMod] == strNRIC.charAt(8))
					blnValidNRIC = true;
				else
					blnValidNRIC = false;
			}
		}
		else if (strPrefix == 'T' || strPrefix == 'G')
		{
			intTotal = 4; // total starts with 4 for prefixes T or G
			
			var i;
			for (i = 0; i < 7; i++)
			{
				strDigit = strNRIC.charAt(i + 1);
				if (isNaN(intDigit))
				{
					blnValidNRIC = false;
					break;
				}
				else
				{
					intTotal += (Number(strDigit) * arrNumbers[i]);
				}
			}			
			
			if (blnValidNRIC)
			{
				intMod = intTotal % 11;
		
				if (arrUIN[intMod] == strNRIC.charAt(8))
				{
					blnValidNRIC = true;
				}
				else
				{
					blnValidNRIC = false;
				}
			}
		}
		else 
		{
			// invalid prefix
			blnValidNRIC = false;
		}
	}

	return blnValidNRIC;
}



/*************************** global functions ***************************/

function display_none() {
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#new_credit_card").hide();
	$("#loading_page").hide();
}

// display landing page
function display_landing_page() {
	$("#loading_page").hide();
	$("#landing_page").show();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#new_credit_card").hide();
}

// display notes page
function display_notes_page() {
	window.scrollTo(0,0);
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").show();
	$("#selected_cards").hide();
	$("#new_credit_card").hide();
}

// display new credit card page
function display_new_credit_card_page() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").show();
	$("#new_credit_card").show();
	$(".form2_header_personal").show();
	$(".form2_header_employment").hide();
	$(".form2_header_residential").hide();
	$(".form2_header_other").hide();
	$(".form2_header_review").hide();
	resizeSlider();
}

// reset all forms
function resetForm(id) {
	$('#'+id).each(function(){
	        this.reset();
	});
}

// generate xml
function generateXml() {
	$("input:text").each(function() {
		var tmpName = $.trim( $(this).val() );
		tmpName = tmpName.replace(/\s+/g,' ');
		$(this).val( tmpName );
	});
	
	var startXML='';
	var commonXML='';
	var endXML='';
	
	// xml header
	startXML=startXML+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	startXML=startXML+"<eform FID=\""+$('#formId').val()+"\">\n";	
	startXML=startXML+"\t<model>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"savemodel\">\n";
	startXML=startXML+"\t\t\t<sigfields>\n";
	startXML=startXML+"\t\t\t\t<sigchar>\n";
	startXML=startXML+"\t\t\t\t\t<sigchar1>"+$('#form2_name').val()+"</sigchar1>\n";
	if($("input[name=form2_nationality]:checked").val()=='Singaporean' || $("input[name=form2_nationality]:checked").val()=='Singapore PR') {
		startXML=startXML+"\t\t\t\t\t<sigchar2>"+$("#form2_nric_number").val().toUpperCase()+"</sigchar2>\n";
	}
	else {
		startXML=startXML+"\t\t\t\t\t<sigchar2>"+$("#form2_passport_number").val().toUpperCase()+"</sigchar2>\n";
	}
	startXML=startXML+"\t\t\t\t</sigchar>\n";
	startXML=startXML+"\t\t\t\t<signum/>\n";
	startXML=startXML+"\t\t\t\t<sigdate/>\n";
	startXML=startXML+"\t\t\t</sigfields>\n";
	startXML=startXML+"\t\t</instance>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"outputmodel\">\n";

	commonXML=commonXML+"\t\t\t<form2_salutation><![CDATA["+$('#form2_salutation').val()+"]]></form2_salutation>\n";
	commonXML=commonXML+"\t\t\t<form2_name><![CDATA["+$('#form2_name').val()+"]]></form2_name>\n";
	commonXML=commonXML+"\t\t\t<form2_mobile><![CDATA["+$('#form2_mobile').val()+"]]></form2_mobile>\n";
	commonXML=commonXML+"\t\t\t<form2_residential><![CDATA["+$('#form2_residential').val()+"]]></form2_residential>\n";
	commonXML=commonXML+"\t\t\t<form2_office><![CDATA["+$('#form2_office').val()+"]]></form2_office>\n";
	commonXML=commonXML+"\t\t\t<form2_email_address><![CDATA["+$('#form2_email_address').val()+"]]></form2_email_address>\n";

//FATCA	
	commonXML=commonXML+"\t\t\t<form2_usresident><![CDATA["+$('input[name=form2_usresident]:checked').val()+"]]></form2_usresident>\n"	
	commonXML=commonXML+"\t\t\t<form2_uscitizen><![CDATA["+$('input[name=form2_uscitizen]:checked').val()+"]]></form2_uscitizen>\n"	
	commonXML=commonXML+"\t\t\t<form2_greencard><![CDATA["+$('input[name=form2_greencard]:checked').val()+"]]></form2_greencard>\n"	
	commonXML=commonXML+"\t\t\t<form2_birth_country><![CDATA["+$('#form2_birth_country').val()+"]]></form2_birth_country>\n"	

//PDPA	
	for(var i=1, form2_pdpa; i < 11; i++) {
		form2_pdpa="Not selected";
		if( "YesNo".indexOf($("input[name='form2_pdpa_q"+i+"']:checked").val()) >= 0 ) {
			form2_pdpa=$("input[name='form2_pdpa_q"+i+"']:checked").val();
		}
		if( $.trim($("#pre_form2_pdpa_q"+i).parent().prev().html()) == "" ) {
			form2_pdpa="";
		}
		commonXML=commonXML+"\t\t\t<form2_pdpa_q"+i+"><![CDATA["+form2_pdpa+"]]></form2_pdpa_q"+i+">\n";
	}		
	
	commonXML=commonXML+"\t\t\t<form2_date_of_birth><![CDATA["+$('#form2_date_of_birth').val()+"]]></form2_date_of_birth>\n";
	commonXML=commonXML+"\t\t\t<form2_nationality><![CDATA["+$("input[name=form2_nationality]:checked").val()+"]]></form2_nationality>\n";
	commonXML=commonXML+"\t\t\t<form2_nric_number><![CDATA["+$('#form2_nric_number').val()+"]]></form2_nric_number>\n";
	commonXML=commonXML+"\t\t\t<form2_current_passport_number><![CDATA["+$('#form2_current_passport_number').val()+"]]></form2_current_passport_number>\n";
	commonXML=commonXML+"\t\t\t<form2_passport_number><![CDATA["+$('#form2_passport_number').val()+"]]></form2_passport_number>\n";

	commonXML=commonXML+"\t\t\t<form2_education_status><![CDATA["+$('#form2_education_status').val()+"]]></form2_education_status>\n";
	commonXML=commonXML+"\t\t\t<form2_gender><![CDATA["+$('input[name=form2_gender]:checked').val()+"]]></form2_gender>\n"
	commonXML=commonXML+"\t\t\t<form2_marital_status><![CDATA["+$('#form2_marital_status').val()+"]]></form2_marital_status>\n";
	commonXML=commonXML+"\t\t\t<form2_number_of_dependents><![CDATA["+$('#form2_number_of_dependents').val()+"]]></form2_number_of_dependents>\n";

	commonXML=commonXML+"\t\t\t<form2_block_number><![CDATA["+$('#form2_block_number').val()+"]]></form2_block_number>\n";
	commonXML=commonXML+"\t\t\t<form2_unit_number><![CDATA["+$('#form2_unit_number').val()+"]]></form2_unit_number>\n";
	commonXML=commonXML+"\t\t\t<form2_street_name><![CDATA["+$('#form2_street_name').val()+"]]></form2_street_name>\n";
	commonXML=commonXML+"\t\t\t<form2_building_name><![CDATA["+$('#form2_building_name').val()+"]]></form2_building_name>\n";
	commonXML=commonXML+"\t\t\t<form2_postal_code><![CDATA["+$('#form2_postal_code').val()+"]]></form2_postal_code>\n";
	commonXML=commonXML+"\t\t\t<form2_length_of_stay_at_address_years><![CDATA["+$('#form2_length_of_stay_at_address_years').val()+"]]></form2_length_of_stay_at_address_years>\n";
	commonXML=commonXML+"\t\t\t<form2_length_of_stay_at_address_months><![CDATA["+$('#form2_length_of_stay_at_address_months').val()+"]]></form2_length_of_stay_at_address_months>\n";
	commonXML=commonXML+"\t\t\t<form2_type_of_residence><![CDATA["+$('#form2_type_of_residence').val()+"]]></form2_type_of_residence>\n";
	commonXML=commonXML+"\t\t\t<form2_residential_ownership><![CDATA["+$('#form2_residential_ownership').val()+"]]></form2_residential_ownership>\n";

	if($("input[name=form2_nationality]:checked").val()=='Singaporean' || $("input[name=form2_nationality]:checked").val()=='Singapore PR') {	
		commonXML=commonXML+"\t\t\t<form2_overseas_address></form2_overseas_address>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_country_code></form2_overseas_contact_country_code>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_area_code></form2_overseas_contact_area_code>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_tel_no></form2_overseas_contact_tel_no>\n";
	} else {
		commonXML=commonXML+"\t\t\t<form2_overseas_address><![CDATA["+$('#form2_overseas_address').val()+"]]></form2_overseas_address>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_country_code><![CDATA["+$('#form2_overseas_contact_country_code').val()+"]]></form2_overseas_contact_country_code>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_area_code><![CDATA["+$('#form2_overseas_contact_area_code').val()+"]]></form2_overseas_contact_area_code>\n";
		commonXML=commonXML+"\t\t\t<form2_overseas_contact_tel_no><![CDATA["+$('#form2_overseas_contact_tel_no').val()+"]]></form2_overseas_contact_tel_no>\n";
	}
	commonXML=commonXML+"\t\t\t<form2_name_of_employer><![CDATA["+$('#form2_name_of_employer').val()+"]]></form2_name_of_employer>\n";
	commonXML=commonXML+"\t\t\t<form2_nature_of_employment><![CDATA["+$('input[name=form2_nature_of_employment]:checked').val()+"]]></form2_nature_of_employment>\n";

	commonXML=commonXML+"\t\t\t<form2_employer_block_number><![CDATA["+$('#form2_employer_block_number').val()+"]]></form2_employer_block_number>\n";
	commonXML=commonXML+"\t\t\t<form2_employer_unit_number><![CDATA["+$('#form2_employer_unit_number').val()+"]]></form2_employer_unit_number>\n";
	commonXML=commonXML+"\t\t\t<form2_employer_street_name><![CDATA["+$('#form2_employer_street_name').val()+"]]></form2_employer_street_name>\n";
	commonXML=commonXML+"\t\t\t<form2_employer_building_name><![CDATA["+$('#form2_employer_building_name').val()+"]]></form2_employer_building_name>\n";
	commonXML=commonXML+"\t\t\t<form2_employer_postal_code><![CDATA["+$('#form2_employer_postal_code').val()+"]]></form2_employer_postal_code>\n";

	commonXML=commonXML+"\t\t\t<form2_occupation><![CDATA["+$('#form2_occupation').val()+"]]></form2_occupation>\n";
	commonXML=commonXML+"\t\t\t<form2_job_title><![CDATA["+$('#form2_job_title').val()+"]]></form2_job_title>\n";
	commonXML=commonXML+"\t\t\t<form2_years_in_service><![CDATA["+$('#form2_years_in_service').val()+"]]></form2_years_in_service>\n";
	commonXML=commonXML+"\t\t\t<form2_months_in_service><![CDATA["+$('#form2_months_in_service').val()+"]]></form2_months_in_service>\n";
	commonXML=commonXML+"\t\t\t<form2_annual_income><![CDATA["+$('#form2_annual_income').val()+"]]></form2_annual_income>\n";
	commonXML=commonXML+"\t\t\t<form2_submit_cpf><![CDATA["+$('input[name=form2_submit_cpf]:checked').val()+"]]></form2_submit_cpf>\n";

	commonXML=commonXML+"\t\t\t<form2_mailing_address><![CDATA["+$('input[name=form2_mailing_address]:checked').val()+"]]></form2_mailing_address>\n";

	if( $('#form2_mailing_address_other').is(':checked') ) {
		commonXML=commonXML+"\t\t\t<form2_mailing_block_number><![CDATA["+$('#form2_mailing_block_number').val()+"]]></form2_mailing_block_number>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_unit_number><![CDATA["+$('#form2_mailing_unit_number').val()+"]]></form2_mailing_unit_number>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_street_name><![CDATA["+$('#form2_mailing_street_name').val()+"]]></form2_mailing_street_name>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_building_name><![CDATA["+$('#form2_mailing_building_name').val()+"]]></form2_mailing_building_name>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_postal_code><![CDATA["+$('#form2_mailing_postal_code').val()+"]]></form2_mailing_postal_code>\n";
	} else {
		commonXML=commonXML+"\t\t\t<form2_mailing_block_number></form2_mailing_block_number>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_unit_number></form2_mailing_unit_number>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_street_name></form2_mailing_street_name>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_building_name></form2_mailing_building_name>\n";
		commonXML=commonXML+"\t\t\t<form2_mailing_postal_code></form2_mailing_postal_code>\n";
	}

	if ($("input[name='form2_os_fund_transfer']").is(":checked")) {	
		commonXML=commonXML+"\t\t\t<form2_os_fund_transfer><![CDATA[I want to apply for Salary Advance Funds Transfer]]></form2_os_fund_transfer>\n";	
		commonXML=commonXML+"\t\t\t<form2_os_account_holder_name><![CDATA["+$('#form2_os_account_holder_name').val()+"]]></form2_os_account_holder_name>\n";
		commonXML=commonXML+"\t\t\t<form2_os_nric><![CDATA["+$('#form2_os_nric').val()+"]]></form2_os_nric>\n";
		commonXML=commonXML+"\t\t\t<form2_os_account_type><![CDATA["+$('#form2_os_account_type').val()+"]]></form2_os_account_type>\n";
		commonXML=commonXML+"\t\t\t<form2_os_account_card_number><![CDATA["+$('#form2_os_account_card_number').val()+"]]></form2_os_account_card_number>\n";
		commonXML=commonXML+"\t\t\t<form2_os_bank><![CDATA["+$('#form2_os_bank').val()+"]]></form2_os_bank>\n";
		commonXML=commonXML+"\t\t\t<form2_os_transfer_amount><![CDATA["+$('#form2_os_transfer_amount').val()+"]]></form2_os_transfer_amount>\n";
	} else {
		commonXML=commonXML+"\t\t\t<form2_os_fund_transfer><![CDATA[I do not want to apply for Salary Advance Funds Transfer]]></form2_os_fund_transfer>\n";	
		commonXML=commonXML+"\t\t\t<form2_os_account_holder_name></form2_os_account_holder_name>\n";
		commonXML=commonXML+"\t\t\t<form2_os_nric></form2_os_nric>\n";
		commonXML=commonXML+"\t\t\t<form2_os_account_type></form2_os_account_type>\n";
		commonXML=commonXML+"\t\t\t<form2_os_account_card_number></form2_os_account_card_number>\n";
		commonXML=commonXML+"\t\t\t<form2_os_bank></form2_os_bank>\n";
		commonXML=commonXML+"\t\t\t<form2_os_transfer_amount></form2_os_transfer_amount>\n";
	}

	if ($("input[name='form2_os_link_debit_card']").is(":checked")) {	
		commonXML=commonXML+"\t\t\t<form2_os_link_debit_card><![CDATA[I want to apply to link the Debit Card to my Standard Chartered Savings / Current Account]]></form2_os_link_debit_card>\n";	
		commonXML=commonXML+"\t\t\t<form2_os_saving_current_account><![CDATA["+$('#form2_os_saving_current_account').val()+"]]></form2_os_saving_current_account>\n";		
	} else {
		commonXML=commonXML+"\t\t\t<form2_os_link_debit_card><![CDATA[I do not want to apply to link the Debit Card to my Standard Chartered Savings / Current Account]]></form2_os_link_debit_card>\n";	
		commonXML=commonXML+"\t\t\t<form2_os_saving_current_account></form2_os_saving_current_account>\n";		
	}

	commonXML=commonXML+"\t\t\t<form2_os_combined_statement><![CDATA[I want to apply for the Combined Statement Service]]></form2_os_combined_statement>\n";	
	commonXML=commonXML+"\t\t\t<form2_os_ibanking><![CDATA[I want to apply for Standard Chartered Internet Banking and Phone Banking]]></form2_os_ibanking>\n";	

	if ($("input[name='form2_os_go_green']").is(":checked")) {	
		commonXML=commonXML+"\t\t\t<form2_os_go_green><![CDATA[I wish to Go Green with eStatement and do not wish to receive paper statements]]></form2_os_go_green>\n";	
	} else {
		commonXML=commonXML+"\t\t\t<form2_os_go_green><![CDATA[I do not wish to Go Green with eStatement and wish to receive paper statements]]></form2_os_go_green>\n";	
	}
	
	commonXML=commonXML+"\t\t\t<form2_doc_upload_yes>No</form2_doc_upload_yes>\n";	
	
	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";
	
	return startXML+commonXML+endXML;
}

/************************** new credit card customer ***************************/

// display all tab content
function form_new_customer_credit_cards_1_display_all() {
	$("#form_new_customer_credit_cards_1 h4.toggle").each(function (i) {
		// open divs that are closed
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_new_customer_credit_cards_2_display_all() {
	$("#form_new_customer_credit_cards_2 h4.toggle").each(function (i) {
		// open divs that are closed
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_new_customer_credit_cards_3_display_all() {
	$("#form_new_customer_credit_cards_3 h4.toggle").each(function (i) {
		// open divs that are closed
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_new_customer_credit_cards_4_display_all() {
	$("#form_new_customer_credit_cards_4 h4.toggle").each(function (i) {
		// open divs that are closed
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_new_customer_credit_cards_5_display_all() {
	$("#form_new_customer_credit_cards_5 h4.toggle").each(function (i) {
		// open divs that are closed
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}


//Print Function
function doprint(location){
window.open('print_form_cc_new.html','SCBPrint','resizable=yes,toolbar=yes,location=no,directories=yes,menubar=yes,scrollbars=yes,width=650,height=600,left=100,top=25');
	
}

function disableAllFieldsExcept(n){
	$("#errorMessageBox_fatca_container").show();
	$("input, select").not("input:radio[name="+n+"], select[name="+n+"]").attr('disabled', 'disabled');		
	$("span.float_right.buttons").hide();					
	resizeSlider();
	$.scrollTo(0,0);
}

function enableAllFields(){
	$("#errorMessageBox_fatca_container").hide();		
	$("input, select").removeAttr('disabled');
	$("span.float_right.buttons").show();			
	resizeSlider();		
//	$.scrollTo(0,0);		
}

var idleTime = 0;
var timeoutUrl = "http://www.standardchartered.com.sg/";

function timerIncrement() {
    idleTime++;
    if (idleTime >= 900) { // 15 minutes
		window.location.replace(timeoutUrl);
    }
}
/************************** onload functions ***************************/
$(document).ready(function(){

	$("a").keydown(function (event) {
		if ( event.keyCode  == 9 || event.which == 9){
			return false;
		}
	});	
	
	$(".btn_back, .btn_next").keydown(function (event) {
		if ( event.keyCode  == 9 || event.which == 9){
			return false;
		}
	});				
	
    // AVT 15 mins timeout
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).mousedown(function (e) {
        idleTime = 0;
    });	
	setInterval("timerIncrement()", 1000); // 1 second
	
	$("#cpf-dialog").dialog({
        bgiframe: true,
        width: 500,
        height: 200,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "CPF Authorisation",
		buttons: {
    		'Cancel': function() {
				$(this).dialog('close');
			},
			'OK': function() {
				$(this).dialog('close');
						$("#new_credit_card .bc5").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_3").addClass("step_4");
						$("#coda-slider-2 .panel05").addClass("selected-panel");
						$("#coda-slider-2 .panel04").removeClass("selected-panel");
						$(".form2_header_personal").hide();
						$(".form2_header_employment").hide();
						$(".form2_header_residential").hide();
						$(".form2_header_other").show();
						$(".form2_header_review").hide();
					$("#form_new_customer_credit_cards_5 .next").click();
			}
		}
	});
	
	$('form input.help, form textarea.help').formtips({ 
        tippedClass: 'tipped'
    });
	
	// all text input as alphanumic
	$("input:text").addClass('alphanumericwithspec');
	$("#form2_name_of_employer").removeClass('alphanumericwithspec');
	
	// enable trim for all text input
	$("input:text").blur(function() {
		var tmpName = $.trim( $(this).val() );
		tmpName = tmpName.replace(/\s+/g,' ');
		$(this).val( tmpName );
		//$(this).valid();
		resizeSlider();
	});
	
	$('#form2_declaration_yes').removeAttr('checked');
	$('#form2_declaration_no').attr('checked','checked');					   
	// initialize sliders
	$('#coda-slider-1').codaSlider();
	$('#coda-slider-2').codaSlider({
           autoHeightEaseDuration: 0,
           autoHeightEaseFunction: "easeInBounce",
           slideEaseDuration: 0,
           slideEaseFunction: "easeInBounce"
       });
	
	// highlight form elements http://dutchrapley.com/?p=92
	$(':input:not([type="submit"])').each(function() { 
		$(this).focus(function() { 
			$(this).parents('table.application_form tr').addClass('formFieldFocus'); 
			resizeSlider();
		}).blur(function() { 
			$(this).parents('table.application_form tr').removeClass('formFieldFocus');
			resizeSlider();
		}); 
		//resizeSlider();
	}); 
	
	// special highlight for docs upload table
	$('.table_upload select').each(function() {
		$(this).focus(function() {
			$(this).parents('.table_upload').addClass('formFieldFocus');
		}).blur(function() {
			$(this).parents('.table_upload').removeClass('formFieldFocus');
		});
	});
	
	// custom style all inputs
	$("input").customInput();

	// validate FATCA
	$("#form2_usresident_yes").click( function() {
		$("#errorMessageBox_fatca").html("We are unable to open accounts for US persons. For further clarification, please contact our call center at [ ] or  visit any of our branches.");
		disableAllFieldsExcept("form2_usresident");
	});			
	
	$("#form2_usresident_no").click( function() {
		enableAllFields();
	});
	
	$("#form2_uscitizen_yes").click( function() {
		$("#errorMessageBox_fatca").html("As we require additional documentation to open accounts for US persons, please visit any of our branches where we will be happy to assist you.");
		disableAllFieldsExcept("form2_uscitizen");		
	});			
	
	$("#form2_uscitizen_no").click( function() {
		enableAllFields();
	});

	$("#form2_greencard_yes").click( function() {
		$("#errorMessageBox_fatca").html("As we require additional documentation to open accounts for US persons, please visit any of our branches where we will be happy to assist you.");
		disableAllFieldsExcept("form2_greencard");			
	});		

	$("#form2_greencard_no").click( function() {	
		enableAllFields();
	});		
	
	$("#form2_birth_country").change( function() {
		var country = this.value;
		if( country == "United States" ) {		
			$("#errorMessageBox_fatca").html("As we require additional documentation to open accounts for US persons, please visit any of our branches where we will be happy to assist you.");		
			disableAllFieldsExcept("form2_birth_country");					
		} else {
			enableAllFields();
		}
	});		
	
	// validate date					   
	$.validator.addMethod("validDate", function(value, element) {
 		var result = this.optional(element) || isDate(value) == true;
 		return result;
 	}, "Please enter a valid date. <br />Age must be between 18 to 60.");

	$.validator.addMethod("ddmmyyyy", function(value, element) {
		var result = this.optional(element) || (value != "dd/mm/yyyy" && value != "");
		return result;
	}, "This field is required.");
	
	// validate phone
	$.validator.addMethod("validPhone", function(value, element) {
 		var result = this.optional(element) || isPhone(value) == true;
 		return result;
 	}, "Please enter a phone number starting with either 3, 6, 8 or 9.");
	
	// validate mobile-phone
	$.validator.addMethod("validMobile", function(value, element) {
 		var result = this.optional(element) || isMobile(value) == true;
 		return result;
 	}, "Please enter a phone number starting with either 8 or 9.");
	
	// validate nric
	$.validator.addMethod("validNric", function(value, element) {
 		var result = this.optional(element) || ValidateNRIC(value) == true;
 		return result;
 	}, "Please enter a valid NRIC number.");
	
	// validate alphabets
	$.validator.addMethod("alpha", function(value, element) {
		var result = this.optional(element) ||isAlpha(value);
		return result;
	}, "Please enter only alphabets.");
	
	// validate alphanumerics
	$.validator.addMethod("alphanumeric", function(value, element) {
		var result = this.optional(element) ||isAlphanumeric(value);
		return result;
	}, "Please enter alphanumerics.");
	
	$.validator.addMethod("alphanumericwithspec", function(value, element) {
		var result = this.optional(element) ||isAlphanumericWithSpec(value);
		return result;
	}, "Please do not enter &, < or >.");
	
	$.validator.addMethod("alphanumericwith2spec", function(value, element) {
		var result = this.optional(element) ||isAlphanumericWith2Spec(value);
		return result;
	}, "Please can enter alphanumerics, # or -.");
	
	// validate employer name
	$.validator.addMethod("isemp", function(value, element) {
		var result = this.optional(element) ||isEmp(value);
		return result;
	}, "Please enter valid Company Name.");
	
	//validate Numbers
	
	//validate account numbers
	$.validator.addMethod("accountNo", function(value, element) {
		var result = value.search("-") == '-1';
		return result;
	}, "Please remove dashes(-) from your account number.");
	
	// initialize datepicker
	$(".date_picker").datepick({minDate: -maxAge+"y", maxDate: -minAge +"y", yearRange: minYear+":"+maxYear, showOn: "button", defaultDate: -minAge +"y",
    buttonImageOnly: true, buttonImage: "images/calendar_blue.jpg"});
	
	//Validates SG Postal Code
	$.validator.addMethod("postcodeSG", function(value, element) {
	var result = this.optional(element) || isSGCode(value);
	return result;
	}, "Please enter a valid number.");
	
	//Validates Country Code
	$.validator.addMethod("ctycode", function(value, element) {
	var result = this.optional(element) || isCountryCode(value);
	return result;
	}, "Please enter a valid number.");
	
	$.validator.addMethod("postcodeOther", function(value, element) {
	var result = this.optional(element) || isAlphanumeric(value);
	return result;
	}, "Please enter only letters and numbers.");
	
	$.validator.addMethod("yearservice", function(value, element) {
	var result = this.optional(element) || isInteger(value);
	return result;
	}, "Please enter only valid numbers.");
	
	$.validator.addMethod("lenstay", function(value, element) {
	var result = this.optional(element) || isInteger(value);
	return result;
	}, "Please enter only valid numbers.");

	$.validator.addMethod("numberonly", function(value, element) {
	var result = this.optional(element) || isInteger(value);
	return result;
	}, "Please enter only valid numbers.");
	
	// hide the tab content containers on load
	//$(".tab_content").hide(); 
	$(".tab_content").show(); 
	
	// switch the "open" and "close" state per click
	$("h4.toggle").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	// slide up and down on click
	$("h4.toggle").click(function(){
		$(this).next(".tab_content").slideToggle("slow");
	});
	
	// open first tab on every page
	$("h4.toggle").click();
	
	/************************** info page ***************************/
	/************************** landing page ***************************/

	/************************** notes page ***************************/
	// form validation
	$("#form_notes_information").validate({
   		groups: {
        },
  		rules: {
			form2_salutation: { required: true, minlength: 1 },
			form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			form2_residential: { required: function() { return ( $("#form2_residential").val() == "" && $("#form2_office").val() == "") }, number: true, minlength: 8, maxlength: 8 },
			form2_office: { required: function() { return ( $("#form2_residential").val() == "" && $("#form2_office").val() == "") }, number: true, minlength: 8, maxlength: 8 },
			form2_email_address: { required: true, email: true, maxlength: 70 }
  		},		
		messages: {
			form2_salutation: { required: "Please select your title." },
			form2_name: { required: "Please enter your full name."},
			form2_mobile: { required: "Please enter your mobile phone number." },
			form2_residential: { required: "Please provide either your home number or office number." },
			form2_office: { required: "Please provide either your home number or office number." },
			form2_email_address: { required: "Please enter your email address."	}
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step0",
		errorElement: "div",
        wrapper: "div class='error_box_note'",
        errorPlacement: function(error, element) {
			if ( element.is(":radio") ) 
                error.appendTo( element.parent().next().next() ); 
            else 
                error.appendTo( element.parent().next() ); 
		},
		success: function(label) {
			//console.log(label);
			label.parent().css('border','0px solid #FF9E9E');
			label.remove();
		}

	});

	// cancel button
	$("#notes_page .cancel").click(
		function() {
			display_landing_page();
		}
	);
	
	// check if user is new or existing customer
	$("#check_notes_page").click(
		function() {
			if (  ($("#form_notes_information").valid())) { 
				postInCompleteXml();
				display_new_credit_card_page();
			}
			resizeSlider();
			return false;
		}
	);


	
	/************************** new credit card customer ***************************/
	
	/************************** step 1 ***************************/
	
	
	// check user nationality and either display nric or passport number
	$(".form2_nric_number_container").show();
	$(".form2_passport_number_container").hide();
	$(".form2_current_passport_number_container").hide();	
	$(".form2_overseas_address_details").hide();

	$("select[name='form2_salutation']").change(
		function() {
			if ($("select[name='form2_salutation']").val() == "Mr") {
				$("#form2_gender_female").attr("selected", false);
				$("#form2_gender_female").removeAttr("checked");
				$("#form2_gender_female").siblings("label").removeClass("checked");
				$("#form2_gender_male").removeAttr("disabled");
				$("#form2_gender_male").attr("selected", true);
				$("#form2_gender_male").attr("checked", "checked");
				$("#form2_gender_male").siblings("label").addClass("checked");
			} else if ($("select[name='form2_salutation']").val() == "Miss" || $("select[name='form2_salutation']").val() == "Mrs" || $("select[name='form2_salutation']").val() == "Mdm") {
				$("#form2_gender_male").attr("selected", false);
				$("#form2_gender_male").removeAttr("checked");
				$("#form2_gender_male").siblings("label").removeClass("checked");
				$("#form2_gender_female").removeAttr("disabled");
				$("#form2_gender_female").attr("selected", true);
				$("#form2_gender_female").attr("checked", "checked");
				$("#form2_gender_female").siblings("label").addClass("checked");
			} else {
				$("#form2_gender_male").removeAttr("disabled");
				$("#form2_gender_female").removeAttr("disabled");
				$("#form2_gender_male").attr("selected", false);
				$("#form2_gender_male").siblings("label").removeClass("checked");
				$("#form2_gender_female").attr("selected", false);
				$("#form2_gender_female").siblings("label").removeClass("checked");
			}
			resizeSlider();
		}
	);

	// check user nationality
	$("input[name='form2_nationality']").click(
		function() {
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$(".form2_overseas_address_details").hide();						
				$(".form2_overseas_address_details input").val('');						
				$(".form2_nric_number_container").show();
				$(".form2_current_passport_number_container").hide();
				$(".form2_current_passport_number_container input").val('');				
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');				
			} else if ($("input[name='form2_nationality']:checked").val() == "Singapore PR" ){
				$(".form2_overseas_address_details").hide();						
				$(".form2_overseas_address_details input").val('');										
				$(".form2_nric_number_container").show();
				$(".form2_current_passport_number_container").show();
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');				
			} else {
				$(".form2_overseas_address_details").show();			
				$(".form2_nric_number_container").hide();
				$(".form2_nric_number_container input").val('');			
				$(".form2_current_passport_number_container").hide();
				$(".form2_current_passport_number_container input").val('');												
				$(".form2_passport_number_container").show();
			}
		resizeSlider();
		}
	);
	
	$('#form2_overseas_address').keydown(function(e) {
        var newLines = $(this).val().split("\n").length;
        if(e.keyCode == 13 && newLines >= 5) {
            return false;
        }
    });
	
	// form validation
	$("#form_new_customer_credit_cards_1").validate({
   		groups: {
        },
  		rules: {
//Terence		
			form2_usresident: {required: function(element) { return $("input[name='form2_usresident']:checked").val() == undefined}},
			form2_uscitizen: {required: function(element) { return $("input[name='form2_uscitizen']:checked").val() == undefined}},
			form2_greencard: {required: function(element) { return $("input[name='form2_greencard']:checked").val() == undefined}},
			form2_birth_country: { required: true},				
			form2_consent: { required: true, minlength: 1},
			
			form2_nric_number: { required: "#form2_nric_number:visible", minlength: 9, maxlength: 9 },
			form2_current_passport_number: { required: "#form2_current_passport_number:visible", minlength: 5, maxlength: 16 },
			form2_passport_number: { required: "#form2_passport_number:visible", minlength: 5, maxlength: 16 },

			form2_date_of_birth: { required: true, ddmmyyyy: true, dpDate: true, dpMinMaxDate: [] },			
			form2_gender: {required: function(element) { return $("input[name='form2_gender']:checked").val() == undefined}},
			form2_marital_status: { required: true, minlength: 1 },
			form2_education_status: { required: true, minlength: 1 },
			form2_number_of_dependents: { required: true, numberonly: true }
  		},		
		messages: {
			form2_usresident: {required: "Please confirm whether you are a US Resident"},
			form2_uscitizen: {required: "Please confirm whether you are a US Citizen"},
			form2_greencard: {required: "Please confirm whether you hold a US Permanent Resident (Green Card)"},
			form2_birth_country: { required: "Please select your country of birth"},
			form2_consent: { required: "Please tick the check-box to confirm that the above information you provided is true, accurate and complete"}, 
		
			form2_nric_number: { required: "Please enter your NRIC." },
			form2_current_passport_number: { required: "Please enter your current passport number" },
			form2_passport_number: { required: "Please enter your passport number" },			
			
			form2_date_of_birth: { required: "Please enter your date of birth." },
			form2_gender: { required : "Please select your gender"},
			form2_marital_status: { required: "Please select your marital status." },
			form2_education_status: {  required: "Please select your highest education level." },
			form2_number_of_dependents : {required: "Please enter your number of dependents." }

		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
        errorPlacement: function(error, element) {
     		if (element.attr("name") == "form2_date_of_birth")
       			error.insertAfter("#lbl_form2_date_of_birth");
     		else if (element.attr("name") == "form2_postal_code")
       			error.insertAfter("#lbl_form2_postal_code_container");
            else if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
 			else if (element.attr("name") == "form2_usresident")
        			error.insertAfter("#usresidentRadios");					
            else if (element.attr("name") == "form2_uscitizen")
        			error.insertAfter("#uscitizenRadios");										
            else if (element.attr("name") == "form2_greencard")
        			error.insertAfter("#greencardRadios");										
            else if (element.attr("name") == "form2_consent")
        			error.insertAfter("#lbl_form2_consent");							
            else if (element.attr("name") == "form2_birth_country")
        			error.insertAfter(element);								
			else {
                error.appendTo( element.parent().next() ); 
			}
		}
	});
	
	// cancel button
	$("#new_credit_card_back").click(
		function() {
			display_notes_page();
		}
	);
	
	// form submission
	$("#check_new_credit_card_1").click(
		function() {
			form_new_customer_credit_cards_1_display_all(); // show all tab content
			if (  ($("#form_new_customer_credit_cards_1").valid())) {
				preview_form2();
				$.scrollTo(0,500,{onAfter:function() {
						$("#new_credit_card .bc2").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_2");
						$("#coda-slider-2 .panel02").addClass("selected-panel");
						$("#coda-slider-2 .panel01").removeClass("selected-panel");
						$(".form2_header_personal").hide();
						$(".form2_header_residential").show();						
						$(".form2_header_employment").hide();
						$(".form2_header_other").hide();
						$(".form2_header_review").hide();
						$("#form_new_customer_credit_cards_1 .next").click();
					resizeSlider();
				}});
				return false;
			} else {
				$.scrollTo($('.error:visible:first'),500,{offset:-50});
				resizeSlider();
			}
			$("#genderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
  			return false;
		}
	);
	
	/************************** step 2 ***************************/
	
	// form validation
	$("#form_new_customer_credit_cards_2").validate({
   		groups: {
			form21: "form2_length_of_stay_at_address_years form2_length_of_stay_at_address_months"
        },
  		rules: {

	// --- address info
			form2_block_number: { required: true, minlength: 1, maxlength: 8, alphanumericwith2spec: true },
			form2_unit_number: { maxlength: 8 },
			form2_street_name: { required: true, minlength: 2, maxlength: 30, alphanumericwith2spec: true },
			form2_building_name: { maxlength: 30, alphanumericwith2spec: true },
			form2_postal_code: { required: true, minlength: 5, maxlength: 6, alphanumeric: true },
			form2_residential_ownership: { required: true, minlength: 1 },
			form2_type_of_residence: { required: true, minlength: 1 },
			form2_length_of_stay_at_address_years: { required: true, minlength:1, maxlength:2, numberonly: true, min: 0 },
			form2_length_of_stay_at_address_months: { required: true, minlength:1, maxlength:2, numberonly: true, min: 0, max: 11 },
			form2_overseas_address: { required: "#form2_overseas_address:visible" },
			form2_overseas_contact_country_code: { required: "#form2_overseas_contact_country_code:visible", numberonly: true, maxlength:3 },
			form2_overseas_contact_area_code: { numberonly: true, maxlength:3},
			form2_overseas_contact_tel_no: { required: "#form2_overseas_contact_tel_no:visible", numberonly: true, minlength:5, maxlength: 15 }
  		},		
		messages: {
			form2_block_number: { required: "Please enter the block/house number." },
			form2_street_name: { required: "Please enter the street name." },
			form2_postal_code: { required: "Please enter the postal code." },
			form2_overseas_address: { required: "Please enter your overseas address." },
			form2_overseas_contact_country_code: { required: "Please enter the phone number for this address." },
			form2_overseas_contact_area_code: { required: "Please enter the phone number for this address."	},
			form2_overseas_contact_tel_no: { required: "Please enter the phone number for this address." },
			form2_length_of_stay_at_address_years: { required: "Please select the duration you have stayed at this address." },
			form2_length_of_stay_at_address_months: { required: "Please select the duration you have stayed at this address." },
			form2_type_of_residence: { required: "Please select the type of property you live in." },
			form2_residential_ownership: { required: "Please select the ownership status of your home." }

		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if( element.attr("name") == "form2_length_of_stay_at_address_years" ) {
				error.appendTo( element.parent().parent().next() ); 
			} else if ( element.attr("name") == "form2_length_of_stay_at_address_months" ) {		
				error.appendTo( element.parent().parent().next() ); 		
			} else {
				error.appendTo( element.parent().next() ); 
			}
		}
	});
	
	
	// cancel button
	$("#form_new_customer_credit_cards_2 .btn_back").click(
		function() {
			$("#form_new_customer_credit_cards_2 .back").click();
			$("#new_credit_card .bc2").removeClass("selected");
			$("#new_credit_card .bc1").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_2").addClass("step_1");
				$("#coda-slider-2 .panel01").addClass("selected-panel");
				$("#coda-slider-2 .panel02").removeClass("selected-panel");
				$(".form2_header_personal").show();
				$(".form2_header_employment").hide();
				$(".form2_header_residential").hide();
				$(".form2_header_other").hide();
				$(".form2_header_review").hide();
		}
	);
	
	// form submission
	$("#check_new_credit_card_2").click(
		function() {
			form_new_customer_credit_cards_2_display_all(); // show all tab content
			if (  ($("#form_new_customer_credit_cards_2").valid())) {
				preview_form2();
				$.scrollTo(0,500,{onAfter:function() {
					//$("#new_credit_card .tabs li").removeClass("selected");
					$("#new_credit_card .bc3").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_2").addClass("step_3");
					$("#coda-slider-2 .panel03").addClass("selected-panel");
					$("#coda-slider-2 .panel02").removeClass("selected-panel");
					$(".form2_header_personal").hide();
					$(".form2_header_employment").show();
					$(".form2_header_residential").hide();
					$(".form2_header_other").hide();
					$(".form2_header_review").hide();
					$("#form_new_customer_credit_cards_2 .next").click();
					resizeSlider();
				}});
				return false;
			} else {
				$.scrollTo($('.error:visible:first'),500,{offset:-50});
				resizeSlider();
			}
  			return false;
		}
	);
	
	
	/************************** step 3 ***************************/

	
	$("input[name='form2_submit_cpf']").click(
		function() {
			if ($("input[name='form2_submit_cpf']:checked").val() == "Yes"){
				$("#tr_cpflink").show();
			}
			else {
				$("#tr_cpflink").hide();
			}
			resizeSlider();
		}
	);
	
	$("input[name='form2_mailing_address']").click(
		function() {
			if ($("input[name='form2_mailing_address']:checked").val() == "Other") {
				$(".mailing_address_container").show();
			} else {
				$(".mailing_address_container").hide();			
				$(".mailing_address_container input").val('');						
			}
			resizeSlider();			
		}
	);

	// form validation
	$("#form_new_customer_credit_cards_3").validate({
   		groups: {
			form31: "form2_years_in_service form2_months_in_service"
        },
  		rules: {
			form2_name_of_employer: { required: true, minlength: 2, maxlength: 30, alphanumericwith2spec: true },		
			form2_nature_of_employment: { required: true, minlength: 1 },
			form2_employer_block_number: { required: true, minlength: 1, maxlength: 8, alphanumericwith2spec: true },
			form2_employer_unit_number: { maxlength: 30 },
			form2_employer_street_name: { required: true, minlength: 2, maxlength: 30, alphanumericwith2spec: true },
			form2_employer_building_name: { maxlength: 30, alphanumericwith2spec: true },
			form2_employer_postal_code: { required: true, minlength: 5 , maxlength: 6, alphanumeric: true },
			form2_occupation: { required: true, minlength: 1 },
			form2_job_title: { required: true, minlength: 1	},
			form2_years_in_service: { required: true, numberonly: true, maxlength: 2, min: 0 },
			form2_months_in_service: { required: true, numberonly: true, maxlength: 2, min: 0, max: 11},
			form2_annual_income: { required: true, number: true, min: 0, maxlength: 15 },
			form2_mailing_block_number: { required: "#form2_mailing_block_number:visible", minlength: 1, maxlength: 8, alphanumericwith2spec: true },
			form2_mailing_unit_number: { maxlength: 30 },
			form2_mailing_street_name: { required: "#form2_mailing_street_name:visible", minlength: 2, maxlength: 30, alphanumericwith2spec: true },
			form2_mailing_building_name: { maxlength: 30, alphanumericwith2spec: true },
			form2_mailing_postal_code: { required: "#form2_mailing_postal_code:visible", minlength: 5 , maxlength: 6, alphanumeric: true }			
  		},		
		messages: {
			form2_name_of_employer: { required: "Please enter the company name." },		
			form2_nature_of_employment: { required: "Please select one." },
			form2_employer_block_number: { required: "Please enter the block number." },
			form2_employer_street_name: { required: "Please enter the street name."	},
			form2_employer_postal_code: { required: "Please enter the postal code."	},			
			form2_occupation: { required: "Please select your business type." },
			form2_job_title: { required: "Please select your job title." },
			form2_years_in_service: { required: "Please enter the duration you have been in service with this company." },
			form2_months_in_service: { required: "Please enter the duration you have been in service with this company."},
			form2_annual_income: { required: "Please enter your annual income." },
			form2_mailing_block_number: { required: "Please enter the block number." },
			form2_mailing_street_name: { required: "Please enter the street name."	},
			form2_mailing_postal_code: { required: "Please enter the postal code."	}
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if( element.attr("name") == "form2_years_in_service" ) {
				error.appendTo( element.parent().parent().next() ); 
			} else if ( element.attr("name") == "form2_months_in_service" ) {		
				error.appendTo( element.parent().parent().next() ); 		
			} else if ( element.is(":radio") ) 
                error.appendTo( element.parent().parent().next());
			else if ( element.is(":checkbox") ) 
                error.appendTo( element.parent().parent().parent().next());
 			else
                error.appendTo( element.parent().next() );
   		}
	});

	
	// cancel button
	$("#form_new_customer_credit_cards_3 .btn_back").click(
		function() {
			$("#form_new_customer_credit_cards_3 .back").click();
			$("#new_credit_card .bc3").removeClass("selected");
			$("#new_credit_card .bc2").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_3").addClass("step_2");
				$("#coda-slider-2 .panel02").addClass("selected-panel");
				$("#coda-slider-2 .panel03").removeClass("selected-panel");
				$(".form2_header_personal").hide();
				$(".form2_header_employment").hide();
				$(".form2_header_residential").show();
				$(".form2_header_other").hide();
				$(".form2_header_review").hide();
		}
	);
	
	// form submission
	$("#check_new_credit_card_3").click(
		function() {
			form_new_customer_credit_cards_3_display_all(); // show all tab content
			if (  ($("#form_new_customer_credit_cards_3").valid())) {
				preview_form2();
				$.scrollTo(0,500,{onAfter:function() {
					$("#new_credit_card .bc4").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_3").addClass("step_4");
					$("#coda-slider-2 .panel04").addClass("selected-panel");
					$("#coda-slider-2 .panel03").removeClass("selected-panel");
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_residential").hide();
					$(".form2_header_other").show();
					$(".form2_header_review").hide();
					$("#form_new_customer_credit_cards_3 .next").click();
					resizeSlider();
				}});
				return false;
			} else {
				$.scrollTo($('.error:visible:first'),500,{offset:-50});
				resizeSlider();
			}
  			return false;
		}
	);
	
	/************************** step 4 ***************************/

	// form validation
	$("#form_new_customer_credit_cards_4").validate({
  		rules: {
			form2_os_account_holder_name: {required: "#form2_os_account_holder_name:visible", alpha: true, minlength: 5, maxlength:30},
			form2_os_nric: {required: "#form2_os_nric:visible", alphanumericwithspec: true, minlength: 9, maxlength:9},
			form2_os_account_type: {required: "#form2_os_account_type:visible", minlength:1},
			form2_os_account_card_number: {required: "#form2_os_account_card_number:visible", numberonly: true, maxlength:16},
			form2_os_bank: {required: "#form2_os_bank:visible", minlength:1},
			form2_os_transfer_amount: {required: "#form2_os_transfer_amount:visible", numberonly: true, maxlength:16, min: 500},
			form2_os_saving_current_account: {required: "#form2_os_saving_current_account:visible", numberonly: true, maxlength:16}
  		},		
		messages: {
			form2_os_account_holder_name: {required: "Please enter the account holder name"},
			form2_os_nric: {required: "Please enter the NRIC number"},
			form2_os_account_type: {required: "Please select the account type"},
			form2_os_account_card_number: {required: "Please enter the account / credit card number"},
			form2_os_bank: {required: "Please select the bank"},
			form2_os_transfer_amount: {required: "Please enter the transfer amount"},
			form2_os_saving_current_account: {required: "Please enter the savings/current account number"}
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
            error.appendTo( element.parent().next() );
   		}
	});

	
	// cancel button
	$("#form_new_customer_credit_cards_4 .btn_back").click(
		function() {
			$("#form2_upload_next_back .back").click();
			$("#new_credit_card .bc5").removeClass("selected");
			$("#new_credit_card .bc4").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_3");
				$("#coda-slider-2 .panel04").addClass("selected-panel");
				$("#coda-slider-2 .panel05").removeClass("selected-panel");
				$(".form2_header_personal").hide();
				$(".form2_header_employment").show();
				$(".form2_header_residential").hide();
				$(".form2_header_other").hide();
				$(".form2_header_review").hide();
				$("errorMessageBox_step1").hide();
		}
	);
	
	// form submission
	$("#check_new_credit_card_4").click(
		function() {
			form_new_customer_credit_cards_4_display_all(); // show all tab content
			if (($("#form_new_customer_credit_cards_4").valid())) {
				preview_form2();
				$.scrollTo(0,500,{onAfter:function() {
					$("#new_credit_card .bc6").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_3").removeClass("step_4").addClass("step_5");
					$("#coda-slider-2 .panel06").addClass("selected-panel");
					$("#coda-slider-2 .panel04").removeClass("selected-panel");
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_residential").hide();
					$(".form2_header_other").hide();
					$(".form2_header_review").show();					
					$("#form2_upload_next_back .next").click();
				}});
			}
			resizeSlider();
			return false;
		}
	);
	
	$(".form2_os_fund_transfer_div").hide();	
	var form2_os_fund_transfer = "I do not want to apply for Salary Advance Funds Transfer." 
	$("input[name='form2_os_fund_transfer']").click(
		function() {
			if ($("input[name='form2_os_fund_transfer']").is(":checked")) {
				$(".form2_os_fund_transfer_div").show();
				form2_os_fund_transfer = "I want to apply for Salary Advance Funds Transfer." 
			}
			else {
				$(".form2_os_fund_transfer_div").hide();
				$(".form2_os_fund_transfer_div input").val("");				
				$(".form2_os_fund_transfer_div select").val("");								
				form2_os_fund_transfer = "I do not want to apply for Salary Advance Funds Transfer." 
				$(this).blur();
			}
			resizeSlider();			
		}	
	);
	
	$(".form2_os_link_debit_card_div").hide();
	var form2_os_link_debit_card = "I do not want to apply to link the Debit Card to my Standard Chartered Savings / Current Account.";
	$("input[name='form2_os_link_debit_card']").click(
		function() {
			if ($("input[name='form2_os_link_debit_card']").is(":checked")) {
				form2_os_link_debit_card = "I want to apply to link the Debit Card to my Standard Chartered Savings / Current Account.";
				$(".form2_os_link_debit_card_div").show();
			} 
			else {
				form2_os_link_debit_card = "I do not want to apply to link the Debit Card to my Standard Chartered Savings / Current Account.";
				$(".form2_os_link_debit_card_div").hide();
				$(".form2_os_link_debit_card_div input").val("");				
				$(this).blur();
			}
			resizeSlider();			
		}	
	);

	var form2_os_combined_statement = "I want to apply for the Combined Statement Service.";
	var form2_os_ibanking = "I want to apply for Standard Chartered Internet Banking and Phone Banking.";

	var form2_os_go_green = "I do not wish to Go Green with eStatement and wish to receive paper statements.";
	$("input[name='form2_os_go_green']").click(
		function() {
			if ($("input[name='form2_os_go_green']").is(":checked")) {
				form2_os_go_green = "I wish to Go Green with eStatement and do not wish to receive paper statements.";
			} 
			else {
				form2_os_go_green = "I do not wish to Go Green with eStatement and wish to receive paper statements.";
				$(this).blur();
			}
			resizeSlider();			
		}	
	);

	
	/************************** step 6 ***************************/

	// form validation
	$("#form_new_customer_credit_cards").validate({
   		groups: {
        },
  		rules: {
  		},		
		messages: {
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		//errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
        errorPlacement: function(error, element) {
     		if (element.attr("name") == "form2_date_of_birth")
       			error.insertAfter("#lbl_form2_date_of_birth");
     		else if (element.attr("name") == "form2_postal_code")
       			error.insertAfter("#lbl_form2_postal_code_container");
            else if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
 			else if (element.attr("name") == "form2_usresident")
       			error.insertAfter("#usresidentRadios");					
            else if (element.attr("name") == "form2_uscitizen")
       			error.insertAfter("#uscitizenRadios");										
            else if (element.attr("name") == "form2_greencard")
       			error.insertAfter("#greencardRadios");										
            else if (element.attr("name") == "form2_consent")
       			error.insertAfter("#lbl_form2_consent");							
            else if (element.attr("name") == "form2_birth_country")
       			error.insertAfter(element);	
			else if( element.attr("name") == "form2_length_of_stay_at_address_years" ) 
				error.appendTo( element.parent().parent().next() ); 
			else if ( element.attr("name") == "form2_length_of_stay_at_address_months" ) 
				error.appendTo( element.parent().parent().next() ); 		
			else if( element.attr("name") == "form2_years_in_service" ) 
				error.appendTo( element.parent().parent().next() ); 
			else if ( element.attr("name") == "form2_months_in_service" ) 
				error.appendTo( element.parent().parent().next() ); 		
 			else if (element.is(":radio") ) 
                error.appendTo( element.parent().parent().next());
			else if ( element.is(":checkbox") ) 
                error.appendTo( element.parent().parent().parent().next());
 			else {
                error.appendTo( element.parent().next() ); 
			}
		}
	});
	
	 var settingn = $('#form_notes_information').validate().settings.rules;	
     var setting1 = $('#form_new_customer_credit_cards_1').validate().settings.rules;
     var setting2 = $('#form_new_customer_credit_cards_2').validate().settings.rules;
     var setting3 = $('#form_new_customer_credit_cards_3').validate().settings.rules;
     var setting4 = $('#form_new_customer_credit_cards_4').validate().settings.rules;	 
     var settings = $('#form_new_customer_credit_cards').validate().settings.rules;
	 
     $.extend(settings, settingn, setting1, setting2, setting3, setting4);
	 
     settingn = $('#form_notes_information').validate().settings.messages;
     setting1 = $('#form_new_customer_credit_cards_1').validate().settings.messages;
     setting2 = $('#form_new_customer_credit_cards_2').validate().settings.messages;
     setting3 = $('#form_new_customer_credit_cards_3').validate().settings.messages;
     setting4 = $('#form_new_customer_credit_cards_4').validate().settings.messages;
     settings = $('#form_new_customer_credit_cards').validate().settings.messages;
     $.extend(settings, settingn, setting1, setting2, setting3, setting4);
	 
     settingn = $('#form_notes_information').validate().settings.groups;
     setting1 = $('#form_new_customer_credit_cards_1').validate().settings.groups;
     setting2 = $('#form_new_customer_credit_cards_2').validate().settings.groups;
     setting3 = $('#form_new_customer_credit_cards_3').validate().settings.groups;
     setting4 = $('#form_new_customer_credit_cards_4').validate().settings.groups;
     settings = $('#form_new_customer_credit_cards').validate().settings.groups;
     $.extend(settings, settingn, setting1, setting2, setting3, setting4);	
	
	/******** contact preview **********/
	
	$("#from2_main_contact_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_main_contact_edit_container").show();
			$("#pre_form2_main_contact_preview_container").hide();
			$('#form2_main_contact_container').appendTo('#pre_form2_main_contact_edit_content_container');
			$("#pre_form2_main_contact_edit_container .note_width").addClass("note_width_edit");
			$("#pre_form2_main_contact_edit_container tr td").removeClass("note_width");
			$(".form2_note_tc_container").hide();
			resizeSlider();
			clonefields( "pre_form2_main_contact_edit_content_container" );
			return false;
		}
	);

	$("#from2_main_contact_cancel").click(
		function() {
			$("#pre_form2_main_contact_edit_container").hide();
			$("#pre_form2_main_contact_preview_container").show();
			resizeSlider();
			restorefields( "pre_form2_main_contact_edit_content_container" );
			resetCancelFields( "pre_form2_main_contact_edit_content_container" );
			return false;
		}
	);

	$("#from2_main_contact_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_main_contact_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_main_contact_edit_container").hide();
				$("#pre_form2_main_contact_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_main_contact_edit_content_container" );
  			return false;
		}
	);

	/******** FATCA preview **********/
	
	$("#from2_fatca_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_fatca_edit_container").show();
			$("#pre_form2_fatca_preview_container").hide();

			var form2_usresident_radio_value = $("input[name='form2_usresident']:checked").val();	
			var form2_uscitizen_radio_value = $("input[name='form2_uscitizen']:checked").val();	
			var form2_greencard_radio_value = $("input[name='form2_greencard']:checked").val();	

			$('#form2_fatca_container').appendTo('#pre_form2_fatca_edit_content_container');

			$('input:radio[name="form2_usresident"]').filter('[value="' + form2_usresident_radio_value + '"]').attr("checked", true);
			$('input:radio[name="form2_uscitizen"]').filter('[value="' + form2_uscitizen_radio_value + '"]').attr("checked", true);
			$('input:radio[name="form2_greencard"]').filter('[value="' + form2_greencard_radio_value + '"]').attr("checked", true);

			resizeSlider();
			clonefields( "pre_form2_fatca_edit_content_container" );
			return false;
		}
	);

	$("#from2_fatca_cancel").click(
		function() {
			$("#pre_form2_fatca_edit_container").hide();
			$("#pre_form2_fatca_preview_container").show();
//			$('#form2_fatca_container').appendTo('#form2_fatca_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_fatca_edit_content_container" );
			resetCancelFields( "pre_form2_fatca_edit_content_container" );
			return false;
		}
	);

	$("#from2_fatca_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_fatca_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_fatca_edit_container").hide();
				$("#pre_form2_fatca_preview_container").show();
			}
			$("#usresidentRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
			$("#uscitizenRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
			$("#greencardRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});			
			resizeSlider();
			resetCancelFields( "pre_form2_fatca_edit_content_container" );
//			$('#form2_fatca_container').appendTo('#form2_fatca_container_wrapper');
  			return false;
		}
	);	
	
	
	/******** personal preview **********/
	
	$("#from2_personal_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_personal_edit_container").show();
			$("#pre_form2_personal_preview_container").hide();

			var form2_gender_radio_value = $("input[name='form2_gender']:checked").val();	
			var form2_nationality_radio_value = $("input[name='form2_nationality']:checked").val();	

			$('#form2_personal_container').appendTo('#pre_form2_personal_edit_content_container');

			$('input:radio[name="form2_gender"]').filter('[value="' + form2_gender_radio_value + '"]').attr("checked", true);
			$('input:radio[name="form2_nationality"]').filter('[value="' + form2_nationality_radio_value + '"]').attr("checked", true);

			resizeSlider();
			clonefields( "pre_form2_personal_edit_content_container" );
			return false;
		}
	);

	$("#from2_personal_cancel").click(
		function() {
			$("#pre_form2_personal_edit_container").hide();
			$("#pre_form2_personal_preview_container").show();
			//$('#form2_personal_container').appendTo('#form2_personal_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_personal_edit_content_container" );
			resetCancelFields( "pre_form2_personal_edit_content_container" );
			return false;
		}
	);

	$("#from2_personal_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_personal_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_personal_edit_container").hide();
				$("#pre_form2_personal_preview_container").show();
			}
			$("#genderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
			resizeSlider();
			resetCancelFields( "pre_form2_personal_edit_content_container" );
			//$('#form2_personal_container').appendTo('#form2_personal_container_wrapper');
  			return false;
		}
	);

	/******** address preview **********/
	
	$("#from2_address_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_address_edit_container").show();
			$("#pre_form2_address_preview_container").hide();

			//var form2_mail_to_be_sent_to_check_value = ( $('#form2_mail_to_be_sent_to').is(':checked') );

			$('#form2_address_container').appendTo('#pre_form2_address_edit_content_container');

			//if (form2_mail_to_be_sent_to_check_value) {$("#form2_mail_to_be_sent_to").attr('checked', true); }
			
			resizeSlider();
			clonefields( "pre_form2_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_address_cancel").click(
		function() {
			$("#pre_form2_address_edit_container").hide();
			$("#pre_form2_address_preview_container").show();
			//$('#form2_address_container').appendTo('#form2_address_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_address_edit_content_container" );
			resetCancelFields( "pre_form2_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_address_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_address_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_address_edit_container").hide();
				$("#pre_form2_address_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_address_edit_content_container" );
			//$('#form2_address_container').appendTo('#form2_address_container_wrapper');
  			return false;
		}
	);

	/******** employment preview **********/
	
	$("#from2_employment_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_employment_edit_container").show();
			$("#pre_form2_employment_preview_container").hide();

			//var form2_nature_of_employment_radio_value = $("input[name='form2_nature_of_employment']:checked").val();	

			$('#form2_employment_container').appendTo('#pre_form2_employment_edit_content_container');

			//$('input:radio[name="form2_nature_of_employment"]').filter('[value="' + form2_nature_of_employment_radio_value + '"]').attr("checked", true);

			resizeSlider();
			clonefields( "pre_form2_employment_edit_content_container" );
			return false;
		}
	);

	$("#from2_employment_cancel").click(
		function() {
			$("#pre_form2_employment_edit_container").hide();
			$("#pre_form2_employment_preview_container").show();
			//$('#form2_employment_container').appendTo('#form2_employment_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_employment_edit_content_container" );
			resetCancelFields( "pre_form2_employment_edit_content_container" );
			return false;
		}
	);

	$("#from2_employment_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_employment_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_employment_edit_container").hide();
				$("#pre_form2_employment_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_employment_edit_content_container" );
			//$('#form2_employment_container').appendTo('#form2_employment_container_wrapper');
  			return false;
		}
	);


	/******** mailing address preview **********/
	
	$("#from2_mailing_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_mailing_edit_container").show();
			$("#pre_form2_mailing_preview_container").hide();

			$('#form2_mailing_address_container').appendTo('#pre_form2_mailing_edit_content_container');

			resizeSlider();
			clonefields( "pre_form2_mailing_edit_content_container" );
			return false;
		}
	);

	$("#from2_mailing_cancel").click(
		function() {
			$("#pre_form2_mailing_edit_container").hide();
			$("#pre_form2_mailing_preview_container").show();
			//$('#form2_mailing_address_container').appendTo('#form2_mailing_address_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_mailing_edit_content_container" );
			resetCancelFields( "pre_form2_mailing_edit_content_container" );
			return false;
		}
	);

	$("#from2_mailing_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_mailing_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_mailing_edit_container").hide();
				$("#pre_form2_mailing_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_mailing_edit_content_container" );
			//$('#form2_mailing_address_container').appendTo('#form2_mailing_address_container_wrapper');
  			return false;
		}
	);

	$("#from2_pdpa_edit").click(
		function() {
			$("#pre_form2_pdpa_edit_container").show();
			$("#pre_form2_pdpa_preview_container").hide();

			for(var i=1, form2_pdpa; i < 11; i++) {
				form2_pdpa=$("input[name='form2_pdpa_q"+i+"']:checked").val();
				$('input:radio[name="form2_pdpa_q'+i+'1"]').filter('[value="' + form2_pdpa + '"]').attr("checked", true);		
			}				

			$('#form2_pdpa_container').appendTo('#pre_form2_pdpa_edit_content_container');

			resizeSlider();
			clonefields( "pre_form2_pdpa_edit_content_container" );
			return false;
		}
	);

	$("#from2_pdpa_cancel").click(
		function() {
			$("#pre_form2_pdpa_edit_container").hide();
			$("#pre_form2_pdpa_preview_container").show();
			resizeSlider();
			restorefields( "pre_form2_pdpa_edit_content_container" );
			resetCancelFields( "pre_form2_pdpa_edit_content_container" );
			return false;
		}
	);

	$("#from2_pdpa_save").click(
		function() {
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_pdpa_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_pdpa_edit_container").hide();
				$("#pre_form2_pdpa_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_pdpa_edit_content_container" );
  			return false;
		}
	);	
	
	/******** other services preview **********/
	
	$("#from2_os_edit").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			$("#pre_form2_os_edit_container").show();
			$("#pre_form2_os_preview_container").hide();

			$('#form2_other_services_container').appendTo('#pre_form2_os_edit_content_container');

			resizeSlider();
			clonefields( "pre_form2_os_edit_content_container" );
			return false;
		}
	);

	$("#from2_os_cancel").click(
		function() {
			$("#pre_form2_os_edit_container").hide();
			$("#pre_form2_os_preview_container").show();
			//$('#form2_other_services_container').appendTo('#form2_other_services_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_os_edit_content_container" );
			resetCancelFields( "pre_form2_os_edit_content_container" );
			return false;
		}
	);

	$("#from2_os_save").click(
		function() {
			if($("#errorMessageBox_fatca_container").css("display") != "none")
				return false;		
		
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_os_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_os_edit_container").hide();
				$("#pre_form2_os_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_os_edit_content_container" );
			//$('#form2_other_services_container').appendTo('#form2_other_services_container_wrapper');
  			return false;
		}
	);


	
	/******** T & C**********/
	
	$('#declarationmsg').scroll(function() {
		if (  $(this).scrollTop() > ($('#declarationmsg > .inner').height() -  $('#declarationmsg').height() - 10) ) {
		  // We're at the bottom!
			$('#form2_declaration_help').hide();
			$('#form2_declaration_control, #form2_declaration_control_2').show();
			resizeSlider();
		}
	});

	/******** preview generation **********/
	
	function preview_form2(){
	
		$("#pre_form2_usresident").html($("input[name='form2_usresident']:checked").val());
		$("#pre_form2_uscitizen").html($("input[name='form2_uscitizen']:checked").val());
		$("#pre_form2_greencard").html($("input[name='form2_greencard']:checked").val());
		$("#pre_form2_birth_country").html($("#form2_birth_country").val());
		$("#pre_form2_consent").html($("input[name='form2_consent']:checked").val());		
		
		$("#pre_form2_salutation").html($("#form2_salutation").val());
		$("#pre_form2_name").html($.trim( $("#form2_name").val() ));
		$("#pre_form2_nationality").html($("input[name='form2_nationality']:checked").val());
		$("#pre_form2_nric_number").html($("#form2_nric_number").val());
		$("#pre_form2_passport_number").html($("#form2_passport_number").val());
		$("#pre_form2_current_passport_number").html($("#form2_current_passport_number").val());
		$("#pre_form2_date_of_birth").html($("#form2_date_of_birth").val());
		$("#pre_form2_gender").html($("input[name='form2_gender']:checked").val());
		
		$("#pre_form2_residential").html($("#form2_residential").val());
		$("#pre_form2_office").html($("#form2_office").val());
		$("#pre_form2_mobile").html($("#form2_mobile").val());
		$("#pre_form2_email_address").html($("#form2_email_address").val());


		
		$("#pre_form2_marital_status").html($("#form2_marital_status").val());
		$("#pre_form2_number_of_dependents").html($("#form2_number_of_dependents").val());
		$("#pre_form2_education_status").html($("#form2_education_status").val());
		$("#pre_form2_block_number").html($("#form2_block_number").val());
		$("#pre_form2_unit_number").html($("#form2_unit_number").val());
		$("#pre_form2_street_name").html($("#form2_street_name").val());
		$("#pre_form2_building_name").html($("#form2_building_name").val());
		$("#pre_form2_postal_code").html($("#form2_postal_code").val());

		$("#pre_form2_overseas_address").html( $("#form2_overseas_address").val().replace(/(\r\n|\n|\r)/gm,"<br />"));	    		
		$("#pre_form2_overseas_contact_country_code").html($("#form2_overseas_contact_country_code").val());
		$("#pre_form2_overseas_contact_area_code").html($("#form2_overseas_contact_area_code").val());
		$("#pre_form2_overseas_contact_tel_no").html($("#form2_overseas_contact_tel_no").val());

		$("#pre_form2_employer_postal_code").html($("#form2_employer_postal_code").val());
		$("#pre_form2_employer_block_number").html($("#form2_employer_block_number").val());
		$("#pre_form2_employer_unit_number").html($("#form2_employer_unit_number").val());
		$("#pre_form2_employer_street_name").html($("#form2_employer_street_name").val());
		$("#pre_form2_employer_building_name").html($("#form2_employer_building_name").val());
		
		$("#pre_form2_length_of_stay_at_address_years").html($("#form2_length_of_stay_at_address_years").val() + " year(s) ");
		$("#pre_form2_length_of_stay_at_address_months").html($("#form2_length_of_stay_at_address_months").val() + " month(s) ");
		$("#pre_form2_type_of_residence").html($("#form2_type_of_residence option:selected").text());
		$("#pre_form2_residential_ownership").html($("#form2_residential_ownership option:selected").text());
		$("#pre_form2_nature_of_employment").html($("input[name='form2_nature_of_employment']:checked").val());
		$("#pre_form2_name_of_employer").html($("#form2_name_of_employer").val());

		$("#pre_form2_occupation").html($("#form2_occupation").val());
		$("#pre_form2_job_title").html($("#form2_job_title").val());
		
		$("#pre_form2_years_in_service").html($("#form2_years_in_service").val() + " year(s) ");
		$("#pre_form2_months_in_service").html($("#form2_months_in_service").val() + " month(s) ");
		$("#pre_form2_annual_income").html($("#form2_annual_income").val());
		$("#pre_form2_submit_cpf").html($("input[name='form2_submit_cpf']:checked").val());
		
		$("#pre_form2_mailing_address").html($("input[name='form2_mailing_address']:checked").val());		
		$("#pre_form2_mailing_block_number").html($("#form2_mailing_block_number").val());
		$("#pre_form2_mailing_unit_number").html($("#form2_mailing_unit_number").val());
		$("#pre_form2_mailing_street_name").html($("#form2_mailing_street_name").val());
		$("#pre_form2_mailing_building_name").html($("#form2_mailing_building_name").val());
		$("#pre_form2_mailing_postal_code").html($("#form2_mailing_postal_code").val());

		$("#pre_form2_os_account_holder_name").html($("#form2_os_account_holder_name").val());
		$("#pre_form2_os_nric").html($("#form2_os_nric").val());
		$("#pre_form2_os_account_type").html($("#form2_os_account_type").val());
		$("#pre_form2_os_account_card_number").html($("#form2_os_account_card_number").val());
		$("#pre_form2_os_bank").html($("#form2_os_bank").val());
		$("#pre_form2_os_transfer_amount").html($("#form2_os_transfer_amount").val());
		$("#pre_form2_os_saving_current_account").html($("#form2_os_saving_current_account").val());		
		
		$("#pre_form2_os_fund_transfer").html(form2_os_fund_transfer);
		$("#pre_form2_os_link_debit_card").html(form2_os_link_debit_card);
		$("#pre_form2_os_combined_statement").html(form2_os_combined_statement);
		$("#pre_form2_os_ibanking").html(form2_os_ibanking);
		$("#pre_form2_os_go_green").html(form2_os_go_green);
		
		for(var i=1, form2_pdpa; i < 11; i++) {
			form2_pdpa="Not selected";
			if( "YesNo".indexOf($("input[name='form2_pdpa_q"+i+"']:checked").val()) >= 0 ) {
				form2_pdpa=$("input[name='form2_pdpa_q"+i+"']:checked").val();
			}
			$("#pre_form2_pdpa_q"+i).html(form2_pdpa);	
		}			
	}
	
	// CPF Link Validation
	$("a#cpflink").click(function(){
       $("#cpfLinkClicked").val("true");
       window.open('https://www.cpf.gov.sg/elink/usr/login.asp?loan_code=CRC&stmt_type=15con&bank_id=stdcat10','disWindow','WIDTH=750,HEIGHT=500,toolbar=yes,directories=no,status=yes,scrollbars=yes,resize=no,menubar=no,top=30,left=30');
      });
	// end Link Validation

	
	// form validation
	$("#form_new_customer_credit_cards_submit").validate({
  		rules: {
			form2_declaration: { required: true, minlength: 1}
  		},		
		messages: {
  			form2_declaration: { required: "Please scroll down and read through the Salary Advance Declaration and Acceptance before submitting the application." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if(element.attr("name") == "form2_declaration") {
				error.insertAfter("#lbl_form2_declaration");
			} else {
				error.appendTo( element.parent().next() );
			}
   		}
	});
	
	// form submission
	$("#check_new_credit_card_6").click(
		function() {
			//$('.error_box').hide();
			if ( !$("#form_new_customer_credit_cards").valid() ) {
				resizeSlider();
				return false;
			}
			if ( !$("#form_new_customer_credit_cards_submit").valid() ) {
				resizeSlider();
				return false;
			}
		
			$("#h4declation, #divdeclation").hide();
		    
			window.onbeforeunload = null;
			var formxml = generateXml();
			formxml = formxml.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n", "");
			formxmlArr = formxml.split("<eform FID=\""+$('#formId').val()+"\">");
			formxmlArr.splice(0,1);
			$.each(formxmlArr, function(index, value) {
				var resultXML="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
				resultXML=resultXML+"<eform FID=\""+$('#formId').val()+"\">";  
				resultXML=resultXML+ value;
				if ((index != formxmlArr.length-1) && formxmlArr.length > 1) {
				resultXML = resultXML.substring(0, resultXML.length-39);
				}
				$.ajaxSetup({
					async: 'true'
					});
					var postURL="/nfs-ofp/ofpservice.htm";					
					if(window.location.hostname.toLowerCase().indexOf("localhost") > -1)			
						postURL = "/output.php";
					$.post(postURL, { formXML :  resultXML }, function(responseText, statusText){	

					if(statusText == "success") {
						$('#tempReturn').empty();
						$('#tempReturn').append(responseText);
						var returnText = $("#tempReturn td:contains('Form ')").text();
						returnText = returnText.replace(/\s*/g, '');
						returnText = returnText.replace(/FormSubmittedSuccesfully/g, ',');
						returnText = returnText.split(',')[1];
						if(returnText != null) {
							if( returnText.indexOf('%') != -1 ) {
								returnText = returnText.substring(0, returnText.indexOf('%'));
							}
							if(returnText.charCodeAt(returnText.length - 1) == 160) {
								returnText = returnText.substr(0,returnText.length-1);
							}								
							$(".newcard_receipt").append('<span>'+returnText+'</span><br />');
							$('#FormRefID').val(returnText);
							generateForm();
						
						} else {
							alert("Form submission failed, please try again later");
						}
						
					} else {
						alert("System is busy, please try again later");
					}

				});
			});

		}
	);

});

function showcontent(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_unit_number").attr("disabled", true).attr("value", "N.A");
			$("#form_new_customer_credit_cards_2").validate().element("#form2_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_2").validate().element("#form2_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_2").validate().showErrors({"form2_postal_code": "invalid postal code"});
		} else {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_2").validate().element("#form2_postal_code");
		}
		if( obj[0].buildingNumber != null && obj[0].buildingNumber != 'null') {
			var buildingNumber = obj[0].buildingNumber.substr(0,7);
			$('#form2_block_number').val('').val( buildingNumber );
		} else {
			$('#form2_block_number').val('');
		}
		if( obj[0].buildingName != null && obj[0].buildingName != 'null') {
			var buildingName = obj[0].buildingName.substr(0,30);
			$('#form2_building_name').val('').val( buildingName );
		} else {
			$('#form2_building_name').val('');
		}
		if( obj[0].streetName != null && obj[0].streetName != 'null') {
			var streetName = obj[0].streetName.substr(0,22);
			$('#form2_street_name').val('').val( streetName );
		} else {
			$('#form2_street_name').val('');
		}
	} else {
		$("#form2_unit_number").removeAttr("disabled").val("");
		$('#form2_building_name').val('');
		$('#form2_street_name').val('');
		$('#form2_block_number').val('');
	}
	$('#form2_postal_code').focus();
}

function getPostalCode(code){
	var pcode = code;
	if( pcode != "" && pcode.length > 4 ) {
		$.ajax({ 
			async:false, 
			url: 'https://apps1.standardchartered.com/sg_postalcode/App_loadByPostcode.action',  //
			type: 'GET', 
			data:{postcode:pcode,jsonp:'showcontent'},
			dataType: 'jsonp', 
			jsonp: 'showcontent', 
			timeout: 5000
		});
	} else {
		$("#form_new_customer_credit_cards_2").validate().element("#form2_postal_code");
	}

}

function showcontentoffice(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_employer_unit_number").attr("disabled", true).attr("value", "N.A");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_employer_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_employer_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().showErrors({"form2_postal_code": "invalid postal code"});
		} else {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_employer_postal_code");
		}
		if( obj[0].buildingNumber != null && obj[0].buildingNumber != 'null') {
			var buildingNumber = obj[0].buildingNumber.substr(0,7);
			$('#form2_employer_block_number').val('').val( buildingNumber );
		} else {
			$('#form2_employer_block_number').val('');
		}
		if( obj[0].buildingName != null && obj[0].buildingName != 'null') {
			var buildingName = obj[0].buildingName.substr(0,30);
			$('#form2_employer_building_name').val('').val( buildingName );
		} else {
			$('#form2_employer_building_name').val('');
		}
		if( obj[0].streetName != null && obj[0].streetName != 'null') {
			var streetName = obj[0].streetName.substr(0,22);
			$('#form2_employer_street_name').val('').val( streetName );
		} else {
			$('#form2_employer_street_name').val('');
		}
	} else {
		$("#form2_employer_unit_number").removeAttr("disabled").val("");
		$('#form2_employer_building_name').val('');
		$('#form2_employer_street_name').val('');
		$('#form2_employer_block_number').val('');
	}
	$('#form2_employer_postal_code').focus();
}

function getPostalCodeOffice(code){
	var pcode = code;
	if( pcode != "" && pcode.length > 4 ) {
		$.ajax({ 
			async:false, 
			url: 'https://apps1.standardchartered.com/sg_postalcode/App_loadByPostcode.action',  //
			type: 'GET', 
			data:{postcode:pcode,jsonp:'showcontentoffice'},
			dataType: 'jsonp', 
			jsonp: 'showcontentoffice', 
			timeout: 5000
		});
	} else {
		$("#form_new_customer_credit_cards_3").validate().element("#form2_employer_postal_code");
	}
}

function showcontentmailing(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_mailing_unit_number").attr("disabled", true).attr("value", "N.A");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_mailing_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_mailing_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_mailing_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_mailing_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().showErrors({"form2_postal_code": "invalid postal code"});
		} else {
			$("#form2_mailing_unit_number").removeAttr("disabled").val("");
			$("#form_new_customer_credit_cards_3").validate().element("#form2_mailing_postal_code");
		}
		if( obj[0].buildingNumber != null && obj[0].buildingNumber != 'null') {
			var buildingNumber = obj[0].buildingNumber.substr(0,7);
			$('#form2_mailing_block_number').val('').val( buildingNumber );
		} else {
			$('#form2_mailing_block_number').val('');
		}
		if( obj[0].buildingName != null && obj[0].buildingName != 'null') {
			var buildingName = obj[0].buildingName.substr(0,30);
			$('#form2_mailing_building_name').val('').val( buildingName );
		} else {
			$('#form2_mailing_building_name').val('');
		}
		if( obj[0].streetName != null && obj[0].streetName != 'null') {
			var streetName = obj[0].streetName.substr(0,22);
			$('#form2_mailing_street_name').val('').val( streetName );
		} else {
			$('#form2_mailing_street_name').val('');
		}
	} else {
		$("#form2_mailing_unit_number").removeAttr("disabled").val("");
		$('#form2_mailing_building_name').val('');
		$('#form2_mailing_street_name').val('');
		$('#form2_mailing_block_number').val('');
	}
	$('#form2_mailing_postal_code').focus();
}

function getPostalCodeMailing(code){
	var pcode = code;
	if( pcode != "" && pcode.length > 4 ) {
		$.ajax({ 
			async:false, 
			url: 'https://apps1.standardchartered.com/sg_postalcode/App_loadByPostcode.action',  //
			type: 'GET', 
			data:{postcode:pcode,jsonp:'showcontentmailing'},
			dataType: 'jsonp', 
			jsonp: 'showcontentsupcard', 
			timeout: 5000
		});
	} else {
		$("#form_new_customer_credit_cards_3").validate().element("#form2_mailing_postal_code");
	}

}

$(document).ready(function(){
	$('#form2_postal_code_findbutton').click(function() {
		getPostalCode( $('#form2_postal_code').val() );
		return false;
	});
	$('#form2_employer_postal_code_findbutton').click(function() {
		getPostalCodeOffice( $('#form2_employer_postal_code').val() );
		return false;
	});
	$('#form2_mailing_postal_code_findbutton').click(function() {
		getPostalCodeMailing( $('#form2_mailing_postal_code').val() );
		return false;
	});
});
