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

    //if a term was found, print out it's full definition.
    if (found)
    {
        document.getElementById("example").innerHTML = definition.parentElement.innerHTML;
        definition.style.backgroundColor = "yellow";  
    }

    else
    {
        //tell the user that no term was found
    }


}