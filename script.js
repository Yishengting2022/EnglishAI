var stepone = document.getElementById("stepone");
var steptwo = document.getElementById("steptwo");
var stepthree = document.getElementById("stepthree");
var actionselection = document.getElementById("actionselection");

var thesisdiv = document.getElementById("thesisdiv");
var cthesisdiv = document.getElementById("cthesisdiv");
var summarizediv = document.getElementById("summarizediv");
var figurativediv = document.getElementById("figurativediv");
var literarydiv = document.getElementById("literarydiv");

var thesisinput = document.getElementById("thesisinput");
var cthesisinputfirst = document.getElementById("cthesisinputfirst");
var cthesisinputsecond = document.getElementById("cthesisinputsecond");
var summarizeinput = document.getElementById("summarizeinput");
var figurativeinput = document.getElementById("figurativeinput");
var literaryinputfirst = document.getElementById("literaryinputfirst");
var literaryinputsecond = document.getElementById("literaryinputsecond");

var figurativeselection = document.getElementById("figurativeselection");

var choice = document.getElementById("choice");
var response = document.getElementById("response");



function stepTwo() {
    stepone.classList.add("stylehidden");
    steptwo.classList.remove("stylehidden");

    if (actionselection.value == "1") {
        thesisdiv.classList.remove("stylehidden");
    }
    if (actionselection.value == "2") {
        cthesisdiv.classList.remove("stylehidden");
    }
    if (actionselection.value == "3") {
        summarizediv.classList.remove("stylehidden");
    }
    if (actionselection.value == "4") {
        figurativediv.classList.remove("stylehidden");
    }
    if (actionselection.value == "5") {
        literarydiv.classList.remove("stylehidden");
    }

}

function stepThree() {
    steptwo.classList.add("stylehidden");
    stepthree.classList.remove("stylehidden");
    if (actionselection.value == "1") {
        choice.innerText = "You chose to write a thesis for " + capitalizeTheFirstLetterOfEachWord(thesisinput.value);
        request("Write a literary thesis for " + thesisinput.value);
    }
    if (actionselection.value == "2") {
        choice.innerText = "You chose to write a thesis connecting " + capitalizeTheFirstLetterOfEachWord(cthesisinputfirst.value) + " and " + capitalizeTheFirstLetterOfEachWord(cthesisinputsecond.value);
        request("Write a thesis connecting " + cthesisinputfirst.value + " and " + cthesisinputsecond.value);
    }
    if (actionselection.value == "3") {
        choice.innerText = "You chose to summarize " + capitalizeTheFirstLetterOfEachWord(summarizeinput.value);
        request("Summarize the book " + summarizeinput.value);
    }
    if (actionselection.value == "4") {

        choice.innerText = "You chose to find " + figurativeselection.value + " in " + capitalizeTheFirstLetterOfEachWord(figurativeinput.value);
        request("What are examples of " + figurativeselection.value + " in " + figurativeinput.value);
    }
    if (actionselection.value == "5") {
        choice.innerText = "You chose to compare " + capitalizeTheFirstLetterOfEachWord(literaryinputfirst.value) + " and " + capitalizeTheFirstLetterOfEachWord(literaryinputsecond.value);
        request("Compare " + literaryinputfirst.value + " and " + literaryinputsecond.value);
    }
}

function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

function request(prompt) {
    var url = "https://englishaibackend.zachnology.com";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
       response.innerHTML = xhr.responseText;
   }};

var data = "prompt=" + prompt + "&authorized=yes";

xhr.send(data);
}