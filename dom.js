var bt = document.getElementById("bt");
var ipt = document.getElementById("ipt");
var addipt = document.getElementById("addipt");
var ul = document.querySelector("ul");
function createlist(){
	var next = ipt.value;
	if(next !== ""){
		var li = document.createElement("li");
		
		li.appendChild(document.createTextNode(next));
		ul.appendChild(li);
		ipt.value = "";
	}
}
function checkKey(event){
							if(event.keyCode === 13){
								createlist();
							}
}
bt.addEventListener("click",createlist);
ipt.addEventListener("keypress",checkKey);
addipt.addEventListener("click",function(){
	ipt.parentNode.removeChild(ipt);
});