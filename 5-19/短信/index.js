//window.onload=function(){
//	var mess=document.getElementsByClassName('mess');
//	var user=document.getElementsByClassName('user');
//	var inp=document.getElementsByTagName('input');
//	var img=document.getElementsByTagName('img');
//	var send=document.getElementsByClassName('send');
//	var onOff=true;
//	user[0].onclick=function(){
//		if(onOff){
//			img[0].src="img/2.png";
//			onOff=false;
//		}else{
//			img[0].src="img/1.png";
//			onOff=true;
//		}
//	};
//	send[0].onclick=function(){
//			if(onOff){
//				mess[0].innerHTML=mess[0].innerHTML+'<div><img src="img/1.png"/>'+inp[0].innerHTML+'</div>';
//				inp[0].innerHTML = '';
//			}else{
//				mess[0].innerHTML=mess[0].innerHTML+'<div><img src="img/2.png"/>'+inp[0].innerHTML+'</div>';
//				inp[0].innerHTML = '';
//			}
//	}
//}



window.onload = function(){
	var oText = document.getElementById("text");
	var oQq = document.getElementById("qq");
	var oMessage = document.getElementById("message");
	var oBtn = document.getElementById("btn");
	var oNoff = true;
	oQq.onclick = function (){
		if(oNoff){
			oQq.src = "img/2.png";
			oNoff = false;
		} else {
			oQq.src = "img/1.png";
			oNoff = true;
		}
	};
	oBtn.onclick = function (){
			if(oNoff){
				oText.innerHTML = oText.innerHTML +'<p class="color1"><img src="img/1.png"/>' + oMessage.value + '</p>';
				oMessage.value = '';
			}else{
				oText.innerHTML =oText.innerHTML + '<p class="color2"><img src="img/2.png"/>' + oMessage.value + '</p>';
				oMessage.value = '';
			}
	};
};