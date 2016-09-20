window.onload=function(){
	var li=document.getElementsByTagName('li');
	var ul=document.getElementsByTagName('ul');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var poi=document.getElementById('circle').getElementsByTagName('span');
	var num=0;
	var arry=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	var timer;
	var timer2;
	var lilength=getComputedStyle(li[0]).width;
	poi[0].className="active";
	for(i=0;i<li.length;i++){
		var a=i%5;
		switch(a){
			case 0:
			li[i].style.backgroundImage="url(img/"+arry[0]+")";
			break;
			case 1:
			li[i].style.backgroundImage="url(img/"+arry[1]+")";
			break;
			case 2:
			li[i].style.backgroundImage="url(img/"+arry[2]+")";
			break;
			case 3:
			li[i].style.backgroundImage="url(img/"+arry[3]+")";
			break;
			case 4:
			li[i].style.backgroundImage="url(img/"+arry[4]+")";
			break;
		}
		
	}
	move();
	right.onclick=function(){
		num++;
		num%=li.length;
		for(j=0;j<poi.length;j++){
			poi[j].className="";
		}
		poi[num].className="active";
		move();
//		ul[0].style.left=-(parseFloat(lilength)*num)+'px';
	}
	left.onclick=function(){
		num--;
		if(num<0){
			num=li.length-1;
		}
		num%=li.length;
		for(j=0;j<poi.length;j++){
			poi[j].className="";
		}
		poi[num].className="active";
		move();
//		ul[0].style.left=-(parseFloat(lilength)*num)+'px';
	}
	for(i=0;i<poi.length;i++){
		poi[i].index=i;
		poi[i].onclick=function(){
			num=this.index;
			for(j=0;j<poi.length;j++){
				poi[j].className="";
			}
			this.className="active";
			ul[0].style.left=-580*this.index+'px';
		}
	}
	function move(){
		clearInterval(timer);
		var startTime=new Date().getTime();
		var dorution=1000;
		var begin=parseFloat(getComputedStyle(ul[0]).left);
		var cont='-'+parseFloat(lilength)*num-begin;
		timer=setInterval(function(){
			var time=new Date().getTime()-startTime;
			if(time>dorution){
				time=dorution;
				clearInterval(timer);
			}
			var value=begin+cont/dorution*time;
			ul[0].style.left=value+'px';
		},30);
		
		
	}
	
}
