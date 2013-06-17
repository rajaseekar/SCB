/**********************************************************************
*
*   Version 2.1.1
*
***********************************************************************/
//function executeme(context,num1,num2) {
//    document.title = context;
//}

var altTracker = new Alterian.WA.ClientTracker();

jQuery(document).ready(function($) {

    //Create an elements array to pass to Alterian Tracker to handle scroll events for now
    var assetsToTrack = new Array();

    //Traverse links first looking for id and then href
    $("a").each(function(index) {
        var elementid = null;
        //id of all elements are initialized and set to empty string
        if (this.id.length > 0) {
            elementid = this.id;
        }
        else {
            elementid = this.href;
        }
        var asset = elementid;
        $("#debugtext").append(asset+ "<br/>");

        var assetToTrack = new Alterian.WA.AssetToTrack(elementid, asset);

        assetsToTrack.push(assetToTrack);

        /***********************************************************
        bind the element to events
        ************************************************************/
        $(this).blur(function() { altTracker.blurEvent($(this), asset); });
        $(this).focus(function() { altTracker.focusEvent($(this), asset); });

        $(this).click(function() { altTracker.clickEvent($(this), asset); });
        $(this).dblclick(function() { altTracker.doubleClickEvent($(this), asset); });

        $(this).keypress(function(e) { altTracker.keyPressEvent($(this), asset, e.which); });
        $(this).keydown(function(e) { altTracker.keyDownEvent($(this), asset, e.keyCode); });
        $(this).keyup(function(e) { altTracker.keyUpEvent($(this), asset, e.keyCode); });

        $(this).select(function() { altTracker.selectEvent($(this), asset); });

        //Hover event encompasses mouseover and mouseout. Also fixes the bug of mouseout of parent when moved over child elements
        $(this).hover(function() { altTracker.mouseOverEvent($(this), asset); }, function() { altTracker.mouseOutEvent($(this), asset); });

    }); // End-Traverse links first looking for id and then href


    //Traverse Images: First Look for id, then alt and then for src
    $("img").each(function(index) {
        var elementid = null;
        //id of all elements are initialized and set to empty string
        if (this.id.length > 0) {
            elementid = this.id;
        }
        else if (this.alt.length > 0) {
            elementid = this.alt;
        }
        else {
            elementid = this.src;
        }
        var asset = elementid ;
        $("#debugtext").append(asset + "<br/>");

        var assetToTrack = new Alterian.WA.AssetToTrack(elementid, asset);

        assetsToTrack.push(assetToTrack);

        /***********************************************************
        bind the element to events
        ************************************************************/
        $(this).blur(function() { altTracker.blurEvent($(this), asset); });
        $(this).focus(function() { altTracker.focusEvent($(this), asset); });

        $(this).click(function() { altTracker.clickEvent($(this), asset); });
        $(this).dblclick(function() { altTracker.doubleClickEvent($(this), asset); });

        $(this).keypress(function(e) { altTracker.keyPressEvent($(this), asset, e.which); });
        $(this).keydown(function(e) { altTracker.keyDownEvent($(this), asset, e.keyCode); });
        $(this).keyup(function(e) { altTracker.keyUpEvent($(this), asset, e.keyCode); });

        $(this).select(function() { altTracker.selectEvent($(this), asset); });

        //Hover event encompasses mouseover and mouseout. Also fixes the bug of mouseout of parent when moved over child elements
        $(this).hover(function() { altTracker.mouseOverEvent($(this), asset); }, function() { altTracker.mouseOutEvent($(this), asset); });

    }); // End-/Traverse Images: First Look for id, then alt and then for src

    //Hook up form Submits
    $("form").each(function() {
        $(this).submit(function() { altTracker.submitEvent($(this), $(this).attr("id")); });

    }); // End-Hook up form Submits

    altTracker.set_assetsToTrack(assetsToTrack);
});//End jQuery(document).ready


