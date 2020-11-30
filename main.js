function submit() {
	var x = 0;
  var checkBox = document.getElementById("c1");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
	  x = x+1;
  }
  var radio = document.getElementById("c2");
  var text = document.getElementById("text");
  if (radio.checked == true){
	  x = x+1;
 }
	var athree = document.getElementById("c3");
	var text = document.getElementById("text")
    if (athree.checked == true){
	  x = x+1;
  }
		var afour = document.getElementById("c4");
	var text = document.getElementById("text")
    if (afour.checked == true){
	  x = x+1;
  }
		var afive = document.getElementById("c5");
	var text = document.getElementById("text")
    if (afive.checked == true){
	  x = x+1;
  }
	document.getElementById("result").innerHTML = x + "/5";
	document.getElementById("resultpercent").innerHTML = x / 5 *100 +" %";
	if (x == 5){
	document.getElementById("medal").src = "https://img.pngio.com/gold-medal-gold-medal-png-406_500.png";
	}
	document.getElementById("time").innerHTML ="End Time:" + Date();
}