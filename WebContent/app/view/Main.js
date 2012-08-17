Ext.define("GNApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        
        items: [
                {xtype:'introduceView'},
                {xtype:'newsView'},
                {xtype:'mediaView'},
                {xtype:'shareView'}
        ]
    }
});
