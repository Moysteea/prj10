Ext.define("GNApp.controller.MainController",{
	extend: "Ext.app.Controller",
	config: {
        refs: {
        	mainPanel: '#mainPanel',
        	introduceButton :'#introduceButton',
        	newsButton :'#newsButton',
        	mediaButton :'#mediaButton',
        	shareButton :'#shareButton'
        },

        control: {
        	"#introduceButton":{
    			 tap: "onClickIntroduceButton"
			},
			"#newsButton":{
				tap: "onClickNewsButton"
			},
			"#mediaButton":{
   			 	tap: "onClickMediaButton"
			},
			"#shareButton":{
   			 	tap: "onClickShareButton"
			}
        }
    },
   
    onClickIntroduceButton:function(){
    	this.getMainPanel().setActiveItem(1);
	},
	onClickNewsButton:function(){
    	this.getMainPanel().setActiveItem(2);
	},
	onClickMediaButton:function(){
	    this.getMainPanel().setActiveItem(3);
	},
	onClickShareButton:function(){
	    this.getMainPanel().setActiveItem(4);
	}
	
});
