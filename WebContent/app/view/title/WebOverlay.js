function sponsorshipButton(mainPanel , url ){
var sponsorOverlayTitlebar = new Ext.TitleBar({
			docked:'top',
			items:[{
					   xtype:'button',
					   align:'left',
					   text:'X',
				   }],
					listeners:{
						tap:{
							fn:function(event){
								Ext.getCmp("sponsorOverlay").destroy();
							},element:"element"
						}
					},
		});
		var viewPortWidth = Ext.Viewport.windowWidth;
		var viewPortHeight = Ext.Viewport.windowHeight;
		var styleText = "width:"+(viewPortWidth*4-40)+"px; height:"+(viewPortHeight*4-40)+"px;";
		var sponsorOverlay = new Ext.Panel({
			id:'sponsorOverlay',
    		scrollable: false,
    		width:600,
    		height:600,
    		hidden: true,
    		items:sponsorOverlayTitlebar,
    		hideOnMaskTap: true,
    		html: '<div><iframe src="'+url+'"'+ 
    			'style="'+styleText+
	    		'-moz-transform: scale(0.5);' +
				'-webkit-transform: scale(0.5);'+ 
				'-o-transform: scale(0.5);'+
	    	    '-ms-transform: scale(0.5);'+
	    	    'transform: scale(0.5); '+
	    	    '-moz-transform-origin: top left;'+
	    	    '-webkit-transform-origin: 0 0;'+
	    	    '-o-transform-origin: top left;'+
	    	    '-ms-transform-origin: top left;'+
	    	    'transform-origin: top left; " id="iframe" /></div>',
    	});
		sponsorOverlay.setWidth(viewPortWidth-10);
		sponsorOverlay.setHeight(viewPortHeight-10);
		sponsorOverlay.showBy(mainPanel);
}
