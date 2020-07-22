// select all the document input tags
const inputs = document.querySelectorAll(".input");

// add a focus class to the .input-div class
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

// remove a focus class to the .input-div class
function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

// adds an EventListener to all the inputs of the Document
// to listen to when the input field is being focused on or not
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
