//functions to make

//when a coach is selected, change the name and mailto: action of the form
function setupContactForm(element) {

    //get the name/email from the current card (aka the parent div)
    var name = element.parentNode.getElementsByClassName("coach-name")[0].innerHTML;
    var email = element.parentNode.getElementsByClassName("coach-email")[0].innerHTML;

    //set the modal form's title to include the coach's name
    var formTitle = document.getElementById("coach-form-title");
    formTitle.innerHTML = "Hire " + name;

    //set the modal form's action so it emails the coach's email address
    var coachForm = document.getElementById("coach-form");
    coachForm.action = "mailto:" + email;
}