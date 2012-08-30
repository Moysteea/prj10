Ext.define("GNApp.view.Main", {
    extend: 'Ext.Panel',
    id:'mainPanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
    	tabBarPosition: 'bottom',
    	fullscreen: true,
    	layout:'card',
        listeners: {
            activeitemchange: function (tabPanel, tab, oldTab) {
            	if("sharemainview" == tab.id){
            		if(flag){
            			initialize();
            		}
            		flag = false;
            	}
            } 
        },
        
        items: [
				{xtype:'introduceView',style:'background-color:#fff'},
				{xtype:'newsView',style:'background-color:#fff'},
				{xtype:'mediaView',style:'background-color:#fff'},
				{xtype:'sharemainview',style:'background-color:#fff'},
					{
                	xtype:'panel',
                	layout:'hbox',
                	docked:'bottom',
                	items:[
                	       {xtype:'button',id:'introduceBtn'},
                	       {xtype:'button',id:'newsBtn'},
                	       {xtype:'button',id:'mediaBtn'},
                	       {xtype:'button',id:'shareBtn'}
                	  ]
                		
                }
               
        ]
        
        
    }
    
});
