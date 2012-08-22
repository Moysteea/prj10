Ext.define('GNApp.view.test', {
	extend : 'Ext.Panel',
	xtype : 'test',
	config : {
		scrollable : false,
		id : 'test1',
		items : 
			[
				{
					xtype: "aboutschooloverlay"
				},
				{
					html : [ 'dssdsdsdsd' ].join("")		
				}
				
			]
	}

});