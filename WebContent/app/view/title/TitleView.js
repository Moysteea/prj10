Ext.define("GNApp.view.title.TitleView",{
extend : 'Ext.TitleBar',
xtype:'toptitlebar',
config:
	{
		docked : "top",
		xtype : "titlebar",
		items:[
		   {
			   xtype:'image',
			   id:'titleText'
		   },
		   {
			xtype:'button',
			align:'right',
			id:'sponsorshipBtn',
		   }	
		]
	}
});