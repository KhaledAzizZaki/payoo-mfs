document
  .getElementById("btn-remove-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let pin = getInputValueById("cash-out-pin-number");
    let amount = getInputValueById("amount-remove");
    let balance = getInputTextById("balance");

    // console.log(pin, amount);
    let agent = document.getElementById("agent-number").value;

    if (agent.length == 11 && pin == 1234) {
      if (amount > 0 && amount < balance) {
        // console.log("good");
        let subtract = balance - amount;
        document.getElementById("balance").innerText = subtract;
        document.getElementById("amount-remove").value = "";
      } else {
        alert("Wrong Amount");
      }
    } else {
      alert("Wrong Pin or Number");
    }
  });
