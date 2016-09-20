window.onload=function(){
	var txt=document.getElementsByClassName("txt");
	var upd=document.getElementsByClassName("update");
	var cs=document.getElementsByClassName("cs");
	var cz=document.getElementsByClassName("cz");
	var con=document.getElementsByClassName("content");
	var visi=document.getElementsByClassName("visi");
	for(i=0;i<upd.length;i++){
		upd[i].index=i;
		upd[i].onclick=function(){
			this.style.display="none";
			con[this.index].style.display="none";
			txt[this.index].value=con[this.index].innerHTML;
			visi[this.index].style.display="inline-block";
		}
	}
	for(i=0;i<cs.length;i++){
		cs[i].index=i;
		cs[i].onclick=function(){
			visi[this.index].style.display="none";
			con[this.index].style.display="inline-block";
			upd[this.index].style.display="inline-block";
			con[this.index].innerHTML=txt[this.index].value;
		}
	}
	for(i=0;i<cz.length;i++){
		cz[i].index=i;
		cz[i].onclick=function(){
			visi[this.index].style.display="none";
			con[this.index].style.display="inline-block";
			upd[this.index].style.display="inline-block";
		}
	}
}
