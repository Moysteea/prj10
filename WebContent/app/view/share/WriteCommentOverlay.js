var sizeWidth = window.screen.availWidth / 2;
var sizeHeight = window.screen.availHeight / 3;

Ext.define("GNApp.view.share.WriteCommentOverlay", {
	extend:'Ext.Panel',
	xtype: 'writecommentoverlay',
	requires: [
	    'Ext.form.*',
		'Ext.field.*'
	           ],
	config:{
		modal: true,
		centered:true,
		hidden:true,
		hideOnMaskTap:true,
		width: sizeWidth/2, height: sizeHeight,
		items: [
		    { 
			xtype:"titlebar",
			docked:"top",
			title:"글남기기"
				
		},
			
			{xtype:"fieldset", 
				items: [
						{xtype:"textfield", name:"commenter", label:"작성자", id : 'writter'},
						{xtype:"textareafield", name:"textarea", label:"", id : 'commentContent'}
						]},
						{
						 xtype: "button", 
						 id: "btnFacebook",
						 action: "shareToFacebook",
						 cls : 'btnFacebook'
						},
						{
						xtype: "button", id: "btnWriteOk", action: "writeOk",
						docked : 'bottom',
						text: "작성", ui: "confirm"
						}
		],
		//html:'<div id = "ssss"> Shows this Component next to another Componen</div>',
		scrollable: true,
	}
});