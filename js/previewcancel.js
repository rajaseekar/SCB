function clonefields(form) {
	$('#cancelForm input:hidden.'+form).remove();
	$('#cancelForm textarea.'+form).remove();
	$('#'+form+' input:text').each(function() {
		$('#cancelForm').append('<input type="hidden" id="'+$(this).attr('id')+'_clone" name="'+$(this).attr('name')+'_clone" class="'+form+' '+$(this).attr('id')+'" value="'+$(this).attr('value')+'">');
	});
	$('#'+form+' textarea').each(function() {
		$('#cancelForm').append('<input type="textarea" id="'+$(this).attr('id')+'_clone" name="'+$(this).attr('name')+'_clone" class="'+form+' '+$(this).attr('id')+'" value="'+$(this).attr('value')+'">');
	});
	$('#'+form+' select').each(function() {
		$('#cancelForm').append('<input type="hidden" id="'+$(this).attr('id')+'_clone" name="'+$(this).attr('name')+'_clone" class="'+form+' '+$(this).attr('id')+'" value="'+$(this).val()+'">');
	});
	$('#'+form+' input:radio:checked').each(function() {
		$('#cancelForm').append('<input type="hidden" id="'+$(this).attr('id')+'_clone" name="'+$(this).attr('name')+'_clone" class="'+form+' '+$(this).attr('id')+'" value="'+$(this).attr('value')+'" />');
	});
	$('#'+form+' input:checkbox').filter(':checked').each(function() {
		$('#cancelForm').append('<input type="hidden" id="'+$(this).attr('id')+'_clone" name="'+$(this).attr('name')+'_clone" class="'+form+' '+$(this).attr('id')+'" value="'+$(this).attr('value')+'" />');
	});

}

function restorefields(form) {
	$('#'+form+' input:text').each(function() {
		$(this).val('').val( $('.'+$(this).attr('id') ).val() );
	});
	$('#'+form+' textarea').each(function() {
		$(this).val('').val( $('.'+$(this).attr('id') ).val() );
	});
	$('#'+form+' select').each(function() {
		$(this).val('').val( $('.'+$(this).attr('id') ).val() );
	});
	$('#'+form+' input:radio').attr('checked', false);
	$('#'+form+' input:radio ~ label').removeClass('checked');
	$('#'+form+' input:radio').each(function() {
		//console.log( $('.'+$(this).attr('id')).attr('id') );
		if( $('.'+$(this).attr('id')).length ) {
			$(this).attr('checked', true);
			$(this).click();
			$('#'+$(this).attr('id')+' ~ label').addClass('checked');
		}
	});
	$('#'+form+' input:checkbox').removeAttr('checked');
	$('#'+form+' input:checkbox ~ label').removeClass('checked');
	$('#'+form+' input:checkbox').each(function() {
		if( $('.'+$(this).attr('id')).length ) {
			$(this).attr('checked','checked');
			$('#'+$(this).attr('id')+' ~ label').addClass('checked');
		}
	});
}

function resetCancelFields(form) {
//	$('#cancelForm input:hidden.'+form).remove();
//	$('#cancelForm textarea.'+form).remove();
}