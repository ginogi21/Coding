const inputs = document.querySelectorAll(".input");


inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function focusFunc(){
	let parent = this.parentNode.parentNode;
	console.log(parent)
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
