Ext.define('MyApp.view.GuestBookPanel', {
	extend : 'Ext.Panel',
	xtype: 'guestbookpanel',
	config : {
		scrollable : true,
		id : 'GuestBookPanel',
		layout : {
			type : 'vbox'
		},
		items : [ 
				{
					xtype : 'toolbar',
					docked : 'top',
					title : '공유합시다',
				},
				{
					/*
					xtype: 'panel',
					contentEl: 'dd',
					*/
					id: 'mapArea',
					html: ['<canvas id="mapCanvas" width="300" height="200">Please HTML5</canvas><br>',
					       '<div id="opinionArea">aa</div> <br>'
					       ].join(""),
					flex: 1
				},
				/*
				
				{
					 xtype: 'image',
					 src: 'http://sstatic.naver.net/keypage/lifesrch/worldmap/img2/img_worldmap7.png',
					 flex: 1,
					 maxWidth: '200%',
				     maxHeight: '200%'
				},
				*/
				/*
				{
					xtype: 'panel',
					fullscreen: true,
					flex : 1,
					html : "<button style='width:100px'>버튼1 </button>"
				},

	
				{
					xtype: 'panel',
					layout: 'card',
					flex: 1,
					items: [{
						xtype : 'list',
						id : 'guestList',
						flex : 1,
						itemTpl : [ '<div style="float:left; width: 60px;">',
								'{name}', '</div><br>', '<div>',
								'{created_at:date("Y M d")}<br>', '{text}',
								'</div>' ],
						store : 'Id_GuestBook',
						
					}
					]
						
	
				} 
				*/
				
				]
		
		
	}
	

});