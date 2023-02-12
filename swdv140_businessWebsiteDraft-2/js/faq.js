"use strict";

// the event handler for the click event of each h2 element
const toggle = (evt) => {
  const aElement = evt.currentTarget;
  const h2Element = aElement.parentNode;
  const divElement = h2Element.nextElementSibling;

  if (aElement.hasAttribute("class")) {
    aElement.removeAttribute("class");
  } else {
    aElement.className = "minus";
  }

  if (divElement.hasAttribute("class")) {
    divElement.removeAttribute("class");
  } else {
    divElement.className = "open";
  }

  evt.preventDefault(); // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
  // get the h2 tags
  const aElements = faqs.querySelectorAll("#faqs a");

  // attach event handler for each h2 tag
  for (let aElement of aElements) {
    aElement.addEventListener("click", toggle);
  }
  // set focus on first h2 tag's <a> tag
  aElements[0].firstChild.focus();
});
