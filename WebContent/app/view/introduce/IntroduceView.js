var itemFactory = new Array();
var addIntroItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "introduceImageListStore",
			itemTpl : ' <div><tpl if="xindex=='+idx+'"><img src="{image}" style="width:320px"/></tpl></div>'
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
							      	'<img src="./resources/images/introduce/introduce_top_image.png" style="width:320px;height:49.5px"/><br/>'+
							      	'<img src="./resources/images/introduce/introduce_top_text.png" style="width:319px;height:34.5px"/><br/>'+
							      	'<img src="./resources/images/introduce/introduce_main.png" style="width:320px;height:337.5px"/>'+
									'<div style="width:260px;height:153px;position:absolute;top:153px;left:30px">'+
							      	'<video controls poster="http://gntestserver.appspot.com/Image/ev01.png" width=260 height=150>'+
									'<source src="http://gntestserver.appspot.com/video/bw01.mp4" type="video/mp4"/>'+
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
