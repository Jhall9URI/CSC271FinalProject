//variables for HTML elements
var formTitle = document.getElementById("coach-form-title");
var coachForm = document.getElementById("coach-form");
var submitBtn = document.getElementById("submit-btn");

//form groups
var hoursGroup = document.getElementById("hoursGroup");
var priceGroup = document.getElementById("priceGroup");
var rateGroup = document.getElementById("rateGroup");

//form inputs
var hoursInput = document.getElementById("numHoursInput");
var priceInput = document.getElementById("priceEstimate");
var rateInput = document.getElementById("rateInput");

//when a coach is selected, change the name and mailto: action of the form
function setupContactForm(element) 
{

    //get the name/email from the current card (aka the parent div)
    var name = element.parentNode.getElementsByClassName("coach-name")[0].innerHTML;
    var email = element.parentNode.getElementsByClassName("coach-email")[0].innerHTML;
    var rate = element.parentNode.getElementsByClassName("rate")[0].innerHTML;

    //set the modal form's title to include the coach's name
    formTitle.innerHTML = "Coach: " + name;

    //set the modal form's action so it emails the coach's email address
    coachForm.action = "mailto:" + email;

    //make sure that the rate element is hidden, and set its value to the coach's rate
    rateInput.value = rate;
    rateGroup.hidden = true;

    //make sure that the price estimate the num hours input are visible/enabled
    priceGroup.hidden = priceInput.disabled = false;
    hoursGroup.hidden = hoursInput.disabled = false;

    //set the focus to the modal's title
    formTitle.focus();
}

//set up the form so that potential coaches can apply online
function setupApplication() 
{
    //change the form labels so it applies to coach applications

    formTitle.innerHTML = "Apply to be a Coach";
    coachForm.action = "mailto:baseEmail@fakeDomain.com";
    submitBtn.innerHTML = "Submit Application";

    //reset the rate input value, and make the input field visible
    rateInput.value = "";
    rateGroup.hidden = false;

    //the coach doesn't need to request hours or a price, so hide those elements
    priceGroup.hidden = priceInput.disabled = true;
    hoursGroup.hidden = hoursInput.disabled = true;

    //set the focus to the modal's title
    formTitle.focus();
}

function getEstimate()
{
    //ensure that the numHours and rate have values,
    // if either are empty, the estimate is 0
    if (rateInput.value.length == 0 || hoursInput.value.length == 0)
    {
        priceInput.value = "$0";
    }

    else
    {
        var estimate = rateInput.value * hoursInput.value;
        priceInput.value = "$"+estimate;
    }
}