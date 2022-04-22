document.cookie = "AccessToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjcxY2QyZTc2LWM3NjItNGNkOC1hYTdmLTkzNWM4NTVkM2FhZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUwMjU4MzU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NTAyNjE5NTgsImlhdCI6MTY1MDI1ODM1OCwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.kgcz-GrgveSbzjZ2VvqsYGyf5ye0qAwYz7YGS9BFf5AqoxIt8P8TWh3iAEpkpOp1sFi1P-xpeKRtdhx2HOjSdDTq_jvU9eR1ToseQewXBcUXS9jBI6n1szo4ePfd52vjEzjJVpGm5acXM5Vk0MSR2z2qBjaI7-Dtc6PZ7ZmyBz4uKSd_q-81LNg1ym8X_c56yCqTb7Y5wHPNwNq6DJec8bIsUdWPrAKuT87lHdWNY6yNQ0vzgpJaVuLLXu3IQDEaEyaVACSFLZylcp-svQt6N5zXb5icgBoHB73w1_kSfVMLoF-Ah3lgqpUTJbsVIGY8SuWXdkRoU82whb8R5Ro-AQ";

function loadDropDownData() {
    getEmployeeDetails();
    getPaymentType();
    getPaymentMethod();
    getCurrencyType();
    paymentDateRestrictor();
}

function showHideFunction(){
    var formId = document.getElementById("showForm");
    var buttonId = document.getElementById("saveButton");
    if (formId.style.display=='block'){
        formId.style.display='none'
    } else {
        formId.style.display='block';
    }

    if (buttonId.style.display == "inline"){
        buttonId.style.display = "none";
    }else{
        buttonId.style.display = "inline";
    }
}

function changeForm () {
    var formId = document.getElementById("showForm");
    var buttonId = document.getElementById("updateButton");
    if (formId.style.display=='block'){
        formId.style.display='none';
    } else {
        formId.style.display='block';
    }

    if (buttonId.style.display == "inline"){
        buttonId.style.display = "none";
    }else{
        buttonId.style.display = "inline";
    }
}


function hideForm() {
    var formId = document.getElementById("showForm");
    formId.style.display = "none";
    document.forms[0].reset();
}


function getEmployeeDetails() {
    var url = "http://localhost/ec/employees";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status == 200){
                var request = JSON.parse(this.responseText);
                getEmployeeData(request);
            }else{
                alert("Error :" + this.message) 
            }
        }
        
    }

    function getEmployeeData(request){
        var employeeNameId = document.getElementById("employeeName");
        for (var iterator = 0; iterator < request.dropdownList.length; iterator++){
            var createEmployeeOptions = document.createElement("option");
            createEmployeeOptions.setAttribute('value',request.dropdownList[iterator].id);
            createEmployeeOptions.innerHTML = request.dropdownList[iterator].value;
            employeeNameId.appendChild(createEmployeeOptions);
        } 
    }
}


function getPaymentType() {
    var data = 
    {
            "code": "0",
            "message": "Ledger templates details are retrieved successfully",
            "messageArgs": null,
            "ledgerTemplates": [
                {
                    "id": 170,
                    "code": "1",
                    "name": "Faktura",
                    "value": "1 - Faktura"
                }
            ]
        }
        var paymentTypeId = document.getElementById("paymentType");
        for (var iterator = 0; iterator < data.ledgerTemplates.length; iterator++){
            var createOptions = document.createElement("option");
            createOptions.setAttribute('value',data.ledgerTemplates[iterator].id);
            createOptions.innerHTML = data.ledgerTemplates[iterator].value;
            paymentTypeId.appendChild(createOptions);
        } 
    }


function getPaymentMethod() {
    var url = "http://localhost/ec/paymentMethod";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status == 200){
                var response = JSON.parse(this.responseText);
                getPaymentMethodData(response);
            }else {
                alert("Error :" + this.message)
            }
        }
    }

    function getPaymentMethodData(response) {
        var paymentMethodId = document.getElementById("paymentMethod");
        for (var iterator = 0; iterator < response.dropdownList.length; iterator++){
            var createPaymentOptions = document.createElement("option");
            createPaymentOptions.setAttribute("value",response.dropdownList[iterator].id);
            createPaymentOptions.innerHTML = response.dropdownList[iterator].value;
            paymentMethodId.appendChild(createPaymentOptions);
        } 
    }
}

