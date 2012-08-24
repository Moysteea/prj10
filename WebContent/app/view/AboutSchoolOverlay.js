
if(currentIdx == null){
	var currentIdx = "null";
}

Ext.define("GNApp.view.AboutSchoolOverlay", {
	extend:'Ext.Panel',
	xtype: 'aboutschooloverlay',
	requires:['Ext.Img'],
	config:{
		modal: true,
		centered:true,
		hidden:true,
		hideOnMaskTap:true,
		width: 300, height: 360,
		layout: 'vbox',
		items:[ 
		{ 
			xtype:"titlebar",
			docked:"top",
			title:"about School"
		},
		
		{
			layout: 'hbox',
			flex:1,
			items:[
					{
						xtype:'image',
						id : 'schoolImage1',
						flex :1
					},
					{
						xtype:'image',
						id : 'schoolImage2',
						flex :1
					}
				]
		}	
		,
		{
            xtype: 'panel',
            id : 'schoolText',
            flex: 2,
        }
		],
		scrollable: true,
	}
});