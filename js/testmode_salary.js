$(document).ready(function(){	
	var testmode=jQuery.query.get("testmode");
	if(testmode=="yes") prefill_form();		
});
function prefill_form() {
$("#form2_salutation").val("Mr");
$("#form2_first_name").val("Terence");
$("#form2_name").val("Liu");
$("#form2_mobile").val("99887766");
$("#form2_email_address").val("whliu98@gmail.com");

$("#form2_nric_number").val("S0000003E");
$("#form2_date_of_birth").val("01/01/1955");
$("#form2_gender_male").attr('checked',true);
$("#form2_marital_status").val("Married");
$("#form2_education_status").val("Diploma");
$("#form2_residential").val("34567890");
$("#form2_block_number").val("111");
$("#form2_unit_number").val("#33-33");
$("#form2_employer_unit_number").val("#33-33");
$("#form2_street_name").val("Nathan Road");
$("#form2_postal_code").val("238858");
$("#form2_employer_postal_code").val("238858");

$('#form2_usresident_no').attr('checked',true);
$('#form2_uscitizen_no').attr('checked',true);
$('#form2_greencard_no').attr('checked',true);
$("#form2_birth_country").val("Hong Kong");
$('#form2_consent').attr('checked',true);			
$('#form2_nature_of_employment').val("Unemployed");
$('#form2_number_of_dependents').val("1");
$('#form2_length_of_stay_at_address_years').val("1");			
$('#form2_length_of_stay_at_address_months').val("1");

$('#form2_type_of_residence').val("HDB");
$('#form2_residential_ownership').val("Owned");

$('#form2_name_of_employer').val("SCB");
$('#form2_occupation').val("MNC");
$('#form2_job_title').val("Executive/Manager");
$('#form2_years_in_service').val("1");			
$('#form2_months_in_service').val("0");
$("#form2_annual_income").val("1000011");
}




