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
	let button = document.getElementById("mobi-btn");
	let teacherButton = document.getElementById("T-btn");
	let learnerButton = document.getElementById("L-btn");

	heading.innerHTML = "Teacher Login";
	
	// changing the login buttons color styles
	button.classList.remove("learner-btn");
	button.classList.add("teacher-btn");
	
	// changing the teacher and learner button styles depending on which is selected
	teacherButton.classList.add("active");
	learnerButton.classList.remove("active");
}

function myLearner() {
	let heading = document.getElementById("heading_changer");
	let button = document.getElementById("mobi-btn");
	let teacherButton = document.getElementById("T-btn");
	let learnerButton = document.getElementById("L-btn");

	heading.innerHTML = "Learner Login";
	
	// changing the login buttons color styles
	button.classList.add("learner-btn");
	button.classList.remove("teacher-btn");

	// changing the teacher and learner button styles depending on which is selected
	teacherButton.classList.remove("active");
	learnerButton.classList.add("active");

}