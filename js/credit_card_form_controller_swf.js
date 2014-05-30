/*************************** validation ***************************/
// get80 start
var get80id = '';
var isDGM;
var subChanCode = '';
// get80 end
/*
var idleTime = 0;
var timeoutUrl = "http://www.standardchartered.com.sg/credit-cards/";

function timerIncrement() {
    idleTime++;
    if (idleTime >= 900) { // 15 minutes
		window.location.replace(timeoutUrl);
    }
}
*/
var status = false;

function resizeSlider() {
	$('#coda-slider-2').height(($("#coda-slider-2 .selected-panel").height())+20);
	//console.log('resizeSlider');
}

// mouse over effect for upload file button
$(function() {
    $(".fileinputs_id")
        .mouseover(function(){
        	//$(this).css("text-decoration","underline");
		    $(".fileinputs_id .upload_file_over").show();
		    $(".fileinputs_id .upload_file").hide();

        })
        .mouseout(function(){
        	//$(this).css("text-decoration","none");
		    $(".fileinputs_id .upload_file_over").hide();
		    $(".fileinputs_id .upload_file").show();

        });
});

$(function() {
    $(".fileinputs_id_02")
        .mouseover(function(){
        	//$(this).css("text-decoration","underline");
		    $(".fileinputs_id_02 .upload_file_over").show();
		    $(".fileinputs_id_02 .upload_file").hide();

        })
        .mouseout(function(){
        	//$(this).css("text-decoration","none");
		    $(".fileinputs_id_02 .upload_file_over").hide();
		    $(".fileinputs_id_02 .upload_file").show();

        });
});

$(function() {
    $(".fileinputs_income")
        .mouseover(function(){
		    $(".fileinputs_income .upload_file_over").show();
		    $(".fileinputs_income .upload_file").hide();
        })
        .mouseout(function(){
		    $(".fileinputs_income .upload_file_over").hide();
		    $(".fileinputs_income .upload_file").show();
        });
});

$(function() {
    $(".fileinputs_supcard_01")
        .mouseover(function(){
		    $(".fileinputs_supcard_01 .upload_file_over").show();
		    $(".fileinputs_supcard_01 .upload_file").hide();
        })
        .mouseout(function(){
		    $(".fileinputs_supcard_01 .upload_file_over").hide();
		    $(".fileinputs_supcard_01 .upload_file").show();
        });
});

$(function() {
    $(".fileinputs_supcard_02")
        .mouseover(function(){
		    $(".fileinputs_supcard_02 .upload_file_over").show();
		    $(".fileinputs_supcard_02 .upload_file").hide();
        })
        .mouseout(function(){
		    $(".fileinputs_supcard_02 .upload_file_over").hide();
		    $(".fileinputs_supcard_02 .upload_file").show();
        });
});

// Mask the input field
var W3CDOM = (document.createElement && document.getElementsByTagName);

function initFileUploads() {
	if (!W3CDOM) return;
	var fakeFileUpload = document.createElement('div');
	fakeFileUpload.className = 'fakefile';
	fakeFileUpload.appendChild(document.createElement('input'));
	var image = document.createElement('img');
	image.src='btn_next.gif';
	fakeFileUpload.appendChild(image);
	var x = document.getElementsByTagName('input');
	for (var i=0;i<x.length;i++) {
		if (x[i].type != 'file') continue;
		if (x[i].parentNode.className != 'fileinputs') continue;
		x[i].className = 'file hidden';
		var clone = fakeFileUpload.cloneNode(true);
		x[i].parentNode.appendChild(clone);
		x[i].relatedElement = clone.getElementsByTagName('input')[0];
		x[i].onchange = x[i].onmouseout = function () {
			this.relatedElement.value = this.value;
		}
	}
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
var maxAge=65;
var minAge=21;
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
	var bDate = dtStr;
	var temp = new Array();
	temp = bDate.split('/');
	var newbDate = temp[1] + '/' + temp[0] + '/' + temp[2];
	var dob = new Date(newbDate);
	var todaystart = new Date();
	var todayend = new Date();

		//Age should be 18-60
	var yearstart = todaystart.getFullYear() - maxAge;
	var yearend = todaystart.getFullYear() - minAge;
	// Reset year.
	todaystart.setFullYear(yearstart);
	todayend.setFullYear(yearend);
	//alert(todaystart + "=<" + dob + "=<" + todayend);
	//if((dob <= todayend) && (dob >= todaystart)) {
	if((dob <= todayend)) {
		//alert ("true");
		return true;
	} else {
		//alert ("false");
		return false;
	}
	// return true;
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
	//$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").hide();
	$("#new_credit_card_thanks_page").hide();
	//$("#new_credit_card_thanks_page").show();
	$("div.form_existing_print_button").hide();
	$("div.form_new_print_button").hide();
	$("#new_or_existing").hide();
	$("#terms_and_conditions").hide();
	$("#loading_page").hide();
}

// display landing page
function display_landing_page() {
	$("#loading_page").hide();
	$("#landing_page").show();
	//$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").hide();
	$("#new_credit_card_thanks_page").hide();
	//$("#new_credit_card_thanks_page").show();
	$("div.form_existing_print_button").hide();
	$("div.form_new_print_button").hide();
	$("#new_or_existing").hide();
	$("#terms_and_conditions").hide();
}

// display notes page
function display_notes_page() {
	window.scrollTo(0,0);
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").show();
	$("#selected_cards").hide();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").hide();
	$("#new_credit_card_thanks_page").hide();
	//$("#new_credit_card_thanks_page").show();
	$("div.form_existing_print_button").hide();
	$("div.form_new_print_button").hide();
}

// display existing credit card page
function display_existing_credit_card_page() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").show();
	$("#existing_credit_card").show();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").hide();
	$("#new_credit_card_thanks_page").hide();
	$("div.form_existing_print_button").hide();
	$(".form1_link_to_personal_credit_container").hide();
}

// display exisiting credit card thanks page
function display_existing_credit_card_thanks_page() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	//$("#existing_credit_card").hide();
	$("existingcard_breadcrumb").hide();
	$("#existingcard_breadcrumb").hide();
	$("#existing_credit_card_thanks_page").show();
	$("#new_credit_card").hide();
	$("#new_credit_card_thanks_page").hide();
	$("#newcard_submit_form").hide();
	$("#existingcard_submit_form").hide();
	$(".form1_link_to_personal_credit_container").hide();
	$("div.form_existing_print_button").css('display','inline');
}

// display new credit card page
function display_new_credit_card_page() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").show();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").show();
	$("#new_credit_card_thanks_page").hide();
	$(".form2_link_to_personal_credit_container").hide();
	$("div.form_new_print_button").hide();
	$(".form2_header_personal").show();
	$(".form2_header_employment").hide();
	$(".form2_header_vas").hide();
	$(".form2_header_documents").hide();
	$(".form2_header_review").hide();
	resizeSlider();
}

// display new credit card thanks page
function display_new_credit_card_thanks_page() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	//$("#new_credit_card").hide();
	$("#newcard_breadcrumb").hide();
	$("#existingcard_breadcrumb").hide();
	$("#new_credit_card_thanks_page").show();
	$("#waiting_oage_for_aip").hide();
	$("#newcard_submit_form").hide();
	$("#existingcard_submit_form").hide();
	$("div.form_new_print_button").css('display','inline');
	$(".form2_link_to_personal_credit_container").hide();
	$("#terms_and_conditions").hide();
}

function display_waiting_oage_for_aip() {
	$("#loading_page").hide();
	$("#landing_page").hide();
	$("#notes_page").hide();
	$("#selected_cards").hide();
	$("#existing_credit_card").hide();
	$("#existing_credit_card_thanks_page").hide();
	$("#new_credit_card").hide();
	$("#newcard_breadcrumb").hide();
	$("#existingcard_breadcrumb").hide();
	$("#new_credit_card_thanks_page").hide();
	$("#waiting_oage_for_aip").show();
	$("#newcard_submit_form").hide();
	$("#existingcard_submit_form").hide();
	$("div.form_new_print_button").css('display','inline');
	$(".form2_link_to_personal_credit_container").hide();
	$("#terms_and_conditions").hide();
}

// hide all cards
function hide_all_cards() {
	$(".sc_platinum_visa_card").hide();
	$(".sc_platinum_mastercard").hide();
	$(".business_platinum_card").hide();
	$(".nus_alumni_platinum_card").hide();
	$(".prudential_platinum_card").hide();
}

// reset all forms
function resetForm(id) {
	$('#'+id).each(function(){
	        this.reset();
	});
}

// generate xml




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



