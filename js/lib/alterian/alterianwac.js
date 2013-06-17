/**********************************************************************
*
*   Version 2.1.1
*
***********************************************************************/
Type.registerNamespace('Alterian.WA');
/* Event Enumeration */
Alterian.WA.EventType = function() { }
Alterian.WA.EventType.prototype =
{   //Obtained from Alterian.WA.WARepositoryMicroEventType 
    PageLoad: 1, PageUnload: 2, Blur: 3, Focus: 4, Click: 5, DoubleClick: 6, KeyPress: 7, KeyDown: 8,KeyUp: 9,MouseOver: 10, MouseOut: 11,Resize: 12,Viewed: 13, Hidden: 14,Select: 15,Submit: 16,Purchase:17
}
Alterian.WA.EventType.registerEnum("Alterian.WA.EventType", false);

/* Element Track*/
Alterian.WA.AssetToTrack = function(elementname, asset) {
    this._elementName = elementname;
    this._asset = asset;
}
Alterian.WA.AssetToTrack.prototype = {
    get_asset: function() {
        return this._asset;
    },
    set_asset: function(value) {
        this._asset = value;
    },
    get_elementName: function() {
        return this._elementName;
    },
    set_elementName: function(value) {
        this._elementName = value;
    }
}
Alterian.WA.AssetToTrack.registerClass('Alterian.WA.AssetToTrack');

/* Actual Tracker */
Alterian.WA.ClientTracker = function() {
    this._token = null;
    this._session = null;
    this._clientID = null;
    this._tokenCookieName = null;
    this._sessionCookieName = null;
    this._assetsToTrack = null;
    this._elementsToTrack = null;
    this._pageName = null;
    this._eventsToSubmitList = new Array();
    this._eventSubmitTimerID = null;
    this._eventSubmitMonitorTimerID = null;
    this._jsonObjGetToken = null;
    this._jsonObjSubmitSession = null;
    this._jsonObjSubmitEvent = null;
    this._jsonObjSubmitUser = null;
    this._trackingServerDomain = null;
    this._trackingServerURL = null;
    this._userName = '';
    this._hasUserNameBeenSubmitted = false;
    this._assetDelimiter = "|";
    this._numofEventsinaSubmit = 25;
    this._submitDurationinmillisec = 4000;
    this._siteTobeTracked = '';
    this._sessionDurationInMinutes = 15;

}

