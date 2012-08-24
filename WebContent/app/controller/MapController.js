/**
 * 지도관련 컨트롤
 */
var mapdiv;
var mapControllerContext;
var flag = true;
//TODO 나중에 하기 화면크기 적용 나중에 고민하자
/*
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");
    
  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
*/

/*
희망학교 1호
차드 요나스쿨
위치 : 차드 파샤 아테레설립연도 : 2011년 월
교육인원 :  000명
시설 : 

희망학교 2호
차드 리앤차드스쿨
위치 : 차드 도고레
설립연도 : 2012년 3월
교육인원 : 000명
시설 : 

희망학교 3호
케냐 대교아이 스쿨
위치 : 케냐 메구아라
설립연도 : 2013년 8월 건립예정
교육인원 : 500명
시설 : 교실8개, 다용도실, 운동장
         도서관, 주방시설, 화장실
         교육기자재 구비

희망학교 4호
탄자니아 스쿨
위치 : 
설립연도 : 2011년 월 일
교육인원 : 000명
시설 : 

				for(var i=0; i<phoneArray.length; i++) {
							var phone = phoneArray[i];
							var pno = phone.getAttribute("pno");
							var pname = query.selectNode("pname", phone).childNodes[0].nodeValue;
							var pimage = query.selectNode("pimage", phone).childNodes[0].nodeValue;

							var item = {
								html:	
									"<table  style='width:100%;border:1px;border-bottom-style:solid;'>" +
										"<tr>" + 
											"<td style='width:50px; padding:5px'>" + pno+ "</td>" + 
											"<td style='padding-left:5px'>" + pname + "</td>" + 
											"<td style='text-align:right;padding:5px'>" + 
												"<img style='width:30px;height:50px;' src='../image/" + pimage + "' border='0'/>" + 
											"</td>" + 
										"</tr>" + 
									"</table>"
							};
							listPanel.add(item);
						}

 */


var regionString = new Array();
regionString[0] = "차드";
regionString[1] = "케냐";
regionString[2] = "르완다";
regionString[3] = "에티오피아";
regionString[4] = "이집트";
regionString[5] = "탄자니아";
regionString[6] = "말라위";

var currentIdx; 

var showDetailOfSchool = function(data){
	
	currentIdx = data;
	var commonAboutSchool = "<div>희망학교 "+ data+"호</div>" +
							"<div>"+regionString[data]+"스쿨</div>" + 
							"<div>위치 : "+regionString[data]+"</div>"+
							"설립연도 : <br>"+
							"교육인원 : <br>"+
							"시설 : ";
	

	switch(data){
	case 0:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 1:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 2:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 3:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 4:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 5:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	case 6:
		mapControllerContext.getSchoolImage1().setSrc("resources/schoolsample1.png");
		mapControllerContext.getSchoolImage2().setSrc("resources/schoolsample2.png");
		mapControllerContext.getSchoolText().setHtml(commonAboutSchool);
		break;
	}
	mapControllerContext.getAboutSchoolOverlay().show();
};

// 초기화 지도 렌더링
 function initialize() {
	 // 초기 위치 설정
	 var centerLatlng = new google.maps.LatLng(2.3811507461795243, 23.73046875);	 
	 var schoolLatLngList = new Array();	 
	 var i; 
	 // 학교 위치 저장
	 for(i = 0; i < 7; i++){
		 schoolLatLngList[i] = new google.maps.LatLng(positionInfoList[i].x, positionInfoList[i].y);	 
	 }
	 
   // 지도 옵션
   var myOptions = {
      zoom: 3,
      center: centerLatlng,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
   // 지도 객체 생성
   var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

   
   // 팝업 안 내용 스트링
   var schoolContent = new Array();
   for(var i = 0; i<7; i++){
	   schoolContent[i] =
	   '<img src = "resources/schoolsample1.png" width = "40" height="40"/> '+
	   regionString[i] +
	   ' 스쿨'+
	   '<img src = "resources/Arrow-Right-blue-48.png" width = "30" height = "30" onclick="showDetailOfSchool('+i+')" align = "right"/>';   
   }
   // 팝업윈도우 설정
   var infowindowList = new Array();
   for(i = 0; i<7; i++){
	   infowindowList[i] = new google.maps.InfoWindow({
			  content : schoolContent[i],
			  maxWidth: 300
		   }); 
   }

   // 마커생성
   var markerList = new Array();
   for(i = 0; i<7; i++){
	   markerList[i] = new google.maps.Marker({
		   position: schoolLatLngList[i],
		   map: map,
		   title: ''+regionString[i]+''
	   });
   }

   // 나라 클릭하면 말풍선 생기고 자신을 제외한 모든 정보는 사라지게한다.
   for(i = 0; i<7; i++){
	   (function(m){
		   google.maps.event.addListener(markerList[m], 'click', function(){
			   for(var j = 0; j<7; j++){
				(function(n){
					if(m != n){
						infowindowList[n].close();	
					}   
				   })(j);	
				}
			   infowindowList[m].open(map, markerList[m]); 
			});      
		   
	   })(i);
   }
  
   
   google.maps.event.addListener(map, 'click', function() {
	   for(i = 0; i<7; i++){
			(function(n){
					infowindowList[n].close();	   
			   })(i);
	   }
	    });
   
}


// 위치 정보 리스트
var positionInfoList = new Array();
// 포인트 객체
 Point = function(x, y){
		this.x = x;
		this.y = y;
	};
////////////////////////////////////////////////////////////////////
/**
 * 위치정보
 */

// 6개네~~~~~
// 차드 1, 2호
positionInfoList[0] = new Point(14.871530941232791, 18.5888671875);
// 케냐 3호 (진행중)
positionInfoList[1] = new Point(0.38561727300386367, 37.9248046875);
// 르완다
positionInfoList[2] = new Point(-2.1286603959017336, 29.7509765625);
// 에티오피아
positionInfoList[3] = new Point(8.45498586024049, 39.0234375);
// 이집트
positionInfoList[4] = new Point(26.776020282399745,  30.1025390625);
// 탄자니아
positionInfoList[5] = new Point(-6.354607548316607, 34.98046875);
// 말라위
positionInfoList[6] = new Point(-13.643851433773083, 33.92578125);
///////////////////////////////////////////////////////////////////////
 // 지금 안쓴다.
var canvas;
var context;
var image;
var flag = new Array();


// 컨트롤 시작
Ext.define('GNApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	aboutSchoolOverlay : 'aboutschooloverlay',
        	schoolImage1 : 'aboutschooloverlay #schoolImage1',
        	schoolImage2 : 'aboutschooloverlay #schoolImage2',
        	schoolText : 'aboutschooloverlay #schoolText'
        },
        control: {
        }        
    },
    // 초기화 작업
    launch: function() {
    	mapControllerContext = this;
	}
});