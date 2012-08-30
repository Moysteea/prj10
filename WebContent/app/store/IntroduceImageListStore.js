Ext.define('GNApp.store.IntroduceImageListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'GNApp.model.IntroduceImageListVO'
    ],

    config: {
        autoLoad: true,
        model: 'GNApp.model.IntroduceImageListVO',
        storeId: 'introduceImageListStore',
        proxy: {
            type: 'jsonp',
            url: 'http://gnimageserver.appspot.com/GNImageList.jsp?type=introduce',
            callbackKey:'GNCallBack',
            reader: {
                type: 'json'
            }
        }
    }
});
