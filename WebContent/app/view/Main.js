Ext.define("GNApp.view.Main", {
    extend: 'Ext.Panel',
    id:'mainPanel',
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
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
                {
                	xtype:'panel',
                	layout:'hbox',
                	items:[
		                {
		                	xtype:'button',
		                	style:'width:100px;height:100px',
		                	text:'소개',
		                	id:'introduceButton'
		                },
		                {
		                	xtype:'button',
		                	style:'width:100px;height:100px',
		                	text:'소식',
		                	id:'newsButton'
		                },
		                {
		                	xtype:'button',
		                	style:'width:100px;height:100px',
		                	text:'미디어',
		                	id:'mediaButton'
		                }, {
		                	xtype:'button',
		                	style:'width:100px;height:100px',
		                	text:'나눔',
		                	id:'shareButton'
		                }
			         ]
                
                }, 
                {xtype:'introduceView'},
                {xtype:'newsView'},
                {xtype:'mediaView'},
                {xtype:'sharemainview'}
        ]
    }
    
});
