
Ext.define('GNApp.view.media.MediaView', {
    extend: 'Ext.Panel',
    xtype: 'mediaView', 
    config: {
        id: 'MainView',
        title: 'media',
        layout: {
            type: 'card',
        },
        items: [
                {xtype:'toptitlebar'},
            {
                xtype: 'dataview',
                id: 'TweetData',
                scrollable: false,
                padding: '5px',
                html: [
                       '<div>'+
                       '  <img src="./resources/images/media/3P_up_Main_Text.png" style="width:100%;height:17%"/><br/>'+
                       '</div>'
                ],
                itemTpl: [
                    '<div>',
                    '  <img src="{profile_image_url}" style="float: left; padding:3px; width:25%; height:20%">',
                    '</div>'
                ], /* Thumbnail image binding to #MainView */
                store: 'medias',
            }
           
        ]
    }
});