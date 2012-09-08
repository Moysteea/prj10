var itemFactory = new Array();
var addIntroItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "introduceImageListStore",
			itemTpl : ' <div><tpl if="xindex=='+idx+'"><img src="{image}" style="width:100%;height:100%" /></tpl></div>'
	};
	return item;
};/*init carousel page*/ 
for(var idx=1; idx <= 4; idx++ ){
	itemFactory.push(addIntroItem(idx));
}
Ext.define("GNApp.view.introduce.IntroduceView",{
			extend : 'Ext.Panel',
			xtype:'introduceView',
			id:'introduceView',
			requires:['Ext.data.proxy.JsonP','Ext.data.Store','Ext.dataview.List','Ext.carousel.Carousel','GNApp.view.Main'],
			config : {
				styleHtmlContent : true,
				scrollable : {  direction: 'vertical'},
				layout : 'vbox',
				items : [
				        {xtype:'toptitlebar'},
						{
							xtype : 'panel',
							html:[
							      	'<img src="./resources/images/introduce/introduce_top_image.png" style="width:100%;height:12.37%"/><br/>'+
							      	'<img src="./resources/images/introduce/introduce_top_text.png" style="width:100%;height:8.64%"/><br/>'+
							      	'<img src="./resources/images/introduce/introduce_main.png" style="width:100%;height:78.99%"/>'+
									'<div style="width:80.46%;height:37.18%;position:absolute;top:38%;left:10%">'+
							      	'<video controls poster="" width="95%" height="95%">'+
									'<source src="http://www.goodneighbors.kr/campaign/2012/gn/afschool/images/hope.webm" type="video/mp4"/>'+
									'</video></div>'
							      ]
						}, {
							xtype : "carousel",
							style:'height:170px',
							id: "introduceCaro",
							items :  itemFactory,
							listeners:{
								tapstart:{
									fn:function(event){
										var itemLength = Ext.getCmp("introduceCaro").innerItems.length;
										var storeLength = Ext.getStore("introduceImageListStore").data.length;
										var currentIndex = Ext.getCmp("introduceCaro").getActiveIndex();
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
