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
					xtype : 'toolbar',
					docked : 'top',
					title : '공유합시다',
				    flex: 1
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