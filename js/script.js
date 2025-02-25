document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let number = document.getElementById("mobile-number").value;
    // console.log(typeof number);
    let pin = document.getElementById("pin-number").value;
    // console.log(typeof pin);

    if (number == "01012345678" && pin == 1234) {
      // console.log("Log In");
      window.location.href = "main.html";
    } else {
      alert("Wrong number or pin");
    }
  });
