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

// handling the pressing of teacher and learner buttons in mobile
// to change the selection
function myTeacher() {
	let heading = document.getElementById("heading_changer");
	let background = document.getElementById("T-sec");

	heading.innerHTML = "Teacher Login";
	background.style.background = "#fff";
}

function myLearner() {
	let heading = document.getElementById("heading_changer");
	let background = document.getElementById("T-sec");

	heading.innerHTML = "Learner Login";
	background.style.background = "#F8F7F7";
}