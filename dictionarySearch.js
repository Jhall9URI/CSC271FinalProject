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
        document.getElementById("def-modal-body").innerHTML = definition.parentElement.innerHTML;

        //use jQuery to show the modal on screen
        $('#definition-modal').modal('show'); 

        definition.style.backgroundColor = "yellow";
        var firstLetter = definition.innerHTML[0];
        var sectionID = "dict-" + firstLetter.toUpperCase();
        
        //jump to the specific section on the screen
        window.location.hash = sectionID;
    }

    else
    {
        //display an error message if false;
        errorMsg.innerHTML = "Term Not Found";
        searchBar.classList.add("invalid");
    }
}

searchBar.onfocus = function() 
{
    this.classList.remove("invalid");
    errorMsg.innerHTML = "";
    
}
