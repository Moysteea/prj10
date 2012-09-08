
Ext.define('GNApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: '#MainView',
            tweetData: '#TweetData',
            tweetPreview: '#TweetPreview'
        },
        control: {
            "#TweetData": {
                itemtap: 'onDataItemTap'
            }
        }
    },

    // dataview(Thumbnail) image itemtap event
    onDataItemTap: function(dataview, index, target, record, e, options) {
     var viewPortWidth = Ext.Viewport.windowWidth;
     
     var windowWidth = viewPortWidth / 2.5;
     
    	var overlays = new Ext.Panel({
    		modal: true,
    		scrollable: false,
    		hidden: true,
    		hideOnMaskTap: true,
    		width: 300, height: 300,
    		html: '<div><img src="'+record.data.profile_image_url+'" style="width:290px;height:290px;"/></div>',
    	});
//    	overlays.setWidth(windowWidth);
    	overlays.setLeft((viewPortWidth - windowWidth) / 2);
    	overlays.showBy(dataview);
    },

});