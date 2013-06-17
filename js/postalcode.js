function showcontent(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_unit_number").attr("disabled", true).attr("value", "N.A");
			$('#form2_unit_number_na').attr('checked','checked').click();
			$('#form2_unit_number_na ~ label').addClass('checked');
			$('#lbl_form2_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$('#form2_unit_number_na').removeAttr('checked').attr("disabled", true);
			$('#form2_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$('#form2_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_unit_number_na ~ label').removeClass('checked');
			$("#form_new_customer_credit_cards_1").validate().showErrors({"form2_postal_code": "invalid postal code"});
			$('#lbl_form2_unit_number_container2').css('visibility','visible');
		} else {
			$("#form2_unit_number").removeAttr("disabled").val("");
			$('#form2_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_unit_number_container2').css('visibility','visible');
			$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
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
		$('#form2_unit_number_na').removeAttr('checked').removeAttr("disabled");
		$('#form2_unit_number_na ~ label').removeClass('checked');
		$('#lbl_form2_unit_number_container2').css('visibility','visible');
		$('#form2_building_name').val('');
		$('#form2_street_name').val('');
		$('#form2_block_number').val('');
	}
	//alert('Request returned');
	//$('#pcode0'+count+'-address').val('');
	/*
	for(var i=0;i<obj.length;i++){
		var str=[];
		str.push( "address type: "+obj[i].addresstype);
		str.push( "postal Code: "+obj[i].postalCode);
		str.push( "building Key: "+obj[i].buildingKey);
		str.push( "building Name: "+obj[i].buildingName);
		str.push( "building Number: "+obj[i].buildingNumber);
		str.push( "walkup Indicator: "+obj[i].walkupIndicator);		
		str.push( "street Name: "+obj[i].streetName);
		str.push( "street Key: "+obj[i].streetKey);
		str.push( "service number: "+obj[i].servicenumber);
		
		var str = JSON.stringify(obj[i]);
		$('#pcode0'+count+'-address').val(str.join("\n"));
	}
	*/
	//doReq(count+1);
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
			/*
			beforeSend: function(){},
			success: function (json) {
				//debugger;
				//alert(1);
			}, 
			complete: function(XMLHttpRequest, textStatus){ 
				//debugger;
				//$.unblockUI({ fadeOut: 10 }); 
			}, 
			error: function(xhr){ 
				//debugger;
			} 
			*/
		});
	} else {
		$("#form_new_customer_credit_cards_1").validate().element("#form2_postal_code");
	}

}

function showcontentoffice(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_employer_unit_number").attr("disabled", true).attr("value", "N.A");
			$('#form2_employer_unit_number_na').attr('checked','checked').click();
			$('#form2_employer_unit_number_na ~ label').addClass('checked');
			$('#lbl_form2_employer_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$('#form2_employer_unit_number_na').removeAttr('checked').attr("disabled", true);
			$('#form2_employer_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_employer_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$('#form2_employer_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_employer_unit_number_na ~ label').removeClass('checked');
			$("#form_new_customer_credit_cards_2").validate().showErrors({"form2_postal_code": "invalid postal code"});
			$('#lbl_form2_employer_unit_number_container2').css('visibility','visible');
		} else {
			$("#form2_employer_unit_number").removeAttr("disabled").val("");
			$('#form2_employer_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_employer_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_employer_unit_number_container2').css('visibility','visible');
			$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
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
		$('#form2_employer_unit_number_na').removeAttr('checked').removeAttr("disabled");
		$('#form2_employer_unit_number_na ~ label').removeClass('checked');
		$('#lbl_form2_employer_unit_number_container2').css('visibility','visible');
		$('#form2_employer_building_name').val('');
		$('#form2_employer_street_name').val('');
		$('#form2_employer_block_number').val('');
	}
	//alert('Request returned');
	//$('#pcode0'+count+'-address').val('');
	/*
	for(var i=0;i<obj.length;i++){
		var str=[];
		str.push( "address type: "+obj[i].addresstype);
		str.push( "postal Code: "+obj[i].postalCode);
		str.push( "building Key: "+obj[i].buildingKey);
		str.push( "building Name: "+obj[i].buildingName);
		str.push( "building Number: "+obj[i].buildingNumber);
		str.push( "walkup Indicator: "+obj[i].walkupIndicator);		
		str.push( "street Name: "+obj[i].streetName);
		str.push( "street Key: "+obj[i].streetKey);
		str.push( "service number: "+obj[i].servicenumber);
		
		var str = JSON.stringify(obj[i]);
		$('#pcode0'+count+'-address').val(str.join("\n"));
	}
	*/
	//doReq(count+1);
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
			/*
			beforeSend: function(){},
			success: function (json) {
				//debugger;
				//alert(1);
			}, 
			complete: function(XMLHttpRequest, textStatus){ 
				//debugger;
				//$.unblockUI({ fadeOut: 10 }); 
			}, 
			error: function(xhr){ 
				//debugger;
			} 
			*/
		});
	} else {
		$("#form_new_customer_credit_cards_2").validate().element("#form2_employer_postal_code");
	}

}

