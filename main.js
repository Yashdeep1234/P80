var listOfguests = [];
function Addguest() {
    listOfguests.push(document.getElementById("student").value);
    document.getElementById("student").value = "";
    document.getElementById("Remove").style.display = "inline-block";
    Viewguest();
    sortguest();
}

function sortguest() {
    listOfguests.sort();
    Viewguest();
}

function Viewguest() {
    var createHTML = "";
    createHTML = createHTML + '<ol>';
    for (var i = 0; i < listOfguests.length; i++) {
        createHTML = createHTML + '<li>' + listOfguests[i] + '</li>';
    }
    createHTML = createHTML + '</ol>';
    document.getElementById("showSTU").innerHTML = createHTML;
}
function RemoveName() {
    listOfguests.pop();
    Viewguest();

}

function SEARCH() {
    var searchELEMENT = document.getElementById("searchSTU").value;
    var count = 0;
    for (var i = 0; i < listOfguests.length; i++) {
        if (searchELEMENT == listOfguests[i]) {
            count = count + 1;
        }
    }
    document.getElementById("result").innerHTML = "Element found " + searchELEMENT + " " + count + " times";
}