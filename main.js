function getresult() {
	var x = 0;
  var checkBox = document.getElementById("c1");
  var text = document.getElementById("text");
  if (c1.checked == true){
	  x = x+1;
  }
	var c2 = document.getElementById("c2");
	if (c2.checked == true){
		x = x+1;
	}
	var c3 = document.getElementById("c3");
	if (c3.checked == true){
		x = x+1;
	}
	var c4 = document.getElementById("c4");
	if (c4.checked == true){
		x = x+1;
	}
	var c5 = document.getElementById("c5");
	if (c5.checked == true){
		x = x+1;
	}
	document.getElementById("result").innerHTML = x + "/5";
	document.getElementById("resultpercent").innerHTML = x / 5 *100 +" %";
	document.getElementById("c1text").innerHTML = "3. 206".fontcolor("green");
	document.getElementById("c2text").innerHTML = "3. 24".fontcolor("green");
	document.getElementById("c3text").innerHTML = "4. Cranium".fontcolor("green");
	document.getElementById("c4text").innerHTML = "1. Knee".fontcolor("green");
	document.getElementById("c5text").innerHTML = "4. Spinal Cord".fontcolor("green");
}