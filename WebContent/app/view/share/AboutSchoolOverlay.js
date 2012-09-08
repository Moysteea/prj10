
if(currentIdx == null){
	var currentIdx = "null";
}

Ext.define("GNApp.view.share.AboutSchoolOverlay", {
	extend:'Ext.Panel',
	xtype: 'aboutschooloverlay',
	requires:['Ext.Img'],
	config:{
		modal: true,
		centered:true,
		hidden:true,
		hideOnMaskTap:true,
		 transparent: true,
		frame: false,
		border: false,
		style: 'background: transparent;',
		
		items:[ 
		{ 
			docked:"top",
		},
		
		{
			layout: 'hbox',
			 style: 'background: transparent;',
			 transparent: true,
			items:[
			       {
			    	   xtype:'image',
						id : 'schoolImage1',
						style: 'background: transparent;',
						transparent: true,
						
			    	   html: [
			    	          '<canvas id="school_canvas" width="381;" height="349;"/>'
			    	          ]
			       }
				]
		}
		]
	}
});