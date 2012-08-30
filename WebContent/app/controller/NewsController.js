Ext.define("GNApp.controller.NewsController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
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
        location.href='http://m.goodneighbors.kr/Payment/onceSuppt.asp';
	},
	onManySponseBtnTap:function(){
		location.href='http://m.goodneighbors.kr/Payment/bizsuppt.asp?campaigncd=1879';
	}
});
