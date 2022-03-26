
//To make the drop down list box inherit data according to parent 
var itemProviderObject = {
    "Coffee Day" : {
        "Toned Milk" : ["Ltr"],
        "Coffee Bean" : ["Kg"],
        "Sugar" : ["Kg"],
        "Tea Bags" : ["Tea Bags(100 pcs)"]
    },
    "Amman water supply" : {
        "Water Can" : ["can(s)"]
    }
    }

window.onload  =function() {
    var itemProvider = document.getElementById("item-provider");
    var itemName = document.getElementById("item-name");
    var quantity = document.getElementById("quantity");
    for (var i in itemProviderObject){
        itemProvider.options[itemProvider.options.length] = new Option(i, i);
    }
    itemProvider.onchange = function() {
        itemName.length = 1;
        quantity.length = 1;
        for (var j in itemProviderObject[this.value]) {
            itemName.options[itemName.options.length] = new Option(j, j);
        }
    }
    itemName.onchange = function() {
        quantity.length = 1;
        var x = itemProviderObject[itemProvider.value][this.value];
        for (var k = 0; k < x.length; k++){
            quantity.options[quantity.options.length] = new Option(x[k], x[k]);
            
        }
    }
}

//to increment and decrement stocks
function increment(){
    document.getElementById("noOfStock").stepUp();
}
function decrement(){
    document.getElementById("noOfStock").stepDown();
}

//to open and close the sidebar
function closeSideBar(){
    var containerId = document.getElementById("container");
    containerId.style.display = "none";
}

function openSideBar(){
    var containerId = document.getElementById("container");
    containerId.style.display = "block";
}

//adding a eventlistener to hide and show the form
function showHideFunction(){
    var formId = document.getElementById("showForm");
    console.log('display ---------', formId.style.display + ' end');
    if (formId.classList.contains("showForm")){
        formId.classList.remove("showForm");
    } else {
        formId.classList.add("showForm");
    }
}

//to close the form and redirect it to the home page
function closeForm () {
    var url = new URL("http://127.0.0.1:5500/pages/Home.html");
    window.location.href = url;
}

//Not worked code
// function showHideFunction(){
//     var formId = document.getElementById("showForm");
//     console.log('display ---------', formId.style.display + ' end');
//     if (formId.style.display === "none"){
//         formId.classList.add("showForm");
//     } else {
//         formId.classList.remove("showForm");
//     }
// }
