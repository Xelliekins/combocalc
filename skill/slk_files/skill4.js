var tmpcode = "";
var cssnum = "0";
var slotdata = new Array(32);

job = document.location.href;
if (job.indexOf("?") != -1) job = job.substring(0,job.indexOf("?"));
job = job.substring(job.lastIndexOf("/")+1,job.lastIndexOf("/")+4);

function msclk(a,b,c){
	mlv = eval(a + "_M");
	pos = eval( b - c.slice(0,-2) + document.body.scrollLeft);
	slv = Math.floor((pos - 29 )/10);
	if(slv <= 0) slv = 0;
	if(slv >= mlv) slv = mlv;
	if(0 <= slv) setPoint(a,slv);
}

function mswhl(skillid){
	if(event.wheelDelta <= -120){ y = 1; }
	else { y = -1; }
	setPoint(skillid,eval(skillid + "_P") + y);
}

function prp(x,y,z){
	tmp = document.getElementById(x).src;
	mlv = eval(tmp.substring(tmp.lastIndexOf("/")+1,tmp.lastIndexOf("-")));
	snm = x.substring(0,4);
	tmp = document.getElementById(snm).style.left;
	p = tmp.substring(0,tmp.length-2);
	slv = Math.floor((y-p-37+document.body.scrollLeft)/10+z);
	if(slv <= 0) slv = 0;
	if(slv >= mlv) slv = mlv;
	if(0 <= slv) setPoint(snm,slv);
}

function und(x,y){
	if(window.opera){
		tmp = x.substring(0,4);
		setPoint(tmp,0);
	}else{
		tmp = x.substring(0,4);
		setPoint(tmp,eval(tmp + "_P") + y);
	}
}


function Disable(parts){
//	alert(document.getElementById("csslink").href);
	if(cssnum=="1"){
		document.getElementById(parts).style.color = '#666666';
		document.getElementById(parts).style.backgroundColor = '#dddddd';
		document.getElementById(parts).style.borderWidth = '1px 0px 0px 1px';
		document.getElementById(parts).style.borderColor = '#444444';
	}else if(cssnum=="2"){
		document.getElementById(parts).style.color = '#ffffff';
		document.getElementById(parts).style.backgroundColor = '#bbbbc0';
		document.getElementById(parts).style.borderWidth = '1px 0px 0px 1px';
		document.getElementById(parts).style.borderColor = '#444455';
	}else if(cssnum=="3"){
		document.getElementById(parts).style.color = '#ffffff';
		document.getElementById(parts).style.backgroundColor = '#c0bbbb';
		document.getElementById(parts).style.borderWidth = '1px 0px 0px 1px';
		document.getElementById(parts).style.borderColor = '#554444';
	}else{
		document.getElementById(parts).style.backgroundColor = '#dddde0';
		document.getElementById(parts).style.color = '#666666';
		document.getElementById(parts).style.border = 'solid 0px';
	}
}

function Visible(parts){
	if(cssnum=="1"){
		document.getElementById(parts).style.color = '#000000';
		document.getElementById(parts).style.backgroundColor = '#ffffff';
		document.getElementById(parts).style.borderWidth = '0px 1px 1px 0px';
		document.getElementById(parts).style.borderColor = '#444444';
	}else if(cssnum=="2"){
		document.getElementById(parts).style.color = '#000000';
		document.getElementById(parts).style.backgroundColor = '#eeeeee';
		document.getElementById(parts).style.borderWidth = '0px 1px 1px 0px';
		document.getElementById(parts).style.borderColor = '#444444';
	}else if(cssnum=="3"){
		document.getElementById(parts).style.color = '#000000';
		document.getElementById(parts).style.backgroundColor = '#ffffff';
		document.getElementById(parts).style.borderWidth = '0px 1px 1px 0px';
		document.getElementById(parts).style.borderColor = '#664444';
	}else{
		document.getElementById(parts).style.backgroundColor = '#ffffff';
		document.getElementById(parts).style.color = '#000000';
		document.getElementById(parts).style.border = 'solid 0px';
	}
}


