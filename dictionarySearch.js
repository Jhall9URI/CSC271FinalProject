//retrieve the keyword from the search bar
//strip any leading/trailing whitespace
//check every definition for a match
//whichever is the first match, change the background of the definition to yellow
//maybe create a modal with teh definition instead
//if the name does not match the definition, set its background to whatever the original is
//get the first letter of the name and jump to it using the jump link

function searchForTerms() 
{

    //get the keyword from the search bar.
    var keyword = document.getElementById("search-input").value.trim();

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
        //tell the user that no term was found
    }
}
