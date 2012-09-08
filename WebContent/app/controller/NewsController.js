Ext.define("GNApp.controller.NewsController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
        	mainPanel : "#mainPanel",
        },

        control: {
        		"#onceSponseBtn":{
        			tap: "onOnceSponseBtnTap"
        		},
        		"#manySponseBtn":{
        			tap: "onManySponseBtnTap"
        		}
			}
        },
    onOnceSponseBtnTap:function(){
    	sponsorshipButton(this.getMainPanel(),"http://m.goodneighbors.kr/Payment/onceSuppt.asp");
	},
	onManySponseBtnTap:function(){
		sponsorshipButton(this.getMainPanel(),"http://m.goodneighbors.kr/Payment/bizsuppt.asp?campaigncd=1879");
	}
});
