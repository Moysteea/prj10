var itemFactory = new Array();
var addItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "Tweets",
			itemTpl : ' <div><tpl if="xindex=='+idx+'">{text}</tpl>{xindex}</div>'
	};
	return item;
};/*init carousel page*/ 
for(var idx=1; idx < 6; idx++ ){
	itemFactory.push(addItem(idx));
}
Ext.define("GNApp.view.IntroduceView",{
			extend : 'Ext.Panel',
			xtype:'introduceView',
			id:'introduceView',
			config : {
				title : "소개",
				iconCls : "",
				styleHtmlContent : true,
				scrollable : false,
				layout : 'vbox',
				items : [
						{
							docked : "top",
							xtype : "titlebar",
							title : "소개",
						},
						{
							xtype : 'list',
							flex : 2,
							itemId : 'tweetList',
							itemTpl : [
									'<div style="float:left; width: 60px;">',
									'  <img src="{profile_image_url}">',
									'</div>',
									'<div style="margin-left: 62px;">',
									'  {text}<br>{created_at:date("d M Y")}<br/>',
									'{id}',
									'</div>' ],
							store : 'Tweets'
						}, {
							xtype : "carousel",
							flex : 1,
							id: "introduceCaro",
							items :  itemFactory,
							listeners:{
								tapstart:{
									fn:function(event){
										var itemLength = Ext.getCmp("introduceCaro").innerItems.length;
										var storeLength = Ext.getStore("Tweets").data.length;
										var currentIndex = Ext.getCmp("introduceCaro").getActiveIndex();
										var cycleItemCount = 0;
										if(itemLength - 2 == currentIndex){
											for(var idx=itemLength+1; idx<=storeLength && cycleItemCount <5; idx++){
												cycleItemCount++;
												Ext.getCmp("introduceCaro").add(addItem(idx));
											}
										}
									},element:"element"
								}
							}
						} ]
			}
		});
