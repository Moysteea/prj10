Ext.define("GNApp.view.NewsView", {
	extend : 'Ext.Panel',
	xtype:'newsView',
	config: {
		 title: "소식",
	        iconCls: "",
	        styleHtmlContent: true,
	        scrollable: false,
	    	layout:'card',
	        items: [{
	            docked: "top",
	            xtype: "titlebar",
	            title: "소식"
	        },
	        {
				xtype : 'list',
				itemId : 'tweetList2',
				itemTpl : [
						'<div style="margin: 10px;">',
						'<img src="{image}" /> {seq} {name} ',
						'<div>{content}</div>',
						'</div>' ],
				store : 'ItemValues'
			}
	       ]
	}
});