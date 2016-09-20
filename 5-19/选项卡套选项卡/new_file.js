window.onload=function(){
	var section=document.getElementsByTagName("section");
	var timer=null;
	var left=document.getElementById('left').getElementsByTagName('li');
	var bottom=document.getElementsByClassName('bottom');
	var div=document.getElementsByClassName('div');
	var num=0;
	var num2=0;
	var arry=[["0.jpg","1.jpg","2.jpg","3.jpg"],["10.jpg","11.jpg","12.jpg","13.jpg"],["20.jpg","21.jpg","22.jpg","23.jpg"],["30.jpg","31.jpg","32.jpg","33.jpg"]];
	for(i=0;i<left.length;i++){
		left[i].index=i;
		left[i].onclick=function(){
			for(j=0;j<left.length;j++){
				left[j].className="";
				div[j].style.display="none";
				bottom[j].style.display="none";
			}
			this.className="active";
			div[this.index].style.display="block";
			bottom[this.index].style.display="block";
		}
	}
	for(i=0;i<bottom.length;i++){
		fn(i);
	}
	function fn(n){
		var img=div[n].getElementsByClassName('img')[0];
		var li=bottom[n].getElementsByTagName('li');
		bottom[n].style.display="none";
		for(j=0;j<li.length;j++){
			li[j].index=j;
			li[j].onclick=function(){
				for(k=0;k<li.length;k++){
					li[k].className="";
				}
				this.className="active";
				img.src="img/"+arry[n][this.index];
				num2=this.index;
			}
		}
	}
	bottom[0].style.display="block";
	div[0].style.display="block";
	timer=setInterval(auto,1000);
	function auto(){
		if(num==left.length){
			num=0;
		}
		var img=div[num].getElementsByClassName('img')[0];
		var li=bottom[num].getElementsByTagName('li');
		for(i=0;i<bottom.length;i++){
			div[i].style.display="none";
			bottom[i].style.display="none";
			left[i].className="";
		}
		left[num].className="active";
		div[num].style.display="block";
		bottom[num].style.display="block";
		img.src="img/"+arry[num][num2];
		for(i=0;i<li.length;i++){
			li[i].className="";
		}
		li[num2].className="active";
		num2++;
		if(num2==li.length){
			num++;
			num2=0;
		}
	}
	section[0].onmouseover=function(){
		clearInterval(timer);
	}
	section[0].onmouseout=function(){
		timer=setInterval(auto,1000);
	}
}
