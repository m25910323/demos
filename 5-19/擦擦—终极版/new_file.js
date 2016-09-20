//window.onload=function(){
//	var span=document.getElementsByClassName('small');
//	var div=document.getElementsByClassName('main');
//	var c=document.getElementsByTagName('c');
//	var cont=0;
//	var sum=0;
//	for(i=0;i<c.length;i++){
//		for(i=0;i<c.length;i++){
//			if(c[i].style.width=='0px'){
//				sum++;
//				if(sum==10){
//					alert('haha');
//				}
//			}else{
//				c[i].onmouseover=function(){
//					this.style.width="0px";
//					this.style.height="0px";
//					cont++;
//					if(cont==100){
//						for(i=0;i<c.length;i++){
//							span[i].style.marginRight="10px";
//							span[i].style.marginBottom="10px";
//						}
//						div[0].style.backgroundImage="none";
//					}
//				}
//			}
//		}
//	}
//}

window.onload=function(){
	
	var span=document.getElementsByClassName('small');
	var div=document.getElementsByClassName('main');
	var c=document.getElementsByTagName('c');
	var cont=0;
	var sum=0;
	var str="";
	for(i=0;i<100;i++){
		str=str+"<span class='small'><c></c></span>";
	}
	div[0].innerHTML=str;
	for(i=0;i<c.length;i++){
		if(i%4==0){
			c[i].style.backgroundColor="pink";
		}else if(i%4==2){
			c[i].style.backgroundColor="lightsteelblue";
		}else if(i%4==3){
			c[i].style.backgroundColor="palegreen";
		}
		c[i].onmouseover=function(){
			if(this.style.width!='0px'){
				this.style.width="0px";
				this.style.height="0px";
				cont++;
				if(cont==100){
					div[0].style.backgroundImage="none";
//					div[0].style.width="700px";
//					div[0].style.height="650px";
					for(i=0;i<c.length;i++){
						var a=-parseInt(i/10)*50;
						var b=-(i%10)*50;
						span[i].style.backgroundImage="url('img/11.jpg')";
						span[i].style.backgroundPositionY=a+'px';
						span[i].style.backgroundPositionX=b+'px';
						if(i%4==0){
							span[i].style.transform="rotate(360deg)";
							span[i].style.boxShadow="0px 0px 10px pink";
							span[i].style.transition="1s";
							span[i].style.transformOrigin="center";
						}
						if(i%4==1){
							span[i].style.transform="rotate(360deg)";
							span[i].style.boxShadow="0px 0px 10px lightblue";
							span[i].style.transition="2s";
							span[i].style.transformOrigin="center";
						}
						if(i%4==2){
							span[i].style.transform="rotate(360deg)";
							span[i].style.boxShadow="0px 0px 10px yellow";
							span[i].style.transition="1s";
							span[i].style.transformOrigin="center";
						}
						if(i%4==3){
							span[i].style.transform="rotate(360deg)";
							span[i].style.boxShadow="0px 0px 10px palegreen";
							span[i].style.transition="3s";
							span[i].style.transformOrigin="center";
						}
						cont++;
						if(cont==200){
							setInterval(function(){
								for(i=0;i<c.length;i++){
									span[i].style.marginRight="20px";
									div[0].style.width="700px";
									div[0].style.height="700px";
									cont++;
									if(cont==300){
										setInterval(haha,3000);
									}
								}
							},3000);
						}
						function haha(){
							for(i=0;i<c.length;i++){
								if(parseInt(i/10)%2==0){
									span[i].style.transform="translate(-200px,0px)";
									span[i].style.opacity='0';
									
								}else{
									span[i].style.transform="translate(200px,0px)";
									span[i].style.opacity='0';
								}
							}
						}
					}
				}
			}
		}
	}
}
