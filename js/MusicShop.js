
// home slide show

var intervalIdHome;

function startSlideShow() {
	intervalIdHome = setInterval(changeImage, 1500);
}

function stopSlideShow() {
	clearInterval(intervalIdHome);
}

function changeImage(){
	var imageSrc = document.getElementById("imagesHomeSlideShow").getAttribute("src");
	var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
	
	if (currentImageNumber == 5) {
		currentImageNumber = 0;
	}

	document.getElementById("imagesHomeSlideShow").setAttribute("src", "images/" + (Number(currentImageNumber) + 1) + ".jpg");
}


//end - home slide show

//function changeImage() {
//    var arrayImagesEventsSlideShow = document.getElementsByClassName()("imagesEventsSlideShow");
//    for (var i = 0; i < arrayImagesEventsSlideShow.length; i++) {
//        var imageSrc = document.getElementsByClassName("imagesEventsSlideShow").getAttribute("src");
//        var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);

//        if (currentImageNumber == 9) {
//            currentImageNumber = 6;
//        }

//        document.getElementsByClassName("imagesEventsSlideShow").setAttribute("src", "images/" + (Number(currentImageNumber) + 1) + ".jpg");
//    }
//}

// button to the top

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//end

//validation of the login form

function ValidateUsernameEmail(tf,tfHelp) {
    //get the value from tf
    var value = tf.value;
    //check if the value is empty
    var regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var regex2 = /^(([A-Z]{1,})+([a-z]{1,})+(\d{0,})?(.{0,}))$/;
    var testResult = regex.test(value) || regex2.test(value);

    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter the correct email or the correct username";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}


function ValidatePassword(tf, tfHelp) {  
    var value = tf.value;
    var regex = /^[A-Z][a-z]{7}\d\W$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "your password must contain 1 capital letter, 7 small letters, 1 digit and 1 non-word character";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateAll(form) {
    var formCheck = true;

    for (var i = 0; i < form.elements.length; i++) {
        //alert(form.elements[i]);
        var e = form.elements[i]; //a form element
        if (e.onblur) {
            alert(e.onblur());
            formCheck = e.onblur() && formCheck;
        }
    }
    return formCheck;
}

function ResetForm() {
    //select input elements and change the bgcolour to grey
    var arrayInputs = document.getElementsByTagName("input");
    for (var i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].className = "valid";
    }

    //select span elements and change the text to ""
    var arraySpans = document.getElementsByTagName("span");
    for (var i = 0; i < arraySpans.length; i++) {
        arraySpans[i].innerHTML = "";
    }

    var arrayTextArea = document.getElementsByTagName("textarea");
    for (var i = 0; i < arrayTextArea.length; i++) {
        arrayTextArea[i].className = "valid";
    }

    //select span elements and change the text to ""
    var arraySpans = document.getElementsByTagName("span");
    for (var i = 0; i < arraySpans.length; i++) {
        arraySpans[i].innerHTML = "";
    }
}

// form validation for registration

function ValidateFirstName(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Z]{1}[a-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you can only use letters, the first letter of the word must be a capital letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }   
}

function ValidateLastName(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Z]{1}[a-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you can only use letters, the first letter of the first word must be a capital letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateEmail(tf, tfHelp) {
    var value = tf.value;
    var regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter the correct email address";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidatePhoneNumber(tf, tfHelp) {
    var value = tf.value;
    var regex = /^(([0]\d{3}-\d{3}-\d{3})|([0]\d{4}-\d{4}))$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter your number in the format 0XXX-XXX-XXX or 0XXXX-XXXX";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}


function ValidateStreet(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Z]{1}[a-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must provide the correct street address including street number and house or apartment, start with a capital letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateSuburb(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Z]{1}[a-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter the correct name of the suburb, start with with a capital letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidatePostCode(tf, tfHelp) {
    var value = tf.value;
    var regex = /^\d{4}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "enter 4 digits";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateCountry(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Z]{1}[a-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter the correct country name, start with with a capital letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateUsername(tf, tfHelp) {
    var value = tf.value;
    var regex = /^(([A-Z]{1,})+([a-z]{1,})+(\d{0,})?(.{0,}))$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "your username must contain at least 1 capital letter and one small letter";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

// end of validation of the registration form

//validatdion of the contact us form

function ValidateTitleIssue(tf, tfHelp) {
    var value = tf.value;
    var regex = /^[A-Za-z]{1,}$/;
    var testResult = regex.test(value);
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else if (testResult == false) {
        tf.className = "invalid";
        tfHelp.innerHTML = "you must enter the question subject";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function ValidateMessageContent(tf, tfHelp) {
    var value = tf.value;
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value ";
        return false;
    }
    else {
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

//end validation

//local storage

function ValidateTxt(tf, tfHelp) {
    var value = tf.value;
    if (value == "") {
        tf.className = "invalid";
        tfHelp.innerHTML = "missing value, you must enter the artist's name, album title and price";
        return false;
    }
    else {
        alert("remember ! you must enter the artist's name, album title and price");
        tf.className = "valid";
        tfHelp.innerHTML = "";
        return true;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt").value = sessionStorage.data;
    }
}

window.onload = function () {
    document.getElementById("result").innerText = "You have just placed an order to purchase: " + sessionStorage.getItem("data");
}



function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt2").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt2").value = sessionStorage.data;
    }
}


function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt3").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt3").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt4").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt4").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt5").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt5").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt6").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt6").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt7").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt7").value = sessionStorage.data;
    }
}


function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt8").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt8").value = sessionStorage.data;
    }
}


function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt9").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt9").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt10").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt10").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt11").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt11").value = sessionStorage.data;
    }
}

function displayItems() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.data = document.getElementById("txt12").value;
    }
    else {
        alert("Not supported");
    }
}

function readInput() {
    if (sessionStorage.data) {
        document.getElementById("txt12").value = sessionStorage.data;
    }
}

window.onload = function () {
    document.getElementById("result").innerText = "You have just placed an order to purchase: " + sessionStorage.getItem("data");
}