function showcontentsupcard(obj){
	if( obj.length > 0 ) {
		if( obj[0].addresstype == "S" || obj[0].addresstype == "G" || obj[0].addresstype == "U" ) {
			$("#form2_sup_unit_number").attr("disabled", true).attr("value", "N.A");
			$('#form2_sup_unit_number_na').attr('checked','checked').click();
			$('#form2_sup_unit_number_na ~ label').addClass('checked');
			$('#lbl_form2_sup_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_4").validate().element("#form2_sup_postal_code");
		} else if( obj[0].addresstype == "A" || obj[0].addresstype == "C" || obj[0].addresstype == "H" || obj[0].addresstype == "K" ) {
			$("#form2_sup_unit_number").removeAttr("disabled").val("");
			$('#form2_sup_unit_number_na').removeAttr('checked').attr("disabled", true);
			$('#form2_sup_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_sup_unit_number_container2').css('visibility','hidden');
			$("#form_new_customer_credit_cards_4").validate().element("#form2_sup_postal_code");
		} else if( obj[0].addresstype == "P" || obj[0].addresstype == "B" || obj[0].addresstype == "W" ) {
			$("#form2_sup_unit_number").removeAttr("disabled").val("");
			$('#form2_sup_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_sup_unit_number_na ~ label').removeClass('checked');
			$("#form_new_customer_credit_cards_4").validate().showErrors({"form2_postal_code": "invalid postal code"});
			$('#lbl_form2_sup_unit_number_container2').css('visibility','visible');
		} else {
			$("#form2_sup_unit_number").removeAttr("disabled").val("");
			$('#form2_sup_unit_number_na').removeAttr('checked').removeAttr("disabled");
			$('#form2_sup_unit_number_na ~ label').removeClass('checked');
			$('#lbl_form2_sup_unit_number_container2').css('visibility','visible');
			$("#form_new_customer_credit_cards_4").validate().element("#form2_sup_postal_code");
		}
		if( obj[0].buildingNumber != null && obj[0].buildingNumber != 'null') {
			var buildingNumber = obj[0].buildingNumber.substr(0,7);
			$('#form2_sup_block_number').val('').val( buildingNumber );
		} else {
			$('#form2_sup_block_number').val('');
		}
		if( obj[0].buildingName != null && obj[0].buildingName != 'null') {
			var buildingName = obj[0].buildingName.substr(0,30);
			$('#form2_sup_building_name').val('').val( buildingName );
		} else {
			$('#form2_sup_building_name').val('');
		}
		if( obj[0].streetName != null && obj[0].streetName != 'null') {
			var streetName = obj[0].streetName.substr(0,22);
			$('#form2_sup_street_name').val('').val( streetName );
		} else {
			$('#form2_sup_street_name').val('');
		}
	} else {
		$("#form2_sup_unit_number").removeAttr("disabled").val("");
		$('#form2_sup_unit_number_na').removeAttr('checked').removeAttr("disabled");
		$('#form2_sup_unit_number_na ~ label').removeClass('checked');
		$('#lbl_form2_sup_unit_number_container2').css('visibility','visible');
		$('#form2_sup_building_name').val('');
		$('#form2_sup_street_name').val('');
		$('#form2_sup_block_number').val('');
	}
	//alert('Request returned');
	//$('#pcode0'+count+'-address').val('');
	/*
	for(var i=0;i<obj.length;i++){
		var str=[];
		str.push( "address type: "+obj[i].addresstype);
		str.push( "postal Code: "+obj[i].postalCode);
		str.push( "building Key: "+obj[i].buildingKey);
		str.push( "building Name: "+obj[i].buildingName);
		str.push( "building Number: "+obj[i].buildingNumber);
		str.push( "walkup Indicator: "+obj[i].walkupIndicator);		
		str.push( "street Name: "+obj[i].streetName);
		str.push( "street Key: "+obj[i].streetKey);
		str.push( "service number: "+obj[i].servicenumber);
		
		var str = JSON.stringify(obj[i]);
		$('#pcode0'+count+'-address').val(str.join("\n"));
	}
	*/
	//doReq(count+1);
	$('#form2_sup_postal_code').focus();
}

function getPostalCodeSupCard(code){
	var pcode = code;
	if( pcode != "" && pcode.length > 4 ) {
		$.ajax({ 
			async:false, 
			url: 'https://apps1.standardchartered.com/sg_postalcode/App_loadByPostcode.action',  //
			type: 'GET', 
			data:{postcode:pcode,jsonp:'showcontentsupcard'},
			dataType: 'jsonp', 
			jsonp: 'showcontentsupcard', 
			timeout: 5000
			/*
			beforeSend: function(){},
			success: function (json) {
				//debugger;
				//alert(1);
			}, 
			complete: function(XMLHttpRequest, textStatus){ 
				//debugger;
				//$.unblockUI({ fadeOut: 10 }); 
			}, 
			error: function(xhr){ 
				//debugger;
			} 
			*/
		});
	} else {
		$("#form_new_customer_credit_cards_4").validate().element("#form2_sup_postal_code");
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
	$('#form2_sup_postal_code_findbutton').click(function() {
		getPostalCodeSupCard( $('#form2_sup_postal_code').val() );
		return false;
	});
});