function getCurrencyType() {
    var url = "http://localhost/ec/currencies";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status == 200){
                var response = JSON.parse(this.responseText);
                getCurrencyTypeData(response);
            }else{
                alert("Error :" + this.message)
            }
        }
    }

    function getCurrencyTypeData(response) {
        var currencyTypeID = document.getElementById("currencyMethod");
        for (var iterator = 0; iterator < response.currencyList.length; iterator++){
            var createCurrencyOptions = document.createElement("option");
            createCurrencyOptions.setAttribute("value",response.currencyList[iterator].currencyCode);
            createCurrencyOptions.innerHTML = response.currencyList[iterator].currencyName;
            currencyTypeID.appendChild(createCurrencyOptions);
        } 
    }
}

//Post operation
function sendData() {
    
    var formDetails = {
        "attachments": [],
        "amount": document.getElementById("total").value,
        "currency": {
            "currencyCode": document.getElementById("currencyMethod").value,
        },
        "employee": {
            "userId": document.getElementById("employeeName").value,
        },
        "paymentType": {
            "id": document.getElementById("paymentType").value,
        },
        "paymentMethod": {
            "id": document.getElementById("paymentMethod").value,
        },
        "invoiceDate": document.getElementById("formPaymentDate").value,
        "name": document.getElementById("formExpenseName").value,
        "notes": document.getElementById("formNotes").value,
        "payoutWithSalary": document.getElementById("checkBox").checked,
        "lineItems": [],
        "dimensions": []
    }
    
    
    var url = "http://localhost/ec/expense";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    var postFormData = JSON.stringify(formDetails);
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4){
            if(xhttp.status == 200){
                alert("Data created successfully!!!");
                window.location.reload();
            }else {
                alert("Error :" + " Status code = " + this.status + " and readystate = " + this.readyState)
            }
        }
    }
    xhttp.send(postFormData)
}

//Get operation
function getDataToDisplay() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/ec/expenses/stage/Inbox?count=10&offset=0",true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    xhttp.onload = function () {
        if(this.readyState == 4){
            if(this.status == 200){
                var response = JSON.parse(this.responseText)
                for (iterator = 0; iterator < response.expenses.length; iterator++){
                    var clone = document.getElementById("card").cloneNode(true);
                    var inputElements = clone.getElementsByTagName("input"); 
                    inputElements[0].value += response.expenses[iterator].id;
                    inputElements[1].value += response.expenses[iterator].employee["name"];
                    inputElements[2].value += response.expenses[iterator].name;
                    inputElements[3].value += dateConverter(response.expenses[iterator].invoiceDate.split("T")[0]);
                    inputElements[4].value += response.expenses[iterator].notes;
                    inputElements[5].value += response.expenses[iterator].amount;
                    inputElements[6].value += response.expenses[iterator].currency['currencyName'];
                    document.getElementById("cardContainer").append(clone);
                    
                }
                var card = document.getElementById("card");
                    card.style.display = "none";
            }else{
                alert("Error : " + this.message)
            }
        }
    }
    var object = {}
    json = JSON.stringify(object);
    xhttp.send(json);

}
getDataToDisplay();


//Display in the form operation
function showDataFromCard (element) {
    changeForm();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4){
            if(this.status == 200){
                var response = JSON.parse(this.responseText);
                getDataToForm(response);
            }else {
                alert("Error :" + this.message)
            }
        }
    }

    var url = "http://localhost/ec/expenses/";
    var newUrl = url + element.parentElement.getElementsByTagName("input")[0].value;
    xhttp.open("GET",newUrl,true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    

    function getDataToForm(response){
        var formData = document.getElementById("createDataForm").elements;
        formData[0].value = response.expense.id;
        formData[1].value = response.expense.employee["userId"];
        formData[2].value = response.expense.name;
        formData[3].value = response.expense.paymentType["id"];
        formData[4].value = response.expense.paymentMethod["id"];
        formData[5].value = response.expense.invoiceDate.split("T")[0];
        formData[6].value = response.expense.notes;
        formData[7].value = response.expense.amount;
        formData[8].value = response.expense.currency["currencyCode"];
        formData[9].checked = response.expense.payoutWithSalary;
    }
    xhttp.send();
}

