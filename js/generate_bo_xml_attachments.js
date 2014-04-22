function checkDocType( docRefId ) {
	if( docRefId ) {
		var docTypeId = docRefId.split('-')[2];
		if( docTypeId == "NRIC" || docTypeId == "PPort" || docTypeId == "EPass") {
			return "ID Document";
		} else if( docTypeId == "CPFHS" || docTypeId == "PSlip" || docTypeId == "ITNA") {
			return "Income Document";
		} else {
			return "others";
		}
	} else {
		return "";
	}
}