function showMsg(type){
	if(document.Msg.jobchg1)
		jobchange1 = eval(document.Msg.jobchg1.options[document.Msg.jobchg1.selectedIndex].value);
	if(document.Msg.jobchg2)
		jobchange2 = eval(document.Msg.jobchg2.options[document.Msg.jobchg2.selectedIndex].value);
	var disp1 = disp2 = disp3 = subp1 = subp2 = subp3
		= jobp1 = jobp2 = jobp3 = rest1 = rest2 = rest3 = 0;
	if(type < 2){
		var maxjob = 50;
		var tmp3 = "";
		if(type == 1) maxjob = 70;

		if(use1 <= jobchange1 - 1){
			jobp1 = use1 + 1;
			rest1 = (jobchange1 - 1) - use1;
		}if(use1 > jobchange1 - 1){
			jobp1 = jobchange1;
			rest1 = 0;
			subp1 = use1 - (jobchange1 - 1);
		}if(use2 <= (maxjob - 1) - subp1){
			jobp2 = use2 + 1 + subp1;
			rest2 = (maxjob - 1) - subp1 - use2;
		}if(use2 > (maxjob - 1) - subp1){
			jobp2 = maxjob;
			rest2 = 0;
		}

		disp1 = jobp1;
		disp2 = jobp2;
			if(subp1 != 0 || use2 >= maxjob) disp2 = jobp2 + "<span style='font-size:10px;'> (" + subp1 + "+" + use2 + ") </span>";

	// �|�C���g��������
		if(use1 +1 < jobchange1) disp1 = "<span style='color:#aa0033;'>" + disp1 + "</span>";
		if(use2 + 1 < maxjob - subp1) disp2 = "<span style='color:#aa0033;'>" + disp2 + "</span>";

		if(use1 + use2 + 2 <= jobchange1 + maxjob){
			document.getElementById("msgid").style.backgroundColor = "#ffffff";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + maxjob + "�@rest : " + eval( rest1 + rest2 );
		}if(use1 + use2 + 2 > jobchange1 + maxjob || use2 + 1 > maxjob){
			document.getElementById("msgid").style.backgroundColor = "#ffdddd";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + maxjob + "�@over : " + eval( (use1 + use2 + 2) + (rest1 + rest2) - (jobchange1 + maxjob) );
		}
	}
	if(type == 2){
		if(use1 <= jobchange1 - 1){
			jobp1 = use1 + 1;
			rest1 = (jobchange1 - 1) - use1;
		}if(use1 > jobchange1 - 1){
			jobp1 = jobchange1;
			rest1 = 0;
			subp1 = use1 - (jobchange1 - 1);
			if(use1 + use2 > (jobchange1 - 1) + (jobchange2 - 1)){
				subp1 = (jobchange2 - 1) - use2;
					if(subp1 < 0) subp1 = 0;
				subp2 = use1 - (jobchange1 - 1 ) - subp1;
			}
		}if(use2 <= (jobchange2 - 1) - subp1){
			jobp2 = use2 + 1 + subp1;
			rest2 = (jobchange2 - 1) - subp1 - use2;
		}if(use2 > (jobchange2 - 1) - subp1){
			jobp2 = jobchange2;
			rest2 = 0;
			subp3 = use2 + 1 - subp1 - jobchange2;
		}if(use3 <= 49 - subp2 - subp3){
			jobp3 = use3 + 1 + subp2 + subp3;
			rest3 = 49 - subp2 - subp3 - use3;
		}if(use3 > 49 - subp2 - subp3){
			jobp3 = 50;
			rest3 = 0;
		}

		disp1 = jobp1;
		disp2 = jobp2;
			if(subp1 != 0) disp2 = jobp2 + "<span style='font-size:10px;'> (" + subp1 + "+" + use2 + ") </span>";
		disp3 = jobp3;
			if(subp2 != 0 || subp3 != 0 || use3 >= 50) disp3 = jobp3 + "<span style='font-size:10px;'> (" + subp2 + "+" + subp3 + "+" + use3 + ") </span>";

	// �|�C���g��������
		if(use1 +1 < jobchange1) disp1 = "<span style='color:#aa0033;'>" + disp1 + "</span>";
		if(use2 + 1 < jobchange2 - subp1) disp2 = "<span style='color:#aa0033;'>" + disp2 + "</span>";
		if(use3 + 1 < 50 - subp2 - subp3) disp3 = "<span style='color:#aa0033;'>" + disp3 + "</span>";

		if(use1 + use2 + use3 + 3 <= jobchange1 + jobchange2 + 50 && use3 < 50){
			document.getElementById("msgid").style.backgroundColor = "#ffffff";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + jobchange2 + " �@3rd : " + disp3
				+ "/50 �@rest : " + eval( (rest1 + rest2 +rest3) );
		}if(use1 + use2 + use3 + 3 > jobchange1 + jobchange2 + 50 && use3 < 50){
			document.getElementById("msgid").style.backgroundColor = "#ffdddd";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + jobchange2 + " �@3rd : " + disp3
				+ "/50 �@over : " + eval( (use1 + use2 + use3 + 3) + (rest1 + rest2 +rest3) - (jobchange1 + jobchange2 + 50) );
		}if(use2 + use3 + 2 > jobchange2 + 50){
			document.getElementById("msgid").style.backgroundColor = "#ffdddd";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + jobchange2 + " �@3rd : " + disp3
				+ "/50 �@over : " + eval( (use1 + use2 + use3 + 3) + (rest1 + rest2 +rest3) - (jobchange1 + jobchange2 + 50) );
		}if(use3 +1 > 50 ){
			document.getElementById("msgid").style.backgroundColor = "#ffdddd";
			document.getElementById("msgid").innerHTML = " 1st : " + disp1
				+ "/" + jobchange1 + " �@2nd : " + disp2
				+ "/" + jobchange2 + " �@3rd : " + disp3
				+ "/50 �@over : " + eval( (use1 + use2 + use3 + 3) + (rest1 + rest2 +rest3) - (jobchange1 + jobchange2 + 50) );
		}
	}
}

