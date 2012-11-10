/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
/**
 * @name block.editor
 * @namespace Block attribute editors
 */
define(["aloha/jquery","aloha/observable"],function(e,t){var n=Class.extend(t,{schema:null,_constructor:function(e){this.schema=e},render:function(){},getValue:function(){},setValue:function(e){},destroy:function(){},_deactivate:function(){this.trigger("change",this.getValue()),this.destroy()}}),r=n.extend({formInputElementDefinition:null,_$formInputElement:null,render:function(){var t=e('<div class="aloha-block-editor" />'),n=GENTICS.Utils.guid();return t.append(this.renderLabel().attr("id",n)),t.append(this.renderFormElement().attr("id",n)),t},renderLabel:function(){var t=e("<label />");return t.html(this.schema.label),t},renderFormElement:function(){var t=this;return this._$formInputElement=e(this.formInputElementDefinition),this.afterRenderFormElement(this._$formInputElement),this._$formInputElement.change(function(){t.trigger("change",t.getValue())}),this._$formInputElement},afterRenderFormElement:function(e){},getValue:function(){return this._$formInputElement.val()},setValue:function(e){this._$formInputElement.val(e)},destroy:function(){this._$formInputElement.remove()}}),i=r.extend({formInputElementDefinition:'<input type="text" />'}),s=r.extend({formInputElementDefinition:'<input type="range" />',afterRenderFormElement:function(e){if(!this.schema.range)return;this.schema.range.min&&e.attr("min",this.schema.range.min),this.schema.range.max&&e.attr("max",this.schema.range.max),this.schema.range.step&&e.attr("step",this.schema.range.step)}}),o=r.extend({formInputElementDefinition:'<input type="url" />'}),u=r.extend({formInputElementDefinition:'<input type="email" />'}),a=r.extend({formInputElementDefinition:"<select />",afterRenderFormElement:function(t){e.each(this.schema.values,function(){var n=this;t.append(e("<option />").attr("value",n.key).html(n.label))})}}),f=r.extend({formInputElementDefinition:"<button />",afterRenderFormElement:function(e){var t=this;e.html(this.schema.buttonLabel),e.click(function(){t.schema.callback()})}});return{AbstractEditor:n,AbstractFormElementEditor:r,StringEditor:i,NumberEditor:s,UrlEditor:o,EmailEditor:u,SelectEditor:a,ButtonEditor:f}});