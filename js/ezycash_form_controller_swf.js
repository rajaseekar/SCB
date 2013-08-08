	/*************************** validation ***************************/
//get80 start
var get80id = '';
var isDGM;
var subChanCode = '';
// get80 end

function resizeSlider() {
	$('#coda-slider-2').height(($("#coda-slider-2 .selected-panel").height())+20);
}

// mouse over effect for upload file button
$(function() {
    $(".fileinputs_id")
        .mouseover(function(){
        	//$(this).css("text-decoration","underline");
		    $(".fileinputs_id .upload_file_over").show();
		    $(".fileinputs_id .upload_file").hide();
			/*if ($(this).hasClass('btn_upload_file')) {
	            $(this).removeClass("btn_upload_file");
	            $(this).addClass("btn_upload_file_over");
			} else {
	            $(this).removeClass("btn_upload_another_file");
	            $(this).addClass("btn_upload_another_file_over");
	            $(this).removeClass("btn_upload_file");
	            $(this).removeClass("btn_upload_file_over");
			}*/
        })
        .mouseout(function(){
        	//$(this).css("text-decoration","none");
		    $(".fileinputs_id .upload_file_over").hide();
		    $(".fileinputs_id .upload_file").show();
        	/*if (($(this).hasClass('btn_upload_file_over')) || ($(this).hasClass('btn_upload_file'))) {
	            $(this).removeClass("btn_upload_file_over");
	            $(this).addClass("btn_upload_file");
			} else {
	            $(this).removeClass("btn_upload_another_file_over");
	            $(this).addClass("btn_upload_another_file");
	            $(this).removeClass("btn_upload_file");
	            $(this).removeClass("btn_upload_file_over");
			}*/
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

// hack ie6 selection box width


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
	var daysInMonth = DaysArray(12);
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
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		//alert("Please enter a valid day")
		return false;
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false;
	}
	if(age<21 || age >65){
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
	$(".form2_header_loan").show();
	$(".form2_header_personal").hide();
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
function generateXml() {
	var startXML='';
	var commonXML='';
	var card1_XML='';
	var card2_XML=''
	var card3_XML='';
	var card4_XML='';
	var card5_XML='';
	var endXML='';
	var finalXML='';
	var formname='';
	
	// if($("input[name=form_main_account_holder]:checked").val()=='yes') {
	if($("input[name=form_valid_credit_card]:checked").val()=='yes') {
		formname='form1';
	}
	else {
		formname='form2';
	}
	
	// input salutation values
	var salutation;
	if ($("#"+"pre_" + formname + "_salutation").text() == "Mr") {
		salutation = "1";	
	}
	else if ($("#"+"pre_" + formname + "_salutation").text() == "Miss") {
		salutation = "2";	
	} 
	else if ($("#"+"pre_" + formname + "_salutation").text() == "Mrs") {
		salutation = "2";	
	}
	else if ($("#"+"pre_" + formname + "_salutation").text() == "Mdm") {
		salutation = "2";	
	}
	else if ($("#"+"pre_" + formname + "_salutation").text() == "Dr") {
		salutation = "3";	
	}
	
	// input nationality values
	var nationality;
	var nationality_ethnic;
	var nationality_postal;
	if ($("#"+"pre_" + formname + "_nationality").text() == "Singaporean") {
		nationality = "01";	
		nationality_ethnic = "SG";
		nationality_postal = "0";
	}
	else if ($("#"+"pre_" + formname + "_nationality").text() == "Singapore Permanent Resident") {
		nationality = "01";	
		nationality_ethnic = "ZZ";
		nationality_postal = "0";
	}
	else if ($("#"+"pre_" + formname + "_nationality").text() == "Foreigner") {
		nationality = "04";	
		nationality_ethnic = "ZZ";
		//nationality_postal = "1";
		nationality_postal = "0";
	}
	
	// input sup-nationality values
	var sup_nationality;
	if ($("#"+"pre_" + formname + "_sup_nationality").text() == "Singaporean" || $("#"+"pre_" + formname + "_sup_nationality").text() == "Singapore Permanent Resident") {
		sup_nationality = "01";
	}
	else if ($("#"+"pre_" + formname + "_sup_nationality").text() == "Foreigner") {
		sup_nationality = "04";
	}
	
	// input gender values
	var check_gender;
	if ($("#"+"pre_" + formname + "_gender").text() == "Male") {
		check_gender = "1";	
	}
	else if ($("#"+"pre_" + formname + "_gender").text() == "Female") {
		check_gender = "0";	
	}
	
	// input sup_gender values
	var check_sup_gender;
	if ($("#"+"pre_" + formname + "_sup_gender").text() == "Male") {
		check_sup_gender = "1";	
	}
	else if ($("#"+"pre_" + formname + "_sup_gender").text() == "Female") {
		check_sup_gender = "0";	
	}
	
	// input ethnic type values
	var check_ethnic_type;
	if ($("#"+"pre_" + formname + "_ethnic_type").text() == "Chinese") {
		check_ethnic_type = "C" + nationality_ethnic;	
	}
	else if ($("#"+"pre_" + formname + "_ethnic_type").text() == "Malay") {
		check_ethnic_type = "B" + nationality_ethnic;	
	}
	else if ($("#"+"pre_" + formname + "_ethnic_type").text() == "Indian") {
		check_ethnic_type = "I" + nationality_ethnic;	
	}
	else if ($("#"+"pre_" + formname + "_ethnic_type").text() == "Other") {
		check_ethnic_type = "O" + nationality_ethnic;	
	} else {
		check_ethnic_type = "N" + nationality_ethnic;
	}
	
	// input marital status values
	var check_marital_status;
	if ($("#"+"pre_" + formname + "_marital_status").text() == "Married") {
		check_marital_status = "1";	
	}
	else if ($("#"+"pre_" + formname + "_marital_status").text() == "Single") {
		check_marital_status = "2";	
	}
	else if ($("#"+"pre_" + formname + "_marital_status").text() == "Other") {
		check_marital_status = "3";	
	}
	
	// input education status values
	var check_education_status;
	if ($("#"+"pre_" + formname + "_education_status").text() == "Not Applicable") {
		check_education_status = "8";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "Technical Certificate") {
		check_education_status = "7";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "Professional / MBA") {
		check_education_status = "6";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "Degree") {
		check_education_status = "5";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "Diploma") {
		check_education_status = "4";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "GCE A Level") {
		check_education_status = "3";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "GCE O Level") {
		check_education_status = "2";	
	}
	else if ($("#"+"pre_" + formname + "_education_status").text() == "Primary / Secondary") {
		check_education_status = "1";	
	}	
	
	// input residential ownership values
	var check_residential_ownership="0";
	if ($("#"+"pre_" + formname + "_residential_ownership").text() == "Owned (Fully Paid)") {
		check_residential_ownership = "1";	
	}
	else if ($("#"+"pre_" + formname + "_residential_ownership").text() == "Owned (Mortgaged)") {
		check_residential_ownership = "2";	
	}
	else if ($("#"+"pre_" + formname + "_residential_ownership").text() == "Rented") {
		check_residential_ownership = "3";	
	}
	else if ($("#"+"pre_" + formname + "_residential_ownership").text() == "Employer's") {
		check_residential_ownership = "4";	
	}
	else if ($("#"+"pre_" + formname + "_residential_ownership").text() == "Parents'/Relatives'") {
		check_residential_ownership = "5";	
	}	
	
	// input residential ownership values
	var nature_of_employment;
	if ($("#"+"pre_" + formname + "_nature_of_employment").text() == "Salaried") {
		nature_of_employment = "0";	
	}
	else if ($("#"+"pre_" + formname + "_nature_of_employment").text() == "Self Employed") {
		nature_of_employment = "1";	
	}	
	
	// input sup salutation values
	var sup_salutation;
	if ($("#"+"pre_" + formname + "_sup_salutation").text() == "Mr") {
		sup_salutation = "1";	
	}
	else if ($("#"+"pre_" + formname + "_sup_salutation").text() == "Miss") {
		sup_salutation = "2";	
	} 
	else if ($("#"+"pre_" + formname + "_sup_salutation").text() == "Mrs") {
		sup_salutation = "2";	
	}
	else if ($("#"+"pre_" + formname + "_sup_salutation").text() == "Mdm") {
		sup_salutation = "2";	
	}
	else if ($("#"+"pre_" + formname + "_sup_salutation").text() == "Dr") {
		sup_salutation = "3";	
	}
	
	// input mail to be sent to values
	var check_mail_to_be_sent_to="0";
	if ($("#"+"pre_" + formname + "_mail_to_be_sent_to").text() == "Residential Address") {
		check_mail_to_be_sent_to = "1";	
	}
	else if ($("#"+"pre_" + formname + "_mail_to_be_sent_to").text() == "Address of the Employer or Business") {
		check_mail_to_be_sent_to = "2";	
	}
	else if ($("#"+"pre_" + formname + "_mail_to_be_sent_to").text() == "Other") {
		check_mail_to_be_sent_to = "3";
	}
	
	// input has sup card
	var has_sup_card = $("#"+"pre_" + formname + "_sup_has_sup_card").text();
	
	// check for undefined xml data
	var check_date_of_birth = $("#"+formname+"_date_of_birth").val();
	var date_of_birth_stripped;
	
	function strip_slashes_dob() {            
		if (check_date_of_birth != undefined) {
			if (check_date_of_birth.charAt(0) != "0" && check_date_of_birth.charAt(1) == "/") {
				check_date_of_birth = "0" + check_date_of_birth;
			}
			
			if (check_date_of_birth.charAt(3) != "0" && check_date_of_birth.charAt(4) == "/") {
				check_date_of_birth = check_date_of_birth.substr(0,3) + "0" + check_date_of_birth.substr(3,6);
			}
			date_of_birth_stripped = check_date_of_birth.replace(/\//g, "");
		}
	}
	
	strip_slashes_dob();
	
	// date of birth
	var date_of_birth = "00000000";
	if (check_date_of_birth == undefined) {
		date_of_birth = "00000000";
	}
	else {
		date_of_birth = date_of_birth_stripped;
	}
	
	// gender
	if (check_gender == undefined) {
		gender = "0";
	}
	else {
		gender = check_gender;	
	}
	// sup-gender
	if (check_sup_gender == undefined) {
		sup_gender = "";
	}
	else {
		sup_gender = check_sup_gender;	
	}
	
	
	// ethnic type
	var ethnic_type;
	if (check_ethnic_type == undefined) {
		ethnic_type = "";
	}
	else {
		ethnic_type = check_ethnic_type;	
	}
	
	// marital status
	var marital_status="0";
	if (check_marital_status == undefined) {
		marital_status = "1";
	}
	else {
		marital_status = check_marital_status;	
	}
	
	// number of dependents
	var check_number_of_dependents = $("#"+formname+"_number_of_dependents").val();
	var number_of_dependents="00";
	if (check_number_of_dependents == undefined) {
		number_of_dependents = "00";
	}
	else {
		number_of_dependents = check_number_of_dependents;
	}
	
	// education status
	var education_status;
	if (check_education_status == undefined) {
		education_status = "";
	}
	else {
		education_status = check_education_status;	
	}
	
	// employer block number
	var check_employer_block_number = $("#"+formname+"_block_number").val();
	var employer_block_number;
	if (check_employer_block_number == undefined) {
		employer_block_number = "";
	}
	else {
		employer_block_number = check_employer_block_number;
	}
	
	// employer unit number
	var check_employer_unit_number = $("#"+formname+"_unit_number").val();
	var employer_unit_number;
	if (check_employer_unit_number == undefined || check_employer_unit_number == "N.A") {
		employer_unit_number = "-";
	}
	else {
		employer_unit_number = check_employer_unit_number;
	}
	
	// employer street name
	var check_employer_street_name = $("#"+formname+"_street_name").val();
	var employer_street_name;
	if (check_employer_street_name == undefined) {
		employer_street_name = "";
	}
	else {
		employer_street_name = check_employer_street_name;
	}
	
	// employer building name
	var check_employer_building_name = $("#"+formname+"_building_name").val();
	var employer_building_name;
	if (check_employer_building_name == undefined) {
		employer_building_name = "";
	}
	else {
		employer_building_name = check_employer_building_name;
	} 
	
	// block number
	var check_block_number = $("#"+formname+"_block_number").val();
	var block_number;
	if (check_block_number == undefined) {
		block_number = "";
	}
	else {
		block_number = check_block_number;
	}
	
	// street name
	var check_street_name = $("#"+formname+"_street_name").val();
	var street_name;
	if (check_street_name == undefined) {
		street_name = "";
	}
	else {
		street_name = check_street_name;
	}
	
	// postal code
	var check_postal_code = $("#"+formname+"_postal_code").val();
	var postal_code;
	if (check_postal_code == undefined) {
		postal_code = "";
	}
	else {
		postal_code = check_postal_code;
	}
	
	// length of stay at address
	var check_length_of_stay_at_address_years = $("#"+formname+"_length_of_stay_at_address_years").val();
	var length_of_stay_at_address_years="00";
	if (check_length_of_stay_at_address_years == undefined) {
		length_of_stay_at_address_years = "00";
	}
	else {
		length_of_stay_at_address_years = check_length_of_stay_at_address_years;
	}
	
	var check_length_of_stay_at_address_months = $("#"+formname+"_length_of_stay_at_address_months").val();
	var length_of_stay_at_address_months="0";
	if (check_length_of_stay_at_address_months == undefined) {
		length_of_stay_at_address_months = "0";
	}
	else {
		length_of_stay_at_address_months = check_length_of_stay_at_address_months;
	}
	
	// residential ownership
	var residential_ownership;
	if (check_residential_ownership == undefined) {
		residential_ownership = "";
	}
	else {
		residential_ownership = check_residential_ownership;	
	}
	
	// mail to be sent to
	var mail_to_be_sent_to;
	if (check_mail_to_be_sent_to == undefined) {
		mail_to_be_sent_to = "";
	}
	else {
		mail_to_be_sent_to = check_mail_to_be_sent_to;	
	}
	
	// residential address
	var check_residential = $("#"+formname+"_residential").val()
	var residential;
	if (check_residential == undefined || check_residential == "") {
		residential = "0";
	}
	else {
		residential = check_residential;
	}
	
	// office address
	var check_office = $("#"+formname+"_office").val()
	var office;
	if (check_office == undefined) {
		office = "";
	}
	else {
		office = check_office;
	}
	
	// sup date of birth
	/** 
	
	var check_sup_date_of_birth = $("#"+formname+"_sup_date_of_birth").val();
	var sup_date_of_birth_stripped;
	
	function strip_slashes_sup_dob() {            
		check_sup_date_of_birth = check_sup_date_of_birth.replace("/", "");
		if(check_sup_date_of_birth.indexOf("/") != -1) {
			strip_slashes_sup_dob();
			sup_date_of_birth_stripped = check_sup_date_of_birth;
		}
	}
	
	strip_slashes_sup_dob();
	
	**/
	
	// loan amount
	var check_loan_amount_required = $("#"+formname+"_loan_amount_required").val();
	var loan_amount_required;
	if (check_loan_amount_required == undefined) {
		loan_amount_required = "";
	}
	else {
		loan_amount_required = check_loan_amount_required;
	}
	
	var emp_unit_no = $("#"+formname+"_employer_unit_number").val();
	var emp_unit_no_val;
	if (emp_unit_no == undefined || emp_unit_no == "N.A") {
		emp_unit_no_val = "-";
	} else {
		emp_unit_no_val = emp_unit_no;
	}
	
	//
	var country_selected_home = $("#country_code_home").val();
	var zip_code_home;
	var address3_code_home;
	var homeadd;
	var homeadd_a;
	var homeadd1;
	var homeadd2;
	
	if (country_selected_home == "SG") {
		homeadd = employer_block_number;
		homeadd_a = employer_street_name;
		homeadd1 = employer_building_name;
		homeadd2 = employer_unit_number;
		
		zip_code_home = "0" + postal_code;
		address3_code_home = "SINGAPORE";
	} else {
		homeadd = employer_block_number;
		homeadd_a = (employer_unit_number == "-") ? "" : employer_unit_number;
		homeadd1 = employer_building_name;
		homeadd2 = employer_street_name;
		
		zip_code_home = "1" + country_selected_home;
		address3_code_home = $("#country_code_home :selected").text() + " " + postal_code;
	}
	
	
	var country_selected_emp = $("#country_code_emp").val();
	var zip_code_emp;
	var address3_code_emp;
	var em_add;
	var em_add_a;
	var em_add1;
	var em_add2;	
	
	if (country_selected_emp == "SG") {
		em_add = $("#"+formname+"_employer_block_number").val();
		em_add_a = $("#"+formname+"_employer_street_name").val();
		em_add1 = $("#"+formname+"_employer_building_name").val();
		em_add2 = emp_unit_no_val;
	
		zip_code_emp = "0" + $("#"+formname+"_employer_postal_code").val();
		address3_code_emp = "SINGAPORE";
	} else {
		em_add = $("#"+formname+"_employer_block_number").val();
		em_add_a = (emp_unit_no_val == "-") ? "" : emp_unit_no_val;
		em_add1 = $("#"+formname+"_employer_building_name").val();
		em_add2 = $("#"+formname+"_employer_street_name").val();
		
		zip_code_emp = "1" + country_selected_emp;
		address3_code_emp = $("#country_code_emp :selected").text() + " " + $("#"+formname+"_employer_postal_code").val();
	}	
	
	// prepare full name
	var clientFullName = "";
	/* disable this since we have removed the middle name
	if( $('#form2_middle_name').val() == "" ) {
		clientFullName = $('#form2_first_name').val().toUpperCase()+" "+$('#form2_name').val().toUpperCase();
	} else {
		clientFullName = $('#form2_first_name').val().toUpperCase()+" "+$('#form2_middle_name').val().toUpperCase()+" "+$('#form2_name').val().toUpperCase();
	}
	*/
	clientFullName = $('#form2_first_name').val().toUpperCase()+" "+$('#form2_name').val().toUpperCase();

	// xml header
	startXML=startXML+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	startXML=startXML+"<eform FID=\""+$('#formId').val()+"\">\n";
	startXML=startXML+"\t<model>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"savemodel\">\n";
	startXML=startXML+"\t\t\t<sigfields>\n";
	startXML=startXML+"\t\t\t\t<sigchar>\n";
	// trim space from full name
	var form2_name = $.trim( $("#form2_name").val() );
	form2_name = form2_name.replace(/\s+/g,' ');
	//
	startXML=startXML+"\t\t\t\t\t<sigchar1>"+clientFullName+"</sigchar1>\n";
	if($("input[name="+formname+"_nationality]:checked").val()!='Foreigner') {
		startXML=startXML+"\t\t\t\t\t<sigchar2>"+$("#"+formname+"_nric_number").val().toUpperCase()+"</sigchar2>\n";
	}
	else {
		startXML=startXML+"\t\t\t\t\t<sigchar2>"+$("#"+formname+"_passport_number").val().toUpperCase()+"</sigchar2>\n";
	}
	startXML=startXML+"\t\t\t\t</sigchar>\n";
	startXML=startXML+"\t\t\t\t<signum/>\n";
	startXML=startXML+"\t\t\t\t<sigdate/>\n";
	startXML=startXML+"\t\t\t</sigfields>\n";
	startXML=startXML+"\t\t</instance>\n";
	// KORN
	startXML=startXML+"\t\t<instance id=\"outputmodel\">\n";

	commonXML=commonXML+"\t\t\t<per-title><![CDATA["+salutation.toUpperCase()+"]]></per-title>\n";
	commonXML=commonXML+"\t\t\t<per-fullName><![CDATA["+clientFullName+"]]></per-fullName>\n";
	var form2_name_on_card = $.trim( $("#"+formname+"_name_on_card").val() );
	form2_name_on_card = form2_name_on_card.replace(/\s+/g,' ');
	commonXML=commonXML+"\t\t\t<per-embName><![CDATA["+form2_name_on_card.toUpperCase()+"]]></per-embName>\n";
	commonXML=commonXML+"\t\t\t<per-identityType><![CDATA["+nationality.toUpperCase()+"]]></per-identityType>\n";
	
	var identityNumber = "";
	if($("input[name="+formname+"_nationality]:checked").val()!='Foreigner') {
		identityNumber = $("#"+formname+"_nric_number").val().toUpperCase();
		commonXML=commonXML+"\t\t\t<per-identityNumber><![CDATA["+$("#"+formname+"_nric_number").val().toUpperCase()+"]]></per-identityNumber>\n";
	}
	else {
		identityNumber = $("#"+formname+"_passport_number").val().toUpperCase();
		commonXML=commonXML+"\t\t\t<per-identityNumber><![CDATA["+$("#"+formname+"_passport_number").val().toUpperCase()+"]]></per-identityNumber>\n";
	}
	
	commonXML=commonXML+"\t\t\t<per-dateOfBirth><![CDATA["+date_of_birth.toUpperCase()+"]]></per-dateOfBirth>\n";
	commonXML=commonXML+"\t\t\t<per-sex><![CDATA["+gender.toUpperCase()+"]]></per-sex>\n";
	commonXML=commonXML+"\t\t\t<per-ethnicGroup>"+ethnic_type.toUpperCase()+"</per-ethnicGroup>\n";
	commonXML=commonXML+"\t\t\t<per-maritalSt><![CDATA["+marital_status.toUpperCase()+"]]></per-maritalSt>\n";
	commonXML=commonXML+"\t\t\t<per-noDep>0</per-noDep>\n";
	commonXML=commonXML+"\t\t\t<per-education><![CDATA["+education_status.toUpperCase()+"]]></per-education>\n";
	commonXML=commonXML+"\t\t\t<per-mobph>0</per-mobph>\n";
	
	
	commonXML=commonXML+"\t\t\t<res-homeAddrs><![CDATA["+homeadd.toUpperCase()+" "+homeadd_a.toUpperCase()+"]]></res-homeAddrs>\n";
	commonXML=commonXML+"\t\t\t<res-homeAddrs1><![CDATA["+homeadd1.toUpperCase()+"]]></res-homeAddrs1>\n";
	commonXML=commonXML+"\t\t\t<res-homeAddrs2><![CDATA["+homeadd2.toUpperCase()+"]]></res-homeAddrs2>\n";
	commonXML=commonXML+"\t\t\t<res-homeAddrs3><![CDATA["+address3_code_home.toUpperCase()+"]]></res-homeAddrs3>\n";
	
	commonXML=commonXML+"\t\t\t<res-zipcode><![CDATA["+zip_code_home.toUpperCase()+"]]></res-zipcode>\n";
	commonXML=commonXML+"\t\t\t<res-timeaddreYrs><![CDATA["+length_of_stay_at_address_years.toUpperCase()+"]]></res-timeaddreYrs>\n";
	commonXML=commonXML+"\t\t\t<res-timeaddreMons>1</res-timeaddreMons>\n";
	commonXML=commonXML+"\t\t\t<res-accom><![CDATA["+residential_ownership.toUpperCase()+"]]></res-accom>\n";
	
	commonXML=commonXML+"\t\t\t<emp-selfEmp><![CDATA["+nature_of_employment.toUpperCase()+"]]></emp-selfEmp>\n";
	if($("input[name="+formname+"_nature_of_employment]:checked").val()=='Self Employed') {
		commonXML=commonXML+"\t\t\t<emp-company><![CDATA["+$("#"+formname+"_name_of_business").val().toUpperCase()+"]]></emp-company>\n";
	}
	else {
		commonXML=commonXML+"\t\t\t<emp-company><![CDATA["+$("#"+formname+"_name_of_employer").val().toUpperCase()+"]]></emp-company>\n";
	}
	
	commonXML=commonXML+"\t\t\t<emp-position><![CDATA["+$("#"+formname+"_job_title").val()+"]]></emp-position>\n";
	//commonXML=commonXML+"\t\t\t<emp-position>30</emp-position>\n";
	commonXML=commonXML+"\t\t\t<emp-serviceYears><![CDATA["+$("#"+formname+"_years_in_service").val().toUpperCase()+"]]></emp-serviceYears>\n";
	commonXML=commonXML+"\t\t\t<emp-serviceMonths>1</emp-serviceMonths>\n";
	// replace with user enter value
	/*
	if($("input[name="+formname+"_nationality]:checked").val()!='Foreigner') {
		commonXML=commonXML+"\t\t\t<emp-incomeAnnual>30000</emp-incomeAnnual>\n"; 
	}
	else {
		commonXML=commonXML+"\t\t\t<emp-incomeAnnual>60000</emp-incomeAnnual>\n"; 
	}*/
	commonXML=commonXML+"\t\t\t<emp-incomeAnnual>"+$("#form2_loan_my_income").val().toUpperCase()+"</emp-incomeAnnual>\n";

	commonXML=commonXML+"\t\t\t<emp-officeAddress><![CDATA["+em_add.toUpperCase()+" "+em_add_a.toUpperCase()+"]]></emp-officeAddress>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress1><![CDATA["+em_add1.toUpperCase()+"]]></emp-officeAddress1>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress2><![CDATA["+em_add2.toUpperCase()+"]]></emp-officeAddress2>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress3><![CDATA["+address3_code_emp.toUpperCase()+"]]></emp-officeAddress3>\n";
	commonXML=commonXML+"\t\t\t<emp-officeZipCode><![CDATA["+zip_code_emp.toUpperCase()+"]]></emp-officeZipCode>\n";

	/* disable remove office address from form
	commonXML=commonXML+"\t\t\t<emp-officeAddress><![CDATA[]]></emp-officeAddress>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress1><![CDATA[]]></emp-officeAddress1>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress2><![CDATA[#]]></emp-officeAddress2>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress3><![CDATA[SINGAPORE]]></emp-officeAddress3>\n";
	commonXML=commonXML+"\t\t\t<emp-officeZipCode><![CDATA[00000]]></emp-officeZipCode>\n";
	*/

	if( $('#form2_mail_to_be_sent_to').is(':checked') ) {
		commonXML=commonXML+"\t\t\t<con-billAddress><![CDATA[2]]></con-billAddress>\n";
	} else {
		commonXML=commonXML+"\t\t\t<con-billAddress><![CDATA[1]]></con-billAddress>\n";
	}
	
	if(mail_to_be_sent_to==3)
	{
	commonXML=commonXML+"\t\t\t<con-address><![CDATA["+$("#"+formname+"_contact_block_number").val().toUpperCase() + " " +$("#"+formname+"_contact_unit_number").val().toUpperCase()+"]]></con-address>\n";
	commonXML=commonXML+"\t\t\t<con-address1><![CDATA["+$("#"+formname+"_contact_street_name").val().toUpperCase()+"]]></con-address1>\n";
	commonXML=commonXML+"\t\t\t<con-address2><![CDATA["+$("#"+formname+"_contact_building_name").val().toUpperCase()+"]]></con-address2>\n";
	commonXML=commonXML+"\t\t\t<con-address3><![CDATA["+ "SINGAPORE" +"]]></con-address3>\n";
	commonXML=commonXML+"\t\t\t<con-zipcode><![CDATA["+$("#"+formname+"_contact_postal_code").val().toUpperCase()+"]]></con-zipcode>\n";
	}
	commonXML=commonXML+"\t\t\t<con-homePhone><![CDATA["+residential.toUpperCase()+"]]></con-homePhone>\n";
	commonXML=commonXML+"\t\t\t<con-officePhone><![CDATA["+office.toUpperCase()+"]]></con-officePhone>\n";
	commonXML=commonXML+"\t\t\t<con-mobilePhone><![CDATA["+$("#"+formname+"_mobile").val().toUpperCase()+"]]></con-mobilePhone>\n";
	commonXML=commonXML+"\t\t\t<con-email><![CDATA["+$("#"+formname+"_email_address").val().toUpperCase()+"]]></con-email>\n";
	
	
	if($("#"+formname+"_relationship_to_applicant").val() == undefined){
		commonXML=commonXML+"\t\t\t<con-refRel></con-refRel>\n";
	}
	else{
		commonXML=commonXML+"\t\t\t<con-refRel><![CDATA["+$("#"+formname+"_relationship_to_applicant").val().toUpperCase()+"]]></con-refRel>\n";
	}
	
	
	if(has_sup_card=="1"){
		commonXML=commonXML+"\t\t\t<sup-title><![CDATA["+sup_salutation.toUpperCase()+"]]></sup-title>\n";
		commonXML=commonXML+"\t\t\t<sup-fullName><![CDATA["+$("#form2_sup_first_name").val().toUpperCase()+" "+$("#form2_sup_middle_name").val().toUpperCase()+" "+$("#form2_sup_name").val().toUpperCase()+"]]></sup-fullName>\n";
		commonXML=commonXML+"\t\t\t<sup-embName><![CDATA["+$("#"+formname+"_sup_name_on_card").val().toUpperCase()+"]]></sup-embName>\n";
		commonXML=commonXML+"\t\t\t<sup-identityType><![CDATA[01]]></sup-identityType>\n";
		commonXML=commonXML+"\t\t\t<sup-identityNumber><![CDATA["+$("#form2_sup_passport_number").val().toUpperCase()+"]]></sup-identityNumber>\n";
		commonXML=commonXML+"\t\t\t<sup-dateOfBirth><![CDATA["+sup_date_of_birth_stripped.toUpperCase()+"]]></sup-dateOfBirth>\n";
		commonXML=commonXML+"\t\t\t<sup-sex><![CDATA["+sup_gender.toUpperCase()+"]]></sup-sex>\n";
		commonXML=commonXML+"\t\t\t<sup-relationship><![CDATA["+$("#"+formname+"_sup_relationship_to_applicant").val().toUpperCase()+"]]></sup-relationship>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd><![CDATA["+$("#form2_sup_address").val().substr(0,30).toUpperCase()+"]]></sup-homeAdd>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd1><![CDATA["+$("#form2_sup_address").val().substr(30,30).toUpperCase()+"]]></sup-homeAdd1>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd2><![CDATA["+$("#form2_sup_address").val().substr(60,30).toUpperCase()+"]]></sup-homeAdd2>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd3><![CDATA["+$("#form2_sup_address").val().substr(90,30).toUpperCase()+"]]></sup-homeAdd3>\n";
		commonXML=commonXML+"\t\t\t<sup-ZipCode><![CDATA[]]></sup-ZipCode>\n";
		commonXML=commonXML+"\t\t\t<sup-hasSupCard><![CDATA[1]]></sup-hasSupCard>\n";
		//commonXML=commonXML+"\t\t\t<sup-mobile></sup-mobile>\n";
	}
	else{
		commonXML=commonXML+"\t\t\t<sup-title>1</sup-title>\n";
		commonXML=commonXML+"\t\t\t<sup-fullName></sup-fullName>\n";
		commonXML=commonXML+"\t\t\t<sup-embName></sup-embName>\n";
		commonXML=commonXML+"\t\t\t<sup-identityType></sup-identityType>\n";
		commonXML=commonXML+"\t\t\t<sup-identityNumber></sup-identityNumber>\n";
		commonXML=commonXML+"\t\t\t<sup-dateOfBirth>00000000</sup-dateOfBirth>\n";
		commonXML=commonXML+"\t\t\t<sup-sex>1</sup-sex>\n";
		commonXML=commonXML+"\t\t\t<sup-relationship></sup-relationship>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd></sup-homeAdd>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd1></sup-homeAdd1>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd2></sup-homeAdd2>\n";
		commonXML=commonXML+"\t\t\t<sup-homeAdd3></sup-homeAdd3>\n";
		commonXML=commonXML+"\t\t\t<sup-ZipCode></sup-ZipCode>\n";
		commonXML=commonXML+"\t\t\t<sup-hasSupCard></sup-hasSupCard>\n";
		//commonXML=commonXML+"\t\t\t<sup-mobile></sup-mobile>\n";
	}

	commonXML=commonXML+"\t\t\t<agencyNo><![CDATA["+loan_amount_required.toUpperCase()+"]]></agencyNo>\n";
	
	var hiddenXML = '';
	hiddenXML=hiddenXML+"\t\t\t<acqCode>SP</acqCode>\n";

	// cash300 promo
	// add dynamic sub-channel code
	subChanCode = jQuery.query.get("subChanCode")+'';
	var cash300Found = $("#form2_promotionCode").val().match(/cash300/gi);
	if( cash300Found ) {
		hiddenXML=hiddenXML+"\t\t\t<subChanCode>IB14</subChanCode>\n";
	} else {
		if( subChanCode != "" && subChanCode != "true" && subChanCode != "undefined" ) {
			subChanCode = subChanCode.substr(0, 4);
			hiddenXML=hiddenXML+"\t\t\t<subChanCode>"+subChanCode+"</subChanCode>\n";
		} else {
			hiddenXML=hiddenXML+"\t\t\t<subChanCode>IB26</subChanCode>\n";
		}
	}
	
	hiddenXML=hiddenXML+"\t\t\t<sourcingId>1889559</sourcingId>\n";
	
	//hiddenXML=hiddenXML+"\t\t\t<staffId><![CDATA["+$("#cpfLinkClicked").val()+"]]></staffId>\n";
	// original empty staffId element
	var staffId = jQuery.query.get("dsaStaffId")+"";
	if( get80id ) {
		hiddenXML=hiddenXML+"\t\t\t<staffId>"+get80id+"</staffId>\n";
	} else {
		if( staffId != "" && staffId.length > 7 ) {
			staffId.substr(0, 7);
		}
		hiddenXML=hiddenXML+"\t\t\t<staffId>"+staffId+"</staffId>\n";
	}
	
	// upload docs
	hiddenXML=hiddenXML+"\t\t\t<attchments>\n";
	var uploadfile0refid = $('#uploadfile0refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile0refid )+"'>"+uploadfile0refid+"</attachment>\n";
	var uploadfile1refid = $('#uploadfile1refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile1refid )+"'>"+uploadfile1refid+"</attachment>\n";
	var uploadfile2refid = $('#uploadfile2refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile2refid )+"'>"+uploadfile2refid+"</attachment>\n";
	var uploadfile3refid = $('#uploadfile3refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile3refid )+"'>"+uploadfile3refid+"</attachment>\n";
	var uploadfile4refid = $('#uploadfile4refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile4refid )+"'>"+uploadfile4refid+"</attachment>\n";
	var uploadfile5refid = $('#uploadfile5refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile5refid )+"'>"+uploadfile5refid+"</attachment>\n";
	var uploadfile6refid = $('#uploadfile6refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile6refid )+"'>"+uploadfile6refid+"</attachment>\n";
	hiddenXML=hiddenXML+"\t\t\t</attchments>\n";
	
	// KORN - add back missing fields
	var addXML = '';
	addXML=addXML+"\t\t\t<per-previousPassportNumber></per-previousPassportNumber>\n";
	if($("input[name="+formname+"_nationality]:checked").val()=='Foreigner') {
		addXML=addXML+"\t\t\t<res-overseaAddress><![CDATA["+$("#"+formname+"_overseas_address").val().toUpperCase()+"]]></res-overseaAddress>\n";
		addXML=addXML+"\t\t\t<res-overseaContactNumber><![CDATA[";
		addXML=addXML+$("#"+formname+"_overseas_contact_country_code").val().toUpperCase()+"-";
		addXML=addXML+$("#"+formname+"_overseas_contact_area_code").val().toUpperCase()+"-";
		addXML=addXML+$("#"+formname+"_overseas_contact_tel_no").val().toUpperCase()+"]]></res-overseaContactNumber>\n";
	} else {
		addXML=addXML+"\t\t\t<res-overseaAddress></res-overseaAddress>\n";
		addXML=addXML+"\t\t\t<res-overseaContactNumber></res-overseaContactNumber>\n";
	}
	addXML=addXML+"\t\t\t<emp-occupation><![CDATA["+$("#"+formname+"_occupation").val().toUpperCase()+"]]></emp-occupation>\n";
	addXML=addXML+"\t\t\t<con-refName><![CDATA["+$("#"+formname+"_name_of_relative_not_living_with_you").val().toUpperCase()+"]]></con-refName>\n";
	addXML=addXML+"\t\t\t<con-refContactNumber><![CDATA["+$("#"+formname+"_contact_person_contact_number").val().toUpperCase()+"]]></con-refContactNumber>\n";
	addXML=addXML+"\t\t\t<loan-amountRequired><![CDATA["+$("#"+formname+"_loan_amount_required").val().toUpperCase()+"]]></loan-amountRequired>\n";
	addXML=addXML+"\t\t\t<loan-tenure><![CDATA["+$("#"+formname+"_loan_tenure").val().toUpperCase()+"]]></loan-tenure>\n";
	//if( $('#form2_deposit_bank_acc_type').val() == 'scb_account' ) {
	if( $("input[name=form2_deposit_bank_acc_type]:checked").val() == 'scb_account' ) {
		addXML=addXML+"\t\t\t<loan-depositBankAcc><![CDATA["+$("#"+formname+"_cheque_acc_no").val().toUpperCase()+"]]></loan-depositBankAcc>\n";
		//addXML=addXML+"\t\t\t<loan-chequeAccNo></loan-chequeAccNo>\n";
		addXML=addXML+"\t\t\t<loan-issuingBank>7144</loan-issuingBank>\n";
		addXML=addXML+"\t\t\t<loan-issuingBankBranchCode>000</loan-issuingBankBranchCode>\n";
		addXML=addXML+"\t\t\t<loan-accHolderName></loan-accHolderName>\n";
		addXML=addXML+"\t\t\t<loan-accHolderNricPassport></loan-accHolderNricPassport>\n";
	} else {
		addXML=addXML+"\t\t\t<loan-depositBankAcc><![CDATA["+$("#"+formname+"_other_bank_acc_no").val().toUpperCase()+"]]></loan-depositBankAcc>\n";
		//addXML=addXML+"\t\t\t<loan-chequeAccNo></loan-chequeAccNo>\n";
		addXML=addXML+"\t\t\t<loan-issuingBank><![CDATA["+$("#"+formname+"_issuing_bank").val().toUpperCase()+"]]></loan-issuingBank>\n";
		addXML=addXML+"\t\t\t<loan-issuingBankBranchCode><![CDATA["+$("#"+formname+"_issuing_branch").val().toUpperCase()+"]]></loan-issuingBankBranchCode>\n";
		addXML=addXML+"\t\t\t<loan-accHolderName><![CDATA["+$("#"+formname+"_acc_holder_name").val().toUpperCase()+"]]></loan-accHolderName>\n";
		addXML=addXML+"\t\t\t<loan-accHolderNricPassport></loan-accHolderNricPassport>\n";
	}

    addXML=addXML+"\t\t\t<staffContactNo></staffContactNo>\n";
	addXML=addXML+"\t\t\t<referralId>1889559</referralId>\n";
	addXML=addXML+"\t\t\t<closingId>1889559</closingId>\n";
	addXML=addXML+"\t\t\t<prodType2>06001</prodType2>\n";
	addXML=addXML+"\t\t\t<prodType3></prodType3>\n";
	addXML=addXML+"\t\t\t<prodType4></prodType4>\n";
	addXML=addXML+"\t\t\t<prodType5></prodType5>\n";
	
	addXML=addXML+"\t\t\t<clubType1>99F</clubType1>\n";
	//if( $('#form2_pp_insurance_yes').is(':checked') ) {
	//	addXML=addXML+"\t\t\t<clubType1>INS</clubType1>\n";
	//} else {
	//	addXML=addXML+"\t\t\t<clubType1>ADM</clubType1>\n";
	//}
	
	addXML=addXML+"\t\t\t<clubType2></clubType2>\n";
	addXML=addXML+"\t\t\t<clubType3></clubType3>\n";
	addXML=addXML+"\t\t\t<clubType4></clubType4>\n";
	addXML=addXML+"\t\t\t<clubType5></clubType5>\n";
	addXML=addXML+"\t\t\t<clubType6></clubType6>\n";
	addXML=addXML+"\t\t\t<clubType7></clubType7>\n";
	addXML=addXML+"\t\t\t<clubType8></clubType8>\n";
	addXML=addXML+"\t\t\t<clubType9></clubType9>\n";
	addXML=addXML+"\t\t\t<clubType10></clubType10>\n";
	addXML=addXML+"\t\t\t<clubType11></clubType11>\n";
	addXML=addXML+"\t\t\t<clubType12></clubType12>\n";
	addXML=addXML+"\t\t\t<clubType13></clubType13>\n";
	addXML=addXML+"\t\t\t<clubType14></clubType14>\n";
	addXML=addXML+"\t\t\t<clubType15></clubType15>\n";
	addXML=addXML+"\t\t\t<clubType16></clubType16>\n";
	addXML=addXML+"\t\t\t<inscode></inscode>\n";
	
	
	if( $('#form2_loan_is_customer').is(':checked') ) {
		addXML=addXML+"\t\t\t<existingCust>Y</existingCust>\n";
	} else {
		addXML=addXML+"\t\t\t<existingCust>N</existingCust>\n";
	}
	addXML=addXML+"\t\t\t<res-typeOfResidence><![CDATA["+$("#form2_type_of_residence").val().toUpperCase()+"]]></res-typeOfResidence>\n";

	// Filenet implementation
	addXML=addXML+"\t\t\t<filenetProduct>Credit Card</filenetProduct>\n";
	addXML=addXML+"\t\t\t<filenetSubProduct>STP CashOne</filenetSubProduct>\n";		
	addXML=addXML+"\t\t\t<filenetCity>SG</filenetCity>\n";
	addXML=addXML+"\t\t\t<filenetCountry>SG</filenetCountry>\n";
	addXML=addXML+"\t\t\t<form2_name><![CDATA["+clientFullName+"]]></form2_name>\n";
	addXML=addXML+"\t\t\t<filenetIdNumber><![CDATA["+identityNumber+"]]></filenetIdNumber>\n";
	
	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";
	
	// diff product code by amount
	if(  $('#form2_loan_my_income').val()*1 > 30000 ) {
		card2_XML=startXML+"\t\t\t<prodType>28301</prodType>\n"+commonXML+"\t\t\t<promoCode>9203</promoCode>\n"+hiddenXML+addXML+endXML;
	} else {
		card2_XML=startXML+"\t\t\t<prodType>28401</prodType>\n"+commonXML+"\t\t\t<promoCode>9203</promoCode>\n"+hiddenXML+addXML+endXML;
	}
	finalXML=finalXML+card2_XML;
	
	return finalXML;
}



/************************** existing credit card customer ***************************/

// display all tab content
/*function form_existing_customer_credit_cards_1_display_all() {
	$("#form_existing_customer_credit_cards_1 h4.toggle").each(function (i) {
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_existing_customer_credit_cards_2_display_all() {
	$("#form_existing_customer_credit_cards_2 h4.toggle").each(function (i) {
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}

function form_existing_customer_credit_cards_3_display_all() {
	$("#form_existing_customer_credit_cards_3 h4.toggle").each(function (i) {
		if (this.className == "toggle") {
			$(this).click();
		}
	});
}*/



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
	
	// prepare loan amount dialog
	$("#dialog-upsell").dialog({
        bgiframe: true,
        width: 710,
        height: 280,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Your maximum loan offer",
        closeOnEscape: false,
        open: function(event, ui) { $(".ui-icon-closethick, .ui-dialog-titlebar-close").hide(); }
	});
	$('#go_with_but').click(function() {
		$('#dialog-upsell').dialog('close');
		$('#form2_loan_amount_required_row').hide();
		$('#form2_loan_amount_required').blur();
		$('#form2_loan_tenure').focus();
	});
	$('#go_without_but').click(function() {
		$('#dialog-upsell').dialog('close');
		cal4xincome();
		$('#form2_loan_amount_required_row').show();
		$('#form2_loan_amount_required').focus();
	});

	// prepare dialog box
	var confirmDialogMsg = "<span style='padding: 0px;'>For existing personal credit or personal loan customer, the processing time ranges from 6 to 7 business days. Do you wish to continue with the application?</span>";
	
	$("#dialog-confirm").dialog({
        bgiframe: true,
        width: 300,
        height: 200,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "Require your confirmation",
		buttons: {
    		No: function() {
				$(this).dialog('close');
			},
			'Yes': function() {
				$(this).dialog('close');
				$("#form_new_customer_credit_cards_0 .next").click();
				//$("#new_credit_card .tabs li").removeClass("selected");
				$("#new_credit_card .bc1").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_0").addClass("step_1");
				$("#coda-slider-2 .panel01").addClass("selected-panel");
				$("#coda-slider-2 .panel00").removeClass("selected-panel");
				$(".form2_header_loan").hide();
				$(".form2_header_personal").show();
				$(".form2_header_employment").hide();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();

			}
		}
	});
	
	var confirmcash300Msg = "";
	confirmcash300Msg += '<div class="confirmmsg">';
	confirmcash300Msg += '<ol id="confirmoutter">';
	confirmcash300Msg += '<li>Subject to the approval of CashOne application. Our Customer Terms, Personal Loan/Personal Line of Credit/Overdraft Terms and CashOne Product Terms apply. Offer is limited to one gift per customer and is valid for CashOne approved before 30 June 2011 or while stocks last (whichever is earlier). CashOne account must be in good standing to qualify. We reserve the right to determine the eligibility of any customers to receive the gifts. A redemption letter will be sent to eligible applicants 50 working days after the date of approval. The gift is not exchangeable for cash or any other items. We are not responsible for the quality or the performance, loss, damage or harm suffered in connection with the use of the gift. Any disputes are to be resolved directly with the vendor. We reserve the right to vary the terms of the promotion, or substitute any gift with another gift without prior notice. Our decision is final.</li>';
	confirmcash300Msg += '<li>The following free gift is strictly for new CashOne account holders who meet the following conditions:</li>';
	confirmcash300Msg += '<li style="list-style-type: none;">';
	confirmcash300Msg += '<ol id="confirminner">';
	confirmcash300Msg += '<li>Sony 40” LCD TV Model KDL40BX420 for approved CashOne loan amount of $30,000 and above, with loan tenor of 36, 48 or 60 months (collectively “Tenors”). Delivery, installation and other charges are not included.</li>';
	confirmcash300Msg += '<li>Sony 3D Blu-ray Disc™ Home Theatre System Model BDVE380 for approved CashOne loan amount of $15,000 to $29,999, with the Tenors. Delivery, installation and other charges are not included.</li>';
	confirmcash300Msg += '<li>Sony Radio Dock Model ICFC05IP for approved CashOne loan amount of $5,000 to $14,999, with the Tenors.</li>';
	confirmcash300Msg += '<li>$20 Isetan voucher for approved CashOne loan amount of $4,999 and below, with the Tenors.</li>';
	confirmcash300Msg += '</ol>';
	confirmcash300Msg += '</li>';
	confirmcash300Msg += '</ol>';
	confirmcash300Msg += '<p></p>';
	confirmcash300Msg += '</div>';
	
	$("#dialog-confirm-cash300").dialog({
        bgiframe: true,
        width: 820,
        height: 550,
        modal: true,
        autoOpen: false,
        draggable: false,
        resizable: false,
        title: "CASH300 Programme Terms and Conditions",
		buttons: {
    		'I Do Not Agree': function() {
				$(this).dialog('close');
			},
			'I Agree': function() {
				$(this).dialog('close');
				$("#form_new_customer_credit_cards_1 .next").click();
				//$("#new_credit_card .tabs li").removeClass("selected");
				$("#new_credit_card .bc2").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_2");
				$("#coda-slider-2 .panel02").addClass("selected-panel");
				$("#coda-slider-2 .panel01").removeClass("selected-panel");
				$(".form2_header_loan").hide();
				$(".form2_header_personal").hide();
				$(".form2_header_employment").show();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
				resizeSlider();
			}
		}
	});
	
	// get80 start
	get80id = jQuery.query.get("ID");
	//get80id = get80id+"";
	//console.log('What is get80: '+get80id);
	if( get80id ) {
		if( get80id == "mon300100" || get80id == "mon120600" || get80id == "mon12090" || get80id == "mon46860" || get80id == "mon300250" || get80id == "admaxboost" || get80id == "xinmsn" || get80id == "yahoo" || get80id == "Facebook" ) {
			//$('#form2_promotionCode').val('cash300').attr('readonly','readonly');
		}

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
	//display_landing_page();

	// show note page directly and hidden the card image 
	display_notes_page();
	$(".manhattan_platinum_card").hide();
	$(".manhattan_platinum_card_text").hide();
	$("#landing_page").hide();
	
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
	
	$.validator.addMethod("isDBSAcc", function(value, element) {
		var result = false;
		if( value.length == 10 ) {
			result = true;
		}
		return result;
	}, "Please enter your full 10 digits DBS account no. If your account no. is only 9 digits, please choose POSBank as your issuing bank.");
	
	$.validator.addMethod("isPOSAcc", function(value, element) {
		var result = false;
		if( value.length == 9 ) {
			result = true;
		}
		return result;
	}, "Please enter your full 9 digits a/c no. If your account no. is 10 digits, please choose DBS Bank as your issuing bank.");
	
	$.validator.addMethod("isUOBAcc", function(value, element) {
		var result = false;
		if( value.length == 10 ) {
			result = true;
		}
		return result;
	}, "Please enter your full 10 digits UOB account number.");
	
	$.validator.addMethod("isOCBCAcc", function(value, element) {
		var result = false;
		if( value.length > 6 && value.length < 10 ) {
			result = true;
		}
		return result;
	}, "Please drop the first 3 digits and enter only the next 7 or 9 digits of your OCBC a/c no. E.g. 563 088 888 888, enter only 088 888 888 as bank a/c no.");
	
	$.validator.addMethod("isHSBCAcc", function(value, element) {
		var result = false;
		if( value.length == 9 ) {
			result = true;
		}
		return result;
	}, "Please drop the first 3 digits and enter the next 9 digits of the account no. E.g. 151 088 888 888, enter only 088 888 888 as bank a/c no.");
	
	$.validator.addMethod("isUCOAcc", function(value, element) {
		var result = false;
		if( value.length > 2 ) {
			result = true;
		}
		return result;
	}, "Please drop the first 2 digits of your a/c no. and enter the rest of your a/c no.");
	
	// initialize datepicker
	$(".date_picker").datepick({minDate: -maxAge+"y", maxDate: -minAge +"y", yearRange: minYear+":"+maxYear, showOn: "button", 
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
	
	$.validator.addMethod("nameOnCard", function(value, element) {
		var result = this.optional(element) || /^[a-zA-Z0-9 ]+$/.test(value);
		return result;
	}, "Please enter only letters, numbers, and spaces.");
	
	$.validator.addMethod("accEqualTo", function(value, element, param) {
	var result = this.optional(element) || value == $(param).val();
		return result;
	}, "Please re enter exactly the same account number.");

	/*var max_loan_amount_value;
	$.validator.addMethod("maxloanamount", function(value, element) {
		console.log(value);
		console.log(max_loan_amount_value);
		console.log(element.name);
		var validator = this;
		if ( parseInt(value) > max_loan_amount_value) {
            var errors = {};
            errors[element.name] = "Please enter loan request amount less than ";
            console.log(errors);
            validator.showErrors(errors);
            return false;
		} else {
			return true;
		}

	}, '');*/

	var max_loan_amount_value;
	$.validator.addMethod("maxloanamount", function(value, element, params) {
		var result = this.optional(element) || ( parseInt(value) <= max_loan_amount_value);
        return result;
	}, jQuery.validator.format("Please enter loan request amount less than {0}.")); 

	
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
	
	
	// pre-populate form 2
	/*$("#form2_populate").click(
		function() {
			$('#form_new_customer_credit_cards_1').populate({
				'form2_salutation':'Mr',
				'form2_name':'Lorem Ipsum',
				'form2_name_on_card':'Lorem Ipsum',
				'form2_nationality':'Singaporean',
				'form2_nric_number':'S8312554C',
				'form2_passport_number':'S8312554C',
				'form2_date_of_birth':'01/01/1960',
				'form2_gender':'Male',
				'form2_ethnic_type':'Chinese',
				'form2_marital_status':'Married',
				'form2_number_of_dependents':'0',
				'form2_education_status':'Primary / Secondary'
			})
			
			$('#form_new_customer_credit_cards_2').populate({
				'form2_block_number':'11',
				'form2_unit_number':'#11-11',
				'form2_street_name':'Lorem Ipsum',
				'form2_building_name':'Lorem Ipsum',
				'form2_postal_code':'111111',
				'form2_overseas_address':'Lorem Ipsum',
				'form2_overseas_contact_country_code':'11',
				'form2_overseas_contact_area_code':'65',
				'form2_overseas_contact_tel_no':'11111111',
				'form2_length_of_stay_at_address_years':'1',
				'form2_length_of_stay_at_address_months':'1',
				'form2_type_of_residence':'HDB',
				'form2_residential_ownership':'Owned (Fully Paid)'
			})
			
			$('#form_new_customer_credit_cards_3').populate({
				'form2_nature_of_employment':'Salaried',
				'form2_name_of_employer':'Lorem Ipsum',
				'form2_name_of_business':'Lorem Ipsum',
				'form2_occupation':'MNC',
				'form2_job_title':'1',
				'form2_years_in_service':'1',
				'form2_months_in_service':'1',
				'form2_annual_income_sg':'30000',
				'form2_annual_income_non_sg':'36000',
				'form2_employer_block_number':'2',
				'form2_employer_unit_number':'#22-22',
				'form2_employer_street_name':'Lorem Ipsum',
				'form2_employer_building_name':'Lorem Ipsum',
				'form2_employer_postal_code':'222222'
			})
			
			$('#form_new_customer_credit_cards_4').populate({
				'form2_mail_to_be_sent_to':'Residential Address',
				'form2_contact_block_number':'11',
				'form2_contact_unit_number':'#11-11',
				'form2_contact_street_name':'Lorem Ipsum',
				'form2_contact_building_name':'Lorem Ipsum',
				'form2_contact_postal_code':'111111',
				'form2_months_in_service':'1',
				'form2_residential':'61234567',
				'form2_office':'61234567',
				'form2_mobile':'61234567',
				'form2_email_address':'lorem@ipsum.com',
				'form2_contact_overseas_address':'Lorem Ipsum',
				'form2_name_of_relative_not_living_with_you':'Lorem Ipsum',
				'form2_relationship_to_applicant':'F',
				'form2_contact_person_contact_number':'61234567'
			})
			
			$('#form_new_customer_credit_cards_5').populate({
				'form2_sup_salutation':'Mr',
				'form2_sup_full_name':'Lorem Ipsum',
				'form2_sup_name_on_card':'Lorem Ipsum',
				'form2_sup_nationality':'Singaporean',
				'form2_sup_nric_number':'S8312554C',
				'form2_sup_passport_number':'S8312554C',
				'form2_sup_date_of_birth':'01/01/1960',
				'form2_sup_gender':'Male',
				'form2_sup_relationship_to_applicant':'F',
				'form2_sup_address':'Home',
				'form2_sup_block_no':'123',
				'form2_sup_unit_no':'#11-111',
				'form2_sup_street_name':'Lorem Ipsum',
				'form2_sup_building_name':'Lorem Ipsum',
				'form2_sup_postal_code':'123456',
				'form2_ft_account_holder_name':'Lorem Ipsum',
				'form2_ft_nric_passport':'S8312554C',
				'form2_ft_bank_name':'DBS / POSB',
				'form2_ft_transfer_to_account_type':'Credit Card',
				'form2_ft_account_credit_card_number':'1111111',
				'form2_sup_postal_code':'111111',		
				'form2_ft_amount_to_be_transferred':'30000',
				'form2_link_to_personal_credit_account_number':'1111111111',
				'form2_link_to_savings_current_account_number':'1111111111'
			})
		}
	);*/
	
	/************************** info page ***************************/
	$.validator.addMethod('validPromoCode', function (value) {
		var cash300Found = $("#form2_promotionCode").val().match(/cash300/i);
		if( ($("#form2_promotionCode").val() != "" && $("#form2_promotionCode").val().length != 7) || 
				($("#form2_promotionCode").val() != "" && cash300Found == null) ) {
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
				alert("Please select at least 1 card to continue.");	
			}
			else if (total_cards > 2) {
				alert("You are applying for more than 2 cards. You may only apply up to 2 cards at the same time.");
				hide_all_cards();
			}
			else {
				display_notes_page();
				if (total_cards == 1) {
					$("#new_credit_card .coda-slider").removeClass("card2moveup");
					$("#new_credit_card .coda-slider").addClass("card1moveup");
				} else {
					$("#new_credit_card .coda-slider").removeClass("card1moveup");
					$("#new_credit_card .coda-slider").addClass("card2moveup");
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
            form2_01: "form2_salutation form2_first_name"
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
				$("#form2_name_on_card").attr("value",($("input[name=form2_first_name]").val() + " " + $("input[name=form2_name]").val()));

			}
			return false;

		}
	);


	
	/************************** existing credit card customer ***************************/
	
	/************************** step 1 ***************************/
		
	/************************** step 2 ***************************/
		
	/************************** step 3 ***************************/
	
	/************************** step 4 ***************************/
	
	
	/************************** new credit card customer ***************************/

/************************** step 0 ***************************/
	
	// load banks menu
	$.getScript("data/banks.js",function() {
		$.each(banks, function(key, value) {
			if( key == '7171_1' || key == '7171_2') {
				$('#form2_issuing_bank').append('<option value="7171">'+value+'</option>');
			} else {
				$('#form2_issuing_bank').append('<option value="'+key+'">'+value+'</option>');
			}
			
		});
	});
	
	$('#form2_loan_my_income').focus(function() {
		if( $('#form2_loan_is_customer ~ label').hasClass('checked') || $('#form2_loan_isnot_customer ~ label').hasClass('checked') ) {
			$('#loanCustomerRadios').find('label.error').hide();
		}
	});
	$('body').click(function() {
		if( $('#form2_loan_is_customer ~ label').hasClass('checked') || $('#form2_loan_isnot_customer ~ label').hasClass('checked') ) {
			$('#loanCustomerRadios').find('label.error').hide();
		}
		if( $('#form2_gender_male ~ label').hasClass('checked') || $('#form2_gender_female ~ label').hasClass('checked') ) {
			$('#genderRadios').find('label.error').hide();
		}
	});
	
	$('#form2_issuing_bank').change(function() {
		//alert($('#form2_issuing_bank :selected').text());
		var bank_code = $(this).val();
		if( bank_code == '7171' ) {
			if( $('#form2_issuing_bank :selected').text().match(/DBS Bank Ltd/gi) != null ) {
				bank_code = "7171_1";
				//$('#issue_bank_msg').empty().append("Your branch code no. are usually the 1st 3 digits of your 9 to 10 digits a/c no. e.g. For 032 7777777, your branch code is 032");
				$('#issue_bank_msg').empty();
				$('#issue_bank_msg_container').hide();
				//$('#issue_bankacc_msg').empty().append("Please enter your full 9 or 10 digits a/c no.");
				$('#issue_bankacc_msg').empty();
				$('#issue_bankacc_msg_container').hide();
				$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
				$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
				$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
				$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
				$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
				$('#form2_other_bank_acc_no').addClass('isDBSAcc');
				$('#form2_other_bank_acc_no').attr('maxlength','10');
				$('#acc_digits_msg').empty()
				$('#acc_digits_label').empty().append('1st 3 digits of DBS Account No.');
				$('#pre_acc_digits_label').empty().append('1st 3 digits of DBS Account No.');
				$('.issue_branch_container').css({'position':'absolute','visibility':'hidden'});
				$('.uob_container').hide();
				$('.acc_digits_container').show();
			} else {
				bank_code = "7171_2";
				$('#issue_bank_msg').empty();
				$('#issue_bank_msg_container').hide();
				$('#issue_bankacc_msg').empty();
				$('#issue_bankacc_msg_container').hide();
				$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
				$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
				$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
				$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
				$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
				$('#form2_other_bank_acc_no').addClass('isPOSAcc');
				$('#form2_other_bank_acc_no').attr('maxlength','9');
			}
		} else if ( bank_code == '7375' ) {
			/*
			$('#issue_bank_msg').empty();
			$('#issue_bank_msg_container').hide();
			$('#issue_bankacc_msg').empty();
			$('#issue_bankacc_msg_container').hide();
			*/
			$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
			$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
			$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
			$('#form2_other_bank_acc_no').addClass('isUOBAcc');
			$('#form2_other_bank_acc_no').attr('maxlength','10');
			$('#acc_digits_msg').empty()
			$('#acc_digits_label').empty();
			$('#pre_acc_digits_label').empty();
			$('.acc_digits_container').hide();
			$('.issue_branch_container').css({'position':'absolute','visibility':'hidden'});
			$('.uob_container').show();
		} else if ( bank_code == '7339' ) {
			//$('#issue_bank_msg').empty().append('Please use the first 3 digits of your OCBC a/c no. as branch code. e.g. for a/c no. 563 088 888 888, select 563 as your branch code');
			$('#issue_bank_msg').empty();
			$('#issue_bank_msg_container').hide();
			//$('#issue_bankacc_msg').empty().append('Please enter only the next 7 or 9 digits as your OCBC a/c no. e.g for a/c no. 563 088 888 888, enter only 088 888 888 as your bank a/c no.');
			$('#issue_bankacc_msg').empty();
			$('#issue_bankacc_msg_container').hide();
			$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
			$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
			$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
			$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
			$('#form2_other_bank_acc_no').addClass('isOCBCAcc');
			$('#form2_other_bank_acc_no').attr('maxlength','9');
			$('#acc_digits_msg').empty()
			$('#acc_digits_label').empty().append('1st 3 digits of OCBC Account No.');
			$('#pre_acc_digits_label').empty().append('1st 3 digits of OCBC Account No.');
			$('.issue_branch_container').css({'position':'absolute','visibility':'hidden'});
			$('.uob_container').hide();
			$('.acc_digits_container').show();
		} else if ( bank_code == '7232' ) {
			//$('#issue_bank_msg').empty().append('Please use the first 3 digits of your HSBC a/c no. as branch code. e.g. for a/c no. 143 088 888 888, select 143 as your branch code');
			$('#issue_bank_msg').empty();
			$('#issue_bank_msg_container').hide();
			//$('#issue_bankacc_msg').empty().append('Please enter only the next 9 digits as your HSBC a/c no. e.g for a/c no. 143 088 888 888, enter only 088 888 888 as your bank a/c no');
			$('#issue_bankacc_msg').empty();
			$('#issue_bankacc_msg_container').hide();
			$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
			$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
			$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
			$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
			$('#form2_other_bank_acc_no').addClass('isHSBCAcc');
			$('#acc_digits_msg').empty()
			$('#acc_digits_label').empty().append('1st 3 digits of Hongkong and Shanghai Bank Account No.');
			$('#pre_acc_digits_label').empty().append('1st 3 digits of Hongkong and Shanghai Bank Account No.');
			$('.issue_branch_container').css({'position':'absolute','visibility':'hidden'});
			$('.uob_container').hide();
			$('.acc_digits_container').show();
		} else if ( bank_code == '7357' ) {
			$('#issue_bank_msg').empty();
			$('#issue_bank_msg_container').hide();
			//$('#issue_bankacc_msg').empty().append('Please omit first 2 digits of your account no.');
			$('#issue_bankacc_msg').empty();
			$('#issue_bankacc_msg_container').hide();
			$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
			$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
			$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
			$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
			$('#form2_other_bank_acc_no').addClass('isUCOAcc');
		}else {
			$('#issue_bank_msg').empty();
			$('#issue_bank_msg_container').hide();
			$('#issue_bankacc_msg').empty();
			$('#issue_bankacc_msg_container').hide();
			$('#form2_other_bank_acc_no').removeClass('isDBSAcc');
			$('#form2_other_bank_acc_no').removeClass('isPOSAcc');
			$('#form2_other_bank_acc_no').removeClass('isUOBAcc');
			$('#form2_other_bank_acc_no').removeClass('isOCBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isHSBCAcc');
			$('#form2_other_bank_acc_no').removeClass('isUCOAcc');
		}
		
		if( bank_code != '7375' && bank_code != '7171_1' && bank_code != '7339' && bank_code != '7232' ) {
			$('#acc_digits_msg').empty()
			$('.uob_container').hide();
			$('.acc_digits_container').hide();
			$('.issue_branch_container').css({'position':'relative','visibility':'visible'});
		}
		
		if( $('#form2_other_bank_acc_no').val() != "" ) {
			$('#form2_other_bank_acc_no').valid();
		}
		
		$('#form2_issuing_branch').empty();
		$('#form2_issuing_branch').append('<option selected="selected" value="">Please Select</option>');
		$.getScript('data/'+bank_code+'_branch.js',function() {
			$.each(branches, function(key, value) {
				$('#form2_issuing_branch').append('<option value="'+key+'">'+value+'</option>');
			});
			
		});
		if( bank_code == '7171_1' || bank_code == '7339' || bank_code == '7232' ) {
			$('#form2_acc_3digits').empty();
			$('#form2_acc_3digits').append('<option selected="selected" value="">Please Select</option>');
			//alert('bank code called: '+bank_code);
			$.getScript('data/'+bank_code+'_branch.js',function() {
				//branches = sortObj(branches);
				//alert(branches);
				$.each(branches, function(key, value) {
					value = value.replace(/\[/g,'');
					value = value.replace(/\]/g,'');
					$('#form2_acc_3digits').append('<option value="'+value+'">'+key+'</option>');
				});
				
			});
		}
	});
	
	$('#form2_uob_acc_3digits').change(function() {
		$('#uob_branch_msg').empty().append( $(this).val() );
		var branch_code = $(this).val().substring(0,3);
		//alert(branch_code);
		$('#form2_issuing_branch').val( branch_code );
	});
	
	$('#form2_acc_3digits').change(function() {
		$('#acc_digits_msg').empty().append( $(this).val() );
		var branch_code = $(this).val().substring(0,3);
		//alert(branch_code);
		$('#form2_issuing_branch').val( branch_code );
	});
	
	// load max calculation
	var max_loan_amount = '';
	$('#form2_loan_my_income').blur(function() {
		if( $('#form_new_customer_credit_cards_0').validate().element("#form2_loan_my_income") ) {
			var myincome = $(this).val().split('.')[0];
			myincome = myincome.replace(',','').replace('.','');
			// add 8x option
			if( myincome >= 120000) {
				//console.log( Math.floor( (myincome / 12) / 100 ) );
				max_loan_amount = Math.floor( (myincome / 12) / 100 ) * 100 * 8;
				$('#cal_loan_product').empty().append( 'CashOne Loan on Platinum Visa Card' );
				$('#cal_loan_product_msg').empty().append( '(Up to 8x monthly income)' ); // end 8x option
			} else if( myincome >= 30000) {
				max_loan_amount = Math.floor( (myincome / 12) / 100 ) * 100 * 4;
				$('#cal_loan_product').empty().append( 'CashOne Loan on Platinum Visa Card' );
				$('#cal_loan_product_msg').empty().append( '(Up to 4x monthly income)' );
			} else if ( myincome >= 20000 && myincome <= 29999 ) {
				max_loan_amount = Math.floor( (myincome / 12) / 100 ) * 100 * 2;
				$('#cal_loan_product').empty().append( 'CashOne Loan' );
				$('#cal_loan_product_msg').empty().append( '(Up to 2x monthly income)' );
			} else {
				$('#cal_loan_product_msg').empty().append( '(Minimum $20000 annual income is required)' );
			}
			// set cap to 200K
			if( max_loan_amount > 200000 ) {
				max_loan_amount = 200000;
			}
			max_loan_amount_value = max_loan_amount
			//$('#income_max_load span').empty().append( parseInt(max_loan_amount, 10));
			
			if( !isNaN( parseInt(max_loan_amount) )) {
				max_loan_amount = Number(max_loan_amount).toFixed(0);
				max_loan_amount = insertThousand(max_loan_amount);
				$('#cal_loan_amount, .cal_loan_amount_span').empty().append( '$'+ max_loan_amount );
				$('#pre_cal_loan_amount').empty().append( '$'+ max_loan_amount );
			} else {
				$('#cal_loan_amount, .cal_loan_amount_span').empty();
				$('#pre_cal_loan_amount').empty();
			}
			$('#income_max_load').show();
			// open max loan dialog
			$('#form2_loan_amount_required').val(max_loan_amount);
			$("#dialog-upsell").dialog('open');			
		}
		//$('#form_new_customer_credit_cards_0_wrapper, #content').css('height','800px');
	});
	
	function cal4xincome() {
		var proposeloanamount = 0;
		var myincome = $('#form2_loan_my_income').val().split('.')[0];
		myincome = myincome.replace(',','').replace('.','');
		if( myincome >= 30000) {
			proposeloanamount = Math.floor( (myincome / 12) / 100 ) * 100 * 4;
		} else if ( myincome >= 20000 && myincome <= 29999 ) {
			proposeloanamount = Math.floor( (myincome / 12) / 100 ) * 100 * 2;
		}
		// set cap to 200K
		if( proposeloanamount > 200000 ) {
			proposeloanamount = 200000;
		}
		$('#form2_loan_amount_required').val(proposeloanamount);
	}
	
	// disburse loan calculation
	/* previous disburse amount cal
	$('#form2_loan_amount_required').blur(function() {
		var requested_amount = $(this).val().replace(',','');
		requested_amount = parseFloat(requested_amount);
		requested_amount = Math.round(requested_amount)
		requested_amount = parseFloat( requested_amount );
		var insurance_fee = 0;
		if( requested_amount > 0 ) {
			if( (requested_amount * 0.018) < 50 ) {
				insurance_fee = 50;
			} else if ( (requested_amount * 0.018) > 1000 ) {
				insurance_fee = 1000;
			} else {
				insurance_fee = requested_amount * 0.018;
			}
			var disburse_loan_amount = requested_amount - insurance_fee;
			if( requested_amount != '' ) {
				var tmpvalue = ""+disburse_loan_amount;
				tmpvalue = tmpvalue.split('.')[0];
				tmpvalue = insertThousand(tmpvalue+'');
				$("#cal_disburse_loan_amount").empty().append( "$"+tmpvalue+"<br>Net of 1.8% insurance fee. Capped at $1,000" );
				$("#pre_cal_disburse_loan_amount").empty().append( "$"+tmpvalue+"<br>Net of 1.8% insurance fee. Capped at $1,000" );
			}
		} else {
			$("#cal_disburse_loan_amount").empty().append( "Calculation is based on your loan amount, please enter your loan amount first" );
			$("#pre_cal_disburse_loan_amount").empty().append( "Calculation is based on your loan amount, please enter your loan amount first" );
		}
		if( !isNaN( requested_amount ) ) {
			requested_amount = Math.round(requested_amount);
			$(this).val( requested_amount ); 
			requested_amount_str = insertThousand(requested_amount+'');
			$('#requested_loan_amount_msg').empty().append( "$"+requested_amount_str );
			$('#pre_requested_loan_amount_msg').empty().append( "$"+requested_amount_str );
		} else {
			$(this).val('');
			$('#requested_loan_amount_msg').empty();
			$('#pre_requested_loan_amount_msg').empty();
		}
		$(this).valid();
		$('#form2_loan_tenure').change();
	});
	*/
	
	$('#form2_loan_amount_required').blur(function() {
		var requested_amount = $(this).val().replace(',','');
		requested_amount = parseFloat(requested_amount);
		requested_amount = Math.round(requested_amount)
		requested_amount = parseFloat( requested_amount );
		var insurance_fee = 199;
		if( requested_amount > 0 ) {
			var disburse_loan_amount = requested_amount - insurance_fee;
			if( requested_amount != '' ) {
				var tmpvalue = ""+disburse_loan_amount;
				tmpvalue = tmpvalue.split('.')[0];
				tmpvalue = insertThousand(tmpvalue+'');
				$("#cal_disburse_loan_amount").empty().append( "$"+tmpvalue+"<br>Less off first year annual fee of $199" );
				$("#pre_cal_disburse_loan_amount").empty().append( "$"+tmpvalue+"<br>Less off first year annual fee of $199" );
			}
		} else {
			$("#cal_disburse_loan_amount").empty().append( "Calculation is based on your loan amount and tenor selected." );
		}
		if( !isNaN( requested_amount ) ) {
			requested_amount = Math.round(requested_amount);
			$(this).val( requested_amount ); 
			requested_amount_str = insertThousand(requested_amount+'');
			$('#requested_loan_amount_msg').empty().append( "$"+requested_amount_str );
			$('#pre_requested_loan_amount_msg').empty().append( "$"+requested_amount_str );
		} else {
			$(this).val('');
			$('#requested_loan_amount_msg').empty();
		}
		$(this).valid();
		$('#form2_loan_tenure').change();
	});
	
	// interest rate calculation
	$('#form2_loan_tenure').change(function() {
		var requested_amount_input = $('#form2_loan_amount_required').val();
		if( (requested_amount_input.length != 0 || requested_amount_input != "") && $(this).val() != "" ) {
			var loan_tenure = parseInt( $(this).val() );
			var interest_rate = 0;
			var effective_rate = 0;
			if ( loan_tenure == 12 ) {
				if( requested_amount_input <= 4999 ) {
					interest_rate = 12.48;
					effective_rate = 22.28;
				} else if ( requested_amount_input >= 5000 && requested_amount_input <= 11999 ) {
					interest_rate = 10.70;
					effective_rate = 19.20;
				}  else if ( requested_amount_input >= 12000 && requested_amount_input <= 19999 ) {
					interest_rate = 7.68;
					effective_rate = 13.88;
				} else {
					interest_rate = 7.11;
					effective_rate = 12.88;
				}
			} else if ( loan_tenure == 24 ) {
				if( requested_amount_input <= 4999 ) {
					interest_rate = 12.42;
					effective_rate = 22.28;
				} else if ( requested_amount_input >= 5000 && requested_amount_input <= 11999 ) {
					interest_rate = 10.60;
					effective_rate = 19.20;
				} else if ( requested_amount_input >= 12000 && requested_amount_input <= 19999 ) {
					interest_rate = 7.55;
					effective_rate = 13.88;
				} else {
					interest_rate = 6.98;
					effective_rate = 12.88;
				}
			} else if ( loan_tenure == 36 ) {
				if( requested_amount_input <= 4999 ) {
					interest_rate = 12.67;
					effective_rate = 22.28;
				} else if ( requested_amount_input >= 5000 && requested_amount_input <= 11999 ) {
					interest_rate = 8.78;
					effective_rate = 15.88;
				} else if ( requested_amount_input >= 12000 && requested_amount_input <= 19999 ) {
					interest_rate = 7.44;
					effective_rate = 13.58;
				} else {
					interest_rate = 6.74;
					effective_rate = 12.38;
				}
			} else if ( loan_tenure == 48 ) {
				if( requested_amount_input <= 4999 ) {
					interest_rate = 12.99;
					effective_rate = 22.28;
				} else if ( requested_amount_input >= 5000 && requested_amount_input <= 11999 ) {
					interest_rate = 8.93;
					effective_rate = 15.88;
				} else if ( requested_amount_input >= 12000 && requested_amount_input <= 19999 ) {
					interest_rate = 7.54;
					effective_rate = 13.58;
				} else {
					interest_rate = 6.82;
					effective_rate = 12.38;
				}
			} else if ( loan_tenure == 60 ) {
				if( requested_amount_input <= 4999 ) {
					interest_rate = 13.33;
					effective_rate = 22.28;
				} else if ( requested_amount_input >= 5000 && requested_amount_input <= 11999 ) {
					interest_rate = 8.79;
					effective_rate = 15.38;
				} else if ( requested_amount_input >= 12000 && requested_amount_input <= 19999 ) {
					interest_rate = 7.48;
					effective_rate = 13.28;
				} else {
					interest_rate = 6.02;
					effective_rate = 10.88;
				}
			}
			//console.log( requested_amount_input +' '+ interest_rate + ' ' + interest_rate / 100 + ' ' + loan_tenure / 12 + ' ' + loan_tenure);
			//console.log( ( parseFloat(requested_amount_input) * (parseFloat(interest_rate) / 100) * ( parseFloat(loan_tenure) / 12 ) + parseFloat(requested_amount_input) ) / parseFloat(loan_tenure) );
			
			var instalment_per_month = ( parseFloat(requested_amount_input) * (parseFloat(interest_rate) / 100) * ( parseFloat(loan_tenure) / 12 ) + parseFloat(requested_amount_input) ) / parseFloat(loan_tenure);
			$('#cal_interest_rate').empty().append(interest_rate+'% p.a. (Effective rate of '+effective_rate+'% p.a.)<br>Based on loan amount & tenor selected');
			$('#pre_cal_interest_rate').empty().append(interest_rate+'% p.a. (Effective rate of '+effective_rate+'% p.a.)<br>Based on loan amount & tenor selected');
			instalment_per_month = Math.ceil(instalment_per_month);
			instalment_per_month_str = insertThousand(instalment_per_month+'');
			$('#cal_instalment_per_month').empty().append( '$'+ instalment_per_month_str );
			$('#pre_cal_instalment_per_month').empty().append( '$'+ instalment_per_month_str );
		} else {
			$('#cal_interest_rate').empty().append('');
			$('#pre_cal_interest_rate').empty().append('');
			$('#cal_instalment_per_month').empty().append( 'Calculation is based on your loan amount, please enter your loan amount and select your loan tenor first');
			$('#pre_cal_instalment_per_month').empty().append( 'Calculation is based on your loan amount, please enter your loan amount and select your loan tenor first');
		}	
		
		
	});
	
	function insertThousand( val ) {
		var reg=/(-?\d+)(\d{3})/;
		while(reg.test(val)){
			val=val.replace(reg,'$1,$2') // where # is a thousand separator.
		}
		return val;
	}
	
	// display account address panel
	$("input[name='form2_deposit_bank_acc_type']").click(function() {
		if ($("input[name='form2_deposit_bank_acc_type']:checked").val() == 'scb_account' ) {
			$('.scb_account_container').show();
			$('.other_account_container').hide();
			$('#form2_other_bank_acc_no').val('').removeClass('isUOBAcc isPOSAcc isOCBCAcc isHSBCAcc isUCOAcc isDBSAcc');
			$('#form2_other_bank_acc_no_verify').val('');
			$('#form2_issuing_bank').val('');
			$('#form2_issuing_branch').val('');
			$('#form2_acc_holder_name').val('');
			$('#scb_account_preview_container').show();
			$('#other_account_preview_container').hide();
	resizeSlider();
		} else if ($("input[name='form2_deposit_bank_acc_type']:checked").val() == 'other_account' ) {
			$('.scb_account_container').hide();
			$('#form2_cheque_acc_no').val('');
			$('#form2_cheque_acc_no_verify').val('');
			$('.other_account_container').show();
			$('#scb_account_preview_container').hide();
			$('#other_account_preview_container').show();
	resizeSlider();
		} else {
			$('.scb_account_container').hide();
			$('.other_account_container').hide();
	resizeSlider();
		}
	});
	
	// cancel button
	$("#new_credit_card_back_0").click(
		function() {
			display_notes_page();
		}
	);
	
	// custom validation functions
	function checkAccNo() {
		
	}
	
	// form validation
	$("#form_new_customer_credit_cards_0").validate({
  		rules: {
			form2_loan_customer: {required: function(element) { return $("input[name='form2_loan_customer']:checked").val() == undefined}},
			form2_loan_my_income: {required: true, number: true, min: 20000},
			form2_deposit_bank_acc_type: {required: true},
			//form2_loan_amount_required: {required: true, number: true, min: 1000, maxloanamount: function(element) { return max_loan_amount_value }},
			form2_loan_amount_required: {required: true, number: true, min: 1000, max: 200000},
			form2_loan_tenure: {required: true},
			form2_cheque_acc_no: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "scb_account" }, minlength: 10 },
			form2_cheque_acc_no_verify: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "scb_account" }, accEqualTo: "#form2_cheque_acc_no"  },
			form2_other_bank_acc_no: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "other_account" } },
			form2_other_bank_acc_no_verify: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "other_account" }, accEqualTo: "#form2_other_bank_acc_no" },
			form2_issuing_bank: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "other_account" } },
			form2_issuing_branch: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "other_account" } },
			form2_acc_3digits: { required: function(element) { return $("#form2_acc_3digits").is(':visible') } },
			form2_acc_holder_name: { required: function(element) { return $("input[name='form2_deposit_bank_acc_type']:checked").val() == "other_account" } }
			//form2_acc_holder_nric_passport: { required: function(element) { return $("#form2_deposit_bank_acc_type").val() == "other_account" }, number: true }
  		},		
		messages: {
  			form2_loan_customer: {required: 'Please declare if you are an exisiting Standard Chartered Bank Customer'},
			form2_loan_my_income: {required: 'Please enter your annual income', min: 'Minimum annual income requirement is $20000 for Singaporeans/PR and $60000 for foreigners.'},
			form2_deposit_bank_acc_type: {required: 'Please select your disbursement bank'},
			form2_loan_amount_required: {required: 'Please enter your requested loan amount', min: 'Please enter a value of 1,000 or more', max: 'Please enter a value less than 200,000'},
			form2_loan_tenure: {required: 'Please select your loan tenure'},
			form2_cheque_acc_no: { required: 'Please enter your account number', minlength: 'Please enter 10 digit account number.' },
			form2_other_bank_acc_no: { required: 'Please enter your account number' },
			form2_issuing_bank: { required: 'Please select your issue bank' },
			form2_issuing_branch: { required: 'Please select your issue bank branch' },
			form2_acc_3digits: { required: 'Please select the first 3 digits' },
			form2_acc_holder_name: { required: 'Please enter your account holder name' }
			//form2_acc_holder_nric_passport: { required: 'Please enter your NRIC/Passport number' }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
		errorPlacement: function(error, element) {
			if (element.attr("name") == "form2_cheque_acc_no")
       			error.insertAfter("#form2_cheque_acc_no_label_container");
     		else if (element.attr("name") == "form2_other_bank_acc_no")
       			error.insertAfter("#lbl_form2_other_bank_acc_no");
     		else if (element.attr("name") == "form2_other_bank_acc_no_verify")
       			error.insertAfter("#lbl_form2_other_bank_acc_no_verify");
     		else if (element.attr("name") == "form2_cheque_acc_no_verify")
       			error.insertAfter("#lbl_form2_cheque_acc_no_verify");
     		else if (element.attr("name") == "form2_deposit_bank_acc_type")
       			error.insertAfter("#form2_deposit_bank_acc_type_label_container");
     		else if (element.attr("name") == "form2_issuing_bank")
       			error.insertAfter("#form2_issuing_bank_label_container");
     		else if (element.is(":radio"))
     			error.appendTo( element.parent().parent().next() ); 
 			else
                error.appendTo( element.parent().next() ); 
   		}
   		
	});
	
	// form submission
	$("#check_new_credit_card_0").click(
		function() {

			if (  ($("#form_new_customer_credit_cards_0").valid())) {
				preview_form2();
				//if ( $('#form2_cheque_acc_no').val() == $('#form2_cheque_acc_no_verify').val() && $('#form2_other_bank_acc_no').val() == $('#form2_other_bank_acc_no_verify').val() ) {
				
				$("#form_new_customer_credit_cards_0 .next").click();
				$("#new_credit_card .bc1").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_0").addClass("step_1");
				$("#coda-slider-2 .panel01").addClass("selected-panel");
				$("#coda-slider-2 .panel00").removeClass("selected-panel");
				$(".form2_header_loan").hide();
				$(".form2_header_personal").show();
				$(".form2_header_employment").hide();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
				
				/* disable pop up	
				if( $('#form2_loan_is_customer ~ label').hasClass('checked') ) {
					$("#dialog-confirm").empty();
			        $("#dialog-confirm").append("<span style='padding: 0px;font-size: 12px;line-height: 16px;color: #777;'>"+confirmDialogMsg+"</span>");
			        $("#dialog-confirm").dialog('open');
				} else {
					$("#form_new_customer_credit_cards_0 .next").click();
					//$("#new_credit_card .tabs li").removeClass("selected");
					$("#new_credit_card .bc1").addClass("selected");
					$("#new_credit_card .breadcrumb").removeClass("step_0").addClass("step_1");
					$("#coda-slider-2 .panel01").addClass("selected-panel");
					$("#coda-slider-2 .panel00").removeClass("selected-panel");
					$(".form2_header_loan").hide();
					$(".form2_header_personal").show();
					$(".form2_header_employment").hide();
					$(".form2_header_vas").hide();
					$(".form2_header_documents").hide();
					$(".form2_header_review").hide();
				}
				*/
					
				//} else {
				//	alert('The Account number you have entered does not match, please enter again.');
				//}
				resizeSlider();
	  			return false;
			} else {
				$.scrollTo($('.error:visible:first'),500,{offset:-50});
				resizeSlider();
			}
			
  			return false;
		}
	);
	
	
	/************************** step 1 ***************************/
	
	// trim name on Full name and name on card
	/*
	$('#form2_name').blur(function() {
		var tmpName = $.trim( $(this).val() );
		tmpName = tmpName.replace(/\s+/g,' ');
		$(this).val( tmpName );
		$(this).valid();
	});
	$("#form2_name_on_card").blur(function() {
		var tmpName = $.trim( $(this).val() );
		tmpName = tmpName.replace(/\s+/g,' ');
		$(this).val( tmpName );
		$(this).valid();
	});
	*/
	
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
	/*$("#form2_mail_to_be_sent_to").change(
		function() {
			if ($("#form2_mail_to_be_sent_to :selected").text() == "Residential Address") {
				if ($("#form2_unit_number_na").is(":checked")) {
					$("#form2_contact_unit_number_na").attr("checked", true);
					$("#lbl_form2_contact_unit_number").addClass("checked");
					$("#form2_contact_unit_number").attr("disabled", true).attr("value", "N.A").focus();
				} else {
					$("#form2_contact_unit_number_na").attr("checked", false);
					$("#lbl_form2_contact_unit_number").removeClass("checked");
					$("#form2_contact_unit_number").removeAttr("disabled").attr("value","").focus();
				}
				$('#form_new_customer_credit_cards_4').populate({
					'form2_contact_block_number':$("#form2_block_number").val(),
					'form2_contact_unit_number':$("#form2_unit_number").val(),
					'form2_contact_street_name':$("#form2_street_name").val(),
					'form2_contact_building_name':$("#form2_building_name").val(),
					'form2_country':$("#country_code_home :selected").text(),
					'form2_contact_postal_code':$("#form2_postal_code").val()
				}, { resetForm: false} );
			}
			else if ($("#form2_mail_to_be_sent_to :selected").text() == "Address of the Employer or Business") {
				if ($("#form2_employer_unit_number_na").is(":checked")) {
					$("#form2_contact_unit_number_na").attr("checked", true);
					$("#lbl_form2_contact_unit_number").addClass("checked");
					$("#form2_contact_unit_number").attr("disabled", true).attr("value", "N.A").focus();
				} else {
					$("#form2_contact_unit_number_na").attr("checked", false);
					$("#lbl_form2_contact_unit_number").removeClass("checked");
					$("#form2_contact_unit_number").removeAttr("disabled").attr("value","").focus();
				}
				$('#form_new_customer_credit_cards_4').populate({
					'form2_contact_block_number':$("#form2_employer_block_number").val(),
					'form2_contact_unit_number':$("#form2_employer_unit_number").val(),
					'form2_contact_street_name':$("#form2_employer_street_name").val(),
					'form2_contact_building_name':$("#form2_employer_building_name").val(),
					'form2_country':$("#country_code_emp :selected").text(),
					'form2_contact_postal_code':$("#form2_employer_postal_code").val()
				}, { resetForm: false} );
			} else {
				$("#form2_contact_unit_number_na").attr("checked", false);
				$("#lbl_form2_contact_unit_number").removeClass("checked");
				$('#form_new_customer_credit_cards_4').populate({
					'form2_contact_block_number':"",
					'form2_contact_unit_number':"#",
					'form2_contact_street_name':"",
					'form2_contact_building_name':"",
					'form2_country':"",
					'form2_contact_postal_code':""
				}, { resetForm: false} );
			}
		}
	);*/
	
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
	
	// form validation
	$("#form_new_customer_credit_cards_1").validate({
   		groups: {
            //form2_11: "form2_areacode_residential form2_residential",
            //form2_12: "form2_contact_person_areacode_contact_number form2_contact_person_contact_number",
            form2_13: "form2_overseas_contact_country_code form2_overseas_contact_area_code form2_overseas_contact_tel_no"
        },
  		rules: {
			//form2_salutation: { required: true, minlength: 1 },
			//form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_name_on_card: { required: true, minlength: 5, maxlength: 19 },
			form2_nric_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Foreigner" }, minlength: 9, maxlength: 9 },
			form2_passport_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Singaporean" }, minlength: 5, maxlength: 16 },
			//form2_previous_passport_number: { minlength: 5, maxlength: 16 },
			form2_date_of_birth: { required: true },
			form2_gender: {required: function(element) { return $("input[name='form2_gender']:checked").val() == undefined}},
			form2_marital_status: { required: true, minlength: 1 },
			//form2_number_of_dependents: { required: true, number: true, min: 0, maxlength: 2 },
			form2_education_status: { required: true, minlength: 1 },
	// --- contact info
			//form2_mail_to_be_sent_to: { required: true, minlength: 1 },
			//form2_contact_block_number: { required: true, alphanumericwith2spec: true },
			//form2_contact_unit_number: { required: function(element) { return $("input[name='form2_contact_unit_number']:checked").val() != "N.A" }, minlength: 2, maxlength: 30 },
			//form2_contact_street_name: { required: true	},
			//form2_contact_building_name: { required: function(element) { return $("#form2_contact_building_name").val() != ""}, minlength: 2 },
			//form2_contact_postal_code: { required: true, minlength: 3, maxlength: 13, alphanumeric: true },
			/*
			form2_residential: { required: '#form2_office:blank', minlength: 8, maxlength: 8, number: true },
			form2_office: { required: '#form2_residential:blank', minlength: 8, maxlength: 8, number: true },
			*/
			//form2_areacode_residential: { required: true, number: true },
			form2_residential: { required: true, minlength: 8, maxlength: 8, number: true },
			//form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			//form2_email_address: { required: true, email: true, maxlength: 70 },
			form2_name_of_relative_not_living_with_you: { required: true },
			form2_relationship_to_applicant: { required: true, minlength: 1 },
			//form2_contact_person_areacode_contact_number: { required: true, number: true },
			//form2_contact_person_contact_number: { required: true, ctycode: true, minlength: 5, maxlength: 30 },
			form2_contact_person_contact_number: { required: true, number: true, minlength: 5, maxlength: 30 },
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
			//form2_length_of_stay_at_address_years: { required: true, number: true, min: 0, max: 60 },
			//form2_length_of_stay_at_address_months: { required: true, number: true, min: 0, max: 11 },
			form2_type_of_residence: { required: true, minlength: 1 },
			form2_residential_ownership: { required: true, minlength: 1 },
			form2_promotionCode: { validPromoCode: true }
  		},		
		messages: {
			//form2_salutation: { required: "Please enter your salutation / title." },
			//form2_name: { required: "Please enter your name."},
			form2_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			form2_nric_number: { required: "Please enter your NRIC." },
			form2_passport_number: { required: "Please enter your passport number" },
			//form2_previous_passport_number: { required: "Please enter your previous Passport no." },
			form2_date_of_birth: { required: "Please enter your date of birth." },
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
			form2_residential_ownership: { required: "Please select the ownership status of your home." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
        errorPlacement: function(error, element) {
			//var errorcontent=eval(error);
			//errorspotholder = element.parents('.errorparent');
     		if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
     		else if (element.attr("name") == "form2_postal_code")
       			error.insertAfter("#lbl_form2_postal_code_container");
     		else if (element.attr("name") == "form2_ethnic_type")
       			error.insertAfter("#ethnicRadio");
     		// from tab 4 -- contact info
 			else if (element.attr("name") == "form2_contact_unit_number")
       			error.insertAfter("#lbl_form2_contact_unit_number_container");
 			//else if ( element.is(":radio") )
              //   error.appendTo( element.parent().next().next() );
            //else if ( element.is(":checkbox") )
              //   error.appendTo ( element.next() );
             else if (element.attr("name") == "form2_unit_number")
       			error.insertAfter("#lbl_form2_unit_number_container");
			//else if (element.attr("name") == "form2_length_of_stay_at_address_years")
       		//	error.insertAfter("#lbl_form2_length_of_stay_at_address_years");
			//else if (element.attr("name") == "form2_length_of_stay_at_address_months")
       		//	error.insertAfter("#lbl_form2_length_of_stay_at_address_months");
             else if (element.attr("name") == "form2_mail_to_be_sent_to")
       			error.insertAfter("#mailingRadio");
             else if (element.attr("name") == "form2_areacode_residential" || element.attr("name") == "form2_residential")
        			error.insertAfter("#form2_residential_label_container");
             else if (element.attr("name") == "form2_contact_person_areacode_contact_number" || element.attr("name") == "form2_contact_person_contact_number")
     			error.insertAfter("#form2_contact_person_contact_number_label_container");
             else if (element.attr("name") == "form2_name_of_relative_not_living_with_you")
        			error.insertAfter("#form2_name_of_relative_not_living_with_you_label_container");
             else if (element.attr("name") == "form2_overseas_contact_country_code" || element.attr("name") == "form2_overseas_contact_area_code" || element.attr("name") == "form2_overseas_contact_tel_no")
      			error.insertAfter("#form2_overseas_contact_tel_no_label_container");
             else {
                error.appendTo( element.parent().next() );   
			}
		}
		//success: function(label){
		// errorspotholder.find('.error').removeClass('error').addClass('norederrorx');
        //	label.parent("div.errorparent").removeClass('errorMsg');
		//	label.removeClass("error");
		//}
	});
	
	// cancel button
	$("#new_credit_card_back").click(
		function() {
			$("#form_new_customer_credit_cards_1 .back").click();
			$("#new_credit_card .bc1").removeClass("selected");
			$("#new_credit_card .bc2").addClass("selected");
				$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_0");
				$("#coda-slider-2 .panel00").addClass("selected-panel");
				$("#coda-slider-2 .panel01").removeClass("selected-panel");
				$(".form2_header_loan").show();
				$(".form2_header_personal").hide();
				$(".form2_header_employment").hide();
				$(".form2_header_vas").hide();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
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
						$("#dialog-confirm-cash300").empty();
				        $("#dialog-confirm-cash300").append("<span style='padding: 20px;font-size: 12px;line-height: 16px;color: #777;'>"+confirmcash300Msg+"</span>");
				        $("#dialog-confirm-cash300").dialog('open');					
					} else {
						$("#form_new_customer_credit_cards_1 .next").click();
						//$("#new_credit_card .tabs li").removeClass("selected");
						$("#new_credit_card .bc2").addClass("selected");
						$("#new_credit_card .breadcrumb").removeClass("step_1").addClass("step_2");
						$("#coda-slider-2 .panel02").addClass("selected-panel");
						$("#coda-slider-2 .panel01").removeClass("selected-panel");
						$(".form2_header_loan").hide();
						$(".form2_header_personal").hide();
						$(".form2_header_employment").show();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").hide();
	
					}
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
	
// ---------------- employment panel -------------	
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
			form2_years_in_service: { required: true },
			//form2_months_in_service: { required: true, number: true, min: 0, max: 11 },
			/* hidden the whole business address section
			form2_employer_block_number: { required: true, maxlength: 7, alphanumericwith2spec: true },
			form2_employer_unit_number: { required: function(element) { return $("input[name='form2_employer_unit_number']:checked").val() != "N.A"}, minlength: 2, maxlength: 30 },
			form2_employer_street_name: { required: true, maxlength: 22 },
			form2_employer_building_name: { required: function(element) { return $("#form2_employer_building_name").val() != ""}, minlength: 2 },
			form2_employer_postal_code: { required: true, minlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 5 : 3 }, maxlength: function(element) { return ($("#country_code_emp").val() == "SG") ? 6 : 13 }, alphanumeric: true },
			*/
			//form2_employer_postal_code: { required: true, number :true, minlength: 3, maxlength: 13 }
			//form2_areacode_office: { required: true, number: true },
			form2_office: { required: true, minlength: 8, maxlength: 8, number: true }
  		},		
		messages: {
			form2_name_of_employer: { required: "Please enter the name of your employer." },
			form2_name_of_business: { required: "Please enter the name of your business" },
			form2_occupation: { required: "Please select your industry." },
			form2_job_title: { required: "Please select your job title/position held." },
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
				$(".form2_header_loan").hide();
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
					$(".form2_header_loan").hide();
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_vas").show();
					$(".form2_header_documents").hide();
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
	/*$(".form2_sup_nric_container").show();
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
	);*/
	
	// check whether user wants supplementary card
	//var form2_sup_card = "I do not want to apply for a supplementary card.";
	var form2_sup_has_sup_card;
	
	/*if ($("input[name='form2_sup_card']").is(":checked")) {
		$(".form2_sup_card_container").show();
		form2_sup_card = "I want to apply for a supplementary card.";
		form2_sup_has_sup_card = "1";
		
	}
	else
	{
		$(".form2_sup_card_container").hide();
		form2_sup_card = "I do not want to apply for a supplementary card.";
		form2_sup_has_sup_card = "";
	}
	
	
	
	$("input[name='form2_sup_card']").click(
		function() {
			if ($("input[name='form2_sup_card']").is(":checked")) {
				$(".form2_sup_card_container").show();
				form2_sup_card = "I want to apply for a supplementary card.";
				form2_sup_has_sup_card = "1";
			}
			else {
				$(".form2_sup_card_container").hide();
				form2_sup_card = "I do not want to apply for a supplementary card.";
				form2_sup_has_sup_card = "";
				$(this).blur();
			}
				
		}	
	);*/
			if ($("input[name='form2_sup_card']:checked").val() == "Yes"){
				$(".form2_sup_detail_01_container").show();
		form2_sup_has_sup_card = "1";
			}
			else {
				$(".form2_sup_detail_01_container").hide();
		form2_sup_has_sup_card = "";
			}

	
	$("input[name='form2_sup_card']").click(
		function() {
			if ($("input[name='form2_sup_card']:checked").val() == "Yes"){
				$(".form2_sup_detail_01_container").show();
					form2_sup_has_sup_card = "1";
			}
			else {
				$(".form2_sup_detail_01_container").hide();
					form2_sup_has_sup_card = "";
			}
			resizeSlider();
		}
	);
	
	// check user sup card address
	/*$(".form2_sup_address_container").hide();
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
    }); */
	
	// disable unit no. if not applicable
	/*$("#form2_sup_unit_no_na").click(function() {
		if($(this).attr("checked")) {
			$("#form2_sup_unit_no").attr("disabled", true).attr("value", "N.A").focus();
		} else {
			$("#form2_sup_unit_no").removeAttr("disabled").attr("value","").focus();					
		}
	});*/
	
	// check whether user wants to apply for funds transfer
	/*if ($("input[name='form2_apply_for_funds_transfer']").is(":checked")) {
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
		
	);*/
	
	// check whether user wants to apply for the e-Statement service
	/*var form2_personal_credit = "I do not want to apply for Personal Credit on approval of my Standard Chartered Credit Card.";

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
	);*/
	
	// check whether user wants to apply to link credit card to new personal credit account applied above
	//$(".form2_link_to_personal_credit_account_number_container").hide();
	//var form2_link_to_personal_credit_account = "I do not want to apply to link the Credit Card to my new Personal Credit Account applied above.";

	/*$("input[name='form2_link_to_personal_credit_account']").click(
		$('.coda-slider').height(1460);
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
	);*/
	
	// check whether user wants to apply to link the credit card to standard chartered savings / current account
	/*$(".form2_link_to_savings_current_account_number_container").hide();
	var form2_link_to_savings_current_account = "I do not want to apply to link the Credit Card to my Standard Chartered Savings / Current Account.";*/

	/*$("input[name='form2_link_to_savings_current_account']").click(
		$('.coda-slider').height(1460);		
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
	);*/
	
	// check whether user wants to apply for the e-Statement service
	//var form2_apply_e_statement_service = "I want to apply for the eStatement Service.";
	
	// check whether user wants to apply for standard chartered internet banking and phone banking
	//var form2_apply_for_internet_phone_banking = "I want to apply for Standard Chartered Online Banking and Phone Banking.";


// New
	$("input[name='form2_sup_first_name']").change(
		function() {
				$("#form2_sup_name_on_card").attr("value",($("input[name=form2_sup_first_name]").val() + " " + $("input[name=form2_sup_name]").val()));
		$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_name_on_card");
		}
	);
		
	$("input[name='form2_sup_name']").change(
		function() {
				$("#form2_sup_name_on_card").attr("value",($("input[name=form2_sup_first_name]").val() + " " + $("input[name=form2_sup_name]").val()));
		$("#form_new_customer_credit_cards_3").validate().element("#form2_sup_name_on_card");
		}
	);

		if ($("input[name='form2_pp_insurance']:checked").val() == "yes"){
			//$('.cciconfirmmessage').show();
			$('.form2_cc_cpc_container').show();
			$('.form2_cc_no_cpc_container').hide();
		} else {
			//$('.cciconfirmmessage').hide();
			$('.form2_cc_cpc_container').hide();
			$('.form2_cc_no_cpc_container').show();
		}
	
	$("input[name='form2_pp_insurance']").click(function() {
		if ($("input[name='form2_pp_insurance']:checked").val() == "yes"){
			//$('.cciconfirmmessage').show();
			$('.form2_cc_cpc_container').show();
			$('.form2_cc_no_cpc_container').hide();
		} else {
			//$('.cciconfirmmessage').hide();
			$('.form2_cc_cpc_container').hide();
			$('.form2_cc_no_cpc_container').show();
		}
		resizeSlider();
	});


	// form validation
	$("#form_new_customer_credit_cards_3").validate({
   		groups: {
            form2_31: "form2_sup_salutation form2_sup_first_name"
        },
  		rules: {
			form2_sup_card: { required: true, minlength: 1 },
			//form2_pp_insurance: { required: true, minlength: 1 },
			form2_sup_salutation: { required: ".form2_sup_detail_01_container :visible", minlength: 1 },
			//form2_sup_full_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_first_name: { required: ".form2_sup_detail_01_container :visible" },
			//form2_sup_middle_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_name: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_name_on_card: { required: ".form2_sup_detail_01_container :visible", minlength: 5, maxlength: 19 },
			form2_sup_gender: { required: ".form2_sup_detail_01_container :visible" },
			//form2_sup_nric_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() != "Foreigner" && "#form2_sup_card:checked"  }, minlength: 9, maxlength: 9 },
			//form2_sup_passport_number: { required: function(element) { return $("input[name='form2_sup_nationality']:checked").val() == "Foreigner" && "#form2_sup_card:checked" }, minlength: 5, maxlength: 16 },
			form2_sup_passport_number: { required: ".form2_sup_detail_01_container :visible", minlength: 5, maxlength: 16 },
			form2_sup_date_of_birth: { required: ".form2_sup_detail_01_container :visible" },
			form2_sup_gender: { required: ".form2_sup_detail_01_container :visible"}
			//form2_sup_relationship_to_applicant: { required: ".form2_sup_detail_01_container :visible", minlength: 1 },
			//form2_sup_address: { required: ".form2_sup_detail_01_container :visible", minlength: 1 },
			//form2_sup_block_no: { required: ".form2_sup_detail_01_container :visible" },
			//form2_sup_unit_no: { required: function(element) { return $("input[name='form2_sup_unit_no']:checked").val() != "N.A", "form2_sup_detail_01_container :visible" }, minlength: function(element) { if ($("#form2_sup_card").is(':checked')) { return 2 } else { return 0 }}, maxlength: 30 },
			//form2_sup_street_name: { required: "form2_sup_detail_01_container :visible" },
			//form2_sup_postal_code: { required: "form2_sup_detail_01_container :visible", number: true, minlength: 6, maxlength: 6, alphanumeric: true }
			/*form2_ft_account_holder_name: { required: "#form2_apply_for_funds_transfer:checked" },
			form2_ft_nric_passport: { required: "#form2_apply_for_funds_transfer:checked", minlength: 5, maxlength: 16 },
			form2_ft_bank_name: { required: "#form2_apply_for_funds_transfer:checked", minlength: 1 },
			form2_ft_transfer_to_account_type: { required: "#form2_apply_for_funds_transfer:checked", minlength: 1 },
			form2_ft_account_credit_card_number: { required: "#form2_apply_for_funds_transfer:checked", number: true,maxlength: 16,minlength:8  },
			form2_ft_amount_to_be_transferred: { required: "#form2_apply_for_funds_transfer:checked", number: true, min: 1000, max: 100000 },
			form2_link_to_personal_credit_account_number: { required: "#form2_link_to_personal_credit_account:checked", minlength: 10, maxlength: 10 },
			form2_link_to_savings_current_account_number: { required: "#form2_link_to_savings_current_account:checked", minlength: 10, maxlength: 10 }*/
  		},		
		messages: {
			form2_sup_card: { required: "Please confirm your selection." },
			//form2_pp_insurance: { required: "Please confirm your selection." },
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
			form2_sup_gender: { required : "Please select gender"}
			//form2_sup_relationship_to_applicant: { required: "Please select the relationship to applicant."	},
			//form2_sup_address: { required: "Please choose your address." }, 
			//form2_sup_block_no: { required: "Please enter block/house number." },
			//form2_sup_unit_no: { required: "Please enter unit number."	},
			//form2_sup_street_name: { required: "Please enter street name." },
			//form2_sup_postal_code: { required: "Please enter postal code." },
			/*form2_ft_account_holder_name: { required: "Please enter account name." },
			form2_ft_nric_passport: { required: "Please enter NRIC / Passport no. of account holder." },
			form2_ft_bank_name: { required: "Please select Bank." },
			form2_ft_transfer_to_account_type: { required: "Please select account type." },
			form2_ft_account_credit_card_number: { required: "Please enter account / credit card no." },
			form2_ft_amount_to_be_transferred: { required: "Please enter amount to be transferred" },
			form2_link_to_personal_credit_account_number: { required: "Please enter your savings / account number." },
			form2_link_to_savings_current_account_number: { required: "Please enter your savings / account number." }*/
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
			else if (element.attr("name") == "form2_pp_insurance")
       			error.insertAfter("#form2_pp_insurance_label_container");
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
				$(".form2_header_loan").hide();
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
					$(".form2_header_loan").hide();
					$(".form2_header_personal").hide();
					$(".form2_header_employment").hide();
					$(".form2_header_vas").hide();
					$(".form2_header_documents").show();
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
 	}, "Please upload the required documents to proceed with your cashone application.");

	
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
				$(".form2_doc_fax_container, .form2_doc_upload_msg").hide();
			} else {
				$(".form2_doc_upload_container").hide();
				$(".form2_doc_fax_container, .form2_doc_upload_msg").show();
			}
			$('#iras_container').show();
			resizeSlider();
		}
	);

	// form validation
	$("#form_new_customer_credit_cards_4").validate({
  		rules: {
			form2_doc_upload: { required: true, minlength: 1, validDocUploadNumber: true  }
  		},		
		messages: {
			form2_doc_upload: { required: "Please select the way to submit the documents." }
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



	$("#form2_multifileupload").click(
		function() {
			alert ("Upload....????");
			multiFileUploads();
		}
	);

	
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
				$(".form2_header_loan").hide();
				$(".form2_header_personal").hide();
				$(".form2_header_employment").hide();
				$(".form2_header_vas").show();
				$(".form2_header_documents").hide();
				$(".form2_header_review").hide();
		}
	);
	
	// form submission
	$("#check_new_credit_card_4").click(
		function() {
			//alert ("hi");
			form_new_customer_credit_cards_4_display_all(); // show all tab content
			if (($("#form_new_customer_credit_cards_4").valid())) {
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
							$('.uploadfileredidgroup').val('');
							$("#lbl_form2_doc_upload").hide();
							executeUpload();
							preview_form2();
							$.scrollTo(0,500,{onAfter:function() {
								//$("#new_credit_card .tabs li").removeClass("selected");
								$("#new_credit_card .bc6").addClass("selected");
								$("#new_credit_card .breadcrumb").removeClass("step_4").addClass("step_5");
								$("#coda-slider-2 .panel06").addClass("selected-panel");
								$("#coda-slider-2 .panel04").removeClass("selected-panel");
								$(".form2_header_loan").hide();
								$(".form2_header_personal").hide();
								$(".form2_header_employment").hide();
								$(".form2_header_vas").hide();
								$(".form2_header_documents").hide();
								$(".form2_header_review").show();			
								$("#form2_upload_next_back .next").click();
							}});
						}
						
					} else {
						$('.uploadfileredidgroup').val('');
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
						$(".form2_header_loan").hide();
						$(".form2_header_personal").hide();
						$(".form2_header_employment").hide();
						$(".form2_header_vas").hide();
						$(".form2_header_documents").hide();
						$(".form2_header_review").show();			
						$("#form2_upload_next_back .next").click();
					}});
				}
				//$("#lbl_form2_doc_upload").show();

			}
			resizeSlider();
			return false;
		}
	);
	
	
	/************************** step 5 ***************************/
		
	// form validation
	$("#form_new_customer_credit_cards_5").validate({
  		rules: {
  		},		
		messages: {
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
            form2_101: "form2_salutation form2_first_name",
            //form2_102: "form2_areacode_mobile form2_mobile",
            //form2_61: "form2_areacode_residential form2_residential",
            //form2_62: "form2_contact_person_areacode_contact_number form2_contact_person_contact_number",
            form2_63: "form2_overseas_contact_country_code form2_overseas_contact_area_code form2_overseas_contact_tel_no"
            //form2_64: "form2_areacode_office form2_office"
        },
  		rules: {
			form2_salutation: { required: true, minlength: 1 },
			form2_first_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			//form2_middle_name: { minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			//form2_areacode_mobile: { required: true, number: true, minlength: 1, maxlength: 3 },
			form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			form2_email_address: { required: true, email: true, maxlength: 70 },
			//form2_agree_tc: { required: false }
			//form2_salutation: { required: true, minlength: 1 },
			//form2_name: { required: true, minlength: 2, maxlength: 30, alphanumeric: true }, 
			form2_name_on_card: { required: true, minlength: 5, maxlength: 19 },
			form2_nric_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Foreigner" }, minlength: 9, maxlength: 9 },
			form2_passport_number: { required: function(element) { return $("input[name='form2_nationality']:checked").val() != "Singaporean" }, minlength: 5, maxlength: 16 },
			//form2_previous_passport_number: { minlength: 5, maxlength: 16 },
			form2_date_of_birth: { required: true },
			form2_gender: {required: function(element) { return $("input[name='form2_gender']:checked").val() == undefined}},
			form2_marital_status: { required: true, minlength: 1 },
			//form2_number_of_dependents: { required: true, number: true, min: 0, maxlength: 2 },
			form2_education_status: { required: true, minlength: 1 },
	// --- contact info
			//form2_mail_to_be_sent_to: { required: true, minlength: 1 },
			//form2_contact_block_number: { required: true, alphanumericwith2spec: true },
			//form2_contact_unit_number: { required: function(element) { return $("input[name='form2_contact_unit_number']:checked").val() != "N.A" }, minlength: 2, maxlength: 30 },
			//form2_contact_street_name: { required: true	},
			//form2_contact_building_name: { required: function(element) { return $("#form2_contact_building_name").val() != ""}, minlength: 2 },
			//form2_contact_postal_code: { required: true, minlength: 3, maxlength: 13, alphanumeric: true },
			/*
			form2_residential: { required: '#form2_office:blank', minlength: 8, maxlength: 8, number: true },
			form2_office: { required: '#form2_residential:blank', minlength: 8, maxlength: 8, number: true },
			*/
			//form2_areacode_residential: { required: true, number: true },
			form2_residential: { required: true, minlength: 8, maxlength: 8, number: true },
			//form2_mobile: { required: true, number: true, minlength: 8, maxlength: 8 },
			//form2_email_address: { required: true, email: true, maxlength: 70 },
			form2_name_of_relative_not_living_with_you: { required: true },
			form2_relationship_to_applicant: { required: true, minlength: 1 },
			//form2_contact_person_areacode_contact_number: { required: true, number: true },
			//form2_contact_person_contact_number: { required: true, ctycode: true, minlength: 5, maxlength: 30 },
			form2_contact_person_contact_number: { required: true, number: true, minlength: 5, maxlength: 30 },
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
			//form2_length_of_stay_at_address_years: { required: true, number: true, min: 0, max: 60 },
			//form2_length_of_stay_at_address_months: { required: true, number: true, min: 0, max: 11 },
			form2_type_of_residence: { required: true, minlength: 1 },
			form2_residential_ownership: { required: true, minlength: 1 }
  		},		
		messages: {
			form2_salutation: { required: "Please select your title." },
			form2_first_name: { required: "Please enter your first name."},
			form2_name: { required: "Please enter your last name."},
			//form2_areacode_mobile: { required: "Please enter your mobile phone number." },
			form2_mobile: { required: "Please enter your mobile phone number." },
			form2_email_address: { required: "Please enter your email address."	},
			//form2_agree_tc: { required: "Please read and agree to the terms and conditions by checking the check box." }
			//form2_salutation: { required: "Please enter your salutation / title." },
			//form2_name: { required: "Please enter your name."},
			form2_name_on_card: { required: "Please enter the name that you want to be displayed on your card.", minlength: "Please enter a valid card name (min 5 characters).", maxlength: "Please enter a valid card name (max 19 characters)." },
			form2_nric_number: { required: "Please enter your NRIC." },
			form2_passport_number: { required: "Please enter your passport number" },
			//form2_previous_passport_number: { required: "Please enter your previous Passport no." },
			form2_date_of_birth: { required: "Please enter your date of birth." },
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
			form2_residential_ownership: { required: "Please select the ownership status of your home." }
		},
		onfocusout: false,
		onkeyup: false,
		onclick: false,
//		errorContainer: "#errorMessageBox_step1",
		errorElement: "div",
        wrapper: "div class='error_box'",
        errorPlacement: function(error, element) {
     		if (element.attr("name") == "form2_date_of_birth")
       			error.insertAfter("#lbl_form2_date_of_birth");
			else if (element.attr("name") == "form2_gender")
       			error.insertAfter("#genderRadios");
            // else if (element.attr("name") == "form2_ethnic_type")
       		//	error.insertAfter("#ethnicRadio");
	// from tab 4 -- contact info
 			else if (element.attr("name") == "form2_contact_unit_number")
       			error.insertAfter("#lbl_form2_contact_unit_number_container");
 			//else if ( element.is(":radio") )
              //   error.appendTo( element.parent().next().next() );
            //else if ( element.is(":checkbox") )
              //   error.appendTo ( element.next() );
             else if (element.attr("name") == "form2_unit_number")
       			error.insertAfter("#lbl_form2_unit_number_container");
             else if (element.attr("name") == "form2_mail_to_be_sent_to")
       			error.insertAfter("#mailingRadio");
 			//else if (element.attr("name") == "form2_years_in_service")
       		//	error.insertAfter("#lbl_form2_years_in_service");
			//else if (element.attr("name") == "form2_months_in_service")
       		//	error.insertAfter("#lbl_form2_months_in_service");
			else if (element.attr("name") == "form2_employer_unit_number")
       			error.insertAfter("#lbl_form2_employer_unit_number_container");
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

	$("#from2_main_contact_save").click(
		function() {
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

	/******** loan preview **********/
	
	$("#from2_loan_edit").click(
		function() {
			$("#pre_form2_loan_edit_container").show();
			$("#pre_form2_loan_preview_container").hide();
			$(".form2_loan_hide_container").hide();
			$("#form2_loan_container form div").removeClass("tab_content");

			var form2_loan_customer_radio_value = $("input[name='form2_loan_customer']:checked").val();	
			var form2_deposit_bank_acc_type_radio_value = $("input[name='form2_deposit_bank_acc_type']:checked").val();	

			$('#form2_loan_container').appendTo('#pre_form2_loan_edit_content_container');
			$("#coda-slider-2 .panel-container").css("margin-left","-3460px");

			$('input:radio[name="form2_loan_customer"]').filter('[value="' + form2_loan_customer_radio_value + '"]').attr("checked", true);
			$('input:radio[name="form2_deposit_bank_acc_type"]').filter('[value="' + form2_deposit_bank_acc_type_radio_value + '"]').attr("checked", true);

			resizeSlider();
			clonefields( "pre_form2_loan_edit_content_container" );
			return false;
		}
	);

	$("#from2_loan_cancel").click(
		function() {
			$("#pre_form2_loan_edit_container").hide();
			$("#pre_form2_loan_preview_container").show();
			resizeSlider();
			restorefields( "pre_form2_loan_edit_content_container" );
			resetCancelFields( "pre_form2_loan_edit_content_container" );
			return false;
		}
	);

	$("#from2_loanl_save").click(
		function() {
			if (($("#form_new_customer_credit_cards_0").valid())) {
				preview_form2();
				$("#pre_form2_loan_preview_container .tab_content").addClass("yellow_box_no_padding");
				$("#pre_form2_loan_edit_container").hide();
				$("#pre_form2_loan_preview_container").show();
			}
			resizeSlider();
			resetCancelFields( "pre_form2_loan_edit_content_container" );
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
 			return false;
		}
	);
	
	/******** supp card preview **********/
	
	$("#from2_supp_card_edit").click(
		function() {
			$("#pre_form2_supp_card_edit_container").show();
			$("#pre_form2_supp_card_preview_container").hide();

			$('#form2_supp_card_container').appendTo('#pre_form2_supp_card_edit_content_container');

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

	/******** T & C **********/
	
	$('#declarationmsg').scroll(function() {
		if (  $('#declarationmsg').scrollTop() > ($('#declarationmsg > .inner').height() -  $('#declarationmsg').height() - 10) ) {
		  // We're at the bottom!
			$('#form2_declaration_help').hide();
			$('#form2_declaration_control').show();
			resizeSlider();
		}
	});

	/******** preview generation **********/
	
	function preview_form2(){
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
		var form2_overseas_address = $("#form2_overseas_address").val();
		var form2_overseas_contact_country_code = $("#form2_overseas_contact_country_code").val();
		var form2_overseas_contact_area_code = $("#form2_overseas_contact_area_code").val();
		var form2_overseas_contact_tel_no = $("#form2_overseas_contact_tel_no").val();
		var form2_length_of_stay_at_address_years = $("#form2_length_of_stay_at_address_years option:selected").text() + " Year(s) ";
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
		var form2_years_in_service = $("#form2_years_in_service option:selected").text() + " Year(s) ";
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
		/*var form2_sup_salutation = $("#form2_sup_salutation :selected").text();
		var form2_sup_full_name = $("#form2_sup_full_name").val();
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
		var form2_sup_postal_code = $("#form2_sup_postal_code").val();*/
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
		/*$("#pre_form2_sup_card").html(form2_sup_card);
		$("#pre_form2_sup_salutation").html(form2_sup_salutation);
		$("#pre_form2_sup_full_name").html(form2_sup_full_name);
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
		$("#pre_form2_apply_for_internet_phone_banking").html(form2_apply_for_internet_phone_banking);*/

// Loan Previews
		var form2_loan_customer = $("input[name='form2_loan_customer']:checked").next().text();
		$("#pre_form2_loan_customer").html(form2_loan_customer);

		var form2_loan_my_income = $("#form2_loan_my_income").val();
		$("#pre_form2_loan_my_income").html(form2_loan_my_income);

		var form2_loan_amount_required = $("#form2_loan_amount_required").val();
		$("#pre_form2_loan_amount_required").html(form2_loan_amount_required);

		var form2_loan_tenure = $("#form2_loan_tenure :selected").text();
		$("#pre_form2_loan_tenure").html(form2_loan_tenure);

		var form2_deposit_bank_acc_type = $("input[name='form2_deposit_bank_acc_type']:checked").next().text();
		$("#pre_form2_deposit_bank_acc_type").html(form2_deposit_bank_acc_type);

		var form2_cheque_acc_no = $("#form2_cheque_acc_no").val();
		$("#pre_form2_cheque_acc_no").html(form2_cheque_acc_no);

		var form2_issuing_bank = $("#form2_issuing_bank").val();
		$("#pre_form2_issuing_bank").html(form2_issuing_bank);

		var form2_issuing_branch = $("#form2_issuing_branch").val();
		$("#pre_form2_issuing_branch").html(form2_issuing_branch);

		var acc_digits_label = $("#acc_digits_label").val();
		$("#pre_acc_digits_label").html(acc_digits_label);

		var form2_acc_3digits = $("#form2_acc_3digits").val();
		$("#pre_form2_acc_3digits").html(form2_acc_3digits);

		var form2_uob_acc_3digits = $("#form2_uob_acc_3digits :selected").text();
		$("#pre_form2_uob_acc_3digits").html(form2_uob_acc_3digits);

		var form2_other_bank_acc_no = $("#form2_other_bank_acc_no").val();
		$("#pre_form2_other_bank_acc_no").html(form2_other_bank_acc_no);

		var form2_acc_holder_name = $("#form2_acc_holder_name").val();
		$("#pre_form2_acc_holder_name").html(form2_acc_holder_name);
		
		//New New New
		if ($("#form2_upload_file_list_preview").val() == "" ) {
			var form2_upload_file_list = "None";
		} else {
			var form2_upload_file_list = $("#form2_upload_file_list_preview").val();
		}
		$("#pre_form2_upload_file_list").html(form2_upload_file_list);
		
		
		
		
	} // end of preview_form2
	
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
			form2_declaration: { required: true, minlength: 1}
  		},		
		messages: {
  			form2_declaration: { required: "Please read and agree to the terms and conditions before submitting the application." }
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
 			else
                error.appendTo( element.parent().next() );
   		}
	});
	
	// form submission
	$("#check_new_credit_card_6").click(
		function() {
			
			$('.error_box').hide();
			if ( !$("#form_new_customer_credit_cards_submit").valid() ) {
				resizeSlider();
				return false;
			}
		
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
			$('#spinning-dialog').dialog('open');
			resetUiStyle();
			$('#spinning-dialog .wrap-img h2').empty().append('Please wait and do not close your browser while we are processing your request.');
			$('#spinning-dialog .wrap-img p').empty().append('This may take some time. Thank you for your patience.');
			$('#spinning-dialog .buttons-pop').empty();
			
			window.onbeforeunload = null;
			//$("#form2_xml").hide();
			//$("#new_credit_card").hide();
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
					async: 'false'
					});
				setTimeout(function(){
					$.post("/nfs-ofp/ofpservice.htm", { formXML :  resultXML }, function(responseText, statusText){
						if(statusText == "success") {
							var returnCode = "";
							var returnID = "";

							var regRefID = new RegExp("</REFID>");
							returnID = responseText.substring(13, responseText.search(regRefID));
							
							var regStatus1 = new RegExp("<STATUS>"); 
							var regStatus2 = new RegExp("</STATUS>");
							returnCode = responseText.substring(responseText.search(regStatus1)+8, responseText.search(regStatus2));
							
							if(returnID != null && returnID != "" ) {
								//$(".newcard_receipt").append('<span>'+returnText+'</span><br />');
								$('#FormRefID').val(returnID+"|"+returnCode);
								$('#FormRefID_AIP').val(returnID);
								//sendscode(returnText);
								generateForm();
								//display_new_credit_card_thanks_page();
								//scroll to top
								//window.scrollTo(0,0);
								
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
	