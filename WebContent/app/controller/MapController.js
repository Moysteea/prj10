/**
 * 지도관련 컨트롤
 */

//TODO 나중에 하기 화면크기 적용 나중에 고민하자



// 포인트 객체
 Point = function(x, y){
		this.x = x;
		this.y = y;
	};

var canvas;
var context;
var image;
var points = new Array();
var mapdiv2;
function onClickeMap(event) {
	var newDiffX;
	var newDiffY;
	
	var canvasWidth = canvas.offsetWidth;
	var canvasHeight = canvas.offsetHeight;
	
	newDiffX = (20/640) * canvasWidth;
	newDiffY = (20/659) * canvasHeight;
	for(var i in schoolPositionList){
		points[i] = new Point((schoolPositionList[i].x*canvasWidth), (schoolPositionList[i].y*canvasHeight));
	}

	var x = event.x;
	var y = event.y;
	
	x = (event.offsetX-canvas.offsetLeft);
	y = (event.offsetY-canvas.offsetTop);
	
	
	for(var i in points){
		if( (points[i].x <= x && points[i].x+newDiffX >= x) &&
				(points[i].y <= y &&  points[i].y+newDiffY >= y)
				)
				{
					modal(i);
				}
	}

}
var schoolCanvas;
var schoolContext;
var schoolImage;
var huwanButton;
function modal(index){
	
	var windowWidth = window.document.body.offsetWidth;
	var windowHeight = window.document.body.offsetHeight;
	
	schoolImage = new Image();
	switch(index){
	case "1":
		schoolImage.src = '/GNApp3/resources/images/share/1ho.png';
		break;
	case "3":
		schoolImage.src = '/GNApp3/resources/images/share/2ho.png';
		break;
	case "5":
		schoolImage.src = '/GNApp3/resources/images/share/kena.png';
		break;
	case "6":
		schoolImage.src = '/GNApp3/resources/images/share/kenadaego.png';
		break;
	case "7":
		schoolImage.src = '/GNApp3/resources/images/share/tanjaniaompugi.png';
		break;
	case "8":
		schoolImage.src = '/GNApp3/resources/images/share/tanjaniamaendallo.png';
		break;
	case "9":
		schoolImage.src = '/GNApp3/resources/images/share/lwanda.png';
		break;
	default:
		return;
		break;
	}

	schoolCanvas = document.getElementById('school_canvas');
	schoolContext = schoolCanvas.getContext('2d');
	
	schoolContext.clearRect(0, 0, schoolCanvas.width, schoolCanvas.height);
	schoolImage.onload = function() {
		schoolContext.drawImage(schoolImage, 0, 0, 270, schoolCanvas.height);
		huwanButton = new Image();
		huwanButton.src = '/GNApp3/resources/images/share/howanbutton.png';
		huwanButton.onload=function(){
			schoolContext.drawImage(huwanButton, 258, 145, 125, 125);
			
		};
    };   

    schoolCanvas.addEventListener("click", onClickeDonationButton, false);

	mapControllerContext.getAboutSchoolOverlay().setWidth( ((381/640) * windowWidth)    );
	mapControllerContext.getAboutSchoolOverlay().setHeight( ((349/1033) * windowHeight) );
	mapControllerContext.getAboutSchoolOverlay().show();
	
}
function onClickeDonationButton(event){
	
	var x = (event.offsetX-canvas.offsetLeft);
	var y = (event.offsetY-canvas.offsetTop);

	var canvasWidth = schoolCanvas.offsetWidth;
	var canvasHeight = schoolCanvas.offsetHeight;
	
	var newDiffX = (125/381) * canvasWidth;
	var newDiffY = (125/349) * canvasHeight;
	
	var buttonLeftTopPostionX = (258/381)*canvasWidth;
	var buttonLeftTopPostionY = (145/349)*canvasHeight;
	
	
		if( (buttonLeftTopPostionX <= x && buttonLeftTopPostionX+newDiffX >= x) &&
				(buttonLeftTopPostionY <= y &&  buttonLeftTopPostionY+newDiffY >= y)
				)
				{
			  		location.href='http://m.goodneighbors.kr/Payment/onceSuppt.asp';
				}
	
}

// 절대좌표
var originSchoolPositionList = new Array();
//niger
originSchoolPositionList[0] = new Point(195, (370-282));
//chad 1[y-top], 2[o], 3[y-bottom]
// 차드 1호
originSchoolPositionList[1] = new Point(260, (392-282));
originSchoolPositionList[2] = new Point(305, (410-282));
// 차드 2호
originSchoolPositionList[3] = new Point(255, (480-282));
//ethiopia
originSchoolPositionList[4] = new Point(503, (475-282));
//kenya top, bottom
// 케냐 위
originSchoolPositionList[5] = new Point(503, (560-282));
// 케냐 아래
originSchoolPositionList[6] = new Point(490, (612-282));
//rwanda
// 르완다
originSchoolPositionList[7] = new Point(385, (620-282));
//tansznia top, bottom
// 탄자니아 위
originSchoolPositionList[8] = new Point(434, (633-282));
// 탄자니아 아래
originSchoolPositionList[9] = new Point(470, (680-282));
//malawi
originSchoolPositionList[10] = new Point(423, (742-282));

// 상대좌표 [캔버스 크기나눠서 비율을 구함]
var schoolPositionList = new Array();
for(var i in originSchoolPositionList){
	schoolPositionList[i] = new Point((originSchoolPositionList[i].x/640), (originSchoolPositionList[i].y/659));
}



var init = function(){
	
	canvas = document.getElementById('map_canvas');
	context = canvas.getContext('2d');
	image = new Image();
	image.src = '/GNApp3/resources/images/share/nara.png';
	context.clearRect(0, 0, canvas.width, canvas.height);
	image.onload = function() {
		context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };   
    canvas.addEventListener("click", onClickeMap, false);
    
    
    var donationNumber = 500;
    
    document.getElementById("donationCondition").innerHTML = "현재까지 기부현황 : 총 "+donationNumber+"명 참여";
    //var donationNumberURL = "http://www.goodneighbors.kr/App/Hope_xml.asp";
   
    
};

// 컨트롤 시작
Ext.define('GNApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	aboutSchoolOverlay : 'aboutschooloverlay',
        	schoolImage1 : 'aboutschooloverlay #schoolImage1',
        	schoolImage2 : 'aboutschooloverlay #schoolImage2',
        	schoolText : 'aboutschooloverlay #schoolText',
        	buttonBar : 'mainpanel #bottomBtns',
        	buttonBar2 : '#introduceBtn',
        	toppanel : '#topshareHtml',
        	bottompannel : '#bottomshareHtml'
        },
        control: {
        	
        }        
    },
    // 초기화 작업
    launch: function() {
    	//init();
    	mapControllerContext = this;
	}
});
