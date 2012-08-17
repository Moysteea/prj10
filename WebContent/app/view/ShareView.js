Ext.define("GNApp.view.ShareView", {
	extend : 'Ext.Panel',
	xtype: 'shareView',
	config: {
		 title: "나눔",
	        iconCls: "",
	        styleHtmlContent: true,
	        scrollable: false,
	        items: {
	            docked: "top",
	            xtype: "titlebar",
	            title: "나눔"
	        },
	        html: [
	            "나눔페이지 html"
	        ]
	}
});