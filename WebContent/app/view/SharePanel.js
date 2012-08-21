Ext.define("MyApp.view.SharePanel", {
	extend: "Ext.form.Panel",	
	xtype: "sharepanel",	
	id: "sharepanel",		
	requires: [
	    "Ext.form.FieldSet",
	    "Ext.field.Text",
	],	
	config: {
		scrollable: false,
		title: "Login",
		iconCls: "user",
		layout:{type:'vbox'},
		
		items: [
			{
				xtype : 'panel',
				id : 'mapArea',
				html : ['<div id="map" style = "width : 100%; height : 200px;"></div>' ].join("")
			},
			{   
				/*
				xtype: "panel",
				items:[
				    { xtype: "textfield", 	name: "id", label: "Id" },
					{ xtype: "textareafield", name: "comment", label: "Comment", height: "2px"}
				]
				*/
				
				
				
				xtype: "fieldset",
				items: [
					{ xtype: "textfield", 	name: "id", label: "Id" },
					{ xtype: "textareafield", 	name: "comment", label: "Comment"}
				]
			},
			
			{
				xtype: "panel",
				id : "inputArea",
				layout: {type: "hbox", pack: "end"},
				
				items:[
						{ xtype: "button", text: "facebook"},
						{ xtype: "button", text: "twitter"},
						{
							xtype: "button", id: "btnOk", action: "sendOk", height: "10",
							text: "ok", ui: "confirm", scale: 'small'
						}
				       ]
			},
			
			{
				xtype : 'list',
				itemId : 'tweetList',
				itemTpl : [
						'<div style="float:left; width: 60px;">',
						'  <img src="{profile_image_url}">',
						'</div>',
						'<div style="margin-left: 62px;">',
						'  {text}<br>{created_at:date("d M Y")}<br/>',
						'{id}<br/>',
						'{description}',
						'</div>' ],
				store : 'Tweets',
				flex: 1
				
			}
			
		]
	}
});