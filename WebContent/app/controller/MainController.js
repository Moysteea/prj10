Ext.define("GNApp.controller.MainController",{
	extend: "Ext.app.Controller",
	config: {
        refs: {
        	mainPanel: '#mainPanel',
        	introduceButton :'#introduceBtn',
        	newsButton :'#newsBtn',
        	mediaButton :'#mediaBtn',
        	shareButton :'#shareBtn',
        },

        control: {
        	"#introduceBtn":{
    			 tap: "onClickIntroduceButton"
			},
			"#newsBtn":{
				tap: "onClickNewsButton"
			},
			"#mediaBtn":{
   			 	tap: "onClickMediaButton"
			},
			"#shareBtn":{
   			 	tap: "onClickShareButton"
			}
        }
    },
   
    onClickIntroduceButton:function(){
    	this.getMainPanel().setActiveItem(0);
    	this.getIntroduceButton().setStyle('background-image: url(./resources/images/tab/1-1_under_tab_Bar.png)');
    	this.getNewsButton().setStyle('background-image: url(./resources/images/tab/2_under_tab_Bar.png)');
    	this.getMediaButton().setStyle('background-image: url(./resources/images/tab/3_under_tab_Bar.png)');
    	this.getShareButton().setStyle('background-image: url(./resources/images/tab/4_under_tab_Bar.png)');
	},
	onClickNewsButton:function(){
    	this.getMainPanel().setActiveItem(1);
    	this.getIntroduceButton().setStyle('background-image: url(./resources/images/tab/1_under_tab_Bar.png)');
    	this.getNewsButton().setStyle('background-image: url(./resources/images/tab/2-1_under_tab_Bar.png)');
    	this.getMediaButton().setStyle('background-image: url(./resources/images/tab/3_under_tab_Bar.png)');
    	this.getShareButton().setStyle('background-image: url(./resources/images/tab/4_under_tab_Bar.png)');
	},
	onClickMediaButton:function(){
	    this.getMainPanel().setActiveItem(2);
	    this.getIntroduceButton().setStyle('background-image: url(./resources/images/tab/1_under_tab_Bar.png)');
    	this.getNewsButton().setStyle('background-image: url(./resources/images/tab/2_under_tab_Bar.png)');
    	this.getMediaButton().setStyle('background-image: url(./resources/images/tab/3-1_under_tab_Bar.png)');
    	this.getShareButton().setStyle('background-image: url(./resources/images/tab/4_under_tab_Bar.png)');
	},
	onClickShareButton:function(){
	    this.getMainPanel().setActiveItem(3);
	    this.getIntroduceButton().setStyle('background-image: url(./resources/images/tab/1_under_tab_Bar.png)');
    	this.getNewsButton().setStyle('background-image: url(./resources/images/tab/2_under_tab_Bar.png)');
    	this.getMediaButton().setStyle('background-image: url(./resources/images/tab/3_under_tab_Bar.png)');
    	this.getShareButton().setStyle('background-image: url(./resources/images/tab/4-1_under_tab_Bar.png)');
	}

});