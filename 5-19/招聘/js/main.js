window.onload=function(){
	var left=document.getElementsByClassName('left')[0];									//左侧导航栏
	var right=document.getElementsByClassName('right')[0];									//右侧导航栏
	var sh=left.getElementsByTagName('li')[0];												//左侧导航栏 社招选项卡
	var xy=left.getElementsByTagName('li')[1];												//左侧导航栏 校招选项卡
	var title=right.getElementsByClassName('title')[0];										//右侧导航栏 对应标题
	var info=right.getElementsByClassName('info')[0];										//右侧导航栏 招聘信息
	var pages=document.getElementsByClassName('pages')[0];
	var p=pages.getElementsByTagName('p')[0];
	var prev=document.getElementsByClassName('prev');
	var next=document.getElementsByClassName('next');
	//社招信息添加
	var img=document.createElement('img');													//设置标题
	img.setAttribute('src','img/shzp.gif');
	title.appendChild(img);
	zhaopin('sh');
	
	sh.onclick=function(){																	//左右侧导航点击修改地址栏
//		console.log('a');
		window.location.href='?sh#page=1';
	}
	
	xy.onclick=function(){
		window.location.href='?xy#page=1';
	}
//	console.log(window.location.href);
	if(window.location.search=='?xy'){														
		sh.className='none';
		xy.className='focus';
		title.innerHTML='';
		var img=document.createElement('img');													//设置标题
		img.setAttribute('src','img/xyzp.gif');
		title.appendChild(img);
		zhaopin('xy');
	}
	
	function zhaopin(typ){
		info.innerHTML='';																		//清空所有的招聘信息
		p.innerHTML='';																			//清空页数
		var num=Math.ceil(aData[typ].text.length/2);											//根据招聘信息条数确定页数
		for(i=1;i<=num;i++){																	//有多少页就创建多少个页数span
			var span=document.createElement('span');
			var a=document.createElement('a');
			a.setAttribute('href','javascript:;');
			a.innerHTML=i;
			span.appendChild(a);
			p.appendChild(span);
			
		}
		var span=p.getElementsByTagName('span');												//第一页设置样式
		span[0].className='focus';
		for(i=0;i<span.length;i++){																//点击翻页的事件
			span[i].index=i;
			span[i].onclick=function(){
				window.location.href="#page="+(this.index+1);									//1.地址后添加#page=...
				for(j=0;j<span.length;j++){														//2.清空页数按钮的样式，设置点击的这个按钮的样式
					span[j].className="";
				}
				this.className="focus";
				info.innerHTML='';																//因为一页只显示两条招聘信息，所以每次点击翻页时清空当前的招聘信息，并重新添加信息
				var h=this.index*2;																//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
//				console.log(h);
				for(n=0;n<2;n++){
					var p1=document.createElement('p');
					p1.setAttribute('class','zp');
					var zhiwei=document.createElement('span');
					var a=document.createElement('a');
					console.log(this.index*2+1+n);
					a.setAttribute('href','content.html?'+typ+'#n='+(this.index*2+1+n));
					console.log(this.index*2+1+n);
//					console.log(aData);
					a.innerHTML='职位需求:'+aData[typ].text[h].zw;
					zhiwei.appendChild(a);
					var renshu=document.createElement('span');
					renshu.innerHTML='需求人数:'+aData[typ].text[h].rs+'名';
					var riqi=document.createElement('span');
					riqi.setAttribute('class','date');
					riqi.innerHTML=aData[typ].text[h].sj;
					
					p1.appendChild(zhiwei);
					p1.appendChild(renshu);
					p1.appendChild(riqi);
					info.appendChild(p1);
					
					var p2=document.createElement('p');
					p2.setAttribute('class','yq');
					p2.innerHTML=aData[typ].text[h].info[0].l;
					info.appendChild(p2);
					h++;
				}
			}
		}
//		console.log(num);
		for(i=0;i<2;i++){																	//添加初始的两条信息
			var p1=document.createElement('p');
			p1.setAttribute('class','zp');
			var zhiwei=document.createElement('span');
			var a=document.createElement('a');
			a.setAttribute('href','content.html?sh#n='+(1+i));
			a.innerHTML='职位需求:'+aData[typ].text[i].zw;
			zhiwei.appendChild(a);
			var renshu=document.createElement('span');
			renshu.innerHTML='需求人数:'+aData[typ].text[i].rs+'名';
			var riqi=document.createElement('span');
			riqi.setAttribute('class','date');
			riqi.innerHTML=aData[typ].text[i].sj;
			
			p1.appendChild(zhiwei);
			p1.appendChild(renshu);
			p1.appendChild(riqi);
			info.appendChild(p1);
			
			var p2=document.createElement('p');
			p2.setAttribute('class','yq');
			p2.innerHTML=aData[typ].text[i].info[0].l;
			info.appendChild(p2);
		}
	}
	
	window.onhashchange=function(){															//hash改变时设置样式
		var span=p.getElementsByTagName('span');
		var hash=window.location.hash.split('=')[1];
		var ser=window.location.search;
//		console.log(hash);
		for(var i=0;i<span.length;i++){
			span[i].className='';
		}
		span[hash-1].className='focus';	
		//获取地址,判断....
		info.innerHTML='';
		var h=(hash-1)*2;																//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
		if(ser=="?sh"){
			for(n=0;n<2;n++){
				var p1=document.createElement('p');
				p1.setAttribute('class','zp');
				var zhiwei=document.createElement('span');
				var a=document.createElement('a');
				a.setAttribute('href','content.html?sh'+'#n='+(h-1+n));
//				console.log(aData);
				a.innerHTML='职位需求:'+aData.sh.text[h].zw;
				zhiwei.appendChild(a);
				var renshu=document.createElement('span');
				renshu.innerHTML='需求人数:'+aData.sh.text[h].rs+'名';
				var riqi=document.createElement('span');
				riqi.setAttribute('class','date');
				riqi.innerHTML=aData.sh.text[h].sj;
				
				p1.appendChild(zhiwei);
				p1.appendChild(renshu);
				p1.appendChild(riqi);
				info.appendChild(p1);
						
				var p2=document.createElement('p');
				p2.setAttribute('class','yq');
				p2.innerHTML=aData.sh.text[h].info[0].l;
				info.appendChild(p2);
				h++;
			}
		}else{
			for(n=0;n<2;n++){
				var p1=document.createElement('p');
				p1.setAttribute('class','zp');
				var zhiwei=document.createElement('span');
				var a=document.createElement('a');
				a.setAttribute('href','content.html?xy'+'#n='+(h-1+n));
				console.log(aData);
				a.innerHTML='职位需求:'+aData.xy.text[h].zw;
				zhiwei.appendChild(a);
				var renshu=document.createElement('span');
				renshu.innerHTML='需求人数:'+aData.sh.text[h].rs+'名';
				var riqi=document.createElement('span');
				riqi.setAttribute('class','date');
				riqi.innerHTML=aData.xy.text[h].sj;
				
				p1.appendChild(zhiwei);
				p1.appendChild(renshu);
				p1.appendChild(riqi);
				info.appendChild(p1);
						
				var p2=document.createElement('p');
				p2.setAttribute('class','yq');
				p2.innerHTML=aData.xy.text[h].info[0].l;
				info.appendChild(p2);
				h++;
			}
		}
	
	}
	prev[0].onclick=function(){
		var span=p.getElementsByTagName('span');
		var ser=window.location.search;
		var hash=window.location.hash.split('=')[1];
		
		if(hash==undefined){
			window.location.href="#page=1";
		}
		if(hash>1){
			window.location.hash="#page="+(hash-1);
			if(ser=="?sh"){
			info.innerHTML='';																//因为一页只显示两条招聘信息，所以每次点击翻页时清空当前的招聘信息，并重新添加信息
			var h=(hash-2)*2;																//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
			for(n=0;n<2;n++){
				var p1=document.createElement('p');
				p1.setAttribute('class','zp');
				var zhiwei=document.createElement('span');
				var a=document.createElement('a');
				a.setAttribute('href','');
				console.log(aData);
				a.innerHTML='职位需求:'+aData.sh.text[h].zw;
				zhiwei.appendChild(a);
				var renshu=document.createElement('span');
				renshu.innerHTML='需求人数:'+aData.sh.text[h].rs+'名';
				var riqi=document.createElement('span');
				riqi.setAttribute('class','date');
				riqi.innerHTML=aData.sh.text[h].sj;
					
				p1.appendChild(zhiwei);
				p1.appendChild(renshu);
				p1.appendChild(riqi);
				info.appendChild(p1);
					
				var p2=document.createElement('p');
				p2.setAttribute('class','yq');
				p2.innerHTML=aData.sh.text[h].info[0].l;
				info.appendChild(p2);
				h++;
			}
		}else{
			info.innerHTML='';																//因为一页只显示两条招聘信息，所以每次点击翻页时清空当前的招聘信息，并重新添加信息
			var h=(hash-2)*2;																//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
			for(n=0;n<2;n++){
				var p1=document.createElement('p');
				p1.setAttribute('class','zp');
				var zhiwei=document.createElement('span');
				var a=document.createElement('a');
				a.setAttribute('href','');
				console.log(aData);
				a.innerHTML='职位需求:'+aData.xy.text[h].zw;
				zhiwei.appendChild(a);
				var renshu=document.createElement('span');
				renshu.innerHTML='需求人数:'+aData.xy.text[h].rs+'名';
				var riqi=document.createElement('span');
				riqi.setAttribute('class','date');
				riqi.innerHTML=aData.xy.text[h].sj;
					
				p1.appendChild(zhiwei);
				p1.appendChild(renshu);
				p1.appendChild(riqi);
				info.appendChild(p1);
					
				var p2=document.createElement('p');
				p2.setAttribute('class','yq');
				p2.innerHTML=aData.xy.text[h].info[0].l;
				info.appendChild(p2);
				h++;
			}
		}
		}
		
	}
	next[0].onclick=function(){
		var span=p.getElementsByTagName('span');
		var ser=window.location.search;
		var hash=window.location.hash.split('=')[1];
		if(hash==undefined){
			window.location.href="#page=2";
		}
		if(hash<span.length){
			window.location.hash="#page="+(parseFloat(hash)+1);
			if(ser=="?sh"){
				info.innerHTML='';																//因为一页只显示两条招聘信息，所以每次点击翻页时清空当前的招聘信息，并重新添加信息
				var h=parseFloat(hash)*2;														//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
				console.log(h);
				for(n=0;n<2;n++){
					var p1=document.createElement('p');
					p1.setAttribute('class','zp');
					var zhiwei=document.createElement('span');
					var a=document.createElement('a');
					a.setAttribute('href','');
					console.log(aData);
					a.innerHTML='职位需求:'+aData.sh.text[h].zw;
					zhiwei.appendChild(a);
					var renshu=document.createElement('span');
					renshu.innerHTML='需求人数:'+aData.sh.text[h].rs+'名';
					var riqi=document.createElement('span');
					riqi.setAttribute('class','date');
					riqi.innerHTML=aData.sh.text[h].sj;
						
					p1.appendChild(zhiwei);
					p1.appendChild(renshu);
					p1.appendChild(riqi);
					info.appendChild(p1);
						
					var p2=document.createElement('p');
					p2.setAttribute('class','yq');
					p2.innerHTML=aData.sh.text[h].info[0].l;
					info.appendChild(p2);
					h++;
				}
			}else{
				info.innerHTML='';																//因为一页只显示两条招聘信息，所以每次点击翻页时清空当前的招聘信息，并重新添加信息
				var h=parseFloat(hash)*2;														//一页显示两条，span[0]显示第0,1条，span[1]显示第2,3条，以此类推
				for(n=0;n<2;n++){
					var p1=document.createElement('p');
					p1.setAttribute('class','zp');
					var zhiwei=document.createElement('span');
					var a=document.createElement('a');
					a.setAttribute('href','');
					console.log(aData);
					a.innerHTML='职位需求:'+aData.xy.text[h].zw;
					zhiwei.appendChild(a);
					var renshu=document.createElement('span');
					renshu.innerHTML='需求人数:'+aData.xy.text[h].rs+'名';
					var riqi=document.createElement('span');
					riqi.setAttribute('class','date');
					riqi.innerHTML=aData.xy.text[h].sj;
						
					p1.appendChild(zhiwei);
					p1.appendChild(renshu);
					p1.appendChild(riqi);
					info.appendChild(p1);
						
					var p2=document.createElement('p');
					p2.setAttribute('class','yq');
					p2.innerHTML=aData.xy.text[h].info[0].l;
					info.appendChild(p2);
					h++;
				}
			}
		}
		
}
}
	