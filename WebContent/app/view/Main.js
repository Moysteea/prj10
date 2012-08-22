Ext.define("GNApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
    	fullscreen: true,
        tabBarPosition: 'bottom',
        
        items: [
                {xtype:'introduceView'},
                {xtype:'newsView'},
                {xtype:'mediaView'},
                {xtype:'sharemainview'}
        ]
    }
});
