function prettify(num) {
	var prettifyNum = num.toString();
	return prettifyNum.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
}

export default prettify;
