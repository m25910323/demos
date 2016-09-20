window.onload=function(){
	var btn=$('#btn');
	var img=$("#img")
	var left=$("#left");
	var num1=0;
	var num2=0;
	var p=$("p");
	var onoff=true;
	btn.onclick=move;
	var dorution=5000;
	function move(){
		console.log(dorution);
		dorution-=300;
		if(dorution<=1000){
			dorution=1000;
		}
		btn.disabled=true;
		img.style.top="-24px";
		img.style.left=Math.round(Math.random()*776)+"px";
		img.src="image/"+Math.round(Math.random()*10+1)+".png";
		mTween(img,"top",426,dorution,"linear",function(){
			shake(left,"left",30,function(){
				num1++;
				p[1].innerHTML="错误:"+num1;
				if(num1==10){
					alert("胜败乃兵家常事，大侠请重新来过");
					clearInterval(img.top);
					begin();
				}else{
					move();
				}
			});
		});
	}
	img.onmousedown=function(){
		if(onoff){
			onoff=false;
			clearInterval(img.top);
			shake(left,"left",30,function(){
				num2++;
				p[0].innerHTML="得分:"+num2;
				if(num2==10){
					alert("通关");
					begin();
				}else{
					move();
				}
				onoff=true;
			});
		}
	}
	function begin(){
		btn.disabled=false;
		p[0].innerHTML="得分:0";
		p[1].innerHTML="错误:0";
		num1=0;
		num2=0;
		img.style.top="-24px";
	}
}
