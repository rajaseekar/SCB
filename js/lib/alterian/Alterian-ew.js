/**********************************************************************
*
*   Version 2.1.1
*
***********************************************************************/
var altTracker = new Alterian.WA.ClientTracker();


jQuery(document).ready(function($) {
    /******************************************************
    Global variables
    ****************************************************/

    var alterianClassNametoTrack = "alteriantr";
    //Create an elements array to pass to Alterian Tracker to handle scroll events for now
    var assetsToTrack = new Array();

    /******************************************************
    Functions
    ****************************************************/
    /**************************************************************************
    1. Function to wire up children recursively
    containerID: this is the value of the attribute. The attribute name is provided by attribToLook parameter
    context: it is the assetid of the context
    containerElement: For the first call it will be undefined i.e not passed in from wireup code. But for recursive calls, the container element will be passed
    ***************************************************************************/
    function wireupchildrenrecursive(containerId, context, attribToLook, containerElement) {

        if (containerElement == undefined) {
            containerElement = $('[' + attribToLook + '=' + containerId + ']');
        }

        //Bind events to children recursively and add the context
        if ($(containerElement).children().length > 0) {
            $(containerElement).children().each(function() {
                //Skip if the element has other Alterian wireup and it is not the root parentElem
                if ($(this).attr("class").indexOf(alterianClassNametoTrack) < 0) {
                    wireupchildrenrecursive($(this).attr(attribToLook), context, attribToLook, this);
                }
            });
        }
        if ($(containerElement).attr(attribToLook) != undefined) {
            var asset = context + altTracker.get_assetDelimiter() + $(containerElement).attr(attribToLook);

            var assetToTrack = new Alterian.WA.AssetToTrack($(containerElement).attr(attribToLook), asset);
            assetsToTrack.push(assetToTrack);

            $("#debugtext").append("elements: " + asset + "<br/>");

            /***********************************************************
            bind the element to events
            ************************************************************/
            $(containerElement).blur(function() { altTracker.blurEvent(containerElement, asset); });
            $(containerElement).focus(function() { altTracker.focusEvent(containerElement, asset); });

            $(containerElement).click(function() { altTracker.clickEvent(containerElement, asset); });
            $(containerElement).dblclick(function() { altTracker.doubleClickEvent(containerElement, asset); });

            $(containerElement).keypress(function(e) { altTracker.keyPressEvent(containerElement, asset, e.which); });
            $(containerElement).keydown(function(e) { altTracker.keyDownEvent(containerElement, asset, e.keyCode); });
            $(containerElement).keyup(function(e) { altTracker.keyUpEvent(containerElement, asset, e.keyCode); });

            $(containerElement).select(function() { altTracker.selectEvent(containerElement, asset); });

            //Hover event encompasses mouseover and mouseout. Also fixes the bug of mouseout of parent when moved over child elements
            $(containerElement).hover(function() { altTracker.mouseOverEvent(containerElement, asset); }, function() { altTracker.mouseOutEvent(containerElement, asset); });

        }
    }

    /**************************************************************************
    2. Function to wire up children non recursively
    ***************************************************************************/
    function wireupchildren(containerId, context, attribToLook) {
        var containerElement = $('[' + attribToLook + '=' + containerId + ']');

        $(containerElement).children().each(function() {
            if ($(this).attr(attribToLook) != undefined) {
                //Skip if the sibling/children have other Alterian wireup
                if ($(this).attr("class").indexOf(alterianClassNametoTrack) < 0) {
                    var asset = context + altTracker.get_assetDelimiter() + $(this).attr(attribToLook);

                    var assetToTrack = new Alterian.WA.AssetToTrack(this, asset);
                    assetsToTrack.push(assetToTrack);

                    $("#debugtext").append("elements: " + asset + "<br/>");
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
                }
            }

        });
    }


    /**************************************************************************
    3. Function to wire up Siblings
    ***************************************************************************/
    function wireupsiblings(containerId, context, attribToLook) {

        //First wireup the current element
        wireupelement(containerId, context, attribToLook);

        var containerElement = $('[' + attribToLook + '=' + containerId + ']');

        //Bind events to siblings recursively and add the context
        $(containerElement).siblings().each(function() {
            if ($(this).attr(attribToLook) != undefined) {
                //Skip if the sibling/children have other Alterian wireup
                if ($(this).attr("class").indexOf(alterianClassNametoTrack) < 0) {
                    var asset = context + altTracker.get_assetDelimiter() + $(this).attr(attribToLook);

                    var assetToTrack = new Alterian.WA.AssetToTrack(this, asset);
                    assetsToTrack.push(assetToTrack);

                    $("#debugtext").append("elements: " + asset + "<br/>");

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
                }
            }
        }); //End- Bind events to siblings recursively and add the context

    }
    /**************************************************************************
    4. Function to wireup Elements 
    ***************************************************************************/
    function wireupelement(containerId, context, attribToLook) {
        var containerElement = $('[' + attribToLook + '=' + containerId + ']');
        var asset = context + altTracker.get_assetDelimiter() + containerId;

        var assetToTrack = new Alterian.WA.AssetToTrack(containerId, asset);
        assetsToTrack.push(assetToTrack);

        $("#debugtext").append("elements: " + asset + "<br/>");

        /***********************************************************
        bind the element to events
        ************************************************************/
        $(containerElement).blur(function() { altTracker.blurEvent(containerElement, asset); });
        $(containerElement).focus(function() { altTracker.focusEvent(containerElement, asset); });

        $(containerElement).click(function() { altTracker.clickEvent(containerElement, asset); });
        $(containerElement).dblclick(function() { altTracker.doubleClickEvent(containerElement, asset); });

        $(containerElement).keypress(function(e) { altTracker.keyPressEvent(containerElement, asset, e.which); });
        $(containerElement).keydown(function(e) { altTracker.keyDownEvent(containerElement, asset, e.keyCode); });
        $(containerElement).keyup(function(e) { altTracker.keyUpEvent(containerElement, asset, e.keyCode); });

        $(containerElement).select(function() { altTracker.selectEvent(containerElement, asset); });

        //Hover event encompasses mouseover and mouseout. Also fixes the bug of mouseout of parent when moved over child elements
        $(containerElement).hover(function() { altTracker.mouseOverEvent(containerElement, asset); }, function() { altTracker.mouseOutEvent(containerElement, asset); });

    }

    /*********************************************************
    Body
    **********************************************************/

    /***************************************************************************************
    Rules for decorating elements with explicit wireup:
    1. Element is decorated with  class attribute set to "alteriantr" followed by function name and then followed by fn params
    2. The element decorated with a class attribute should have an "id" attribute
    2. If the element has some other classes specified, alteraintr should be placed at the end of all other classes
    3. There cannot be any whitespace or "-" in the values for fn name or fn params
        
    Example:
    Scenario1:
    Wireup all children under this div recursively
    <div id="parent1" class="someotherclass alteriantr fn-wireupchildrenrecursive param1-parent1 param2-parent1ctxt param3-id">
        
    Scenario2:
    Wireup all children under this div non recursively
    <div id="parent1" class="someotherclass alteriantr fn-wireupchildren param1-parent1 param2-parent1ctxt param3-id">
        
    Scenario3:
    Wireup all siblings for this div 
    <div id="parent1" class="someotherclass alteriantr fn-wireupsiblings param1-parent1 param2-parent1ctxt param3-id">
        
    Scenario4:
    Wireup just the specified element
    <div id="parent1" class="someotherclass alteriantr fn-wireupchildren param1-parent1 param2-parent1ctxt param3-id">
        
    ****************************************************************************************/
    var parentElementsToTrack = $("." + alterianClassNametoTrack);

    // Parent Element Traversal
    $(parentElementsToTrack).each(function() {
        //Get class attrib of the parent
        var classAttrib = $(this).attr("class");

        //Get the function attribute and pass the rest of the string to the function
        /****
        Logic:
        Get the postion of first "fn-" after the string alteriantr. Then get the function name.
        Get the position of first whitespace after the occurrence of "fn-". 
        Get the string after that position. This string represents params and their values
        *****/
        var alterianStartPos = classAttrib.indexOf(alterianClassNametoTrack, 0);
        if (alterianStartPos >= 0) {
            var functionStartPos = classAttrib.indexOf("fn-", alterianStartPos);
            if (functionStartPos > 0) {
                var nextWSPos = classAttrib.indexOf(" ", functionStartPos);
                var functionName = "";

                if (nextWSPos > 0) {
                    functionName = classAttrib.substring(functionStartPos + 3, nextWSPos); //3 since "fn-" is 3 chars
                    var fnParams = classAttrib.substr(nextWSPos).trim();

                    if (fnParams.length > 0) {
                        var paramsArray = fnParams.split(" ");
                        var paramValues = "";

                        for (i = 0; i < paramsArray.length; i++) {

                            //Get the "-" occurence and extract the value alone
                            var paramValuePos = paramsArray[i].indexOf("-");
                            if (paramValuePos > 0) {
                                var paramVal = paramsArray[i].substr(paramValuePos + 1);
                                if (i === 0) {
                                    paramValues = "\"" + paramVal + "\"";
                                }
                                else {
                                    paramValues = paramValues + "," + "\"" + paramVal + "\"";
                                }
                            }
                        }
                        $("#debugtext").append("Param Values: " + paramValues + "<br/>");
                    }
                }
                else { //No params provided... just the function.
                    functionName = classAttrib.substr(functionStartPos + 3); //3 since "fn-" is 3 chars
                }
                eval(functionName + "(" + paramValues + ")"); //"1" indicates this is a call from the root element to differentiate during recursion of child elements
            }
        }
    }); //End Parent Element Traversal

    altTracker.set_assetsToTrack(assetsToTrack);

});                //End jQuery(document).ready


