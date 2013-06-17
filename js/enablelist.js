$(document).ready(function(){
	$('#short_document-listing-link_left').click(function() {
		$(this).hide();
		$('#short_notes_document_lists_left').hide();
		$('#notes_document_lists_left').show();
		$('#notes_documents').css('height','600px');
		$('#notes_document_table_row').css('height','482px');
		$('#document-listing-link_left').show();
		$('#document-listing_vbar_short').hide();
		$('#document-listing_vbar_long').show();
		$('#documents-reference').show();

	});
	$('#short_document-listing-link_right').click(function() {
		$(this).hide();
		$('#short_notes_document_lists_right').hide();
		$('#notes_document_lists_right').show();
		$('#notes_documents').css('height','650px');
		$('#notes_document_table_row').css('height','482px');
		$('#document-listing-link_right').show();
		$('#document-listing_vbar_short').hide();
		$('#document-listing_vbar_long').show();
		$('#documents-reference').show();
		
	});
	$('#document-listing-link_left').click(function() {
		$(this).hide();
		$('#notes_document_lists_left').hide();
		$('#short_notes_document_lists_left').show();
		if( !$('#notes_document_lists_left').is(':visible') && !$('#notes_document_lists_right').is(':visible') ) {
			$('#document-listing_vbar_long').hide();
			$('#notes_documents').css('height','222px');
			$('#notes_document_table_row').css('height','140px');
			$('#document-listing_vbar_short').show();
			$('#documents-reference').hide();
		} 
		$('#short_document-listing-link_left').show();
		
	});
	$('#document-listing-link_right').click(function() {
		$(this).hide();
		$('#notes_document_lists_right').hide();
		$('#short_notes_document_lists_right').show();
		if( !$('#notes_document_lists_left').is(':visible') && !$('#notes_document_lists_right').is(':visible') ) {
			$('#document-listing_vbar_long').hide();
			$('#notes_documents').css('height','222px');
			$('#notes_document_table_row').css('height','140px');
			$('#document-listing_vbar_short').show();
			$('#documents-reference').hide();
		} 
		$('#short_document-listing-link_right').show();
		
	});
});