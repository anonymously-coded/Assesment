
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
    var contentMover = document.getElementById("cardHolder");
    contentMover.style.marginLeft = "40px";
    contentMover.style.marginTop  ="70px";

}

function openSideBar(){
    var containerId = document.getElementById("container");
    containerId.style.display = "block";
    var contentMover = document.getElementById("cardHolder");
    contentMover.style.marginLeft = "335px";
    contentMover.style.marginTop  ="70px";
}

//adding a eventlistener to hide and show the form
function showHideFunction(){
    var formId = document.getElementById("showForm");
    if (formId.style.display=='none'){
        formId.style.display='block'
    } else {
        formId.style.display='none'
    }
}

//to close the form and redirect it to the home page
function closeForm () {
    var url = new URL("http://127.0.0.1:5500/pages/Home.html");
    window.location.href = url;
}


//validation -- drop down list box
function focusEvent(){
    var dropDownOne = document.getElementById("item-provider").value;
    var dropDownTwo = document.getElementById("item-name");
    if (dropDownOne != '') {
        dropDownTwo.focus();
    }
}

function focusEventTwo(){
    var dropDownTwo = document.getElementById("item-name").value;
    var dropDownThree = document.getElementById("quantity");
    if (dropDownTwo != ''){
        dropDownThree.focus();
    }
}

function validateName(){
    console.log("checking validation")
    var nameRegex = /^[A-Za-z]{1,15}$/
    var nameId = document.getElementById("nameId");
    var nameValue = document.getElementById("contactPerson").value;
    var nameInputId = document.getElementById("contactPerson"); 
    console.log(nameValue.match(nameRegex))
    
    if(nameRegex.test(nameValue)){
        nameId.classList.add("hidden");
        nameInputId.style.borderColor = "black";
    }else{
        nameId.classList.remove("hidden");
        nameId.style.color = "red"; 
        nameInputId.style.borderColor = "red";
    }
}

function validatePhoneNumber() {
    var phoneRegex = /^\d{10}$/
    var phoneId = document.getElementById("phoneId");
    var phoneValue = document.getElementById("contactNumber").value;
    var phoneInputId  =document.getElementById("contactNumber");
     
    if(phoneRegex.test(phoneValue)){
        phoneId.classList.add("hidden");
        phoneInputId.style.borderColor  ="black";
    }else{
        phoneId.classList.remove("hidden");
        phoneId.style.color = "red";
        phoneInputId.style.borderColor = "red";
    }
}

function validateDeliveryDate () {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("deliverdDate")[0].setAttribute('min', today);
}

function validateExpectedDate(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("outOfStock")[0].setAttribute('min', today);
}

function validateManufacturingDate(){
    function addMonths(date, months) {
        date.setMonth(date.getMonth() + months);
        return date;
      }
    addMonths(new Date(), -5);

}
