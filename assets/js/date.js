function getDays(strDateStart){
	var myDate = new Date;
	var strDateEnd = myDate.getFullYear() + '-' + (myDate.getMonth()+1) + '-' + myDate.getDate();
	var strSeparator = "-"; //日期分隔符
	var oDate1;
	var oDate2;
	var iDays;
	oDate1 = strDateStart.split(strSeparator);
	oDate2 = strDateEnd.split(strSeparator);
	var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
	var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
	iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24);
	return iDays;
}