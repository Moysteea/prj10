Ext.application({
    name: 'GNApp',
    models: [
             'ItemVO','IntroduceImageListVO',
             'GuestBook', 'media','NewsImageListVO'
         ],
	controllers : [ 'MapController', 'TitleController', 'Main' ,'BoardController','MainController','NewsController'],

    stores: [
             'ItemStore','IntroduceImageListStore',
             'sharePeoples', 'medias','NewsImageListStore'
         ],
    views: [
            	'introduce.IntroduceView','news.NewsView','media.MediaView','title.TitleView',
            	'share.ShareMainView', 'share.AboutSchoolOverlay'
            ],

    icon: {
        '57': 'resources/icons/57-57_icon.png',
        '72': 'resources/icons/72-72_icon_02_.png',
        '114': 'resources/icons/114-114_icon.png',
        '144': 'resources/icons/144-144_icon.png'
    },

    isIconPrecomposed: true,
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('GNApp.view.Main'));
    }
});
