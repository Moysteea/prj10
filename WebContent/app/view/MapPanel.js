/*
 * 안쓴다
 */

//var sizeWidth = window.screen.availWidth / 2;
//var sizeHeight = window.screen.availHeight / 2;
Ext.define('MyApp.view.MapPanel', {
	extend : 'Ext.Panel',
	xtype : 'mappanel',
	id : 'mappanel',
	layout: 'card',
	config : {
		/*
		items : [
				{
					xtype : 'panel',
					id : 'mapArea',
					html : [ '<canvas id="mapCanvas" width="' + 300
							+ '" height="' + 200
							+ '">Please HTML5</canvas><br>' ].join("")			
				}
		]
		
		*/
		/*
		items : [
					{
						xtype : 'panel',
						id : 'mapArea',
						html : [ '<div onload="init()">' +
								'<div id="map"></div></div>' ].join("")
					}
			]
			*/
		items : [
					{
						xtype:'map',
						useCurrentLocation: true
						/*
						xtype : 'panel',
						id : 'mapArea',
						html : ['<div id="map_canvas" style="width : 100%; height : 100%;"></div>' ].join("")
						*/
					}
			]
	}
	

});