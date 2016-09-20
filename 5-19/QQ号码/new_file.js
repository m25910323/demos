window.onload=function(){
	var btn=document.getElementsByClassName("btn");
	var txt=document.getElementsByClassName("txt");
//	var a='0123141231';
//	alert(Number(a));
	btn[0].onclick=function(){
		if(txt[0].value==""){
			alert("不能什么都不写哦!");
		}else if(isNaN(txt[0].value)){
			alert("请输入数字！");
		}else if(parseInt(txt[0].value)!=Number(txt[0].value)){
			alert("不能写小数啊！");
		}else if(txt[0].value.length<5||txt[0].value.length>10){
			alert("请输入5~10位数字、！");
		}else if(txt[0].value[0]==0){
			alert("第一个数不能为0！");
		}
	}
}