Alterian.WA.ClientTracker.prototype = {
    get_token: function() {
        return this._token;
    },
    set_token: function(value) {
        this._token = value;
    },
    get_session: function() {
        return this._session;
    },
    set_session: function(value) {
        this._session = value;
    },
    get_clientID: function() {
        return this._clientID;
    },
    set_clientID: function(value) {
        this._clientID = value;
    },
    get_assetDelimiter: function() {
        return this._assetDelimiter;
    },
    get_assetsToTrack: function() {
        return this._assetsToTrack;
    },
    set_assetsToTrack: function(value) {
        this._assetsToTrack = value;
    },
    get_elementsToTrack: function() {
        return this._elementsToTrack;
    },
    set_elementsToTrack: function(value) {
        this._elementsToTrack = value;
    },
    get_userName: function() {
        return this._userName;
    },
    set_userName: function(value) {
        this._userName = value;
        //if session cookie is already present then call submit user otherwise submit session will take care of updating the user name
        if ((this.get_session() !== null) && (this.get_session().length > 0)) {
            this.submitUser();
        }
    },
    get_pageName: function() {
        return this._pageName;
    },
    set_pageName: function(value) {
        if (value.length > 0) {
            this._pageName = encodeURI(value);
        }
        else {

            var pageName = document.URL;
            var questionMarkPos = pageName.indexOf("?", 0);
            if (questionMarkPos > 0) {
                pageName = pageName.substr(0, questionMarkPos);
            }
            this._pageName = encodeURI(pageName);
        }
    },
    get_eventSubmitTimerID: function() {
        return this._eventSubmitTimerID;
    },
    set_eventSubmitTimerID: function(value) {
        this._eventSubmitTimerID = value;
    },

    get_eventSubmitMonitorTimerID: function() {
        return this._eventSubmitMonitorTimerID;
    },
    set_eventSubmitMonitorTimerID: function(value) {
        this._eventSubmitMonitorTimerID = value;
    },
    get_tokenCookieName: function() {
        return this._tokenCookieName;
    },
    set_tokenCookieName: function(value) {
        this._tokenCookieName = value;
    },
    get_sessionCookieName: function() {
        return this._sessionCookieName;
    },
    set_sessionCookieName: function(value) {
        this._sessionCookieName = value;
    },
    get_jsonObjGetToken: function() {
        return this._jsonObjGetToken;
    },
    set_jsonObjGetToken: function(value) {
        this._jsonObjGetToken = value;
    },
    get_jsonObjSubmitSession: function() {
        return this._jsonObjSubmitSession;
    },
    set_jsonObjSubmitSession: function(value) {
        this._jsonObjSubmitSession = value;
    },
    get_jsonObjSubmitEvent: function() {
        return this._jsonObjSubmitEvent;
    },
    set_jsonObjSubmitEvent: function(value) {
        this._jsonObjSubmitEvent = value;
    },
    get_jsonObjSubmitUser: function() {
        return this._jsonObjSubmitUser;
    },
    set_jsonObjSubmitUser: function(value) {
        this._jsonObjSubmitUser = value;
    },
    get_sessionDurationInMinutes: function() {
        return this._sessionDurationInMinutes;
    },
    set_sessionDurationInMinutes: function(value) {
        this._sessionDurationInMinutes = value;
    },
    get_numofEventsinaSubmit: function() {
        return this._numofEventsinaSubmit;
    },
    set_numofEventsinaSubmit: function(value) {
        this._numofEventsinaSubmit = value;
    },
    get_submitDurationinmillisec: function() {
        return this._submitDurationinmillisec;
    },
    set_submitDurationinmillisec: function(value) {
        this._submitDurationinmillisec = value;
    },
    get_trackingServerDomain: function() {
        return this._trackingServerDomain;
    },
    set_trackingServerDomain: function(value) {
        this._trackingServerDomain = value;
    },
    get_siteTobeTracked: function() {
        return this._siteTobeTracked;
    },
    set_siteTobeTracked: function(value) {
        this._siteTobeTracked = value;
    },
    get_trackingServerURL: function() {
        return this._trackingServerURL;
    },
    set_trackingServerURL: function(value) {
        this.set_trackingServerDomain(value);
        this.set_tokenCookieName(this.get_trackingServerDomain() + ".alt.token");
        this.set_sessionCookieName(this.get_trackingServerDomain() + ".alt.session");
        jQuery("#debugtext").prepend("Token Cookie:" + this.get_tokenCookieName() + "<br/>");
        jQuery("#debugtext").prepend("Session Cookie:" + this.get_sessionCookieName() + "<br/>");
        this._trackingServerURL = value + "/" + "tracking.aspx";
    },
    calcTrackingServerURL: function(value) {
        //Tracking Server URL is passed from intiTracker call
        if (value.length > 0) {
            this.set_trackingServerURL(value);
        }

        jQuery("#debugtext").prepend(this.get_trackingServerURL() + "<br/>");
    },
    get_eventsToSubmitList: function() {
        return this._eventsToSubmitList;
    },
    add_customevent: function(eventID, context, asset, value) {
        if (!context) {
            context = "";
        }
        if (!value) {
            value = "";
        }
        asset = this.get_pageName() + this._assetDelimiter + context + this._assetDelimiter + asset;
        this.addto_eventsList(eventID, asset, value);
    },
    addto_eventsToSubmitList: function(eventID, asset) {
        this.addto_eventsList(eventID, asset, "");
    },
    addto_eventsList: function(eventID, asset, value) {
        var curDate = new Date();
        jQuery("#debugtext").prepend(asset + " : " + eventID + " Total Events: " + this.get_eventsToSubmitList().length + "<br/>");
        Array.add(this._eventsToSubmitList, "{\"EventID\":\"" + eventID + "\",\"EventTime\":\"\/Date(" + curDate.valueOf() + ")\/\",\"Asset\":\"" + asset + "\",\"Value\":\"" + value + "\"}");
        if (this.get_eventsToSubmitList().length > this.get_numofEventsinaSubmit()) {
            this.submitEventsToWS(); /* Submit to WA Tracking server when we N number of events to avoid getting error 414 uri request too long */
        }
    },
    clear_eventsToSubmitList: function() {
        Array.clear(this._eventsToSubmitList);
    },
    /* Events binding */
    pageLoadEvent: function(pageName) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.PageLoad, this.get_pageName() + this._assetDelimiter + pageName);
    },
    pageUnloadEvent: function(pageName) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.PageUnLoad, this.get_pageName() + this._assetDelimiter + pageName);
        this.submitEventsToWS(); /* Submit to WA Tracking server Since these are exit events */
    },
    blurEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Blur, this.get_pageName() + this._assetDelimiter + context);
    },
    focusEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Focus, this.get_pageName() + this._assetDelimiter + context);
    },
    clickEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Click, this.get_pageName() + this._assetDelimiter + context);
        this.submitEventsToWS(); /* Submit to WA Tracking server Since these are exit events */
    },
    doubleClickEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.DoubleClick, this.get_pageName() + this._assetDelimiter + context);
        this.submitEventsToWS(); /* Submit to WA Tracking server Since these are exit events */
    },
    keyPressEvent: function(e, context, which) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.KeyPress, this.get_pageName() + this._assetDelimiter + context);
    },
    keyDownEvent: function(e, context, keyCode) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.KeyDown, this.get_pageName() + this._assetDelimiter + context);
    },
    keyUpEvent: function(e, context, keyCode) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.KeyUp, this.get_pageName() + this._assetDelimiter + context);
    },
    mouseOverEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.MouseOver, this.get_pageName() + this._assetDelimiter + context);
    },
    mouseOutEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.MouseOut, this.get_pageName() + this._assetDelimiter + context);
    },
    resizeEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Resize, this.get_pageName() + this._assetDelimiter + context);
    },
    selectEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Select, this.get_pageName() + this._assetDelimiter + context);
    },
    submitEvent: function(e, context) {
        this.addto_eventsToSubmitList(Alterian.WA.EventType.Submit, this.get_pageName() + this._assetDelimiter + context);
        this.submitEventsToWS(); /* Submit to WA Tracking server Since these are exit events */
    },

    /* helper fns */
    getScreenSize: function() {
        var screenW = "Unknown", screenH = "Unknown";
        if (parseInt(navigator.appVersion) > 3) {
            screenW = screen.width;
            screenH = screen.height;
        } else if (navigator.appName == "Netscape"
		    && parseInt(navigator.appVersion) == 3
		    && navigator.javaEnabled()
		   ) {
            var jToolkit = java.awt.Toolkit.getDefaultToolkit();
            var jScreenSize = jToolkit.getScreenSize();
            screenW = jScreenSize.width;
            screenH = jScreenSize.height;
        }

        return screenW + " x " + screenH;
    },
    isScrolledIntoView: function(elem) {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + jQuery(window).height();

        var elemTop = jQuery(elem).offset().top;
        var elemBottom = elemTop + jQuery(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    },
    checkElementVisibility: function(element) {
        if (this.isScrolledIntoView(element)) {

            if (!element._flag) {
                element._flag = true;
                this.addto_eventsToSubmitList(Alterian.WA.EventType.Viewed, element._context);
            }
        }
        else {
            if (element._flag) {
                this.addto_eventsToSubmitList(Alterian.WA.EventType.Hidden, element._context);
                element._flag = false;
            }
        }
    },
    scrollEvent: function() {
        for (var i = 0; i < this.get_elementsToTrack().length; i++) {
            this.checkElementVisibility(this.get_elementsToTrack()[i]);
        }
    },
    bindEvents: function() {
        //Elements array 
        var elems = [];
        var i = 0;
        if (this.get_assetsToTrack() != undefined && this.get_assetsToTrack() != null) {
            do {
                var assetname = this.get_assetsToTrack()[i].get_elementName();
                var element = $get(assetname);
                //jQuery("#debugtext").append(assetname + " : " + element + "<br/>");
                if (element) {
                    elems.push(element);

                    element._context = this.get_pageName() + this._assetDelimiter + this.get_assetsToTrack()[i].get_asset();
                    element._flag = false;
                }
            } while (++i < this.get_assetsToTrack().length);
        }


        this.set_elementsToTrack(elems);

        var delegatehandleScroll = Function.createDelegate(this, this.scrollEvent);
        window.onscroll = delegatehandleScroll;
    },
    unbindEvents: function() {
        var i = 0;
        if (!this.get_assetsToTrack() && this.get_assetsToTrack().length > 0) {
            do {
                var assetname = this.get_assetsToTrack()[i].get_elementName();
                $clearHandlers($get(assetname));
            } while (++i < this.get_assetsToTrack().length);
        }
    },
    //Define the callback function for getToken
    onReceiveToken: function(jsonData) {
        this.set_token(jsonData.Token);
        this.set_clientID(jsonData.ClientID);
        this.get_jsonObjGetToken().removeScriptTag();
        this.set_cookie(this.get_tokenCookieName(), jsonData.Token, 730 * 24 * 60, null, null, null);
        this.initSession();
    },
    //The web service call for getToken
    getToken: function() {
        var request = this.get_trackingServerURL() + "/gettoken/?callback=this.altTracker.onReceiveToken";
        this.set_jsonObjGetToken(new JSONscriptRequest(request));
        this.get_jsonObjGetToken().buildScriptTag();
        this.get_jsonObjGetToken().addScriptTag();
    },
    //Define the callback function for submitUser
    onReceivesubmitUser: function(jsonData) {
        this.get_jsonObjSubmitUser().removeScriptTag();
    },
    //The web service call for submitUser
    submitUser: function() {
        if (!this._hasUserNameBeenSubmitted) {
            if (this.get_userName().length > 0) {
                this._hasUserNameBeenSubmitted = true;
                var request = this.get_trackingServerURL() + "/submituser/?Token=" + this.get_token() + "&Session=" + this.get_session() + "&UserName=" + this.get_userName() + "&callback=this.altTracker.onReceivesubmitUser";
                this.set_jsonObjSubmitUser(new JSONscriptRequest(request));
                this.get_jsonObjSubmitUser().buildScriptTag();
                this.get_jsonObjSubmitUser().addScriptTag();
            }
        }
    },
    onSessionSubmitAck: function(jsonData) {
        this.get_jsonObjSubmitSession().removeScriptTag();
        this.set_session(jsonData.Session);
        this.set_sessionDurationInMinutes(jsonData.SessionDurationInMinutes);
        this.set_cookie(this.get_sessionCookieName(), jsonData.Session, jsonData.SessionDurationInMinutes, null, null, null);
        this.set_submitDurationinmillisec(jsonData.SubmitDuration);
        this.set_numofEventsinaSubmit(jsonData.NumofEventsinaSubmit);
        jQuery("#debugtext").prepend("NumofEventsinaSubmit!" + this.get_numofEventsinaSubmit() + "<br/>");
        jQuery("#debugtext").prepend("SubmitDuration!" + this.get_submitDurationinmillisec() + "<br/>");
        this.submitUser();
        this.submitEventsToWS();
    },
    //Need this to pass a url as a querystring param. Need to encode ? and &
    customEncoderForURLParam: function(urlValue) {
        var encodedUrl = urlValue;
        //Also escape ? and &
        encodedUrl = encodedUrl.replace("?", "%3F");
        encodedUrl = encodedUrl.replace("&", "%26");
        encodedUrl = encodeURIComponent(urlValue);
        return encodedUrl;
    },
    submitSessionToWS: function(trackingServerURL) {
        try {

            //Extend Token Cookie
            this.reset_cookie(this.get_tokenCookieName(), this.get_token(), 730 * 24 * 60, null, null, null);

            var usertime = new Date();
            var sessionInfo = "&timeoffset=" + usertime.getTimezoneOffset() + "&scrres=" + this.getScreenSize() + "&username=" + this.get_userName() + "&trackedsite=" + this.get_siteTobeTracked();
            if (document.referrer.length > 0) {
                sessionInfo = sessionInfo + '&ref=' + this.customEncoderForURLParam(document.referrer);
            }
            else {
                sessionInfo = sessionInfo + "&ref=unknown";
            }
            var request = this.get_trackingServerURL() + "/submitsession/?Token=" + this.get_token() + "&callback=this.altTracker.onSessionSubmitAck" + sessionInfo;
            request = encodeURI(request);
            this.set_jsonObjSubmitSession(new JSONscriptRequest(request));
            this.get_jsonObjSubmitSession().buildScriptTag();
            this.get_jsonObjSubmitSession().addScriptTag();
        }
        catch (err) {
            //Do nothing
        }
    },
    setSubmitEventTimer: function() {
        var delegatesubmitEventsToWS = Function.createDelegate(this, this.submitEventsToWS);
        var timerID = window.setInterval(delegatesubmitEventsToWS, this.get_submitDurationinmillisec());
        this.set_eventSubmitTimerID(timerID);

        //window.clearInterval(this.get_eventSubmitMonitorTimerID());
    },
    clearSubmitEventTimer: function() {
        window.clearInterval(this.get_eventSubmitTimerID());
        //var delegatesubmitEventMonitorTimer = Function.createDelegate(this, this.setSubmitEventTimer);
        //var submitEventMonitorTimerID = window.setInterval(delegatesubmitEventMonitorTimer, 5000);
        //this.set_eventSubmitMonitorTimerID(submitEventMonitorTimerID);
    },
    onEventSubmitAck: function(jsonData) {
        jQuery("#debugtext").prepend("Event Acknowledged!" + "<br/>");
        this.get_jsonObjSubmitEvent().removeScriptTag();
        this.setSubmitEventTimer();
    },
    submitEventsToWS: function() {
        try {
            var session = this.get_cookie(this.get_sessionCookieName());
            if (session != null) {
                // jQuery("#debugtext").prepend("Num OF Events!" + this.get_eventsToSubmitList().length + "<br/>");
                if (this.get_eventsToSubmitList().length > 0) {
                    //    jQuery("#debugtext").prepend("Num OF Events!" + this.get_eventsToSubmitList().length + "<br/>");
                    this.clearSubmitEventTimer();
                    //   jQuery("#debugtext").prepend("Before reset,Session Cookie:" + this.get_cookie(this.get_sessionCookieName()) + "<br/>");
                    this.reset_cookie(this.get_sessionCookieName(), this.get_session(), this.get_sessionDurationInMinutes(), null, null, null);
                    //   jQuery("#debugtext").prepend("After reset,Session Cookie:" + this.get_cookie(this.get_sessionCookieName()) + "<br/>");

                    var events = null;
                    var iCounter = 0;
                    do {
                        var event = this.get_eventsToSubmitList().pop();
                        if (iCounter > 0) {
                            events = events + "," + event;
                        }
                        else {
                            events = event;
                        }
                        iCounter++;
                    } while (this.get_eventsToSubmitList().length > 0);
                    events = "[" + events + "]";
                    var request = this.get_trackingServerURL() + "/submitevents/?Token=" + this.get_token() + "&Session=" + this.get_session() + "&callback=this.altTracker.onEventSubmitAck" + "&Events=";
                    request = encodeURI(request) + this.customEncoderForURLParam(events);

                    this.set_jsonObjSubmitEvent(new JSONscriptRequest(request));
                    this.get_jsonObjSubmitEvent().buildScriptTag();
                    this.get_jsonObjSubmitEvent().addScriptTag();

                    //   jQuery("#debugtext").prepend("submitted a total of " + iCounter + "<br/>");
                }
            }
        }
        catch (err) {
            //Do nothing
        }
    },
    initTracker: function(trackingServerURL, pageName, siteTobeTracked) {
        try {
            this.calcTrackingServerURL(trackingServerURL);
            this.set_pageName(pageName);
            this.set_siteTobeTracked(siteTobeTracked);

            if (this.get_assetsToTrack() !== null) {
                this.bindEvents();
            }

            this.pageLoadEvent(this.get_pageName());

            var token = this.get_cookie(this.get_tokenCookieName());
            if (token == null) {
                this.getToken();
            }
            else {
                this.set_token(token);
                this.initSession();
            };
        }
        catch (err) {
            //Do nothing
        }
    },
    initSession: function() {
        this.set_token(this.get_cookie(this.get_tokenCookieName()));
        var session = this.get_cookie(this.get_sessionCookieName());
        if (session == null) {
            this.submitSessionToWS();
        }
        else {
            this.set_session(session);
            this.submitEventsToWS();
        }
    },
    finalize: function() {
        window.clearInterval(this.get_eventSubmitTimerID());
        window.clearInterval(this.get_eventSubmitMonitorTimerID());
        this.submitEventsToWS();
        this.unbindEvents();
    },
    /* Cookie related */
    set_cookie: function(name, value, expireafterminutes, path, domain, secure) {
        var cookie_string = name + "=" + escape(value);
        var today = new Date();
        today.setTime(today.getTime());
        if (expireafterminutes) {
            expireafterminutes = expireafterminutes * 1000 * 60;
        }
        var expires_date = new Date(today.getTime() + (expireafterminutes));
        if (expires_date) {
            cookie_string += "; expires=" + expires_date.toGMTString();
        }
        if (path)
            cookie_string += "; path=" + escape(path);
        if (domain)
            cookie_string += "; domain=" + escape(domain);
        if (secure)
            cookie_string += "; secure";
        document.cookie = cookie_string;
    },
    delete_cookie: function(cookie_name) {
        var cookie_date = new Date();  // current date & time
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    },
    reset_cookie: function(name, value, expireafterminutes, path, domain, secure) {
        this.delete_cookie(name);
        this.set_cookie(name, value, expireafterminutes, path, domain, secure);


    },
    get_cookie: function(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
        if (results)
            return (unescape(results[2]));
        else
            return null;
    }
}
Alterian.WA.ClientTracker.registerClass('Alterian.WA.ClientTracker');






