window.onload=function(){
	var time=document.getElementById('time');
	var oDate=document.getElementById('date');
	var change=document.getElementById('change');
	var tbody=document.getElementById('tbody');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var timer=null;
	var tbodyhtml="";
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hours=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	htime();
	chang();
	rili(year,month-1);
	timer=setInterval(htime,1000);
	right.onclick=function(){
		
		tbodyhtml="";
		month%=12;
		if(month==0){
			year++;
		}
		rili(year,month);
		month++;
		change.innerHTML=year+"年"+month+"月";
		console.log(month);
		
	}
	left.onclick=function(){
		tbodyhtml="";
		console.log(month);
		month%=12;
		if(month==0){
			month=12;
			year--;
		}
		rili(year,month);
		
		
		
		change.innerHTML=year+"年"+month+"月";
		
	}
	function htime(){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var hours=date.getHours();
		var minute=date.getMinutes();
		var second=date.getSeconds();
		time.innerHTML=hours+":"+minute+":"+second;
		oDate.innerHTML=year+"年"+month+"月"+day+"日,星期"+week(date.getDay());
	}
	function chang(){
		change.innerHTML=year+"年"+month+"月";
	}
	
	function rili(year,month){
		var date=new Date();
//		var year=date.getFullYear();
//		var month=date.getMonth();
		var day=date.getDate();
		var next=new Date(year,month+1,1);												/*下个月1号*/
		var haha=new Date(year,month+1,1).getDay();
		var current=new Date(year,month,1).getDay();									/*本月1号周几*/
		var now=new Date(next-1).getDate();												/*本月最后一天*/
		var num=1-current;
		var last=new Date(new Date(year,month,1)-1).getDate();							/*上个月最后一天*/
		for(i=0;i<6;i++){
			tbodyhtml+="<tr>";
			for(j=0;j<7;j++){
				if(num<1){
					tbodyhtml+="<td class='gray'>"+(num+last)+"</td>";
				}else if(num==day){
					tbodyhtml+="<td class='active'>"+num+"</td>";
				}else if(num>now){
					tbodyhtml+="<td class='gray'>"+(num-last+1)+"</td>";
				}else{
					tbodyhtml+="<td>"+num+"</td>";
				}
				num++;
			}
			tbodyhtml+="</tr>";
		}
		tbody.innerHTML=tbodyhtml;
	}
	
	function week(value){
		return ["日","一","二","三","四","五","六"][value];
	}
}
