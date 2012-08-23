// 컨트롤 시작
Ext.define('GNApp.controller.BoardController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	writeCommentOverlay: 'writecommentoverlay',
        	writer : "writecommentoverlay textfield",
        	content : "writecommentoverlay textareafield"
        },

        control: {
        	"#btnWriteComment" : {
        		tap : "onWriteComment"
        	},
        	"#btnWriteOk" : {
        		tap : "onWriteCommentOk"
        	},
        	"#btnFacebook" : {
        		tap : "onShareToFacebook"
        	}
        }        
    },
   
    
    // 초기화 작업
    launch: function() {
    	//initialize();
    	
	}
    ,
    onWriteComment : function(btn, e){
    	this.getWriteCommentOverlay().show();
    }
    ,
    // 작성완료 -> 게시판 추가
    onWriteCommentOk : function(btn, e){    	
    	console.log(this.getWriter().getValue());
    	console.log(this.getContent().getValue());
    	//초기화후 클리어
    	this.getWriter().setValue("");
    	this.getContent().setValue("");
    	this.getWriteCommentOverlay().hide();
    }
    ,
    // facebook에 공유
    onShareToFacebook : function(btn, e){
    	console.log("페이스북에 공유해보자");
    }
    
});