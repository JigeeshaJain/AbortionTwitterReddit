function getSelectValues(select) {
	var result = [];
	var options = select && select.options;
	var opt;
  
	for (var i=0, iLen=options.length; i<iLen; i++) {
	  opt = options[i];
  
	  if (opt.selected) {
		result.push(opt.value || opt.text);
	  }
	}
	document.getElementById("submitStates").value = result;
	return result;
  }