//Update operation
function updateData () {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/ec/expense?id=" + document.forms[0].elements[0].value;
    xhttp.open("PUT",url,true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4){
            if(this.status == 200){
                getDataToDisplay();
                empNameValidation();
                expNameValidation();
                paymentTypeValidation();
                paymentMethodValidation();
                currencyMethodValidation();
                paymentDateValidation();
                alert("Data Updated successfully!!!");
                hideForm();
                document.forms[0].reset();
                window.location.reload();
            } else {
                alert ("Error : " + this.message);
            }
        }

        
    }

        var dataOfForm = document.getElementById("createDataForm").elements;
        var object = {
            "attachments": [],
            "amount": dataOfForm[7].value,
            "currency": {
                "currencyCode": dataOfForm[8].value,
            },
            "employee": {
                "userId": dataOfForm[1].value,
            },
            "paymentType": {
                "id": dataOfForm[3].value,
            },
            "paymentMethod": {
                "id": dataOfForm[4].value,
            },
            "invoiceDate": dataOfForm[5].value,
            "name": dataOfForm[2].value,
            "hasImage": true,
            "imageBase64": "",
            "isActive": true,
            "notes": dataOfForm[6].value,
            "payoutWithSalary": dataOfForm[9].checked,
            "lineItems": [],
            "dimensions": []
        }
    var patchData = JSON.stringify(object);
    xhttp.send(patchData);

}


//Delete operation
function removeData(element){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status === 200){
                alert("Data deleted successfully!!!");
                window.location.reload();
                
            }else {
                alert("Error : " + this.message);
            }
        }
    };

    url = "http://localhost/ec/expense/";
    newUrl = url + element.parentElement.getElementsByTagName("input")[0].value;
    xhttp.open("DELETE",newUrl,true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + document.cookie.split('=')[1]);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhttp.setRequestHeader("Accept","application/json")
    xhttp.setRequestHeader("companyId","14");
    xhttp.send();  
}

//Validation:

//Employee Name validation
function empNameValidation() {
    var employeeNameId = document.getElementById("employeeName");
    var employeeNameValue = document.getElementById("employeeName").value;
    var employeeSpanId = document.getElementById("employeeSpanId");
    if (employeeNameValue == "") {
        employeeSpanId.classList.remove("hidden");
        employeeSpanId.style.color = "red";
        employeeNameId.style.borderColor = "red";
    } else {
        employeeSpanId.classList.add("hidden");
        employeeNameId.style.borderColor = "black";
    }
}

//Expense name validation
function expNameValidation() {
    var expenseSpanId = document.getElementById("expenseSpanId");
    var expenseNameId = document.getElementById("formExpenseName");
    var expenseRegex = /^[A-Za-z0-9 ]{1,20}$/
    var expenseNameValue = document.getElementById("formExpenseName").value;
    if (expenseRegex.test(expenseNameValue)){
        expenseSpanId.classList.add("hidden");
        expenseNameId.style.borderColor = "black";
    } else {
        expenseSpanId.classList.remove("hidden");
        expenseSpanId.style.color = "red";
        expenseNameId.style.borderColor = "red";
    }
}

//Payment Type Validation
function paymentTypeValidation() {
    var paymentTypeId = document.getElementById("paymentType");
    var paymentTypeValue = document.getElementById("paymentType").value;
    var paymentTypeSpanId = document.getElementById("paymentTypeSpanId");
    if (paymentTypeValue == ""){
        paymentTypeSpanId.classList.remove("hidden");
        paymentTypeSpanId.style.color = "red";
        paymentTypeId.style.borderColor = "red";
    } else {
        paymentTypeSpanId.classList.add("hidden");
        paymentTypeId.style.borderColor = "black";
    }
}

