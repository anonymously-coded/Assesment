function closeSideBar(){
    var containerId = document.getElementById("container");
    containerId.style.display = "none";
    var contentMover = document.getElementById("mainContainer");
    contentMover.style.marginLeft = "40px";
}

function openSideBar(){
    var containerId = document.getElementById("container");
    containerId.style.display = "block";
    var mainContainerMover = document.getElementById("mainContainer");
    mainContainerMover.style.marginLeft = "400px";
}

function showHideFunction(){
    var formId = document.getElementById("showForm");
    if (formId.style.display=='block'){
        formId.style.display='none';
    } else {
        formId.style.display='block';
    }
}

function hideForm() {
    var formId = document.getElementById("showForm");
    formId.style.display = "none";
}

function hideFormTwo() {
    var formId = document.getElementById("showFormTwo");
    formId.style.display = "none";
}

//js for getting data from the url and cloning the card.
function getMethod() {
    const xhttp  = new XMLHttpRequest();
    xhttp.open("GET","https://gorest.co.in/public/v2/users",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Authorization", "Bearer 1156537194da85c9d32b3e3044bb1ceebe35c2fdca9e34b7abf798e99775f9fc")
    xhttp.send();
    xhttp.onload = function () {
        console.log(this)
        getMethodFunc(this)
    }
    function getMethodFunc(req) {
        const request = JSON.parse(req.responseText);
        console.log(request);
        console.log(req.status);
        console.log(req.readyState)
        if (req.status == 200 & req.readyState == 4){
            var iterator;
            for(iterator = 0; iterator < request.length; iterator++){
                var divElement = document.getElementsByClassName("card")[0].cloneNode(true);
                var iteratingDivElements = document.getElementsByClassName("card")[iterator].getElementsByTagName("input");
                var iteratorTwo;
                for(iteratorTwo = 0; iteratorTwo < iteratingDivElements.length; iteratorTwo++){
                    var idValues = iteratingDivElements[iteratorTwo].id;
                    iteratingDivElements[iteratorTwo].value = request[iterator][idValues];
                }
                document.getElementsByClassName("card-container")[0].appendChild(divElement);
            }
        }else {
            alert("Check status and state!!!"); 
        }
    }
 }

 //To create a new data using POST method
 function sendData() {
     dataName = document.getElementById("enterName").value;
     dataEmail = document.getElementById("enterEmail").value;
     const xhttp  = new XMLHttpRequest();
     xhttp.open("POST","https://gorest.co.in/public/v2/users/",true);
     xhttp.setRequestHeader("Content-type", "application/json");
     xhttp.setRequestHeader("Authorization", "Bearer 1156537194da85c9d32b3e3044bb1ceebe35c2fdca9e34b7abf798e99775f9fc")
     console.log(xhttp);
     var body = JSON.stringify({name: dataName, email: dataEmail, gender: "male", status:"active"});
     console.log(body)
     xhttp.send(body)
     xhttp.onreadystatechange = function (){
        if(xhttp.status == 200 && xhttp.readyState == 4){
            var request = JSON.parse(xhttp.responseText)
            console.log(xhttp)
            console.log(request)
        }
    }
 }

function changeForm () {
    var formId = document.getElementById("showFormTwo");
    if (formId.style.display=='block'){
        formId.style.display='none';
    } else {
        formId.style.display='block';
    }
}



//To get the data form the card and show it in the card
function editData(element) {
    changeForm();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            getDataFromCard(response);
        }
    };
    var url = "https://gorest.co.in/public/v2/users/"
    var newUrl = url + element.parentElement.getElementsByTagName("input")[0].value;
    xhttp.open("GET", newUrl, true);
    xhttp.setRequestHeader("Authorization", "Bearer 1156537194da85c9d32b3e3044bb1ceebe35c2fdca9e34b7abf798e99775f9fc");
    xhttp.send();

    function getDataFromCard(response){
        var formDetails = document.forms[1].elements;
        console.log(formDetails)
        console.log(response)
        formDetails[0].value = response.id;
        formDetails[1].value = response.name;
        formDetails[2].value = response.email;

        if (response.gender == formDetails[3].value){
            formDetails[3].checked = true;
        } else {
            formDetails[4].checked = true;
        }
    }
}


//To update the data and store it in the API
function updateData(element) {
    const xhttp = new XMLHttpRequest();
    

var url = "https://gorest.co.in/public/v2/users/" + document.forms[1].elements[0].value;
xhttp.open("PATCH", url, true);
xhttp.setRequestHeader("accept","application/json");
xhttp.setRequestHeader("Content-Type","application/json");
xhttp.setRequestHeader("Authorization", "Bearer 1156537194da85c9d32b3e3044bb1ceebe35c2fdca9e34b7abf798e99775f9fc");

xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            getMethod();
            alert("Data updated succesfully!!!");
            hideFormTwo();
            document.forms[0].reset();
            } else {
                alert("Error :" + this.status);
            }
        }
    };

var dataOfForm = document.getElementById("editDataForm").elements;
var object = {
    "name": dataOfForm[1].value,
    "email": dataOfForm[2].value,
    "gender": dataOfForm[3].value
}  

var patchData = JSON.stringify(object);
xhttp.send(patchData);
}


//To remove a data from CRUD
function removeData(element) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status == 204){
            alert("Data deleted successfully!!!!");
            getMethod();
        } else {
            alert("Error :" + this.status);
        }
    }
    };
    url = "https://gorest.co.in/public/v2/users/" + element.parentElement.getElementsByTagName("input")[0].value;
    xhttp.open("DELETE",url ,true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer 1156537194da85c9d32b3e3044bb1ceebe35c2fdca9e34b7abf798e99775f9fc" )
    xhttp.send();
}

