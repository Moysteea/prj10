Ext.define("GNApp.controller.TitleController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
        	mainPanel:'#mainPanel'
        },

        control: {
        		"#sponsorshipBtn":{
        			tap: "onSponsorshipButtonTap"
        		}, 
		        "#backBtn":{
					tap: "onBack"
				} 
			}
        },
	onSponsorshipButtonTap:function(){
		location.href='http://m.goodneighbors.kr/Payment/onceSuppt.asp';
	},
	onBack:function(){
		this.getMainPanel().setActiveItem(0);
	}
});
