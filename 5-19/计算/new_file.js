window.onload=function(){
	var less=document.getElementsByClassName('less');
	var more=document.getElementsByClassName('more');
	var num=document.getElementsByClassName('num');
	var sum=document.getElementsByClassName('sum');
	var price=document.getElementsByClassName('price');
	var most="";
	var jian=0;
	
	var cont=document.getElementsByClassName('cont');
	var expen=document.getElementsByClassName('expen');
	for(i=0;i<more.length;i++){
		more[i].index=i;
		less[i].index=i;
		var gong=0;
		more[i].onclick=function(){
			num[this.index].innerHTML=Number(num[this.index].innerHTML)+1;
			sum[this.index].innerHTML=Number(price[this.index].innerHTML)*Number(num[this.index].innerHTML);
			jian++;
			var gong=0;
			for(j=0;j<more.length;j++){
				gong=Number(gong)+Number(sum[j].innerHTML);
			}
			cont[0].innerHTML="商品合计共"+jian+"件，共花费了"+Number(gong)+"元";
			biggest();
		}
		
		less[i].onclick=function(){
			if(Number(num[this.index].innerHTML)!=0){
				num[this.index].innerHTML=Number(num[this.index].innerHTML)-1;
			}else{
				num[this.index].innerHTML=0;
			}
			sum[this.index].innerHTML=Number(price[this.index].innerHTML)*Number(num[this.index].innerHTML);
			jian--;
			var gong=0;
			for(j=0;j<more.length;j++){
				gong=Number(gong)+Number(sum[j].innerHTML);
			}
			cont[0].innerHTML="商品合计共"+jian+"件，共花费了"+Number(gong)+"元";
			biggest();
		}
		function biggest(){
			var a=price[0].innerHTML;
			var most;
			console.log(most);
			for(i=0;i<price.length;i++){
				if(a>price[i].innerHTML){
					most=a;
				}else{
					most=price[i].innerHTML;
				}
			}
			expen[0].innerHTML="最贵的是"+most+"元";
		}
		
	} 

}