function Point(slv,mlv,skill){
	var leftPos = 0;
	switch (mlv){
		case 1:
			leftPos = 0;	break;
		case 2:
			leftPos = -140;	break;
		case 3:
			leftPos = -280;	break;
		case 4:
			leftPos = -420;	break;
		case 5:
			leftPos = -560;	break;
		case 7:
			leftPos = -700;	break;
		case 10:
			leftPos = -840;	break;
	}
	document.getElementById(skill).style.backgroundPosition = leftPos + "px -" + slv * 28 + "px";
}

function Init(){
	tmp = document.cookie;
	if(tmp!=""){
		tmp = "; " + tmp;
// alert(tmp);
		latestSlotNum = tmp.charAt(tmp.lastIndexOf("; "+job+"_")+6);
// alert(latestSlotNum);
		if(latestSlotNum>0 && latestSlotNum<=3)
			document.Msg.Data.value = latestSlotNum;
	}

	if(getCookie("css")>0)
		chgStyle(getCookie("css"));

	if(!(getCookie("ro4"))){
		document.cookie = "ro4="
			+ "0|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|:::|"
			+ "; expires=Fri, 31-Dec-2030 23:59:59; ";
	}

	tmp=getCookie("ro4");
	for(i=0;i<32;i++)
		slotdata[i] = tmp.split("\|")[i];

// �X���b�g�Z���N�g
	latestSlotNum = 0;
	for(i=30;i>0;i--){
		if(slotdata[i].split(":")[0] == "")
			latestSlotNum = i-1;
	}
	for(i=30;i>0;i--){
		if(slotdata[i].split(":")[0] == job){
			latestSlotNum = i-1;
		}
	}
	if(slotdata[0] > 0 && slotdata[slotdata[0]].split(":")[0] == job)
		latestSlotNum = slotdata[0]-1;
	if(latestSlotNum>=0 && latestSlotNum<30)
		document.Msg.Data.selectedIndex = latestSlotNum;

	for(i=1;i<31;i++){
		if(slotdata[i].split(":")[0] != job && slotdata[i].split(":")[0] != "")
			document.Msg.Data.options[i-1].style.backgroundColor = "#cccccc";
	}

	if( location.search.substring(1) ){
		Load("url");
	}else if( !location.search.substring(1) ){
		Load("cookie");
	}

	for(i=1;i<=document.Msg.Data.options.length;i++){
		if(slotdata[i]!=":::"){
			document.Msg.Data.options[i-1].text
				= "slot " + i + " : (" + unescape(slotdata[i].split(":")[1]) +") "+ unescape(slotdata[i].split(":")[3]);
		}if(slotdata[i]==":::"){
			document.Msg.Data.options[i-1].text
				= "slot " + i + " : no save";
		}
	}
}

