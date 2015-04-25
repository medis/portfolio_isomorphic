// Adds classes to each letter of given string.
jQuery.fn.splitLetters = function(input) {
	var a;
  var arr = input.split("");
    
  for(var i=0;i<arr.length;i++) {   
    if(arr[i] == " "){
      arr[i] = '<div class="letter-measure blank">' + arr[i] + '</div>';
    }
    else{
  		if(!arr[i].match(/\s\n\t\r/g) && arr[i]!="") arr[i] = '<div class="letter-measure">' + arr[i] + '</div>';
    }
  }
  
  return arr.join(" ");
}