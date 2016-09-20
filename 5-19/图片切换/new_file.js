window.onload=function(){
	//获取元素
	var arry=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];
	var img=document.getElementsByTagName("img");
	var left=document.getElementsByClassName("left");
	var right=document.getElementsByClassName("right");
	var num=1;
	//设置向右切换的点击事件
	right[0].onclick=function(){
		//没到最后一张时 每次点击加1；
		if(num<arry.length){
			img[0].src=arry[num];
			num++;
		}else{//到最后一张时换成第一张并从1开始计数；
			img[0].src=arry[0];
			num=1;
		}
	}
	left[0].onclick=function(){
		if(num>1){  //同理
			img[0].src=arry[num-2];
			num--;
		}else if(num=1){
			img[0].src=arry[arry.length-1];
			num=arry.length;
		}
	}
}