function getCookie(key){
	tmp1 = " " + document.cookie + ";";
	xx1 = xx2 = 0;
	len = tmp1.length;
	while(xx1 < len){
		xx2 = tmp1.indexOf(";", xx1);
		tmp2 = tmp1.substring(xx1 +1, xx2);
		xx3 = tmp2.indexOf("=");
		if(tmp2.substring(0, xx3) == key){
			return(tmp2.substring(xx3 +1, xx2 - xx1 -1));
		}
		xx1 = xx2 +1;
	}
	return("");
}

function Save2(code){
	tmp = document.Msg.Data.options[document.Msg.Data.selectedIndex].text;
	slotclass = tmp.substring(tmp.indexOf(" : ")+4,tmp.indexOf(" : ")+7);

	if(slotclass != job && tmp.indexOf(" : no save") == -1){
		setAlertLayer("<br><br><br><br>There is save data for another class in the chosen slot. Overwrite?<br><br><br>"
			+ "<form><input type='button' value='�@OK�@' onclick='Save3(code);'>�@�@"
			+ "<input type='button' value='CANCEL' onclick='offOptionLayer();'></form>",0);
	}else{
		Save3(code);
	}
}

function Save3(code){
	num = document.Msg.Data.options[document.Msg.Data.selectedIndex].value;
	tmp = document.Msg.Data.options[document.Msg.Data.selectedIndex].text;
	slotname = tmp.substring(tmp.indexOf(" : ")+7);
	if(slotname=="no Save Data")
		slotname = "no Name";
	if(document.Msg.chrName.value == ""){
		slotname = "";
	}else{
		slotname = (document.Msg.chrName.value).replace(/:/g,"�F");
		slotname = (document.Msg.chrName.value).replace(/&/g,"��");
		slotname = (document.Msg.chrName.value).replace(/\|/g,"�b");
	}
	document.Msg.Data.options[document.Msg.Data.selectedIndex].text = "slot " + num + " : (" + job + ") " + slotname;
	document.Msg.Data.options[document.Msg.Data.selectedIndex].style.backgroundColor = "#ffffff";

	slotdata[num] = job + ":"+ escape(job) +":" + code + ":" + escape(slotname);

	tmp = "0|";
	for(i=1;i<31;i++){
		tmp += slotdata[i] + "\|";
	}
	document.cookie = "ro4=" + tmp + "; expires=Fri, 31-Dec-2030 23:59:59; ";
	setAlertLayer("The data has been saved to  Slot "+num+".",1);
}

function codeCopy(){
	tmp2 = "http://irowiki.org/~himeyasha/skill4/"+job+".html?"+Save("scode");
	setAlertLayer("<br><br><br><br>The following is your code.<br><br><br>"
		+ "<form><input type='text' value='"
		+ tmp2 + "' onfocus='this.select();' onclick='this.select();' size=60 readonly></form>",0);
}

function encode(tdata,ver){
	var code = "";
	for(i=0; i<tdata.length/3; i++){
		tmp = 13*13*tdata[3*i] + 13*tdata[3*i+1] + tdata[3*i+2];
		var tmp2 = "";
		tmp2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(tmp/52))
			+ "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(tmp%52);
		code = code + tmp2;
	}
	code = code.replace(/aaaaaaaaaa/g,"9");
	code = code.replace(/aaaaaaaaa/g,"8");
	code = code.replace(/aaaaaaaa/g,"7");
	code = code.replace(/aaaaaaa/g,"6");
	code = code.replace(/aaaaaa/g,"5");
	code = code.replace(/aaaaa/g,"4");
	code = code.replace(/aaaa/g,"3");
	code = code.replace(/aaa/g,"2");
	code = code.replace(/aa/g,"1");

	// �R�[�hVer�t�^
	code = ver + code;

	document.Msg.scode.value = code;
	return code;
}

