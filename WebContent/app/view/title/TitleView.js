Ext.define("GNApp.view.title.TitleView",{
extend : 'Ext.TitleBar',
xtype:'toptitlebar',
config:
	{
		docked : "top",
		xtype : "titlebar",
		items:[
		   {
			xtype:'button',
			text:'후원',
			align:'right',
			id:'sponsorshipBtn'
		   }
		]
	}
});