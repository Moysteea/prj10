var itemFactory = new Array();
var addIntroItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "introduceImageListStore",
			itemTpl : ' <div><tpl if="xindex=='+idx+'"><img src="{image}" /></tpl></div>'
	};
	return item;
};/*init carousel page*/ 
for(var idx=1; idx < 6; idx++ ){
	itemFactory.push(addIntroItem(idx));
}
Ext.define("GNApp.view.introduce.IntroduceView",{
			extend : 'Ext.Panel',
			xtype:'introduceView',
			id:'introduceView',
			requires:['Ext.data.proxy.JsonP','Ext.data.Store','Ext.dataview.List','Ext.carousel.Carousel','GNApp.view.Main'],
			config : {
				title : "소개",
				iconCls : "",
				styleHtmlContent : true,
				scrollable : false,
				layout : 'vbox',
				items : [
				        {xtype:'toptitlebar'},
						{
							xtype : 'panel',
							flex : 2,
							style:'background-color:#e2e2e2;',
							html:[
									'<video controls poster="http://gntestserver.appspot.com/Image/ev01.png" width="320" height="240">',
									'<source src="http://gntestserver.appspot.com/video/bw01.mp4" type="video/mp4"/>',
									'</video>'
							      ]
						}, {
							xtype : "carousel",
							flex : 1,
							id: "introduceCaro",
							items :  itemFactory,
							listeners:{
								tapstart:{
									fn:function(event){
										var itemLength = Ext.getCmp("introduceCaro").innerItems.length;
										var storeLength = Ext.getStore("introduceImageListStore").data.length;
										var currentIndex = Ext.getCmp("introduceCaro").getActiveIndex();
										//width  console.log(Ext.getCmp("introduceCaro").itemLength); 
										var cycleItemCount = 0;
										if(itemLength - 2 == currentIndex){
											for(var idx=itemLength+1; idx<=storeLength && cycleItemCount <5; idx++){
												cycleItemCount++;
												Ext.getCmp("introduceCaro").add(addIntroItem(idx));
											}
										}
									},element:"element"
								}
							}
						} ]
			}
		});
