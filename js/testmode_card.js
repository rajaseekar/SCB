$(document).ready(function(){	
	var testmode=jQuery.query.get("testmode");
	if(testmode=="yes") prefill_form();		
});

function prefill_form() {
$("#form2_salutation").val("Mr");
$("#form2_full_name").val("Terence Liu");
$("#form2_first_name").val("Terence");

$("#form2_name").val("Liu");
$("#form2_mobile").val("99887766");
$("#form2_areacode_mobile").val("012");
$("#form2_areacode_residential").val("012");
$("#form2_email_address").val("whliu98@gmail.com");
$("#form2_note_nationality").val("Non Malaysian");
$("#form2_note_nationality_ic").val("681004011111");
$("#form2_note_nationality_passport").val("S12345678");
$("#form2_nationality_other_specify").val("AT");
$("#form2_nric_number").val("S0000003E");
$("#form2_promotion_code").val("Web sites");
$("#form2_town").val("ABC");
$("#form2_state").val("JOHOR");
$("#form2_length_of_stay_at_address_years").val("10");
$("#form2_branch").val("729");
$("#form2_residential_ownership").val("Owned");
$("#form2_type_of_residence").val("Apartment");
$("#form2_loan_amount").val("125000");
$("#form2_min_loan_amount").val("15000");
$("#form2_tenure").val("12 months");
$("#form2_id_type").val("police");
$("#form2_date_of_birth").val("01/01/1955");
$("#form2_gender_male").attr('checked',true);
$("#form2_marital_status").val("Married");
$("#form2_education_status").val("Degree");
$("#form2_residential").val("34567890");
$("#form2_unit_number").val("33");
$("#form2_street_name").val("Nathan Road");
$("#form2_postal_code").val("82500");
$('#form2_usresident_no').attr('checked',true);
$("label[for='form2_usresident_no']").addClass('checked');
$('#form2_uscitizen_no').attr('checked',true);
$("label[for='form2_uscitizen_no']").addClass('checked');
$('#form2_greencard_no').attr('checked',true);
$("label[for='form2_greencard_no']").addClass('checked');
$("#form2_birth_country").val("Hong Kong");
$('#form2_consent').attr('checked',true);			
$("label[for='form2_consent']").addClass('checked');

$('#form2_nature_of_employment').val("Unemployed");
$('#form2_name_of_employer').val("SCB");
$('#SoFselect').val("Salary");
$('#PoAselect').val("Savings");
$('#beneficialOwner').attr('checked',true);
$('#form2_years_in_service').val("1-2");

$("#form2_occupation").val("Service");
$("#form2_job_title").val("01");
$("#form2_length_of_stay_at_address_years").val("1-2");
$("#form2_block_number").val("1");
$("#form2_residential_ownership").val("Rented");
$("#form2_type_of_residence").val("HDB");

$("#form2_name_of_relative_not_living_with_you").val("Michael");
$("#form2_relationship_to_applicant").val("Father");
$("#form2_contact_person_contact_number").val("32141234");

$("#form2_years_in_service").val("1-2");


$("#form2_employer_block_number").val("1");
$("#form2_employer_unit_number").val("11");


$("#form2_office").val("32145678");
$("#form2_areacode_office").val("012");
$("#form2_employer_street_name").val("NATHAN ROAD");
$("#form2_employer_postal_code").val("82500");
$("#form2_employer_town").val("YYTTEE");
$("#form2_employer_state").val("JOHOR");

$("#form2_loan_my_income").val("1000000");
$('#form2_source_income_salary').attr('checked',true);
$("#form2_creditcard_expenditure").val("1000");
$("#form2_variable_income").val("5000");
$("#form2_fin_commitment").val("100");
$("#form2_scb_card_no").val("4123412341234123");			
}