function decode(code,ver){
	var tdata = new Array();
	// �R�[�hVer�`�F�b�N
	if(code.substring(0,2) != ver){
		setAlertLayer("This code is from a different version. Please use the most recently updated simulator.");
		for(i=0; i<50; i++) tdata[i] = 0;
		return tdata;
	}
	code = code.substring(code.indexOf("0")+1);
	code = code.replace(/9/g,"aaaaaaaaaa");
	code = code.replace(/8/g,"aaaaaaaaa");
	code = code.replace(/7/g,"aaaaaaaa");
	code = code.replace(/6/g,"aaaaaaa");
	code = code.replace(/5/g,"aaaaaa");
	code = code.replace(/4/g,"aaaaa");
	code = code.replace(/3/g,"aaaa");
	code = code.replace(/2/g,"aaa");
	code = code.replace(/1/g,"aa");

	tmp = code;
	j=0;
	for(i=0; i<tmp.length/2; i++){
		var x=y=0;
		x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(tmp.charAt(2*i));
		y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(tmp.charAt(2*i+1));
		tmp2 = 52 * x + y;
		tdata[j]   = Math.floor(tmp2/169);
		tdata[j+1] = Math.floor((tmp2%169)/13);
		tdata[j+2] = (tmp2%169)%13;
		j = j+3;
	}
	return tdata;
}

function loadType(mode){
	num = document.Msg.Data.options[document.Msg.Data.selectedIndex].value;

	code = "";
	if(mode == "cookie"){
		if(slotdata[num].split(":")[0] != job && slotdata[num].split(":")[0] != ""){
			tmp = num + "|";
			for(i=1;i<31;i++){
				tmp += slotdata[i] + "\|";
			}
			document.cookie = "ro4=" + tmp + "; expires=Fri, 31-Dec-2030 23:59:59; ";
			document.location.href = slotdata[num].split(":")[0] + ".html";
		}
		if(slotdata[num].split(":")[0] != ""){
			code = slotdata[num].split(":")[2];
			name = slotdata[num].split(":")[3];
			setAlertLayer("Loading from Cookie  Slot "+num,1);
			document.Msg.chrName.value = unescape(name);
		}
	}if(mode == "url"){
		code = location.search.substring(1);
		setAlertLayer("Loading from URL",1);
		document.Msg.scode.value = code;
	}if(mode == "tmp"){
		code = tmpcode;
	}
	return code;
}

function Reset(){
	setAlertLayer("<br><br><br><br>All skill points will be reset.<br><br><br><br>"
		+ "<form><input type='button' value='�@OK�@' onclick='Clear();'>�@�@"
		+ "<input type='button' value='CANCEL' onclick='offOptionLayer();'></form>",0);
}
function DeleteSlot(){
	num = document.Msg.Data.options[document.Msg.Data.selectedIndex].value;
	setAlertLayer("<br><br><br><br>Deleting data from Slot "+num+".<br><br><br><br>"
		+ "<form><input type='button' value='�@OK�@' onclick='DeleteSlot2();'>�@�@"
		+ "<input type='button' value='CANCEL' onclick='offOptionLayer();'></form>",0);
}

function DeleteSlot2(){
	num = document.Msg.Data.options[document.Msg.Data.selectedIndex].value;
	slotdata[num] = ":::";
	tmp = "0|";
	for(i=1;i<31;i++){
		tmp += slotdata[i] + "\|";
	}
	document.cookie = "ro4=" + tmp + "; expires=Fri, 31-Dec-2030 23:59:59; ";
	document.Msg.Data.options[document.Msg.Data.selectedIndex].text = "slot " + num + " : no save";
	document.Msg.Data.options[document.Msg.Data.selectedIndex].style.backgroundColor = "#ffffff";
	setAlertLayer("Your save data has been deleted from Slot "+num+".",1);
}

