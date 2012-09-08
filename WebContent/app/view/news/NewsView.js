var itemFactory = new Array();
var addNewsItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "newsImageListStore",
			itemTpl : ' <div style="width:100%;height:100%"><tpl if="xindex=='+idx+'"><img src="{image}" style="width:100%;height:100%"/></tpl></div>'
	};
	return item;
};/*init carousel page*/ 
for(var idx=1; idx < 6; idx++ ){
	itemFactory.push(addNewsItem(idx));
}

Ext.define("GNApp.view.news.NewsView", {
	extend : 'Ext.Panel',
	xtype:'newsView',
	config: {
	        styleHtmlContent: true,
	        scrollable: false,
	    	layout:'vbox',
	        items: [
	                {xtype:'toptitlebar'},
	                {
	                	xtype:'panel',
	                	html:[
							'<img src="./resources/images/news/news_top_image.png" style="width:100%;height:12.37%"/><br/>'+
							'<img src="./resources/images/news/news_top_text.png" style="width:100%;height:8.62%"/><br/>'
							]},
				{
					xtype : "carousel",
					id: "newsCaro",
					style:'height:230px;margin-bottom:15px',
					items :  itemFactory,
					listeners:{
						tapstart:{
							fn:function(event){
								var itemLength = Ext.getCmp("newsCaro").innerItems.length;
								var storeLength = Ext.getStore("newsImageListStore").data.length;
								var currentIndex = Ext.getCmp("newsCaro").getActiveIndex();
								var cycleItemCount = 0;
								if(itemLength - 2 == currentIndex){
									for(var idx=itemLength+1; idx<=storeLength && cycleItemCount <5; idx++){
										cycleItemCount++;
										Ext.getCmp("newsCaro").add(addNewsItem(idx));
									}
								}
							},element:"element"
						}
					}
				},
				{
					xtype:'panel',
					layout:'hbox',
					items:[
					       {xtype:'button',id:'manySponseBtn'},
					       {xtype:'button',id:'onceSponseBtn'}
					       ]
					}
	       ]
	}
});