var errorMsg = document.getElementById("search-error");
var searchBar = document.getElementById("search-input");

function searchForTerms() 
{
    //get the keyword from the search bar.
    var keyword = searchBar.value.trim();

    //retrieve the list of dictionary terms
    var terms = document.getElementsByClassName("definition");
    var found = false;
    var definition;

    //search through the definitions to see if any match
    for (i = 0; i<terms.length; i++) 
    {
        //reset the background of the words, in case any were previously highlighted
        terms[i].style.backgroundColor = "";

        if (keyword.toLowerCase() == terms[i].innerHTML.toLowerCase()) 
        {
            found = true;
            definition = terms[i];
        }
    }

    //if a term was found, print out it's full definition onto the modal
    if (found)
    {
        document.getElementById("def-modal-title").innerHTML = "Definition Found";
        document.getElementById("def-modal-body").innerHTML = definition.parentElement.innerHTML;

        //use jQuery to show the modal on screen
        $('#definition-modal').modal('show'); 
        
        //highlight the specific definition on the page
        definition.style.backgroundColor = "yellow";

        //jump to the specific section on the screen
        var firstLetter = definition.innerHTML[0];
        var sectionID = "dict-" + firstLetter.toUpperCase();
        window.location.hash = sectionID;

        //set the tab navigationt onto the modal
        document.getElementById("def-modal-body").focus();
    }

    else
    {
        //display an error message if the term wasn't found;
        document.getElementById("def-modal-title").innerHTML = "Definition Not Found";
        document.getElementById("def-modal-body").innerHTML = "no definition found for \"" + keyword + "\"";

        //display the modal with the error message
        $('#definition-modal').modal('show');
        document.getElementById("def-modal-body").focus();
        searchBar.classList.add("invalid");

    }
}


//sets the search bar to be called when the user presses "enter"
searchBar.onkeypress = function(event)
{
    if (event.keyCode == 13 || event.which == 13)
    {
        searchForTerms();
    }
}

searchBar.onfocus = function() 
{
    this.classList.remove("invalid");
}
