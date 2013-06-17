// Multi file upload
$(function(){ 
 $('#form2_uploadid_01').MultiFile({ 
  list: '#form2_uploadid_01_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|GIF|JPG|JPEG|TIF|TIFF|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

 	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_01 option:selected').text());
		$('#form2_upload_id_01selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_01 option:selected').val());
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_01 option:selected').remove(); 
		$("#form2_uploadid_01_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_01 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_01 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_01_a_file").hide();
			$(".form2_uploadid_01_other_file").show()
		}			
			$('#uploadForm_id_01 .documentnamefield').val("").val( $('#form2_upload_id_01 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_id_01 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_id_01 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
	  
   },
  afterFileRemove: function(element, value, master_element){
		$("#uploadForm_id_01 .fileinputs").show();
       	$("#uploadForm_id_01 .lbl_btn_upload_file").css("color","#005D9A");
       	$("#uploadForm_id_01 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_01_a_file").show();
			$(".form2_uploadid_01_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_id_01selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});



$(function(){ 
 $('#form2_uploadid_02').MultiFile({ 
  list: '#form2_uploadid_02_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_02 option:selected').text());
		$('#form2_upload_id_02selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_02 option:selected').val());
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_02_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_02 option:selected').remove(); 
		$("#form2_uploadid_02_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_02 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_02 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_02_a_file").hide();
			$(".form2_uploadid_02_other_file").show();
		}

			$('#uploadForm_id_02 .documentnamefield').val("").val( $('#form2_upload_id_02 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_id_02 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_id_02 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}

		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
	  
	   },
  afterFileRemove: function(element, value, master_element){
		$("#uploadForm_id_02 .fileinputs").show();
       	$("#uploadForm_id_02 .lbl_btn_upload_file").css("color","#005D9A");
       	$("#uploadForm_id_02 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_02_a_file").show();
			$(".form2_uploadid_02_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_id_02selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});


$(function(){ 
 $('#form2_uploadid_03').MultiFile({ 
  list: '#form2_uploadid_03_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_03 option:selected').text());
		$('#form2_upload_id_03selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_03 option:selected').val());
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_03_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_03 option:selected').remove(); 
		$("#form2_uploadid_03_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_03 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_03 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_03_a_file").hide();
			$(".form2_uploadid_03_other_file").show();
		}

			$('#uploadForm_id_03 .documentnamefield').val("").val( $('#form2_upload_id_03 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_id_03 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_id_03 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_id_03 .fileinputs").show();
        $("#uploadForm_id_03 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_id_03 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_03_a_file").show();
			$(".form2_uploadid_03_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_id_03selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});


$(function(){ 
 $('#form2_uploadid_04').MultiFile({ 
  list: '#form2_uploadid_04_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_id_04 option:selected').text());
		$('#form2_upload_id_04selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadid_04_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_id_04 option:selected').val());
		$("#form2_uploadid_04_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadid_04_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_id_04 option:selected').remove(); 
		$("#form2_uploadid_04_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_id_04 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_id_04 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadid_04_a_file").hide();
			$(".form2_uploadid_04_other_file").show();
		}

			$('#uploadForm_id_04 .documentnamefield').val("").val( $('#form2_upload_id_04 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_id_04 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_id_04 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){

	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_id_04 .fileinputs").show();
        $("#uploadForm_id_04 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_id_04 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadid_04_a_file").show();
			$(".form2_uploadid_04_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_id_04selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});


$(function(){ 
 $('#form2_uploadincome_01').MultiFile({ 
  list: '#form2_uploadincome_01_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_income_01 option:selected').text());
		$('#form2_upload_income_01selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_income_01 option:selected').val());
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadincome_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_income_01 option:selected').remove(); 
		$("#form2_uploadincome_01_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_income_01 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_income_01 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadincome_01_a_file").hide();
			$(".form2_uploadincome_01_other_file").show();
		}

			$('#uploadForm_income_01 .documentnamefield').val("").val( $('#form2_upload_income_01 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_income_01 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_income_01 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
			
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_income_01 .fileinputs").show();
        $("#uploadForm_income_01 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_income_01 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadincome_01_a_file").show();
			$(".form2_uploadincome_01_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_income_01selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ 
 $('#form2_uploadincome_02').MultiFile({ 
  list: '#form2_uploadincome_02_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_income_02 option:selected').text());
		$('#form2_upload_income_02selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadincome_02_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_income_02 option:selected').val());
		$("#form2_uploadincome_02_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadincome_02_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_income_02 option:selected').remove(); 
		$("#form2_uploadincome_02_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_income_02 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_income_02 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadincome_02_a_file").hide();
			$(".form2_uploadincome_02_other_file").show();
		}

			$('#uploadForm_income_02 .documentnamefield').val("").val( $('#form2_upload_income_02 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_income_02 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_income_02 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		$("#uploadForm_income_02 .fileinputs").show();
        $("#uploadForm_income_02 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_income_02 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadincome_02_a_file").show();
			$(".form2_uploadincome_02_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_income_02selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ 
 $('#form2_uploadsupcard_01').MultiFile({ 
  list: '#form2_uploadsupcard_01_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {

	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_supcard_01 option:selected').text());
		$('#form2_upload_supcard_01selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadsupcard_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_supcard_01 option:selected').val());
		$("#form2_uploadsupcard_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadsupcard_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_supcard_01 option:selected').remove(); 
		$("#form2_uploadsupcard_01_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_supcard_01 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_supcard_01 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadsupcard_01_a_file").hide();
			$(".form2_uploadsupcard_01_other_file").show();
		}
		
			$('#uploadForm_supcard_01 .documentnamefield').val("").val( $('#form2_upload_supcard_01 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_supcard_01 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_supcard_01 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
  onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_supcard_01 .fileinputs").show();
        $("#uploadForm_supcard_01 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_supcard_01 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadsupcard_01_a_file").show();
			$(".form2_uploadsupcard_01_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_supcard_01selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});


$(function(){ // wait for document to load 
 $('#form2_uploadsupcard_02').MultiFile({ 
  list: '#form2_uploadsupcard_02_list',
  max: 1,
  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
  onFileAppend: function(element, value, master_element) {
	 	//console.log('On File Append ',element,value,master_element);
	 	//$('#uploadForm_supcard_02').submit();
	},
  afterFileAppend: function(element, value, master_element){
		$("#table_upload_container tr").removeClass("formFieldFocus");
		var option_text_select = ($('#form2_upload_supcard_02 option:selected').text());
		$('#form2_upload_supcard_02selectedfile').val('').val(option_text_select);
		//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
		$("#form2_uploadsupcard_02_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_supcard_02 option:selected').val());
		$("#form2_uploadsupcard_02_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
		$("#form2_uploadsupcard_02_list .MultiFile-label:last-child .option_file_name").attr("value",value);
		//$('select#form2_upload_supcard_02 option:selected').remove(); 
		$("#form2_uploadsupcard_02_list").show();
		if (master_element.n > master_element.max) {
        	$("#uploadForm_supcard_02 .lbl_btn_upload_file").css("color","#fff");
        	$("#uploadForm_supcard_02 .btn_upload_file").css("background-position","0 50px");
		} else if (master_element.n == 2) {
			$(".form2_uploadsupcard_02_a_file").hide();
			$(".form2_uploadsupcard_02_other_file").show();
		}

			$('#uploadForm_supcard_02 .documentnamefield').val("").val( $('#form2_upload_supcard_02 option:selected').val() );
			if( $('#form2_nationality_non_singaporean').is(':checked') ) {
				$('#uploadForm_supcard_02 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
			} else {
				$('#uploadForm_supcard_02 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
			}
		resizeSlider();
		uploadFilesCount++;
		},
	onFileRemove: function(element, value, master_element){
			
	   },
  afterFileRemove: function(element, value, master_element){
		//alert ( master_element.n);//no of file add
		$("#uploadForm_supcard_02 .fileinputs").show();
        $("#uploadForm_supcard_02 .lbl_btn_upload_file").css("color","#005D9A");
        $("#uploadForm_supcard_02 .btn_upload_file").css("background-position","0 5px");
		if (master_element.n == 2) {
			$(".form2_uploadsupcard_02_a_file").show();
			$(".form2_uploadsupcard_02_other_file").hide();
		}
		resizeSlider();
		$('#form2_upload_supcard_02selectedfile').val('');
		uploadFilesCount--;
     },
STRING: {
   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
  }
  }); 
});

$(function(){ // wait for document to load 
	 $('#form2_uploadfor_01').MultiFile({ 
	  list: '#form2_for_01_list',
	  max: 1,
	  accept:'gif|jpg|tif|png|pdf|TIFF|JPEG|JPG|PNG|PDF',
	  onFileAppend: function(element, value, master_element) {
		 	//console.log('On File Append ',element,value,master_element);
		 	//$('#uploadForm_supcard_02').submit();
		},
	  afterFileAppend: function(element, value, master_element){
			$("#table_upload_container tr").removeClass("formFieldFocus");
			var option_text_select = ($('#form2_upload_for_01 option:selected').text());
			$('#form2_upload_for_01selectedfile').val('').val(option_text_select);
			//$('#form2_upload_file_list').val( option_text_select+'\n'+$('#form2_upload_file_list').val() );
			$("#form2_for_01_list .MultiFile-label:last-child .option_value").attr("value",$('select#form2_upload_for_01 option:selected').val());
			$("#form2_for_01_list .MultiFile-label:last-child .option_text").attr("value",option_text_select);
			$("#form2_for_01_list .MultiFile-label:last-child .option_file_name").attr("value",value);
			//$('select#form2_upload_supcard_02 option:selected').remove(); 
			$("#form2_for_01_list").show();
			if (master_element.n > master_element.max) {
	        	$("#uploadForm_for_01 .lbl_btn_upload_file").css("color","#fff");
	        	$("#uploadForm_for_01 .btn_upload_file").css("background-position","0 50px");
			} else if (master_element.n == 2) {
				$(".form2_uploadfor_01_a_file").hide();
				$(".form2_uploadfor_01_other_file").show();
			}

				$('#uploadForm_for_01 .documentnamefield').val("").val( $('#form2_upload_for_01 option:selected').val() );
				if( $('#form2_nationality_non_singaporean').is(':checked') ) {
					$('#uploadForm_supcard_02 .nricpassportnumberfield').val("").val( $('#form2_passport_number').val() );
				} else {
					$('#uploadForm_supcard_02 .nricpassportnumberfield').val("").val( $('#form2_nric_number').val() );
				}
			resizeSlider();
			uploadFilesCount++;
			},
		onFileRemove: function(element, value, master_element){
				
		   },
	  afterFileRemove: function(element, value, master_element){
			//alert ( master_element.n);//no of file add
			$("#uploadForm_for_01 .fileinputs").show();
	        $("#uploadForm_for_01 .lbl_btn_upload_file").css("color","#005D9A");
	        $("#uploadForm_for_01 .btn_upload_file").css("background-position","0 5px");
			if (master_element.n == 2) {
				$(".form2_uploadfor_01_a_file").show();
				$(".form2_uploadfor_01_other_file").hide();
			}
			resizeSlider();
			$('#form2_upload_for_01selectedfile').val('');
			uploadFilesCount--;
	     },
	STRING: {
	   remove: '<span style="float:right; color:red; font-size: 9pt; margin-right:10px;">Remove this file</span><input type="hidden" class="option_text" /><input type="hidden" class="option_value"/><input type="hidden" class="option_file_name" />'
	  }
	  }); 
	});


