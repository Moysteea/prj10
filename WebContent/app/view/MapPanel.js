var sizeWidth = window.screen.availWidth / 2;
var sizeHeight = window.screen.availHeight / 2;


Ext.define('MyApp.view.MapPanel', {
	extend : 'Ext.Panel',
	xtype : 'mappanel',
	id : 'mappanel',
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
						xtype : 'panel',
						id : 'mapArea',
						html : ['<div id="map" style = "width : 100%; height : 200px;"></div>' ].join("")
					}
			]
	}
	

});