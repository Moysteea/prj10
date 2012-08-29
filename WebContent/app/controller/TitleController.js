Ext.define("GNApp.controller.TitleController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
        },

        control: {
        		"#sponsorshipBtn":{
        			tap: "onSponsorshipButtonTap"
        		}
			}
        },
	onSponsorshipButtonTap:function(){
		location.href='http://m.goodneighbors.kr/Payment/onceSuppt.asp';
	}
});
