window.onload=function(){
	var year=document.getElementById('year');
	var month=document.getElementById('month');
	var day=document.getElementById('day');
	var week=document.getElementById('week');
	var date=new Date();
//	for(i=2030;i>=1970;i--){
//		if(i==date.getFullYear()){
//			year.innerHTML+="<option selected>"+i+"</option>";
//		}else{
//			year.innerHTML+="<option>"+i+"</option>";
//		}
		
//	}
	check(date.getFullYear(),year,2030,1970);
//	for(i=12;i>=1;i--){
//		if(i==(date.getMonth()+1)){
//			month.innerHTML+="<option selected>"+i+"</option>";
//		}else{
//			month.innerHTML+="<option>"+i+"</option>";
//		}
//	}
	check(date.getMonth()+1,month,12,1);
//	for(i=31;i>=1;i--){
//		if(i==date.getDate()){
//			day.innerHTML+="<option selected>"+i+"</option>";
//		}else{
//			day.innerHTML+="<option>"+i+"</option>";
//		}
//	}
	check(date.getDate(),day,31,1);
	function check(date,id,big,small){
		var value="";
		for(i=big;i>=small;i--){
			if(i==date){
				value+="<option selected>"+i+"</option>";
			}else{
				value+="<option>"+i+"</option>";
			}
		}
		id.innerHTML=value;
	}
	week.innerHTML=cweek(date.getDay());
	year.onchange=function(){
		date.setFullYear(this.value);
		week.innerHTML=cweek(date.getDay());
	}
	month.onchange=function(){
		date.setMonth(this.value);
		week.innerHTML=cweek(date.getDay());
	}
	day.onchange=function(){
		date.setDate(this.value);
		week.innerHTML=cweek(date.getDay());
	}
	function cweek(value){
		return ["日","一","二","三","四","五","六"][value];
	}
}
