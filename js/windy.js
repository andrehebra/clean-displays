//remove elements from webpage for a given HTML element id
function clearElement(id) {
    //get the element and load in
    const element = document.getElementById(id);
    //get the parent element
    const parent = element.parentNode;
    
    //remove the child of the parent element
    parent.removeChild(element);
}

window.addEventListener("load", function () {
    clearElement("rhpane");
    clearElement("search");
    clearElement("logo-wrapper");
    clearElement("rh-top-icons");
})