/************************** onload functions ***************************/
$(document).ready(function(){
/*
    // AVT 15 mins timeout
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).mousedown(function (e) {
        idleTime = 0;
    });	
	setInterval("timerIncrement()", 1000); // 1 second
*/
	$('#form2_upload_id_01').change(function() {
		if( $('#form2_upload_id_01selectedfile').val() != '' ) {
			$('#form2_upload_id_01selectedfile').val('').val( $('#form2_upload_id_01 option:selected').text() );
		}
	});
	$('#form2_upload_id_02').change(function() {
		if( $('#form2_upload_id_02selectedfile').val() != '' ) {
			$('#form2_upload_id_02selectedfile').val('').val( $('#form2_upload_id_02 option:selected').text() );
		}
	});
	$('#form2_upload_id_03').change(function() {
		if( $('#form2_upload_id_03selectedfile').val() != '' ) {
			$('#form2_upload_id_03selectedfile').val('').val( $('#form2_upload_id_03 option:selected').text() );
		}
	});
	$('#form2_upload_id_04').change(function() {
		if( $('#form2_upload_id_04selectedfile').val() != '' ) {
			$('#form2_upload_id_04selectedfile').val('').val( $('#form2_upload_id_04 option:selected').text() );
		}
	});
	$('#form2_upload_income_01').change(function() {
		if( $('#form2_upload_income_01selectedfile').val() != '' ) {
			$('#form2_upload_income_01selectedfile').val('').val( $('#form2_upload_income_01 option:selected').text() );
		}
	});
	$('#form2_upload_income_02').change(function() {
		if( $('#form2_upload_income_02selectedfile').val() != '' ) {
			$('#form2_upload_income_02selectedfile').val('').val( $('#form2_upload_income_02 option:selected').text() );
		}
		
	});
	$('#form2_upload_supcard_01').change(function() {
		if( $('#form2_upload_supcard_01selectedfile').val() != '' ) {
			$('#form2_upload_supcard_01selectedfile').val('').val( $('#form2_upload_supcard_01 option:selected').text() );
		}
		
	});
	$('#form2_upload_supcard_02').change(function() {
		if( $('#form2_upload_supcard_02selectedfile').val() != '' ) {
			$('#form2_upload_supcard_02selectedfile').val('').val( $('#form2_upload_supcard_02 option:selected').text() );
		}
		
	});
	$('#form2_upload_address_01').change(function() {
		if( $('#form2_upload_address_01selectedfile').val() != '' ) {
			$('#form2_upload_address_01selectedfile').val('').val( $('#form2_upload_address_01 option:selected').text() );
		}
	});
	
	// prepare cc short form dialog
	/*
	$("#dialog-ccshort").dialog({
        bgiframe: true,
        width: 710,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "",
        closeOnEscape: false,
        open: function(event, ui) { $(".ui-icon-closethick, .ui-dialog-titlebar-close").hide(); }
	});
	
	var goccshort = false;
	$("input[name='form2_isccshortform']").click(function(){
		if($("input[name='form2_isccshortform']:checked").val() == "yes"){
			$(".ccshortq2").show();
			goccshort = false;
		} else {
			$(".ccshortq2").hide();
			$("#ccshortbutton").show();
			goccshort = false;
		}
	});
	
	$("input[name='form2_employmentchanged']").click(function(){
		if($("input[name='form2_employmentchanged']:checked").val() == "no"){
			goccshort = true;
		} else {
			goccshort = false;
		}
	});
	
	var Cardtype = jQuery.query.get("Cardtype");
	if( Cardtype == 'SG_PVC' || Cardtype == 'SG_PMC' || Cardtype == 'SG_MPC' || Cardtype == 'SG_NA' || Cardtype == 'SG_BPC'){
		$('#dialog-ccshort').dialog('open');
	} else {
		$('#ccshortformloading').remove();
	}
	
	$('#ccshortbutton').click(function(){
		$('#dialog-ccshort').dialog('close');
		if( goccshort ){
			window.onbeforeunload = null;
			$('#ccshortformloading_content').html('<span>Please wait while form is loading...</span>');
			document.location.replace('/dev/public_website/singapore/ccshortform/index.html?Cardtype='+Cardtype);
		} else {
			$('#ccshortformloading').remove();
		}
	});
	*/
	
	var confirmDialogMsg = "";
	confirmDialogMsg += '<div class="confirmmsg">';
	confirmDialogMsg += '<ol id="confirmoutter">';
	confirmDialogMsg += '<li>This offer is valid for new applications for the qualifying card types, with the correct promotion code entered on the online application form, from 9 May - 30 June 2011.</li>';
	confirmDialogMsg += '<li>Qualifying card types include: Visa Platinum Card, MasterCard Platinum Card, Business Platinum Card, NUS Alumni Platinum Card, MANHATTAN Platinum Card and the Prudential Platinum Card.</li>';
	confirmDialogMsg += '<li>All supporting documents should reach us no later than 3 days from the submission of your online application or no later than 30 June 2011, whichever is earlier.</li>';
	confirmDialogMsg += '<li>To receive the $50 rebate, you must charge to a retail transaction of any amount to your new credit card, within the first month from the receipt of your new credit card. Each customer is only entitled to a one-time rebate during this promotion period.</li>';
	confirmDialogMsg += '<li>We will credit the $50 to your Principal Credit Card account within one month from the date of your first transaction.</li>';
	confirmDialogMsg += '<li>We reserve the right to debit the $50 credit from any account you have with us if you terminate any of your existing Standard Chartered Credit Cards and re-apply.</li>';
	confirmDialogMsg += '<li>The following persons are not eligible for the $50 rebate:</li>';
	confirmDialogMsg += '<li style="list-style-type: none;">';
	confirmDialogMsg += '<ol id="confirminner">';
	confirmDialogMsg += '<li>If you hold any of the qualifying card and have terminated the qualifying card in the past 3 months for any reason; or</li>';
	confirmDialogMsg += '<li>you are our employee; or</li>';
	confirmDialogMsg += '<li>you have 3 or more of any of our credit card (including but not limited to the qualifying card types); or</li>';
	confirmDialogMsg += '<li>we receive your online application or supporting documents after 30 June 2011.</li>';
	confirmDialogMsg += '</ol>';
	confirmDialogMsg += '</li>';
	confirmDialogMsg += '</ol>';
	confirmDialogMsg += '<p></p>';
	confirmDialogMsg += '</div>';
	confirmDialogMsg += '<p>I have understood and accept the Terms and Conditions of this Programme.</p>';
	
	$("#dialog-confirm").dialog({
        bgiframe: true,
        width: 820,
        height: 550,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "ONLINE50 Programme Terms and Conditions",
		buttons: {
    		'I Do Not Agree': function() {
				$(this).dialog('close');
			},
			'I Agree': function() {
				$(this).dialog('close');
				//$("#new_credit_card .tabs li").removeClass("selected");
				$("#new_credit_card .bc2").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_2");
				$("#coda-slider-2 .panel02").addClass("selected-panel");
				$("#coda-slider-2 .panel01").removeClass("selected-panel");
				$(".form2_header_personal").hide();
				$(".form2_header_employment").show();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
				$("#form_new_customer_credit_cards_1 .next").click();
			}
		}
	});
	
	// get80 start
	get80id = jQuery.query.get("ID");
	//get80id = get80id+"";
	//console.log('What is get80: '+get80id);
	if(get80id != "") {
		// add checking to detect if the ID is not from money line, then it is DGM
		if( get80id != "mon300100" && get80id != "mon120600" && get80id != "mon12090" && get80id != "mon46860" && get80id != "mon300250" && get80id != "admaxboost" && get80id != "xinmsn" && get80id != "yahoo" && get80id != "Facebook" ) {
			$.cookie('get80_id', null);
			get80id = get80id.substr(0,12);
			$.cookie('get80_id', get80id);
			location.replace('credit_card_form.html?DGM');			
		} else {
			$('#form2_promotionCode').val('online50').attr('readonly','readonly');
		}
	} else {
		isDGM = jQuery.query.get("DGM");
		if( isDGM ) {
			get80id = $.cookie('get80_id');
            $('#form2_promotionCode').val('online50').attr('readonly','readonly');
			//console.log('Got DGM');
		}
		//alert(get80id);
	}
	//alert(get80id);
	// get80 end

	$('form input.help, form textarea.help').formtips({ 
        tippedClass: 'tipped'
    });
	
	// all text input as alphanumic
	$("input:text").addClass('alphanumericwithspec');
	$("#form2_name_of_employer, #form2_name_of_business").removeClass('alphanumericwithspec');
	
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
						   							   
	// show landing page 
	//display_landing_page()
	//display_notes_page();
	
	// hide main account holder details
	$("#form_main_account_holder_details").hide();
	
	// hide all cards
	hide_all_cards();
	
	// validate full name					   
	$.validator.addMethod("validFullName", function(value, element) {
 		var result = true;
 		if( $("#form2_first_name").val().length + $("#form2_name").val().length >= 30 ) {
 			result = false;
 		}
 		return result;
 	}, "First name and Last name should collectively not exceed 29 characters. Please amend and try again.");
	
	// validate date					   
	$.validator.addMethod("validDate", function(value, element) {
 		var result = this.optional(element) || isDate(value) == true;
 		return result;
 	}, "Please enter a valid date. <br />Age must be between 21 to 65.");
	
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
	$(".date_picker").datepick({
		minDate: -maxAge+"y", 
		maxDate: -minAge +"y", 
		yearRange: minYear+":"+maxYear, 
		showOn: "button", 
		buttonImageOnly: true, 
		buttonImage: "images/calendar_blue.jpg"});
	
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
	
	$.validator.addMethod("nameOnCard", function(value, element) {
		var result = this.optional(element) || /^[a-zA-Z0-9 ]+$/.test(value);
		return result;
	}, "Please enter only letters, numbers, and spaces.");
	
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
	$.validator.addMethod('validPromoCode', function (value) {
		var online50Found = $("#form2_promotionCode").val().match(/online50/i);
		if( ($("#form2_promotionCode").val() != "" && $("#form2_promotionCode").val().length != 8) || 
				($("#form2_promotionCode").val() != "" && online50Found == null) ) {
	    	return false;
	    } else {
	    	return true;
	    }
		
	}, 'Sorry, this promotion code is not recognised.');
	
	$("#form_source_promo_code").validate({
  		rules: {
			form2_promotionCode: { validPromoCode: true }
  		}
	});
	
	/************************** landing page ***************************/

	// check minimum 1 and maximum 3 cards are selected
	$(".check_landing_page").click(
		function() {
			var total_cards = 0;
			var card_1 = 0;
			var card_2 = 0;
			var card_3 = 0;
			var card_4 = 0;
			var card_5 = 0;
			var card_6 = 0;
			
			if ($("#card_1").attr("checked")) {
				card_1 = 1;  
				$(".sc_platinum_mastercard").show();
				$(".sc_platinum_mastercard_text").show();
				$('#selectedCard').val('').val('SG_PC');
			}
			else{
				card_1 = 0;  
				$(".sc_platinum_mastercard").hide();
				$(".sc_platinum_mastercard_text").hide();
			}
			
			if ($("#card_2").attr("checked")) {
				card_2 = 1;  
				$(".sc_platinum_visa_card").show();
				$(".sc_platinum_visa_card_text").show();
				$('#selectedCard').val('').val('SG_MPC');
			}
			else{
				card_2 = 0;  
				$(".sc_platinum_visa_card").hide();
				$(".sc_platinum_visa_card_text").hide();
			}
			
			if ($("#card_3").attr("checked")) {
				card_3 = 1;    	
				$(".business_platinum_card").show();    
				$(".business_platinum_card_text").show();
				$('#selectedCard').val('').val('SG_BPC'); 
			}
			else{
				card_3 = 0;  
				$(".business_platinum_card").hide();
				$(".business_platinum_card_text").hide();
			}
			
			
			if ($("#card_4").attr("checked")) {
				card_4 = 1; 
				$(".nus_alumni_platinum_card").show();
				$(".nus_alumni_platinum_card_text").show();
				$('#selectedCard').val('').val('SG_NA');
			}
			else{
				card_4 = 0;  
				$(".nus_alumni_platinum_card").hide();
				$(".nus_alumni_platinum_card_text").hide();
			}
			
			if ($("#card_5").attr("checked")) {
				card_5 = 1;   
				$(".prudential_platinum_card").show();
				$(".prudential_platinum_card_text").show();
				$('#selectedCard').val('').val('SG_PPC');
			}
			else{
				card_5 = 0;  
				$(".prudential_platinum_card").hide();
				$(".prudential_platinum_card_text").hide();
			}
			
			if ($("#card_6").attr("checked")) {
				card_6 = 1;   
				$(".manhattan_platinum_card").show();
				$(".manhattan_platinum_card_text").show();
				$('#selectedCard').val('').val('SG_MC');
			}
			else{
				card_6 = 0;  
				$(".manhattan_platinum_card").hide();
				$(".manhattan_platinum_card_text").hide();
			}
			
			total_cards = card_1 + card_2 + card_3 + card_4 + card_5 + card_6;
			
			if (total_cards < 1) {
				//alert("Please select at least 1 card to continue.");	
				alert("Please select 1 card to continue.");	
			}
			else if (total_cards > 1) {
				alert("You are applying for more than 1 card. You may only apply up to 1 card at the same time.");
				//alert("You are applying for more than 2 cards. You may only apply up to 2 cards at the same time.");
				hide_all_cards();
			}
			else {
				display_notes_page();
				//if (total_cards == 1) {
					$("#new_credit_card .coda-slider").removeClass("card2moveup");
					$("#new_credit_card .coda-slider").addClass("card1moveup");
				/*} else {
					$("#new_credit_card .coda-slider").removeClass("card1moveup");
					$("#new_credit_card .coda-slider").addClass("card2moveup");
					if (card_1 == 1) 
						$('<span style="font-size:12pt"> and the </span>').appendTo('.sc_platinum_mastercard_text');
					else {
					if (card_2 == 1)
						$('<span style="font-size:12pt"> and the </span>').appendTo('.sc_platinum_visa_card_text');
					else if (card_3 == 1)
						$('<span style="font-size:12pt"> and the </span>').appendTo('.business_platinum_card_text');
					else if (card_4 == 1)
						$('<span style="font-size:12pt"> and the </span>').appendTo('.nus_alumni_platinum_card_text');
					else if (card_5 == 1)
						$('<span style="font-size:12pt"> and the </span>').appendTo('.prudential_platinum_card_text');
					else if (card_6 == 1)
						$('<span style="font-size:12pt"> and the </span>').appendTo('.manhattan_platinum_card_text');
					}
				}*/
			}
		}
	);
	
	// cancel button
	$("#landing_page_cancel").click(
		function() {
			display_landing_page();
		}
	);
	

	
	/************************** notes page ***************************/
	
	// check if valid credit card
	$("input[name='form_valid_credit_card']").click(
		function() {
			if ($("input[name='form_valid_credit_card']:checked").val() == "yes") {
				$("#form_main_account_holder_details").show();
			}
			else {
				$("#form_main_account_holder_details").hide();
			}
		}
	);	
	
	// form validation
	$("#form_notes_information").validate({
   		groups: {
            //form2_01: "form2_salutation form2_first_name",
            //form2_02: "form2_areacode_mobile form2_mobile"
        },
  		rules: {
			form2_salutation: { required: true, minlength: 1 },
			form2_first_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			//form2_middle_name: { minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			//form2_areacode_mobile: { required: true, number: true, minlength: 1, maxlength: 3 },
			form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			form2_email_address: { required: true, email: true, maxlength: 70 },
			form2_agree_tc: { required: false }
  		},		
		messages: {
			form2_salutation: { required: "Please select your title." },
			form2_first_name: { required: "Please enter your first name."},
			form2_name: { required: "Please enter your last name."},
			//form2_areacode_mobile: { required: "Please enter your mobile phone number." },
			form2_mobile: { required: "Please enter your mobile phone number." },
			form2_email_address: { required: "Please enter your email address."	},
			form2_agree_tc: { required: "Please read and agree to the terms and conditions by checking the check box." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step0",
		errorElement: "div",
        wrapper: "div class='error_box_note'",
        errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_agree_tc")
       			error.insertAfter("#lbl_form2_agree_tc");
			else if ( element.is(":radio") ) 
                error.appendTo( element.parent().next().next() ); 
            //else if ( element.is(":checkbox") ) 
              //  error.appendTo ( element.next() ); 
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
				$("#form2_name_on_card").attr("value",(($("input[name=form2_first_name]").val() + " " + $("input[name=form2_name]").val()).toUpperCase()));
				// Send Leads Function
				sendLeads();
				// call GA
				//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '1_LeadCapture');
			}
			return false;
			
		}
	);


	
	/************************** new credit card customer ***************************/
	
	/************************** step 1 ***************************/
	
	
	// check user nationality and either display nric or passport number
	$(".form2_nric_number_container").show();
	$(".form2_passport_number_container").hide();
	$(".form2_overseas_address_details").hide();
	
	/*$("#form2_date_of_birth").change(function(){
	$("#form_new_customer_credit_cards_1").validate().element("#form2_date_of_birth");
	$("#form_new_customer_credit_cards").validate().element("#form2_date_of_birth");
	});
	
	$("#form2_sup_date_of_birth").change(function(){
	$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_date_of_birth");
	$("#form_new_customer_credit_cards").validate().element("#form2_date_of_birth");
	});*/
	
	/*$("#country_code_home").change(function(){
	$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
	});
	
	$("#country_code_emp").change(function(){
	$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
	})*/
		
	$("select[name='form2_salutation']").change(
		function() {
			if ($("select[name='form2_salutation']").val() == "Mr") {
				$("#form2_gender_female").attr("selected", false);
				$("#form2_gender_female").removeAttr("checked");
				$("#form2_gender_female").siblings("label").removeClass("checked");
				//$("#form2_gender_female").attr("disabled", true);
				$("#form2_gender_male").removeAttr("disabled");
				$("#form2_gender_male").attr("selected", true);
				$("#form2_gender_male").attr("checked", "checked");
				$("#form2_gender_male").siblings("label").addClass("checked");
			} else if ($("select[name='form2_salutation']").val() == "Miss" || $("select[name='form2_salutation']").val() == "Mrs" || $("select[name='form2_salutation']").val() == "Mdm") {
				$("#form2_gender_male").attr("selected", false);
				$("#form2_gender_male").removeAttr("checked");
				$("#form2_gender_male").siblings("label").removeClass("checked");
				//$("#form2_gender_male").attr("disabled", true);
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
			//$("#form_new_customer_credit_cards_1").validate().element("input[name='form2_gender']");
			resizeSlider();
		}
	);

	// check user nationality
	$(".form2_overseas_container").hide();
	 
	// if nationality is not singaporean, display overseas fields
	/*$("input[name='form2_nationality']").click(
		function() {
			if ($("input[name='form2_nationality']:checked").val() == "Foreigner"){
				$(".form2_overseas_container").show();
			}
			else {
				$(".form2_overseas_container").hide();
			}
		}
	);*/

	$(".form2_salaried_container").show();
	$(".form2_self_employed_container").hide();

		if ($("input[name='form2_nature_of_employment']:checked").val() == "Salaried"){
			$(".form2_salaried_container").show();
			$(".form2_self_employed_container").hide();
			// document upload lsit
			$(".form2_income_proof_01_container").show();
			$(".form2_income_proof_02_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").show();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
             //show all income list options.
             $("#form2_upload_income_01").children("span").each(function(){
                 $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").show();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();
				
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").show();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
             //show all income list options.
             $("#form2_upload_income_01").children("span").each(function(){
                $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").show();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			}
			else {
				$(".form2_nric_number_container").hide();
				$(".form2_nric_number_container input").val('');
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").show();
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").show();
				$(".form2_id_proof_04_container").show();
				// hide income list option
				$("#form2_upload_income_01 option[value='002']").wrap("<span style='display:none'></span>");
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").show();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').show();

			}
		}
		else {
			$(".form2_salaried_container").hide();
			$(".form2_self_employed_container").show();
			// document upload lsit
			$(".form2_income_proof_02_container").show();
			$(".form2_income_proof_01_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").show();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").show();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").show();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").show();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			}
			else {
				$(".form2_nric_number_container").hide();
				$(".form2_nric_number_container input").val('');
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").show();
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").show();
				$(".form2_id_proof_04_container").show();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").show();
				
				// for foreigner
				$('.form2_for_01_container').show();

			}
		}
	
	$("input[name='form2_nationality']").click(
		function() {
		if ($("input[name='form2_nature_of_employment']:checked").val() == "Salaried"){
			$(".form2_salaried_container").show();
			$(".form2_self_employed_container").hide();
			// document upload lsit
			$(".form2_income_proof_01_container").show();
			$(".form2_income_proof_02_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").show();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
             //show all income list options.
             $("#form2_upload_income_01").children("span").each(function(){
                 $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").show();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").show();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
             //show all income list options.
             $("#form2_upload_income_01").children("span").each(function(){
                $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").show();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			}
			else {
				$(".form2_nric_number_container").hide();
				$(".form2_nric_number_container input").val('');
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").show();
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").show();
				$(".form2_id_proof_04_container").show();
				// hide income list option
				$("#form2_upload_income_01 option[value='002']").wrap("<span style='display:none'></span>");
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").show();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').show();

			}
		}
		else {
			$(".form2_salaried_container").hide();
			$(".form2_self_employed_container").show();
			// document upload lsit
			$(".form2_income_proof_02_container").show();
			$(".form2_income_proof_01_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").hide();
				$(".form2_passport_number_container input").val('');
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").show();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").show();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				$(".form2_nric_number_container").show();
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").hide();
				$(".form2_overseas_container input").val('');
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").show();
				$(".form2_id_proof_03_container").hide();
				$(".form2_id_proof_04_container").hide();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").show();
				$(".form2_app_user_32_container").hide();
				
				// for foreigner
				$('.form2_for_01_container').hide();

			}
			else {
				$(".form2_nric_number_container").hide();
				$(".form2_nric_number_container input").val('');
				$(".form2_passport_number_container").show();
				$(".form2_overseas_address_details").hide();
				$(".form2_overseas_address_details input").val('');
				$(".form2_overseas_container").show();
				// document upload list
				$(".form2_id_proof_01_container").hide();
				$(".form2_id_proof_02_container").hide();
				$(".form2_id_proof_03_container").show();
				$(".form2_id_proof_04_container").show();
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").show();
				
				// for foreigner
				$('.form2_for_01_container').show();

			}
		}
		resizeSlider();
		}
	);

// ---------------- contact info -------------
	// disable unit no. if not applicable
	$("#form2_contact_unit_number_na").click(function() {
		if($(this).attr("checked")) {
			$("#form2_contact_unit_number").attr("disabled", true).attr("value", "N.A").focus();
			$("#lbl_form2_contact_unit_number_container").siblings("label.error").hide();
			$("#form2_contact_unit_number").removeClass("error");
		} else {
			$("#form2_contact_unit_number").removeAttr("disabled").attr("value","").focus();					
		}
	});
	
	
	// populate address details based on user select

	
// ---------------- address panel -------------

	
	// disable unit no. if not applicable
	if ($("#form2_unit_number_na").attr("checked")) {
		$("#form2_unit_number").attr("disabled", true).attr("value", "N.A").focus();	
	}
	else
	{
		$("#form2_unit_number").removeAttr("disabled").attr("value","#");	
	}
	// disable unit no. if not applicable on click
	$("#form2_unit_number_na").click(function() {
		if($(this).attr("checked")) {
			$("#form2_unit_number").attr("disabled", true).attr("value", "N.A").focus();
			//$("#lbl_form2_unit_number_container").siblings("label.error").hide();
				$("#form_new_customer_credit_cards_1").validate().element("#form2_unit_number");
				$("#form_new_customer_credit_cards").validate().element("#form2_unit_number");
			$("#form2_unit_number").removeClass("error");
		} else {
			$("#form2_unit_number").removeAttr("disabled").attr("value","").focus();					
		}
	});
	
	//Validator for Country postal code
	$("#country_code_home").change(function(){
		$("#form2_postal_code").removeClass();
		var newClass = ($(this).val() == "SG") ? "postcodeSG" : "postcodeOther";
		$("#form2_postal_code").addClass(newClass);
		$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
		$("#form_new_customer_credit_cards").validate().element("#form2_postal_code");
	});

	
	$(".pcl_amount").hide();
	
	$("#form2_pcl_question_bank").click( function() {
		$("tr.pcl_question div.error_box").remove();	
		$(".pcl_amount").hide();
		$("#form2_pcl_amount").val("");
	});

	$("#form2_pcl_question_cust").click( function() {
		$("tr.pcl_question div.error_box").remove();	
		$(".pcl_amount").show();
		resizeSlider();
	});
	
	$("#form2_pcl_amount").blur( function() {
		if(this.value.length > 1) {
			var s = "";
			var nonZero=false;
			for(var i=0; i < this.value.length; i++) {
				if( this.value.substr(i,1) != "0" || nonZero) {
					s+=this.value.substr(i,1);
					nonZero=true;
				}
			}
			this.value = s;
		}
	});	
	
	// form validation
	$("#form_new_customer_credit_cards_1").validate({
   		groups: {
            //form2_11: "form2_areacode_residential form2_residential",
            //form2_12: "form2_contact_person_areacode_contact_number form2_contact_person_contact_number",
            form2_13: "form2_overseas_contact_country_code form2_overseas_contact_area_code form2_overseas_contact_tel_no"
        },
  		rules: {
			form2_pcl_question: { required: function(element) {return ($(".pcl_section").css("display") != "none" && $("input[name='form2_pcl_question']:checked").val() == undefined)} },
			form2_pcl_amount: {required: function(element) { return $("input[name='form2_pcl_question']:checked").val() == "BY CUSTOMER"}, min: 1, max: 999999999, number: true, lenstay: true, maxlength:9, minlength: 1},
		
			form2_name_on_card: { required: true, minlength: 5, maxlength: 19 },
			form2_nric_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Foreigner" }, minlength: 9, maxlength: 9 },
			form2_passport_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Singaporean" }, minlength: 5, maxlength: 16 },
			form2_employ_pass_type: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" } },
			form2_date_of_birth: { required: true, dpDate: true, dpMinMaxDate: [] },
			form2_gender: {required: function(element) { return $("input[name='form2_gender']:checked").val() == undefined}},
			form2_marital_status: { required: true, minlength: 1 },
			form2_education_status: { required: true, minlength: 1 },
	// --- contact info
			//form2_areacode_residential: { required: true, number: true },
			form2_residential: { required: true, minlength: 8, maxlength: 8, number: true },
			form2_name_of_relative_not_living_with_you: { required: true },
			form2_relationship_to_applicant: { required: true, minlength: 1 },
			//form2_contact_person_areacode_contact_number: { required: true, number: true },
			form2_contact_person_contact_number: { required: true, minlength: 5, maxlength: 30, number: true },
	// --- address info
			form2_block_number: { required: true, maxlength: 7, alphanumericwith2spec: true },
			form2_unit_number: { required: function(element) { return $("input[name='form2_unit_number']:checked").val() != "N.A" }, minlength: 2, maxlength: 30 },
			form2_street_name: { required: true, minlength: 6, maxlength: 22 },
			form2_postal_code: { required: true, minlength: function(element) { return ($("#country_code_home").val() == "SG") ? 5 : 3 }, maxlength: function(element) { return ($("#country_code_home").val() == "SG") ? 6 : 13 }, alphanumeric: true },
			form2_overseas_address: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" } },
			form2_overseas_contact_country_code: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, ctycode: true, minlength: 1, maxlength: 6 },
			form2_overseas_contact_tel_no: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, number: true, minlength: 5, maxlength: 10 },
			form2_length_of_stay_at_address_years: { required: true },
			form2_type_of_residence: { required: true, minlength: 1 },
			form2_residential_ownership: { required: true, minlength: 1 },
			form2_promotionCode: { validPromoCode: true }
  		},		
		messages: {
			form2_pcl_question: { required: "Please select an option" },
			form2_pcl_amount: { required: "Please enter your preferred credit limit", 
								min: "The Preferred Credit Limit amount you entered is invalid", 
								max: "The Preferred Credit Limit amount you entered is invalid", 
								lenstay: "The Preferred Credit Limit amount you entered is invalid", 								
								number: "The Preferred Credit Limit amount you entered is invalid", 
								maxlength: "The Preferred Credit Limit amount you entered is invalid", 
								minlength: "The Preferred Credit Limit amount you entered is invalid"},
		
			form2_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			form2_nric_number: { required: "Please enter your NRIC." },
			form2_passport_number: { required: "Please enter your passport number" },
			form2_employ_pass_type: { required: "Please select your employment pass type" },
			form2_date_of_birth: { required: "Please enter your date of birth.", dpDate: "Please enter a valid date. <br />Age must be between 21 to 65.", dpMinMaxDate: "Please enter a valid date. <br />Age must be between 21 to 65."  },
			form2_gender: { required : "Please select your gender"},
			form2_marital_status: { required: "Please select your marital status." },
			form2_education_status: {  required: "Please select your highest education level." },
			//form2_areacode_residential: { required: "Please enter your home phone number." },
			form2_residential: { required: "Please enter your home phone number." },
	// --- contact info
			form2_mail_to_be_sent_to: { required: "Please select mail to be sent to." },
			form2_contact_block_number: { required: "Please enter the block/house number." },
			form2_contact_unit_number: { required: "Please enter the unit number."	},
			form2_contact_street_name: { required: "Please enter the street name." },
			form2_contact_postal_code: { required: "Please enter the postal code." },
			form2_residential: { required: "Please enter your home phone number." },
			form2_name_of_relative_not_living_with_you: { required: "Please provide the name of person who we can contact for a reference check." },
			form2_relationship_to_applicant: { required: "Please select the reference's relationship with you."	},
			//form2_contact_person_areacode_contact_number: { required: "Please provide the contact number of your reference." },
			form2_contact_person_contact_number: { required: "Please provide the contact number of your reference."},
			form2_block_number: { required: "Please enter the block/house number." },
			form2_unit_number: { required: "Please enter the unit number."},
			form2_street_name: { required: "Please enter the street name." },
			form2_postal_code: { required: "Please enter the postal code." },
			form2_overseas_address: { required: "Please enter your overseas address." },
			form2_overseas_contact_country_code: { required: "Please enter the phone number for this address." },
			form2_overseas_contact_area_code: { required: "Please enter the phone number for this address."	},
			form2_overseas_contact_tel_no: { required: "Please enter the phone number for this address." },
			form2_length_of_stay_at_address_years: { required: "Please select the number of years you have been in service with this company." },
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
     		if (element.attr("name") == "form2_date_of_birth")
       			error.insertAfter("#lbl_form2_date_of_birth");
     		else if (element.attr("name") == "form2_postal_code")
       			error.insertAfter("#lbl_form2_postal_code_container");
            else if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
            else if (element.attr("name") == "form2_ethnic_type")
       			error.insertAfter("#ethnicRadio");
 			else if (element.attr("name") == "form2_contact_unit_number")
       			error.insertAfter("#lbl_form2_contact_unit_number_container");
             else if (element.attr("name") == "form2_unit_number")
       			error.insertAfter("#lbl_form2_unit_number_container");
             else if (element.attr("name") == "form2_mail_to_be_sent_to")
       			error.insertAfter("#mailingRadio");
             else if (element.attr("name") == "form2_name_of_relative_not_living_with_you")
        			error.insertAfter("#form2_name_of_relative_not_living_with_you_label_container");
            else if (element.attr("name") == "form2_employ_pass_type")
        			error.insertAfter("#form2_employ_pass_type_lbl");
			else if (element.attr("name") == "form2_pcl_question")
        			error.insertAfter("#form2_pcl_question_cust");		
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
					if( $('#form2_promotionCode').val() != '' ) {
						$("#dialog-confirm").empty();
				        $("#dialog-confirm").append("<span style='padding: 20px;font-size: 12px;line-height: 16px;color: #777;'>"+confirmDialogMsg+"</span>");
				        $("#dialog-confirm").dialog('open');					
					} else {
						//$("#new_credit_card .tabs li").removeClass("selected");
						$("#new_credit_card .bc2").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_2");
						$("#coda-slider-2 .panel02").addClass("selected-panel");
						$("#coda-slider-2 .panel01").removeClass("selected-panel");
						$(".form2_header_personal").hide();
						$(".form2_header_employment").show();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").hide();
						$("#form_new_customer_credit_cards_1 .next").click();
					}
					resizeSlider();
					// call GA
					//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '2_Personal');
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
	
// ---------------- employment panel -------------	
	// check user nature of employment and display either name of business or employer
	/*$(".form2_salaried_container").show();
	$(".form2_self_employed_container").hide();

		if ($("input[name='form2_nature_of_employment']:checked").val() == "Salaried"){
			$(".form2_salaried_container").show();
			$(".form2_self_employed_container").hide();
			// document upload lsit
			$(".form2_income_proof_01_container").show();
			$(".form2_income_proof_02_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				// document upload list
				$(".form2_app_user_11_container").show();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").show();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			}
			else {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").show();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			}
		}
		else {
			$(".form2_salaried_container").hide();
			$(".form2_self_employed_container").show();
			// document upload lsit
			$(".form2_income_proof_02_container").show();
			$(".form2_income_proof_01_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").show();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").show();
				$(".form2_app_user_32_container").hide();
			}
			else {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").show();
			}
		}*/
		
	$("input[name='form2_nature_of_employment']").click(
		function() {
		if ($("input[name='form2_nature_of_employment']:checked").val() == "Salaried"){
			$(".form2_salaried_container").show();
			$(".form2_self_employed_container").hide();
			// document upload lsit
			$(".form2_income_proof_01_container").show();
			$(".form2_income_proof_02_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
             //show all options.
             $("#form2_upload_income_01").children("span").each(function(){
                 $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").show();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
             //show all options.
             $("#form2_upload_income_01").children("span").each(function(){
                $(this).children().clone().replaceAll($(this));         //use the content of the <span> replace the <span>
             });
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").show();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			}
			else {
				$("#form2_upload_income_01 option[value='002']").wrap("<span style='display:none'></span>");
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").show();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			}
		}
		else {
			$(".form2_salaried_container").hide();
			$(".form2_self_employed_container").show();
			// document upload lsit
			$(".form2_income_proof_02_container").show();
			$(".form2_income_proof_01_container").hide();
			if ($("input[name='form2_nationality']:checked").val() == "Singaporean" ) {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").show();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").hide();
			} else if ( $("input[name='form2_nationality']:checked").val() == "Singapore Permanent Resident" ) {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").show();
				$(".form2_app_user_32_container").hide();
			}
			else {
				// document upload list
				$(".form2_app_user_11_container").hide();
				$(".form2_app_user_21_container").hide();
				$(".form2_app_user_31_container").hide();
				$(".form2_app_user_12_container").hide();
				$(".form2_app_user_22_container").hide();
				$(".form2_app_user_32_container").show();
			}
		}
		resizeSlider();
		}
	);
	
	// disable unit no. if not applicable
	if ($("#form2_employer_unit_number_na").attr("checked")) {
		$("#form2_employer_unit_number").attr("disabled", true).attr("value", "N.A").focus();	
	}
	else
	{
		$("#form2_employer_unit_number").removeAttr("disabled").attr("value","#");		
	}
	
	// disable unit no. if not applicable on click
	$("#form2_employer_unit_number_na").click(function() {
												   
		if($(this).attr("checked")) {
			$("#form2_employer_unit_number").attr("disabled", true).attr("value", "N.A").focus();
			//$("#lbl_form2_employer_unit_number_container").siblings("label.error").hide();
				$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_unit_number");
				$("#form_new_customer_credit_cards").validate().element("#form2_employer_unit_number");
			$("#form2_employer_unit_number").removeClass("error");
		} else {
			$("#form2_employer_unit_number").removeAttr("disabled").attr("value","").focus();					
		}
	});
	
	//Validator for Country postal code
	$("#country_code_emp").change(function(){
		$("#form2_employer_postal_code").removeClass();
		var newClass = ($(this).val() == "SG") ? "postcodeSG" : "postcodeOther";
		$("#form2_employer_postal_code").addClass(newClass);
		$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
		$("#form_new_customer_credit_cards").validate().element("#form2_employer_postal_code");
	});
	
	// form validation
	$("#form_new_customer_credit_cards_2").validate({
   		groups: {
            //form2_21: "form2_areacode_office form2_office"
        },
  		rules: {
			form2_name_of_employer: { required: function(element) { return $("input[name='form2_nature_of_employment']:checked").val() == "Salaried" } },
			form2_name_of_business: { required: function(element) { return $("input[name='form2_nature_of_employment']:checked").val() != "Salaried" } },
			form2_occupation: { required: true, minlength: 1 },
			form2_job_title: { required: true, minlength: 1	},
			form2_loan_my_income: {required: true, digits: true},
			form2_years_in_service: { required: true },
			//form2_months_in_service: { required: true, number: true, min: 0, max: 11 },
			//// hidden the whole business address section
			form2_employer_block_number: { required: true, maxlength: 7, alphanumericwith2spec: true },
			form2_employer_unit_number: { required: function(element) { return $("input[name='form2_employer_unit_number']:checked").val() != "N.A"}, minlength: 2, maxlength: 30 },
			form2_employer_street_name: { required: true, maxlength: 22 },
			form2_employer_building_name: { required: function(element) { return $("#form2_employer_building_name").val() != ""}, minlength: 2 },
			form2_employer_postal_code: { required: true, minlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 5 : 3 }, maxlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 6 : 13 }, alphanumeric: true },
			
			//form2_employer_postal_code: { required: true, number :true, minlength: 3, maxlength: 13 }
			//form2_areacode_office: { required: true, number: true },
			form2_office: { required: true, minlength: 8, maxlength: 8, number: true }
  		},		
		messages: {
			form2_name_of_employer: { required: "Please enter the name of your employer." },
			form2_name_of_business: { required: "Please enter the name of your business" },
			form2_occupation: { required: "Please select your industry." },
			form2_job_title: { required: "Please select your job title/position held." },
			form2_loan_my_income: {required: 'Please enter your annual income', digits: "Please enter digits only without comas, decimals or special characters"},
			form2_years_in_service: { required: "Please select the number of years you have been in service with this company." },
			//form2_months_in_service: { required: "Please enter your months in service."	},
			form2_employer_block_number: { required: "Please enter the building number." },
			form2_employer_unit_number: { required: "Please enter the unit number." },
			form2_employer_street_name: { required: "Please enter the street name."	},
			form2_employer_postal_code: { required: "Please enter postal code."	},
			//form2_areacode_office: { required: "Please enter your office phone number." },
			form2_office: { required: "Please enter your office phone number." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_employer_unit_number")
       			error.insertAfter("#lbl_form2_employer_unit_number_container");
			else if (element.attr("name") == "form2_employer_postal_code")
       			error.insertAfter("#lbl_form2_employer_postal_code_container");
			else if (element.attr("name") == "form2_occupation")
       			error.insertAfter("#form2_occupation_label_container");
			else if (element.attr("name") == "form2_job_title")
       			error.insertAfter("#form2_job_title_label_container");
 			else
                error.appendTo( element.parent().next() ); 
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
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
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
					$(".form2_header_employment").hide();
					$(".form2_header_vas").show();
					$(".form2_header_documents").hide();
					$(".form2_header_review").hide();
					$("#form_new_customer_credit_cards_2 .next").click();
					resizeSlider();
					// call GA
					//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '3_Employment');
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
	$("select[name='form2_sup_salutation']").change(
		function() {
			if ($("select[name='form2_sup_salutation']").val() == "Mr") {
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").removeAttr("checked");
				$("#form2_sup_gender_female").siblings("label").hide().removeClass("checked");
				$("#form2_sup_gender_male").attr("checked", "checked");
				$("#form2_sup_gender_male").attr("selected", true);
				$("#form2_sup_gender_male").siblings("label").show().addClass("checked");
			} else if ($("select[name='form2_sup_salutation']").val() == "Miss" || $("select[name='form2_sup_salutation']").val() == "Mrs" || $("select[name='form2_sup_salutation']").val() == "Mdm") {
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").removeAttr("checked");
				$("#form2_sup_gender_male").siblings("label").hide().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", true);
				$("#form2_sup_gender_female").attr("checked", "checked");
				$("#form2_sup_gender_female").siblings("label").show().addClass("checked");
			} else {
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").siblings("label").show().removeClass("checked");
			}
		}
	);
	
	$("input[name='form2_sup_gender']").click(
		function() {
			$("#supGenderRadios").siblings("label.error").remove();
			$("#supGenderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
		}
	);

	$("select[name='form2_sup_02_salutation']").change(
		function() {
			if ($("select[name='form2_sup_02_salutation']").val() == "Mr") {
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").removeAttr("checked");
				$("#form2_sup_02_gender_female").siblings("label").hide().removeClass("checked");
				$("#form2_sup_02_gender_male").attr("checked", "checked");
				$("#form2_sup_02_gender_male").attr("selected", true);
				$("#form2_sup_02_gender_male").siblings("label").show().addClass("checked");
			} else if ($("select[name='form2_sup_02_salutation']").val() == "Miss" || $("select[name='form2_sup_02_salutation']").val() == "Mrs" || $("select[name='form2_sup_02_salutation']").val() == "Mdm") {
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").removeAttr("checked");
				$("#form2_sup_02_gender_male").siblings("label").hide().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", true);
				$("#form2_sup_02_gender_female").attr("checked", "checked");
				$("#form2_sup_02_gender_female").siblings("label").show().addClass("checked");
			} else {
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").siblings("label").show().removeClass("checked");
			}
		}
	);
	
	$("input[name='form2_sup_02_gender']").click(
		function() {
			$("#supGenderRadios").siblings("label.error").remove();
			$("#supGenderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
		}
	);
	
	var form2_sup_has_sup_card = "";

	
	// check user nationality and either display nric or passport number
	
	// check whether user wants supplementary card
	//var form2_sup_card = "I do not want to apply for a supplementary card.";
	
	
	// check user sup card address
	
	// disable unit no. if not applicable
	
	// check whether user wants to apply for funds transfer
	
	// check whether user wants to apply for the e-Statement service
	
	// check whether user wants to apply to link credit card to new personal credit account applied above
			if ($("input[name='form2_sup_card']:checked").val() == "Yes"){
				$(".form2_sup_container").show();
			$(".form2_sup_01_doc_container").show();
			$(".form2_sup_02_doc_container").hide();
					form2_sup_has_sup_card = "1";
			$(".form2_sup_detail_01_container").show();
			$(".form2_no_sup_detail_01_container").hide();
			$(".form2_sup_02_detail_container").hide();
			}
			else {
				$(".form2_sup_container").hide();
					form2_sup_has_sup_card = "";
			$(".form2_sup_01_doc_container").hide();
			$(".form2_sup_02_doc_container").hide();
			$(".form2_sup_detail_01_container").hide();
			$(".form2_no_sup_detail_01_container").show();
			$(".form2_sup_02_detail_container").hide();
				$('#suppcardtable :input').val('');
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").siblings("label").show().removeClass("checked");
			}
	
	$("input[name='form2_sup_card']").click(
		function() {
			if ($("input[name='form2_sup_card']:checked").val() == "Yes"){
				$(".form2_sup_container").show();
			$(".form2_sup_01_doc_container").show();
			$(".form2_sup_02_doc_container").hide();
					form2_sup_has_sup_card = "1";
			$(".form2_sup_detail_01_container").show();
			$(".form2_no_sup_detail_01_container").hide();
			$(".form2_sup_02_detail_container").hide();
			}
			else {
				$(".form2_sup_container").hide();
					form2_sup_has_sup_card = "";
			$(".form2_sup_01_doc_container").hide();
			$(".form2_sup_02_doc_container").hide();
			$(".form2_sup_detail_01_container").hide();
			$(".form2_no_sup_detail_01_container").show();
			$(".form2_sup_02_detail_container").hide();
				$('#suppcardtable :input').val('');
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").siblings("label").show().removeClass("checked");
			}
		resizeSlider();
		}
	);

	// add 2nd SS card
	$("#form2_add_sup_02_card").click(
		function() {
			$(".form2_sup_02_detail_container").show();
			$(".form2_sup01_add_but").hide();
			$(".form2_sup_01_doc_container").show();
			$(".form2_sup_02_doc_container").show();
					form2_sup_has_sup_card = "2";
		resizeSlider();
		}
	);

	// remove 1st SS card
	$("#form2_remove_sup_01_card").click(
		function() {
			$(".form2_sup_02_detail_container").hide();
			$(".form2_sup01_add_but").show();
			$(".form2_sup_01_doc_container").show();
			$(".form2_sup_02_doc_container").hide();
			$("#form2_sup_salutation").attr("value",($("#form2_sup_02_salutation").val()));
			$("#form2_sup_first_name").attr("value",($("#form2_sup_02_first_name").val()));
			$("#form2_sup_middle_name").attr("value",($("#form2_sup_02_middle_name").val()));
			$("#form2_sup_name").attr("value",($("#form2_sup_02_name").val()));
			$("#form2_sup_name_on_card").attr("value",($("#form2_sup_02_name_on_card").val()));
			$("#form2_sup_gender").attr("value",($("#form2_sup_02_card_gender").val()));
			$("#form2_sup_passport_number").attr("value",($("#form2_sup_02_passport_number").val()));
			$("#form2_sup_date_of_birth").attr("value",($("#form2_sup_02_date_of_birth").val()));
			$("#form2_sup_areacode_home").attr("value",($("#form2_sup_02_areacode_home").val()));
			$("#form2_sup_home").attr("value",($("#form2_sup_02_home").val()));
			$("#form2_sup_areacode_office").attr("value",($("#form2_sup_02_areacode_office").val()));
			$("#form2_sup_office").attr("value",($("#form2_sup_02_office").val()));
			$("#form2_sup_relationship_to_applicant").attr("value",($("#form2_sup_02_relationship_to_applicant").val()));
			$("#form2_sup_annual_income").attr("value",($("#form2_sup_02_annual_income").val()));
			$("#form2_sup_address").attr("value",($("#form2_sup_02_address").val()));
			$("#form2_sup_business").attr("value",($("#form2_sup_02_business").val()));
					form2_sup_has_sup_card = "1";
			$("#form2_sup_02_salutation").attr("value","");
			$("#form2_sup_02_first_name").attr("value","");
			$("#form2_sup_02_middle_name").attr("value","");
			$("#form2_sup_02_name").attr("value","");
			$("#form2_sup_02_name_on_card").attr("value","");
			//$("#form2_sup_02_gender").attr("value","");
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").siblings("label").show().removeClass("checked");
			$("#form2_sup_02_passport_number").attr("value","");
			$("#form2_sup_02_date_of_birth").attr("value","");
			$("#form2_sup_02_areacode_home").attr("value","65");
			$("#form2_sup_02_home").attr("value","");
			$("#form2_sup_02_areacode_office").attr("value","65");
			$("#form2_sup_02_office").attr("value","");
			$("#form2_sup_02_relationship_to_applicant").attr("value","");
			$("#form2_sup_02_annual_income").attr("value","");
			$("#form2_sup_02_address").attr("value","");
			$("#form2_sup_02_business").attr("value","");
		resizeSlider();
		}
	);

	// remove 2nd SS card
	$("#form2_remove_sup_02_card").click(
		function() {
			$(".form2_sup_02_detail_container").hide();
			$(".form2_sup01_add_but").show();
			$(".form2_sup_01_doc_container").show();
			$(".form2_sup_02_doc_container").hide();
					form2_sup_has_sup_card = "1";
			$("#form2_sup_02_salutation").attr("value","");
			$("#form2_sup_02_first_name").attr("value","");
			$("#form2_sup_02_middle_name").attr("value","");
			$("#form2_sup_02_name").attr("value","");
			$("#form2_sup_02_name_on_card").attr("value","");
			//$("#form2_sup_02_gender").attr("value","");
				$("#form2_sup_02_gender_male").attr("selected", false);
				$("#form2_sup_02_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_02_gender_female").attr("selected", false);
				$("#form2_sup_02_gender_female").siblings("label").show().removeClass("checked");
			$("#form2_sup_02_passport_number").attr("value","");
			$("#form2_sup_02_date_of_birth").attr("value","");
			$("#form2_sup_02_areacode_home").attr("value","65");
			$("#form2_sup_02_home").attr("value","");
			$("#form2_sup_02_areacode_office").attr("value","65");
			$("#form2_sup_02_office").attr("value","");
			$("#form2_sup_02_relationship_to_applicant").attr("value","");
			$("#form2_sup_02_annual_income").attr("value","");
			$("#form2_sup_02_address").attr("value","");
			$("#form2_sup_02_business").attr("value","");
		resizeSlider();
		}
	);

		if ($("input[name='form2_cc_insurance']:checked").val() == "Yes"){
			$('.cciconfirmmessage').show();
			$('.form2_cc_cpc_container').show();
			$('.form2_cc_no_cpc_container').hide();
		} else {
			$('.cciconfirmmessage').hide();
			$('.form2_cc_cpc_container').hide();
			$('.form2_cc_no_cpc_container').show();
		}
	
	$("input[name='form2_cc_insurance']").click(function() {
		if ($("input[name='form2_cc_insurance']:checked").val() == "Yes"){
			$('.cciconfirmmessage').show();
			$('.form2_cc_cpc_container').show();
			$('.form2_cc_no_cpc_container').hide();
		} else {
			$('.cciconfirmmessage').hide();
			$('.form2_cc_cpc_container').hide();
			$('.form2_cc_no_cpc_container').show();
		}
		resizeSlider();
	});


// New
	$("input[name='form2_sup_first_name']").change(
		function() {
				$("#form2_sup_name_on_card").attr("value",(($("input[name=form2_sup_first_name]").val() + " " + $("input[name=form2_sup_name]").val()).toUpperCase()));
		//$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_name_on_card");
		}
	);
		
	$("input[name='form2_sup_name']").change(
		function() {
				$("#form2_sup_name_on_card").attr("value",(($("input[name=form2_sup_first_name]").val() + " " + $("input[name=form2_sup_name]").val()).toUpperCase()));
		//$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_name_on_card");
		}
	);

	$("input[name='form2_sup_02_first_name']").change(
		function() {
				$("#form2_sup_02_name_on_card").attr("value",(($("input[name=form2_sup_02_first_name]").val() + " " + $("input[name=form2_sup_02_name]").val()).toUpperCase()));
		//$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_02_name_on_card");
		}
	);
		
	$("input[name='form2_sup_02_name']").change(
		function() {
				$("#form2_sup_02_name_on_card").attr("value",(($("input[name=form2_sup_02_first_name]").val() + " " + $("input[name=form2_sup_02_name]").val()).toUpperCase()));
		//$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_02_name_on_card");
		}
	);


	// form validation
	$("#form_new_customer_credit_cards_3").validate({
   		groups: {
            //form2_31: "form2_sup_salutation form2_sup_first_name",
            form2_32: "form2_sup_areacode_home form2_sup_home",
            form2_33: "form2_sup_areacode_office form2_sup_office",
            form2_34: "form2_sup_02_areacode_home form2_sup_02_home",
            form2_35: "form2_sup_02_areacode_office form2_sup_02_office"
       },
  		rules: {
			form2_sup_card: { required: true, minlength: 1 },
			form2_cc_insurance: { required: true, minlength: 1 },
			form2_sup_salutation: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 1 },
			//form2_sup_full_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_first_name: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			//form2_sup_middle_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_name: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			form2_sup_name_on_card: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 19 },
			form2_sup_gender: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			//form2_sup_nric_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() != "Foreigner" && "#form2_sup_card:checked"  }, minlength: 9, maxlength: 9 },
			//form2_sup_passport_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() == "Foreigner" && "#form2_sup_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_passport_number: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 16 },
			form2_sup_date_of_birth: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			form2_sup_gender: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }},
			form2_sup_areacode_home: { number: true },
			form2_sup_home: { minlength: 8, maxlength: 8, number: true },
			form2_sup_areacode_office: { number: true },
			form2_sup_office: { minlength: 8, maxlength: 8, number: true },
			form2_sup_relationship_to_applicant: { minlength: 1 },
			form2_sup_annual_income: { number: true },
			form2_sup_address: { minlength: 1 },
			form2_sup_business: { minlength: 1 },

//2nd Sup Card
			form2_sup_02_salutation: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 1 },
			//form2_sup_02_full_name: { required: ".form2_sup_02_detail_01_container :visible" },
			form2_sup_02_first_name: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			//form2_sup_02_middle_name: { required: ".form2_sup_02_detail_01_container :visible" },
			form2_sup_02_name: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			form2_sup_02_name_on_card: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 19 },
			form2_sup_02_gender: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			//form2_sup_02_nric_number: { required: function(element) { return $("input[name='form2_sup_02_nationality']:checked").val() != "Foreigner" && "#form2_sup_02_card:checked"  }, minlength: 9, maxlength: 9 },
			//form2_sup_02_passport_number: { required: function(element) { return $("input[name='form2_sup_02_nationality']:checked").val() == "Foreigner" && "#form2_sup_02_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_02_passport_number: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 16 },
			form2_sup_02_date_of_birth: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			form2_sup_02_gender: { required: function(element) { return (form2_sup_has_sup_card == "2") }},
			form2_sup_02_areacode_home: { number: true },
			form2_sup_02_home: { minlength: 8, maxlength: 8, number: true },
			form2_sup_02_areacode_office: { number: true },
			form2_sup_02_office: { minlength: 8, maxlength: 8, number: true },
			form2_sup_02_relationship_to_applicant: { minlength: 1 },
			form2_sup_02_annual_income: { number: true },
			form2_sup_02_address: { minlength: 1 },
			form2_sup_02_business: { minlength: 1 }
  		},		
		messages: {
			form2_sup_card: { required: "Please confirm your selection." },
			form2_cc_insurance: { required: "Please confirm your selection." },
			form2_sup_salutation: { required: "Please select title of applicant." },
			//form2_sup_full_name: { required: "Please enter name of applicant." },
			form2_sup_first_name: { required: "Please enter first name of applicant." },
			//form2_sup_middle_name: { required: "Please enter middle name of applicant." },
			form2_sup_name: { required: "Please enter last name of applicant." },
			form2_sup_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			//form2_sup_nric_number: { required: "Please enter NRIC." },
			//form2_sup_passport_number: { required: "Please enter passport number." },
			form2_sup_gender: { required: "Please select gender of applicant." },
			form2_sup_passport_number: { required: "Please enter NRIC or passport number." },
			form2_sup_date_of_birth: { required: "Please enter date of birth." },
			form2_sup_gender: { required : "Please select gender"},
			form2_sup_relationship_to_applicant: { required: "Please select the relationship to you."	},
			form2_sup_areacode_home: { required: "Please enter your home phone number." },
			form2_sup_home: { required: "Please enter your home phone number." },
			form2_sup_areacode_office: { required: "Please enter your office phone number." },
			form2_sup_office: { required: "Please enter your office phone number." },
			form2_sup_annual_income: { required: "Please enter your annual income." },
			form2_sup_address: { required: "Please enter your home address." },
			form2_sup_business: { required: "Please enter name & address of your company." },

//2nd Sup Card
			form2_sup_02_salutation: { required: "Please select title of applicant." },
			//form2_sup_02_full_name: { required: "Please enter name of applicant." },
			form2_sup_02_first_name: { required: "Please enter first name of applicant." },
			//form2_sup_02_middle_name: { required: "Please enter middle name of applicant." },
			form2_sup_02_name: { required: "Please enter last name of applicant." },
			form2_sup_02_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			//form2_sup_02_nric_number: { required: "Please enter NRIC." },
			//form2_sup_02_passport_number: { required: "Please enter passport number." },
			form2_sup_02_gender: { required: "Please select gender of applicant." },
			form2_sup_02_passport_number: { required: "Please enter NRIC or passport number." },
			form2_sup_02_date_of_birth: { required: "Please enter date of birth." },
			form2_sup_02_gender: { required : "Please select gender"},
			form2_sup_02_relationship_to_applicant: { required: "Please select the relationship to you."	},
			form2_sup_02_areacode_home: { required: "Please enter your home phone number." },
			form2_sup_02_home: { required: "Please enter your home phone number." },
			form2_sup_02_areacode_office: { required: "Please enter your office phone number." },
			form2_sup_02_office: { required: "Please enter your office phone number." },
			form2_sup_02_annual_income: { required: "Please enter your annual income." },
			form2_sup_02_address: { required: "Please enter your home address." },
			form2_sup_02_business: { required: "Please enter name & address of your company." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_sup_unit_no")
       			error.insertAfter("#lbl_form2_sup_unit_no_container");
			else if (element.attr("name") == "form2_cc_insurance")
       			error.insertAfter("#form2_cc_insurance_label_container");
 			else if ( element.is(":radio") ) 
                error.appendTo( element.parent().parent().next() );
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
				$(".form2_header_employment").show();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
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
					//$("#new_credit_card .tabs li").removeClass("selected");
					$("#new_credit_card .bc4").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_3").addClass("step_4");
					$("#coda-slider-2 .panel04").addClass("selected-panel");
					$("#coda-slider-2 .panel03").removeClass("selected-panel");
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_vas").hide();
					$(".form2_header_documents").show();
					$(".form2_header_review").hide();
					$("#form_new_customer_credit_cards_3 .next").click();
					resizeSlider();
					// call GA
					//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '4_AdditionalOptions');
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
	
	$.validator.addMethod("validDocUploadNumber", function(value, element) {
		var result = false;
		if ($("input[name='form2_doc_upload']:checked").val() == "Yes" ) {
			if( uploadFilesCount != 0 ) {
				var numberOfRequireDoc = $('#uploadForm_multifile table.application_form').filter(':visible').length;
				if( numberOfRequireDoc == uploadFilesCount ) {
					result = true;
				}
			}		
		} else {
			result = true;
		}
		return result;
 	}, "Please upload the required documents to proceed with your credit card application.");

	if ($("input[name='form2_doc_upload']:checked").val() == "Yes" ) {
		$(".form2_doc_upload_container").show();
		$(".form2_doc_fax_container").hide();
	} else {
		$(".form2_doc_upload_container").hide();
		$(".form2_doc_fax_container").show();
	}
	
	$("input[name='form2_doc_upload']").click(
		function() {
			$("#lbl_form2_doc_upload").hide();
			if ($("input[name='form2_doc_upload']:checked").val() == "Yes" ) {
				$(".form2_doc_upload_container").show();
				$(".form2_doc_fax_container, #form2_doc_upload_msg").hide();
			} else {
				$(".form2_doc_upload_container").hide();
				$(".form2_doc_fax_container, #form2_doc_upload_msg").show();
			}
			$('#iras_container').show();
			resizeSlider();
		}
	);

	// form validation
	$("#form_new_customer_credit_cards_4").validate({
  		rules: {
			form2_doc_upload: { required: true, minlength: 1, validDocUploadNumber: true }
  		},		
		messages: {
			form2_doc_upload: { required: "Please select whether you want to upload your document now or later." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_doc_upload")
       			error.insertAfter("#lbl_form2_doc_upload");
 			else
                error.appendTo( element.parent().next() );
   		}
	});

	
	// cancel button
	//$("#form_new_customer_credit_cards_4 .btn_back").click(
	$("#form2_upload_next_back .btn_back").click(
		function() {
			//$("#form_new_customer_credit_cards_4 .back").click();
			$("#form2_upload_next_back .back").click();
			$("#new_credit_card .bc4").removeClass("selected");
			$("#new_credit_card .bc3").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_3");
				$("#coda-slider-2 .panel03").addClass("selected-panel");
				$("#coda-slider-2 .panel04").removeClass("selected-panel");
				$(".form2_header_personal").hide();
				$(".form2_header_employment").hide();
				$(".form2_header_vas").show();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
				$("errorMessageBox_step1").hide();
		}
	);
	
	// form submission
	$("#check_new_credit_card_4").click(
		function() {
			//alert ("hi");
			form_new_customer_credit_cards_4_display_all(); // show all tab content
			if (($("#form_new_customer_credit_cards_4").valid())) {
				// before proceed to file upload logic, first clear all the previous records
				$('.uploadfileredidgroup').val('');
				
				// run checking did user added file for upload
				if ($("input[name='form2_doc_upload']:checked").val() == "Yes") {
					var havePickDoc = false;
					$('#uploadForm_multifile table.application_form').filter(':visible').each(function() {
						$(this).find('.file').each(function() {
							if($(this).val() != '') {
								havePickDoc = true;
								return false;
							}
						});
					});
					if( !havePickDoc ) {
						var r=confirm("Would you like to proceed with your application without uploading the required documents and provide these to us later?");
						if(r==true) {
							// ok, go to next without doc upload
							// clear all stored value if user select no doc upload
							$("#lbl_form2_doc_upload").hide();
							executeUpload();
							preview_form2();
							$.scrollTo(0,500,{onAfter:function() {
								//$("#new_credit_card .tabs li").removeClass("selected");
								$("#new_credit_card .bc6").addClass("selected");
								$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
								$("#coda-slider-2 .panel06").addClass("selected-panel");
								$("#coda-slider-2 .panel04").removeClass("selected-panel");
								$(".form2_header_personal").hide();
								$(".form2_header_employment").hide();
								$(".form2_header_vas").hide();
								$(".form2_header_documents").hide();
								$(".form2_header_review").show();
								$("#form2_upload_next_back .next").click();
							}});
						}
						
					} else {
						executeUpload();
						preview_form2();
						
					}
					
				} else {
					
					// clear all stored value if user select no doc upload
					$('.uploadfileredidgroup, #form2_upload_file_list, #form2_upload_file_list_preview').val('');
					$("#lbl_form2_doc_upload").hide();
					preview_form2();
					$.scrollTo(0,500,{onAfter:function() {
						//$("#new_credit_card .tabs li").removeClass("selected");
						$("#new_credit_card .bc6").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
						$("#coda-slider-2 .panel06").addClass("selected-panel");
						$("#coda-slider-2 .panel04").removeClass("selected-panel");
						$(".form2_header_personal").hide();
						$(".form2_header_employment").hide();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").show();
						$("#form2_upload_next_back .next").click();
					}});
				}
			}
 			//$("#lbl_form2_doc_upload").show();
			resizeSlider();
			return false;
		}
	);
	
	
	/************************** step 5 ***************************/
	$("select[name='form2_sup_salutation']").change(
		function() {
			if ($("select[name='form2_sup_salutation']").val() == "Mr") {
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").removeAttr("checked");
				$("#form2_sup_gender_female").siblings("label").hide().removeClass("checked");
				$("#form2_sup_gender_male").attr("checked", "checked");
				$("#form2_sup_gender_male").attr("selected", true);
				$("#form2_sup_gender_male").siblings("label").show().addClass("checked");
			} else if ($("select[name='form2_sup_salutation']").val() == "Miss" || $("select[name='form2_sup_salutation']").val() == "Mrs" || $("select[name='form2_sup_salutation']").val() == "Mdm") {
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").removeAttr("checked");
				$("#form2_sup_gender_male").siblings("label").hide().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", true);
				$("#form2_sup_gender_female").attr("checked", "checked");
				$("#form2_sup_gender_female").siblings("label").show().addClass("checked");
			} else {
				$("#form2_sup_gender_male").attr("selected", false);
				$("#form2_sup_gender_male").siblings("label").show().removeClass("checked");
				$("#form2_sup_gender_female").attr("selected", false);
				$("#form2_sup_gender_female").siblings("label").show().removeClass("checked");
			}
		}
	);
	
	$("input[name='form2_sup_gender']").click(
		function() {
			$("#supGenderRadios").siblings("label.error").remove();
			$("#supGenderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
		}
	);
	
	// check user nationality and either display nric or passport number
	$(".form2_sup_nric_container").show();
	$(".form2_sup_passport_container").hide();
	
	$("input[name='form2_sup_nationality']").click(
		function() {
			if ($("input[name='form2_sup_nationality']:checked").val() != "Foreigner"){
				$(".form2_sup_nric_container").show();
				$(".form2_sup_passport_container").hide();
			}
			else {
				$(".form2_sup_nric_container").hide();
				$(".form2_sup_passport_container").show();
			}
		}
	);
	
	// check whether user wants supplementary card
	var form2_sup_card = "I do not want to apply for a supplementary card.";
	var form2_sup_has_sup_card;
	
	if ($("input[name='form2_sup_card']").is(":checked")) {
		$(".form2_sup_card_container").show();
		form2_sup_card = "I want to apply for a supplementary card.";
		//form2_sup_has_sup_card = "1";
		
	}
	else
	{
		$(".form2_sup_card_container").hide();
		form2_sup_card = "I do not want to apply for a supplementary card.";
		//form2_sup_has_sup_card = "";
	}
	
	
	// check user sup card address
	$(".form2_sup_address_container").hide();
    $("#form2_sup_address").change(function() { 
        var form2_sup_address; 
        form2_sup_address = $("#form2_sup_address").val();
		if (form2_sup_address == "Home") {
			if ($("#form2_employer_unit_number_na").is(":checked")) {
				$("#form2_sup_unit_no_na").attr("checked", true);
				$("#lbl_form2_sup_unit_no").addClass("checked");
			} else {
				$("#form2_sup_unit_no_na").attr("checked", false);
				$("#lbl_form2_contact_unit_number").removeClass("checked");
			}
			$('#form_new_customer_credit_cards_5').populate({
				'form2_sup_block_no':$("#form2_block_number").val(),
				'form2_sup_unit_no':$("#form2_unit_number").val(),
				'form2_sup_street_name':$("#form2_street_name").val(),
				'form2_sup_building_name':$("#form2_building_name").val(),
				'form2_sup_postal_code':$("#form2_postal_code").val()
			}, { resetForm: false} );
			$(".form2_sup_address_container").hide();
		}
		else if (form2_sup_address == "Work") {
			if ($("#form2_employer_unit_number_na").is(":checked")) {
				$("#form2_sup_unit_no_na").attr("checked", true);
				$("#lbl_form2_sup_unit_no").addClass("checked");
			} else {
				$("#form2_sup_unit_no_na").attr("checked", false);
				$("#lbl_form2_contact_unit_number").removeClass("checked");
			}
			$('#form_new_customer_credit_cards_5').populate({
				'form2_sup_block_no':$("#form2_employer_block_number").val(),
				'form2_sup_unit_no':$("#form2_employer_unit_number").val(),
				'form2_sup_street_name':$("#form2_employer_street_name").val(),
				'form2_sup_building_name':$("#form2_employer_building_name").val(),
				'form2_sup_postal_code':$("#form2_employer_postal_code").val()
			}, { resetForm: false} );
			$(".form2_sup_address_container").hide();
		}
        else if (form2_sup_address == "Other") {
			$('.coda-slider').height(1460);
			$(".form2_sup_address_container").show();			
			$('#form_new_customer_credit_cards_5').populate({
				'form2_sup_block_no':"",
				'form2_sup_unit_no':"#",
				'form2_sup_street_name':"",
				'form2_sup_building_name':"",
				'form2_sup_postal_code':""
			}, { resetForm: false} );
		}
		else {
			$(".form2_sup_address_container").hide();	
		}
    }); 
	
	// disable unit no. if not applicable
	$("#form2_sup_unit_no_na").click(function() {
		if($(this).attr("checked")) {
			$("#form2_sup_unit_no").attr("disabled", true).attr("value", "N.A").focus();
		} else {
			$("#form2_sup_unit_no").removeAttr("disabled").attr("value","").focus();					
		}
	});
	
	// check whether user wants to apply for funds transfer
	if ($("input[name='form2_apply_for_funds_transfer']").is(":checked")) {
	$(".form2_apply_for_funds_transfer_container").show();
	}
	else
	{
	$(".form2_apply_for_funds_transfer_container").hide();
	}
	var form2_apply_for_funds_transfer = "I do not want to apply for credit card funds transfer." 
	
	$("input[name='form2_apply_for_funds_transfer']").click(
															
		function() {
			if ($("input[name='form2_apply_for_funds_transfer']").is(":checked")) {
				$(".form2_apply_for_funds_transfer_container").show();
				form2_apply_for_funds_transfer = "I want to apply for credit card funds transfer." 
				
			}
			else {
				$(".form2_apply_for_funds_transfer_container").hide();
				form2_apply_for_funds_transfer = "I do not want to apply for credit card funds transfer." 
				$(this).blur();
				
			}
			
		}	
		
	);
	
	// check whether user wants to apply for the e-Statement service
	var form2_personal_credit = "I do not want to apply for Personal Credit on approval of my Standard Chartered Credit Card.";

	$("input[name='form2_personal_credit']").click(
											   
		function() {
			$('.coda-slider').height(1460);	
			if ($("input[name='form2_personal_credit']").is(":checked")) {
				form2_personal_credit = "I want to apply for Personal Credit on approval of my Standard Chartered Credit Card.";
				$(".form2_link_to_personal_credit_container").show();
			} 
			else {
				form2_personal_credit = "I do not want to apply for Personal Credit on approval of my Standard Chartered Credit Card.";
				$(this).blur();
				$(".form2_link_to_personal_credit_container").hide();
			}
		}	
	);
	
	// check whether user wants to apply to link credit card to new personal credit account applied above
	$(".form2_link_to_personal_credit_account_number_container").hide();
	var form2_link_to_personal_credit_account = "I do not want to apply to link the Credit Card to my new Personal Credit Account applied above.";

	$("input[name='form2_link_to_personal_credit_account']").click(
		//$('.coda-slider').height(1460);
		function() {
			if ($("input[name='form2_link_to_personal_credit_account']").is(":checked")) {
				form2_link_to_personal_credit_account = "I want to apply to link the Credit Card to my new Personal Credit Account applied above.";
				$(".form2_link_to_personal_credit_account_number_container").show();
			} 
			else {
				form2_link_to_personal_credit_account = "I do not want to apply to link the Credit Card to my new Personal Credit Account applied above.";
				$(".form2_link_to_personal_credit_account_number_container").hide();
				$(this).blur();
			}
		}	
	);
	
	// check whether user wants to apply to link the credit card to standard chartered savings / current account
	$(".form2_link_to_savings_current_account_number_container").hide();
	var form2_link_to_savings_current_account = "I do not want to apply to link the Credit Card to my Standard Chartered Savings / Current Account.";

	$("input[name='form2_link_to_savings_current_account']").click(
		//$('.coda-slider').height(1460);		
		function() {
			if ($("input[name='form2_link_to_savings_current_account']").is(":checked")) {
				form2_link_to_savings_current_account = "I want to apply to link the Credit Card to my Standard Chartered Savings / Current Account.";
				$(".form2_link_to_savings_current_account_number_container").show();
			} 
			else {
				form2_link_to_savings_current_account = "I do not want to apply to link the Credit Card to my Standard Chartered Savings / Current Account.";
				$(".form2_link_to_savings_current_account_number_container").hide();
				$(this).blur();
			}
		}	
	);
	
	// check whether user wants to apply for the e-Statement service
	var form2_apply_e_statement_service = "I want to apply for the eStatement Service.";
	
	// check whether user wants to apply for standard chartered internet banking and phone banking
	var form2_apply_for_internet_phone_banking = "I want to apply for Standard Chartered Online Banking and Phone Banking.";
		
	// form validation
	$("#form_new_customer_credit_cards_5").validate({
  		rules: {
			form2_sup_salutation: { required: "#form2_sup_card:checked", minlength: 1 },
			form2_sup_full_name: { required: "#form2_sup_card:checked" },
			form2_sup_name_on_card: { required: "#form2_sup_card:checked", minlength: 5, maxlength: 19 },
			form2_sup_nric_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() != "Foreigner" && "#form2_sup_card:checked"  }, minlength: 9, maxlength: 9 },
			form2_sup_passport_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() == "Foreigner" && "#form2_sup_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_date_of_birth: { required: "#form2_sup_card:checked" },
			form2_sup_gender: { required: "#form2_sup_card:checked"},
			form2_sup_relationship_to_applicant: { required: "#form2_sup_card:checked", minlength: 1 },
			form2_sup_address: { required: "#form2_sup_card:checked", minlength: 1 },
			form2_sup_block_no: { required: "#form2_sup_card:checked" },
			form2_sup_unit_no: { required: function(element) { return $("input[name='form2_sup_unit_no']:checked").val() != "N.A", "#form2_sup_card:checked" }, minlength: function(element) { if ($("#form2_sup_card").is(':checked')) { return 2 } else { return 0 }}, maxlength: 30 },
			form2_sup_street_name: { required: "#form2_sup_card:checked" },
			form2_sup_postal_code: { required: "#form2_sup_card:checked", number: true, minlength: 6, maxlength: 6, alphanumeric: true },
			form2_ft_account_holder_name: { required: "#form2_apply_for_funds_transfer:checked" },
			form2_ft_nric_passport: { required: "#form2_apply_for_funds_transfer:checked", minlength: 5, maxlength: 16 },
			form2_ft_bank_name: { required: "#form2_apply_for_funds_transfer:checked", minlength: 1 },
			form2_ft_transfer_to_account_type: { required: "#form2_apply_for_funds_transfer:checked", minlength: 1 },
			form2_ft_account_credit_card_number: { required: "#form2_apply_for_funds_transfer:checked", number: true,maxlength: 16,minlength:8  },
			form2_ft_amount_to_be_transferred: { required: "#form2_apply_for_funds_transfer:checked", number: true, min: 1000, max: 100000 },
			form2_link_to_personal_credit_account_number: { required: "#form2_link_to_personal_credit_account:checked", minlength: 10, maxlength: 10 },
			form2_link_to_savings_current_account_number: { required: "#form2_link_to_savings_current_account:checked", minlength: 10, maxlength: 10 }
  		},		
		messages: {
			form2_sup_salutation: { required: "Please select title of applicant." },
			form2_sup_full_name: { required: "Please enter name of applicant." },
			form2_sup_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			form2_sup_nric_number: { required: "Please enter NRIC." },
			form2_sup_passport_number: { required: "Please enter passport number." },
			form2_sup_date_of_birth: { required: "Please enter date of birth." },
			form2_sup_gender: { required : "Please select gender"},
			form2_sup_relationship_to_applicant: { required: "Please select the relationship to applicant."	},
			form2_sup_address: { required: "Please choose your address." }, 
			form2_sup_block_no: { required: "Please enter block/house number." },
			form2_sup_unit_no: { required: "Please enter unit number."	},
			form2_sup_street_name: { required: "Please enter street name." },
			form2_sup_postal_code: { required: "Please enter postal code." },
			form2_ft_account_holder_name: { required: "Please enter account name." },
			form2_ft_nric_passport: { required: "Please enter NRIC / Passport no. of account holder." },
			form2_ft_bank_name: { required: "Please select Bank." },
			form2_ft_transfer_to_account_type: { required: "Please select account type." },
			form2_ft_account_credit_card_number: { required: "Please enter account / credit card no." },
			form2_ft_amount_to_be_transferred: { required: "Please enter amount to be transferred" },
			form2_link_to_personal_credit_account_number: { required: "Please enter your savings / account number." },
			form2_link_to_savings_current_account_number: { required: "Please enter your savings / account number." }
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_sup_date_of_birth")
       			error.insertAfter("#lbl_form2_sup_date_of_birth");
			else if (element.attr("name") == "form2_sup_unit_no")
       			error.insertAfter("#lbl_form2_sup_unit_no_container");
			else if (element.attr("name") == "form2_sup_gender")
       			error.insertAfter("#supGenderRadios");
 			else
       			error.insertAfter(element);
   		}
	});
	
	// cancel button
	$("#form_new_customer_credit_cards_5 .btn_back").click(
		function() {
			$("#form_new_customer_credit_cards_5 .back").click();
			$("#new_credit_card .tabs li").removeClass("selected");
			$("#new_credit_card .bc4").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_5").addClass("step_4");
		}
	);
	
	// form submission
	$("#check_new_credit_card_5").click(
		function() {
			$('#form2_declaration_yes').removeAttr('checked');
			$('#form2_declaration_no').attr('checked','checked');
			form_new_customer_credit_cards_5_display_all(); // show all tab content
			if (($("#form_new_customer_credit_cards_5").valid())) {
				preview_form2();
				$("#form_new_customer_credit_cards_5 .next").click();
				$("#new_credit_card .tabs li").removeClass("selected");
				$("#new_credit_card .bc6").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_5").addClass("step_6");
				$("#terms_and_conditions").show();
			}
			$("#supGenderRadios ~ label.success").each(function(i) {
				if (i != 1) $(this).remove();
			});
  			return false;
		}
	);
	
	
	/************************** step 6 ***************************/

	// form validation
	$("#form_new_customer_credit_cards").validate({
   		groups: {
            //form2_61: "form2_areacode_residential form2_residential",
            //form2_62: "form2_contact_person_areacode_contact_number form2_contact_person_contact_number",
            form2_63: "form2_overseas_contact_country_code form2_overseas_contact_area_code form2_overseas_contact_tel_no",
            //form2_121: "form2_areacode_office form2_office",
            form2_132: "form2_sup_areacode_home form2_sup_home",
            form2_133: "form2_sup_areacode_office form2_sup_office",
            form2_134: "form2_sup_02_areacode_home form2_sup_02_home",
            form2_135: "form2_sup_02_areacode_office form2_sup_02_office"
        },
  		rules: {
			form2_pcl_question: { required: function(element) {return ($(".pcl_section").css("display") != "none" && $("input[name='form2_pcl_question']:checked").val() == undefined)} },
			form2_pcl_amount: {required: function(element) { return $("input[name='form2_pcl_question']:checked").val() == "BY CUSTOMER"}, min: 1, max: 999999999, number: true, lenstay: true, maxlength:9, minlength: 1},
		
			//form2_salutation: { required: true, minlength: 1 },
			//form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_name_on_card: { required: true, minlength: 5, maxlength: 19 },
			form2_nric_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Foreigner" }, minlength: 9, maxlength: 9 },
			form2_passport_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Singaporean" }, minlength: 5, maxlength: 16 },
			form2_employ_pass_type: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" } },
			//form2_previous_passport_number: { minlength: 5, maxlength: 16 },
			form2_date_of_birth: { required: true, dpDate: true, dpMinMaxDate: []  },
			form2_gender: {required: function(element) { return $("input[name='form2_gender']:checked").val() == undefined}},
			form2_marital_status: { required: true, minlength: 1 },
			//form2_number_of_dependents: { required: true, number: true, min: 0, maxlength: 2 },
			form2_education_status: { required: true, minlength: 1 },
	// --- contact info

			//form2_areacode_residential: { required: true, number: true },
			form2_residential: { required: true, minlength: 8, maxlength: 8, number: true },
			//form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			//form2_email_address: { required: true, email: true, maxlength: 70 },
			form2_name_of_relative_not_living_with_you: { required: true },
			form2_relationship_to_applicant: { required: true, minlength: 1 },
			//form2_contact_person_areacode_contact_number: { required: true, number: true },
			//form2_contact_person_contact_number: { required: true, ctycode: true, minlength: 5, maxlength: 30 },
			form2_contact_person_contact_number: { required: true, minlength: 5, maxlength: 30, number: true },
	// --- address info
			form2_block_number: { required: true, maxlength: 7, alphanumericwith2spec: true },
			form2_unit_number: { required: function(element) { return $("input[name='form2_unit_number']:checked").val() != "N.A" }, minlength: 2, maxlength: 30 },
			form2_street_name: { required: true, minlength: 6, maxlength: 22 },
			form2_postal_code: { required: true, minlength: function(element) { return ($("#country_code_home").val() == "SG") ? 5 : 3 }, maxlength: function(element) { return ($("#country_code_home").val() == "SG") ? 6 : 13 }, alphanumeric: true },
			//form2_postal_code: { required: true,number :true, minlength: 3, maxlength: 13 },
			form2_overseas_address: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" } },
			form2_overseas_contact_country_code: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, ctycode: true, minlength: 1, maxlength: 6 },
			//form2_overseas_contact_area_code: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, number: true, minlength: 1, maxlength: 5 },
			form2_overseas_contact_tel_no: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, number: true, minlength: 5, maxlength: 10 },
			//form2_overseas_contact_tel_no: { required: function(element) { return $("input[name='form2_nationality']:checked").val() == "Foreigner" }, minlength: 5, maxlength: 10 },
			form2_length_of_stay_at_address_years: { required: true },
			
			form2_name_of_employer: { required: function(element) { return $("input[name='form2_nature_of_employment']:checked").val() == "Salaried" } },
			form2_name_of_business: { required: function(element) { return $("input[name='form2_nature_of_employment']:checked").val() != "Salaried" } },
			form2_occupation: { required: true, minlength: 1 },
			form2_job_title: { required: true, minlength: 1	},
			form2_loan_my_income: {required: true, digits: true},
			form2_years_in_service: { required: true },
			//form2_months_in_service: { required: true, number: true, min: 0, max: 11 },
			//// hidden the whole business address section
			form2_employer_block_number: { required: true, maxlength: 7, alphanumericwith2spec: true },
			form2_employer_unit_number: { required: function(element) { return $("input[name='form2_employer_unit_number']:checked").val() != "N.A"}, minlength: 2, maxlength: 30 },
			form2_employer_street_name: { required: true, maxlength: 22 },
			form2_employer_building_name: { required: function(element) { return $("#form2_employer_building_name").val() != ""}, minlength: 2 },
			form2_employer_postal_code: { required: true, minlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 5 : 3 }, maxlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 6 : 13 }, alphanumeric: true },			
			//form2_employer_postal_code: { required: true, number :true, minlength: 3, maxlength: 13 }
			//form2_areacode_office: { required: true, number: true },
			form2_office: { required: true, minlength: 8, maxlength: 8, number: true },

			//form2_length_of_stay_at_address_years: { required: true, number: true, min: 0, max: 60 },
			//form2_length_of_stay_at_address_months: { required: true, number: true, min: 0, max: 11 },
			form2_type_of_residence: { required: true, minlength: 1 },
			form2_residential_ownership: { required: true, minlength: 1 },
 			form2_sup_card: { required: true, minlength: 1 },
			form2_cc_insurance: { required: true, minlength: 1 },
			form2_sup_salutation: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 1 },
			//form2_sup_full_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_first_name: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			//form2_sup_middle_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_name: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			form2_sup_name_on_card: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 19 },
			form2_sup_gender: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			//form2_sup_nric_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() != "Foreigner" && "#form2_sup_card:checked"  }, minlength: 9, maxlength: 9 },
			//form2_sup_passport_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() == "Foreigner" && "#form2_sup_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_passport_number: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 16 },
			form2_sup_date_of_birth: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") } },
			form2_sup_gender: { required: function(element) { return (form2_sup_has_sup_card == "1" || form2_sup_has_sup_card == "2") }},
			form2_sup_areacode_home: { number: true },
			form2_sup_home: { minlength: 8, maxlength: 8, number: true },
			form2_sup_areacode_office: { number: true },
			form2_sup_office: { minlength: 8, maxlength: 8, number: true },
			form2_sup_relationship_to_applicant: { minlength: 1 },
			form2_sup_annual_income: { number: true },
			form2_sup_address: { minlength: 1 },
			form2_sup_business: { minlength: 1 },

//2nd Sup Card
			form2_sup_02_salutation: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 1 },
			//form2_sup_02_full_name: { required: ".form2_sup_02_detail_01_container :visible" },
			form2_sup_02_first_name: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			//form2_sup_02_middle_name: { required: ".form2_sup_02_detail_01_container :visible" },
			form2_sup_02_name: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			form2_sup_02_name_on_card: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 19 },
			form2_sup_02_gender: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			//form2_sup_02_nric_number: { required: function(element) { return $("input[name='form2_sup_02_nationality']:checked").val() != "Foreigner" && "#form2_sup_02_card:checked"  }, minlength: 9, maxlength: 9 },
			//form2_sup_02_passport_number: { required: function(element) { return $("input[name='form2_sup_02_nationality']:checked").val() == "Foreigner" && "#form2_sup_02_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_02_passport_number: { required: function(element) { return (form2_sup_has_sup_card == "2") }, minlength: 5, maxlength: 16 },
			form2_sup_02_date_of_birth: { required: function(element) { return (form2_sup_has_sup_card == "2") } },
			form2_sup_02_gender: { required: function(element) { return (form2_sup_has_sup_card == "2") }},
			form2_sup_02_areacode_home: { number: true },
			form2_sup_02_home: { minlength: 8, maxlength: 8, number: true },
			form2_sup_02_areacode_office: { number: true },
			form2_sup_02_office: { minlength: 8, maxlength: 8, number: true },
			form2_sup_02_relationship_to_applicant: { minlength: 1 },
			form2_sup_02_annual_income: { number: true },
			form2_sup_02_address: { minlength: 1 },
			form2_sup_02_business: { minlength: 1 }
  		},		
		messages: {
			form2_pcl_question: { required: "Please select an option" },
			form2_pcl_amount: { required: "Please enter your preferred credit limit", 
								min: "The preferred Credit Limit amount you entered is invalid", 
								max: "The preferred Credit Limit amount you entered is invalid", 
								number: "The preferred Credit Limit amount you entered is invalid", 
								lenstay: "The preferred Credit Limit amount you entered is invalid", 
								maxlength: "The preferred Credit Limit amount you entered is invalid", 
								minlength: "The preferred Credit Limit amount you entered is invalid"},
		
			//form2_salutation: { required: "Please enter your salutation / title." },
			//form2_name: { required: "Please enter your name."},
			form2_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			form2_nric_number: { required: "Please enter your NRIC." },
			form2_passport_number: { required: "Please enter your passport number" },
			form2_employ_pass_type: { required: "Please select your employment pass type" },
			//form2_previous_passport_number: { required: "Please enter your previous Passport no." },
			form2_date_of_birth: { required: "Please enter your date of birth.", dpDate: "Please enter a valid date. <br />Age must be between 21 to 65.", dpMinMaxDate: "Please enter a valid date. <br />Age must be between 21 to 65."  },
			form2_gender: { required : "Please select your gender"},
			form2_marital_status: { required: "Please select your marital status." },
			//form2_number_of_dependents: { required: "Please enter your number of dependents." },
			form2_education_status: {  required: "Please select your highest education level." },
			//form2_areacode_residential: { required: "Please enter your home phone number." },
			form2_residential: { required: "Please enter your home phone number." },
	// --- contact info
			form2_mail_to_be_sent_to: { required: "Please select mail to be sent to." },
			form2_contact_block_number: { required: "Please enter the block/house number." },
			form2_contact_unit_number: { required: "Please enter the unit number."	},
			form2_contact_street_name: { required: "Please enter the street name." },
			form2_contact_postal_code: { required: "Please enter the postal code." },
			form2_residential: { required: "Please enter your home phone number." },
			//form2_mobile: { required: "Please enter your mobile no." },
			//form2_email_address: { required: "Please enter your email address."	},
			form2_name_of_relative_not_living_with_you: { required: "Please provide the name of person who we can contact for a reference check." },
			form2_relationship_to_applicant: { required: "Please select the reference's relationship with you."	},
			//form2_contact_person_areacode_contact_number: { required: "Please provide the contact number of your reference." },
			form2_contact_person_contact_number: { required: "Please provide the contact number of your reference."},
			form2_block_number: { required: "Please enter the block/house number." },
			form2_unit_number: { required: "Please enter the unit number."},
			form2_street_name: { required: "Please enter the street name." },
			form2_postal_code: { required: "Please enter the postal code." },
			form2_overseas_address: { required: "Please enter your overseas address." },
			form2_overseas_contact_country_code: { required: "Please enter the phone number for this address." },
			form2_overseas_contact_area_code: { required: "Please enter the phone number for this address."	},
			form2_overseas_contact_tel_no: { required: "Please enter the phone number for this address." },
			form2_length_of_stay_at_address_years: { required: "Please select the number of years you have been in service with this company." },
			//form2_length_of_stay_at_address_months: { required: "Please enter length of stay at address (months)." },
			form2_type_of_residence: { required: "Please select the type of property you live in." },
			form2_residential_ownership: { required: "Please select the ownership status of your home." },
			
			form2_name_of_employer: { required: "Please enter the name of your employer." },
			form2_name_of_business: { required: "Please enter the name of your business" },
			form2_occupation: { required: "Please select your industry." },
			form2_job_title: { required: "Please select your job title/position held." },
			form2_loan_my_income: {required: 'Please enter your annual income', digits: "Please enter digits only without comas, decimals or special characters"},
			form2_years_in_service: { required: "Please select the number of years you have been in service with this company." },
			//form2_months_in_service: { required: "Please enter your months in service."	},
			form2_employer_block_number: { required: "Please enter the building number." },
			form2_employer_unit_number: { required: "Please enter the unit number." },
			form2_employer_street_name: { required: "Please enter the street name."	},
			form2_employer_postal_code: { required: "Please enter postal code."	},
			//form2_areacode_office: { required: "Please enter your office phone number." },
			form2_office: { required: "Please enter your office phone number." },
			
			form2_sup_card: { required: "Please confirm your selection." },
			form2_cc_insurance: { required: "Please confirm your selection." },
			form2_sup_salutation: { required: "Please select title of applicant." },
			//form2_sup_full_name: { required: "Please enter name of applicant." },
			form2_sup_first_name: { required: "Please enter first name of applicant." },
			//form2_sup_middle_name: { required: "Please enter middle name of applicant." },
			form2_sup_name: { required: "Please enter last name of applicant." },
			form2_sup_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			//form2_sup_nric_number: { required: "Please enter NRIC." },
			//form2_sup_passport_number: { required: "Please enter passport number." },
			form2_sup_gender: { required: "Please select gender of applicant." },
			form2_sup_passport_number: { required: "Please enter NRIC or passport number." },
			form2_sup_date_of_birth: { required: "Please enter date of birth." },
			form2_sup_gender: { required : "Please select gender"},
			form2_sup_relationship_to_applicant: { required: "Please select the relationship to you."	},
			form2_sup_areacode_home: { required: "Please enter your home phone number." },
			form2_sup_home: { required: "Please enter your home phone number." },
			form2_sup_areacode_office: { required: "Please enter your office phone number." },
			form2_sup_office: { required: "Please enter your office phone number." },
			form2_sup_annual_income: { required: "Please enter your annual income." },
			form2_sup_address: { required: "Please enter your home address." },
			form2_sup_business: { required: "Please enter name & address of your company." },

//2nd Sup Card
			form2_sup_02_salutation: { required: "Please select title of applicant." },
			//form2_sup_02_full_name: { required: "Please enter name of applicant." },
			form2_sup_02_first_name: { required: "Please enter first name of applicant." },
			//form2_sup_02_middle_name: { required: "Please enter middle name of applicant." },
			form2_sup_02_name: { required: "Please enter last name of applicant." },
			form2_sup_02_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			//form2_sup_02_nric_number: { required: "Please enter NRIC." },
			//form2_sup_02_passport_number: { required: "Please enter passport number." },
			form2_sup_02_gender: { required: "Please select gender of applicant." },
			form2_sup_02_passport_number: { required: "Please enter NRIC or passport number." },
			form2_sup_02_date_of_birth: { required: "Please enter date of birth." },
			form2_sup_02_gender: { required : "Please select gender"},
			form2_sup_02_relationship_to_applicant: { required: "Please select the relationship to you."	},
			form2_sup_02_areacode_home: { required: "Please enter your home phone number." },
			form2_sup_02_home: { required: "Please enter your home phone number." },
			form2_sup_02_areacode_office: { required: "Please enter your office phone number." },
			form2_sup_02_office: { required: "Please enter your office phone number." },
			form2_sup_02_annual_income: { required: "Please enter your annual income." },
			form2_sup_02_address: { required: "Please enter your home address." },
			form2_sup_02_business: { required: "Please enter name & address of your company." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		//errorContainer: "#errorMessageBox_step1",

		errorElement: "div",
        wrapper: "div class='error_box'",
        errorPlacement: function(error, element) {
     		if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
	// from tab 4 -- contact info
     		else if (element.attr("name") == "form2_occupation")
       			error.insertAfter("#form2_occupation_label_container");
			else if (element.attr("name") == "form2_job_title")
       			error.insertAfter("#form2_job_title_label_container");
     		else if (element.attr("name") == "form2_contact_unit_number")
       			error.insertAfter("#lbl_form2_contact_unit_number_container");
             else if (element.attr("name") == "form2_unit_number")
       			error.insertAfter("#lbl_form2_unit_number_container");
             else if (element.attr("name") == "form2_mail_to_be_sent_to")
       			error.insertAfter("#mailingRadio");
			else if (element.attr("name") == "form2_employer_unit_number")
       			error.insertAfter("#lbl_form2_employer_unit_number_container");
            else if (element.attr("name") == "form2_employ_pass_type")
        			error.insertAfter("#form2_employ_pass_type_lbl");
			else if (element.attr("name") == "form2_pcl_question")
        			error.insertAfter("#form2_pcl_question_cust");		
 			else {
                error.appendTo( element.parent().next() ); 
			}
		}
	});

	/******** contact preview **********/
	
	$("#from2_main_contact_edit").click(
		function() {
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

	$("#from2_main_contactl_save").click(
		function() {
			if (($("#form_notes_information").valid())) {
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

	/******** personal preview **********/
	
	$("#from2_personal_edit").click(
		function() {
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
	
	$("#from2_adress_edit").click(
		function() {
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

	/******** oversee address preview **********/
	
	$("#from2_oversee_addressl_edit").click(
		function() {
			$("#pre_form2_oversee_address_edit_container").show();
			$("#pre_form2_oversee_address_preview_container").hide();
			$('#form2_oversee_address_container').appendTo('#pre_form2_oversee_address_edit_content_container');
			resizeSlider();
			clonefields( "pre_form2_oversee_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_oversee_address_cancel").click(
		function() {
			$("#pre_form2_oversee_address_edit_container").hide();
			$("#pre_form2_oversee_address_preview_container").show();
			//$('#form2_oversee_address_container').appendTo('#form2_oversee_address_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_oversee_address_edit_content_container" );
			resetCancelFields( "pre_form2_oversee_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_oversee_address_save").click(
		function() {
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_oversee_address_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_oversee_address_edit_container").hide();
				$("#pre_form2_oversee_address_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_oversee_address_edit_content_container" );
			//$('#form2_oversee_address_container').appendTo('#form2_oversee_address_container_wrapper');
  			return false;
		}
	);

	$("#from2_pcl_edit").click(	function() {
		$("#pre_form2_pcl_edit_container").show();
		$("#pre_form2_pcl_preview_container").hide();
		$('#form2_pcl_container').appendTo('#pre_form2_pcl_edit_content_container');
		resizeSlider();
		clonefields( "pre_form2_pcl_edit_content_container" );
		return false;
	});
	
	$("#from2_pcl_cancel").click( function() {
		$("#pre_form2_pcl_edit_container").hide();
		$("#pre_form2_pcl_preview_container").show();
		resizeSlider();
		restorefields( "pre_form2_pcl_edit_content_container" );
		resetCancelFields( "pre_form2_pcl_edit_content_container" );
		return false;
	});
	
	$("#from2_pcl_save").click(	function() {
		if (($("#form_new_customer_credit_cards").valid())) {
			preview_form2();
			$("#pre_form2_pcl_preview_container .tab_content").addClass("yellow_box_no_padding");
			$("#pre_form2_pcl_edit_container").hide();
			$("#pre_form2_pcl_preview_container").show();
		}
		resizeSlider();
		resetCancelFields( "pre_form2_pcl_edit_content_container" );
		return false;
	});		
	
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
	
	/******** secondary contact preview **********/
	
	$("#from2_secondary_contact_edit").click(
		function() {
			$("#pre_form2_secondary_contact_edit_container").show();
			$("#pre_form2_secondary_contact_preview_container").hide();
			$('#form2_secondary_contact_container').appendTo('#pre_form2_secondary_contact_edit_content_container');
			resizeSlider();
			clonefields( "pre_form2_secondary_contact_edit_content_container" );
			return false;
		}
	);

	$("#from2_secondary_contact_cancel").click(
		function() {
			$("#pre_form2_secondary_contact_edit_container").hide();
			$("#pre_form2_secondary_contact_preview_container").show();
			//$('#form2_secondary_contact_container').appendTo('#form2_secondary_contact_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_secondary_contact_edit_content_container" );
			resetCancelFields( "pre_form2_secondary_contact_edit_content_container" );
			return false;
		}
	);

	$("#from2_secondary_contact_save").click(
		function() {
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_secondary_contact_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_secondary_contact_edit_container").hide();
				$("#pre_form2_secondary_contact_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_secondary_contact_edit_content_container" );
			//$('#form2_secondary_contact_container').appendTo('#form2_secondary_contact_container_wrapper');
  			return false;
		}
	);

	/******** employment preview **********/
	
	$("#from2_employment_edit").click(
		function() {
			$("#pre_form2_employment_edit_container").show();
			$("#pre_form2_employment_preview_container").hide();

			var form2_nature_of_employment_radio_value = $("input[name='form2_nature_of_employment']:checked").val();	

			$('#form2_employment_container').appendTo('#pre_form2_employment_edit_content_container');

			$('input:radio[name="form2_nature_of_employment"]').filter('[value="' + form2_nature_of_employment_radio_value + '"]').attr("checked", true);

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

	/******** business address preview **********/
	
	$("#from2_business_address_edit").click(
		function() {
			$("#pre_form2_business_address_edit_container").show();
			$("#pre_form2_business_address_preview_container").hide();
			
			var form2_mail_to_be_sent_to_check_value = ( $('#form2_mail_to_be_sent_to').is(':checked') );
			
			$('#form2_business_address_container').appendTo('#pre_form2_business_address_edit_content_container');
			
			if (form2_mail_to_be_sent_to_check_value) {$("#form2_mail_to_be_sent_to").attr('checked', true); }
			
			resizeSlider();
			clonefields( "pre_form2_business_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_business_address_cancel").click(
		function() {
			$("#pre_form2_business_address_edit_container").hide();
			$("#pre_form2_business_address_preview_container").show();
			//$('#form2_business_address_container').appendTo('#form2_business_address_container_wrapper');
			resizeSlider();
			restorefields( "pre_form2_business_address_edit_content_container" );
			resetCancelFields( "pre_form2_business_address_edit_content_container" );
			return false;
		}
	);

	$("#from2_business_address_save").click(
		function() {
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#pre_form2_business_address_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_business_address_edit_container").hide();
				$("#pre_form2_business_address_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_business_address_edit_content_container" );
			//$('#form2_business_address_container').appendTo('#form2_business_address_container_wrapper');
  			return false;
		}
	);
	
	/******** business address preview **********/
	
	/******** supp card preview **********/
	
	$("#from2_supp_card_edit").click(
		function() {
			$("#pre_form2_supp_card_edit_container").show();
			$("#pre_form2_supp_card_preview_container").hide();

			var form2_sup_gender_radio_value = $("input[name='form2_sup_gender']:checked").val();	

			$('#form2_supp_card_container').appendTo('#pre_form2_supp_card_edit_content_container');

			$('input:radio[name="form2_sup_gender"]').filter('[value="' + form2_sup_gender_radio_value + '"]').attr("checked", true);

			resizeSlider();
			clonefields( "pre_form2_supp_card_edit_content_container" );
			return false;
		}
	);

	$("#from2_supp_card_cancel").click(
		function() {
			$("#pre_form2_supp_card_edit_container").hide();
			$("#pre_form2_supp_card_preview_container").show();
			resizeSlider();
			restorefields( "pre_form2_supp_card_edit_content_container" );
			resetCancelFields( "pre_form2_supp_card_edit_content_container" );
			return false;
		}
	);

	$("#from2_supp_card_save").click(
		function() {
			if (($("#form_new_customer_credit_cards").valid())) {
				preview_form2();
				$("#form2_supp_card_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_supp_card_edit_container").hide();
				$("#pre_form2_supp_card_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_supp_card_edit_content_container" );
  			return false;
		}
	);

	/******** T & C**********/
	
	$('#declarationmsg').scroll(function() {
		if (  $(this).scrollTop() > ($('#declarationmsg > .inner').height() -  $('#declarationmsg').height() - 10) ) {
		  // We're at the bottom!
			$('#form2_declaration_help').hide();
			$('#form2_declaration_control').show();
			if( jQuery.query.get("GType")+"" != "" ) {
				$('#form2_declaration_control_3').show();
			} else {
				$('#form2_declaration_control_3').hide();
			}
			resizeSlider();
		}
	});
	$('#declarationmsg-singpost').scroll(function() {
		if (  $(this).scrollTop() > ($('#declarationmsg-singpost > .inner').height() -  $('#declarationmsg-singpost').height() - 10) ) {
		  // We're at the bottom!
			$('#form2_declaration_help').hide();
			$('#form2_declaration_control').show();
			if( jQuery.query.get("GType")+"" != "" ) {
				$('#form2_declaration_control_3').show();
			} else {
				$('#form2_declaration_control_3').hide();
			}
			resizeSlider();
		}
	});
	
	$('#declarationmsg-tiger').scroll(function() {
		if (  $('#declarationmsg-tiger').scrollTop() > ($('#declarationmsg-tiger > .inner').height() -  $('#declarationmsg-tiger').height() - 10) ) {
		  // We're at the bottom!
			$('#form2_declaration_help').hide();
			$('#form2_declaration_control').show();
			if( jQuery.query.get("TGRType")+"" == "URR" ){
                $("#form2_declaration_control_2").show();	
			}
			resizeSlider();
		}
	});

	/******** preview generation **********/
	
	function preview_form2(){
	
		if( $("#form2_pcl_question_bank").attr("checked") ) {
			$("#pre_form2_pcl_question").html("I prefer to be assigned the credit limit as determined by the Bank for my credit card(s), and my credit limit(s) for all my other existing non-card credit facilities to remain unchanged.");
		} else if( $("#form2_pcl_question_cust").attr("checked") ) {
			$("#pre_form2_pcl_question").html("I prefer my credit limit for my credit card(s) to be $"+$("#form2_pcl_amount").val()+", and my credit limit(s) for all my other existing non-card credit facilities to remain unchanged.");
		} else {
			$("#pre_form2_pcl_question").html("");
		}
	
		var form2_salutation = $("#form2_salutation").val();
		// trim space
		var form2_first_name = $.trim( $("#form2_first_name").val() );
		//var form2_middle_name = $.trim( $("#form2_middle_name").val() );
		var form2_name = $.trim( $("#form2_name").val() );
		// form2_name = form2_first_name.replace(/\s+/g,' ') + " " + form2_middle_name.replace(/\s+/g,' ') + " " + form2_name.replace(/\s+/g,' ');
		var form2_name_on_card = $.trim( $("#form2_name_on_card").val() );
		form2_name_on_card = form2_name_on_card.replace(/\s+/g,' ');
		
		var form2_nationality = $("input[name='form2_nationality']:checked").val();
		var form2_nric_number = $("#form2_nric_number").val();
		var form2_passport_number = $("#form2_passport_number").val();
		//var form2_previous_passport_number = $("#form2_previous_passport_number").val();
		var form2_date_of_birth = $("#form2_date_of_birth").val();
		var form2_gender = $("input[name='form2_gender']:checked").val();
		var form2_ethnic_type = $("input[name='form2_ethnic_type']:checked").val();
		var form2_marital_status = $("#form2_marital_status").val();
		var form2_number_of_dependents = $("#form2_number_of_dependents").val();
		var form2_education_status = $("#form2_education_status").val();
		var form2_block_number = $("#form2_block_number").val();
		var form2_unit_number = $("#form2_unit_number").val();
		var form2_street_name = $("#form2_street_name").val();
		var form2_building_name = $("#form2_building_name").val();
		var form2_postal_code = $("#form2_postal_code").val();		
		var form2_overseas_address = $("#form2_overseas_address").val() +' '+$("#form2_overseas_address_1").val();
		var form2_overseas_contact_country_code = $("#form2_overseas_contact_country_code").val();
		var form2_overseas_contact_area_code = $("#form2_overseas_contact_area_code").val();
		var form2_overseas_contact_tel_no = $("#form2_overseas_contact_tel_no").val();
		var form2_length_of_stay_at_address_years = $("#form2_length_of_stay_at_address_years").val() + " Year(s) ";
		var form2_length_of_stay_at_address_months = $("#form2_length_of_stay_at_address_months").val() + " Month(s) ";
		var form2_type_of_residence = $("#form2_type_of_residence :selected").text();
		var form2_residential_ownership = $("#form2_residential_ownership :selected").text();
		var form2_nature_of_employment = $("input[name='form2_nature_of_employment']:checked").val();
		var form2_name_of_employer = $("#form2_name_of_employer").val();
		var form2_name_of_business = $("#form2_name_of_business").val();
		var form2_occupation = $("#form2_occupation :selected").text();
		
		var form2_job_title = "";
		var form2_job_title_code = $("#form2_job_title").val();
		if( form2_job_title_code == 14 ) { form2_job_title = 'Broker/Remisier'  } 
		else if( form2_job_title_code == 04 ) { form2_job_title = 'Chartered Accountant'  }
		else if( form2_job_title_code == 03 ) { form2_job_title = 'Chartered Surveyor/Architect'  }
		else if( form2_job_title_code == 23 ) { form2_job_title = 'Chemist/Pharmacist/Optician'  }
		else if( form2_job_title_code == 22 ) { form2_job_title = 'Computer Programmer/Computer Analyst'  }
		else if( form2_job_title_code == 98 ) { form2_job_title = 'Crane Oper/Chef/Beautician etc'  }
		else if( form2_job_title_code == 47 ) { form2_job_title = 'Designer/Artist'  }
		else if( form2_job_title_code == 70 ) { form2_job_title = 'Director'  }
		else if( form2_job_title_code == 73 ) { form2_job_title = 'Disciplinary Force (Army, Police, Navy,..)'  }
		else if( form2_job_title_code == 01 ) { form2_job_title = 'Doctor/Dentist'  }
		else if( form2_job_title_code == 76 ) { form2_job_title = 'Driver/Delivery Worker'  }
		else if( form2_job_title_code == 21 ) { form2_job_title = 'Engineer/Surveyor/Accountant/Auditor'  }
		else if( form2_job_title_code == 44 ) { form2_job_title = 'Foreman (Not Construction Foreman)'  }
		else if( form2_job_title_code == 97 ) { form2_job_title = 'Freelance/Private Tutors'  }
		else if( form2_job_title_code == 75 ) { form2_job_title = 'Insurance Agents'  }
		else if( form2_job_title_code == 24 ) { form2_job_title = 'Journalist/Optician'  }
		else if( form2_job_title_code == 99 ) { form2_job_title = 'Karaoke,Sailor,Massage,NiteClub,Lounge'  }
		else if( form2_job_title_code == 02 ) { form2_job_title = 'Lawyer/Judge'  }
		else if( form2_job_title_code == 19 ) { form2_job_title = 'Lecturer/Economist'  }
		else if( form2_job_title_code == 08 ) { form2_job_title = 'Managerial'  }
		else if( form2_job_title_code == 15 ) { form2_job_title = 'MGR/CO Secretary/Executive/Administrator'  }
		else if( form2_job_title_code == 16 ) { form2_job_title = 'Nurse'  }
		else if( form2_job_title_code == 72 ) { form2_job_title = 'Partner'  }
		else if( form2_job_title_code == 05 ) { form2_job_title = 'Pilot'  }
		else if( form2_job_title_code == 07 ) { form2_job_title = 'Professional'  }
		else if( form2_job_title_code == 77 ) { form2_job_title = 'Property/Estate Agent/Sales Executive'  }
		else if( form2_job_title_code == 82 ) { form2_job_title = 'Retiree'  }
		else if( form2_job_title_code == 51 ) { form2_job_title = 'Secretary/Clerk'  }
		else if( form2_job_title_code == 06 ) { form2_job_title = 'Senior Management'  }
		else if( form2_job_title_code == 71 ) { form2_job_title = 'Sole Proprietor'  }
		else if( form2_job_title_code == 48 ) { form2_job_title = 'Sub-Contractor'  }
		else if( form2_job_title_code == 45 ) { form2_job_title = 'Supervisor'  }
		else if( form2_job_title_code == 20 ) { form2_job_title = 'Teacher/Principal/Educational Officer'  }
		else if( form2_job_title_code == 46 ) { form2_job_title = 'Technician/Draftsman'  }
		else if( form2_job_title_code == 49 ) { form2_job_title = 'Tour Guide'  }
		else if( form2_job_title_code == 43 ) { form2_job_title = 'Worker'  }
		else if ( form2_job_title_code == 10 ) { form2_job_title = 'Others'  }
		
		var form2_job_title_other = $("#form2_job_title_other").val();
		var form2_years_in_service = $("#form2_years_in_service").val() + " Year(s) ";
		var form2_months_in_service = $("#form2_months_in_service").val() + " Month(s) ";
		var form2_employer_block_number = $("#form2_employer_block_number").val();
		var form2_employer_unit_number = $("#form2_employer_unit_number").val();
		var form2_employer_street_name = $("#form2_employer_street_name").val();
		var form2_employer_building_name = $("#form2_employer_building_name").val();
		var form2_employer_postal_code = $("#form2_employer_postal_code").val();
		//var form2_mail_to_be_sent_to = $("#form2_mail_to_be_sent_to :selected").text();
		var form2_mail_to_be_sent_to = "";
			if( $('#form2_mail_to_be_sent_to').is(':checked') ) { form2_mail_to_be_sent_to = 'Office address'; } else { form2_mail_to_be_sent_to = 'Home address'; }
		var form2_contact_block_number = $("#form2_contact_block_number").val();
		var form2_contact_unit_number = $("#form2_contact_unit_number").val();
		var form2_contact_street_name = $("#form2_contact_street_name").val();
		var form2_contact_building_name = $("#form2_contact_building_name").val();
		var form2_contact_postal_code = $("#form2_contact_postal_code").val();
		var form2_residential = $("#form2_residential").val();
		var form2_office = $("#form2_office").val();
		var form2_mobile = $("#form2_mobile").val();
		var form2_email_address = $("#form2_email_address").val();
		var form2_contact_overseas_address = $("#form2_contact_overseas_address").val();
		var form2_name_of_relative_not_living_with_you = $("#form2_name_of_relative_not_living_with_you").val();
		var form2_relationship_to_applicant = $("#form2_relationship_to_applicant :selected").text();
		var form2_contact_person_contact_number = $("#form2_contact_person_contact_number").val();
		var form2_sup_salutation = $("#form2_sup_salutation :selected").text();
		//var form2_sup_full_name = $("#form2_sup_full_name").val();
// kkk
		var form2_sup_full_name = "";
		var form2_sup_first_name = $.trim( $("#form2_first_name").val() );
		var form2_sup_middle_name = $.trim( $("#form2_middle_name").val() );
		var form2_sup_name = $.trim( $("#form2_name").val() );
		form2_sup_full_name = form2_sup_first_name.replace(/\s+/g,' ') + " " + form2_sup_middle_name.replace(/\s+/g,' ') + " " + form2_sup_name.replace(/\s+/g,' ');
		var form2_sup_name_on_card = $("#form2_sup_name_on_card").val();
		var form2_sup_nationality = $("input[name='form2_sup_nationality']:checked").val();
		var form2_sup_nric_number = $("#form2_sup_nric_number").val();
		var form2_sup_passport_number = $("#form2_sup_passport_number").val();
		var form2_sup_date_of_birth = $("#form2_sup_date_of_birth").val();
		var form2_sup_gender = $("input[name='form2_sup_gender']:checked").val();
		var form2_sup_relationship_to_applicant = $("#form2_sup_relationship_to_applicant :selected").text();
		var form2_sup_block_no = $("#form2_sup_block_no").val();
		var form2_sup_unit_no = $("#form2_sup_unit_no").val();
		var form2_sup_street_name = $("#form2_sup_street_name").val();
		var form2_sup_building_name = $("#form2_sup_building_name").val();
		var form2_sup_postal_code = $("#form2_sup_postal_code").val();
		var form2_ft_account_holder_name = $("#form2_ft_account_holder_name").val();
		var form2_ft_nric_passport = $("#form2_ft_nric_passport").val();
		var form2_ft_bank_name = $("#form2_ft_bank_name :selected").text();
		var form2_ft_transfer_to_account_type = $("#form2_ft_transfer_to_account_type :selected").text();
		var form2_ft_account_credit_card_number = $("#form2_ft_account_credit_card_number").val();
		var form2_ft_amount_to_be_transferred = $("#form2_ft_amount_to_be_transferred").val();
		var form2_link_to_personal_credit_account_number = $("#form2_link_to_personal_credit_account_number").val();
		var form2_link_to_savings_current_account_number = $("#form2_link_to_savings_current_account_number").val();
		var form2_country = $("#form2_country").val();
		var form2_country_emp = $("#country_code_emp :selected").text();
		var form2_country_home = $("#country_code_home :selected").text();
		
		$("#pre_form2_thank_salutation").html(form2_salutation);
		$("#pre_form2_thank_name").html(form2_name);
		$("#pre_form2_salutation").html(form2_salutation);
		$("#pre_form2_name").html(form2_name);
		
/** By Terence **/		
		//$("#pre_form2_middle_name").html(form2_middle_name);
		$("#pre_form2_first_name").html(form2_first_name);
		
		$("#pre_form2_name_on_card").html(form2_name_on_card);
		$("#pre_form2_nationality").html(form2_nationality);
		$("#pre_form2_nric_number").html(form2_nric_number);
		$("#pre_form2_passport_number").html(form2_passport_number);
		if( $("input[name='form2_nationality']:checked").val() == "Foreigner" && $('#form2_employ_pass_type_p1p2').is(':checked') ) {
			$("#pre_form2_employ_pass_type").html( "P1/P2" );
			$("#form2_employ_pass_type_p1p2").val( "P1/P2" );
		} else if( $("input[name='form2_nationality']:checked").val() == "Foreigner" && $('#form2_employ_pass_type_s').is(':checked') ) {
			$("#pre_form2_employ_pass_type").html( "S" );
			$("#form2_employ_pass_type_s").val( "S" );
		}

		//$("#pre_form2_previous_passport_number").html(form2_previous_passport_number);
		$("#pre_form2_date_of_birth").html(form2_date_of_birth);
		$("#pre_form2_gender").html(form2_gender);
		$("#pre_form2_ethnic_type").html(form2_ethnic_type);
		$("#pre_form2_marital_status").html(form2_marital_status);
		$("#pre_form2_number_of_dependents").html(form2_number_of_dependents);
		$("#pre_form2_education_status").html(form2_education_status);
		$("#pre_form2_block_number").html(form2_block_number);
		$("#pre_form2_unit_number").html(form2_unit_number);
		$("#pre_form2_street_name").html(form2_street_name);
		$("#pre_form2_building_name").html(form2_building_name);
		//country
		$("#pre_country_home").html(form2_country_home);
		$("#pre_form2_postal_code").html(form2_postal_code);
		$("#pre_form2_overseas_address").html(form2_overseas_address);
		$("#pre_form2_overseas_contact_country_code").html(form2_overseas_contact_country_code);
		$("#pre_form2_overseas_contact_area_code").html(form2_overseas_contact_area_code);
		$("#pre_form2_overseas_contact_tel_no").html(form2_overseas_contact_tel_no);
		$("#pre_form2_length_of_stay_at_address_years").html(form2_length_of_stay_at_address_years);
		$("#pre_form2_length_of_stay_at_address_months").html(form2_length_of_stay_at_address_months);
		$("#pre_form2_type_of_residence").html(form2_type_of_residence);
		$("#pre_form2_residential_ownership").html(form2_residential_ownership);
		$("#pre_form2_nature_of_employment").html(form2_nature_of_employment);
		$("#pre_form2_name_of_employer").html(form2_name_of_employer);
		$("#pre_form2_name_of_business").html(form2_name_of_business);
		$("#pre_form2_occupation").html(form2_occupation);
		$("#pre_form2_job_title").html(form2_job_title);
		$("#pre_form2_loan_my_income").html( $("#form2_loan_my_income").val() );
		$("#pre_form2_job_title_other").html(form2_job_title_other);
		$("#pre_form2_years_in_service").html(form2_years_in_service);
		$("#pre_form2_months_in_service").html(form2_months_in_service);
		$("#pre_form2_employer_postal_code").html(form2_employer_postal_code);
		$("#pre_form2_employer_block_number").html(form2_employer_block_number);
		$("#pre_form2_employer_unit_number").html(form2_employer_unit_number);
		$("#pre_form2_employer_street_name").html(form2_employer_street_name);
		$("#pre_form2_employer_building_name").html(form2_employer_building_name);
		//country
		$("#pre_country_emp").html(form2_country_emp);
		$("#pre_form2_employer_postal_code").html(form2_employer_postal_code);
		$("#pre_form2_mail_to_be_sent_to").html(form2_mail_to_be_sent_to);
		$("#pre_form2_contact_block_number").html(form2_contact_block_number);
		$("#pre_form2_contact_unit_number").html(form2_contact_unit_number);
		$("#pre_form2_contact_street_name").html(form2_contact_street_name);
		$("#pre_form2_contact_building_name").html(form2_contact_building_name);
		//country
		$("#pre_form2_country").html(form2_country);
		$("#pre_form2_contact_postal_code").html(form2_contact_postal_code);
		$("#pre_form2_residential").html(form2_residential);
		$("#pre_form2_office").html(form2_office);
		$("#pre_form2_mobile").html(form2_mobile);
		$("#pre_form2_email_address").html(form2_email_address);
		$("#pre_form2_contact_overseas_address").html(form2_contact_overseas_address);
		$("#pre_form2_name_of_relative_not_living_with_you").html(form2_name_of_relative_not_living_with_you);
		$("#pre_form2_relationship_to_applicant").html(form2_relationship_to_applicant);
		$("#pre_form2_contact_person_contact_number").html(form2_contact_person_contact_number);
		$("#pre_form2_sup_card").html(form2_sup_card);
		$("#pre_form2_sup_salutation").html(form2_sup_salutation);
		//$("#pre_form2_sup_full_name").html(form2_sup_full_name);
		$("#pre_form2_sup_name_on_card").html(form2_sup_name_on_card);
		$("#pre_form2_sup_nationality").html(form2_sup_nationality);
		$("#pre_form2_sup_nric_number").html(form2_sup_nric_number);
		$("#pre_form2_sup_passport_number").html(form2_sup_passport_number);
		$("#pre_form2_sup_date_of_birth").html(form2_sup_date_of_birth);
		$("#pre_form2_sup_gender").html(form2_sup_gender);
		$("#pre_form2_sup_relationship_to_applicant").html(form2_sup_relationship_to_applicant);
		$("#pre_form2_sup_block_no").html(form2_sup_block_no);
		$("#pre_form2_sup_unit_no").html(form2_sup_unit_no);
		$("#pre_form2_sup_street_name").html(form2_sup_street_name);
		$("#pre_form2_sup_building_name").html(form2_sup_building_name);
		$("#pre_form2_sup_postal_code").html(form2_sup_postal_code);
		$("#pre_form2_sup_has_sup_card").html(form2_sup_has_sup_card);
		$("#pre_form2_apply_for_funds_transfer").html(form2_apply_for_funds_transfer);
		$("#pre_form2_ft_account_holder_name").html(form2_ft_account_holder_name);
		$("#pre_form2_ft_nric_passport").html(form2_ft_nric_passport);
		$("#pre_form2_ft_bank_name").html(form2_ft_bank_name);
		$("#pre_form2_ft_transfer_to_account_type").html(form2_ft_transfer_to_account_type);
		$("#pre_form2_ft_account_credit_card_number").html(form2_ft_account_credit_card_number);
		$("#pre_form2_ft_amount_to_be_transferred").html(form2_ft_amount_to_be_transferred);
		$("#pre_form2_personal_credit").html(form2_personal_credit);
		$("#pre_form2_link_to_personal_credit_account").html(form2_link_to_personal_credit_account);
		$("#pre_form2_link_to_personal_credit_account_number").html(form2_link_to_personal_credit_account_number);
		$("#pre_form2_link_to_savings_current_account").html(form2_link_to_savings_current_account);
		$("#pre_form2_link_to_savings_current_account_number").html(form2_link_to_savings_current_account_number);
		$("#pre_form2_apply_e_statement_service").html(form2_apply_e_statement_service);
		$("#pre_form2_apply_for_internet_phone_banking").html(form2_apply_for_internet_phone_banking);

// New		
		var form2_sup_first_name = $("#form2_sup_first_name").val();
		$("#pre_form2_sup_first_name").html(form2_sup_first_name);
		
		var form2_sup_middle_name = $("#form2_sup_middle_name").val();
		$("#pre_form2_sup_middle_name").html(form2_sup_middle_name);

		var form2_sup_name = $("#form2_sup_name").val();
		$("#pre_form2_sup_name").html(form2_sup_name);

		var form2_sup_passport_number = $("#form2_sup_passport_number").val();
		$("#pre_form2_sup_passport_number").html(form2_sup_passport_number);

		var form2_sup_address= $("#form2_sup_address").val();
		$("#pre_form2_sup_address").html(form2_sup_address);
		
//New New New
		if ($("#form2_upload_file_list_preview").val() == "" ) {
			var form2_upload_file_list = "None";
		} else {
			var form2_upload_file_list = $("#form2_upload_file_list_preview").val();
		}
		$("#pre_form2_upload_file_list").html(form2_upload_file_list);

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
	
	
	
	// cancel button
	$("#form_new_customer_credit_cards .btn_back").click(
		function() {
			$("#form_new_customer_credit_cards .back").click();
			$("#new_credit_card .tabs li").removeClass("selected");
			$("#new_credit_card .bc5").addClass("selected");
		}
	);
	
	$("#form2_previewedit_next_back .btn_back").click(
			function() {
				//$("#form_new_customer_credit_cards_4 .back").click();
				$("#form2_previewedit_next_back .back").click();
				$("#new_credit_card .bc6").removeClass("selected");
				$("#new_credit_card .bc4").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_5").addClass("step_4");
					$("#coda-slider-2 .panel04").addClass("selected-panel");
					$("#coda-slider-2 .panel06").removeClass("selected-panel");
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_vas").hide();
					$(".form2_header_documents").show();
					$(".form2_header_review").hide();
					$("errorMessageBox_step1").hide();
					// hide the back button to avoid user go back more
					$('#form2_upload_next_back .btn_back').hide();
			}
		);
	
	// form validation
	$("#form_new_customer_credit_cards_submit").validate({
  		rules: {
			form2_declaration: { required: true, minlength: 1},
			form2_declaration_2: { required: function(element) { return $('#selectedCard').val() == "SG_PVC_TGR" && jQuery.query.get("TGRType")+"" == "URR" }, minlength: 1},
            form2_declaration_3: { required: function(element) { return jQuery.query.get("GType")+"" != "" }, minlength: 1}
  		},		
		messages: {
  			form2_declaration: { required: "Please read and agree to the terms and conditions before submitting the application." },
  			form2_declaration_2: { required: "Please read and agree to the Upfront Rewards Plan terms and conditions before submitting the application." },
            form2_declaration_3: { required: "Please read and agree to the Sign-Up Gift and CashBack Promotion terms and conditions before submitting the application." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_declaration")
       			error.insertAfter("#lbl_form2_declaration");
 			else if (element.attr("name") == "form2_declaration_2")
       			error.insertAfter("#lbl_form2_declaration_2");
 			else if (element.attr("name") == "form2_declaration_3")
       			error.insertAfter("#lbl_form2_declaration_3");
 			else
                error.appendTo( element.parent().next() );
   		}
	});
	
	// form submission
	$("#check_new_credit_card_6").click(
		function() {
			

			if ( !$("#form_new_customer_credit_cards").valid() ) {
				resizeSlider();
				return false;
			}
			
			if ( !$("#form_new_customer_credit_cards_submit").valid() ) {
				resizeSlider();
				return false;
			}
//			$('.error_box').hide();		
			$("#h4declation, #divdeclation").hide();
			
			if ($("#"+"pre_form2_nationality").text() == "Singaporean" || $("#"+"pre_form2_nationality").text() == "Singapore Permanent Resident") {
					$("#new_singaporean_document").show();
					$("#new_non_singaporean_document").hide();
			} else {
					$("#new_non_singaporean_document").show();
					$("#new_singaporean_document").hide();
			}
			//display_waiting_oage_for_aip(); // AIP
			//while( !$("#waiting_oage_for_aip").is(":visible") ) {
			//	display_waiting_oage_for_aip();
			//}
			//scroll to top
			window.scrollTo(0,0);
			resetUiStyle();
			$('#spinning-dialog .wrap-img h2').empty().append('Please wait and do not close your browser while we are processing your request.');
			$('#spinning-dialog .wrap-img p').empty().append('This may take some time. Thank you for your patience.');
			$('#spinning-dialog .buttons-pop').empty();
			/*
			if ( $.browser.msie ) {
    			$('#spinning-dialog').css('height','240px');
    			$('#pop-up-upload').css('height','200px');
    			$('#spinning-dialog').dialog('open');

			} else {
    			$('#spinning-dialog').css('height','290px');
    			$('#pop-up-upload').css('height','250px');
    			$('#spinning-dialog').dialog('open');
    			$('#counter').show();
    			$('#counter').countdown({
                  image: 'images/digits.png',
                  startTime: '01:30',
                  timerEnd: function(){},
                  format: 'mm:ss'
                });

			}
			*/
			$('#spinning-dialog').dialog('open');
			$('#spinning-dialog').css('height','300px');
			$('#pop-up-upload').css('height','260px');
			$('#counter').show();
			$('#counter').countdown({
              image: 'images/digits.png',
              startTime: '00:60',
              timerEnd: function(){},
              format: 'mm:ss'
            });
					
			window.onbeforeunload = null;
			//$("#form2_xml").hide();
			//$("#new_credit_card").hide();
			onCompleted();
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
				setTimeout(function(){
				
					var postURL="/nfs-ofp/ofpservice.htm";					
					if(window.location.hostname.toLowerCase().indexOf("localhost") > -1)			
						postURL = "/outputaip2.php";
					$.post(postURL, { formXML :  resultXML }, function(responseText, statusText){					

					//$.post("/nfs-ofp-foa/ofpservice.htm", { formXML :  resultXML }, function(responseText, statusText){
					
						// Success Leads DB
						//onCompleted();
						if(statusText == "success") {
							// call GA
							//recordOutboundLink(this.href, jQuery.query.get("Cardtype"), '6_FormSubmitted');
							var returnCode = "";
							var returnID = "";
	
							var regRefID = new RegExp("</REFID>");
							returnID = responseText.substring(13, responseText.search(regRefID));
							
							var regStatus1 = new RegExp("<STATUS>"); 
							var regStatus2 = new RegExp("</STATUS>");
							returnCode = responseText.substring(responseText.search(regStatus1)+8, responseText.search(regStatus2));
							
							if(returnID != null && returnID != "" && (returnID.indexOf("SGR") > -1 || postURL == "/outputaip2.php") ) {
								//$(".newcard_receipt").append('<span>'+returnID+'</span><br />');
								$('#FormRefID').val(returnID+"|"+returnCode);
								$('#FormRefID_AIP').val(returnID);
								//sendscode(returnID);
    							//document.location.replace('credit_card_form_thankyou_aip_avt.html?FormRefID='+$('#FormRefID').val()+'&selectedCard='+$('#selectedCard').val());
								generateForm();
								//document.location.replace("credit_card_form_thankyou_aip.html?returnCode="+returnCode+"&returnID="+returnID);
								
							} else {
								alert("Form submission failed, please try again later");
							}
							
						} else {
							alert("System is busy, please try again later");
						}
	
					});
				}, 2000); // end of timer
			});

		}
	);

});