//Payment Method Validation
function paymentMethodValidation() {
        var paymentMethodId = document.getElementById("paymentMethod");
        var paymentMethodValue = document.getElementById("paymentMethod").value;
        var paymentMethodSpanId = document.getElementById("paymentMethodSpanId");
        if (paymentMethodValue == ""){
            paymentMethodSpanId.classList.remove("hidden");
            paymentMethodSpanId.style.color = "red";
            paymentMethodId.style.borderColor = "red";
        } else {
            paymentMethodSpanId.classList.add("hidden");
            paymentMethodId.style.borderColor = "black";
        } 
}

//Currency Method Validation
function currencyMethodValidation() {
    var currencyMethodId = document.getElementById("currencyMethod");
    var currencyMethodValue = document.getElementById("currencyMethod").value;
    var currencyMethodSpanId = document.getElementById("currencyMethodSpanId");
    if (currencyMethodValue == ""){
        currencyMethodSpanId.classList.remove("hidden");
        currencyMethodSpanId.style.color = "red";
        currencyMethodId.style.borderColor = "red";
    } else {
        currencyMethodSpanId.classList.add("hidden");
        currencyMethodId.style.borderColor = "black";
    }
}

//Total Amount Field Validation
function totalamountValidation() {
    var totalId = document.getElementById("total");
    var totalIdValue = document.getElementById("total").value;
    var totalIdRegex = /^\d+\.\d{2}$/
    var totalSpanIdOne = document.getElementById("totalSpanIdOne");
    var totalSpanIdTwo = document.getElementById("totalSpanIdTwo");
    if(totalIdRegex.test(totalIdValue)){
        totalSpanIdTwo.classList.add("hidden");
        totalId.style.borderColor = "black";
    } else {
        totalSpanIdTwo.classList.remove("hidden");
        totalId.style.borderColor = "red";
        totalSpanIdTwo.style.color = "red";
    }
    if (totalIdValue == ""){
        totalSpanIdOne.classList.remove("hidden");
        totalSpanIdTwo.classList.add("hidden");
        totalSpanIdOne.style.color = "red";
        totalId.style.borderColor = "red";
    } else {
        totalSpanIdOne.classList.add("hidden");
        totalId.style.borderColor = "black";
    }
}

//Payment Date Validation
function paymentDateValidation() {
    var paymentDateId = document.getElementById("formPaymentDate");
    var paymentDateValue = document.getElementById("formPaymentDate").value;
    var paymentDateSpanId = document.getElementById("paymentDateSpanId");
    if (paymentDateValue == ""){
        paymentDateSpanId.classList.remove("hidden");
        paymentDateSpanId.style.color = "red";
        paymentDateId.style.borderColor = "red";
    } else {
        paymentDateSpanId.classList.add("hidden");
        paymentDateId.style.borderColor = "black";
    } 
    
}
function paymentDateRestrictor() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (date < 10){
        date = "0" + date;
    }
    if (month < 10){
        month = "0" + month;
    }
    var constructDate = year + "-" + month + "-" + date ;
    document.getElementById("formPaymentDate").setAttribute("max",constructDate);
}



function validationForm () {
    var formElements = document.forms[0].elements;
    if (formElements[1].value == "" || formElements[2].value == "" || formElements[3].value == "" || formElements[4].value == "" || formElements[5].value == "" || formElements[7].value == "" || formElements[8].value == ""){
        alert("Some Fields are missing in the form!!!");
        empNameValidation();
        expNameValidation();
        paymentTypeValidation();
        paymentMethodValidation();
        currencyMethodValidation();
        totalamountValidation();
        paymentDateValidation();
    }else{
    sendData();
    }
}

function saveButtonOnclick() {
    validationForm();
}

function dateConverter(givenDate) {
    var date = new Date(givenDate).getDate();
    var month = new Date(givenDate).getMonth() + 1;
    var fullYear = new Date(givenDate).getFullYear();
    return month + "/" + date + "/" + fullYear;
}

function lightDarkModeToggle() {
    var iconId = document.getElementById("lightMode");
    document.body.classList.toggle("light-mode");
    iconId.className = iconId.className == "bi bi-toggle-on" ? "bi bi-toggle-off" : "bi bi-toggle-on"; 
}