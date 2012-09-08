Ext.define("GNApp.controller.TitleController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
        	mainPanel : "#mainPanel",
        },
        control: {
        		"#sponsorshipBtn":{
        			tap: "onSponsorshipButtonTap"
        		},
        		"#informationBtn":{
        			tap: "onInformationButtonTap"
        		},
			}
        },
	onSponsorshipButtonTap:function(){
		sponsorshipButton(this.getMainPanel(),"http://m.goodneighbors.kr/Payment/bizsuppt.asp?campaigncd=1879");
	},
	onInformationButtonTap:function(){
		var overlayTitlebar = new Ext.TitleBar({
			docked:'top',
			items:[{
					   xtype:'button',
					   align:'right',
					   text:'X',
				   }],
					listeners:{
						tap:{
							fn:function(event){
								Ext.getCmp("informationOverlay").destroy();
							},element:"element"
						}
					},
		});
		var viewPortWidth = Ext.Viewport.windowWidth;
		var viewPortHeight = Ext.Viewport.windowHeight;
		var informationOverlay = new Ext.Panel({
			id:"informationOverlay",
    		modal: true,
    		scrollable: false,
    		width:300,
    		height:300,
    		hidden: true,
    		hideOnMaskTap: true,
    		items: overlayTitlebar,
    		html: '<div><img src="./resources/images/information_pop.png" style="width:100%;height:100%;"/></div>',
    	});
		informationOverlay.setWidth(viewPortWidth-10);
		informationOverlay.setHeight(viewPortHeight-10);
		informationOverlay.showBy(this.getMainPanel());
	}
	
});

