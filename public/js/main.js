//Main code for all the webpages
document.addEventListener("DOMContentLoaded", function(event) {
  const inputs = document.querySelectorAll(".input");

  focusMethodEmail = function getFocusEmail() {
    document.getElementById("email").focus();
  };

  focusMethodPassword = function getFocusPassword() {
    document.getElementById("password").focus();
  };

  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});
