$(document).ready(function(){
	/*
	$('input:radio').change(function() {
		var but = $(this);
		var butName = but.attr('name');
		var hiddenfield = $('#'+butName);
		if( hiddenfield.length == 0 ) {
			$('#hiddenForm').append('<input type="hidden" id="'+butName+'" name="'+butName+'" value="'+but.val()+',"/>');
		} else {
			hiddenfield.val('').val( but.val() );
		}
		
		var pdfFieldName = butName+'_'+but.val();
		//var pdfField = $('#'+pdfFieldName);
		$('#hiddenForm input.'+butName).remove();
		$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+pdfFieldName+'" value="Yes"/>')
		
	});
	
	$('input:radio ~ label').click(function() {
		//console.log( $(this).prev().attr('id') +' '+ $(this).prev().attr('value') );
		var but = $(this).prev();
		var butName = $(this).prev().attr('name');
		var hiddenfield = $('#'+butName);	

		if( hiddenfield.length == 0 ) {
			$('#hiddenForm').append('<input type="hidden" id="'+butName+'" name="'+butName+'" value="'+but.val()+',"/>');
		} else {
			hiddenfield.val('').val( but.val() );
		}
		
		var pdfFieldName = butName+'_'+but.val();
		//var pdfField = $('#'+pdfFieldName);
		$('#hiddenForm input.'+butName).remove();
		$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+pdfFieldName+'" value="Yes"/>');

	});
	*/
	/*
	$('input:checkbox').change(function() {
		var but = $(this)
		var butName = $(this).attr('name');
		var hiddenfield = $('#'+butName);
		var valueStr = "";
		//but.click();

		$('#hiddenForm input.'+butName).remove();
		$('input:checkbox[name="'+butName+'"]').each(function() {
			//console.log( $(this).attr('id') );
			if( $(this).is(':checked') ) {
				//console.log( $(this).attr('id') );
				valueStr += $(this).val()+',';
				$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+butName+'_'+$(this).val()+'" value="Yes"/>');
				//$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+butName+'_'+$(this).val()+'_No" value="No"/>');
			} else {
				$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+butName+'_'+$(this).val()+'" value="No"/>');
				//$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+butName+'_'+$(this).val()+'_No" value="Yes"/>');
			}
		});
		hiddenfield.val('').val( valueStr );		
		
		
		
	});
	
	$('select').change(function() {
		var but = $(this)
		var butName = $(this).attr('name');
		var pdfFieldName = butName+'_'+but.val();
		var pdfField = $('#'+pdfFieldName);
		
		$('#hiddenForm input.'+butName).remove();
		//$('#'+pdfFieldName).remove();
		$('#hiddenForm').append('<input class="'+butName+'" type="hidden" id="'+pdfFieldName+'" name="'+pdfFieldName+'" value="Yes"/>');
		
	});
	*/
});

function generatePdfFields(input) {
	if( input.is(':checked') ) {
		var but = input;
		var butName = but.attr('name');
		var hiddenfield = $('#'+butName);
		var pdfFieldName = butName+'_'+but.val();
		//var pdfField = $('#'+pdfFieldName);
		//$('#hiddenForm input.'+butName).remove();
		$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+pdfFieldName+'" value="Yes"/>');
	} else {
		var but = input;
		var butName = but.attr('name');
		var pdfFieldName = butName+'_'+but.find('option:selected').val();
		//$('#hiddenForm input.'+butName).remove();
		$('#hiddenForm').append('<input type="hidden" class="'+butName+'" name="'+pdfFieldName+'" value="Yes"/>');

	}

}





