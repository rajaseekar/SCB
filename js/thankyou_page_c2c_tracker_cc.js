// add c2c logic
var FormRefID = jQuery.query.get("FormRefID");
if( FormRefID.indexOf('%') != -1 ) {
	FormRefID = FormRefID.substring(0, returnText.indexOf('%'));
}
var incutrack_data = new Array();
incutrack_data['A']=492;
incutrack_data['oid']= FormRefID;
incutrack_data['idsc1'] = "Credit_cards";
incutrack_data['iamt1'] = "1";
incutrack_data['ict1'] = "Credit_cards";
incutrack_data['iqty1'] = "1";
incutrack_data['ototal'] = "1";
//$.getScript('https://p.mdmngr.com/conversion.js');
var imageUrl = "https://p.mdmngr.com/tracker";

if (typeof(incutrack_data) != 'undefined') {
    var first = true;
    for (i in incutrack_data) {
        if(typeof(incutrack_data[i]) == 'string' || typeof(incutrack_data[i]) == 'number') {
            if (first) {
                first = false;
                imageUrl += "?";
            } else {
                imageUrl += "&";
            }
            imageUrl += i + "=" + escape(incutrack_data[i]);
        }
    }
    var imageTag = '<img src="' + imageUrl + '" border="0" width="0" height="0"/>';
    //document.write(imageTag);
    $('body').append(imageTag);

} else if (typeof(conversion_data) != 'undefined') {
    var first = true;
    for (i in conversion_data) {
        if(typeof(conversion_data[i]) == 'string' || typeof(conversion_data[i]) == 'number') {
            if (first) {
                first = false;
                imageUrl += "?";
            } else {
                imageUrl += "&";
            }
            imageUrl += i + "=" + escape(conversion_data[i]);
        }
    }
    var imageTag = '<img src="' + imageUrl + '" border="0" width="0" height="0"/>';
    document.write(imageTag);
}
// end c2c logic