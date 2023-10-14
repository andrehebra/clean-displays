function clearElement(id) {
    const element = document.getElementById(id);
    console.log(element);
    const parent = element.parentNode;
    console.log(parent);
    parent.removeChild(element);
}

window.addEventListener("load", function () {
    clearElement("rhpane");
    clearElement("search");
    clearElement("logo-wrapper");
    clearElement("rh-top-icons");
})