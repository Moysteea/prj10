Ext.define("GNApp.view.Main", {
    extend: 'Ext.tab.Panel',
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
                {xtype:'introduceView'},
                {xtype:'newsView'},
                {xtype:'mediaView'},
                {xtype:'sharemainview'}
        ]
    }
    
});
