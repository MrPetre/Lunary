//Main code for all the webpages
document.addEventListener("DOMContentLoaded", function(event) {
  const inputs = document.querySelectorAll(".input");

  focusMethodName = function getFocusName() {
    document.getElementById("name").focus();
  };

  focusMethodEmail = function getFocusEmail() {
    document.getElementById("email").focus();
  };

  focusMethodPassword = function getFocusPassword() {
    document.getElementById("password").focus();
  };

  focusMethodPassword2 = function getFocusPassword2() {
    document.getElementById("password2").focus();
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
