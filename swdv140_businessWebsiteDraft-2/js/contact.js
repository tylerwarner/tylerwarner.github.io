"use strict";

const $ = (selector) => document.querySelector(selector);

// for Contact Form
const displayErrorMsgs = (msgs) => {
  const ul = document.createElement("ul");
  ul.classList.add("messages");

  for (let msg of msgs) {
    const li = document.createElement("li");
    const text = document.createTextNode(msg);
    li.appendChild(text);
    ul.appendChild(li);
  }

  const node = $("ul");
  if (node == null) {

    const form = $("form");

    form.parentNode.insertBefore(ul, form);
  } else {
    node.parentNode.replaceChild(ul, node);
  }
};

const processEntries = () => {
  const email = $("#email_address");
  const phone = $("#phone");
  const country = $("#country");
  const terms = $("#terms");
  const comments = $("#comments");

  const msgs = [];

  if (email.value == "") {
    msgs[msgs.length] = "Please enter an email address.";
  }
  if (phone.value == "") {
    msgs[msgs.length] = "Please enter a mobile phone number.";
  }
  if (country.value == "") {
    msgs[msgs.length] = "Please select a country.";
  }
  if (terms.checked == false) {
    msgs[msgs.length] = "You must agree to the terms of service.";
  }
  if (comments.value == "") {
    msgs[msgs.length] = "Please enter a comment.";
  }

  if (msgs.length == 0) {
    $("form").submit();
    alert(`Thanks for contacting us!`);
  } else {
    displayErrorMsgs(msgs);
  }
};

const resetForm = () => {
  $("form").reset();

  $("ul").remove();

  $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#submit").addEventListener("click", processEntries);
  $("#clear_contact_form").addEventListener("click", resetForm);
  $("#email_address").focus();
  
});


// for Newsletter Form

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        let errorMessage = "";

        if (email1.value == "") { 
            errorMessage += "First email is required.\n";
        }
    
        if (email2.value == "") { 
            errorMessage += "Confirm email is required.\n";
        }
    
        if (email1.value != email2.value) { 
            errorMessage += "Both emails must match.\n";
        }
    
        if (firstName.value == "") {
            errorMessage += "Name is required.\n";
        }
    
        if (errorMessage == "") {
            $("#email_form").submit();
            alert(`Thanks for joining our newsletter!`);
        } else {
            alert(errorMessage);            
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#first_name").focus();
    });
    
    $("#first_name").focus();
});