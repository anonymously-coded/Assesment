document.cookie = "AccessToken=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjM0MjJjZDNjLTgyNTctNDI5Ny04MjM5LWJiZDg2M2ViYzU0ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5NzM1Njk5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk3NTEzNTMsImlhdCI6MTY0OTc0Nzc1MywiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.VG2tTy4o1TVrI-QLBj4nR4jcZBdJXwOa0NVC2xfgRTZ7qWX-iQbIkIYahiFh4PziHk6UWHC0EMVq-MGh_P5jbu8EnmuNvYA42seWVkJzUQVRmWyBT106QqJ0fDlAAp2iU5LyxmIVDG1qojhL7jfSuI51GW_xq__uv-gXWoBIRAsbX0PCkokqMmKc7aLBZ-4n5hlv_wWW4L2efR0ZkfQ7gQlnOtf2ZjofPp33s6L_ZaVppk3jRz0pWauMu06gjLIgYBRYWvmwbkQMnW9JJFIpq3mPiuGAh-Zmai7rzWxaNQ4fSooTBxLQL4IPEnM5w0cWgZEONl9wVLOmb_u3uH6vxw";

function loadDropDownData() {
    getEmployeeDetails();
    getPaymentType();
    getPaymentMethod();
    getCurrencyType();
}

function showHideFunction(){
    var formId = document.getElementById("showForm");
    if (formId.style.display=='block'){
        formId.style.display='none'
    } else {
        formId.style.display='block';
        

    }
}

function showHideExpenses() {
    var cardContainerId = document.getElementById("cardContainer");
    if (cardContainerId.style.display == "flex"){
        cardContainerId.style.display = 'none';
    } else {
        cardContainerId.style.display = "flex";
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


function hideForm() {
    var formId = document.getElementById("showForm");
    formId.style.display = "none";
}

function hideFormTwo() {
    var formId = document.getElementById("showFormTwo");
    formId.style.display = "none";
}

function getEmployeeDetails() {
    var url = "http://localhost/ec/employees";
    const xhttp = new XMLHttpRequest();
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
                const request = JSON.parse(this.responseText);
                getEmployeeData(request);
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
    const xhttp = new XMLHttpRequest();
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
    const xhttp = new XMLHttpRequest();
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
    function payoutWithSalaryCheck () {
        if(document.getElementById("checkBox").checked){
            payoutWithSalaryCheck.value = "Yes";
        } else {
            payoutWithSalaryCheck.value = "No";
        }
    }

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
        "invoiceDate": document.getElementById("paymentDate").value,
        "name": document.getElementById("expenseName").value,
        "notes": document.getElementById("notes").value,
        "payoutWithSalary": payoutWithSalaryCheck(),
        "lineItems": [],
        "dimensions": []
    }
    
    
    var url = "http://localhost/ec/expense";
    const xhttp = new XMLHttpRequest();
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
                hideForm();
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
                console.log(response)
                for (iterator = 0; iterator < response.expenses.length; iterator++){
                    document.getElementById("id").value = response.expenses[iterator].id;
                    document.getElementById("empName").value = response.expenses[iterator].employee["name"];
                    document.getElementById("expenseName").value = response.expenses[iterator].name;
                    document.getElementById("paymentDate").value = response.expenses[iterator].invoiceDate;
                    document.getElementById("notes").value = response.expenses[iterator].notes;
                    document.getElementById("currency").value = response.expenses[iterator].currency['currencyName'];
                    document.getElementById("amount").value = response.expenses[iterator].amount;
                    var cloneCard = document.getElementById("card");
                    var clone = cloneCard.cloneNode(true);
                    document.getElementById("cardContainer").appendChild(clone);
                }
            }
        }
    }
    var object = {}
    xhttp.send(JSON.stringify(object));

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
    var obj = {}
    xhttp.send(JSON.stringify(obj));

    function getDataToForm(response){
        var formData = document.forms[1].elements;
        formData[0].value = response.expense.id;
        formData[1].value = response.expense.employee["userId"];
        formData[2].value = response.expense.name;
        formData[3].value = response.expense.invoiceDate;
        formData[4].value = response.expense.notes;
        formData[5].value = response.expense.amount;
        formData[6].value = response.expense.currency["currencyCode"];
    }
}

//Update operation
function updateData () {
    const xhttp = new XMLHttpRequest();
    var url = "http://localhost/ec/expense?id=" + document.forms[1].elements[0].value;
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
                alert("Data Updated successfully!!!");
                hideFormTwo();
                document.forms[0].reset();
            } else {
                alert ("Error : " + this.status);
            }
        }

        
        }
        var dataOfForm = document.getElementById("updateDataForm").elements;
        var object = {
            "attachments": [],
            "amount": dataOfForm[5].value,
            "currency": {
                "currencyCode": dataOfForm[6].value,
            },
            "employee": {
                "userId": dataOfForm[1].value,
            },
            "paymentType": {
                "id": 170
            },
            "paymentMethod": {
                "id": 2
            },
            "invoiceDate": dataOfForm[3].value,
            "name": dataOfForm[2].value,
            "hasImage": true,
            "imageBase64": "",
            "isActive": true,
            "notes": dataOfForm[4].value,
            "payoutWithSalary": null,
            "lineItems": [],
            "dimensions": []
    }
    var patchData = JSON.stringify(object);
    xhttp.send(patchData);

}


//Delete operation
function removeData(element){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status === 200){
                alert("Data deleted successfully!!!");
                window.location.reload();
                
            }else {
                alert("Error : " + this.status);
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
    var expenseRegex = /^[A-Za-z0-9]{1,15}$/
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

//Total Amount Feild Validation
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