window.onload=function(){
	var year=document.getElementById('year');
	var month=document.getElementById('month');
	var day=document.getElementById('day');
	var week=document.getElementById('week');
	var yearValue="";
	var monthValue="";
	var dayValue="";
	var date=new Date();
	for(i=2030;i>=1970;i--){
		yearValue+="<option>"+i+"</option>";
		year.innerHTML=yearValue;
	}
	for(i=1;i<=12;i++){
		monthValue+="<option>"+i+"</option>";
		month.innerHTML=monthValue;
	}
	for(i=1;i<=31;i++){
		dayValue+="<option>"+i+"</option>";
		day.innerHTML=dayValue;
	}
	year.value = date.getFullYear();
	month.value = date.getMonth() + 1;
	day.value = date.getDate();
	week.innerHTML = cweek(date.getDay());
	
	year.onchange=function(){
		date.setFullYear(this.value);
		week.innerHTML=cweek(date.getDay());
	}
	month.onchange=function(){
		date.setMonth(this.value-1);
		week.innerHTML=cweek(date.getDay());
	}
	day.onchange=function(){
		date.setDate(this.value);
		week.innerHTML=cweek(date.getDay());
	}
	function cweek(value){
		return ['日', '一', '二', '三', '四', '五', '六'][value];
	}
}
