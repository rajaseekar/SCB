function generateXml() {
	$("input:text").each(function() {
		var tmpName = $.trim( $(this).val() );
		tmpName = tmpName.replace(/\s+/g,' ');
		$(this).val( tmpName );
	});
	
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
	if ($("#form2_sup_gender_male").is(':checked') ) {
		check_sup_gender = "1";	
	}
	else {
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
	if ($("#form2_sup_salutation").val() == "Mr") {
		sup_salutation = "1";	
	}
	else if ($("#form2_sup_salutation").val() == "Miss") {
		sup_salutation = "2";	
	} 
	else if ($("#form2_sup_salutation").val() == "Mrs") {
		sup_salutation = "2";	
	}
	else if ($("#form2_sup_salutation").val() == "Mdm") {
		sup_salutation = "2";	
	}
	else if ($("#form2_sup_salutation").val() == "Dr") {
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
			if (check_date_of_birth.charAt(3) == " ") { // 19/ 8/1969
				check_date_of_birth = check_date_of_birth.substr(0,3) + "0" + check_date_of_birth.substr(4,6);
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
	
	/* disable supp card
	var check_sup_date_of_birth = $("#form2_sup_date_of_birth").val();
	var sup_date_of_birth_stripped;
	
	function strip_slashes_sup_dob() {            
		check_sup_date_of_birth = check_sup_date_of_birth.replace("/", "");
		if(check_sup_date_of_birth.indexOf("/") != -1) {
			strip_slashes_sup_dob();
			sup_date_of_birth_stripped = check_sup_date_of_birth;
		}
	}
	
	strip_slashes_sup_dob();
	*/
	
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

	commonXML=commonXML+"\t\t\t<per-title>"+salutation.toUpperCase()+"</per-title>\n";
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

	if( $("input[name='form2_nationality']:checked").val() != "Singaporean" && $('#form2_employ_pass_type_p1p2').is(':checked') ) {
    	commonXML=commonXML+"\t\t\t<per-mobph>Q</per-mobph>\n";
	} else if( $("input[name='form2_nationality']:checked").val() != "Singaporean" && $('#form2_employ_pass_type_s').is(':checked') ) {
    	commonXML=commonXML+"\t\t\t<per-mobph>S</per-mobph>\n";
	} else {
    	commonXML=commonXML+"\t\t\t<per-mobph>0</per-mobph>\n";
	}
	
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
		commonXML=commonXML+"\t\t\t<emp-incomeAnnual>36000</emp-incomeAnnual>\n"; 
	}*/
	commonXML=commonXML+"\t\t\t<emp-incomeAnnual>"+$("#form2_loan_my_income").val().toUpperCase()+"</emp-incomeAnnual>\n";
	
	//// hidden the whole business address section
	commonXML=commonXML+"\t\t\t<emp-officeAddress><![CDATA["+em_add.toUpperCase()+" "+em_add_a.toUpperCase()+"]]></emp-officeAddress>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress1><![CDATA["+em_add1.toUpperCase()+"]]></emp-officeAddress1>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress2><![CDATA["+em_add2.toUpperCase()+"]]></emp-officeAddress2>\n";
	commonXML=commonXML+"\t\t\t<emp-officeAddress3><![CDATA["+address3_code_emp.toUpperCase()+"]]></emp-officeAddress3>\n";
	commonXML=commonXML+"\t\t\t<emp-officeZipCode><![CDATA["+zip_code_emp.toUpperCase()+"]]></emp-officeZipCode>\n";
	/* 
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
	
	/*
	if( $('#form2_sup_card_yes').is(':checked') ){
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
	}
	else{
		*/
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
	//}
	
	commonXML=commonXML+"\t\t\t<agencyNo>"+loan_amount_required.toUpperCase()+"</agencyNo>\n";

	for(var i=1, form2_pdpa; i < 11; i++) {
		form2_pdpa="<Blank>";
		if( "YesNo".indexOf($("input[name='form2_pdpa_q"+i+"']:checked").val()) >= 0 ) {
			form2_pdpa=$("input[name='form2_pdpa_q"+i+"']:checked").val().substr(0,1);
		}
		if( $.trim($("#pre_form2_pdpa_q"+i).parent().prev().html()) == "" ) {
			form2_pdpa="";
		}
		commonXML=commonXML+"\t\t\t<form2_pdpa_q"+i+"><![CDATA["+form2_pdpa+"]]></form2_pdpa_q"+i+">\n";
	}		
	
	var hiddenXML = '';
	hiddenXML=hiddenXML+"\t\t\t<acqCode>SP</acqCode>\n";
	
	// add dynamic sub-channel code
	subChanCode = jQuery.query.get("subChanCode")+'';
	if( subChanCode != "" && subChanCode != "true" && subChanCode != "undefined" ) {
		//subChanCode = subChanCode.substr(0, 4);
		hiddenXML=hiddenXML+"\t\t\t<subChanCode>"+subChanCode+"</subChanCode>\n";
	} else {
		hiddenXML=hiddenXML+"\t\t\t<subChanCode>IB03</subChanCode>\n";
	}
	// end dynamic sub-channel code
	
	hiddenXML=hiddenXML+"\t\t\t<sourcingId>1889559</sourcingId>\n";
	
	//hiddenXML=hiddenXML+"\t\t\t<staffId>"+$("#cpfLinkClicked").val()+"</staffId>\n";
	// original empty staffId element
	//hiddenXML=hiddenXML+"\t\t\t<staffId></staffId>\n";
	// get80 start
	var staffId = jQuery.query.get("dsaStaffId")+"";
	if( get80id ) {
		hiddenXML=hiddenXML+"\t\t\t<staffId>"+get80id+"</staffId>\n";
	} else {
		if( staffId != "" && staffId.length > 7 ) {
			staffId.substr(0, 7);
		}
		hiddenXML=hiddenXML+"\t\t\t<staffId>"+staffId+"</staffId>\n";
	}
	// get80 end
	
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
	var uploadfile7refid = $('#uploadfile7refid').val().replace(/\s+/g,'');
	hiddenXML=hiddenXML+"\t\t\t<attachment type='"+checkDocType( uploadfile7refid )+"'>"+uploadfile7refid+"</attachment>\n";
	hiddenXML=hiddenXML+"\t\t\t</attchments>\n";
	
	// KORN - add back missing fields
	var addXML = '';
	addXML=addXML+"\t\t\t<per-previousPassportNumber></per-previousPassportNumber>\n";
	if($("input[name="+formname+"_nationality]:checked").val()=='Foreigner') {
		addXML=addXML+"\t\t\t<res-overseaAddress><![CDATA["+$("#"+formname+"_overseas_address").val().toUpperCase()+' '+$("#"+formname+"_overseas_address_1").val().toUpperCase()+"]]></res-overseaAddress>\n";
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
	addXML=addXML+"\t\t\t<loan-amountRequired></loan-amountRequired>\n";
	addXML=addXML+"\t\t\t<loan-tenure></loan-tenure>\n";
	addXML=addXML+"\t\t\t<loan-depositBankAcc></loan-depositBankAcc>\n";
	addXML=addXML+"\t\t\t<loan-issuingBank></loan-issuingBank>\n";
	addXML=addXML+"\t\t\t<loan-issuingBankBranchCode></loan-issuingBankBranchCode>\n";
	addXML=addXML+"\t\t\t<loan-accHolderName></loan-accHolderName>\n";
	addXML=addXML+"\t\t\t<loan-accHolderNricPassport></loan-accHolderNricPassport>\n";
	// KORN
    addXML=addXML+"\t\t\t<staffContactNo></staffContactNo>\n";
	addXML=addXML+"\t\t\t<referralId></referralId>\n";
	addXML=addXML+"\t\t\t<closingId>1889559</closingId>\n";
	addXML=addXML+"\t\t\t<prodType2></prodType2>\n";
	addXML=addXML+"\t\t\t<prodType3></prodType3>\n";
	addXML=addXML+"\t\t\t<prodType4></prodType4>\n";
	addXML=addXML+"\t\t\t<prodType5></prodType5>\n";
	
	addXML=addXML+"\t\t\t<clubType1></clubType1>\n";
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
	
	//if( $('#form2_cc_insurance_yes').is(':checked') ) {
	//	addXML=addXML+"\t\t\t<inscode>B</inscode>\n";
	//} else {
	//	addXML=addXML+"\t\t\t<inscode></inscode>\n";
	//}
	
    addXML=addXML+"\t\t\t<existingCust></existingCust>\n";
	addXML=addXML+"\t\t\t<res-typeOfResidence></res-typeOfResidence>\n";
	
	// Filenet implementation
	addXML=addXML+"\t\t\t<filenetProduct>Credit Card</filenetProduct>\n";
	addXML=addXML+"\t\t\t<filenetSubProduct>STP Credit Card Account Opening</filenetSubProduct>\n";		
	addXML=addXML+"\t\t\t<filenetCity>SG</filenetCity>\n";
	addXML=addXML+"\t\t\t<filenetCountry>SG</filenetCountry>\n";
	addXML=addXML+"\t\t\t<form2_name><![CDATA["+clientFullName+"]]></form2_name>\n";
	addXML=addXML+"\t\t\t<filenetIdNumber><![CDATA["+identityNumber+"]]></filenetIdNumber>\n";

	endXML=endXML+"\t\t</instance>\n";
	endXML=endXML+"\t</model>\n";
	endXML=endXML+"</eform>\n";
	
	// check which card is selected and generate it's product number
	//var online50Found = $("#form2_promotionCode").val().match(/online50/gi);
	var online50Found = $("#form2_promotionCode").val().match(/online50/gi);
	var URType = jQuery.query.get("URType");
	if ($("#card_1").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card1_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "PVCU0001" ) {
			card1_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>1100</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "PVCU0005" ) {
			card1_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>1101</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "PVCU0006" ) {
			card1_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>1102</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else {
			card1_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		}
		/*
		card2_XML=startXML+"\t\t\t<prodType>00201</prodType>\n"+commonXML+"\t\t\t<promoCode>5149</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card2_XML;
		*/
	}
	
	if ($("#card_2").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card2_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card2_XML;
		} else if( URType == "PMCU0001" ) {
			card1_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>1100</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "PMCU0005" ) {
			card1_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>1101</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "PMCU0006" ) {
			card1_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>1102</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else {
			card2_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card2_XML;
		}
		/*
		card1_XML=startXML+"\t\t\t<prodType>10001</prodType>\n"+commonXML+"\t\t\t<promoCode>5149</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card1_XML;
		*/
	}
	
	if ($("#card_3").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card3_XML=startXML+"\t\t\t<prodType>07601</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card3_XML;
		} else {
			card3_XML=startXML+"\t\t\t<prodType>07601</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card3_XML;
		}
		/*
		card3_XML=startXML+"\t\t\t<prodType>07601</prodType>\n"+commonXML+"\t\t\t<promoCode>5150</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card3_XML;
		*/
	}
	
	if ($("#card_4").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card4_XML=startXML+"\t\t\t<prodType>05601</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card4_XML;
		} else {
			card4_XML=startXML+"\t\t\t<prodType>05601</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card4_XML;
		}
		/*
		card4_XML=startXML+"\t\t\t<prodType>05601</prodType>\n"+commonXML+"\t\t\t<promoCode>5151</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card4_XML;
		*/
		
	}
	if ($("#card_5").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card5_XML=startXML+"\t\t\t<prodType>05401</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card5_XML;
		} else {
			card5_XML=startXML+"\t\t\t<prodType>05401</prodType>\n"+commonXML+"\t\t\t<promoCode>9131</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card5_XML;
		}
		/*
		card5_XML=startXML+"\t\t\t<prodType>05401</prodType>\n"+commonXML+"\t\t\t<promoCode>5219</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card5_XML;
		*/
	}
	if ($("#card_6").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>9132</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else {
			card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>9132</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
		/*
		card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card6_XML;
		*/
	}
	if ($("#card_7").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			//card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>9132</promoCode>\n"+hiddenXML+addXML+endXML;
			card6_XML=startXML+"\t\t\t<prodType>16901</prodType>\n"+commonXML+"\t\t\t<promoCode>9133</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else {
			//card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>9132</promoCode>\n"+hiddenXML+addXML+endXML;
			card6_XML=startXML+"\t\t\t<prodType>16901</prodType>\n"+commonXML+"\t\t\t<promoCode>9133</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
		/*
		card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card6_XML;
		*/
	}
	if ($("#card_9").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>9132</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else {
			card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
		/*
		card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card6_XML;
		*/
	}
	if ($("#card_10").attr("checked")) {
		if( online50Found != null || get80id != '' ) {
			card6_XML=startXML+"\t\t\t<prodType>16001</prodType>\n"+commonXML+"\t\t\t<promoCode>8001</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else if( URType == "WMCU0001" ) {
			card1_XML=startXML+"\t\t\t<prodType>16001</prodType>\n"+commonXML+"\t\t\t<promoCode>1112</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "WMCU0004" ) {
			card1_XML=startXML+"\t\t\t<prodType>16001</prodType>\n"+commonXML+"\t\t\t<promoCode>1113</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "WMCU0005" ) {
			card1_XML=startXML+"\t\t\t<prodType>16001</prodType>\n"+commonXML+"\t\t\t<promoCode>1114</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else {
			card6_XML=startXML+"\t\t\t<prodType>16001</prodType>\n"+commonXML+"\t\t\t<promoCode>8001</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
		/*
		card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card6_XML;
		*/
	}
	var TGRType = jQuery.query.get("TGRType");
	if(TGRType.indexOf("#") != -1) { 
        TGRType = TGRType.substring(0, TGRType.length - 1);
    }
	if ($("#card_11").attr("checked")) {
		if( TGRType == "UR" ) {
			card6_XML=startXML+"\t\t\t<prodType>11401</prodType>\n"+commonXML+"\t\t\t<promoCode>6103</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else if( TGRType == "URR" ) {
			card6_XML=startXML+"\t\t\t<prodType>11401</prodType>\n"+commonXML+"\t\t\t<promoCode>6101</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else {
			card6_XML=startXML+"\t\t\t<prodType>11401</prodType>\n"+commonXML+"\t\t\t<promoCode>6102</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
		/*
		card6_XML=startXML+"\t\t\t<prodType>12301</prodType>\n"+commonXML+"\t\t\t<promoCode>6040</promoCode>\n"+hiddenXML+addXML+endXML;
		finalXML=finalXML+card6_XML;
		*/
	}
	
	if ( jQuery.query.get("Cardtype") == 'SG_SPC' ) {
		var subChanCode = jQuery.query.get("subChanCode")+'';
		if( subChanCode != '' && subChanCode != "true" && subChanCode != "undefined" && subChanCode == 'IB22' ) {
			card6_XML=startXML+"\t\t\t<prodType>06001</prodType>\n"+commonXML+"\t\t\t<promoCode>6302</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		} else if( URType == "SPCU0001" ) {
			card1_XML=startXML+"\t\t\t<prodType>06001</prodType>\n"+commonXML+"\t\t\t<promoCode>1106</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "SPCU0004" ) {
			card1_XML=startXML+"\t\t\t<prodType>06001</prodType>\n"+commonXML+"\t\t\t<promoCode>1107</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else if( URType == "SPCU0005" ) {
			card1_XML=startXML+"\t\t\t<prodType>06001</prodType>\n"+commonXML+"\t\t\t<promoCode>1108</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card1_XML;
		} else {
			card6_XML=startXML+"\t\t\t<prodType>06001</prodType>\n"+commonXML+"\t\t\t<promoCode>6301</promoCode>\n"+hiddenXML+addXML+endXML;
			finalXML=finalXML+card6_XML;
		}
	}
	
	return finalXML;
}