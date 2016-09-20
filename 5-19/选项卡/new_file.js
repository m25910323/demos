window.onload=function(){
	var input=document.getElementsByTagName('input');
	var div=document.getElementsByTagName('div');
	for(i=0;i<input.length;i++){
		input[i].index=i;
		input[i].onclick=function(){
			for(i=0;i<input.length;i++){
				input[i].className="";
				div[i].className="noact";
			}
			this.className="active";
			div[this.index].className="active";
		}
	}
}
