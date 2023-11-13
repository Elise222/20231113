var sound1
function preload(){
  sound1 = loadSound("75313__oymaldonado__bluesy-rock-guitar1.wav") 
    //先把音樂檔載入到sound1程式碼中
}



function setup() {
  createCanvas(windowWidth,windowHeight );//隨視窗大小呈現畫面
  background("#faf3dd")//背景
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
    //音樂的程式碼
}

var fc //宣告
function draw() {

  background(0);
	stroke(225)//框線顏色
	noFill() //無填滿顏色
  if(sound1.isPlaying())//如果音樂撥放
  {
      fc = map(analyzer.getLevel(),0,1,0,100) //畫面隨音樂彈跳
  }
	else//否則
  {
     fc = map(mouseX,0,width,0,100)//畫面隨滑鼠位置改變
  }

  for(var j=0;j<height/50;j=j+1)
  {
   for(var i=0;i<width/50;i=i+1)
   {
   ellipse(30+50*i,25+50*j,40+fc) 
   ellipse(25+50*i,25+50*j,50+fc)
   ellipse(25+50*i,25+50*j,20+fc)
	 rect(50+50*i,50+50*j,30+fc)
	 rect(25+50*i,25+50*j,50+fc)
	 rect(50+50*i,50+50*j,10+fc)
		 
		 //每個圖案的大小設定
   }
  }
  fill("#fb8500")//字的顏色
  textSize(fc+15)//字的大小
  text("411730426高于惠",width/2,height/2)
  //字的內容和位置

 }

//按下滑鼠播放和停止音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
