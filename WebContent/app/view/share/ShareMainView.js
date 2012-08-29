Ext.define('GNApp.view.share.ShareMainView', {
	extend : 'Ext.Panel',
	xtype : 'sharemainview',
	config : {
		title : "나눔",
		iconCls: "user",
		styleHtmlContent: true,
		scrollable : false,
		id : 'sharemainview',
		layout : {
			type : 'vbox'
		},
		items : 
			[
				{xtype:'toptitlebar'},
				{
					xtype: "sharepanel",
					flex: 3
				},
				{
					xtype: "writecommentoverlay"
				},
				{
					xtype: "aboutschooloverlay"
				}
			]
	}

});