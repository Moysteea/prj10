var itemFactory = new Array();
var addNewsItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "newsImageListStore",
			itemTpl : ' <div><tpl if="xindex=='+idx+'"><img src="{image}" style="width:302.5px;"/></tpl></div>'
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
	        scrollable : {  direction: 'vertical'},
	    	layout:'vbox',
	        items: [
	                {xtype:'toptitlebar'},
	                {
	                	xtype:'panel',
	                	html:[
							'<img src="../../../GNApp/resources/images/news/news_top_image.png" style="width:320px;height:49.5px"/><br/>'+
							'<img src="../../../GNApp/resources/images/news/news_top_text.png" style="width:319px;height:34.5px"/><br/>'
							]},
				{
					xtype : "carousel",
					id: "newsCaro",
					style:'height:280px',
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