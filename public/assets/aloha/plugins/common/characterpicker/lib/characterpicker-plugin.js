/*
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha","aloha/jquery","aloha/plugin","aloha/floatingmenu","i18n!characterpicker/nls/i18n","i18n!aloha/nls/i18n","css!characterpicker/css/characterpicker.css"],function(e,t,n,r,i,s){function u(e,n){var r=this;r.$node=t('<table class="aloha-character-picker-overlay" role="dialog"><tbody></tbody></table>'),r.$node.mousedown(function(e){return!1}),r.$tbody=r.$node.find("tbody"),r.$node.appendTo(t("body")),r._createCharacterButtons(r.$node,e,n),r._initHideOnDocumentClick(),r._initHideOnEsc(),r._initCursorFocus(n),r._initEvents()}var o=window.GENTICS;return u.prototype={show:function(e){var n=this;n.$node.css(t(e).offset()),n.$node.show(),n.$node.find(".focused").removeClass("focused"),t(n.$node.find("td")[0]).addClass("focused")},_initHideOnDocumentClick:function(){var e=this;e.$node.click(function(e){e.stopPropagation()}),t("body").click(function(n){var r=e.$node.css("display")==="table"&&n.target!=e.$node[0]&&!t(n.target).is("button.aloha-button-characterpicker");r&&e.$node.hide()})},_initHideOnEsc:function(){var e=this;t(document).keyup(function(t){var n=e.$node.css("display")==="table"&&t.keyCode===27;n&&e.$node.hide()})},_initCursorFocus:function(e){var n=this,r,i,s,o,u,a={13:function(){r=n.$node.find(".focused"),n.$node.hide(),e(r.text())},37:function(){r=n.$node.find(".focused"),s=r.prev().addClass("focused"),s.length>0&&r.removeClass("focused")},38:function(){r=n.$node.find(".focused"),u=r.parent().prev(),u.length>0&&(s=t(u.children()[r.index()]).addClass("focused"),s.length>0&&r.removeClass("focused"))},39:function(){r=n.$node.find(".focused"),i=r.next().addClass("focused"),i.length>0&&r.removeClass("focused")},40:function(){r=n.$node.find(".focused"),o=r.parent().next(),o.length>0&&(i=t(o.children()[r.index()]).addClass("focused"),i.length>0&&r.removeClass("focused"))}};t(document).keydown(function(e){e.stopPropagation();var t=n.$node.css("display")==="table";if(t){var r=a[e.keyCode];if(r)return r(),!1}})},_initEvents:function(){var t=this;e.bind("aloha-editable-deactivated",function(e,n){t.$node.hide()})},_createCharacterButtons:function(e,n,r){function s(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function o(e){var n=s(e);return t("<td>"+n+"</td>").mouseover(function(){t(this).addClass("mouseover")}).mouseout(function(){t(this).removeClass("mouseover")}).click(function(e){return i.$node.hide(),r(n),!1})}function u(){return t("<tr></tr>").appendTo(i.$tbody)}var i=this,a=t.grep(n.split(" "),function(t){return t!=""}),f=0,l,c;while(l=a[f])f%15===0&&(c=u()),o(l).appendTo(c),f++}},n.create("characterpicker",{_constructor:function(){this._super("characterpicker")},languages:["en"],init:function(){var t=this;e.settings.plugins.characterpicker||(e.settings.plugins.characterpicker={}),t.settings=e.settings.plugins.characterpicker||{},t.settings.characters||(t.settings.characters="&#38; &#34; &#162; &#8364; &#163; &#165; &#169; &#174; &#8482; &#8240; &#181; &#183; &#8226; &#8230; &#8242; &#8243; &#167; &#182; &#223; &#8249; &#8250; &#171; &#187; &#8216; &#8217; &#8220; &#8221; &#8218; &#8222; &#60; &#62; &#8804; &#8805; &#8211; &#8212; &#175; &#8254; &#164; &#166; &#168; &#161; &#191; &#710; &#732; &#176; &#8722; &#177; &#247; &#8260; &#215; &#185; &#178; &#179; &#188; &#189; &#190; &#402; &#8747; &#8721; &#8734; &#8730; &#8764; &#8773; &#8776; &#8800; &#8801; &#8712; &#8713; &#8715; &#8719; &#8743; &#8744; &#172; &#8745; &#8746; &#8706; &#8704; &#8707; &#8709; &#8711; &#8727; &#8733; &#8736; &#180; &#184; &#170; &#186; &#8224; &#8225; &#192; &#193; &#194; &#195; &#196; &#197; &#198; &#199; &#200; &#201; &#202; &#203; &#204; &#205; &#206; &#207; &#208; &#209; &#210; &#211; &#212; &#213; &#214; &#216; &#338; &#352; &#217; &#218; &#219; &#220; &#221; &#376; &#222; &#224; &#225; &#226; &#227; &#228; &#229; &#230; &#231; &#232; &#233; &#234; &#235; &#236; &#237; &#238; &#239; &#240; &#241; &#242; &#243; &#244; &#245; &#246; &#248; &#339; &#353; &#249; &#250; &#251; &#252; &#253; &#254; &#255; &#913; &#914; &#915; &#916; &#917; &#918; &#919; &#920; &#921; &#922; &#923; &#924; &#925; &#926; &#927; &#928; &#929; &#931; &#932; &#933; &#934; &#935; &#936; &#937; &#945; &#946; &#947; &#948; &#949; &#950; &#951; &#952; &#953; &#954; &#955; &#956; &#957; &#958; &#959; &#960; &#961; &#962; &#963; &#964; &#965; &#966; &#967; &#968; &#969; &#8501; &#982; &#8476; &#977; &#978; &#8472; &#8465; &#8592; &#8593; &#8594; &#8595; &#8596; &#8629; &#8656; &#8657; &#8658; &#8659; &#8660; &#8756; &#8834; &#8835; &#8836; &#8838; &#8839; &#8853; &#8855; &#8869; &#8901; &#8968; &#8969; &#8970; &#8971; &#9001; &#9002; &#9674; &#9824; &#9827; &#9829; &#9830;");var n=new e.ui.Button({name:"characterpicker",iconClass:"aloha-button-characterpicker",size:"small",onclick:function(e,n){t.characterOverlay.show(e.btnEl.dom)},tooltip:i.t("button.addcharacter.tooltip"),toggle:!1});r.addButton("Aloha.continuoustext",n,s.t("floatingmenu.tab.insert"),1),t.characterOverlay=new u(t.settings.characters,t.onCharacterSelect)},onCharacterSelect:function(n){var r=this,i=e.Selection.getRangeObject();if(e.activeEditable){var s=t(document.createTextNode(n));o.Utils.Dom.insertIntoDOM(s,i,t(e.activeEditable.obj),!0),i.startContainer=i.endContainer=s.get(0),i.startOffset=i.endOffset=s.length,i.select()}}})});