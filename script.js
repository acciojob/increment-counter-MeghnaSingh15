//your JS code here. If required.
let count =0;
let para = document.querySelector("p");
let btn =  document.querySelector("button");
btn.addEventListener("click", function(){
	alert(para.innerText);
	count++;
	para.innerText = count;
	
	
	
})

