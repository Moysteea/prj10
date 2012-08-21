Ext.define('MyApp.view.ShareMainView', {
	extend : 'Ext.Panel',
	xtype : 'sharemainview',
	config : {
		scrollable : false,
		id : 'sharemainview',
		layout : {
			type : 'vbox'
		},
		items : 
			[
				{
					xtype : 'titlebar',
					//xtype : 'toolbar',
					title: '<img src = "resources/hopeforafrica.png" height="50"/>',
					docked : 'top',
				    flex: 1,
				    items :[
				            {xtype: 'button',
				            	text: '후원하기',
				            	ui: 'action',
				            	align:'right'
				            	}
				            ]
				},
				/*
				{
					xtype: "mappanel",
					flex: 1
				},
				*/
				{
					xtype: "sharepanel",
					flex: 3
				},
				{
					xtype: "aboutschooloverlay"
				}
				
			]
	}

});