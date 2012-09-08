//var sizeWidth = 640;
//var sizeHeight = 659;
var sizeWidth = document.getElementsByTagName("body").width;
var sizeHeight = document.getElementsByTagName("body").height;
Ext.define('GNApp.view.share.ShareMainView', {
	extend : 'Ext.Panel',
	xtype : 'sharemainview',
	config : {
		fullScreen:true,
		title : "나눔",
		iconCls: "user",
		styleHtmlContent: true,
		scrollable : false,
		id : 'sharemainview',
		layout : {
			type : 'vbox'
		},
		
		items : 
			[
			   
				{xtype:'toptitlebar'},				
				{	xtype : 'panel',
					id : 'topshareHtml',
					align : 'middle',
					html:[
					      '<center><img src="./resources/images/share/logo.png"style="width:100%;height:14%"></center>'+
					      '<div id = "donationCondition">'+
					      '</div>'
					      ]
				},
				{	xtype : 'panel',
					id : 'bottomshareHtml',
				html:[				      
				      '<canvas id="map_canvas" width="'+sizeWidth+';" height="'+sizeHeight+';"/>'
				      ]
				},
				
				{
					xtype: "aboutschooloverlay"
				}
			]
	}

});