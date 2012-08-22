Ext.define("GNApp.view.MediaView", {
	extend : 'Ext.Panel',
	xtype:'mediaView',
	config: {
		 title: "미디어",
	        iconCls: "",
	        styleHtmlContent: true,
	        scrollable: false,
	        items: {
	            docked: "top",
	            xtype: "titlebar",
	            title: "미디어",
	            items:{
					xtype:'button',
					text:'후원',
					align:'right',
					action:'sponsorship'
						
				}
	        },
	        html: [
	            "미디어페이지 html"
	        ]
	}
});