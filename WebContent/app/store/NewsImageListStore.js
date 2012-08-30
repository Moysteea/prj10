Ext.define('GNApp.store.NewsImageListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'GNApp.model.NewsImageListVO'
    ],

    config: {
        autoLoad: true,
        model: 'GNApp.model.NewsImageListVO',
        storeId: 'newsImageListStore',
        proxy: {
            type: 'jsonp',
            url: 'http://gnimageserver.appspot.com/GNImageList.jsp?type=news',
            callbackKey:'GNCallBack',
            reader: {
                type: 'json'
            }
        }
    }
});