function msovr(posX,posY,skillid,flg){
	var Width = eval(skillid + "_C[0]");
	if(flg>0){
		var SkillTxt = skillid + "_C[3]";
	}else{
		var SkillTxt = skillid + "_C[2]";
	}
	tmpTxt = eval(SkillTxt);
	var SkillP = 0;
		if( eval(skillid + "_C[1]") > 0) SkillP = eval(skillid + "_P");

	if( SkillP > 0)
		tmpTxt = tmpTxt.substring(0,tmpTxt.lastIndexOf("<hr>")+SkillP*4+5)
			+ "<span style='color:#ff0066;'>"
			+ tmpTxt.substring(tmpTxt.lastIndexOf("<hr>")+SkillP*4+5,tmpTxt.lastIndexOf("<hr>")+SkillP*4+8)
			+ "</span>"
			+ tmpTxt.substring(tmpTxt.lastIndexOf("<hr>")+SkillP*4+8);

	document.getElementById("skill").style.backgroundColor = "ffffdd";
	document.getElementById("skill").style.border = "solid 1px #000000";
	document.getElementById("skill").innerHTML = "<div id='skillbox' style='padding:10px; line-height:14px;'>" + tmpTxt + "</div>";
	document.getElementById("skill").style.width = Width;

	var Height = document.getElementById("skillbox").offsetHeight;

	document.getElementById("skill").style.height = Height;

	var X = posX + document.body.scrollLeft + 60;
	var Y = posY + document.body.scrollTop + 60;

	if(eval(posX + Width + 90) > document.body.clientWidth){
		X = eval(posX - Width + document.body.scrollLeft - 80);
	}if(eval(posY + Height + 90) > document.body.clientHeight){
		Y = eval(posY - Height + document.body.scrollTop - 80);
	}if(X<0){
		X = 0;
	}if(Y<0){
		Y = 0;
	}

	document.getElementById("skill").style.left = X;
	document.getElementById("skill").style.top  = Y;
}

function msout(){
	document.getElementById("skill").innerHTML = "";
	document.getElementById("skill").style.width = 0;
	document.getElementById("skill").style.height = 0;
	document.getElementById("skill").style.backgroundColor = "transparent";
	document.getElementById("skill").style.border = 0;
}


function offOptionLayer(){
	document.getElementById("option1").style.height = '0px';
	document.getElementById("option1").style.width = '0px';

	document.getElementById("option2").style.height = '0px';
	document.getElementById("option2").style.width = '0px';
	document.getElementById("option2").style.top = '0px';
	document.getElementById("option2").style.left = '0px';

	document.getElementById("option1").innerHTML = "";
	document.getElementById("option2").innerHTML = "";
}

function setAlertLayer(txt,close){
	document.getElementById("option1").style.height = '800px';
	document.getElementById("option1").style.width = '1200px';

	document.getElementById("option2").style.height = '200px';
	document.getElementById("option2").style.width = '400px';
	document.getElementById("option2").style.top = '300px';
	document.getElementById("option2").style.left = '400px';
//	alert(navigator.userAgent);
	if (typeof document.body.style.maxHeight != "undefined"){
		document.getElementById("option1").style.backgroundImage = 'url(img/alpha.png)';
	}else{
		document.getElementById("option1").style.backgroundImage = 'url(img/black.png)';
		document.getElementById("option1").style.filter = "Alpha(opacity=30)";
	}
	document.getElementById("option1").style.border = "0px";

	document.getElementById("option2").style.backgroundColor = '#ffffff';
	document.getElementById("option2").style.color = '#000000';
	document.getElementById("option2").style.border = '0px';
	document.getElementById("option2").style.padding = '0px';
	tmpMsg = "<table width=100% height=95% border=0";
	if(close) tmpMsg += " onclick='JavaScript:offOptionLayer();'";
	tmpMsg += "><tr><td align=center><div class='alert'>\n" + txt + "</div></td></tr></table>";
	document.getElementById("option2").innerHTML = tmpMsg;
}
